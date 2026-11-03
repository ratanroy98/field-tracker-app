/* Field Tracker – clean layout: 5 tabs with sub-tabs, one "Next step" card on Today, Sync + Messages in the top bar.
   Loaded last: it rearranges what the other modules draw, so nothing is lost – it is just placed where it belongs. */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
function isMgr(){return S.mgr&&!S.viewAs}
var SYNC='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M3 21v-5h5"/></svg>';
var APK='https://github.com/ratanroy98/field-tracker-app/releases/download/latest/GuwahatiFieldTracker.apk';

var st=document.createElement('style');st.textContent=`
.ftick,#ftsync{display:none!important}
.fthead .ib.lx{display:none}
.fthead .acts{margin-left:auto;display:flex;gap:6px}
.fthead .hb{position:relative;width:40px;height:40px;min-height:auto;padding:0;border-radius:12px;border:0;background:rgba(255,255,255,.16);color:#fff;display:inline-flex;align-items:center;justify-content:center}
.fthead .hb.due{background:#F5C451;color:#2B2000;animation:ftpulse 1.4s ease-in-out infinite}
.fthead .hb.spin svg{animation:ftspin .9s linear infinite}
.fthead .hb .dot{position:absolute;top:-3px;right:-3px;width:11px;height:11px;border-radius:50%;background:#E5484D;border:2px solid #fff}
@keyframes ftspin{to{transform:rotate(360deg)}}@keyframes ftpulse{50%{box-shadow:0 0 0 6px rgba(245,196,81,.35)}}
.subtabs.l2{margin-top:-4px}.subtabs.l2 button{font-size:13px;padding:7px 12px}
.next{border-radius:20px;padding:16px;margin:0 0 12px;color:#fff;background:linear-gradient(135deg,var(--h1,#0F5257),var(--h3,#1B7F79));box-shadow:0 10px 26px rgba(0,0,0,.18);animation:rise .35s ease both}
.next .k{display:flex;justify-content:space-between;align-items:center;font-size:12px;letter-spacing:1.3px;text-transform:uppercase;color:var(--gold2,#F6D776);font-weight:700}
.next .k i{display:inline-flex;gap:4px}.next .k i b{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.3)}.next .k i b.on{background:var(--gold2,#F6D776)}
.next h3{margin:8px 0 4px;font-size:19px;line-height:1.25}.next p{margin:0;font-size:13.5px;opacity:.9;line-height:1.4}
.next button.go1{margin-top:12px;width:100%;border:0;border-radius:14px;padding:13px;font-weight:800;font-size:15.5px;background:var(--gold2,#F6D776);color:#2B2000;min-height:auto}
.next .lnk{display:block;text-align:center;margin-top:9px;font-size:12.5px;opacity:.85;text-decoration:underline;cursor:pointer}
.next.win{background:linear-gradient(135deg,#0B6B4F,#1B9E6E)}.next.wa{background:linear-gradient(135deg,#0B6B4F,#128C7E 60%,#25D366)}.next.wa button.go1{background:#fff;color:#0B6B4F}
.tline{display:flex;align-items:center;gap:10px;border-radius:14px;padding:12px 14px;margin:0 0 12px;background:var(--card,#fff);border:1px solid var(--line,#e5ece9);cursor:pointer;font-size:14px}
.tline b{font-size:15px}.tline .go{margin-left:auto;color:var(--muted)}
.qline{margin:0 0 12px;padding:12px 14px;border-radius:14px;background:var(--soft,#F2F5F4);font-size:14px;line-height:1.45}
.qline small{display:block;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:var(--accent);font-weight:700;margin-bottom:4px}
.upd{display:flex;align-items:center;gap:10px;border-radius:14px;padding:11px 12px;margin:0 0 12px;background:#E8F0FF;color:#1E3A8A;font-size:13.5px;text-decoration:none}
.upd b{display:block}.upd span.btn{margin-left:auto;background:#1E3A8A;color:#fff;border-radius:10px;padding:8px 12px;font-weight:700;white-space:nowrap}
`;document.head.appendChild(st);

