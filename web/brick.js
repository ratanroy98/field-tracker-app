/* Field Tracker – approved brick plan (days fixed after Ratan's approval), brick lock on mandatory entries,
   selfie check-in, Ventasys-first banner, Stockist terms (box / case / flats in one place). */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
var t=U.t,lsGet=U.lsGet,lsSet=U.lsSet;
function isMgr(){return S.mgr&&!S.viewAs}
function ym(d){return (d||TODAY).slice(0,7)}
function nextYm(){var d=new Date(TODAY+'T00:00:00');d.setDate(1);d.setMonth(d.getMonth()+1);return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)}
function monthName(m){return new Date(m+'-01T00:00:00').toLocaleDateString('en-IN',{month:'long',year:'numeric'})}
function daysOf(m){var d=new Date(m+'-01T00:00:00'),n=new Date(d.getFullYear(),d.getMonth()+1,0).getDate(),o=[];for(var i=1;i<=n;i++)o.push(m+'-'+('0'+i).slice(-2));return o}
function plans(email){return (S.entries||[]).filter(function(e){return e.type==='brick_plan'&&e.email===email})}
function planFor(email,m){var p=plans(email).filter(function(e){return e.month===m}).sort(function(a,b){return b.ts-a.ts});return p[0]||null}
function tpDay(email,d){var r=D.tp.find(function(x){return x.Email===email&&x.Date===d});return{type:r?r.DayType:(new Date(d+'T00:00:00').getDay()===0?'Weekly Off':'Field work'),brick:r&&r.BrickID?r.BrickID.split(' | ')[1]:'',beat:r?r.Beat:''}}
function effDay(email,d){var v=tpDay(email,d);plans(email).filter(function(p){return p.status==='approved'&&p.month===d.slice(0,7)&&p.days&&p.days[d]}).sort(function(a,b){return a.ts-b.ts}).forEach(function(p){v={type:p.days[d].type,brick:p.days[d].brick,changed:1}});return v}
function pendDay(email,d){var p=plans(email).filter(function(p){return p.status==='pending'&&p.days&&p.days[d]})[0];return p?p.days[d]:null}
/* ---------- today's brick: beat change > approved change > TP ---------- */
var baseBrick=window.brickToday;
if(typeof baseBrick==='function'){window.brickToday=brickToday=function(){var ch=todays('beat_change').slice(-1)[0];if(ch)return ch.actual;var v=effDay(myEmail(),TODAY);return v.brick||baseBrick()}}

/* ---------- styles ---------- */
var st=document.createElement('style');st.textContent=`
.vbar{display:flex;gap:10px;align-items:center;border-radius:14px;padding:10px 12px;margin:0 0 12px;background:#EAF2FF;border:1px solid #C9DBF7;color:#16325C;font-size:13px;line-height:1.35}
.vbar b{display:block;font-size:13.5px}
.lockn{font-size:12px;color:var(--muted);margin:-4px 0 8px;display:flex;gap:6px;align-items:center}
select.locked{background:var(--soft)!important;color:var(--ink)!important;opacity:1!important;border-style:dashed!important}
.bp-row{display:grid;grid-template-columns:86px 1fr;gap:8px;align-items:center;padding:7px 0;border-bottom:1px solid var(--line)}
.bp-row small{color:var(--muted)}.bp-row .off{color:var(--muted);font-size:13px}
.bpst{display:inline-block;font-size:12px;font-weight:700;padding:3px 10px;border-radius:999px}
.bpst.ok{background:var(--ok-bg);color:var(--ok)}.bpst.wait{background:var(--warn-bg);color:var(--warn)}.bpst.no{background:var(--bad-bg);color:var(--bad)}
.selfie{width:150px;height:150px;border-radius:50%;object-fit:cover;border:4px solid var(--gold);display:block;margin:6px auto 10px;background:var(--soft)}
.stk th,.stk td{font-size:12.5px;vertical-align:top}.stk td small{display:block;color:var(--muted)}
.forstk{display:flex;gap:8px;align-items:center;background:linear-gradient(135deg,var(--h1),var(--h3));color:#fff;border-radius:14px;padding:10px 12px;margin-bottom:10px;font-size:13px}
.forstk b{color:var(--gold2)}
`;document.head.appendChild(st);

