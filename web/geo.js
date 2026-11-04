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

/* ========================================================================
   Reports — unified for manager (full Geo, all HQs) and CSO (own HQ feed).
   Tabs: Performance · Impact Brands · Incentive · NPDs.
   Performance: Normal | Incentive-basis (SAG), each Monthly / Quarterly / YTD.
   Incentive: the money tab — earnings, milestones, where it is lacking.
   Kept deliberately uncrowded: one headline, a small KPI grid, one table/chart per view.
   ======================================================================== */
var IMPACT=['Deca Durabolin','R-Loc','Dexona','Skinlite'];
var CSO={Agartala:'Karamjit',Bongaigaon:'Prashun',Dhubri:'Vacant',Guwahati:'Bhubaneswar'};

/* extra styles for the new layout */
var st2=document.createElement('style');st2.textContent=`
.geo .tabbar{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;margin:2px 0 10px;padding-bottom:2px}.geo .tabbar::-webkit-scrollbar{display:none}
.geo .tabbar button{flex:0 0 auto;border:0;background:var(--soft2);color:var(--muted);border-radius:999px;padding:9px 15px;font-size:13.5px;font-weight:800;min-height:auto;display:flex;align-items:center;gap:6px}
.geo .tabbar button.on{background:linear-gradient(120deg,var(--g2),var(--g1));color:#fff;box-shadow:0 5px 14px rgba(15,82,87,.28)}
.geo .seg2{display:flex;gap:4px;background:var(--soft2);border-radius:12px;padding:4px;margin:0 0 10px}
.geo .seg2 button{flex:1;border:0;background:transparent;color:var(--muted);border-radius:9px;padding:8px 6px;font-size:12.5px;font-weight:800;min-height:auto}
.geo .seg2 button.on{background:var(--card,#fff);color:var(--g1);box-shadow:0 2px 6px rgba(0,0,0,.08)}
.geo .mpwrap{overflow-x:auto;-webkit-overflow-scrolling:touch;border:1px solid var(--line);border-radius:14px}
.geo .mptbl{border-collapse:collapse;width:100%;min-width:440px;font-size:12px}
.geo .mptbl th,.geo .mptbl td{padding:7px 8px;text-align:right;white-space:nowrap}
.geo .mptbl th{background:var(--soft2);color:var(--muted);font-weight:800;font-size:11px}
.geo .mptbl td.b,.geo .mptbl th.b{text-align:left;position:sticky;left:0;background:var(--card,#fff);font-weight:700}
.geo .mptbl th.b{background:var(--soft2)}
.geo .mptbl tr.grp td{background:var(--soft2);font-weight:800;color:var(--g1);text-transform:uppercase;font-size:10.5px;letter-spacing:.04em;text-align:left}
.geo .mptbl tr.tot td{border-top:2px solid var(--line);font-weight:800;background:var(--soft2)}
.geo .mptbl .pos{color:#1E8E5A}.geo .mptbl .neg{color:#C93B32}.geo .mptbl .mut{color:var(--muted)}
.geo .mile{margin:0 0 10px}
.geo .mile .track{position:relative;height:30px;border-radius:8px;background:var(--soft2);overflow:hidden}
.geo .mile .fill{position:absolute;left:0;top:0;bottom:0;border-radius:8px;background:linear-gradient(90deg,#1B8A5A,#4ADE80)}
.geo .mile .mk{position:absolute;top:0;bottom:0;width:2px;background:rgba(0,0,0,.22)}
.geo .mile .lbl{position:absolute;top:50%;transform:translateY(-50%);font-size:10px;font-weight:800;color:#0B3A25;padding-left:3px}
.geo .money{border-radius:22px;padding:18px 16px;color:#fff;background:radial-gradient(130% 150% at 100% 0,#F6B73C 0%,#E98A1E 42%,#B45309 100%);box-shadow:0 14px 34px rgba(180,83,9,.32);margin:0 0 12px;position:relative;overflow:hidden}
.geo .money:after{content:'';position:absolute;right:-30px;bottom:-40px;width:150px;height:150px;border-radius:50%;background:rgba(255,255,255,.1)}
.geo .money .k{font-size:11px;letter-spacing:1.4px;text-transform:uppercase;font-weight:800;color:#FFF3D6}
.geo .money h2{margin:3px 0 2px;font-size:30px;color:#fff!important;line-height:1;font-variant-numeric:tabular-nums;position:relative;z-index:1}
.geo .money p{margin:6px 0 0;font-size:13.5px;opacity:.95;position:relative;z-index:1}
.geo .loss{border-radius:22px;padding:18px 16px;color:#fff;background:radial-gradient(130% 150% at 100% 0,#6D4B6B 0%,#8E2A3F 45%,#5B1220 100%);box-shadow:0 14px 34px rgba(91,18,32,.34);margin:0 0 12px;position:relative;overflow:hidden}
.geo .loss:after{content:'';position:absolute;right:-30px;bottom:-40px;width:150px;height:150px;border-radius:50%;background:rgba(255,255,255,.06)}
.geo .loss .k{font-size:11px;letter-spacing:1.4px;text-transform:uppercase;font-weight:800;color:#FFD9DE}
.geo .loss h2{margin:3px 0 2px;font-size:30px;color:#fff!important;line-height:1;font-variant-numeric:tabular-nums;text-decoration:line-through;text-decoration-thickness:2px;position:relative;z-index:1}
.geo .loss p{margin:6px 0 0;font-size:13.5px;opacity:.96;position:relative;z-index:1}
.geo .dream{background:linear-gradient(160deg,#102A43,#0F5257);color:#fff;border-radius:18px;padding:15px;margin:0 0 12px}
.geo .dream h3{color:#fff!important;margin:0 0 4px;font-size:15.5px}
.geo .dream .sub{font-size:12px;color:#CFE8E4;margin:0 0 10px}
.geo .dream .row{display:flex;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.12);font-size:13px;line-height:1.35}
.geo .dream .row:last-child{border-bottom:0}.geo .dream .row b{color:#F6D776}
.geo .dream .goal{margin-top:10px;font-size:13.5px;font-weight:700;color:#F6D776}
.geo .earn{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin:0 0 12px}
.geo .earn>div{background:var(--card,#fff);border:1px solid var(--line,#e5ece9);border-radius:16px;padding:12px;min-width:0}
.geo .earn .hd{display:flex;align-items:center;gap:6px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.6px;color:var(--muted)}
.geo .earn b{display:block;font-size:19px;margin:5px 0 1px;font-variant-numeric:tabular-nums}
.geo .earn small{display:block;font-size:11.5px;color:var(--muted)}
.geo .push{border-left:4px solid var(--g2);background:var(--soft2);border-radius:12px;padding:11px 13px;margin:0 0 9px;font-size:13.5px;line-height:1.45}
.geo .push b{display:block;color:var(--g1);font-size:13.5px;margin-bottom:2px}
.geo .push.hot{border-color:#E98A1E}.geo .push.hot b{color:#B45309}
.geo .impc{background:var(--card,#fff);border:1px solid var(--line,#e5ece9);border-radius:16px;padding:12px;margin:0 0 10px;display:flex;gap:12px;align-items:center}
.geo .impc .meta{flex:1;min-width:0}
.geo .impc .meta b{font-size:15px}.geo .impc .meta small{display:block;color:var(--muted);font-size:11.5px;margin-top:1px}
.geo .pill{display:inline-block;font-size:11px;font-weight:800;border-radius:999px;padding:2px 9px}
.geo .pill.up{background:#E8F6EE;color:#13684A}.geo .pill.dn{background:#FBE4DC;color:#9A3412}.geo .pill.md{background:#FDF3D6;color:#8A5A00}
.geo .estrip{display:flex;align-items:center;gap:10px;border-radius:14px;padding:10px 13px;margin:0;cursor:pointer;color:#fff;box-shadow:0 6px 16px rgba(0,0,0,.14)}
.geo .estrip.won{background:linear-gradient(120deg,#E98A1E,#B45309)}
.geo .estrip.lost{background:linear-gradient(120deg,#8E2A3F,#5B1220)}
.geo .estrip.neu{background:linear-gradient(120deg,#0F5257,#1B7F79)}
.geo .estrip .amt{font-size:18px;font-weight:800;font-variant-numeric:tabular-nums;line-height:1.05}
.geo .estrip .lbl{font-size:10px;opacity:.92;text-transform:uppercase;letter-spacing:.6px;font-weight:800}
.geo .estrip .st{margin-left:auto;font-size:12px;opacity:.95;text-align:right;white-space:nowrap}
.geo .fold{border:1px solid var(--line,#e5ece9);border-radius:16px;margin:0 0 12px;overflow:hidden;background:var(--card,#fff)}
.geo .fold>button.fh{width:100%;border:0;background:transparent;display:flex;align-items:center;gap:8px;padding:13px 14px;font-weight:800;font-size:14.5px;color:var(--fg,#14302E);min-height:auto}
.geo .fold>button.fh .ar{margin-left:auto;color:var(--muted);font-size:12px}
.geo .fold .in{padding:0 14px 13px}
`;document.head.appendChild(st2);