/* ---------- which tab each screen belongs to ---------- */
var WORKR=['raft','deca','rloc','skin','dexona','stockists','stock','beat','tp'];
function tabFor(r){if(isMgr()){if(r==='home'||r==='mgr')return'team';if(r==='approve')return'approve';if(r==='meet')return'meet';if(r==='perf'||r==='mail')return'reports';if(r==='msgs'||r==='hof')return'me';if(r==='sell')return'sell';return'team'}
  if(r==='home')return'today';if(r==='sell')return'sell';if(r==='learn')return'learn';if(r==='perf'||r==='msgs'||r==='hof')return'me';return'work'}
function NAV(){return isMgr()?[['team','👥','Team',function(){go('home')}],['approve','✅','Approvals',function(){go('approve')}],['meet','📅','Meetings',function(){go('meet')}],['reports','📈','Reports',function(){go('perf')}],['me','👤','Me',function(){go(U.lsGet('ft_me','msgs'))}]]
  :[['today','🏠','Today',function(){go('home')}],['work','💼','Work',function(){go(U.lsGet('ft_work','raft'))}],['sell','🛒','Sell',function(){go('sell')}],['learn','🎓','Learn',function(){go('learn')}],['me','👤','Me',function(){go(U.lsGet('ft_me','perf'))}]]}
function nav(r){var cur=tabFor(r),pend=0,appr=0;
  try{if(!isMgr())TASKS.forEach(function(k){var l=k.status().level;if(l==='bad'||l==='todo')pend++});else appr=(S.entries||[]).filter(function(e){return (e.type==='brick_plan'||e.type==='beat_change'&&e.date>=TODAY)&&e.status==='pending'}).length}catch(e){}
  return h('nav',{class:'bnav'},NAV().map(function(it){var n=it[0]==='today'?pend:it[0]==='approve'?appr:0;return h('button',{class:cur===it[0]?'on':'',onclick:it[3]},h('span',{class:'ic'},it[1]),it[2],n?h('span',{class:'dot'},String(n)):'')}))}

/* ---------- sub-tab rows ---------- */
function tabs(list,cur,cls){return h('div',{class:'subtabs'+(cls?' '+cls:'')},list.map(function(x){return h('button',{class:x[0]===cur?'on':'',onclick:x[2]},x[1])}))}
function workTabs(r){var grp=r==='stockists'?'cust':(r==='tp'||r==='beat')?'tp':'ent';
  var top=tabs([['ent','Entries',function(){go(U.lsGet('ft_went','raft'))}],['cust','Customers',function(){go('stockists')}],['tp','TP & Brick',function(){go('tp')}],['req','Stock request',function(){U.stockSheet&&U.stockSheet()}]],grp);
  if(grp==='ent'){U.lsSet('ft_went',r);return[top,tabs([['raft','Raft'],['deca','Deca'],['rloc','R-Loc'],['skin','Skinlite'],['dexona','Dexona'],['stock','Stock statement']].map(function(x){return[x[0],x[1],function(){go(x[0])}]}),r,'l2')]}
  if(grp==='tp')return[top,tabs([['tp','TP calendar',function(){go('tp')}],['beat','Change brick',function(){go('beat')}]],r,'l2')];
  return[top]}
function meTabs(r){var L=isMgr()?[['msgs','Messages'],['hof','Hall of Fame'],['set','Settings']]:[['perf','Progress'],['msgs','Messages'],['hof','Hall of Fame'],['set','Settings']];
  return tabs(L.map(function(x){return[x[0],x[1],function(){if(x[0]==='set'){U.settings&&U.settings();return}U.lsSet('ft_me',x[0]);go(x[0])}]}),r)}

/* ---------- top bar: name · Sync · Messages · Settings ---------- */
function topbar(app,r){var hd=app.querySelector('.fthead .row');if(!hd||hd.querySelector('.acts'))return;
  hd.querySelectorAll('.ib').forEach(function(b){b.classList.add('lx')});
  var sb=h('button',{class:'hb',title:'Sync',onclick:function(){U.sync&&U.sync()}});sb.id='ftsynch';paintSync(sb);
  hd.append(h('div',{class:'acts'},sb,h('button',{class:'hb',title:'Messages',onclick:function(){U.lsSet('ft_me','msgs');go('msgs')}},'💬'),h('button',{class:'hb',title:'Settings',onclick:function(){U.settings&&U.settings()}},'⚙️')))}
