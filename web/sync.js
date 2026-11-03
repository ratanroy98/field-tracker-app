/* Field Tracker – Sync: always-visible button + reminders (on opening, after each entry, when all tasks are done). */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
var K='ft_lastsync',KD='ft_unsynced';
function isMgr(){return S.mgr&&!S.viewAs}
function last(){return +U.lsGet(K,'0')||0}
function unsynced(){return U.lsGet(KD,'')==='1'||(U.outboxCount&&U.outboxCount()>0)}
var syncedThisOpen=false,busy=false,allDoneShown=U.lsGet('ft_alldone_'+TODAY,'')==='1';
function ago(){var t=last();if(!t)return'not synced yet';var m=Math.round((Date.now()-t)/60000);if(m<1)return'synced just now';if(m<60)return'synced '+m+' min ago';
  return'synced '+new Date(t).toLocaleTimeString('en-IN',{hour:'numeric',minute:'2-digit'})}

var st=document.createElement('style');st.textContent=`
#ftsync{position:fixed;right:12px;bottom:calc(150px + env(safe-area-inset-bottom));z-index:40;display:flex;align-items:center;gap:8px;border:0;border-radius:999px;padding:9px 14px 9px 11px;min-height:auto;
  background:linear-gradient(135deg,var(--h1,#0F5257),var(--h3,#1B7F79));color:#fff;font-weight:700;font-size:14px;box-shadow:0 8px 20px rgba(0,0,0,.25)}
#ftsync small{display:block;font-weight:500;font-size:10.5px;opacity:.85;line-height:1.1}
#ftsync .ic{width:20px;height:20px;display:inline-flex}
#ftsync.spin .ic{animation:ftspin 0.9s linear infinite}@keyframes ftspin{to{transform:rotate(360deg)}}
#ftsync.due{background:linear-gradient(135deg,#E8A317,#F5C451);color:#2B2000;animation:ftpulse 1.4s ease-in-out infinite}
@keyframes ftpulse{50%{box-shadow:0 0 0 7px rgba(245,196,81,.35),0 8px 20px rgba(0,0,0,.25)}}
#ftsync .dot{position:absolute;top:2px;right:4px;width:10px;height:10px;border-radius:50%;background:#E5484D;border:2px solid #fff}
.syncnote{display:flex;gap:10px;align-items:center;border-radius:14px;padding:12px;margin:0 0 12px;background:#FFF6DA;border:1px solid #F2D27A;color:#4A3800}
.syncnote b{display:block}.syncnote small{color:#6B5A1E}.syncnote button{margin-left:auto;min-height:auto;padding:9px 14px;white-space:nowrap}
html[data-theme=night] .syncnote{background:#2E2710;border-color:#6B5A1E;color:#FFE9A8}
`;document.head.appendChild(st);

var ICON='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M3 21v-5h5"/></svg>';
function btn(){var b=document.getElementById('ftsync');if(!b){b=document.createElement('button');b.id='ftsync';b.onclick=function(){doSync()};document.body.appendChild(b)}
  var due=!busy&&(unsynced()||!syncedThisOpen);b.className=(busy?'spin':'')+(due?' due':'');
  var html='<span class="ic">'+ICON+'</span><span>'+(busy?'Syncing…':'Sync')+'<small>'+(busy?'please wait':ago())+'</small></span>'+(unsynced()&&!busy?'<i class="dot"></i>':'');if(b._h!==html){b.innerHTML=html;b._h=html}
  b.style.display=document.getElementById('ftlogin')||typeof S==='undefined'||!S.db?'none':''}
setInterval(btn,3000);

// After every Sync: if a newer version of the screens is published, load it straight away (no reinstall, no waiting).
var EXEC='https://script.google.com/macros/s/AKfycbyFp_mIJqqv-vya_y_DFmW7nwzZc83PQY5PnwOdzMPYjFK3EYg-p-ZHz0M7vSgMlV3_/exec';
function checkUpdate(){try{var a=JSON.parse(U.lsGet('ft_auth','null'));if(!a||!window.google||!google.script||!window.FT_BUILD)return;
  google.script.run.withSuccessHandler(function(r){var b=r&&r.b;if(!b||b===window.FT_BUILD)return;
    if(U.flushOutbox&&U.outboxCount&&U.outboxCount()>0)return;U.lsSet('ft_upd','1');toast('⬇️ New version found – updating…');
    setTimeout(function(){try{window.top.location.href=EXEC}catch(e){try{window.open(EXEC,'_top')}catch(_){location.reload()}}},900)}).withFailureHandler(function(){}).api(a,'ver',{})}catch(e){}}