/* ---------- CSO feed access (own HQ only) ---------- */
function csoHQ(){try{if(S.viewAs&&S.viewAs.HQ)return S.viewAs.HQ;var ks=Object.keys(S.feeds||{}).filter(function(k){return k.indexOf('perf_')===0});if(ks.length)return (S.feeds[ks[0]]||{}).hq||ks[0].slice(5);}catch(e){}return null}
function CF(){var hq=csoHQ();if(!hq)return null;var f=(S.feeds||{})['perf_'+hq];return (f&&f.b)?f:null}

/* ---------- period model ---------- */
function defQ(){return 'Q'+Math.ceil((lastMonth()+1)/3)}
function curP(){var pt=get('pt','ytd');if(pt==='ytd')return'YTD';if(pt==='qt')return get('qq',defQ());var m=get('mm',lastMonth());return /^\d+$/.test(String(m))?+m:lastMonth()}
function sagKeyOf(p){if(p==='YTD')return'YTD';if(/^Q/.test(String(p)))return p;return MK[p]}
function periodTabs(){var pt=get('pt','ytd');
  var box=h('div',{},h('div',{class:'seg2'},[['mo','Monthly'],['qt','Quarterly'],['ytd','YTD']].map(function(x){return h('button',{class:x[0]===pt?'on':'',onclick:function(){set('pt',x[0])}},x[1])})));
  if(pt==='mo'){var mm=get('mm',lastMonth());box.append(chips(MON.map(function(m,i){return[i,m]}).reverse(),mm,'mm'))}
  if(pt==='qt'){var qq=get('qq',defQ());box.append(chips([['Q4','Q4'],['Q3','Q3'],['Q2','Q2'],['Q1','Q1']],qq,'qq'))}
  return box}

