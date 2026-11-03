/* Field Tracker – meetings (phone / WhatsApp / video link) with on-screen card + phone alarms; offline saving. */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
var MGR_PHONE='918811087925';
function isMgr(){return S.mgr&&!S.viewAs}
function atOf(m){return m.at||Date.parse(m.date+'T'+(m.time||'10:00')+':00+05:30')}
function when(m){var d=new Date(atOf(m)),now=Date.now(),mins=Math.round((atOf(m)-now)/60000);var day=m.date===TODAY?'Today':new Date(m.date+'T00:00:00').toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'});
  var tm=d.toLocaleTimeString('en-IN',{hour:'numeric',minute:'2-digit'});var rel=mins>0&&mins<180?' · in '+(mins<60?mins+' min':Math.floor(mins/60)+' h '+(mins%60)+' min'):mins<=0&&mins>-60?' · now':'';return day+', '+tm+rel}
var HOW={phone:['📞','Phone call'],whatsapp:['💬','WhatsApp call'],link:['🎥','Video meeting']};
var HOWTXT={phone:'on a phone call',whatsapp:'on a WhatsApp call',link:'on the meeting link'};
function clock(m){return new Date(atOf(m)).toLocaleTimeString('en-IN',{hour:'numeric',minute:'2-digit'})}
function dayTxt(m){return m.date===TODAY?'today':new Date(m.date+'T00:00:00').toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'short'})}
function msg(m){return 'You are asked to join '+(HOWTXT[m.how]||HOWTXT.phone)+' '+dayTxt(m)+' at '+clock(m)+(m.how==='link'?', as per the link and instructions':', as per instructions')+'.'+(m.agenda?' Agenda: '+m.agenda+'.':'')+(m.prep?' Please be prepared with: '+m.prep+'.':'')}
U.meetMsg=msg;
function joinUrl(m){return m.how==='phone'?'tel:+'+MGR_PHONE:m.how==='whatsapp'?'https://wa.me/'+MGR_PHONE:(m.link||'')}
function openUrl(u){if(!u)return;try{if(window.AndroidApp&&AndroidApp.open){AndroidApp.open(u);return}}catch(e){}try{window.open(u,'_blank')}catch(e){location.href=u}}
function mine(){return (S.entries||[]).filter(function(e){return e.type==='meeting'&&e.email===myEmail()&&atOf(e)>Date.now()-60*60000&&!e.cancelled}).sort(function(a,b){return atOf(a)-atOf(b)})}

var st=document.createElement('style');st.textContent=`
.meet{border-radius:18px;padding:14px;margin:0 0 12px;color:#fff;background:linear-gradient(135deg,#1E3A8A,#2F56C9 55%,#3FB3AC);box-shadow:0 10px 24px rgba(30,58,138,.3);animation:rise .35s ease both;position:relative;overflow:hidden}
.meet .k{font-size:12px;letter-spacing:1.4px;text-transform:uppercase;color:#FFE08A;font-weight:700;display:flex;gap:6px;align-items:center}
.meet h3{margin:6px 0 2px;font-size:18px}.meet .w{font-size:14px;opacity:.9}.meet .ag{font-size:13px;opacity:.85;margin-top:6px}
.meet .bt{display:flex;gap:8px;margin-top:12px}.meet .bt button{flex:1;border:0;border-radius:12px;padding:11px;font-weight:700;min-height:auto}
.meet .j{background:#FFE08A;color:#2B2000}.meet .prep{background:rgba(255,224,138,.16);border-left:3px solid #FFE08A;padding:8px 10px;border-radius:8px;opacity:1}.meet .a{background:rgba(255,255,255,.18);color:#fff}
.meet.now{animation:glow 1.6s ease infinite alternate}@keyframes glow{to{box-shadow:0 0 0 6px rgba(255,224,138,.45),0 10px 24px rgba(30,58,138,.3)}}
.qbox{display:grid;gap:6px}
`;document.head.appendChild(st);