function paintSync(b){b=b||document.getElementById('ftsynch');if(!b||!U.syncState)return;var s=U.syncState();var cls='hb'+(s.busy?' spin':s.due?' due':'');var html=SYNC+(s.unsent&&!s.busy?'<i class="dot"></i>':'');
  if(b.className!==cls)b.className=cls;if(b._h!==html){b.innerHTML=html;b._h=html}b.title=s.busy?'Syncing…':'Sync · '+s.ago}
setInterval(function(){paintSync()},1500);

/* ---------- Today: one "Next step" card ---------- */
function field(){try{var tp=tpFor(myEmail(),TODAY);return !tp||/Field|Joint/.test(tp.DayType||'')}catch(e){return true}}
function steps(app){var S0=U.syncState?U.syncState():{opened:true,unsent:false},L=[];
  var ci=!!(U.checkinToday&&U.checkinToday());var pend=[];try{TASKS.forEach(function(k){var s=k.status();if(s.level==='bad'||s.level==='todo')pend.push({k:k,s:s})})}catch(e){}
  pend.sort(function(a,b){return (a.s.level==='bad'?0:1)-(b.s.level==='bad'?0:1)});
  L.push({done:S0.opened,cls:'',t:'Sync to get today\'s latest',p:'Your plan, targets, meetings and messages from Ratan Roy.',b:'🔄 Sync now',f:function(){U.sync()}});
  L.push({done:!U.taskDue||!U.taskDue(),cls:'wa',t:'Read today\'s task and share it',p:'Share it to WhatsApp "Guwahati CSM Team" to confirm you have gone through the full task.',b:'Read & share',f:function(){U.taskSheet()}});
  if(field())L.push({done:ci,cls:'',t:'Start my day',p:'Confirm today\'s brick and take your selfie – one tap.',b:'📍 Start my day',f:function(){var c=app.querySelector('.hero .ci');if(c)c.click()}});
  var top=pend[0];L.push({done:!top,cls:'',t:top?top.k.t:'Entries',p:top?(top.s.why||'')+(pend.length>1?' · '+(pend.length-1)+' more after this':'')+'. Report in Ventasys first, then copy here.':'',b:'Open',f:function(){go(top.k.k)},lnk:pend.length>1?['See all '+pend.length+' tasks',function(){go(U.lsGet('ft_went','raft'))}]:null});
  L.push({done:!U.lessonDoneToday||U.lessonDoneToday(),cls:'',t:'Today\'s 3-minute lesson',p:(U.nextLesson&&U.nextLesson())||'From Ratan Roy',b:'🎓 Start lesson',f:function(){S.tab.learn='today';go('learn')}});
  return L}
function nextCard(app){var L=steps(app),i=L.findIndex(function(x){return!x.done}),S0=U.syncState?U.syncState():{};
  var dots=h('i',{},L.map(function(x,k){return h('b',{class:x.done?'on':''})}));
  if(i<0){if(S0.unsent)return h('div',{class:'next win'},h('div',{class:'k'},h('span',{},'All done'),dots),h('h3',{},'🎉 All tasks done – sync now'),h('p',{},'So Ratan Roy gets everything you did today.'),h('button',{class:'go1',onclick:function(){U.sync()}},'🔄 Sync now'));
    return h('div',{class:'next win'},h('div',{class:'k'},h('span',{},'All done'),dots),h('h3',{},'🎉 Great work today!'),h('p',{},'Everything is done and synced. Ratan Roy is proud of you.'))}
  var s=L[i],done=L.filter(function(x){return x.done}).length;
  return h('div',{class:'next '+s.cls},h('div',{class:'k'},h('span',{},'Next step · '+(done+1)+' of '+L.length),dots),h('h3',{},s.t),s.p?h('p',{},s.p):'',
    h('button',{class:'go1',onclick:s.f},s.b),s.lnk?h('a',{class:'lnk',onclick:s.lnk[1]},s.lnk[0]):(S0.unsent&&i>0?h('a',{class:'lnk',onclick:function(){U.sync()}},'You can sync now, or once everything is done'):''))}