/* ---------- data adapter: one shape for manager and CSO ---------- */
function mkDA(forceCSO){
  if(!forceCSO&&G){var sc=get('sc','Area');
    return {isMgr:true,asOf:G.asOf,scope:sc,
      scopes:[['Area','Area']].concat(['Agartala','Bongaigaon','Dhubri','Guwahati'].map(function(q){return[q,q]})),
      title:sc==='Area'?'Guwahati Area':sc,sub:sc==='Area'?'4 HQs':(CSO[sc]||''),
      HQS:['Agartala','Bongaigaon','Dhubri','Guwahati'],
      allBrands:function(){return brands()},
      impact:IMPACT.filter(function(b){return (G.hq.Guwahati||{})[b]||rowsOf(sc,b)}),
      rows:function(brand){return rowsOf(sc,brand)},
      hqRows:function(q,brand){return (G.hq[q]||{})[brand]},
      sag:function(){return G.sag[sc==='Area'?'Area Guwahati':sc]||{}},
      bucket:function(){return G.bucket[sc==='Area'?'Area Guwahati':sc]||[]},
      onhold:function(q){return ((S.feeds||{})['perf_'+(q||sc)]||{}).onhold||null},
      npdProducts:function(){return Object.keys(G.npd||{})},
      npd:function(prod){return (G.npd[prod]||{})[sc==='Area'?'Area Guwahati':sc]||{}}};
  }
  var f=CF();if(!f)return null;var hq=f.hq;
  return {isMgr:false,asOf:f.asOf,scope:hq,scopes:[[hq,hq]],title:hq,sub:CSO[hq]||'',HQS:[hq],
    allBrands:function(){return Object.keys(f.b).filter(function(b){return b!=='ALL'})},
    impact:(f.impact||IMPACT).filter(function(b){return f.b[b]}),
    rows:function(brand){return f.b[brand||'ALL']},
    hqRows:function(q,brand){return q===hq?f.b[brand]:null},
    sag:function(){return f.sag||{}},
    bucket:function(){return f.bucket||[]},
    onhold:function(){return f.onhold||null},
    npdProducts:function(){return Object.keys(f.npd||{})},
    npd:function(prod){return (f.npd||{})[prod]||{}}};
}

/* ---------- small building blocks ---------- */
function kgrid(pairs){return h('div',{class:'kp'},pairs.map(function(x){return h('div',{},h('small',{},x[0]),h('b',{class:x[2]||''},x[1]))}))}
function hero(k,title,a,note){var p=P(a[2],a[1]),g=gr(a[2],a[0]);
  return h('div',{class:'hero'},h('div',{class:'k'},k),h('h2',{},title),h('div',{class:'hrow'},ring(p,76),h('div',{},h('div',{class:'big'},L(a[2])),h('small',{},'of '+L(a[1])+' target · LY '+L(a[0])),h('small',{},'Growth '+sg(g)+(note?' · '+note:'')))))}
function scopeChips(DA){return DA.scopes.length>1?chips(DA.scopes,DA.scope,'sc','main'):''}

/* ---------- Performance ---------- */
function vPerf(app,DA){
  app.append(scopeChips(DA));
  var md=get('md','nm');
  app.append(h('div',{class:'seg2'},[['nm','Normal'],['ip','Incentive basis']].map(function(x){return h('button',{class:x[0]===md?'on':'',onclick:function(){set('md',x[0])}},x[1])})));
  app.append(periodTabs());
  var p=curP();
  if(md==='nm')perfNormal(app,DA,p);else perfInc(app,DA,p);
}
function perfNormal(app,DA,p){var R=DA.rows('ALL'),a=agg(R,p),hh=hit(R),bk=DA.bucket();
  app.append(hero('Performance · '+plab(p),DA.title+(DA.sub?' · '+DA.sub:''),a,'target done '+hh[0]+'/'+hh[1]+' mo'));
  app.append(h('div',{class:'card'},h('h3',{},'Key numbers',h('small',{},plab(p))),kgrid([
    ['Sale (net)',L(a[2])],['Target',L(a[1])],
    ['Performance',pf(P(a[2],a[1])),pcls(P(a[2],a[1]))],['Growth vs LY',sg(gr(a[2],a[0])),gcls(gr(a[2],a[0]))],
    ['Gap to target',(a[2]>=a[1]?'+':'')+L(a[2]-a[1]),a[2]>=a[1]?'up':'dn'],['Returns',L(-((a[3]||0)+(a[4]||0)))]])));
  // brand table (compact, by target)
  var B=DA.allBrands().map(function(b){var r=DA.rows(b);return[b,r,agg(r,p)]}).filter(function(x){return x[2]&&(x[2][1]||x[2][2])}).sort(function(x,y){return y[2][1]-x[2][1]});
  var t=h('table',{},h('tr',{},h('th',{},'Brand'),h('th',{},'Target'),h('th',{},'Sale'),h('th',{},'Perf'),h('th',{},'Gr')));
  B.forEach(function(x){var pp=P(x[2][2],x[2][1]),gg=gr(x[2][2],x[2][0]);t.append(h('tr',{},h('td',{},h('b',{},x[0]),tag(x[0])),h('td',{},L(x[2][1]).replace(' L','')),h('td',{},L(x[2][2]).replace(' L','')),h('td',{class:pcls(pp)},pf(pp)),h('td',{class:gcls(gg)},sg(gg))))});
  t.append(h('tr',{class:'tot'},h('td',{},'All brands'),h('td',{},L(a[1]).replace(' L','')),h('td',{},L(a[2]).replace(' L','')),h('td',{class:pcls(P(a[2],a[1]))},pf(P(a[2],a[1]))),h('td',{class:gcls(gr(a[2],a[0]))},sg(gr(a[2],a[0])))));
  app.append(h('div',{class:'card'},h('h3',{},'Brand-wise',h('small',{},'₹ lakh')),h('div',{class:'tbl'},t)));
  app.append(chart(R,DA.title+' · month by month'));
  // insights folded in (compact)
  var ins=focusLines(DA).slice(0,3);if(ins.length)app.append(h('div',{class:'card'},h('h3',{},'What needs attention',h('small',{},'now')),ins.map(function(x){return h('div',{class:'push'+(x.hot?' hot':'')},h('b',{},x.t),x.d)})));
}
function perfInc(app,DA,p){var R=DA.rows('ALL'),a=agg(R,p),net=a[2],tgt=a[1],ly=a[0],sret=a[3]||0,gross=net+sret+(a[4]||0),
  ach=P(net,tgt),g=gr(net,ly),isQ=/Q/.test(String(p)),pcpm=isQ?net/3:(p==='YTD'?net/10:net),retpc=gross?sret/gross*100:0,bi=band(ach),si=slabIdx(pcpm),
  rate=bi<0?null:(isQ?RATE_Q:RATE_M)[si][bi];
  app.append(h('div',{class:'hero'},h('div',{class:'k'},'Incentive basis · '+plab(p)),h('h2',{},DA.title+(DA.sub?' · '+DA.sub:'')),h('div',{class:'hrow'},ring(ach,76),h('div',{},h('div',{class:'big'},L(net)),h('small',{},'of '+L(tgt)+' target · LY '+L(ly)),h('small',{},'Growth '+sg(g)+' · '+(isQ?'quarterly':'monthly')+' rate '+(rate==null?'—':rate+'%'))))));
  app.append(h('div',{class:'card'},h('h3',{},'What decides your incentive',h('small',{},plab(p))),kgrid([
    ['Net sale',L(net)],['Target',L(tgt)],
    ['Achievement',pf(ach),pcls(ach)],['Growth',sg(g),gcls(g)],
    ['PCPM',L(pcpm),pcpm>=10?'up':''],['Rate band',rate==null?'—':rate+'%',rate==null?'dn':'up'],
    ['Saleable returns',retpc.toFixed(1)+'%',retpc<=3?'up':'dn'],['Status',bi<0?'Below 97%':(g<=0?'Growth −':'Eligible'),bi<0||g<=0?'dn':'up']]),
    h('p',{class:'note'},'Incentive needs ≥97% achievement, positive growth and saleable returns ≤3%. Higher achievement and the right PCPM slab lift the rate.')));
  // product-wise period ladder (the Sales-at-a-Glance basis the circular uses)
  var t=h('table',{},h('tr',{},h('th',{},'Period'),h('th',{},'Target'),h('th',{},'Net'),h('th',{},'Ach'),h('th',{},'Gr')));
  [['Q1','Q1'],['Q2','Q2'],['Q3','Q3'],['Q4','Q4 (Oct)'],['YTD','YTD']].forEach(function(kk){var x=agg(R,kk[0]);if(!x||(!x[1]&&!x[2]))return;var pp=P(x[2],x[1]),gg=gr(x[2],x[0]);
    t.append(h('tr',{class:'tot'},h('td',{},kk[1]),h('td',{},L(x[1]).replace(' L','')),h('td',{},L(x[2]).replace(' L','')),h('td',{class:pcls(pp)},pf(pp)),h('td',{class:gcls(gg)},sg(gg))))});
  app.append(h('div',{class:'card'},h('h3',{},'Quarter & YTD',h('small',{},'₹ lakh · Sales at a Glance')),h('div',{class:'tbl'},t)));
}