/* ---------- brick plan screen (inside My TP) ---------- */
function planCard(email){var hq=(D.users.find(function(u){return u.Email===email})||{}).HQ,box=h('div',{class:'phase'});
  var months=[ym(),nextYm()],cur=S.tab.bpm||months[0];
  box.append(h('div',{class:'ph'},h('b',{},'📋 My brick plan'),h('div',{class:'subtabs',style:'margin:0;padding:0'},months.map(function(m){return h('button',{class:m===cur?'on':'',onclick:function(){S.tab.bpm=m;S.tab.bpEdit=false;render()}},new Date(m+'-01T00:00:00').toLocaleDateString('en-IN',{month:'short'}))}))));
  var pend=plans(email).filter(function(p){return p.month===cur&&p.status==='pending'}),ret=plans(email).filter(function(p){return p.month===cur&&p.status==='returned'}).sort(function(a,b){return b.ts-a.ts})[0];
  box.append(h('div',{style:'margin:6px 0'},h('span',{class:'bpst ok'},'✅ Same as TP – no approval needed'),pend.length?h('span',{class:'bpst wait',style:'margin-left:6px'},'⏳ '+pend.reduce(function(n,p){return n+Object.keys(p.days||{}).length},0)+' change(s) waiting'):''));
  if(ret&&ret.note)box.append(h('div',{class:'note'},'↩️ Ratan Roy returned a change: '+ret.note));
  var editing=!isMgr()&&S.tab.bpEdit,draft=S.tab.bpDraft&&S.tab.bpDraft.m===cur?S.tab.bpDraft:(S.tab.bpDraft={m:cur,days:{}});
  var bricks=bricksOf(hq),TY=['Field work','Joint working','Weekly Off','Leave','Holiday','Meeting'],list=h('div');
  daysOf(cur).forEach(function(d){var e=effDay(email,d),pd=pendDay(email,d),v=draft.days[d]||{type:e.type,brick:e.brick};
    var lab=h('div',{},h('b',{},new Date(d+'T00:00:00').toLocaleDateString('en-IN',{weekday:'short',day:'numeric'})),h('small',{style:'display:block'},v.type));
    var right;if(editing){var ty=h('select',{},TY.map(function(x){return h('option',{value:x,selected:x===v.type},x)}));var bs=h('select',{},[h('option',{value:''},'Brick…')].concat(bricks.map(function(b){return h('option',{value:b,selected:b===v.brick},b)})));
      function upd(){draft.days[d]={type:ty.value,brick:/Field|Joint/.test(ty.value)?bs.value:''};bs.disabled=!/Field|Joint/.test(ty.value)}ty.onchange=upd;bs.onchange=upd;bs.disabled=!/Field|Joint/.test(v.type);right=h('div',{style:'display:grid;gap:4px'},ty,bs)}
    else right=h('div',{},/Field|Joint/.test(e.type)?(e.brick||'—'):h('span',{class:'off'},e.type),e.changed?h('small',{style:'display:block;color:var(--ok)'},'✅ changed, approved'):'',pd?h('small',{style:'display:block;color:var(--warn)'},'⏳ change asked: '+(pd.brick||pd.type)):'');
    list.append(h('div',{class:'bp-row'},lab,right))});
  box.append(list);
  if(!isMgr()){if(!editing)box.append(h('button',{class:'ghost',style:'width:100%;margin-top:10px',onclick:function(){S.tab.bpEdit=true;S.tab.bpDraft={m:cur,days:{}};render()}},'✏️ Change some days'));
    else box.append(h('button',{style:'width:100%;margin-top:10px',onclick:function(){var diff={};Object.keys(draft.days).forEach(function(d){var v=draft.days[d],e=effDay(email,d);if(v.type!==e.type||(v.brick||'')!==(e.brick||''))diff[d]=v});
      var miss=Object.keys(diff).filter(function(d){return /Field|Joint/.test(diff[d].type)&&!diff[d].brick});if(miss.length){toast('Pick a brick for '+miss.length+' day(s).');return}
      if(!Object.keys(diff).length){S.tab.bpEdit=false;toast('No change – nothing to approve.');render();return}
      save('brick_plan',{month:cur,days:diff,status:'pending'}).then(function(ok){if(ok){S.tab.bpEdit=false;render()}})}},'📤 Send only the changes to Ratan Roy'))}
  if(isMgr())pend.forEach(function(p){box.append(h('div',{class:'note'},h('b',{},'Change asked'),Object.keys(p.days).sort().map(function(d){var e=tpDay(email,d);return h('div',{},new Date(d+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short'})+': '+(e.brick||e.type)+' → '+(p.days[d].brick||p.days[d].type))}),
    h('div',{style:'display:flex;gap:8px;margin-top:8px'},h('button',{style:'flex:1',onclick:function(){S.db.collection('entries').doc(p._id).update({status:'approved',approvedTs:Date.now()}).then(function(){toast('Approved');render()})}},'✅ Approve'),h('button',{class:'ghost',style:'flex:1',onclick:function(){var n=prompt('What should be corrected?')||'';S.db.collection('entries').doc(p._id).update({status:'returned',note:n}).then(function(){toast('Returned');render()})}},'↩️ Return'))))});
  return box}
var tpRoute=U.routes.tp;U.routes.tp=function(app){var email=isMgr()?(S.tab.tpWho||(D.users.filter(function(u){return u.Role==='CSO'&&u.Status==='Active'})[0]||{}).Email):myEmail();tpRoute(app);app.append(planCard(email))};

/* ---------- lock mandatory entries to today's brick ---------- */
var LOCK={rloc:1,dexona:1,raft:{dr:1},deca:{dr:1},skin:{npd:1,photo:1}};
function lockBricks(app,r){var rule=LOCK[r];if(!rule||isMgr())return;if(typeof rule==='object'){var tab=S.tab[r]||Object.keys(rule)[0];if(!rule[tab])return}
  var b=brickToday();if(!b)return;app.querySelectorAll('select[name=brick]').forEach(function(sel){if(sel.dataset.lk)return;sel.dataset.lk='1';if(sel.value!==b&&[].some.call(sel.options,function(o){return o.value===b})){sel.value=b;sel.dispatchEvent(new Event('change',{bubbles:true}))}
    sel.classList.add('locked');sel.addEventListener('mousedown',function(e){e.preventDefault();toast('Locked to today\'s brick. Worked another brick? Use Beat change.')});sel.addEventListener('keydown',function(e){e.preventDefault()});sel.addEventListener('change',function(){if(sel.value!==b){sel.value=b;sel.dispatchEvent(new Event('change',{bubbles:true}))}});
    var lab=sel.closest('label');if(lab&&!lab.nextSibling||lab&&!(lab.nextSibling.classList&&lab.nextSibling.classList.contains('lockn')))lab.after(h('div',{class:'lockn'},'🔒 Today\'s brick'));S.dirty=false})}

/* ---------- Ventasys first ---------- */
function vbar(){return h('div',{class:'vbar'},h('span',{},'📋'),h('div',{},h('b',{},'Ventasys reporting is mandatory'),'Enter your calls, POB and inputs in Ventasys as usual. This app reads them – and only asks what Ventasys doesn\'t have.'))}

/* ---------- selfie check-in ---------- */
var REASONS=['Doctor / chemist not available','Joint work with Ratan Roy','Urgent stockist order','Rain / road problem','Other'];
U.beforeCheckin=function(go){var x=who()||{},b=brickToday(),tpv=tpDay(myEmail(),TODAY);if(todays('beat_change').length){selfie(go);return}
  var body=h('div'),ch={brick:'',reason:''};
  function step1(){body.innerHTML='';body.append(h('div',{class:'lcard',style:'text-align:center'},h('div',{class:'meta'},new Date(TODAY+'T00:00:00').toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long'})),h('h3',{style:'margin:6px 0'},(x.Name||'').split(' ')[0]+', today your brick is'),h('div',{class:'big',style:'color:var(--accent)'},b||tpv.beat||'—'),h('small',{style:'color:var(--muted)'},'As per your plan')),
      h('button',{style:'width:100%',onclick:function(){close();selfie(go)}},'✅ Yes, correct'),h('button',{class:'ghost',style:'width:100%;margin-top:8px',onclick:step2},'🔀 No, I am working another brick'))}
  function step2(){body.innerHTML='';var bricks=bricksOf(myHQ()).filter(function(z){return z!==b});
    body.append(h('small',{},'Which brick today?'),h('div',{class:'chips'},bricks.map(function(z){return h('button',{class:ch.brick===z?'on':'',onclick:function(){ch.brick=z;step2()}},z)})),h('small',{},'Why?'),h('div',{class:'chips'},REASONS.map(function(z){return h('button',{class:ch.reason===z?'on':'',onclick:function(){ch.reason=z;step2()}},z)})),
      h('button',{style:'width:100%;margin-top:8px',disabled:!(ch.brick&&ch.reason),onclick:function(){save('beat_change',{actual:ch.brick,planned:b,reason:ch.reason,status:'pending'}).then(function(ok){if(ok){close();selfie(go)}})}},'📤 Send to Ratan Roy for approval'),h('button',{class:'ghost',style:'width:100%;margin-top:8px',onclick:step1},'‹ Back'))}
  var ov=h('div',{class:'ftsheet'},h('div',{class:'pn'},h('div',{class:'grab'}),h('div',{class:'hd'},h('b',{},'📍 Start my day'),h('button',{class:'ghost',onclick:function(){close()}},'✕')),body));function close(){ov.remove()}document.body.append(ov);step1()};
// Only the latest selfie is kept: the server renames it and removes this CSO's older selfies.
function keepOnlySelfie(id){try{var a=JSON.parse(U.lsGet('ft_auth','null'));if(!id||!a||!window.google||!google.script)return;google.script.run.withFailureHandler(function(){}).api(a,'selfie',{id:id})}catch(e){}}
function selfie(go){var body=h('div'),url=null,busy=false;var pic=h('img',{class:'selfie',alt:'',src:'data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#8aa" stroke-width="1.2"><circle cx="12" cy="9" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>')});
  var inp=h('input',{type:'file',accept:'image/*',capture:'user',style:'display:none'});var stx=h('div',{style:'text-align:center;color:var(--muted);font-size:13px;min-height:18px'});
  var take=h('button',{style:'width:100%',onclick:function(){inp.click()}},'📸 Take my selfie');
  var done=h('button',{style:'width:100%;margin-top:8px',disabled:true,onclick:function(){if(!url||busy)return;close();go({selfie:url})}},'✅ Start my day');
  inp.addEventListener('change',function(){var f=inp.files&&inp.files[0];if(!f)return;busy=true;stx.textContent='Uploading…';take.disabled=true;
    uploadPhoto(f).then(function(p){url=p.url;keepOnlySelfie(p.id);pic.src=p.url;stx.textContent='Looks good!';done.disabled=false;busy=false;take.disabled=false;take.textContent='📸 Retake'},function(e){busy=false;take.disabled=false;stx.textContent=(e&&e.message)||'Upload failed. Try again.'})});
  body.append(h('div',{class:'quote'},h('div',{class:'who'},'💬 '+t('says')),h('div',{class:'q'},'Your selfie and location go to me from here. No need to send a picture separately on WhatsApp – the app does it for you.')),pic,stx,inp,take,done,
    h('button',{class:'ghost',style:'width:100%;margin-top:8px',onclick:function(){close();go({selfie:'',noSelfie:1})}},'No camera now – check in without selfie'));
  var ov=h('div',{class:'ftsheet'},h('div',{class:'pn'},h('div',{class:'grab'}),h('div',{class:'hd'},h('b',{},'📍 Start my day'),h('button',{class:'ghost',onclick:function(){close()}},'✕')),body));
  function close(){ov.remove()}document.body.append(ov)}

/* ---------- Stockist terms: box, case, minimum billing, case discounts, flats, stockist gifts – one place ---------- */
var CASE={'R-Loc 150 Tab':{box:'30 strips × 30 tabs',cs:'18 boxes'},'R-Loc D Tab':{box:'15 strips × 30 tabs',cs:'30 boxes'},'R-Loc Inj 2ml':{box:'14 ampoules',cs:''},'Oflin Infusion 100ml':{box:'1 bottle',cs:'48 bottles'},'Falcigo 60 Inj':{box:'1 vial',cs:'65 vials'},'Falcigo 120 Inj':{box:'1 vial',cs:'150 units'},'Ciprobid 250 Tab':{box:'10 × 5 × 10 tabs',cs:'1,200'},'Ciprobid 500 Tab':{box:'10 × 5 × 10 tabs',cs:''},'Dexona Tab':{box:'30 strips × 30 tabs',cs:''},'Oflin 200 Tab':{box:'10 strips × 10 tabs',cs:''},'Oflin 400 Tab':{box:'10 strips × 10 tabs',cs:''},'Oflin-O Tab':{box:'10 strips × 10 tabs',cs:''},'Tiniba 300 Tab':{box:'20 strips × 10 tabs',cs:''},'Tiniba 500 Tab':{box:'10 × 3 × 10 tabs',cs:''},'Zipcet Tab':{box:'10 strips × 10 tabs',cs:''},'Dexona Inj 2ml':{box:'8 vials / 20 vials',cs:''}};
var STKGIFT={'R-Loc 150 Tab':'1 case → 18 Gillette Presto (2–28 Nov, trade stockists)','R-Loc D Tab':'1 case → 15 Gillette Presto (2–28 Nov, trade stockists)','Deca-Durabolin 25mg/ml':'₹50,000 of Deca → 1 USHA iron','Deca-Durabolin 50mg/ml':'₹50,000 of Deca → 1 USHA iron','Deca-Durabolin 100mg/ml':'₹50,000 of Deca → 1 USHA iron','Skinlite Cream 15g':'1 case → 2 Raymond bedsheets · 2 cases → Hawkins 4 L cooker','Skinlite Cream 25g':'1 case → 2 Raymond bedsheets · 2 cases → Hawkins 4 L cooker','Skinlite Day Care Sunscreen 30g':'1 case → 1 branded water bottle','Skinlite Bright Facewash 50g':'2 cases → 1 branded water bottle'};
function vStockist(app){var R=U.REF();if(!R)return;app.append(h('div',{class:'forstk'},h('span',{},'🏬'),h('div',{},h('b',{},'For stockists only. '),'Box and case (C/S) sizes, minimum billing, case discounts, flat rates and stockist gifts. Do not quote flat rates to retailers or wholesalers.')));
  app.append(h('div',{class:'sect'},h('b',{},'Stockist terms · '+(R.asOf||''))));
  (R.products||[]).forEach(function(p){var c=CASE[p.n]||{};var gift=TODAY<='2026-11-30'?(STKGIFT[p.n]||''):'';var cs=c.cs||(p.case||'').replace(/^1 case = /,'');
    var L=[['Box',c.box],['1 case (C/S)',cs],['Minimum billing',p.minBill],['Case discount',p.slab],['Flat rate',p.flat?p.flat.map(function(f){return f[0]+': ₹'+f[1]}).join(' · ')+' (direct Zydus stockist, one invoice)':''],['Stockist gift',gift]].filter(function(x){return x[1]});
    if(!L.length)return;
    app.append(h('div',{class:'lcard',style:'padding:12px 14px'},h('b',{},p.n),p.sch?h('div',{class:'meta'},'Scheme lots: '+p.sch):'',
      h('div',{style:'margin-top:6px'},L.map(function(x){return h('div',{style:'display:grid;grid-template-columns:118px 1fr;gap:8px;padding:5px 0;border-top:1px solid var(--line);font-size:13.5px'},h('span',{style:'color:var(--muted)'},x[0]),h('span',{style:x[0]==='Flat rate'?'font-weight:700;color:var(--accent)':''},x[1]))}))))});
  app.append(h('small',{style:'display:block;color:var(--muted)'},'Products without box or case size: waiting for the company list. Stockist margin is 10% of PTR; any extra discount he gives comes from this 10% (see Profit calculator).'))}
U.vStockist=vStockist;

/* ---------- hooks ---------- */
var prevToday=U.today;U.today=function(app,tk,rest){prevToday&&prevToday(app,tk,rest);if(!isMgr()){var hof=app.querySelector('.hof')||app.querySelector('.hero')||tk;hof.after(vbar())}else{var tp=app.querySelector('.phase');if(tp)tp.after(pendingPlans())}};
U.pendingPlans=function(){return pendingPlans()};U.vbar=function(){return vbar()};
function pendingPlans(){var L=(S.entries||[]).filter(function(e){return e.type==='brick_plan'&&e.status==='pending'}),B=(S.entries||[]).filter(function(e){return e.type==='beat_change'&&e.status==='pending'&&e.date>=TODAY});var box=h('div');if(!L.length&&!B.length)return box;
  box.className='phase';box.append(h('div',{class:'ph'},h('b',{},'📋 Brick changes to approve'),h('small',{},String(L.length+B.length))));
  B.forEach(function(e){box.append(h('div',{class:'lrow',style:'cursor:default'},h('div',{class:'tx'},h('b',{},e.name+' · today'),h('small',{},(e.planned||'—')+' → '+e.actual+' · '+e.reason)),h('button',{style:'min-height:auto;padding:8px 12px',onclick:function(){S.db.collection('entries').doc(e._id).update({status:'approved',approvedTs:Date.now()}).then(function(){toast('Approved');render()})}},'✅')))});
  L.forEach(function(p){box.append(h('div',{class:'lrow',onclick:function(){S.tab.tpWho=p.email;S.tab.bpm=p.month;go('tp')}},h('div',{class:'tx'},h('b',{},p.name+' · '+monthName(p.month)),h('small',{},Object.keys(p.days||{}).length+' day(s) changed · tap to review')),h('span',{class:'st'},'›')))});return box}
var prevAfter=U.after;U.after=function(app,r){prevAfter&&prevAfter(app,r);try{lockBricks(app,r)}catch(e){}};
var prevPerf=U.vPerf;
try{if(S.ready)render()}catch(e){}
})();