function updBanner(){try{if(!window.AndroidApp||!AndroidApp.version)return'';if(+AndroidApp.version()>=5)return''}catch(e){return''}
  return h('a',{class:'upd',href:APK},h('div',{},h('b',{},'📲 New app version'),'Meeting alarms, selfie camera and WhatsApp sharing.'),h('span',{class:'btn'},'Update'))}
function quoteLine(){var qs=(U.C().quotes)||[];if(!qs.length)return'';return h('div',{class:'qline'},h('small',{},'Ratan Roy says'),qs[U.dayIdx()%qs.length])}

function todayCSO(app){var keep=[app.querySelector('.fthead')],hero=app.querySelector('.hero'),meets=[].slice.call(app.querySelectorAll('.meet')),hof=app.querySelector('.hof'),ob=[].slice.call(app.querySelectorAll('.note')).filter(function(n){return /saved on your phone/.test(n.textContent)})[0],nav0=app.querySelector('.bnav');
  var pend=0;try{TASKS.forEach(function(k){var l=k.status().level;if(l==='bad'||l==='todo')pend++})}catch(e){}
  [].slice.call(app.children).forEach(function(c){if(keep.indexOf(c)<0)c.remove()});
  var u=updBanner(),list=[u,nextCard(app),meets,hero,ob,pend?h('div',{class:'tline',onclick:function(){go(U.lsGet('ft_went','raft'))}},'📋',h('div',{},h('b',{},pend+' task'+(pend>1?'s':'')+' pending'),h('small',{style:'display:block;color:var(--muted)'},'Open Work to finish them')),h('span',{class:'go'},'›')):'',hof,quoteLine()];
  [].concat.apply([],list).forEach(function(n){if(n)app.append(n)})}
function todayMgr(app){var keep=[app.querySelector('.fthead')];var team=U.teamPanel?U.teamPanel():null,share=[].slice.call(app.querySelectorAll('.tdone'))[0],hof=app.querySelector('.hof');
  [].slice.call(app.children).forEach(function(c){if(keep.indexOf(c)<0)c.remove()});
  [team,share,hof,quoteLine()].forEach(function(n){if(n)app.append(n)})}

/* ---------- manager routes ---------- */
U.routes.approve=function(app){var p=U.pendingPlans?U.pendingPlans():null;if(p&&p.children.length)app.append(p);else app.append(h('div',{class:'note'},'✅ Nothing waiting for your approval.'));
  try{var reqs=(S.entries||[]).filter(function(e){return e.type==='stock_request'&&e.status!=='sent'});if(reqs.length)app.append(h('div',{class:'note'},'📦 '+reqs.length+' stock request(s) – see Team.'))}catch(e){}};
U.routes.meet=function(app){if(U.meetPanel)app.append(U.meetPanel())};
U.routes.sell=function(app){U.vProd(app)};

/* ---------- apply after every screen is drawn ---------- */
var prevAfter=U.after;U.after=function(app,r){prevAfter&&prevAfter(app,r);if(document.getElementById('ftlogin'))return;
  try{topbar(app,r);var t=tabFor(r),hd=app.querySelector('.fthead');
    if(r==='home'){if(isMgr())todayMgr(app);else todayCSO(app)}
    // replace the old sub-tab row on Work screens
    if(t==='work'){U.lsSet('ft_work',r);var old=app.querySelector('.fthead~.subtabs');if(old&&old.textContent.indexOf('Raft')>=0&&!old.classList.contains('l2'))old.remove();var rows=workTabs(r);var after=hd;rows.forEach(function(x){after.after(x);after=x})}
    if(t==='me'){var mt=meTabs(r);hd.after(mt);if(r==='perf')app.querySelectorAll('.hof').forEach(function(x){x.remove()})}
    var nb=app.querySelector('.bnav');if(nb)nb.replaceWith(nav(r));else app.append(nav(r))}catch(e){try{console.log('layout',e)}catch(_){}}};
var pt=U.tabOfX||{};['sell','approve','meet','hof'].forEach(function(k){pt[k]=k});U.tabOfX=pt;
try{if(S.ready)render()}catch(e){}
})();