/* ---------- Impact Brands ---------- */
function vImpact(app,DA){app.append(scopeChips(DA),periodTabs());var p=curP();
  var head=agg(DA.impact.map(function(b){return DA.rows(b)}).reduce(function(acc,r){if(!r)return acc;for(var i=0;i<11;i++){acc[i]=acc[i]||[0,0,0,0,0,0];for(var k=0;k<5;k++)acc[i][k]+=r[i][k]}return acc},[]),p);
  app.append(h('div',{class:'hero'},h('div',{class:'k'},'Impact brands · '+plab(p)),h('h2',{},DA.title+' · 4 brands'),h('div',{class:'hrow'},ring(P(head[2],head[1]),76),h('div',{},h('div',{class:'big'},L(head[2])),h('small',{},'of '+L(head[1])+' target · LY '+L(head[0])),h('small',{},'Growth '+sg(gr(head[2],head[0]))+' · these carry your incentive')))));
  DA.impact.forEach(function(b){var R=DA.rows(b);if(!R)return;var a=agg(R,p),pp=P(a[2],a[1]),gg=gr(a[2],a[0]),m=META[b]||['',''],hm=hit(R);
    var card=h('div',{class:'impc'},miniRing(pp),h('div',{class:'meta'},h('b',{},b,tag(b)),h('div',{style:'margin:5px 0 4px'},pbar(pp)),h('div',{style:'display:flex;justify-content:space-between;font-size:12px;font-variant-numeric:tabular-nums'},h('span',{},L(a[2])+' / '+L(a[1])),h('span',{class:gcls(gg)},'Gr '+sg(gg))),h('small',{},'✓ '+hm[0]+'/'+hm[1]+' mo · '+(m[1]||''))));
    app.append(card);
    if(DA.isMgr){var l=h('div',{class:'card',style:'margin-top:-4px'},h('h3',{style:'font-size:13px'},b+' · by HQ',h('small',{},plab(p))));DA.HQS.forEach(function(q){var r=DA.hqRows(q,b);if(!r)return;var x=agg(r,p),qp=P(x[2],x[1]);l.append(h('div',{style:'display:flex;align-items:center;gap:8px;margin:5px 0'},h('span',{style:'width:66px;font-size:12px;font-weight:700'},q.slice(0,8)),h('div',{style:'flex:1'},pbar(qp)),h('span',{class:pcls(qp),style:'width:42px;text-align:right;font-size:12px'},pf(qp))))});app.append(l)}
  });
}

/* ---------- Incentive scheme engine (Rise & Shine 2026) ----------
   Incentive is read from the Productwise "Sales at a Glance" numbers.
   Net = gross − claims. Achievement = net ÷ target. Growth = net ÷ LY − 1.
   PCPM = net ÷ months ÷ 1 BO. Needs ≥97% + positive growth + saleable returns ≤3%. */
