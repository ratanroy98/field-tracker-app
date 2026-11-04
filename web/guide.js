/* Field Tracker — "Your next move": a time-aware guiding-angel card on Today.
   By the hour it tells the CSO exactly who to meet now, what to detail, the pitch to speak,
   the profit to show, and a push to keep going — then fires an hourly phone ping with the same
   (via the AndroidApp.meeting alarm bridge, so no app reinstall is needed).
   Pure coaching: it never mentions the review/mail. Data: today's brick + D.cust + rates. */
(function(){
'use strict';
var U=window.FTUI;if(!U)return;
function isMgr(){return S.mgr&&!S.viewAs}
function myEmail(){try{return (S.viewAs&&S.viewAs.Email)||(S.me&&S.me.Email)||''}catch(e){return''}}
function hqOf(){try{return (S.viewAs||S.me||{}).HQ||''}catch(e){return''}}

var st=document.createElement('style');st.textContent=`
.nowc{border-radius:20px;padding:0;margin:0 0 12px;overflow:hidden;background:var(--panel,#fff);border:1px solid var(--line,#e5ece9);box-shadow:0 8px 22px rgba(16,40,38,.08);animation:rise .35s ease both}
.nowc .top{background:linear-gradient(135deg,#0F5257,#1B7F79 60%,#2BA59B);color:#fff;padding:13px 15px;position:relative;overflow:hidden}
.nowc .top:after{content:'';position:absolute;right:-24px;top:-30px;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,.08)}
.nowc .clock{font-size:11px;letter-spacing:1.4px;text-transform:uppercase;font-weight:800;color:#F6D776}
.nowc .top h3{margin:3px 0 0;font-size:18px;color:#fff!important;position:relative;z-index:1}
.nowc .top .sub{font-size:12.5px;opacity:.92;margin-top:2px}
.nowc .bd{padding:13px 15px}
.nowc .who{font-size:14px;font-weight:700;margin:0 0 7px}
.nowc .who span{color:var(--accent,#0F5257)}
.nowc .say{border-left:4px solid #F6D776;background:var(--soft,#F2F5F4);border-radius:10px;padding:10px 12px;margin:0 0 9px;font-size:13.5px;line-height:1.45}
.nowc .say b{display:block;font-size:11px;letter-spacing:.6px;text-transform:uppercase;color:var(--muted);margin-bottom:3px}
.nowc .profit{display:flex;gap:8px;align-items:center;background:#FFF7E6;border:1px solid #F3DCA0;border-radius:10px;padding:8px 11px;margin:0 0 9px;font-size:13px;color:#6b4e00}
.nowc .tips{margin:0;padding:0;list-style:none}
.nowc .tips li{padding:4px 0 4px 20px;position:relative;font-size:13px;line-height:1.4}
.nowc .tips li:before{content:'→';position:absolute;left:0;color:var(--accent,#0F5257);font-weight:800}
.nowc .pend{background:#FFF3E0;border:1px solid #F3C88A;border-radius:12px;padding:10px 12px;margin:0 0 10px;font-size:13px;line-height:1.4;color:#6b4e00}
.nowc .pend b{display:block;font-size:11px;letter-spacing:.5px;text-transform:uppercase;color:#B45309;margin-bottom:4px}
.nowc .pend .pl{padding:3px 0}
.nowc .morebtn{margin:9px 0 0;border:1px dashed var(--line,#dfe7e4);background:transparent;color:var(--accent,#0F5257);border-radius:10px;padding:8px;width:100%;font-weight:700;font-size:12.5px;min-height:auto}
.nowc .push{margin:10px 0 0;font-weight:700;color:#13684A;font-size:13.5px}
.nowc .vent{margin:9px 0 0;font-size:12px;color:var(--muted);border-top:1px dashed var(--line,#e5ece9);padding-top:8px}
.nowc .nextline{margin:8px 0 0;font-size:12px;color:var(--muted)}
.nowc .seg{display:flex;gap:5px;overflow-x:auto;scrollbar-width:none;padding:10px 15px 2px}.nowc .seg::-webkit-scrollbar{display:none}
.nowc .seg button{flex:0 0 auto;border:1px solid var(--line,#dfe7e4);background:var(--panel,#fff);color:var(--muted);border-radius:999px;padding:5px 10px;font-size:11.5px;font-weight:700;min-height:auto}
.nowc .seg button.on{background:var(--accent,#0F5257);border-color:var(--accent,#0F5257);color:#fff}
`;document.head.appendChild(st);

/* ---- today's customers from the brick ---- */
function custByType(brick,t){try{if(!window.D||!D.cust)return[];return D.cust.filter(function(c){return c[2]===brick&&c[3]===t}).map(function(c){return{name:c[4],spec:c[6]||''}})}catch(e){return[]}}
function names(a,n){n=n||4;if(!a.length)return'';return a.slice(0,n).map(function(x){return x.name}).join(', ')+(a.length>n?' +'+(a.length-n)+' more':'')}
function offerLine(){try{var R=U.REF&&U.REF();if(R&&R.offers&&R.offers.length){var o=R.offers[(U.dayIdx?U.dayIdx():0)%R.offers.length];return o.t+(o.say?' — “'+o.say+'”':'')}}catch(e){}return''}
// What is STILL LEFT with the CSO (issued but not yet reported), from inbal_<HQ>. We guide handover + Ventasys report, never "carry".
function pendingLines(c){try{var k=Object.keys(S.feeds||{}).filter(function(z){return z.indexOf('inbal_')===0})[0],f=k?S.feeds[k]:null;if(!f||!(f.items||[]).length)return[];
  var byBrand={};(f.items||[]).forEach(function(it){var b=it.brand||'';if(!b)return;var e=byBrand[b]=byBrand[b]||{inp:0,smp:0};if((it.kind||'input')==='sample')e.smp+=(+it.qty||0);else e.inp+=(+it.qty||0)});
  var out=[];Object.keys(byBrand).forEach(function(b){var e=byBrand[b];if(e.inp<=0&&e.smp<=0)return;
    var what=[];if(e.inp>0)what.push(e.inp+' input'+(e.inp>1?'s':''));if(e.smp>0)what.push(e.smp+' sample'+(e.smp>1?'s':''));
    out.push(what.join(' + ')+' of '+b+' — hand to today’s listed '+b+' doctors / chemists and report it in Ventasys.')});
  return out;}catch(e){return[]}}

var PUSH=['You are the doctor’s trusted rep — walk in sure of yourself.','Every “yes” today is money in your pocket at month-end.','One more quality call than yesterday — that is how toppers are built.','Slow is smooth, smooth is fast. Finish the brick, win the day.','Numbers follow effort. Put in the calls and the ₹ will come.','They remember the rep who shows up with a plan. That is you today.'];
function push(){return PUSH[(U.dayIdx?U.dayIdx():new Date().getDate())%PUSH.length]}

/* ---- the day as phases ---- */
// each phase: {k, from, to, icon, title, build(ctx) -> {who, say[], profit, tips[]}}
function phases(){return [
  {k:'prep',from:0,to:9,icon:'🧭',title:'Get set for the day',build:function(c){return{
    who:'Today: '+(c.brick||'your beat')+' · '+c.docs.length+' doctors · '+c.rets.length+' chemists · '+c.whs.length+' wholesalers',
    say:[['Your opening plan','Call your wholesaler first to secure stock, then doctors through the late morning, chemists and new products in the afternoon.']],
    tips:['Check your POB target for today before you step out.','Ventasys captures your calls, POB, inputs and Rx — the app just guides you; report each in Ventasys the same day.']}}},
  {k:'ws',from:9,to:10,icon:'🏬',title:'Start with wholesalers & stockists',build:function(c){return{
    who:c.whs.length?'Meet: '+names(c.whs):'Cover your area wholesaler / stockist first',
    say:[['Say','“Bhaiya, book the Dexona lot and R-Loc 150 today — they are moving fast this month and chemists downstream need them. Place it now so no one runs dry.”']],
    profit:'Secure stock early so every retail order you take today can actually be filled.',
    tips:['Book Dexona and R-Loc first — your impact brands.','Note what is short so you can raise a stock request in the app.']}}},
  {k:'doc',from:10,to:13,icon:'👨‍⚕️',title:'Doctor time — the heart of the day',build:function(c){return{
    who:c.docs.length?'Meet every doctor in '+(c.brick||'the brick')+': '+names(c.docs,5):'Meet all the doctors on today’s list',
    say:[
      ['Deca · ask for the next 5','“Sir, for your elderly and post-surgery patients losing weight and strength, Deca-Durabolin rebuilds muscle and appetite. Just your next 5 such patients — I’ll keep the chemist stocked.”'],
      ['Skinlite · pigmentation','“Sir, Skinlite Cream clears melasma and dark spots; pair it with the Facewash and Day Care for upkeep. Please write it for your next 5 pigmentation patients.”'],
      ['R-Loc 150 · acidity','“Sir, R-Loc 150 holds night acidity better — switch your next 5 Aciloc patients to R-Loc and I’ll ensure it’s available.”']],
    tips:['List doctors first — hand over their gift, then detail. All other doctors get the brand that fits their speciality + a sample.','Always close with a number: “your next 5 patients”.','Match the brand to the speciality — Dexona & Ciprobid for ortho/surgeons, Skinlite for derma/GP.']}}},
  {k:'mid',from:13,to:14,icon:'🏪',title:'Chemists around the doctors you met',build:function(c){return{
    who:c.rets.length?'Pull the Rx through at: '+names(c.rets):'Visit the chemists next to the doctors you just met',
    say:[['Say','“Doctor just wrote Skinlite and R-Loc for patients walking to you — keep 6 of each so you don’t lose the sale.”']],
    profit:'A chemist stocks when he sees prescriptions + margin. You just created the prescriptions — now show the margin.',
    tips:['Convert every doctor visit into stock at his nearest chemist the same day.']}}},
  {k:'ret',from:14,to:16,icon:'🧴',title:'Retail & new products',build:function(c){return{
    who:c.rets.length?'Book orders at: '+names(c.rets):'Work your retailers for orders',
    say:[['Standard order','“Skinlite Cream 15g ×6, Facewash ×6, Day Care ×6, R-Loc 150 ×1 box, Raft ×6 — fast movers with doctor support nearby.”'+(offerLine()?' Offer today: '+offerLine():'')]],
    profit:'Retailer buys at ~80% of MRP and keeps ~20%. On a ₹1,000 order that is ₹200 in his pocket today — say the rupees, not “good margin”.',
    tips:['Book Raft at every retailer; detail it to GERD doctors so it repeats.','Place Facewash & Day Care wherever Skinlite Cream goes.']}}},
  {k:'conv',from:16,to:17,icon:'🔁',title:'Close the loops',build:function(c){return{
    who:'Go back to any chemist who said “later” and any doctor you missed',
    say:[['Say','“I’m here as promised — shall I book the 6 Skinlite and the R-Loc now so you’re set for the week?”']],
    tips:['A gentle second ask converts most “maybes”.','Note anyone truly not met — carry them to their next visit day.']}}},
  {k:'wrap',from:17,to:20,icon:'📲',title:'Lock in the day',build:function(c){return{
    who:'Report everything today while it’s fresh',
    say:[['Do it now','Enter today’s POB, inputs, Rx and orders in Ventasys. What isn’t reported doesn’t count.']],
    push:'Finish strong — a fully reported day is a day that pays.',
    tips:['POB, inputs, reasons — all in before 8 PM.','Tomorrow’s plan is ready for you in the app in the morning.']}}}
];}
function phaseAt(hr){var P=phases();for(var i=0;i<P.length;i++)if(hr>=P[i].from&&hr<P[i].to)return P[i];return P[P.length-1]}
function ctx(){var brick=(typeof brickToday==='function'&&brickToday())||'';return{brick:brick,docs:custByType(brick,'D'),rets:custByType(brick,'R'),whs:custByType(brick,'W')}}

function render(ph,c){var d=ph.build(c)||{};
  var box=h('div',{class:'nowc'});
  var now=new Date(),hr=now.getHours(),mm=now.getMinutes();
  box.append(h('div',{class:'top'},h('div',{class:'clock'},'⏰ Right now · '+(hr%12||12)+(mm<10?':0':':')+mm+(hr<12?' AM':' PM')),h('h3',{},ph.icon+' '+ph.title),h('div',{class:'sub'},'Your digital Ratan Roy, with you all day')));
  var bd=h('div',{class:'bd'});
  var pend=pendingLines(c);if(pend.length)bd.append(h('div',{class:'pend'},h('b',{},'📦 Still left with you — hand over & report'),pend.map(function(t){return h('div',{class:'pl'},'• '+t)})));
  if(d.who)bd.append(h('div',{class:'who'},d.who));
  var says=d.say||[],more=!!(S.tab&&S.tab.nowmore),extra=(says.length>1)||d.profit||(d.tips&&d.tips.length);
  if(says[0])bd.append(h('div',{class:'say'},h('b',{},says[0][0]),says[0][1]));
  if(extra&&more){
    says.slice(1).forEach(function(s){bd.append(h('div',{class:'say'},h('b',{},s[0]),s[1]))});
    if(d.profit)bd.append(h('div',{class:'profit'},'💰',h('span',{},d.profit)));
    if(d.tips&&d.tips.length)bd.append(h('ul',{class:'tips'},d.tips.map(function(t){return h('li',{},t)})));
  }
  if(extra)bd.append(h('button',{class:'morebtn',onclick:function(){S.tab.nowmore=!more;try{window.render&&window.render()}catch(e){}}},more?'▴ Show less':'▾ More pitches, profit & tips'));
  bd.append(h('div',{class:'push'},'💪 '+(d.push||push())));
  if(ph.k!=='wrap')bd.append(h('div',{class:'vent'},'📲 As you go: hand over the input/sample and report the Rx, input or order in Ventasys the same day.'));
  box.append(bd);
  // phase switcher so they can look ahead / behind (addictive)
  var P=phases();box.append(h('div',{class:'seg'},P.map(function(p){return h('button',{class:p.k===ph.k?'on':'',onclick:function(){S.tab.nowph=p.k;try{window.render&&window.render()}catch(e){}}},p.icon+' '+({prep:'Start',ws:'WS',doc:'Doctors',mid:'Chemists',ret:'Retail',conv:'Close',wrap:'Report'})[p.k])})));
  return box;
}

/* schedule hourly phone pings for the rest of today via the meeting-alarm bridge */
function scheduleHourly(c){try{if(!window.AndroidApp||!AndroidApp.meeting)return;var now=new Date(),hr=now.getHours();var P=phases();
  for(var hh=Math.max(hr+1,9);hh<=18;hh++){var ph=phaseAt(hh),d=ph.build(c)||{};
    var at=new Date();at.setHours(hh,0,0,0);if(at.getTime()<=Date.now())continue;
    var body=(d.who?d.who+'. ':'')+((d.say&&d.say[0])?d.say[0][1]:'');if(body.length>180)body=body.slice(0,177)+'…';
    try{AndroidApp.meeting('g_'+TODAY+'_'+hh,at.getTime(),ph.icon+' '+ph.title,body)}catch(e){}}
  }catch(e){}}

U.nextMoveCard=function(){try{if(isMgr())return'';
  var c=ctx();
  // weekly off / no brick: a lighter prompt
  var tpv=(typeof effDay==='function')?effDay(myEmail(),TODAY):null;
  if(tpv&&/off|leave/i.test(tpv.type||'')){return h('div',{class:'nowc'},h('div',{class:'top'},h('div',{class:'clock'},'⏰ Today'),h('h3',{},'🌴 Rest & recharge'),h('div',{class:'sub'},'Your digital Ratan Roy')),h('div',{class:'bd'},h('div',{class:'push'},'💪 Enjoy the break — plan one doctor you’ll convert first thing tomorrow.')));}
  var ph=phaseAt(new Date().getHours());if(S.tab&&S.tab.nowph){var P=phases();for(var i=0;i<P.length;i++)if(P[i].k===S.tab.nowph)ph=P[i]}
  scheduleHourly(c);
  return render(ph,c);
}catch(e){return''}};
})();
