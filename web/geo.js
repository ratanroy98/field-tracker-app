/* Field Tracker – Performance (manager only). Built from the company Geo "Sales at Glance" workbook
   (SAG = performance & incentive basis; HQ/AREA/REGION = product-wise; Growth Bucket; Diversity; NPD).
   The data file web/perf.dat is AES-256-GCM encrypted; the key reaches only the manager (feed geokey_mgr). */
(function(){
'use strict';
var U=window.FTUI;if(!U)return;
function isMgr(){return S.mgr&&!S.viewAs}
var HQS=['Agartala','Bongaigaon','Dhubri','Guwahati'],CSO={Agartala:'Karamjit',Bongaigaon:'Prashun',Dhubri:'Vacant',Guwahati:'Bhubaneswar'};
var MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct'],MK=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
// OTX portfolio: type and the channels that move each brand (Ratan to confirm the types)
var META={'Deca Durabolin':['Rx','Doctors · Stockists'],'R-Loc':['Dual','Doctors · Retailers (Raft OTC)'],'Dexona':['Rx','Wholesalers · Stockists'],'Skinlite':['Dual','Retailers · Doctors (Facewash/Day Care OTC)'],
  'Ciprobid':['Rx','Doctors · Wholesalers'],'Falcigo':['Rx','Stockists · Hospitals'],'Tiniba':['Rx','Doctors · Wholesalers'],'Oflin':['Rx','Doctors · Wholesalers'],'Cadiphylate':['Rx','Doctors · Retailers'],
  'Oriprim':['Rx','Doctors · Wholesalers'],'Itchcam':['OTC','Retailers'],'Zipcet':['Dual','Retailers · Doctors'],'Discontinued SKU':['—','Liquidate stock']};
var URLS=['https://raw.githubusercontent.com/ratanroy98/field-tracker-app/main/web/perf.dat','https://cdn.jsdelivr.net/gh/ratanroy98/field-tracker-app@main/web/perf.dat'];
var G=null,state='idle';
function b64(s){var b=atob(s.replace(/\s+/g,'')),u=new Uint8Array(b.length);for(var i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u}
function load(){if(G||state==='busy')return;if(window.__GEO){G=window.__GEO;return}
  var key=((S.feeds||{}).geokey_mgr||{}).k;if(!key){state='nokey';return}
  if(!(window.crypto&&crypto.subtle)){state='nocrypto';return}
  state='busy';var day=Date.now();
  (function tryU(i){if(i>=URLS.length){state='fail';rr();return}
    fetch(URLS[i]+'?v='+day,{cache:'no-store'}).then(function(r){if(!r.ok)throw 0;return r.text()}).then(function(t){var d=b64(t);
      return crypto.subtle.importKey('raw',b64(key),'AES-GCM',false,['decrypt']).then(function(k){return crypto.subtle.decrypt({name:'AES-GCM',iv:d.slice(0,12)},k,d.slice(12))})})
     .then(function(pt){G=JSON.parse(new TextDecoder().decode(pt));state='ok';rr()}).catch(function(){tryU(i+1)})})(0)}
function rr(){try{render()}catch(e){}}

/* ---------- styles ---------- */
var st=document.createElement('style');st.textContent=`
.geo{--g1:#0F5257;--g2:#1B7F79;--ok:#1B8A5A;--mid:#D99A1E;--bad:#C2410C;--soft2:var(--soft,#F2F5F4)}
.geo .hero{border-radius:22px;padding:16px;color:#fff;background:radial-gradient(120% 140% at 100% 0%,#2BA59B 0%,var(--g2) 35%,var(--g1) 75%);box-shadow:0 12px 30px rgba(15,82,87,.28);margin:0 0 12px;position:relative;overflow:hidden}
.geo .hero:after{content:'';position:absolute;right:-40px;top:-40px;width:160px;height:160px;border-radius:50%;background:rgba(255,255,255,.07)}
.geo .hero .k{font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:#F6D776;font-weight:800}
.geo .hero h2{margin:4px 0 10px;font-size:19px;line-height:1.2;color:#fff!important;position:relative;z-index:1}
.geo .hrow{display:flex;gap:14px;align-items:center}
.geo .hrow{position:relative;z-index:1}.geo .hrow>div:last-child{min-width:0}.geo .hrow .big{white-space:nowrap;font-size:25px;color:#fff;font-weight:800;line-height:1.05;font-variant-numeric:tabular-nums}
.geo .hrow small{display:block;opacity:.85;font-size:12.5px;margin-top:3px}
.geo .chips{display:flex!important;flex-wrap:nowrap!important;gap:6px;overflow-x:auto;-webkit-overflow-scrolling:touch;margin:0 0 10px;padding-bottom:2px;scrollbar-width:none}.geo .chips::-webkit-scrollbar{display:none}
.geo .chips button{flex:0 0 auto;border:1px solid var(--line,#dfe7e4);background:var(--card,#fff);color:var(--fg,#14302E);border-radius:999px;padding:7px 12px;font-size:12.5px;font-weight:700;min-height:auto}
.geo .chips button.on{background:var(--g1);border-color:var(--g1);color:#fff;box-shadow:0 4px 10px rgba(15,82,87,.25)}
.geo .chips.main button{padding:9px 14px;font-size:13.5px}
.geo .card{background:var(--card,#fff);border:1px solid var(--line,#e5ece9);border-radius:18px;padding:14px;margin:0 0 12px;box-shadow:0 2px 10px rgba(0,0,0,.04);animation:rise .3s ease both}
.geo .card h3{margin:0 0 8px;font-size:15.5px;display:flex;align-items:center;gap:8px}.geo .card h3 small{margin-left:auto;font-weight:600;color:var(--muted);font-size:11.5px}
.geo .kp{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
.geo .kp div{background:var(--soft2);border-radius:14px;padding:10px;min-width:0}
.geo .kp small{display:block;font-size:10.5px;letter-spacing:.8px;text-transform:uppercase;color:var(--muted);font-weight:800}
.geo .kp b{display:block;font-size:17px;margin-top:3px;font-variant-numeric:tabular-nums;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.geo .up{color:var(--ok)}.geo .dn{color:var(--bad)}.geo .md{color:var(--mid)}
.geo .hqg{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.geo .hqc{border-radius:16px;padding:12px;background:var(--card,#fff);border:1px solid var(--line,#e5ece9);cursor:pointer;min-width:0;position:relative}
.geo .hqc b{display:block;font-size:14.5px}.geo .hqc small{display:block;color:var(--muted);font-size:11.5px}
.geo .hqc .rg{position:absolute;right:8px;top:8px}
.geo .hqc .row{display:flex;justify-content:space-between;font-size:12px;margin-top:6px;font-variant-numeric:tabular-nums}
.geo table{width:100%;border-collapse:collapse;font-size:12px}
.geo th,.geo td{padding:7px 3px;text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums;border-bottom:1px solid var(--line,#eef2f1)}
.geo th:first-child,.geo td:first-child{text-align:left;white-space:normal}
.geo th{font-size:10.5px;color:var(--muted);font-weight:800;text-transform:uppercase;letter-spacing:.4px}
.geo td small{display:block;color:var(--muted);font-size:10.5px}
.geo tr.tot td{font-weight:800;border-top:2px solid var(--line,#e5ece9)}
.geo .tag{display:inline-block;font-size:9.5px;font-weight:800;border-radius:6px;padding:1px 5px;margin-left:4px;vertical-align:1px}
.geo .tag.Rx{background:#E3EEFF;color:#1E3A8A}.geo .tag.OTC{background:#FFF1D6;color:#8A5A00}.geo .tag.Dual{background:#E8F6EE;color:#13684A}
.geo .heat{table-layout:fixed}.geo .heat th{padding:4px 0;font-size:9.5px}.geo .heat th:first-child{width:40px}.geo .heat th:last-child{width:30px}.geo .heat td{text-align:center;font-size:10px;padding:6px 0;border:2px solid var(--card,#fff);border-radius:6px}
.geo .heat td:first-child{text-align:left;font-weight:700;padding-left:4px}
.geo .h5{background:#1B8A5A;color:#fff}.geo .h4{background:#7CC59A;color:#0B3A25}.geo .h3{background:#F6D776;color:#5A4300}.geo .h2{background:#F4A261;color:#4A2300}.geo .h1{background:#E5484D;color:#fff}.geo .h0{background:var(--soft2);color:var(--muted)}
.geo .bar{height:9px;border-radius:6px;background:var(--soft2);position:relative;overflow:visible;margin-top:4px}
.geo .bar i{position:absolute;left:0;top:0;bottom:0;border-radius:6px}
.geo .bar em{position:absolute;top:-3px;bottom:-3px;width:2px;background:var(--fg,#14302E);opacity:.5}
.geo .lst>div{padding:9px 0;border-bottom:1px solid var(--line,#eef2f1)}.geo .lst>div:last-child{border-bottom:0}
.geo .lst .t{display:flex;justify-content:space-between;gap:8px;font-size:13px}.geo .lst .t span{font-variant-numeric:tabular-nums;white-space:nowrap}
.geo .me{background:linear-gradient(90deg,rgba(246,215,118,.35),transparent)}
.geo .ins{border-left:4px solid var(--mid);padding:10px 12px;border-radius:12px;background:var(--soft2);margin:0 0 8px;font-size:13.5px;line-height:1.45}
.geo .ins.bad{border-color:var(--bad)}.geo .ins.ok{border-color:var(--ok)}
.geo .ins b{display:block;font-size:13.5px;margin-bottom:2px}.geo .ins i{display:block;font-style:normal;color:var(--g1);font-weight:700;margin-top:4px;font-size:12.5px}
.geo .note{font-size:12px;color:var(--muted);margin:6px 0 0}
.geo svg text{font-family:inherit}
.geo .leg{display:flex;gap:12px;font-size:11px;color:var(--muted);margin-top:4px;flex-wrap:wrap}.geo .leg span:before{content:'';display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:4px;vertical-align:-1px;background:var(--c)}
.geo .tbl{overflow-x:auto;-webkit-overflow-scrolling:touch}
.sharebar{display:flex;gap:8px;margin:0 0 10px}
.sharebar button{flex:1;border:0;border-radius:12px;padding:11px;font-weight:800;font-size:14px;background:#128C7E;color:#fff;min-height:auto;display:inline-flex;align-items:center;justify-content:center;gap:7px}
.sharebar button.alt{background:var(--card,#fff);color:var(--g1,#0F5257);border:1px solid var(--line,#dfe7e4)}
.printhdr{display:none}
@media print{
  html,body{background:#fff!important}
  .bnav,.fthead .acts,.fthead .ib,.fthead .hb,.subtabs,.geo .chips,.sharebar,.sales2 .seg,.geo .note{display:none!important}
  .geo .card,.sales2,.geo .hero,.score{box-shadow:none!important;break-inside:avoid;page-break-inside:avoid}
  .geo .hero{-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .printhdr{display:block;margin:0 0 10px;font:700 15px/1.3 var(--display,sans-serif);color:#0F5257}
  .printhdr small{display:block;font-weight:600;color:#5B716E;font-size:12px}
}
`;document.head.appendChild(st);
function shareView(title){try{var old=document.querySelector('.printhdr');if(old)old.remove();
  var hd=document.createElement('div');hd.className='printhdr';hd.innerHTML='Guwahati Area · '+(title||'Performance')+'<small>Zydus GEO · Ratan Roy · '+new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})+'</small>';
  var box=document.querySelector('.geo,.sales2');if(box)box.insertBefore(hd,box.firstChild);
  setTimeout(function(){window.print()},60)}catch(e){try{window.print()}catch(_){}}}
U.shareView=shareView;

/* ---------- number helpers (all values in ₹ lakh) ---------- */
function L(v){v=+v||0;return (v<0?'–':'')+'₹'+Math.abs(v).toFixed(2)+' L'}
function P(a,b){return b?a/b*100:null}
function pf(v){return v==null?'—':Math.round(v)+'%'}
function gcls(v){return v==null?'':v>=0?'up':'dn'}
function pcls(v){return v==null?'':v>=100?'up':v>=90?'md':'dn'}
function gr(s,ly){return ly?((s-ly)/Math.abs(ly)*100):null}
function sg(v){return v==null?'—':(v>0?'+':'')+Math.round(v)+'%'}
function heat(p){return p==null?'h0':p>=105?'h5':p>=100?'h4':p>=90?'h3':p>=80?'h2':'h1'}
function tag(b){var m=META[b];return m&&m[0]!=='—'?h('span',{class:'tag '+m[0]},m[0]):''}
// period: 0..9 months, 'Q1'..'Q4', 'YTD'
var QM={Q1:[0,1,2],Q2:[3,4,5],Q3:[6,7,8],Q4:[9]};
function agg(rows,p){if(!rows)return[0,0,0,0,0,null];if(p==='tm')return rows[MON.length-1];if(p==='YTD')return rows[10];if(QM[p]){var a=[0,0,0,0,0,null];QM[p].forEach(function(i){for(var k=0;k<5;k++)a[k]+=rows[i][k]});return a}return rows[p]}
function plab(p){return p==='tm'?'This month ('+MON[MON.length-1]+')':p==='YTD'?'YTD (Jan–'+MON[MON.length-1]+')':QM[p]?p+(p==='Q4'?' ('+MON[MON.length-1]+' so far)':''):MON[p]}
function hit(rows){var n=0,t=0;for(var i=0;i<10;i++){if(rows[i][1]>0){t++;if(rows[i][2]>=rows[i][1])n++}}return[n,t]}
function rowsOf(scope,brand){brand=brand||'ALL';if(scope==='Area')return G.area.Guwahati[brand];if(scope==='Region')return G.region[brand];return (G.hq[scope]||{})[brand]}
function brands(){return Object.keys(G.area.Guwahati).filter(function(b){return b!=='ALL'})}

/* ---------- charts (inline SVG, theme-aware) ---------- */
function svg(w,hh,inner){var d=h('div');d.innerHTML='<svg viewBox="0 0 '+w+' '+hh+'" width="100%" role="img" style="display:block">'+inner+'</svg>';return d}
function chart(rows,title){var W=340,H=180,pl=6,pr=6,pt=18,pb=22,n=10,cw=(W-pl-pr)/n,max=0;
  for(var i=0;i<n;i++)max=Math.max(max,rows[i][1],rows[i][2],rows[i][0]);max=max||1;
  var y=function(v){return pt+(H-pt-pb)*(1-Math.max(0,v)/max)},s='';
  s+='<line x1="0" x2="'+W+'" y1="'+y(0)+'" y2="'+y(0)+'" stroke="currentColor" opacity=".15"/>';
  for(i=0;i<n;i++){var x=pl+i*cw,t=rows[i][1],a=rows[i][2],p=P(a,t);
    s+='<rect x="'+(x+cw*.12)+'" y="'+y(t)+'" width="'+(cw*.38)+'" height="'+Math.max(0,y(0)-y(t))+'" rx="3" fill="#9FC9C4" opacity=".55"/>';
    s+='<rect x="'+(x+cw*.5)+'" y="'+y(a)+'" width="'+(cw*.38)+'" height="'+Math.max(0,y(0)-y(a))+'" rx="3" fill="'+(p==null?'#0F5257':p>=100?'#1B8A5A':p>=90?'#D99A1E':'#E5484D')+'"/>';
    if(p!=null)s+='<text x="'+(x+cw*.5)+'" y="'+(Math.min(y(a),y(t))-4)+'" font-size="8.5" text-anchor="middle" fill="currentColor" opacity=".75">'+Math.round(p)+'%</text>';
    s+='<text x="'+(x+cw*.5)+'" y="'+(H-6)+'" font-size="9.5" text-anchor="middle" fill="currentColor" opacity=".6">'+MON[i]+'</text>'}
  var pts=[];for(i=0;i<n;i++)pts.push((pl+i*cw+cw*.5)+','+y(rows[i][0]));
  s+='<polyline points="'+pts.join(' ')+'" fill="none" stroke="#7C5CFF" stroke-width="1.8" stroke-dasharray="4 3"/>';
  var c=h('div',{class:'card'},h('h3',{},title||'Month by month',h('small',{},'₹ lakh')),svg(W,H,s));
  c.append(h('div',{class:'leg'},h('span',{style:'--c:#9FC9C4'},'Target'),h('span',{style:'--c:#1B8A5A'},'Sale ≥100%'),h('span',{style:'--c:#D99A1E'},'90–99%'),h('span',{style:'--c:#E5484D'},'<90%'),h('span',{style:'--c:#7C5CFF'},'Last year')));return c}
function ring(p,sz){sz=sz||64;var r=sz/2-6,c=2*Math.PI*r,v=Math.max(0,Math.min(100,p||0)),col=p>=100?'#4ADE80':p>=90?'#F6D776':'#FF8A80';
  return svg(sz,sz,'<circle cx="'+sz/2+'" cy="'+sz/2+'" r="'+r+'" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="7"/><circle cx="'+sz/2+'" cy="'+sz/2+'" r="'+r+'" fill="none" stroke="'+col+'" stroke-width="7" stroke-linecap="round" stroke-dasharray="'+(c*v/100)+' '+c+'" transform="rotate(-90 '+sz/2+' '+sz/2+')"/><text x="50%" y="54%" text-anchor="middle" font-size="'+(sz/4.4)+'" font-weight="800" fill="#fff">'+pf(p)+'</text>')}
function miniRing(p){var sz=40,r=15,c=2*Math.PI*r,v=Math.max(0,Math.min(100,p||0)),col=p>=100?'#1B8A5A':p>=90?'#D99A1E':'#E5484D';
  var d=svg(sz,sz,'<circle cx="20" cy="20" r="'+r+'" fill="none" stroke="currentColor" opacity=".1" stroke-width="5"/><circle cx="20" cy="20" r="'+r+'" fill="none" stroke="'+col+'" stroke-width="5" stroke-linecap="round" stroke-dasharray="'+(c*v/100)+' '+c+'" transform="rotate(-90 20 20)"/><text x="20" y="23.5" text-anchor="middle" font-size="9.5" font-weight="800" fill="currentColor">'+pf(p)+'</text>');d.style.width='40px';return d}
function pbar(p){var v=Math.max(0,Math.min(130,p||0));return h('div',{class:'bar'},h('i',{style:'width:'+(v/1.3)+'%;background:'+(p>=100?'#1B8A5A':p>=90?'#D99A1E':'#E5484D')}),h('em',{style:'left:'+(100/1.3)+'%'}))}
function spark(rows){var W=120,H=28,max=0,i,s='';for(i=0;i<10;i++){var p=P(rows[i][2],rows[i][1]);if(p!=null)max=Math.max(max,p)}max=Math.max(max,110);
  var y=function(v){return H-2-(H-4)*Math.max(0,v)/max};s+='<line x1="0" x2="'+W+'" y1="'+y(100)+'" y2="'+y(100)+'" stroke="currentColor" opacity=".25" stroke-dasharray="2 2"/>';
  var pts=[];for(i=0;i<10;i++){var q=P(rows[i][2],rows[i][1]);if(q!=null)pts.push((i*W/9)+','+y(q))}
  s+='<polyline points="'+pts.join(' ')+'" fill="none" stroke="#0F5257" stroke-width="1.6"/>';var d=svg(W,H,s);d.style.width='120px';return d}

/* ---------- state ---------- */
var T=S.tab||(S.tab={});
function get(k,d){return T['geo_'+k]!=null?T['geo_'+k]:(U.lsGet?U.lsGet('ft_geo_'+k,d):d)}
function set(k,v){T['geo_'+k]=v;try{U.lsSet&&U.lsSet('ft_geo_'+k,v)}catch(e){}render()}
function chips(list,cur,k,cls){return h('div',{class:'chips'+(cls?' '+cls:'')},list.map(function(x){var id=x[0];return h('button',{class:String(id)===String(cur)?'on':'',onclick:function(){set(k,id)}},x[1])}))}
function lastMonth(){return MON.length-1}
function periodChips(p){return chips([['tm','This month ('+MON[lastMonth()]+')'],['YTD','YTD (Jan–'+MON[lastMonth()]+')'],['Q4','Q4'],['Q3','Q3'],['Q2','Q2'],['Q1','Q1']].concat(MON.map(function(m,i){return[i,m]}).reverse()),p,'per')}
function per(){var p=get('per','YTD');return /^\d+$/.test(String(p))?+p:p}

/* ---------- views ---------- */
function kpis(a,extra){var p=P(a[2],a[1]),g=gr(a[2],a[0]),cl=(a[3]||0)+(a[4]||0);
  var k=h('div',{class:'kp'},
    h('div',{},h('small',{},'Sale (net)'),h('b',{},L(a[2]))),h('div',{},h('small',{},'Target'),h('b',{},L(a[1]))),
    h('div',{},h('small',{},'Performance'),h('b',{class:pcls(p)},pf(p))),h('div',{},h('small',{},'Growth vs LY'),h('b',{class:gcls(g)},sg(g))),
    h('div',{},h('small',{},'Last year'),h('b',{},L(a[0]))),h('div',{},h('small',{},'Gap to target'),h('b',{class:a[2]>=a[1]?'up':'dn'},a[2]>=a[1]?'+'+L(a[2]-a[1]):L(a[2]-a[1]))),
    h('div',{},h('small',{},'Sales return'),h('b',{},L(-(a[3]||0)))),h('div',{},h('small',{},'Expiry return'),h('b',{},L(-(a[4]||0)))));
  (extra||[]).forEach(function(x){k.append(h('div',{},h('small',{},x[0]),h('b',{class:x[2]||''},x[1])))});return k}
function heroCard(title,sub,a,right){var p=P(a[2],a[1]),g=gr(a[2],a[0]);
  return h('div',{class:'hero'},h('div',{class:'k'},sub),h('h2',{},title),h('div',{class:'hrow'},ring(p,76),h('div',{},h('div',{class:'big'},L(a[2])),h('small',{},'of '+L(a[1])+' target · LY '+L(a[0])),h('small',{},'Growth '+sg(g)+(right?' · '+right:'')))))}

function vOverview(app){var p=per(),A=rowsOf('Area'),a=agg(A,p),hh=hit(A),rk=rankOf('Area Guwahati');
  app.append(periodChips(p),heroCard('Guwahati Area · '+plab(p),'Performance · 4 HQs',a,'target done '+hh[0]+' of '+hh[1]+' months'));
  app.append(h('div',{class:'card'},h('h3',{},'Key numbers',h('small',{},plab(p))),kpis(a,[['Months target done',hh[0]+' / '+hh[1],hh[0]>=hh[1]/2?'up':'dn'],['Rank in region (YTD)',rk]])));
  app.append(chart(A,'Area · target vs sale'));
  var g=h('div',{class:'hqg'});HQS.forEach(function(q){var R=rowsOf(q),x=agg(R,p),pp=P(x[2],x[1]),hq=hit(R),bk=(G.bucket[q]||[]);
    g.append(h('div',{class:'hqc',onclick:function(){T.geo_hq=q;set('v','hq')}},h('div',{class:'rg'},miniRing(pp)),h('b',{},q),h('small',{},CSO[q]+(bk[5]?' · '+bk[5]:'')),
      h('div',{class:'row'},h('span',{},L(x[2])),h('span',{style:'color:var(--muted)'},'/ '+L(x[1]))),
      h('div',{class:'row'},h('span',{class:gcls(gr(x[2],x[0]))},'Gr '+sg(gr(x[2],x[0]))),h('span',{},'✓ '+hq[0]+'/'+hq[1]+' mo'))))});
  app.append(h('div',{class:'card'},h('h3',{},'HQs',h('small',{},'tap for detail')),g));
  var ins=insights().slice(0,3);if(ins.length){var c=h('div',{class:'card'},h('h3',{},'What needs you now',h('small',{},'top 3')));ins.forEach(function(x){c.append(insCard(x))});
    c.append(h('button',{class:'btn',style:'width:100%;margin-top:4px',onclick:function(){set('v','ins')}},'See all insights →'));app.append(c)}}

function vHQ(app){var q=get('hq','Guwahati'),p=per(),R=rowsOf(q),a=agg(R,p),hh=hit(R),bk=G.bucket[q]||[],sag=(G.sag[q]||{}).YTD||[];
  app.append(chips(HQS.map(function(x){return[x,x]}),q,'hq','main'),periodChips(p));
  app.append(heroCard(q+' · '+plab(p),'HQ · '+CSO[q]+(bk[4]?' · Category '+bk[4]:''),a,'target done '+hh[0]+'/'+hh[1]+' months'));
  app.append(h('div',{class:'card'},h('h3',{},'Key numbers',h('small',{},plab(p))),kpis(a,[['Flat-rate billing',a[5]==null?'—':a[5]+'%'],['Growth bucket',bk[5]||'—']])));
  app.append(chart(R,q+' · target vs sale'));
  // brand table
  var B=brands().map(function(b){var r=G.hq[q][b];return[b,r,agg(r,p)]}).filter(function(x){return x[2][1]||x[2][2]||x[2][0]}).sort(function(x,y){return y[2][1]-x[2][1]});
  var t=h('table',{},h('tr',{},h('th',{},'Brand'),h('th',{},'Target'),h('th',{},'Sale'),h('th',{},'Perf'),h('th',{},'Gr'),h('th',{},'✓ Mo')));
  B.forEach(function(x){var pp=P(x[2][2],x[2][1]),g=gr(x[2][2],x[2][0]),hm=hit(x[1]),cl=(x[2][3]||0)+(x[2][4]||0);
    var tr=h('tr',{style:'cursor:pointer',onclick:function(){var n=tr.nextSibling;if(n&&n.classList&&n.classList.contains('xp')){n.remove();return}
      var d=h('tr',{class:'xp'},h('td',{colspan:'6',style:'text-align:left;white-space:normal;background:var(--soft2)'},h('div',{style:'display:flex;gap:10px;align-items:center'},spark(x[1]),h('small',{style:'font-size:11px'},'Perf by month, Jan–Oct (dashed = 100%). '+(META[x[0]]?'Channels: '+META[x[0]][1]+'.':'')+(cl?' Returns '+L(-cl)+'.':'')))));tr.after(d)}},
      h('td',{},h('b',{},x[0]),tag(x[0]),h('small',{},'LY '+L(x[2][0]))),h('td',{},L(x[2][1]).replace(' L','')),h('td',{},L(x[2][2]).replace(' L','')),h('td',{class:pcls(pp)},pf(pp)),h('td',{class:gcls(g)},sg(g)),h('td',{},hm[0]+'/'+hm[1]));t.append(tr)});
  t.append(h('tr',{class:'tot'},h('td',{},'All brands'),h('td',{},L(a[1]).replace(' L','')),h('td',{},L(a[2]).replace(' L','')),h('td',{class:pcls(P(a[2],a[1]))},pf(P(a[2],a[1]))),h('td',{class:gcls(gr(a[2],a[0]))},sg(gr(a[2],a[0]))),h('td',{},hh[0]+'/'+hh[1])));
  app.append(h('div',{class:'card'},h('h3',{},'Brand-wise',h('small',{},'₹ lakh · tap a brand')),h('div',{class:'tbl'},t),h('p',{class:'note'},'✓ Mo = months in Jan–Oct where the target was achieved.')));
  if(sag.length)app.append(h('div',{class:'card'},h('h3',{},'Incentive basis (SAG) · YTD'),h('div',{class:'kp'},h('div',{},h('small',{},'SAG target'),h('b',{},L(sag[2]))),h('div',{},h('small',{},'SAG sale'),h('b',{},L(sag[3]))),h('div',{},h('small',{},'SAG perf'),h('b',{class:pcls(P(sag[3],sag[2]))},pf(P(sag[3],sag[2])))),h('div',{},h('small',{},'SAG growth'),h('b',{class:gcls(gr(sag[3],sag[1]))},sg(gr(sag[3],sag[1]))))),h('p',{class:'note'},'SAG counts only the months on the incentive sheet; see the Incentive tab for month and quarter detail.')))}

function vBrand(app){var bl=brands(),b=get('br',bl[0]);if(bl.indexOf(b)<0)b=bl[0];var p=per(),A=rowsOf('Area',b),a=agg(A,p),all=agg(rowsOf('Area'),p),reg=agg(rowsOf('Region',b),p),hh=hit(A);
  app.append(chips(bl.map(function(x){return[x,x]}),b,'br','main'),periodChips(p));
  var m=META[b]||['',''];
  app.append(heroCard(b+' · '+plab(p),'Brand · '+(m[0]||'')+' · Area',a,'share '+Math.round(P(a[2],all[2])||0)+'% of area'));
  app.append(h('div',{class:'card'},h('h3',{},'Key numbers',tag(b),h('small',{},plab(p))),kpis(a,[['Months target done',hh[0]+' / '+hh[1],hh[0]>=hh[1]/2?'up':'dn'],['Region perf',pf(P(reg[2],reg[1])),pcls(P(reg[2],reg[1]))]]),h('p',{class:'note'},'Moves through: '+m[1]+'.')));
  app.append(chart(A,b+' · area target vs sale'));
  var l=h('div',{class:'lst'});HQS.forEach(function(q){var r=(G.hq[q]||{})[b];if(!r)return;var x=agg(r,p),pp=P(x[2],x[1]),hm=hit(r);
    l.append(h('div',{},h('div',{class:'t'},h('b',{},q+' · '+CSO[q]),h('span',{class:pcls(pp)},pf(pp))),pbar(pp),h('div',{class:'t',style:'font-size:11.5px;color:var(--muted);margin-top:4px'},h('span',{},L(x[2])+' / '+L(x[1])),h('span',{},'Gr '+sg(gr(x[2],x[0]))+' · ✓ '+hm[0]+'/'+hm[1]))))});
  app.append(h('div',{class:'card'},h('h3',{},'By HQ',h('small',{},'line = 100%')),l));
  var dv=(G.div||{})[{'Deca Durabolin':'Deca'}[b]||b];if(dv&&dv.OCT){var o=dv.OCT;app.append(h('div',{class:'card'},h('h3',{},'Region diversity · Oct'),h('div',{class:'kp'},h('div',{},h('small',{},'HQs ≥105%'),h('b',{class:'up'},o[2]+' of '+o[7])),h('div',{},h('small',{},'HQs <80%'),h('b',{class:'dn'},o[6]+' of '+o[7]))),h('p',{class:'note'},'How many of the region\'s 13 HQs hit the brand target in October.')))}}

function vMonths(app){var bl=['ALL'].concat(brands()),b=get('mb','ALL');if(bl.indexOf(b)<0)b='ALL';
  app.append(chips(bl.map(function(x){return[x,x==='ALL'?'All brands':x]}),b,'mb','main'));
  var t=h('table',{class:'heat'},h('tr',{},h('th',{},''),MON.map(function(m){return h('th',{style:'text-align:center'},m[0]+m[1])}),h('th',{style:'text-align:center'},'✓')));
  HQS.concat(['Area','Region']).forEach(function(q){var R=rowsOf(q,b);if(!R)return;var hm=hit(R);
    t.append(h('tr',{class:q==='Area'?'me':''},h('td',{},q==='Region'?'Region':q==='Area'?'Area':q.slice(0,4)),R.slice(0,10).map(function(r){var p=P(r[2],r[1]);return h('td',{class:heat(p)},p==null?'–':Math.round(p))}),h('td',{},h('b',{},hm[0]+'/'+hm[1]))))});
  app.append(h('div',{class:'card'},h('h3',{},'Target done – month by month',h('small',{},b==='ALL'?'all brands':b)),h('div',{class:'tbl'},t),
    h('div',{class:'leg'},h('span',{style:'--c:#1B8A5A'},'≥105%'),h('span',{style:'--c:#7CC59A'},'100–104%'),h('span',{style:'--c:#F6D776'},'90–99%'),h('span',{style:'--c:#F4A261'},'80–89%'),h('span',{style:'--c:#E5484D'},'<80%'))));
  // growth vs last year, month by month
  function gcell(v){var cls=v==null?'h0':v>=15?'h5':v>=0?'h4':v>=-10?'h3':v>=-25?'h2':'h1';return h('td',{class:cls},v==null?'–':(v>0?'+':'')+Math.round(v))}
  var gt=h('table',{class:'heat'},h('tr',{},h('th',{},''),MON.map(function(m){return h('th',{style:'text-align:center'},m[0]+m[1])}),h('th',{style:'text-align:center'},'YTD')));
  HQS.concat(['Area','Region']).forEach(function(q){var R=rowsOf(q,b);if(!R)return;var y=R[10],gy=gr(y[2],y[0]);
    gt.append(h('tr',{class:q==='Area'?'me':''},h('td',{},q==='Region'?'Region':q==='Area'?'Area':q.slice(0,4)),R.slice(0,10).map(function(r){return gcell(gr(r[2],r[0]))}),h('td',{},h('b',{class:gcls(gy)},sg(gy)))))});
  app.append(h('div',{class:'card'},h('h3',{},'Growth vs last year – month by month',h('small',{},b==='ALL'?'all brands':b)),h('div',{class:'tbl'},gt),
    h('div',{class:'leg'},h('span',{style:'--c:#1B8A5A'},'+15% & up'),h('span',{style:'--c:#7CC59A'},'0 to +15%'),h('span',{style:'--c:#F6D776'},'0 to −10%'),h('span',{style:'--c:#F4A261'},'−10 to −25%'),h('span',{style:'--c:#E5484D'},'below −25%'))));
  // all brands x HQ months-done grid
  var g=h('table',{},h('tr',{},h('th',{},'Brand'),HQS.map(function(q){return h('th',{},q.slice(0,4))}),h('th',{},'Area')));
  brands().forEach(function(br){var cells=HQS.concat(['Area']).map(function(q){var R=rowsOf(q,br);if(!R)return h('td',{},'—');var hm=hit(R);return h('td',{class:hm[1]?(hm[0]/hm[1]>=.6?'up':hm[0]/hm[1]>=.3?'md':'dn'):''},hm[1]?hm[0]+'/'+hm[1]:'—')});
    g.append(h('tr',{},h('td',{},h('b',{},br),tag(br)),cells))});
  app.append(h('div',{class:'card'},h('h3',{},'Months target done · every brand',h('small',{},'Jan–Oct')),h('div',{class:'tbl'},g)))}

function vSAG(app){var keys=HQS.concat(['Area Guwahati','Region Guwahati']),q=get('sq','Area Guwahati');if(keys.indexOf(q)<0)q='Area Guwahati';var S2=G.sag[q]||{};
  app.append(chips(keys.map(function(x){return[x,x.replace('Area Guwahati','Area').replace('Region Guwahati','Region')]}),q,'sq','main'));
  var y=S2.YTD||[0,0,0,0,0,0,0];
  app.append(heroCard((q.indexOf(' ')>0?q:q+' HQ')+' · SAG','Performance & incentive basis · YTD',[y[1],y[2],y[3]],'gross '+L(y[4])));
  var t=h('table',{},h('tr',{},h('th',{},'Period'),h('th',{},'Target'),h('th',{},'Sale'),h('th',{},'Perf'),h('th',{},'Gr'),h('th',{},'Return')));
  ['JAN','FEB','MAR','Q1','APR','MAY','JUN','Q2','JUL','AUG','SEP','Q3','OCT','NOV','DEC','Q4','YTD'].forEach(function(k){var r=S2[k];if(!r)return;var qq=/Q|YTD/.test(k),p=P(r[3],r[2]),g=gr(r[3],r[1]);
    if(!r[2]&&!r[3]&&!r[1]&&!qq)return t.append(h('tr',{},h('td',{},k.charAt(0)+k.slice(1).toLowerCase()),h('td',{colspan:'5',style:'text-align:left;color:var(--muted)'},k==='NOV'||k==='DEC'?'Target not on this sheet yet':'Not on incentive sheet')));
    t.append(h('tr',{class:qq?'tot':''},h('td',{},qq?k:k.charAt(0)+k.slice(1).toLowerCase(),r[6]?h('small',{},'BO on target '+r[6]+'/'+r[0]):''),h('td',{},r[2].toFixed(2)),h('td',{},r[3].toFixed(2)),h('td',{class:pcls(p)},pf(p)),h('td',{class:gcls(g)},sg(g)),h('td',{},r[5]?'–'+r[5].toFixed(2):'0')))});
  app.append(h('div',{class:'card'},h('h3',{},'Month & quarter',h('small',{},'₹ lakh')),h('div',{class:'tbl'},t),h('p',{class:'note'},'Figures exactly as the company SAG sheet (incentive basis). Months not on the sheet are blank. The incentive slab file is awaited – once shared, earned and next-slab amounts will show here.')))}

function rankList(){var L2=[];Object.keys(G.hq).forEach(function(q){var r=G.hq[q].ALL;if(!r)return;var a=r[10];L2.push({q:q,p:P(a[2],a[1]),g:gr(a[2],a[0]),s:a[2],t:a[1]})});return L2.sort(function(a,b){return (b.p||0)-(a.p||0)})}
function rankOf(k){if(k==='Area Guwahati'){var A=['Guwahati','Jorhat','Siliguri'].map(function(x){var r=(G.area[x]||{}).ALL;return{x:x,p:r?P(r[10][2],r[10][1]):0}}).sort(function(a,b){return b.p-a.p});return (A.findIndex(function(z){return z.x==='Guwahati'})+1)+' of 3 areas'}
  var r=rankList();return (r.findIndex(function(z){return z.q===k})+1)+' of '+r.length}
function vRank(app){var r=rankList(),l=h('div',{class:'lst'});
  r.forEach(function(x,i){var me=HQS.indexOf(x.q)>=0;l.append(h('div',{class:me?'me':''},h('div',{class:'t'},h('b',{},(i+1)+'. '+x.q+(me?' ★':'')),h('span',{class:pcls(x.p)},pf(x.p)+' · Gr '+sg(x.g))),pbar(x.p),h('div',{class:'t',style:'font-size:11.5px;color:var(--muted);margin-top:3px'},h('span',{},L(x.s)+' / '+L(x.t)),h('span',{},(G.bucket[x.q]||[])[5]||''))))});
  app.append(h('div',{class:'card'},h('h3',{},'Region ranking · YTD perf',h('small',{},'★ = your HQs')),l));
  var ar=h('div',{class:'lst'});['Guwahati','Jorhat','Siliguri'].forEach(function(x){var R=(G.area[x]||{}).ALL;if(!R)return;var a=R[10],p=P(a[2],a[1]);ar.append(h('div',{class:x==='Guwahati'?'me':''},h('div',{class:'t'},h('b',{},x+' area'),h('span',{class:pcls(p)},pf(p)+' · Gr '+sg(gr(a[2],a[0])))),pbar(p)))});
  app.append(h('div',{class:'card'},h('h3',{},'Areas in the region'),ar));
  var t=h('table',{},h('tr',{},h('th',{},'HQ'),h('th',{},"Gr '24"),h('th',{},"Gr '25"),h('th',{},"Gr '26"),h('th',{},'Cat'),h('th',{},'Bucket')));
  HQS.concat(['Area Guwahati','Region Guwahati']).forEach(function(k){var b=G.bucket[k];if(!b)return;t.append(h('tr',{class:k.indexOf(' ')>0?'tot':''},h('td',{},k.replace(' Guwahati','')),h('td',{class:gcls(b[0])},sg(b[0])),h('td',{class:gcls(b[1])},sg(b[1])),h('td',{class:gcls(b[2])},sg(b[2])),h('td',{},(b[3]||'')+'→'+(b[4]||'')),h('td',{},b[5]||'')))});
  app.append(h('div',{class:'card'},h('h3',{},'Growth bucket',h('small',{},'company classification')),h('div',{class:'tbl'},t)))}

function vNPD(app){var ps=Object.keys(G.npd||{}),pr=get('np',ps[0]);if(ps.indexOf(pr)<0)pr=ps[0];var D=G.npd[pr]||{};
  app.append(chips(ps.map(function(x){return[x,x]}),pr,'np','main'));
  var ms=Object.keys(D.Guwahati||D[Object.keys(D)[0]]||{}).filter(function(m){return m!=='YTD'});
  var t=h('table',{},h('tr',{},h('th',{},'HQ'),h('th',{},'YTD tgt'),h('th',{},'YTD sale'),h('th',{},'Perf'),h('th',{},'Oct qty')));
  HQS.concat(['Area Guwahati','Region Guwahati']).forEach(function(k){var r=D[k];if(!r)return;var y=r.YTD||[0,0],p=P(y[1],y[0]);t.append(h('tr',{class:k.indexOf(' ')>0?'tot':''},h('td',{},k.replace(' Guwahati','')),h('td',{},y[0].toFixed(2)),h('td',{},y[1].toFixed(2)),h('td',{class:pcls(p)},pf(p)),h('td',{},(r.OCT||[0,0,0])[2]||0)))});
  app.append(h('div',{class:'card'},h('h3',{},pr+' · NPD billing',h('small',{},'₹ lakh')),h('div',{class:'tbl'},t)));
  var hm=h('table',{class:'heat'},h('tr',{},h('th',{},''),ms.map(function(m){return h('th',{style:'text-align:center'},m.charAt(0)+m.slice(1,3).toLowerCase())})));
  HQS.forEach(function(q){var r=D[q];if(!r)return;hm.append(h('tr',{},h('td',{},q.slice(0,4)),ms.map(function(m){var x=r[m]||[0,0,0],p=P(x[1],x[0]);return h('td',{class:heat(p)},p==null?(x[1]?'✓':'–'):Math.round(p))})))});
  app.append(h('div',{class:'card'},h('h3',{},'Month by month · perf %'),h('div',{class:'tbl'},hm),h('p',{class:'note'},'NPD = new products: book them at every retailer and stockist; doctors drive repeat.')))}

/* ---------- insights: what is going wrong, and what to do ---------- */
function insights(){var out=[];
  HQS.forEach(function(q){var R=G.hq[q].ALL,y=R[10],o=R[9],py=P(y[2],y[1]),po=P(o[2],o[1]),who=CSO[q]==='Vacant'?'Dhubri is vacant – cover through the stockist and your own visits.':'Call '+CSO[q]+'.';
    var streak=0;for(var i=9;i>=0;i--){if(R[i][1]>0&&R[i][2]<R[i][1])streak++;else break}
    if(po!=null&&po<90)out.push({s:'bad',w:100-po,t:q+': October at '+pf(po)+' ('+L(o[2]-o[1])+' vs target)',d:(streak>1?streak+' months in a row below target. ':'')+'YTD '+pf(py)+', growth '+sg(gr(y[2],y[0]))+'.',a:who+' Agree a brand-by-brand plan for November with outlet names.'});
    var B=brands().map(function(b){var r=G.hq[q][b];return{b:b,y:r[10],o:r[9]}}).filter(function(x){return x.y[1]>0.3});
    B.sort(function(a,b){return (a.y[2]-a.y[1])-(b.y[2]-b.y[1])});
    B.slice(0,2).forEach(function(x){if(x.y[2]>=x.y[1])return;var p=P(x.y[2],x.y[1]),m=META[x.b]||['',''];out.push({s:p<80?'bad':'mid',w:(x.y[1]-x.y[2]),t:q+' · '+x.b+': YTD '+pf(p)+', short by '+L(x.y[1]-x.y[2]),d:'October '+pf(P(x.o[2],x.o[1]))+'; growth '+sg(gr(x.y[2],x.y[0]))+'.',a:'Push through '+m[1]+'.'})});
    var cl=(y[3]||0)+(y[4]||0);if(y[2]>0&&cl/y[2]>0.02)out.push({s:'mid',w:cl*5,t:q+': returns '+L(-cl)+' YTD ('+(cl/y[2]*100).toFixed(1)+'% of sale)',d:'Sales return '+L(-(y[3]||0))+', expiry '+L(-(y[4]||0))+'.',a:'Check near-expiry stock at stockists monthly; liquidate before it comes back.'});
    if(po!=null&&po>=105)out.push({s:'ok',w:1,t:q+': October '+pf(po)+' – target done',d:'Growth vs LY '+sg(gr(o[2],o[0]))+'.',a:'Praise '+(CSO[q]==='Vacant'?'the stockist team':CSO[q])+' in the group; keep the same outlet rhythm in November.'})});
  var raft=(G.npd||{}).Raft||{};HQS.forEach(function(q){var r=(raft[q]||{}).OCT;if(r&&r[0]>0&&r[1]<r[0])out.push({s:'mid',w:2,t:q+' · Raft (NPD): October '+pf(P(r[1],r[0])),d:r[2]+' bottles billed.',a:'Book Raft at every retailer called; detail to GERD doctors.'})});
  return out.sort(function(a,b){var o={bad:0,mid:1,ok:2};return o[a.s]-o[b.s]||b.w-a.w})}
function insCard(x){return h('div',{class:'ins '+x.s},h('b',{},x.t),x.d,h('i',{},'→ '+x.a))}
function vIns(app){var L2=insights();app.append(h('div',{class:'card'},h('h3',{},'Insights & actions',h('small',{},L2.length+' items · from Oct data')),L2.map(insCard),h('p',{class:'note'},'Red = act today · Amber = watch this week · Green = celebrate. Built from the latest Geo sales file.')))}

/* ---------- route ---------- */
var VIEWS=[['ov','Overview',vOverview],['hq','HQs',vHQ],['br','Brands',vBrand],['mo','Target months',vMonths],['ins','Insights',vIns],['sag','Incentive (SAG)',vSAG],['rk','Rankings',vRank],['npd','NPD',vNPD]];
U.routes.geo=function(app){if(!isMgr()){app.append(h('div',{class:'note'},'Performance is for the manager.'));return}
  load();var box=h('div',{class:'geo'});app.append(box);
  if(!G){box.append(h('div',{class:'card'},h('h3',{},'Performance'),h('p',{},state==='busy'||state==='idle'?'Loading the latest company sales file…':state==='nokey'?'Tap Sync once – the secure key for performance data arrives with it.':state==='nocrypto'?'This phone browser cannot open the secure file. Please update Chrome / the app.':'Could not load the performance file. Check the internet and tap Sync.')));return}
  var v=get('v','ov');if(!VIEWS.some(function(x){return x[0]===v}))v='ov';
  box.append(h('div',{class:'chips main',style:'margin-top:2px'},VIEWS.map(function(x){return h('button',{class:x[0]===v?'on':'',onclick:function(){set('v',x[0])}},x[1])})));
  var vname=(VIEWS.filter(function(x){return x[0]===v})[0]||[])[1]||'Performance';
  box.append(h('div',{class:'sharebar'},h('button',{onclick:function(){shareView(vname)}},'📸 Save / Share for WhatsApp'),h('button',{class:'alt',onclick:function(){shareView(vname)}},'⬇️ Download')));
  box.append(h('p',{class:'note',style:'margin:-4px 0 10px'},'Source: company Geo sales file · '+(G.asOf||'')+' · ₹ in lakh · only you can see this'));
  try{VIEWS.filter(function(x){return x[0]===v})[0][2](box)}catch(e){box.append(h('div',{class:'note'},'Could not draw this view: '+e.message))}};
U.geoReady=function(){return !!G};U.geoReset=function(){if(window.__GEO)return;G=null;state='idle'};
})();