var RATE_M=[[.5,.7,.9],[.45,.65,.85],[.4,.6,.8],[.35,.55,.75],[.3,.5,.7]];
var RATE_Q=[[.3,1.0,1.4],[.25,.9,1.3],[.2,.8,1.2],[.15,.7,1.1],[.1,.6,1.0]];
function slabIdx(p){return p<5?0:p<10?1:p<20?2:p<30?3:4}
function band(a){return a==null?-1:a>=110?2:a>=100?1:a>=97?0:-1}
function R(v){v=Math.round(v||0);return '₹'+v.toLocaleString('en-IN')}
function earnOf(a,kind){ // a=[ly,tgt,net,...]; kind 'm'|'q'; returns {amt,rate,ach,g,pcpm,locked,why}
  var net=a[2],tgt=a[1],ly=a[0],ach=P(net,tgt),g=gr(net,ly),pcpm=kind==='q'?net/3:net,bi=band(ach),si=slabIdx(pcpm);
  if(bi<0)return{amt:0,rate:0,ach:ach,g:g,pcpm:pcpm,locked:true,why:'below 97%'};
  if(g<=0)return{amt:0,rate:0,ach:ach,g:g,pcpm:pcpm,locked:true,why:'growth not positive'};
  var rate=(kind==='q'?RATE_Q:RATE_M)[si][bi];return{amt:net*1e5*rate/100,rate:rate,ach:ach,g:g,pcpm:pcpm,locked:false};}
function nextBand(a,kind){ // what net lifts to the next achievement band, and the extra ₹
  var net=a[2],tgt=a[1],ach=P(net,tgt),tgt2=ach<97?tgt*0.97:ach<100?tgt:ach<110?tgt*1.1:null;
  if(tgt2==null)return null;var need=Math.max(0,tgt2-net);return{need:need,at:ach<97?97:ach<100?100:110}}
function impactGate(DA,p){var ct=0,cs=0,weak=[];DA.impact.forEach(function(b){var a=agg(DA.rows(b),p);if(!a)return;ct+=a[1];cs+=a[2];var ap=P(a[2],a[1]);if(ap==null||ap<90)weak.push({b:b,p:ap,gap:Math.max(0,a[1]*0.9-a[2])})});
  var comb=P(cs,ct);return{comb:comb,weak:weak,ok:weak.length===0&&comb>=97}}