setTimeout(function(){try{if(U.lsGet('ft_upd','')==='1'){U.lsSet('ft_upd','');toast('✅ Updated – you have the latest version with all changes.')}}catch(e){}},2500);
function doSync(){if(busy)return;try{U.geoReset&&U.geoReset()}catch(e){}if(navigator.onLine===false){toast('📶 No network. Your entries are safe on your phone – tap Sync when network is back.');return}
  busy=true;btn();var t0=Date.now();
  Promise.resolve(U.flushOutbox?U.flushOutbox():0).then(function(left){
    try{document.dispatchEvent(new Event('visibilitychange'))}catch(e){}   // pulls the latest data from the server
    return new Promise(function(r){setTimeout(function(){r(left)},Math.max(0,1800-(Date.now()-t0)))})})
  .then(function(left){busy=false;if(left>0){toast('Some entries are still waiting – tap Sync again in a minute.');btn();return}
    syncedThisOpen=true;U.lsSet(K,String(Date.now()));U.lsSet(KD,'');try{U.play&&U.play('ok')}catch(e){}
    toast(isMgr()?'✅ Synced – you have the team\'s latest entries.':'✅ Synced – Ratan has all your entries and you have the latest from him.');try{render()}catch(e){btn()}
    checkUpdate()},
  function(){busy=false;btn();toast('Sync did not finish. Check internet and tap Sync again.')})}
U.sync=doSync;U.syncState=function(){return{busy:busy,due:unsynced()||!syncedThisOpen,unsent:unsynced(),opened:syncedThisOpen,ago:ago()}};U.allDone=function(){return allDone()};

/* after each entry: gentle nudge */
var baseSave=window.save;
if(typeof baseSave==='function'){window.save=save=function(type,fields){var r=baseSave(type,fields);Promise.resolve(r).then(function(ok){if(!ok||isMgr())return;U.lsSet(KD,'1');btn();
  setTimeout(function(){if(allDone()&&!allDoneShown){allDoneShown=true;U.lsSet('ft_alldone_'+TODAY,'1');toast('🎉 All tasks done for today! Tap Sync now so Ratan gets everything.')}
    else toast('Saved ✓  You can tap Sync now, or sync once everything is done at your end.')},1700)});return r}}

function allDone(){try{var L=(typeof TASKS!=='undefined'?TASKS:[]).map(function(t){return t.status().level}).filter(function(l){return l!=='na'});return L.length>0&&L.every(function(l){return l==='ok'})}catch(e){return false}}

function note(icon,title,sub,label){return h('div',{class:'syncnote'},h('span',{style:'font-size:22px'},icon),h('div',{},h('b',{},title),h('small',{},sub)),h('button',{onclick:function(){doSync()}},label||'🔄 Sync now'))}
var prevToday=U.today;U.today=function(app,tk,rest){prevToday&&prevToday(app,tk,rest);btn();if(isMgr())return;
  var n=null;
  if(allDone()&&unsynced())n=note('🎉','All tasks done – sync now','So Ratan sees everything you did today.');
  else if(!syncedThisOpen)n=note('🔄','Sync first','Get today\'s latest plan, targets, meetings and messages from Ratan.');
  else if(unsynced())n=note('📤','You can sync now','Or sync once everything is done at your end.','Sync');
  if(n){var top=app.querySelector('.meet')||tk;if(top&&top.parentNode)top.before(n);else app.prepend(n)}};
var prevAfter=U.after;U.after=function(app,r){prevAfter&&prevAfter(app,r);btn()};

/* on opening the app: remind once */
var told=false;function openNudge(){if(told||typeof S==='undefined'||!S.db||isMgr())return;told=true;setTimeout(function(){if(!syncedThisOpen)toast('👋 Tap Sync to get the latest from Ratan before you start.')},2500)}
setInterval(openNudge,1500);
document.addEventListener('visibilitychange',function(){if(!document.hidden&&last()&&Date.now()-last()>3*3600000){syncedThisOpen=false;told=false;btn()}});
try{if(S.ready)render()}catch(e){}
})();
