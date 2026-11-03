/* Field Tracker – manager sales card: Month-to-date and YTD, Area + 4 HQs, brand-wise.
   Feeds (written by the evening review from the company "Productwise Sales At A Glance" files):
   sales_<HQ>    {asOf, period, b:{<brand>:{t, ly, g, ret, exp, brk, n}}}   – this month, cumulative
   salesytd_<HQ> {asOf, period, b:{...same...}}                              – financial year to date
   t = target, ly = last year same period, g = gross, ret = sales return, exp = expiry, brk = breakage, n = net. */
(function(){
'use strict';
var U=window.FTUI;if(!U)return;
var HQS=['Agartala','Bongaigaon','Dhubri','Guwahati'];
var st=document.createElement('style');st.textContent=`
.sales2 .seg{display:flex;gap:6px;overflow-x:auto;margin:8px 0 2px;scrollbar-width:none}.sales2 .seg::-webkit-scrollbar{display:none}
.sales2 .seg button{flex:0 0 auto;border:1px solid var(--line,#dfe7e4);background:var(--card,#fff);color:var(--fg,#14302E);border-radius:999px;padding:6px 12px;font-size:12.5px;font-weight:700;min-height:auto}
.sales2 .seg button.on{background:var(--accent,#0F5257);border-color:var(--accent,#0F5257);color:#fff}
.sales2 .kp{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin:10px 0}
.sales2 .kp div{background:var(--soft,#F2F5F4);border-radius:12px;padding:9px 10px;min-width:0}
.sales2 .kp small{display:block;font-size:10.5px;letter-spacing:.8px;text-transform:uppercase;color:var(--muted,#5B716E);font-weight:700}
.sales2 .kp b{display:block;font-size:16px;margin-top:2px;font-variant-numeric:tabular-nums;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sales2 .kp .hi{background:var(--accent,#0F5257);color:#fff}.sales2 .kp .hi small{color:rgba(255,255,255,.8)}
.sales2 .up{color:#1B8A5A}.sales2 .dn{color:#C2410C}.sales2 .kp .hi .up,.sales2 .kp .hi .dn{color:#fff}
.sales2 table{width:100%;font-size:11.5px;border-collapse:collapse}
.sales2 th,.sales2 td{padding:7px 3px;text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums;border-bottom:1px solid var(--line,#e5ece9)}
.sales2 th:first-child,.sales2 td:first-child{text-align:left;white-space:normal}
.sales2 th{font-size:10.5px;color:var(--muted,#5B716E);font-weight:700}
.sales2 td small{display:block;font-size:10.5px;color:var(--muted,#5B716E)}
.sales2 tr.tot td{font-weight:800;border-top:2px solid var(--line,#e5ece9)}
`;document.head.appendChild(st);
function rsx(v){v=Math.round(v||0);return (v<0?'–':'')+'₹'+Math.abs(v).toLocaleString('en-IN')}
function pct(a,b){return b?Math.round(a/b*100):null}
function gr(n,ly){return ly?Math.round((n-ly)/Math.abs(ly)*100):null}
function pc(v,cls){if(v==null)return h('span',{style:'color:var(--muted)'},'—');return h('span',{class:cls?(v>=0?'up':'dn'):''},(cls&&v>0?'+':'')+v+'%')}
function add(a,x){['t','ly','g','ret','exp','brk','n'].forEach(function(k){a[k]=(a[k]||0)+(+x[k]||0)});return a}
function feed(kind,hq){return (S.feeds||{})[kind+'_'+hq]||null}
// fallback for YTD totals when no YTD file has come yet: Apr–Oct net from the Geo report + this month
function ytdFallback(hq){var x=feed('inc',hq),m=feed('sales',hq);if(!x||!x.ytdS)return null;var mt=m?Object.keys(m.b||{}).reduce(function(a,k){return add(a,m.b[k])},{}):{};
  return {asOf:m&&m.asOf||'',period:'YTD to Oct (Geo report) + Nov to '+(m&&m.asOf||'date'),fallback:true,b:{'All brands':{t:0,ly:(x.ytdLY||0)+(mt.ly||0),g:0,ret:0,exp:0,brk:0,n:(x.ytdS||0)+(mt.n||0)}}}}
function data(kind,hq){var L=hq==='Area'?HQS:[hq],B={},asOf='',period='',fb=false,any=false;
  L.forEach(function(q){var f=feed(kind,q);if(!f&&kind==='salesytd')f=ytdFallback(q);if(!f)return;any=true;if(f.fallback)fb=true;asOf=f.asOf||asOf;period=f.period||period;
    Object.keys(f.b||{}).forEach(function(k){B[k]=add(B[k]||{},f.b[k])})});
  if(!any)return null;var T=Object.keys(B).reduce(function(a,k){return add(a,B[k])},{});return {B:B,T:T,asOf:asOf,period:period,fb:fb}}
var sel={p:U.lsGet?U.lsGet('ft_sp','mtd'):'mtd',h:U.lsGet?U.lsGet('ft_sh','Area'):'Area'};
function seg(list,cur,f){return h('div',{class:'seg'},list.map(function(x){return h('button',{class:x[0]===cur?'on':'',onclick:function(){f(x[0])}},x[1])}))}
function card(){var box=h('div',{class:'score sales2 salestop'});draw(box);return box}
function draw(box){box.innerHTML='';
  var kind=sel.p==='ytd'?'salesytd':'sales',d=data(kind,sel.h);
  box.append(h('b',{},'Company sales'),
    seg([['mtd','This month'],['ytd','YTD (Apr–to date)']],sel.p,function(v){sel.p=v;U.lsSet&&U.lsSet('ft_sp',v);draw(box)}),
    seg([['Area','Overall area']].concat(HQS.map(function(q){return[q,q]})),sel.h,function(v){sel.h=v;U.lsSet&&U.lsSet('ft_sh',v);draw(box)}));
  if(!d){box.append(h('small',{style:'display:block;margin-top:8px;color:var(--muted)'},sel.p==='ytd'?'YTD figures appear after the YTD sales file is uploaded and the evening review runs.':'Figures appear after the next evening review.'));return}
  var T=d.T,ach=pct(T.n,T.t),g=gr(T.n,T.ly),cl=(T.exp||0)+(T.brk||0);
  box.append(h('small',{style:'display:block;color:var(--muted);margin-top:6px'},(sel.h==='Area'?'Overall area (4 HQs)':sel.h)+' · '+(d.period||'')+(d.asOf?' · cumulative to '+d.asOf:'')));
  box.append(h('div',{class:'kp'},
    h('div',{class:'hi'},h('small',{},'Achievement (net)'),h('b',{},rsx(T.n))),
    h('div',{class:'hi'},h('small',{},'Performance'),h('b',{},T.t?pc(ach):'—')),
    h('div',{},h('small',{},'Target'),h('b',{},T.t?rsx(T.t):'—')),
    h('div',{},h('small',{},'Last year'),h('b',{},T.ly?rsx(T.ly):'—')),
    h('div',{},h('small',{},'Growth vs LY'),h('b',{},pc(g,true))),
    h('div',{},h('small',{},'Gross sales'),h('b',{},d.fb?'—':rsx(T.g))),
    h('div',{},h('small',{},'Sales return'),h('b',{},d.fb?'—':(T.ret?rsx(-T.ret):'₹0'))),
    h('div',{},h('small',{},'Expiry / breakage'),h('b',{},d.fb?'—':(cl?rsx(-cl):'₹0')))));
  if(d.fb){box.append(h('small',{style:'display:block;color:var(--muted)'},'Totals only, from the October Geo report plus this month. Target, gross, returns and brand-wise YTD need the YTD "Productwise Sales At A Glance" file (1 Apr to date).'));return}
  var rows=Object.keys(d.B).map(function(k){return[k,d.B[k]]}).filter(function(x){var v=x[1];return v.t||v.ly||v.g||v.n||v.ret||v.exp||v.brk}).sort(function(a,b){return (b[1].t||0)-(a[1].t||0)});
  box.append(h('b',{style:'display:block;margin-top:4px'},'Brand-wise'),h('div',{class:'tbl'},h('table',{},
    h('tr',{},h('th',{},'Brand'),h('th',{},'Target'),h('th',{},'Net'),h('th',{},'Ach'),h('th',{},'Gr')),
    rows.map(function(x){var v=x[1],c=(v.exp||0)+(v.brk||0),sub=['LY '+(v.ly?rsx(v.ly):'—')];if(v.ret)sub.push('Ret '+rsx(-v.ret));if(c)sub.push('Exp/Brk '+rsx(-c));
      return h('tr',{},h('td',{},h('b',{},x[0]),h('small',{},sub.join(' · '))),h('td',{},v.t?rsx(v.t):'—'),h('td',{},rsx(v.n)),h('td',{},pc(pct(v.n,v.t))),h('td',{},pc(gr(v.n,v.ly),true)))}),
    h('tr',{class:'tot'},h('td',{},'Total',h('small',{},'LY '+rsx(T.ly))),h('td',{},rsx(T.t)),h('td',{},rsx(T.n)),h('td',{},pc(ach)),h('td',{},pc(g,true))))),
    h('small',{style:'display:block;color:var(--muted)'},'Net = gross − sales return − expiry − breakage. Performance = net ÷ target. Growth = net vs last year, same period. Dhubri is vacant.'))}
U.salesTop=card;
})();