/* ---------- Incentive (the money tab) ---------- */
function vInc(app,DA){
  if(DA.isMgr&&DA.scope==='Area'){app.append(scopeChips(DA));
    app.append(h('p',{class:'note',style:'margin:0 0 8px'},'Earned so far (paid only when that HQ closes October at 100%). Tap an HQ for the full breakdown. Zone total is deliberately not shown.'));
    DA.HQS.forEach(function(q){if(q==='Dhubri')return;var oh=DA.onhold(q)||{q3:0,sept:0},tot=(oh.q3||0)+(oh.sept||0);var R2=(G.hq[q]||{}).ALL,o=R2?R2[9]:null,oa=o?P(o[2],o[1]):null,open=oa!=null&&oa>=100;
      app.append(h('div',{class:'impc',onclick:(function(qq){return function(){set('sc',qq)}})(q),style:'cursor:pointer'},
        h('div',{class:'meta'},h('b',{},q+' · '+(CSO[q]||'')),h('div',{style:'display:flex;justify-content:space-between;font-size:12.5px;margin-top:4px'},h('span',{},'Earned '+R(tot)),h('span',{class:'pill '+(open?'up':'dn')},'Oct '+pf(oa)+(open?' ✓':''))),h('small',{style:'display:block;margin-top:3px;color:var(--muted)'},open?'October target met — earned amount is payable':tot>0?'October closed '+pf(oa)+' — '+R(tot)+' lost this cycle':'No held amount — November is the earning month')),h('span',{class:'st',style:'align-self:center'},'›')))});
    return;}
  app.append(scopeChips(DA));var hq=DA.scope,oh=DA.onhold(hq)||{q3:0,sept:0},tot=(oh.q3||0)+(oh.sept||0);
  var R2=DA.rows('ALL'),o=agg(R2,9),oa=P(o[2],o[1]),octOpen=oa!=null&&oa>=100,gapOct=Math.max(0,o[1]-o[2]),octClosed=(o[1]>0||o[2]>0),lost=(octClosed&&!octOpen)?tot:0;
  // BIG CARROT — what they can earn this month, front and centre
  var pot=novPot(o);
  if(pot)app.append(h('div',{class:'money'},h('div',{class:'k'},'💰 Earn this November'),h('h2',{},'up to '+R(pot.p110)),
    h('p',{},R(pot.p100)+' at 100% · '+R(pot.p110)+' at 110% — hit your target and it is yours, plus Q4 and the +25% impact bonus on top.')));
  // state line (short)
  if(octOpen){app.append(h('div',{class:'push'},h('b',{},'✓ October secured — '+pf(oa)),tot>0?(R(tot)+' from Q3 + September is released — well earned. Keep the chain alive: stay 100% in November.'):'You kept the chain alive and you are earning fresh. Keep every brand climbing.'));}
  else if(lost>0){app.append(h('div',{class:'loss'},h('div',{class:'k'},'💔 Slipped away in October'),h('h2',{},R(lost)),
    h('p',{},'Earned across Q3 + September, but October closed at '+pf(oa)+' (needed 100%) — you were only '+L(gapOct)+' short. Win it back from day one of November.')));}
  else {app.append(h('div',{class:'push hot'},h('b',{},'November is your fresh start'),'October '+pf(oa)+'. A 100% month earns from day one, Q4 and the +25% impact bonus are open, and the year\'s big prizes are still on the table.'));}
  // results / estimates
  var me=earnOf(o,'m'),q4=earnOf(agg(R2,'Q4'),'q'),q3=earnOf(agg(R2,'Q3'),'q');
  app.append(h('div',{class:'earn'},
    eCard('🗓️',octClosed?'October (final)':'October (est.)',me.locked?(octClosed?'No incentive':'—'):R(me.amt),me.locked?(octClosed?'below 97% / growth':'unlocks at 97% + growth'):'at '+me.rate+'% · '+pf(me.ach),me.locked?'dn':'up'),
    eCard('📦','Q3 earned',R(oh.q3),oh.q3>0?'logged':'held / on review',oh.q3>0?'up':'dn'),
    eCard('🎯',octClosed?'November':'To 100% (Oct)',octClosed?'Open':(gapOct>0?L(gapOct):'Done ✓'),octClosed?'earn fresh at 100%':(gapOct>0?'sell this much more':'bonus territory'),octClosed?'up':(gapOct>0?'dn':'up')),
    eCard('📈','Oct growth',sg(me.g),me.g>0?'positive ✓ (needed)':'needs to be positive',me.g>0?'up':'dn')));
  // milestone ladder for October (where the month finished)
  app.append(mileBar(o[1],o[2]));
  // THE BIGGER PICTURE — dreams + ceiling (everyone), folded
  var teaser=o[1]>0?(function(){var net=1.1*o[1];return net*1e5*RATE_M[slabIdx(net)][2]/100})():0;
  app.append(foldCard('🌍 The bigger picture'+(teaser>0?' · one 110% month ≈ '+R(teaser):''),'dreamopen',false,function(inner){inner.append(h('div',{class:'dream'},h('h3',{},'🌍 The bigger picture'),h('div',{class:'sub'},'What a full, strong year actually pays'),
    h('div',{class:'row'},'📅',h('span',{},h('b',{},'Every month 100%+: '),'up to 0.90% of your sales + ₹4,000–6,000 milestone')),
    h('div',{class:'row'},'📦',h('span',{},h('b',{},'Every quarter 110%+: '),'up to 1.40% — plus a 25% impact-brand bonus on top')),
    h('div',{class:'row'},'🗓️',h('span',{},h('b',{},'Half-yearly bonus: '),'extra again, over and above month & quarter')),
    h('div',{class:'row'},'🚀',h('span',{},h('b',{},'Productivity Advantage: '),'₹30,000–1,05,000 a year for strong incremental growth')),
    h('div',{class:'row'},'✈️',h('span',{},h('b',{},'STARNITE: '),'an international trip for 103–115%+ for the year')),
    teaser>0?h('div',{class:'goal'},'At your HQ\'s scale, one 110% month ≈ '+R(teaser)+' — every single month. Stack twelve of those and add the trip.'):'',
    h('div',{class:'goal'},'The 2026 ceiling is ₹12 lakh + a trip abroad. That is what you are really playing for — start taking it this month.')))}));
  // impact brand bonus gate (YTD standing — stable; bonus applies quarterly)
  var ig=impactGate(DA,'YTD');
  var ic=h('div',{class:'card'},h('h3',{},'⭐ Impact-brand bonus',h('small',{},'+25% · YTD standing')));
  ic.append(h('p',{class:'note',style:'margin:0 0 8px'},'The quarter pays +25% extra when overall is ≥100% and all four impact brands are ≥90% (combined ≥97%). '+(ig.ok?'All four are above 90% — protect the lead!':'Close the gaps below to unlock it.')));
  DA.impact.forEach(function(b){var a=agg(DA.rows(b),'YTD'),pp=P(a[2],a[1]),gap=Math.max(0,a[1]*0.9-a[2]),plab2=pp==null?'—':pp>200?'200%+':Math.round(pp)+'%';
    ic.append(h('div',{style:'padding:7px 0;border-bottom:1px solid var(--line,#eef2f1)'},h('div',{style:'display:flex;justify-content:space-between;font-size:13px'},h('b',{},b),h('span',{class:'pill '+(pp>=90?'up':pp>=70?'md':'dn')},plab2)),pbar(pp),gap>0?h('small',{style:'display:block;color:var(--muted);margin-top:3px;font-size:11.5px'},'Sell '+L(gap)+' more to cross 90%'):h('small',{style:'display:block;color:var(--ok);margin-top:3px;font-size:11.5px'},'✓ above 90%')));});
  app.append(ic);
  // the rules (short, educational)
  app.append(foldCard('📏 How to never leave money behind','rulesopen',false,function(inner){inner.append(h('div',{class:'lst'},
    [['🎯','Cross 97%, aim 100%/110% — each slab pays a higher %.'],['⭐','Every impact brand ≥90% — one weak brand cancels the 25% bonus.'],['📅','Reach 40% of the month target by the 17th for the milestone bonus.'],['📈','Positive growth is a must — no growth, no incentive.'],['↩️','Keep saleable returns under 3%; book expiry after close.'],['🔓','Earned money pays only when the next month hits 100%.']].map(function(x){return h('div',{style:'display:flex;gap:10px;padding:7px 0;font-size:13px'},h('span',{},x[0]),h('span',{},x[1]))})))}));
  app.append(h('p',{class:'note'},'Estimates use the company Sales-at-a-Glance figures and the Rise & Shine 2026 slabs. Final amounts depend on coverage, returns and outstanding-dues rules.'));
}
function eCard(ic,hd,big,sub,cls){return h('div',{},h('div',{class:'hd'},ic+' '+hd),h('b',{class:cls||''},big),h('small',{},sub))}
function foldCard(title,key,open0,buildFn){var open=get(key,open0?'1':'0')==='1';var box=h('div',{class:'fold'});
  box.append(h('button',{class:'fh',onclick:function(){set(key,open?'0':'1')}},title,h('span',{class:'ar'},open?'▴':'▾')));
  if(open){var inner=h('div',{class:'in'});buildFn(inner);box.append(inner)}return box}