/* ---------- CSO: meeting card(s) ---------- */
function card(m){var soon=atOf(m)-Date.now()<15*60000;var hw=HOW[m.how]||HOW.phone;
  return h('div',{class:'meet'+(soon?' now':'')},h('div',{class:'k'},'📅 Meeting with Ratan Roy'),h('h3',{},m.title||'Team meeting'),h('div',{class:'w'},hw[0]+' '+hw[1]+' · '+when(m)),
    h('div',{class:'ag'},'You are asked to join '+(HOWTXT[m.how]||HOWTXT.phone)+' '+dayTxt(m)+' at '+clock(m)+(m.how==='link'?', as per the link and instructions.':', as per instructions.')),
    m.agenda?h('div',{class:'ag'},h('b',{},'Agenda: '),m.agenda):'',
    m.prep?h('div',{class:'ag prep'},h('b',{},'Please be prepared with: '),m.prep):'',
    h('div',{class:'bt'},h('button',{class:'j',onclick:function(){if(!m.seen)try{S.db.collection('entries').doc(m._id).update({seen:Date.now()})}catch(e){}openUrl(joinUrl(m))}},m.how==='phone'?'📞 Call now':m.how==='whatsapp'?'💬 Open WhatsApp':'🎥 Join meeting')))}
function alarms(){try{if(!window.AndroidApp||!AndroidApp.meeting)return;mine().forEach(function(m){AndroidApp.meeting(String(m._id),atOf(m),'📅 '+(m.title||'Meeting with Ratan Roy'),msg(m))})}catch(e){}}

