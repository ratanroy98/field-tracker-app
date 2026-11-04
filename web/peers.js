/* Field Tracker — team awareness (everyone sees it):
   • analog performance meters (gauge) for each CSO — the percentage only
   • a coaching spotlight: what the best is doing well + "bring out the sale like <name>"
   Fed by global feeds teamperf and spotlight (not HQ-filtered). Pure coaching; no earnings shown. */
(function(){
'use strict';
var U=window.FTUI;if(!U)return;
function myHQ(){try{return (S.viewAs||S.me||{}).HQ||''}catch(e){return''}}

var st=document.createElement('style');st.textContent=`
.team{background:var(--panel,#fff);border:1px solid var(--line,#e5ece9);border-radius:20px;padding:14px;margin:0 0 12px;box-shadow:0 6px 18px rgba(16,40,38,.06);animation:rise .35s ease both}
.team .hd{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:800;margin:0 0 10px}
.team .hd small{margin-left:auto;font-weight:600;color:var(--muted,#5B716E);font-size:11.5px}
.team .gauges{display:flex;gap:6px;justify-content:space-between}
.team .g{flex:1;min-width:0;text-align:center;border-radius:14px;padding:8px 4px}
.team .g.me{background:linear-gradient(135deg,rgba(246,215,118,.28),transparent)}
.team .g .nm{font-size:12.5px;font-weight:800;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.team .g .sub{font-size:10.5px;color:var(--muted,#5B716E)}
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

/* ---------- analog gauge (semicircle speedometer) ---------- */
function gauge(pct,sz){sz=sz||92;var w=sz,hh=Math.round(sz*0.60),cx=w/2,cy=Math.round(sz*0.55),r=Math.round(sz*0.42),max=130;
  var v=Math.max(0,Math.min(max,pct==null?0:pct));
  function pt(val,rr){var a=Math.PI*(1-val/max);return [cx+rr*Math.cos(a),cy-rr*Math.sin(a)]}
  var col=pct==null?'#9aa':pct>=100?'#1B8A5A':pct>=90?'#D99A1E':'#E5484D';
  var bg='M '+(cx-r)+' '+cy+' A '+r+' '+r+' 0 0 1 '+(cx+r)+' '+cy;
  var ep=pt(v,r),valArc='M '+(cx-r)+' '+cy+' A '+r+' '+r+' 0 0 1 '+ep[0].toFixed(1)+' '+ep[1].toFixed(1);
  var np=pt(v,r*0.82);
  var s='<path d="'+bg+'" fill="none" stroke="var(--soft2,#eef2f1)" stroke-width="'+(sz*0.10)+'" stroke-linecap="round"/>'+
    '<path d="'+valArc+'" fill="none" stroke="'+col+'" stroke-width="'+(sz*0.10)+'" stroke-linecap="round"/>'+
    '<line x1="'+cx+'" y1="'+cy+'" x2="'+np[0].toFixed(1)+'" y2="'+np[1].toFixed(1)+'" stroke="var(--fg,#14302E)" stroke-width="2.2" stroke-linecap="round"/>'+
    '<circle cx="'+cx+'" cy="'+cy+'" r="3" fill="var(--fg,#14302E)"/>'+
    '<text x="'+cx+'" y="'+(cy-r*0.02)+'" text-anchor="middle" font-size="'+(sz*0.23)+'" font-weight="800" fill="'+col+'">'+(pct==null?'—':Math.round(pct)+'%')+'</text>';
  var d=h('div');d.innerHTML='<svg viewBox="0 0 '+w+' '+(hh+2)+'" width="100%" role="img" style="display:block">'+s+'</svg>';d.style.maxWidth=sz+'px';d.style.margin='0 auto';return d}

/* ---------- spotlight media (reuse Hall-of-Fame decoded photos if available) ---------- */
function avatar(f){try{var M=window.FT_MEDIA||{},ph=f.photo;if(ph&&M[ph])return h('div',{class:'av'},h('img',{src:M[ph],alt:f.name||'',draggable:'false'}))}catch(e){}
  return h('div',{class:'av'},(f.name||'★')[0])}

U.teamCard=function(){try{if(S.mgr&&!S.viewAs)return'';var F=S.feeds||{},hq=myHQ();
  var tf=F['teamperf_'+hq]||F.teamperf,sf=F['spotlight_'+hq]||F.spotlight;if(!tf&&!sf)return'';
  var box=h('div',{class:'team'});
  if(tf&&tf.rows){var mv=function(r){return r.mtd==null?-1:r.mtd},rows=tf.rows.slice().sort(function(a,b){return mv(b)-mv(a)}),mine=myHQ();
    box.append(h('div',{class:'hd'},'📊 Team · this month',h('small',{},tf.month||tf.asOf||'')));
    var g=h('div',{class:'gauges'});rows.forEach(function(r){var me=r.hq===mine;
      g.append(h('div',{class:'g'+(me?' me':'')},gauge(r.mtd,88),h('div',{class:'nm'},me?'You':(r.name||r.hq)),h('div',{class:'sub'},'YTD '+(r.perf==null?'—':r.perf+'%'))))});
    box.append(g);}
  if(sf){var sp=h('div',{class:'spot'});
    sp.append(h('div',{class:'top'},avatar(sf),h('div',{},h('b',{},'🌟 '+(sf.name||'Top performer')),h('div',{class:'ti'},sf.title||'Doing it right'))));
    if(sf.wins&&sf.wins.length)sp.append(h('ul',{},sf.wins.map(function(w){return h('li',{},w)})));
    if(sf.cta)sp.append(h('div',{class:'cta'},'💪 '+sf.cta));
    box.append(sp);
    // small celebration once a day when the spotlight is first seen
    try{var kd='ft_spot_'+(sf.date||'');if(U.lsGet&&U.lsGet(kd,'')!=='1'){U.lsSet(kd,'1');setTimeout(function(){try{U.confetti&&U.confetti(26)}catch(e){}},400)}}catch(e){}}
  return box;
}catch(e){return''}};
})();