function mileBar(tgt,sale){var pct=tgt?sale/tgt*100:0,w=Math.min(100,pct/1.1*100);
  return h('div',{class:'mile',style:'margin:2px 0 12px'},h('div',{class:'track'},h('div',{class:'fill',style:'width:'+w+'%'}),[90,100,105,110].map(function(m){return h('div',{class:'mk',style:'left:'+(m/1.1)+'%'})}),h('div',{class:'lbl',style:'left:'+Math.min(90,w)+'%'},Math.round(pct)+'%')),
    h('div',{style:'display:flex;justify-content:space-between;font-size:10px;color:var(--muted);font-weight:700;margin-top:3px'},h('span',{},'90%'),h('span',{},'100%'),h('span',{},'105%'),h('span',{},'110%')))}

/* ---------- NPDs ---------- */
function vNPD(app,DA){app.append(scopeChips(DA),periodTabs());var p=curP();var ps=DA.npdProducts();
  if(!ps.length){app.append(h('div',{class:'note'},'No NPD data for this HQ yet.'));return}
  ps.forEach(function(prod){var D=DA.npd(prod);if(!D||!Object.keys(D).length)return;
    var sk=sagKeyOf(p),row=D[sk]||D.YTD||[0,0,0];var tg=row[0]||0,sa=row[1]||0,qty=row[2]||0,pp=P(sa,tg);
    app.append(h('div',{class:'impc'},miniRing(pp),h('div',{class:'meta'},h('b',{},prod),h('div',{style:'margin:5px 0 4px'},pbar(pp)),h('div',{style:'display:flex;justify-content:space-between;font-size:12px;font-variant-numeric:tabular-nums'},h('span',{},L(sa)+' / '+L(tg)),h('span',{},qty?qty+' units':'')),h('small',{},plab(p)))));
  });
  // month heatmap of NPD perf
  var prod0=ps[0],D0=DA.npd(prod0),ms=Object.keys(D0).filter(function(m){return m!=='YTD'});
  if(DA.isMgr){var hm=h('table',{class:'heat'},h('tr',{},h('th',{},''),ms.map(function(m){return h('th',{style:'text-align:center'},m.charAt(0)+m.slice(1,3).toLowerCase())})));
    ps.forEach(function(prod){var D=DA.npd(prod);hm.append(h('tr',{},h('td',{},prod.slice(0,8)),ms.map(function(m){var x=D[m]||[0,0,0],pp=P(x[1],x[0]);return h('td',{class:heat(pp)},pp==null?(x[1]?'✓':'–'):Math.round(pp))})))});
    app.append(h('div',{class:'card'},h('h3',{},'NPD · month by month',h('small',{},'perf %')),h('div',{class:'tbl'},hm)));}
  app.append(h('p',{class:'note'},'NPD = new products. Book them at every retailer and stockist; doctors drive the repeat.'));
}

/* ---------- focus lines (compact insights, both roles) ---------- */
function focusLines(DA){var out=[];var scopes=DA.isMgr?DA.HQS:[DA.scope];
  scopes.forEach(function(q){var R=DA.isMgr?DA.hqRows(q,'ALL'):DA.rows('ALL');if(!R)return;var o=R[9],po=P(o[2],o[1]);
    if(po!=null&&po<90)out.push({hot:true,t:(DA.isMgr?q+': ':'')+'October '+pf(po),d:'Short by '+L(o[1]-o[2])+' in October — the fastest win is here.'});
    var brs=(DA.isMgr?DA.HQS&&Object.keys((G.hq[q]||{})):DA.allBrands());
  });
  // brand-level biggest YTD shortfalls for current scope
  DA.allBrands().map(function(b){var a=agg(DA.rows(b),'YTD');return{b:b,gap:a?a[1]-a[2]:0,p:a?P(a[2],a[1]):null}}).filter(function(x){return x.gap>0.3}).sort(function(a,b){return b.gap-a.gap}).slice(0,3).forEach(function(x){
    out.push({t:x.b+': '+pf(x.p)+' YTD',d:'₹'+x.gap.toFixed(2)+' L short — push '+( (META[x.b]||['',''])[1]||'the channel')+'.'})});
  return out}

/* ---------- Month Progress (this month, brand-wise, primary + POB) ---------- */
function Lk(v){if(v==null)return '—';var x=v/1e5;return (x>-0.005&&x<0.005)?'0.00':x.toFixed(2)}
function mpPct(p){return p==null?'—':p+'%'}
function mpGr(g){if(g==null)return h('span',{class:'mut'},'—');if(g>999)return h('span',{class:'pos'},'+999%+');if(g<-999)return h('span',{class:'neg'},'−999%+');return h('span',{class:g<0?'neg':g>0?'pos':'mut'},(g>0?'+':'')+g+'%')}
function mpPerf(p){return h('span',{class:p==null?'mut':p<0?'neg':p>=50?'pos':''},mpPct(p))}
function mpRow(r){return h('tr',{},h('td',{class:'b'},r.b),h('td',{},Lk(r.tgt)),h('td',{class:'mut'},'—'),h('td',{class:'mut'},'—'),h('td',{class:(r.ach||0)<0?'neg':''},Lk(r.ach)),h('td',{},mpPerf(r.perf)),h('td',{},mpGr(r.gr)))}
function vMonthProgress(box,DA){
  var hq=(DA&&DA.scope)||csoHQ(),mp=hq?(S.feeds||{})['mprog_'+hq]:null;
  if(!mp){box.append(h('div',{class:'note'},'Month progress for your HQ appears right after a Sync.'));return}
  var t=mp.total||{};
  box.append(h('div',{class:'hero'},h('div',{class:'k'},'Month Progress · '+(mp.month||'')+(mp.asOf?' · '+mp.asOf:'')),h('h2',{},hq),
    h('div',{class:'hrow'},ring(Math.max(0,t.perf||0),72),h('div',{},h('div',{class:'big'},mpPct(t.perf)),h('small',{},'primary achievement · ₹'+Lk(t.ach)+'L of ₹'+Lk(t.tgt)+'L'),h('small',{},'POB '+mpPct(mp.pob)+' (₹'+Lk(mp.pobv)+'L) · growth '),mpGr(t.gr)))));
  var tbl=h('table',{class:'mptbl'});
  tbl.append(h('tr',{},h('th',{class:'b'},'Brand'),h('th',{},'Target'),h('th',{},'Closing'),h('th',{},'POB'),h('th',{},'Ach'),h('th',{},'Perf%'),h('th',{},'Growth')));
  (mp.groups||[]).forEach(function(g){tbl.append(h('tr',{class:'grp'},h('td',{colspan:'7',class:'b'},g.name)));(g.rows||[]).forEach(function(r){tbl.append(mpRow(r))})});
  tbl.append(h('tr',{class:'tot'},h('td',{class:'b'},'TOTAL'),h('td',{},Lk(t.tgt)),h('td',{class:'mut'},'—'),h('td',{},mpPct(mp.pob)),h('td',{class:(t.ach||0)<0?'neg':''},Lk(t.ach)),h('td',{},mpPerf(t.perf)),h('td',{},mpGr(t.gr))));
  box.append(h('div',{class:'mpwrap'},tbl));
  box.append(h('p',{class:'note',style:'margin-top:8px'},'Ach & Perf% = primary net sales vs target · POB = secondary vs its target · growth vs last year · ₹ in lakh. Closing stock and brand-wise POB fill in once those figures are loaded.'));
}

