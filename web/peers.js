/* Field Tracker — team awareness (everyone sees it), November tracking:
   • per-person meter: the needle is ACHIEVEMENT = primary net sales vs target (the number Ratan asked for)
   • a POB bar underneath: performance = secondary POB vs its target
   • the ₹ figures: primary, POB, target (and closing stock when the feed carries it)
   • a coaching spotlight: what the best is doing well + "bring out the sale like <name>"
   Fed per-HQ (teamperf_<HQ>/spotlight_<HQ>) so every CSO sees the whole team. No incentive money shown. */
(function(){
'use strict';
var U=window.FTUI;if(!U)return;
function myHQ(){try{return (S.viewAs||S.me||{}).HQ||''}catch(e){return''}}
function money(v){if(v==null||v==='')return'—';var n=Math.abs(v),s=v<0?'-':'';if(n>=1e5)return s+'₹'+(n/1e5).toFixed(2)+'L';if(n>=1000)return s+'₹'+Math.round(n/1000)+'k';return s+'₹'+Math.round(n)}
function pctTxt(p){return p==null?'—':(Math.round(p)+'%')}

var st=document.createElement('style');st.textContent=`
.team{background:var(--panel,#fff);border:1px solid var(--line,#e5ece9);border-radius:20px;padding:14px;margin:0 0 12px;box-shadow:0 6px 18px rgba(16,40,38,.06);animation:rise .35s ease both}
.team .hd{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:800;margin:0 0 4px}
.team .hd small{margin-left:auto;font-weight:600;color:var(--muted,#5B716E);font-size:11.5px}
.team .lead{font-size:11px;color:var(--muted,#5B716E);margin:0 0 10px}
.team .plist{display:flex;flex-direction:column;gap:8px}
.team .prow{display:flex;align-items:center;gap:11px;border-radius:15px;padding:9px 10px;background:var(--soft2,#eef2f1)}
.team .prow.me{background:linear-gradient(135deg,rgba(246,215,118,.3),rgba(246,215,118,.05));box-shadow:inset 0 0 0 1px #EFD67F}
.team .prow .gw{width:72px;flex:none}
.team .prow .info{flex:1;min-width:0}
.team .prow .nm{font-weight:800;font-size:13.5px;line-height:1.1;margin-bottom:4px}
.team .prow .nm .rk{color:var(--muted,#5B716E);font-weight:700}
.team .prow .big{font-size:12.5px;font-weight:700;margin-bottom:5px}
.team .prow .big .amt{color:var(--muted,#5B716E);font-weight:600}
.team .prow .bar{position:relative;height:6px;border-radius:4px;background:rgba(0,0,0,.08);overflow:hidden;margin:0 0 2px}
.team .prow .bar>i{position:absolute;left:0;top:0;height:100%;border-radius:4px;background:#0E6B63}
.team .prow .pobln{font-size:11px;color:var(--muted,#5B716E);display:flex;gap:8px;flex-wrap:wrap}
.team .prow .pobln b{color:var(--fg,#14302E)}
.team .spot{margin-top:12px;border-top:1px dashed var(--line,#e5ece9);padding-top:11px}
.team .spot .top{display:flex;align-items:center;gap:10px}
.team .spot .av{width:40px;height:40px;border-radius:50%;flex:0 0 auto;display:grid;place-items:center;font-weight:800;color:#5A4300;background:linear-gradient(135deg,#FFE9A8,#F6D776);box-shadow:0 3px 8px rgba(224,168,46,.4)}
.team .spot .av img{width:100%;height:100%;border-radius:50%;object-fit:cover;object-position:top center}
.team .spot b{font-size:14.5px}.team .spot .ti{font-size:12px;color:var(--accent,#0F5257);font-weight:700}
.team .spot ul{margin:9px 0 0;padding:0;list-style:none}
.team .spot li{position:relative;padding:4px 0 4px 20px;font-size:13px;line-height:1.4}
.team .spot li:before{content:'✦';position:absolute;left:0;color:#E0A82E}
.team .spot .cta{margin:10px 0 0;background:linear-gradient(135deg,#E8F6EE,#D6F0E0);border:1px solid #9FD9B6;border-radius:12px;padding:10px 12px;font-size:13px;font-weight:700;color:#13684A;line-height:1.4}
`;document.head.appendChild(st);

function band(p){return p==null?'#9aa':p>=100?'#1B8A5A':p>=90?'#D99A1E':p>=50?'#E0A82E':'#E5484D'}

/* ---------- analog gauge (semicircle speedometer); shows the % with sign ---------- */
function gauge(pct,sz){sz=sz||84;var w=sz,hh=Math.round(sz*0.60),cx=w/2,cy=Math.round(sz*0.55),r=Math.round(sz*0.42),max=130;
  var v=Math.max(0,Math.min(max,pct==null?0:pct));
  function pt(val,rr){var a=Math.PI*(1-val/max);return [cx+rr*Math.cos(a),cy-rr*Math.sin(a)]}
  var col=band(pct);
  var bg='M '+(cx-r)+' '+cy+' A '+r+' '+r+' 0 0 1 '+(cx+r)+' '+cy;
  var ep=pt(v,r),valArc='M '+(cx-r)+' '+cy+' A '+r+' '+r+' 0 0 1 '+ep[0].toFixed(1)+' '+ep[1].toFixed(1);
  var np=pt(v,r*0.82);
  var s='<path d="'+bg+'" fill="none" stroke="var(--soft2,#eef2f1)" stroke-width="'+(sz*0.1)+'" stroke-linecap="round"/>'+
    '<path d="'+valArc+'" fill="none" stroke="'+col+'" stroke-width="'+(sz*0.1)+'" stroke-linecap="round"/>'+
    '<line x1="'+cx+'" y1="'+cy+'" x2="'+np[0].toFixed(1)+'" y2="'+np[1].toFixed(1)+'" stroke="var(--fg,#14302E)" stroke-width="2.2" stroke-linecap="round"/>'+
    '<circle cx="'+cx+'" cy="'+cy+'" r="3" fill="var(--fg,#14302E)"/>'+
    '<text x="'+cx+'" y="'+(cy-r*0.02)+'" text-anchor="middle" font-size="'+(sz*(Math.abs(pct)>=100?0.2:0.23))+'" font-weight="800" fill="'+col+'">'+(pct==null?'—':Math.round(pct)+'%')+'</text>';
  var d=h('div');d.innerHTML='<svg viewBox="0 0 '+w+' '+(hh+2)+'" width="100%" role="img" style="display:block">'+s+'</svg>';d.style.maxWidth=sz+'px';d.style.margin='0 auto';return d}

function avatar(f){try{var M=window.FT_MEDIA||{},ph=f.photo;if(ph&&M[ph])return h('div',{class:'av'},h('img',{src:M[ph],alt:f.name||'',draggable:'false'}))}catch(e){}
  return h('div',{class:'av'},(f.name||'★')[0])}

/* one person's row: gauge(achievement) + primary ₹ + POB bar + target/closing */
function prow(r,me){
  var ach=(r.ach==null?r.mtd:r.ach);            // achievement = primary % (fallback to old mtd)
  var pob=(r.pob==null?null:r.pob);             // POB % (performance)
  var info=h('div',{class:'info'});
  info.append(h('div',{class:'nm'},(me?'You':(r.name||r.hq)),(r.hq&&!me?h('span',{class:'rk'},' · '+r.hq):'')));
  info.append(h('div',{class:'big'},'Primary ',h('span',{style:'color:'+band(ach)},pctTxt(ach)),r.net!=null?h('span',{class:'amt'},'  ·  '+money(r.net)):''));
  if(pob!=null){var w=Math.max(2,Math.min(100,pob));
    info.append(h('div',{class:'bar'},h('i',{style:'width:'+w+'%;background:'+band(pob)})));
    info.append(h('div',{class:'pobln'},h('span',{},'POB ',h('b',{},pctTxt(pob)),r.pobv!=null?' · '+money(r.pobv):''),h('span',{},'Target ',h('b',{},money(r.tgt))),r.close!=null?h('span',{},'Closing ',h('b',{},money(r.close))):''));}
  else info.append(h('div',{class:'pobln'},h('span',{},'Target ',h('b',{},money(r.tgt))),r.close!=null?h('span',{},'Closing ',h('b',{},money(r.close))):''));
  return h('div',{class:'prow'+(me?' me':'')},h('div',{class:'gw'},gauge(ach,72)),info);
}

U.teamCard=function(){try{if(S.mgr&&!S.viewAs)return'';var F=S.feeds||{},hq=myHQ();
  var tf=F['teamperf_'+hq]||F.teamperf,sf=F['spotlight_'+hq]||F.spotlight;if(!tf&&!sf)return'';
  var box=h('div',{class:'team'});
  if(tf&&tf.rows){var av=function(r){var a=(r.ach==null?r.mtd:r.ach);return a==null?-999:a},rows=tf.rows.slice().sort(function(a,b){return av(b)-av(a)}),mine=myHQ();
    box.append(h('div',{class:'hd'},'📊 Team · '+(tf.month||'this month'),h('small',{},tf.asOf||'')));
    box.append(h('div',{class:'lead'},'Needle = achievement (primary sales vs target) · bar = POB'));
    var pl=h('div',{class:'plist'});rows.forEach(function(r){pl.append(prow(r,r.hq===mine))});
    box.append(pl);}
  if(sf){var sp=h('div',{class:'spot'});
    sp.append(h('div',{class:'top'},avatar(sf),h('div',{},h('b',{},'🌟 '+(sf.name||'Top performer')),h('div',{class:'ti'},sf.title||'Doing it right'))));
    if(sf.wins&&sf.wins.length)sp.append(h('ul',{},sf.wins.map(function(w){return h('li',{},w)})));
    if(sf.cta)sp.append(h('div',{class:'cta'},'💪 '+sf.cta));
    box.append(sp);
    try{var kd='ft_spot_'+(sf.date||'');if(U.lsGet&&U.lsGet(kd,'')!=='1'){U.lsSet(kd,'1');setTimeout(function(){try{U.confetti&&U.confetti(26)}catch(e){}},400)}}catch(e){}}
  return box;
}catch(e){return''}};
})();
