/* Field Tracker – Daily task: read today's task from Ratan, then share it to the WhatsApp group "Guwahati CSM Team".
   Pops up on opening until shared; the phone keeps reminding (every 30 min, 8 AM–9 PM) until it is shared. */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
var GROUP='Guwahati CSM Team';
function isMgr(){return S.mgr&&!S.viewAs}
function sharedToday(){try{return todays('task_share').length>0||U.lsGet('ft_tshare_'+TODAY,'')==='1'}catch(e){return false}}
function hourIST(){return new Date().getHours()}
function due(){return !isMgr()&&!sharedToday()&&hourIST()>=7&&new Date().getDay()!==0}
function rs(v){return '₹'+Math.round(v||0).toString().replace(/(\d)(?=(\d\d)+\d$)/g,'$1,')}
function planMsg(){try{var w=who();return (S.msgs||[]).filter(function(m){return m.email===w.Email&&m.date===TODAY&&m.slot!=='8pm'}).sort(function(a,b){return b.ts-a.ts})[0]}catch(e){return null}}
function body(){var m=planMsg();if(m&&m.text)return m.text;
  // No message from Ratan yet: build today's task from the app's own data.
  var w=who(),L=[],f=(S.feeds||{})['pob_'+w.HQ];var dt=new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short'});
  L.push('🎯 '+dt+' – '+String(w.HQ).toUpperCase()+(f&&f.dailyNeed?' | POB target '+rs(f.dailyNeed):''));
  try{var b=brickToday();if(b)L.push('📍 Brick: '+b)}catch(e){}
  if(f&&f.target60)L.push('Month: '+rs(f.done)+' of '+rs(f.target60));
  try{(typeof TASKS!=='undefined'?TASKS:[]).forEach(function(t){var s=t.status();if(s.level==='na')return;L.push((s.level==='ok'?'✅ ':'☐ ')+t.t+(s.level!=='ok'&&s.why?' – '+s.why:''))})}catch(e){}
  L.push('⏰ Enter all POB, inputs and reasons by 8 PM.');return L.join('\n')}
function shareText(){var w=who();return '📋 Daily task – '+w.Name+', '+w.HQ+'\n\n'+body()+'\n\n✅ I have read today\'s full task and will complete it.'}

var st=document.createElement('style');st.textContent=`
.tasknag{border-radius:18px;padding:14px;margin:0 0 12px;color:#fff;background:linear-gradient(135deg,#0B6B4F,#128C7E 60%,#25D366);box-shadow:0 10px 24px rgba(18,140,126,.3);animation:rise .35s ease both}
.tasknag .k{font-size:12px;letter-spacing:1.3px;text-transform:uppercase;color:#D8FFE6;font-weight:700}
.tasknag h3{margin:6px 0 4px;font-size:18px}.tasknag p{margin:0;font-size:13.5px;opacity:.92}
.tasknag button{margin-top:12px;width:100%;border:0;border-radius:12px;padding:12px;font-weight:800;background:#fff;color:#0B6B4F;min-height:auto}
.tview{white-space:pre-wrap;background:var(--soft,#F2F5F4);border-radius:12px;padding:12px;font-size:14.5px;line-height:1.5;max-height:46vh;overflow:auto;margin:6px 0 10px}
.wabtn{width:100%;border:0;border-radius:14px;padding:14px;font-weight:800;font-size:16px;background:#25D366;color:#063;display:flex;gap:8px;align-items:center;justify-content:center;min-height:auto}
.tdone{display:flex;gap:10px;align-items:center;border-radius:14px;padding:10px 12px;margin:0 0 12px;background:#E7F8EE;color:#0B6B4F;font-size:13.5px}
`;document.head.appendChild(st);
var WA='<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>';

function doShare(){var t=shareText();
  try{if(window.AndroidApp&&AndroidApp.shareWhatsApp){AndroidApp.shareWhatsApp(t)}else window.open('https://wa.me/?text='+encodeURIComponent(t),'_blank')}catch(e){try{location.href='https://wa.me/?text='+encodeURIComponent(t)}catch(_){}}
  U.lsSet('ft_tshare_'+TODAY,'1');
  var w=who();try{S.db.collection('entries').add({type:'task_share',email:w.Email,hq:w.HQ,name:w.Name,by:'',ts:Date.now(),date:TODAY,group:GROUP}).catch(function(){})}catch(e){}
  setTimeout(function(){var o=document.querySelector('.ftsheet.tsheet');if(o)o.remove();try{render()}catch(e){}},800)}

function sheet(){if(document.querySelector('.ftsheet.tsheet'))return;
  var ov=h('div',{class:'ftsheet tsheet'},h('div',{class:'pn'},h('div',{class:'grab'}),
    h('div',{class:'hd'},h('b',{},'📋 Today\'s task from Ratan Roy'),h('button',{class:'ghost',onclick:function(){ov.remove()}},'✕')),
    h('small',{style:'color:var(--muted)'},'Read the full task, then share it to the WhatsApp group.'),
    h('div',{class:'tview'},body()),
    (function(){var b=h('button',{class:'wabtn',onclick:doShare});b.innerHTML=WA+'<span>Share to WhatsApp – '+GROUP+'</span>';return b})(),
    h('small',{style:'display:block;text-align:center;margin-top:8px;color:var(--muted)'},'WhatsApp opens – pick "'+GROUP+'" and tap Send.')));
  document.body.append(ov)}
U.taskSheet=sheet;

var prevToday=U.today;U.today=function(app,tk,rest){prevToday&&prevToday(app,tk,rest);if(isMgr()){mgrLine(app);return}
  var c;if(due())c=h('div',{class:'tasknag'},h('div',{class:'k'},'📋 Daily task'),h('h3',{},'Read today\'s task and share it'),h('p',{},'Share it to WhatsApp "'+GROUP+'" to confirm you have gone through the full task for today.'),h('button',{onclick:sheet},'Read & share'));
  else if(sharedToday())c=h('div',{class:'tdone'},'✅ Today\'s task shared to '+GROUP+'.');
  if(c){var top=app.querySelector('.syncnote')||app.querySelector('.meet')||tk;if(top&&top.parentNode)top.before(c);else app.prepend(c)}};

/* manager: who has shared today */
function mgrLine(app){try{var cs=D.users.filter(function(u){return u.Role==='CSO'&&u.Status==='Active'});var done=(S.entries||[]).filter(function(e){return e.type==='task_share'&&e.date===TODAY}).map(function(e){return e.email});
  var n=h('div',{class:'tdone',style:'flex-wrap:wrap'},h('b',{},'📋 Daily task shared: '),cs.map(function(u){return h('span',{},u.Name.split(' ')[0]+(done.indexOf(u.Email)>=0?' ✅':' ⏳')+'  ')}));var p=app.querySelector('.phase');if(p)p.before(n)}catch(e){}}

/* pop up on opening, once per open, until shared */
var popped=false;function autoPop(){if(popped||typeof S==='undefined'||!S.db||!due())return;if(document.querySelector('.ftsheet')||document.getElementById('ftlogin')||document.querySelector('div.fame'))return;
  popped=true;sheet()}
setInterval(autoPop,2000);
document.addEventListener('visibilitychange',function(){if(!document.hidden)popped=false});
try{if(S.ready)render()}catch(e){}
})();
