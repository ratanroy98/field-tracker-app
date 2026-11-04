/* Field Tracker — right-side ≡ menu (CSO), plus the Brand Inputs list and Primary plan screens.
   Loaded last: every route it points to (brands/primary/perf/shakti/stock/tp) already exists by now. */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
function isMgr(){return S.mgr&&!S.viewAs}
function myHQ(){try{if(S.viewAs&&S.viewAs.HQ)return S.viewAs.HQ;if(S.me&&S.me.HQ)return S.me.HQ;var k=Object.keys(S.feeds||{}).filter(function(z){return z.indexOf('perf_')===0})[0];return k?k.slice(5):''}catch(e){return''}}

var css=document.createElement('style');css.textContent=`
.ftmenu-ov{position:fixed;inset:0;background:rgba(10,20,18,.42);z-index:9998;opacity:0;transition:opacity .2s;display:flex;justify-content:flex-end}
.ftmenu-ov.on{opacity:1}
.ftmenu{width:80%;max-width:330px;height:100%;background:var(--card,#fff);box-shadow:-10px 0 34px rgba(0,0,0,.28);transform:translateX(100%);transition:transform .22s ease;display:flex;flex-direction:column;overflow-y:auto}
.ftmenu-ov.on .ftmenu{transform:translateX(0)}
.ftmenu .mh{padding:20px 16px 14px;background:linear-gradient(135deg,var(--h1,#0F5257),var(--h3,#1B7F79));color:#fff}
.ftmenu .mh b{font-size:17px}.ftmenu .mh small{display:block;opacity:.85;font-size:12px;margin-top:2px}
.ftmenu .mi{display:flex;align-items:center;gap:14px;padding:16px;border:0;border-bottom:1px solid var(--line,#eef2f1);font-size:15px;font-weight:700;color:var(--fg,#14302E);background:none;width:100%;text-align:left;min-height:auto;cursor:pointer}
.ftmenu .mi .mic{font-size:21px;width:28px;text-align:center}
.ftmenu .mi .ar{margin-left:auto;color:var(--muted)}
.ftmenu .mi:active{background:var(--soft,#F2F5F4)}
.ftmenu .mi small{display:block;font-weight:600;color:var(--muted);font-size:11.5px;margin-top:2px}
.brandlist{display:flex;flex-direction:column;gap:8px}
.brandlist .bl{display:flex;align-items:center;gap:13px;padding:15px 14px;border:1px solid var(--line,#e5ece9);background:var(--card,#fff);border-radius:16px;font-size:15px;font-weight:800;color:var(--fg,#14302E);width:100%;text-align:left;min-height:auto;cursor:pointer}
.brandlist .bl .ar{margin-left:auto;color:var(--muted);font-weight:600}
.pmile{display:flex;gap:10px;align-items:center;padding:12px 14px;border-radius:14px;border:1px solid var(--line,#e5ece9);background:var(--card,#fff);margin:0 0 8px}
.pmile .pc{width:52px;height:52px;border-radius:50%;flex:0 0 auto;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;color:#fff;background:linear-gradient(135deg,#0F5257,#1B7F79)}
.pmile .pm{flex:1;min-width:0}.pmile .pm b{font-size:14.5px}.pmile .pm small{display:block;color:var(--muted);font-size:12px;margin-top:1px}
.pmile .pw{font-size:20px;font-weight:800;color:var(--accent,#0F5257);white-space:nowrap}
`;document.head.appendChild(css);

