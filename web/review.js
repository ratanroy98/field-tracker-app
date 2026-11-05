/* Field Tracker — Daily review (manager): one card per CSO per day.
   Pulls the geo-tagged check-in, selfie, field photos, stock statements, inputs given, POB and lessons
   that already reach the app, plus whatever Ventasys feeds in (review_<HQ>: calls, coverage, geo in/out).
   Nothing is typed here — it is a read-only review the manager works through each day. */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
function isMgr(){return S.mgr&&!S.viewAs;}
function pc(a,b){return b?Math.round(a/b*100):0;}
function rs(v){try{return '₹'+Math.round(v||0).toLocaleString('en-IN');}catch(e){return '₹'+(v||0);}}

var st=document.createElement('style');st.id='ftrevcss';st.textContent=`
.revc{background:var(--card,#fff);border:1px solid var(--line,#e5ece9);border-radius:16px;padding:0;margin:0 0 12px;overflow:hidden}
.revc .rh{display:flex;align-items:center;gap:10px;padding:11px 14px;border-bottom:1px solid var(--line,#eef2f1)}
.revc .rh img,.revc .rh .ph0{width:40px;height:40px;border-radius:50%;object-fit:cover;flex:none;border:2px solid var(--gold,#C9A227);background:var(--soft,#eef2f1);display:grid;place-items:center;font-weight:800}
.revc .rh b{font-size:14.5px}.revc .rh small{display:block;color:var(--muted,#5B716E);font-size:12px}
.revc .rh .pill{margin-left:auto;font-size:11.5px;font-weight:800;border-radius:999px;padding:4px 10px}
.revc .pill.in{background:#D6F0E0;color:#13684A}.revc .pill.out{background:#F3E7E7;color:#9A3B3B}.revc .pill.lv{background:#FBE6C4;color:#8A5A00}
.revgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line,#eef2f1)}
.revgrid .m{background:var(--card,#fff);padding:10px 6px;text-align:center}
.revgrid .m b{display:block;font-size:17px;font-weight:800;color:var(--fg,#14302E)}
.revgrid .m small{font-size:10.5px;color:var(--muted,#5B716E)}
.revline{padding:9px 14px;border-top:1px solid var(--line,#eef2f1);font-size:12.5px;color:var(--fg,#14302E)}
.revline b{color:var(--muted,#5B716E);font-weight:700}
.revline a{color:var(--accent,#0F5257);font-weight:700;text-decoration:none}
`;document.head.appendChild(st);

function csos(){try{return (D.users||[]).filter(function(u){return u.Role==='CSO'&&u.Status==='Active';});}catch(e){return[];}}
function ent(type,email,date){try{return (S.entries||[]).filter(function(e){return e.type===type&&e.email===email&&e.date===date;});}catch(e){return[];}}
function reviewFeed(hq){try{return (S.feeds||{})['review_'+hq]||null;}catch(e){return null;}}
function reviewRow(hq,email,date){var f=reviewFeed(hq);if(!f||!f.rows||f.date!==date)return null;return f.rows.filter(function(r){return r.email===email;})[0]||null;}

function recentDates(){var set={};(S.entries||[]).forEach(function(e){if(e.date)set[e.date]=1;});
  var hasToday=set[TODAY];set[TODAY]=1;var ds=Object.keys(set).sort().reverse().slice(0,14);return ds;}

function nice(d){try{return new Date(d+'T00:00:00').toLocaleDateString('en-GB',{weekday:'short',day:'2-digit',month:'short'});}catch(e){return d;}}

