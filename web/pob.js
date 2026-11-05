/* Field Tracker — POB (orders booked) entry.
   The CSO logs each order: retailer -> line items of product + qty + value (Rs).
   Rolls up to the day's POB total (shown against the POB target already in the app),
   and is stored line-wise so it can be pushed to Ventasys POB later. Entry type 'pob'. */
(function(){
var U=window.FTUI;if(!U||!U.t)return;
function isMgr(){return S.mgr&&!S.viewAs}
function today(){try{return TODAY}catch(e){return new Date().toISOString().slice(0,10)}}
function mail(){try{return myEmail()}catch(e){return''}}
function brickNow(){try{return (typeof brickToday==='function'&&brickToday())||''}catch(e){return''}}
function retailers(brick){try{return (typeof brickCust==='function'?brickCust(brick):[]).filter(function(c){return !(typeof isDoctor==='function'?isDoctor(c):true)})}catch(e){return[]}}
function myPobFeed(){try{return (S.feeds||{})['pob_'+myHQ2()]||null}catch(e){return null}}
function todaysPob(){try{return (todays('pob')||[]).filter(function(e){return !e.email||e.email===mail()})}catch(e){return[]}}
function rs(v){return '₹'+Math.round(v||0).toString().replace(/(\d)(?=(\d\d)+\d$)/g,'$1,')}

var PRODUCTS=['R-Loc Raft Susp.','R-Loc Raft Pen','R-Loc 150','Deca Durabolin','Skinlite','Dexona','Ciprobid','Oflin-O','Zipcet','Tiniba','Cadiphylate','Oriprim','Other…'];

function draft(){
  if(S.pobDraft&&S.pobDraft.date===today())return S.pobDraft;
  S.pobDraft={date:today(),retailer:'',retailerCode:'',lines:[{product:'',qty:'',value:''}]};return S.pobDraft;
}
function redraw(){try{render()}catch(e){}}

var st=document.createElement('style');st.textContent=`
.pobhead{display:flex;gap:10px;margin:2px 0 12px}
.pobhead .cc{flex:1;background:var(--soft,#F2F5F4);border-radius:14px;padding:12px;text-align:center}
.pobhead .cc b{display:block;font-size:20px;color:var(--accent,#0F5257)}
.pobhead .cc small{color:var(--muted);font-size:11.5px}
.pobline{display:grid;grid-template-columns:1fr 54px 78px 30px;gap:7px;align-items:center;margin:7px 0}
.pobline select,.pobline input{border:1px solid var(--line,#e5ece9);border-radius:10px;padding:10px 8px;font-size:14px;background:var(--card,#fff);width:100%;font-family:inherit}
.pobline .del{border:0;background:#f3e7e7;color:#9a3b3b;border-radius:10px;font-weight:800;font-size:16px;padding:9px 0;min-height:auto;cursor:pointer}
.pobadd{border:1px dashed var(--line,#c7d4d0);background:none;border-radius:10px;padding:9px;width:100%;font-weight:700;color:var(--accent,#0F5257);margin-top:2px;cursor:pointer;min-height:auto}
.pobtot{display:flex;justify-content:space-between;align-items:center;margin:10px 0 4px;font-weight:800}
.pobtot b{font-size:19px;color:var(--accent,#0F5257)}
.pobsave{width:100%;border:0;border-radius:14px;padding:14px;font-weight:800;font-size:16px;background:#0F5257;color:#fff;min-height:auto;margin-top:6px}
.poborder{border:1px solid var(--line,#e5ece9);border-radius:12px;padding:10px 12px;margin:6px 0;background:var(--card,#fff)}
.poborder .r{font-weight:800}.poborder .l{font-size:13px;color:var(--muted);margin-top:2px}
.pobnag{border-radius:16px;padding:13px 15px;margin:4px 0 12px;color:#063;background:linear-gradient(135deg,#F6D776,#F5C451);box-shadow:0 8px 20px rgba(245,196,81,.35);cursor:pointer;display:flex;align-items:center;gap:11px}
.pobnag b{font-size:15px}.pobnag small{display:block;opacity:.82}
`;document.head.appendChild(st);

function lineRow(d,i){
  var ln=d.lines[i];
  var ps=h('select',{onchange:function(){ln.product=ps.value;if(ln.product==='Other…'){ln.product='';setTimeout(function(){var t=prompt('Product name');if(t){ln.product=t;redraw()}},0)}}});
  ps.append(h('option',{value:''},'Product'));
  PRODUCTS.forEach(function(p){ps.append(h('option',{value:p,selected:p===ln.product?'selected':null},p))});
  if(ln.product&&PRODUCTS.indexOf(ln.product)<0){ps.append(h('option',{value:ln.product,selected:'selected'},ln.product))}
  var q=h('input',{type:'number',inputmode:'numeric',placeholder:'Qty',value:ln.qty,oninput:function(){ln.qty=q.value;upd()}});
  var v=h('input',{type:'number',inputmode:'numeric',placeholder:'₹ Value',value:ln.value,oninput:function(){ln.value=v.value;upd()}});
  var del=h('button',{class:'del',onclick:function(){d.lines.splice(i,1);if(!d.lines.length)d.lines.push({product:'',qty:'',value:''});redraw()}},'×');
  function upd(){var el=document.getElementById('pobTot');if(el)el.textContent=rs(sumD(d))}
  return h('div',{class:'pobline'},ps,q,v,del);
}
function sumD(d){return d.lines.reduce(function(a,l){return a+(+l.value||0)},0)}

U.routes.pob=function(app){
  if(isMgr()){app.append(h('div',{class:'coachc'},h('div',{class:'k'},'🧾 POB'),h('p',{},'POB (orders) is the CSO\'s entry. You see the rolled-up POB in Performance and Daily review.')));return}
  var d=draft(),feed=myPobFeed();
  var booked=todaysPob().reduce(function(a,e){return a+(+e.total||0)},0);
  var need=feed?feed.dailyNeed:0;
  app.append(h('div',{class:'coachc'},h('div',{class:'k'},'🧾 POB — orders booked'),h('p',{},'Add each order: pick the retailer, then the products with quantity and value. It adds up to today’s POB.')));
  app.append(h('div',{class:'pobhead'},
    h('div',{class:'cc'},h('b',{},rs(booked)),h('small',{},'Booked today')),
    h('div',{class:'cc'},h('b',{},need?rs(need):'—'),h('small',{},'Today’s target'))));

  // order builder
  var card=h('div',{class:'selc'});
  card.append(h('div',{style:'font-weight:800;margin-bottom:6px'},'New order'));
  // retailer picker
  var rsel=h('select',{onchange:function(){if(rsel.value==='__type'){d.retailer='';d.retailerCode='';setTimeout(function(){var t=prompt('Retailer name');if(t){d.retailer=t;redraw()}},0);return}var o=rsel.selectedOptions[0];d.retailerCode=rsel.value;d.retailer=o?o.textContent:'';}});
  rsel.append(h('option',{value:''},'— select retailer —'));
  retailers(brickNow()).forEach(function(c){rsel.append(h('option',{value:c.code,selected:c.code===d.retailerCode?'selected':null},c.name))});
  rsel.append(h('option',{value:'__type'},'+ type another retailer'));
  if(d.retailer&&!d.retailerCode){rsel.append(h('option',{value:'',selected:'selected'},d.retailer))}
  card.append(h('label',{style:'font-weight:700;font-size:13px;display:block;margin-bottom:5px'},'Retailer'+(brickNow()?(' ('+brickNow()+')'):'')),rsel);
  // lines
  card.append(h('div',{style:'margin-top:10px;font-weight:700;font-size:13px'},'Products'));
  d.lines.forEach(function(ln,i){card.append(lineRow(d,i))});
  card.append(h('button',{class:'pobadd',onclick:function(){d.lines.push({product:'',qty:'',value:''});redraw()}},'+ add product'));
  card.append(h('div',{class:'pobtot'},h('span',{},'Order total'),h('b',{id:'pobTot'},rs(sumD(d)))));
  card.append(h('button',{class:'pobsave',onclick:function(e){saveOrder(d,e.target)}},'Save order'));
  app.append(card);

  // today's saved orders
  var mine=todaysPob();
  if(mine.length){var box=h('div',{class:'selc'});box.append(h('div',{style:'font-weight:800;margin-bottom:4px'},'Today’s orders ('+mine.length+')'));
    mine.slice().reverse().forEach(function(e){box.append(h('div',{class:'poborder'},h('div',{class:'r'},(e.retailer||'Retailer')+' — '+rs(e.total)),
      h('div',{class:'l'},(e.lines||[]).map(function(l){return l.product+' ×'+l.qty}).join(' · '))))});
    app.append(box);}
};

function saveOrder(d,btn){
  if(!d.retailer){toast&&toast('Pick or type a retailer.');return}
  var lines=d.lines.filter(function(l){return l.product&&(+l.value||+l.qty)});
  if(!lines.length){toast&&toast('Add at least one product with qty/value.');return}
  if(btn){btn.disabled=true;btn.textContent='Saving…'}
  var rec={date:d.date,retailer:d.retailer,retailerCode:d.retailerCode||'',brick:brickNow(),
    lines:lines.map(function(l){return{product:l.product,qty:+l.qty||0,value:+l.value||0}}),
    total:lines.reduce(function(a,l){return a+(+l.value||0)},0)};
  (typeof save==='function'?save('pob',rec):Promise.resolve(true)).then(function(ok){
    if(ok){S.pobDraft=null;toast&&toast('✅ Order saved');try{render()}catch(e){}}
    else if(btn){btn.disabled=false;btn.textContent='Save order'}
  });
}

U.pobBookedToday=function(){return todaysPob().reduce(function(a,e){return a+(+e.total||0),0},0)};

/* Work-tab entry strip (after DCR's, before task) */
var prevToday=U.today;U.today=function(app,tk,rest){prevToday&&prevToday(app,tk,rest);if(isMgr())return;
  if((U.leaveToday&&U.leaveToday()))return;
  var booked=todaysPob().reduce(function(a,e){return a+(+e.total||0)},0);
  var c=h('div',{class:'pobnag',onclick:function(){go('pob')}},h('span',{style:'font-size:20px'},'🧾'),
    h('div',{style:'flex:1'},h('b',{},booked?('POB booked today: '+rs(booked)):'Add today’s POB'),h('small',{},booked?'Tap to add more orders':'Log orders — retailer, product, qty, value')),h('span',{style:'font-weight:800'},'›'));
  var top=app.querySelector('.tasknag')||tk;if(top&&top.parentNode)top.before(c);else app.prepend(c);
};
})();