var MENU=[
 ['📦','Brand Inputs','Quantity, balance & doctor lists','brands'],
 ['🗓️','Primary plan','Stockist-wise plan & milestones','primary'],
 ['📊','Performance','Incentive · monthly / quarterly / YTD','perf'],
 ['💉','Shakti Campaign','Pick 8 doctors (2 / week)','shakti'],
 ['📄','Stock statement','Upload your stock statement','stock'],
 ['🗺️','TP','Your tour plan & bricks','tp']
];
function close(){var o=document.querySelector('.ftmenu-ov');if(o){o.classList.remove('on');setTimeout(function(){try{o.remove()}catch(e){}},220)}}
U.closeMenu=close;
function goItem(r){try{if(r==='perf'){S.tab=S.tab||{};S.tab.perf='brands';S.tab.geo_T='inc';go('perf');return}go(r)}catch(e){}}
U.openMenu=function(){if(isMgr()||document.querySelector('.ftmenu-ov'))return;
  var panel=h('div',{class:'ftmenu'},h('div',{class:'mh'},h('b',{},'Menu'),h('small',{},'Everything in one place')));
  MENU.forEach(function(m){panel.append(h('button',{class:'mi',onclick:function(){close();goItem(m[3])}},h('span',{class:'mic'},m[0]),h('span',{},m[1],h('small',{},m[2])),h('span',{class:'ar'},'›')))});
  var ov=h('div',{class:'ftmenu-ov',onclick:function(e){if(e.target===ov)close()}},panel);
  document.body.append(ov);requestAnimationFrame(function(){ov.classList.add('on')});};

/* Brand Inputs — the list of brands; each opens the input drill-down */
var BL=[['raft','R-Loc Raft','🩹'],['deca','Deca Durabolin','💉'],['rloc','R-Loc','💊'],['skin','Skinlite','🧴'],['dexona','Dexona','💊'],['pulse','Pulse · Deca Module','🩺']];
U.routes.brands=function(app){if(isMgr()){app.append(h('div',{class:'note'},'Brand inputs are the CSO\'s screen.'));return}
  app.append(h('div',{class:'coachc'},h('div',{class:'k'},'📦 Brand Inputs'),h('p',{},'Tap a brand to see its inputs — quantity allocated, used and balance — and the doctor or retailer list. Photo & doctor picking are inside each brand.')));
  var grid=h('div',{class:'brandlist'});
  BL.forEach(function(b){grid.append(h('button',{class:'bl',onclick:function(){go(b[0])}},h('span',{style:'font-size:22px'},b[2]),b[1],h('span',{class:'ar'},'›')))});
  app.append(grid);};

/* Primary plan — the month's milestone plan; stockist-wise rows fill from Ratan's backend upload (feed primary_<HQ>) */
var MS=[['MS-1','20%','primary by 7–9 Nov'],['MS-2','40%','by 17–19 Nov'],['MS-3','60%','by 22–24 Nov'],['Close','100%','by 28 Nov']];
U.routes.primary=function(app){if(isMgr()){app.append(h('div',{class:'note'},'Primary plan is the CSO\'s screen.'));return}
  var hq=myHQ(),f=(S.feeds||{})['primary_'+hq];
  app.append(h('div',{class:'coachc'},h('div',{class:'k'},'🗓️ Primary plan'+(hq?' · '+hq:'')),h('p',{},'The month runs on three milestones. Hit each percentage of your primary target by its dates — then close at 100% one day before the last working day.')));
  MS.forEach(function(m){app.append(h('div',{class:'pmile'},h('div',{class:'pc'},m[1]),h('div',{class:'pm'},h('b',{},m[0]),h('small',{},m[2])),h('span',{class:'pw'},m[1])))});
  if(f&&f.rows&&f.rows.length){var box=h('div',{class:'selc'},h('div',{style:'font-weight:800;margin-bottom:6px'},'Stockist-wise plan'+(f.month?' · '+f.month:'')));
    var t=h('table',{style:'width:100%;font-size:12.5px'},h('tr',{},h('th',{style:'text-align:left'},'Stockist'),h('th',{style:'text-align:right'},'Plan'),h('th',{style:'text-align:right'},'Done')));
    f.rows.forEach(function(r){t.append(h('tr',{},h('td',{},r.name||r.n||''),h('td',{style:'text-align:right'},r.plan!=null?('₹'+(r.plan/1e5).toFixed(2)+'L'):'—'),h('td',{style:'text-align:right'},r.done!=null?('₹'+(r.done/1e5).toFixed(2)+'L'):'—')))});
    box.append(h('div',{class:'tbl'},t));app.append(box);
  }else{app.append(h('div',{class:'coachc',style:'background:var(--soft,#F2F5F4);border-color:var(--line,#e5ece9)'},h('p',{style:'margin:0'},'Your stockist-wise primary plan appears here once Ratan uploads it. For now, work the three milestones above with each stockist.')));}
};
})();