/* ---------- shell: tabbar + render both roles ---------- */
function tabbar(T0){return h('div',{class:'tabbar'},[['perf','📊 Performance'],['mp','📅 Month Progress'],['imp','⭐ Impact Brands'],['inc','💰 Incentive'],['npd','🧪 NPDs']].map(function(x){return h('button',{class:x[0]===T0?'on':'',onclick:function(){set('T',x[0])}},x[1])}))}
function renderReports(app,DA){var box=h('div',{class:'geo cso'});app.append(box);
  var T0=get('T','perf');
  box.append(tabbar(T0));
  var names={perf:'Performance',mp:'Month Progress',imp:'Impact Brands',inc:'Incentive',npd:'NPDs'};
  if(DA.isMgr)box.append(h('div',{class:'sharebar'},h('button',{onclick:function(){shareView(names[T0])}},'📸 Save / Share for WhatsApp'),h('button',{class:'alt',onclick:function(){shareView(names[T0])}},'⬇️ Download')));
  box.append(h('p',{class:'note',style:'margin:-2px 0 10px'},DA.title+(DA.isMgr?'':' HQ')+' · company incentive & sales data · '+(DA.asOf||'')+' · ₹ in lakh'+(DA.isMgr?' · only you can see this':'')));
  try{(T0==='perf'?vPerf:T0==='mp'?vMonthProgress:T0==='imp'?vImpact:T0==='inc'?vInc:vNPD)(box,DA)}catch(e){box.append(h('div',{class:'note'},'Could not draw this view: '+e.message))}
}

U.routes.geo=function(app){if(!isMgr()){app.append(h('div',{class:'note'},'Performance is for the manager.'));return}
  load();if(!G){app.append(h('div',{class:'geo'},h('div',{class:'card'},h('h3',{},'Reports'),h('p',{},state==='busy'||state==='idle'?'Loading the latest company data…':state==='nokey'?'Tap Sync once — the secure key arrives with it.':state==='nocrypto'?'This browser cannot open the secure file. Please update Chrome / the app.':'Could not load. Check the internet and tap Sync.'))));return}
  renderReports(app,mkDA(false));};
U.csoPerf=function(app){var DA=mkDA(true);if(!DA){app.append(h('div',{class:'geo'},h('div',{class:'card'},h('h3',{},'My Reports'),h('p',{class:'note'},'Your figures appear right after a Sync. Tap Sync once and open this again.'))));return}
  renderReports(app,DA);};
U.geoReady=function(){return !!G};U.geoReset=function(){if(window.__GEO)return;G=null;state='idle'};

/* earnings snapshot for the dashboard (CSO home) */
function novPot(o){var t=o&&o[1]||0;if(t<=0)return null;var p100=t*1e5*RATE_M[slabIdx(t)][1]/100,n=1.1*t,p110=n*1e5*RATE_M[slabIdx(n)][2]/100;return{p100:p100,p110:p110}}
U.earnCard=function(){try{var DA=mkDA(true);if(!DA)return'';var oh=DA.onhold()||{q3:0,sept:0},tot=(oh.q3||0)+(oh.sept||0);
  var o=agg(DA.rows('ALL'),9),oa=P(o[2],o[1]),open=oa!=null&&oa>=100,closed=(o[1]>0||o[2]>0),lost=(closed&&!open&&tot>0)?tot:0,pot=novPot(o);
  var go2=function(){try{S.tab.perf='brands';S.tab.geo_T='inc';go('perf')}catch(e){}};
  if(!pot)return h('div',{class:'geo'},h('div',{class:'estrip neu',onclick:go2},h('span',{style:'font-size:20px'},'💰'),h('div',{},h('div',{class:'lbl'},'Incentive'),h('div',{class:'amt'},'Tap to see')),h('span',{class:'st'},'›')));
  var tag=lost>0?('₹'+Math.round(lost).toLocaleString('en-IN')+' slipped in Oct — win it back'):(open&&tot>0?(R(tot)+' from Oct is released ✓'):(open?'October '+pf(oa)+' ✓ — keep it going':'A strong month starts the money'));
  return h('div',{class:'geo'},h('div',{class:'money',style:'margin:0;cursor:pointer',onclick:go2},
    h('div',{class:'k'},'💰 Earn this November'),h('h2',{},'up to '+R(pot.p110)),
    h('p',{},R(pot.p100)+' at 100% · '+R(pot.p110)+' at 110% — plus Q4 & the 25% impact bonus. '+tag+'. Tap ›')));
}catch(e){return''}};
})();