/* ---------- manager: schedule + status ---------- */
function scheduleSheet(){var cs=D.users.filter(function(u){return u.Role==='CSO'&&u.Status==='Active'});var f={how:'whatsapp',who:cs.map(function(u){return u.Email}),date:TODAY,time:'',title:'',link:'',agenda:'',prep:''};var body=h('div');
  function draw(){body.innerHTML='';var title=h('input',{value:f.title,placeholder:'e.g. POB review, MS-1 push'});title.oninput=function(){f.title=title.value};
    var dt=h('input',{type:'date',value:f.date});dt.onchange=function(){f.date=dt.value};var tm=h('input',{type:'time',value:f.time});tm.onchange=function(){f.time=tm.value};
    var link=h('input',{value:f.link,placeholder:'Paste Meet / Zoom / Teams link'});link.oninput=function(){f.link=link.value};var ag=h('input',{value:f.agenda,placeholder:'e.g. November POB review'});ag.oninput=function(){f.agenda=ag.value};var pr=h('input',{value:f.prep,placeholder:'e.g. MS-1 stock, POB of last 7 days (optional)'});pr.oninput=function(){f.prep=pr.value};
    body.append(h('label',{},'Topic',title),h('div',{style:'display:grid;grid-template-columns:1fr 1fr;gap:8px'},h('label',{},'Date',dt),h('label',{},'Time',tm)),
      h('small',{},'How'),h('div',{class:'chips'},Object.keys(HOW).map(function(k){return h('button',{class:f.how===k?'on':'',onclick:function(){f.how=k;draw()}},HOW[k][0]+' '+HOW[k][1])})),
      f.how==='link'?h('label',{},'Link',link):h('small',{style:'display:block;color:var(--muted)'},f.how==='phone'?'CSOs get a "Call now" button to your number.':'CSOs get an "Open WhatsApp" button to your WhatsApp.'),
      h('small',{},'Who'),h('div',{class:'chips'},[h('button',{class:f.who.length===cs.length?'on':'',onclick:function(){f.who=f.who.length===cs.length?[]:cs.map(function(u){return u.Email});draw()}},'Everyone')].concat(cs.map(function(u){var on=f.who.indexOf(u.Email)>=0;return h('button',{class:on?'on':'',onclick:function(){f.who=on?f.who.filter(function(x){return x!==u.Email}):f.who.concat([u.Email]);draw()}},u.Name.split(' ')[0])}))),
      h('label',{},'Agenda (optional)',ag),h('label',{},'Be prepared with (optional)',pr),
      h('button',{style:'width:100%;margin-top:8px',onclick:function(){if(!f.time){toast('Pick the time.');return}if(!f.who.length){toast('Pick who should join.');return}if(f.how==='link'&&!/^https?:\/\//.test(f.link)){toast('Paste the meeting link.');return}
        var at=Date.parse(f.date+'T'+f.time+':00+05:30'),mid='m'+Date.now();
        Promise.all(f.who.map(function(e){var u=cs.find(function(x){return x.Email===e});return S.db.collection('entries').add({type:'meeting',mid:mid,email:e,hq:u.HQ,name:u.Name,by:'Ratan Roy',ts:Date.now(),date:f.date,time:f.time,at:at,how:f.how,link:f.link,title:f.title||'Team meeting',agenda:f.agenda,prep:f.prep})}))
          .then(function(){close();toast('Meeting sent');render()},function(){toast('Not sent. Check internet.')})}},'📤 Send to CSOs'))}
  draw();var ov=h('div',{class:'ftsheet'},h('div',{class:'pn'},h('div',{class:'grab'}),h('div',{class:'hd'},h('b',{},'📅 Schedule a meeting'),h('button',{class:'ghost',onclick:function(){close()}},'✕')),body));function close(){ov.remove()}document.body.append(ov)}
U.scheduleMeeting=scheduleSheet;
function mgrPanel(){var L=(S.entries||[]).filter(function(e){return e.type==='meeting'&&atOf(e)>Date.now()-60*60000&&!e.cancelled}),G={};L.forEach(function(e){(G[e.mid]=G[e.mid]||[]).push(e)});
  var box=h('div',{class:'phase'},h('div',{class:'ph'},h('b',{},'📅 Meetings'),h('button',{style:'min-height:auto;padding:8px 12px',onclick:scheduleSheet},'+ Schedule')));
  var ids=Object.keys(G).sort(function(a,b){return atOf(G[a][0])-atOf(G[b][0])});if(!ids.length)box.append(h('small',{style:'color:var(--muted)'},'No meeting scheduled. Tap + Schedule – it appears on the CSOs\' screens with a phone alert, then reminders 15 minutes before and at the time.'));
  ids.forEach(function(id){var g=G[id],m=g[0];box.append(h('div',{class:'lrow',style:'cursor:default'},h('div',{class:'tx'},h('b',{},m.title+' · '+when(m)),h('small',{},(HOW[m.how]||HOW.phone)[1]+' · '+g.map(function(e){return e.name.split(' ')[0]}).join('  '))),
    h('button',{class:'ghost',style:'min-height:auto;padding:8px 10px',onclick:function(){if(!confirm('Cancel this meeting for everyone?'))return;Promise.all(g.map(function(e){return S.db.collection('entries').doc(e._id).update({cancelled:1})})).then(function(){toast('Meeting cancelled');render()})}},'✕')))});
  return box}

/* ---------- offline saving: entries wait on the phone and send themselves ---------- */
var QK='ft_outbox';function q(){try{return JSON.parse(U.lsGet(QK,'[]'))}catch(e){return[]}}function setQ(a){U.lsSet(QK,JSON.stringify(a))}
var baseSave=window.save;
if(typeof baseSave==='function'){window.save=save=function(type,fields){if(navigator.onLine===false&&!(fields&&fields.photos&&fields.photos.length)){var w=who();if(!w||isMgr())return baseSave(type,fields);
    var doc=Object.assign({type:type,email:w.Email,hq:w.HQ,name:w.Name,by:'',ts:Date.now(),date:TODAY,offline:1},fields);var a=q();a.push(doc);setQ(a);S.dirty=false;toast('📶 No network – saved on your phone. It will send itself.');U.play('ok');
    try{S.entries=(S.entries||[]).concat([doc])}catch(e){}return Promise.resolve(true)}return baseSave(type,fields)}}
function flush(quiet){var a=q();if(!a.length||!S.db||navigator.onLine===false)return Promise.resolve(a.length);var doc=a[0];return S.db.collection('entries').add(doc).then(function(){var b=q();b.shift();setQ(b);if(b.length)return flush(quiet);if(!quiet)toast('📶 Back online – '+a.length+' saved entr'+(a.length>1?'ies':'y')+' sent');return 0},function(){return q().length})}
U.flushOutbox=function(){return flush(true)};U.outboxCount=function(){return q().length};
window.addEventListener('online',function(){setTimeout(function(){flush()},1500)});setInterval(function(){flush()},60000);
function outboxNote(){var n=q().length;return n?h('div',{class:'note',style:'margin-bottom:10px'},'📶 '+n+' entr'+(n>1?'ies':'y')+' saved on your phone, waiting for network.'):''}

/* ---------- hooks ---------- */
var prevToday=U.today;U.today=function(app,tk,rest){prevToday&&prevToday(app,tk,rest);
  if(isMgr()){var tp=app.querySelector('.phase');var p=mgrPanel();if(tp)tp.before(p);else tk.after(p);return}
  var ms=mine().filter(function(m){return atOf(m)-Date.now()<36*3600000});var after=tk;ms.forEach(function(m){var c=card(m);after.after(c);after=c});var ob=outboxNote();if(ob)after.after(ob);alarms()};
setTimeout(function(){flush()},4000);
try{if(S.ready)render()}catch(e){}
})();