function dayCard(u,date){var email=u.Email,hq=u.HQ;
  var ci=ent('checkin',email,date)[0],lv=ent('leave',email,date)[0],sf=ent('selfie',email,date)[0];
  var photos=ent('field_photo',email,date),stmts=ent('stock_statement',email,date),les=ent('lesson_done',email,date).length;
  var rf=reviewRow(hq,email,date);
  var p=S.feeds['pob_'+hq]||{},pobDay=(p.byDate||{})[date]||0,plan=p.planPerDay||p.dailyNeed||0;
  var pillCls=ci?'in':lv?'lv':'out',pillTx=ci?('📍 In '+ci.time):lv?'🌴 Leave':'⏳ No check-in';
  var av=(sf&&sf.url)?h('img',{src:sf.url,alt:''}):(ci&&ci.selfie?h('img',{src:ci.selfie,alt:''}):h('div',{class:'ph0'},(u.Name||'?')[0]));
  var card=h('div',{class:'revc'},h('div',{class:'rh'},av,h('div',{},h('b',{},u.Name),h('small',{},hq+' HQ'+(ci&&ci.brick?' · '+ci.brick:''))),h('span',{class:'pill '+pillCls},pillTx)));
  if(lv){card.append(h('div',{class:'revline'},h('b',{},'Leave: '),lv.reason||'—'));return card;}
  /* metric strip — Ventasys numbers when fed, else the app's own counts */
  var calls=rf&&rf.calls!=null?rf.calls:(photos.length);
  var planned=rf&&rf.planned!=null?rf.planned:'';
  var cov=rf&&rf.cov!=null?rf.cov:(planned?pc(calls,planned):'');
  var pob=rf&&rf.pob!=null?rf.pob:pobDay;
  card.append(h('div',{class:'revgrid'},
    h('div',{class:'m'},h('b',{},String(calls||0)),h('small',{},planned?('/ '+planned+' calls'):'photos/calls')),
    h('div',{class:'m'},h('b',{},(cov!==''?cov+'%':'—')),h('small',{},'coverage')),
    h('div',{class:'m'},h('b',{},pob?rs(pob):'—'),h('small',{},'POB'+(plan?(' / '+rs(plan)):''))),
    h('div',{class:'m'},h('b',{},String(les)),h('small',{},'lessons'))));
  if(ci&&ci.lat)card.append(h('div',{class:'revline'},h('b',{},'Geo: '),h('a',{href:'https://maps.google.com/?q='+ci.lat+','+ci.lng,target:'_blank',rel:'noopener'},'📍 '+(+ci.lat).toFixed(4)+', '+(+ci.lng).toFixed(4)),ci.acc?(' · ±'+ci.acc+'m'):''));
  else if(ci)card.append(h('div',{class:'revline'},h('b',{},'Geo: '),'⚠️ check-in had no GPS tag'));
  if(rf&&(rf.geoIn||rf.geoOut))card.append(h('div',{class:'revline'},h('b',{},'Ventasys geo: '),(rf.geoIn||'—')+(rf.geoOut?' → '+rf.geoOut:'')));
  if(photos.length){card.append(h('div',{class:'revline'},h('b',{},'Visits: '),photos.map(function(e){return e.toName||'visit';}).slice(0,6).join(', ')+(photos.length>6?' +'+(photos.length-6):'')));}
  if(stmts.length){card.append(h('div',{class:'revline'},h('b',{},'Stock statements: '),stmts.map(function(e){return e.stockist||'statement';}).join(', ')));}
  return card;}

U.routes.review=function(app){if(!isMgr()){app.append(h('div',{class:'note'},'The daily review is Ratan Roy\'s screen.'));return;}
  S.tab=S.tab||{};var dates=recentDates(),date=S.tab.revDate&&dates.indexOf(S.tab.revDate)>=0?S.tab.revDate:dates[0];
  app.append(h('div',{class:'coachc'},h('div',{class:'k'},'📋 Daily review · '+nice(date)),h('p',{},'Each CSO\'s day — check-in & geo, selfie, calls, coverage, POB and visits. Ventasys numbers fill in once synced; until then it shows what the app has.')));
  app.append(h('div',{class:'subtabs',style:'margin:0 0 10px'},dates.map(function(d){return h('button',{class:d===date?'on':'',onclick:function(){S.tab.revDate=d;render();}},d===TODAY?'Today':nice(d));})));
  var L=csos();if(!L.length){app.append(h('div',{class:'note'},'No active CSOs.'));return;}
  L.forEach(function(u){app.append(dayCard(u,date));});};

/* add a "Daily review" line to the manager Reports sub-tab row + a Team-panel shortcut */
var pt=U.tabOfX||{};pt.review='review';U.tabOfX=pt;
var prevAfter=U.after;U.after=function(app,r){prevAfter&&prevAfter(app,r);if(!isMgr()||document.getElementById('ftlogin'))return;
  try{
    // extend the Reports sub-tab row (added by mail.js) with a Review tab
    if(r==='geo'||r==='perf'||r==='mail'||r==='review'){var row=app.querySelector('.subtabs.rep');
      if(row&&!row.querySelector('.revtab')){var b=h('button',{class:'revtab'+(r==='review'?' on':''),onclick:function(){go('review');}},'Daily review');row.append(b);}
      if(r==='review'){var nb=app.querySelector('.bnav');if(nb)[].forEach.call(nb.children,function(x){x.classList.toggle('on',/Reports/.test(x.textContent));});}
    }
    // Team panel shortcut
    if(r==='home'){var ph=app.querySelector('.phase');if(ph&&!app.querySelector('.revshort')){var c=h('div',{class:'mailready revshort',onclick:function(){go('review');}},'📋',h('div',{},h('b',{},'Daily review'),h('small',{},'Each CSO\'s day — geo, calls, coverage, POB')),h('span',{class:'go'},'›'));ph.before(c);}}
  }catch(e){}};
try{if(S.ready)render();}catch(e){}
})();
