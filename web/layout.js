/* Field Tracker – clean layout: 5 tabs with sub-tabs, one "Next step" card on Today, Sync + Messages in the top bar.
   Loaded last: it rearranges what the other modules draw, so nothing is lost – it is just placed where it belongs. */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
function isMgr(){return S.mgr&&!S.viewAs}
/* Less typing: the CSO's calls, POB, inputs, NPD and wholesalers already go into Ventasys and reach Ratan from there,
   so the app never nags them to re-type those. Only genuinely app-only, one-tap actions are nudged on Today. */
var NONAG={raft:1,deca:1,rloc:1,skin:1,dexona:1,stock:1,stockists:1,beat:1};
U.nagList=function(){var o=[];try{(typeof TASKS!=='undefined'?TASKS:[]).forEach(function(k){if(NONAG[k.k])return;var s=k.status();if(s.level==='bad'||s.level==='todo')o.push({k:k,s:s})})}catch(e){}return o};
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
.salestop .tbl{overflow:visible}.salestop table{width:100%}.salestop td,.salestop th,.salestop .num{font-size:11.5px!important;padding:7px 3px!important;letter-spacing:-.2px;white-space:nowrap}.salestop td:first-child{white-space:normal}
.upd b{display:block}.upd span.btn{margin-left:auto;background:#1E3A8A;color:#fff;border-radius:10px;padding:8px 12px;font-weight:700;white-space:nowrap}
.coachc{border-radius:16px;padding:13px 15px;margin:0 0 12px;background:linear-gradient(135deg,#FFF4D6,#FDE8B8);border:1px solid #F0D18A;color:#5A4300}
.coachc .k{font-weight:800;font-size:14.5px;display:flex;align-items:center;gap:7px}
.coachc p{margin:5px 0 0;font-size:13px;line-height:1.45;color:#6a5320}
.coachc .big2{font-size:22px;font-weight:800}
`;document.head.appendChild(st);

/* ---------- which tab each screen belongs to ---------- */
var WORKR=['raft','deca','rloc','skin','dexona','samples','stockists','stock','beat','tp'];
function tabFor(r){if(isMgr()){if(r==='home'||r==='mgr')return'team';if(r==='approve')return'approve';if(r==='meet')return'meet';if(r==='geo'||r==='perf'||r==='mail')return'reports';if(r==='msgs'||r==='hof')return'me';if(r==='sell')return'sell';return'team'}
  if(r==='home')return'today';if(r==='sell')return'sell';if(r==='learn')return'learn';if(r==='perf'||r==='msgs'||r==='hof')return'me';return'work'}
function NAV(){return isMgr()?[['team','👥','Team',function(){go('home')}],['approve','✅','Approvals',function(){go('approve')}],['meet','📅','Meetings',function(){go('meet')}],['reports','📈','Reports',function(){go('geo')}],['me','👤','Me',function(){go(U.lsGet('ft_me','msgs'))}]]
  :[['today','🏠','Today',function(){go('home')}],['work','💼','Work',function(){go(U.lsGet('ft_work','raft'))}],['sell','🛒','Sell',function(){go('sell')}],['learn','🎓','Learn',function(){go('learn')}],['me','👤','Me',function(){go(U.lsGet('ft_me','perf'))}]]}
function nav(r){var cur=tabFor(r),pend=0,appr=0;
  try{if(!isMgr())pend=U.nagList().length;else appr=(S.entries||[]).filter(function(e){return (e.type==='brick_plan'||e.type==='beat_change'&&e.date>=TODAY)&&e.status==='pending'}).length}catch(e){}
  return h('nav',{class:'bnav'},NAV().map(function(it){var n=it[0]==='today'?pend:it[0]==='approve'?appr:0;return h('button',{class:cur===it[0]?'on':'',onclick:it[3]},h('span',{class:'ic'},it[1]),it[2],n?h('span',{class:'dot'},String(n)):'')}))}

/* ---------- sub-tab rows ---------- */
function tabs(list,cur,cls){return h('div',{class:'subtabs'+(cls?' '+cls:'')},list.map(function(x){return h('button',{class:x[0]===cur?'on':'',onclick:x[2]},x[1])}))}
function workTabs(r){var grp=r==='stockists'?'cust':(r==='tp'||r==='beat')?'tp':'ent';
  var top=tabs([['ent','Entries',function(){go(U.lsGet('ft_went','raft'))}],['cust','Customers',function(){go('stockists')}],['tp','TP & Brick',function(){go('tp')}],['req','Stock request',function(){U.stockSheet&&U.stockSheet()}]],grp);
  if(grp==='ent'){if(r!=='samples')U.lsSet('ft_went',r);return[top,tabs([['raft','Raft'],['deca','Deca'],['rloc','R-Loc'],['skin','Skinlite'],['dexona','Dexona'],['samples','💉 All samples'],['stock','Stock statement']].map(function(x){return[x[0],x[1],function(){go(x[0])}]}),r,'l2')]}
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
  var ci=!!(U.checkinToday&&U.checkinToday());var pend=U.nagList();
  pend.sort(function(a,b){return (a.s.level==='bad'?0:1)-(b.s.level==='bad'?0:1)});
  L.push({done:S0.opened,cls:'',t:'Sync to get today\'s latest',p:'Your plan, targets, meetings and messages from Ratan Roy.',b:'🔄 Sync now',f:function(){U.sync()}});
  L.push({done:!U.taskDue||!U.taskDue(),cls:'wa',t:'Read today\'s task and share it',p:'Share it to WhatsApp "Guwahati CSM Team" to confirm you have gone through the full task.',b:'Read & share',f:function(){U.taskSheet()}});
  if(field())L.push({done:ci,cls:'',t:'Start my day',p:'Confirm today\'s brick and take your selfie – one tap.',b:'📍 Start my day',f:function(){var c=app.querySelector('.hero .ci');if(c)c.click()}});
  if(pend.length){var top=pend[0];L.push({done:false,cls:'',t:top.k.t,p:(top.s.why||'')+(pend.length>1?' · '+(pend.length-1)+' more after this':''),b:'Open',f:function(){go(top.k.k)},lnk:pend.length>1?['See all '+pend.length+' tasks',function(){go(U.lsGet('ft_went','raft'))}]:null});}
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
/* Guide, don't collect.
   FRONT SCREEN: for each doctor / chemist / wholesaler on today's list, tell them what to hand over, then report in Ventasys.
   BRAND TAB + SAMPLES: show the total inputs / samples of that category the CSO is holding.
   Counts come from feed inbal_<HQ> {asOf, items:[{name, qty, brand, kind:'input'|'sample'}]} (evening review, from the Ventasys input-tracking / in-hand file). */
function brickNames(codes,brick){try{if(typeof CUST==='undefined')return[];return (codes||[]).filter(function(c){return CUST[c]&&CUST[c].brick===brick}).map(function(c){return CUST[c].name})}catch(e){return[]}}
function nameList(a,n){n=n||5;return a.slice(0,n).join(', ')+(a.length>n?' +'+(a.length-n)+' more':'')}
function handoverCard(){try{if(isMgr())return'';
  var brick=(typeof brickToday==='function'&&brickToday())||'';
  var lines=[];
  [['Rloc Raft','the Raft input'],['Deca Durabolin','the Deca input'],['Rloc Tablets','the R-Loc gift']].forEach(function(x){
    if(typeof drListFor!=='function')return;var L=drListFor(x[0]);if(!L||L.status!=='approved')return;
    var docs=brickNames(L.doctors,brick);if(docs.length)lines.push('Hand over '+x[1]+' to '+nameList(docs)+', then report the Rx in Ventasys.')});
  try{var nk=Object.keys(S.feeds||{}).filter(function(z){return z.indexOf('npd_')===0})[0];var nf=nk?S.feeds[nk]:null;
    var outs=nf?brickNames(nf.codes,brick):[];if(outs.length)lines.push('Give Skinlite Facewash/Day Care to '+nameList(outs)+', then report the order in Ventasys.')}catch(e){}
  if(!lines.length){return h('div',{class:'coachc'},h('div',{class:'k'},'📲 Report in Ventasys as you go'),h('p',{},'As you meet each doctor, chemist and wholesaler on today\'s list, hand over your inputs and samples and enter the Rx, input or order in Ventasys the same day. The app will tell you exactly what to give to whom.'));}
  var box=h('div',{class:'coachc'},h('div',{class:'k'},'📋 Today'+(brick?' · '+brick:'')+' — hand over, then report in Ventasys'));
  lines.forEach(function(t){box.append(h('p',{},'• '+t))});
  box.append(h('p',{style:'margin-top:7px;font-weight:700;color:#5A4300'},'Then visit your chemists and wholesalers on the list, hand over their inputs and report each order in Ventasys.'));
  return box;
}catch(e){return''}}
/* Count of inputs/samples of one brand still with the CSO – shown on that brand's Work tab and in Samples. */
function brandInputs(brand){try{if(isMgr())return'';
  var k=Object.keys(S.feeds||{}).filter(function(x){return x.indexOf('inbal_')===0})[0];var f=k?S.feeds[k]:null;
  if(!f){return h('div',{class:'coachc'},h('div',{class:'k'},'📲 Hand over & report in Ventasys'),h('p',{},'Give your '+brand+' inputs and samples to today\'s doctors and chemists on the list, and report each in Ventasys the same day.'));}
  var items=(f.items||[]).filter(function(x){return x.brand===brand});
  var inp=items.filter(function(x){return (x.kind||'input')!=='sample'}).reduce(function(a,x){return a+(+x.qty||0)},0);
  var smp=items.filter(function(x){return x.kind==='sample'}).reduce(function(a,x){return a+(+x.qty||0)},0);
  if(!inp&&!smp){return h('div',{class:'coachc',style:'background:linear-gradient(135deg,#E8F6EE,#D6F0E0);border-color:#9FD9B6;color:#13684A'},h('div',{class:'k'},'✅ '+brand+' — all handed over'),h('p',{style:'color:#1b6b4a'},'No '+brand+' inputs or samples lying with you.'));}
  var names=items.filter(function(x){return (+x.qty||0)>0}).slice(0,6).map(function(x){return x.name+' ×'+x.qty}).join(', ');
  return h('div',{class:'coachc'},h('div',{class:'k'},'📦 You hold ',h('span',{class:'big2'},String(inp)),' '+brand+' input'+(inp===1?'':'s')+(smp?' · '+smp+' sample'+(smp===1?'':'s'):'')),
    h('p',{},(names?names+'. ':'')+'Hand these over to today\'s '+brand+' doctors and chemists on the list, and report each in Ventasys the same day.'+(f.asOf?' As of '+f.asOf+'.':'')));
}catch(e){return''}}
U.handoverCard=handoverCard;U.brandInputs=brandInputs;

/* Inputs & samples: SHOW only (never fill — Ventasys records it). Who it was given to, what, and what is still lying. From the InputTracking feed. */
function inputsFeed(){try{var k=Object.keys(S.feeds||{}).filter(function(z){return z.indexOf('inputs_')===0})[0];return k?S.feeds[k]:null}catch(e){return null}}
var FEEDBRAND={raft:'R-Loc',deca:'Deca Durabolin',rloc:'R-Loc',skin:'Skinlite',dexona:'Dexona'};
function qlist(arr,withTo){return arr.map(function(x){return (withTo&&x.to?x.to+' — ':'')+x.it+' ×'+x.q}).join(' · ')}
function inputProgress(routeOrBrand){try{if(isMgr())return'';
  var f=inputsFeed(),brand=FEEDBRAND[routeOrBrand]||routeOrBrand;
  if(!f||!f.brands)return brandInputs(brand);
  var b=f.brands[brand];
  if(!b||(!b.gi.length&&!b.gs.length&&!b.li.length&&!b.ls.length))
    return h('div',{class:'coachc',style:'background:linear-gradient(135deg,#E8F6EE,#D6F0E0);border-color:#9FD9B6'},h('div',{class:'k',style:'color:#13684A'},'✅ '+brand+' — nothing lying with you'),h('p',{style:'color:#1b6b4a'},'No '+brand+' inputs or samples pending with you.'));
  var out=h('div',{class:'coachc'},h('div',{class:'k'},'📦 '+brand+' — given & what\'s left'+(f.asOf?' · as of '+f.asOf:'')));
  if(b.li.length)out.append(h('p',{},h('b',{},'Still with you: '),qlist(b.li,false),'. Hand over to your listed doctors/chemists — Ventasys records it.'));
  if(b.gi.length)out.append(h('p',{style:'color:var(--muted)'},'Given: '+qlist(b.gi,true)));
  if(!b.li.length&&!b.gi.length)out.append(h('p',{},'No '+brand+' inputs lying with you. (Samples are in the All samples tab.)'));
  return out;
}catch(e){return brandInputs(routeOrBrand)}}
function inputsTop(){try{if(isMgr())return'';var f=inputsFeed();if(!f||!f.brands)return'';
  var pend=[];Object.keys(f.brands).forEach(function(b){if(b==='General')return;var x=f.brands[b];var n=(x.li||[]).reduce(function(a,y){return a+(y.q||0)},0);if(n)pend.push({b:b,n:n})});
  if(!pend.length)return'';pend.sort(function(a,b){return b.n-a.n});
  return h('div',{class:'coachc'},h('div',{class:'k'},'📦 Inputs still to hand over — brand-wise'),h('p',{},pend.map(function(p){return p.b+' ('+p.n+')'}).join(' · ')+'. Give to your listed doctors & chemists — it records in Ventasys. Nothing to type here.'));
}catch(e){return''}}
/* All samples in one place (not brand-split): to whom given + what is pending. Read-only. */
function allSamples(app){try{var f=inputsFeed();
  app.append(h('div',{class:'coachc'},h('div',{class:'k'},'💉 All samples'+(f&&f.asOf?' · as of '+f.asOf:'')),h('p',{},'To whom given and what is pending. Nothing to fill here — Ventasys records samples.')));
  if(!f||!f.brands){app.append(h('div',{class:'coachc'},h('p',{},'Sample details appear after a Sync.')));return}
  var given=[],pend={};
  Object.keys(f.brands).forEach(function(b){var x=f.brands[b];
    (x.gs||[]).forEach(function(g){given.push(g)});
    (x.ls||[]).forEach(function(l){pend[l.it]=(pend[l.it]||0)+l.q})});
  var pk=Object.keys(pend);
  if(pk.length)app.append(h('div',{class:'coachc'},h('div',{class:'k'},'⏳ Pending with you'),h('p',{},pk.map(function(k){return k+' ×'+pend[k]}).join(' · '))));
  var withTo=given.filter(function(g){return g.to&&g.to!=='Not recorded'});
  if(withTo.length){var box=h('div',{class:'coachc'},h('div',{class:'k'},'✅ Given so far'));withTo.forEach(function(g){box.append(h('p',{style:'margin:3px 0'},h('b',{},g.to),' — '+g.it+' ×'+g.q))});app.append(box)}
  if(!pk.length&&!withTo.length)app.append(h('div',{class:'coachc',style:'background:linear-gradient(135deg,#E8F6EE,#D6F0E0);border-color:#9FD9B6'},h('p',{style:'color:#1b6b4a'},'No samples pending with you.')));
}catch(e){app.append(h('div',{class:'note'},'Could not load samples: '+e.message))}}
U.inputProgress=inputProgress;U.inputsTop=inputsTop;U.allSamples=allSamples;U.routes.samples=function(app){allSamples(app)};

/* WORK tab, brand pages: nothing to FILL here (Ventasys already collects it and we pull it in).
   We only SHOW the status — listed doctors, given to date, what is lying — and point to Ventasys. */
function workStatus(app,r){
  var BM={raft:'Rloc Raft',deca:'Deca Durabolin',rloc:'Rloc Tablets',skin:'Skinlite',dexona:'Dexona'},
      LM={raft:'Raft',deca:'Deca',rloc:'R-Loc',skin:'Skinlite',dexona:'Dexona'},
      brand=BM[r]||r,label=LM[r]||r,brick=(typeof brickToday==='function'&&brickToday())||'';
  app.append(h('div',{class:'coachc'},h('div',{class:'k'},'📋 '+label+' — nothing to fill here'),h('p',{},'Ventasys already records your '+label+' calls, inputs, Rx and orders, and we pull them into this app. So there is nothing to enter here — this screen only shows where you stand and who to finish with.')));
  var inb=inputProgress(r);if(inb)app.append(inb);
  try{if(typeof drListFor==='function'){var L=drListFor(brand);if(L&&L.status==='approved'){var all=L.doctors||[],inBrick=(typeof brickNames==='function')?brickNames(all,brick):[];
    app.append(h('div',{class:'coachc'},h('div',{class:'k'},'👨‍⚕️ Your listed '+label+' doctors'),h('p',{},(inBrick.length?'In '+brick+' today: '+nameList(inBrick)+'. ':'')+'Total listed: '+all.length+' doctor'+(all.length===1?'':'s')+'. Hand '+label+' to them and report the Rx in Ventasys.')))}}}catch(e){}
  app.append(h('div',{class:'coachc',style:'background:linear-gradient(135deg,#E8F6EE,#D6F0E0);border-color:#9FD9B6'},h('div',{class:'k',style:'color:#13684A'},'✅ Finish '+label+' brand-wise'),h('p',{style:'color:#1b6b4a'},'Give the remaining '+label+' inputs and samples to the doctors and chemists above, then report each in Ventasys the same day.')));
}
U.workStatus=workStatus;
['raft','deca','rloc','skin','dexona'].forEach(function(k){U.routes[k]=function(app){workStatus(app,k)}});

function todayCSO(app){var keep=[app.querySelector('.fthead')],hero=app.querySelector('.hero'),meets=[].slice.call(app.querySelectorAll('.meet')),hof=app.querySelector('.hof'),ob=[].slice.call(app.querySelectorAll('.note')).filter(function(n){return /saved on your phone/.test(n.textContent)})[0],nav0=app.querySelector('.bnav');
  var pend=U.nagList().length;
  [].slice.call(app.children).forEach(function(c){if(keep.indexOf(c)<0)c.remove()});
  var u=updBanner(),list=[u,(U.inputsTop&&U.inputsTop())||"",(U.nextMoveCard&&U.nextMoveCard())||"",(U.earnCard&&U.earnCard())||"",(U.teamCard&&U.teamCard())||"",nextCard(app),handoverCard(),meets,hero,ob,pend?h('div',{class:'tline',onclick:function(){go(U.lsGet('ft_went','raft'))}},'📋',h('div',{},h('b',{},pend+' task'+(pend>1?'s':'')+' pending'),h('small',{style:'display:block;color:var(--muted)'},'Open Work to finish them')),h('span',{class:'go'},'›')):'',hof,quoteLine()];
  [].concat.apply([],list).forEach(function(n){if(n)app.append(n)})}
function todayMgr(app){var keep=[app.querySelector('.fthead')];var team=U.teamPanel?U.teamPanel():null,share=[].slice.call(app.querySelectorAll('.tdone'))[0],hof=app.querySelector('.hof');
  [].slice.call(app.children).forEach(function(c){if(keep.indexOf(c)<0)c.remove()});
  [team,share,hof,quoteLine()].forEach(function(n){if(n)app.append(n)})}

/* ---------- manager routes ---------- */
U.routes.approve=function(app){var p=U.pendingPlans?U.pendingPlans():null;if(p&&p.children.length)app.append(p);else app.append(h('div',{class:'note'},'✅ Nothing waiting for your approval.'));
  try{var reqs=(S.entries||[]).filter(function(e){return e.type==='stock_request'&&e.status!=='sent'});if(reqs.length)app.append(h('div',{class:'note'},'📦 '+reqs.length+' stock request(s) – see Team.'))}catch(e){}};
U.routes.meet=function(app){if(U.meetPanel)app.append(U.meetPanel())};
U.routes.sell=function(app){U.vProd(app)};

/* ---------- manager: cumulative company sales at the top of Reports ---------- */
var HQS=['Agartala','Bongaigaon','Dhubri','Guwahati'];
function rsx(v){return (v<0?'–':'')+'₹'+Math.abs(Math.round(v||0)).toLocaleString('en-IN')}
function salesTop(){var T={net:0,tgt:0,gross:0,cl:0},asOf='',hasG=true,rows=[];
  HQS.forEach(function(q){var f=S.feeds['ach_'+q]||{},tg=(typeof TGT!=='undefined'&&TGT[q]&&TGT[q].Total)||((S.feeds['incq_'+q]||{}).novT)||0;
    if(f.asOf)asOf=f.asOf;if(f.gross==null)hasG=false;var n=f.total||0;T.net+=n;T.tgt+=tg;T.gross+=f.gross||0;T.cl+=f.claims||0;rows.push({q:q,n:n,tg:tg,g:f.gross||0,c:f.claims||0})});
  var pc=function(a,b){return b?Math.round(a/b*100):0},p=pc(T.net,T.tgt);
  function row(x,b){var c=[h('td',{},b?h('b',{},x.q):x.q,h('small',{style:'display:block;color:var(--muted);font-size:11px'},'Tgt '+rsx(x.tg)))];if(hasG)c.push(h('td',{class:'r num'},rsx(x.g)),h('td',{class:'r num'},x.c?rsx(-x.c):'—'));
    c.push(h('td',{class:'r num'},b?h('b',{},rsx(x.n)):rsx(x.n)),h('td',{class:'r num'},pc(x.n,x.tg)+'%'));return h('tr',b?{style:'border-top:2px solid var(--line)'}:{},c)}
  var hd=[h('th',{},'HQ')];if(hasG)hd.push(h('th',{class:'r'},'Gross'),h('th',{class:'r'},'Exp/Brk'));hd.push(h('th',{class:'r'},'Net'),h('th',{class:'r'},'%'));
  return h('div',{class:'score salestop'},h('b',{},'Company sales · November'+(asOf?' (cumulative to '+asOf+')':'')),
    h('div',{},h('span',{class:'big'},p+'%'),h('small',{style:'color:var(--muted)'},'  Area net '+rsx(T.net)+' of '+rsx(T.tgt))),
    h('div',{style:'height:8px;border-radius:6px;background:var(--soft,#EEF2F1);overflow:hidden;margin:6px 0 8px'},h('div',{style:'height:100%;width:'+Math.max(0,Math.min(100,p))+'%;background:var(--accent,#0F5257)'})),
    h('div',{class:'tbl'},h('table',{style:'font-size:12.5px'},h('tr',{},hd),rows.map(function(x){return row(x)}),row({q:'Area total',n:T.net,tg:T.tgt,g:T.gross,c:T.cl},true))),
    h('small',{style:'color:var(--muted)'},'Net = gross billing minus expiry and breakage claims. Dhubri is vacant.'+(hasG?'':' Gross and claims columns appear from the next evening review.')))}

/* ---------- manager viewing a CSO: always a way back ---------- */
var vaBar=document.createElement('style');vaBar.textContent='.vabar{display:flex;align-items:center;gap:10px;margin:0 0 12px;padding:10px 12px;border-radius:14px;background:#FFF4D6;color:#5A4300;font-size:14px}.vabar button{margin-left:auto;border:0;border-radius:10px;padding:9px 14px;font-weight:800;background:#0F5257;color:#fff;min-height:auto}';document.head.appendChild(vaBar);
function backToTeam(){S.viewAs=null;try{if(history.state&&history.state.ftva)history.back()}catch(e){}go('home')}
window.addEventListener('popstate',function(){if(S.viewAs){S.viewAs=null;go('home')}});
function viewBar(app){if(!S.mgr||!S.viewAs)return;try{if(!history.state||!history.state.ftva)history.pushState({ftva:1},'')}catch(e){}
  var hd=app.querySelector('.fthead');if(!hd||app.querySelector('.vabar'))return;var nm=((S.viewAs&&S.viewAs.Name)||'CSO').split(' ')[0];
  hd.after(h('div',{class:'vabar'},'👀',h('div',{},h('b',{},'Viewing '+nm+'\'s app'),h('small',{style:'display:block'},'Nothing you see here is changed for '+nm+'.')),h('button',{onclick:backToTeam},'← Back to Team')))}

/* ---------- apply after every screen is drawn ---------- */
var prevAfter=U.after;U.after=function(app,r){prevAfter&&prevAfter(app,r);if(document.getElementById('ftlogin'))return;
  try{topbar(app,r);var t=tabFor(r),hd=app.querySelector('.fthead');
    if(r==='home'){if(isMgr())todayMgr(app);else todayCSO(app)}
    // replace the old sub-tab row on Work screens
    if(t==='work'){U.lsSet('ft_work',r);var old=app.querySelector('.fthead~.subtabs');if(old&&old.textContent.indexOf('Raft')>=0&&!old.classList.contains('l2'))old.remove();var rows=workTabs(r);var after=hd;rows.forEach(function(x){after.after(x);after=x});
      }
    if(t==='me'){var mt=meTabs(r);hd.after(mt);if(r==='perf')app.querySelectorAll('.hof').forEach(function(x){x.remove()})}
    var nb=app.querySelector('.bnav');if(nb)nb.replaceWith(nav(r));else app.append(nav(r));
    if(isMgr()&&r==='perf'&&!app.querySelector('.salestop')){var s1=app.querySelector('.score'),c1=(U.salesTop||salesTop)();if(s1)s1.before(c1);else app.append(c1)}
    viewBar(app)}catch(e){try{console.log('layout',e)}catch(_){}}};
var pt=U.tabOfX||{};['sell','approve','meet','hof'].forEach(function(k){pt[k]=k});U.tabOfX=pt;
try{if(S.ready)render()}catch(e){}
})();
