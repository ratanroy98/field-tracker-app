/* Field Tracker — CSO dashboard cards: Updates (meeting + manager info + daily quote, colours on new info),
   Yesterday's best field work, and the styling for the Incentive & Progress cards. Loaded last. */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
function isCSO(){return !(S.mgr&&!S.viewAs)}
function myEmail2(){try{return (typeof myEmail==='function')?myEmail():((S.viewAs&&S.viewAs.Email)||(S.me&&S.me.Email)||'')}catch(e){return''}}

var st=document.createElement('style');st.textContent=`
/* shared dashboard card */
.dcard{border-radius:18px;padding:14px;margin:0 0 11px;background:var(--card,#fff);border:1px solid var(--line,#e7edeb);box-shadow:0 6px 18px rgba(16,40,38,.06);animation:drise .34s ease both;cursor:pointer}
@keyframes drise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.dcard .dh{display:flex;align-items:center;gap:8px}
.dcard .dh b{font-size:15px}
.dcard .dh .sub{font-size:11px;color:var(--muted);font-weight:600}
.dcard .dh .arr{margin-left:auto;color:var(--muted);font-size:20px;line-height:1}
.dcard .dhint{margin:7px 0 0;font-size:12.5px;color:var(--muted);line-height:1.45}
/* Updates */
.updc{background:linear-gradient(135deg,#F3F7FF,#FFFFFF);border-color:#DCE7FB}
.updc.hasnew{border-color:#2F56C9;box-shadow:0 0 0 3px rgba(47,86,201,.14),0 8px 22px rgba(30,58,138,.12);animation:updpulse 1.8s ease-in-out infinite}
@keyframes updpulse{50%{box-shadow:0 0 0 6px rgba(47,86,201,.08),0 8px 22px rgba(30,58,138,.12)}}
.updc .nb{margin-left:auto;background:#E5484D;color:#fff;font-size:10px;font-weight:800;letter-spacing:.5px;border-radius:20px;padding:3px 9px;animation:updpulse 1.8s infinite}
.updc .mgrmsg{margin:9px 0 0;padding:10px 12px;border-radius:12px;background:#Eef3ff;color:#1E3A8A;font-size:13px;line-height:1.5}
.updc .mgrmsg b{display:block;font-size:11px;letter-spacing:.6px;text-transform:uppercase;margin-bottom:2px}
.updc .meet{margin:10px 0 0}
.updc .qline,.updc .qline2{margin:10px 0 0}
.quoteln{margin:10px 0 0;padding:10px 12px;border-radius:12px;background:var(--soft,#F2F5F4);font-size:13px;line-height:1.5;font-style:italic;color:var(--fg,#214)}
.quoteln small{font-style:normal;display:block;font-size:10.5px;letter-spacing:1px;text-transform:uppercase;color:var(--accent,#0F5257);font-weight:700;margin-bottom:3px}
.updc .none{margin:8px 0 0;font-size:13px;color:#2b6a4a}
.updc .updrow{display:flex;align-items:center;gap:10px;margin:9px 0 0;padding:9px 10px;border-radius:12px;background:#fff;border:1px solid #DCE7FB}
.updc .updrow.msg{background:#F6F9FF}
.updc .updrow .ic{font-size:18px;flex:0 0 auto}
.updc .updrow .tx{flex:1;min-width:0}
.updc .updrow .tx b{display:block;font-size:13.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.updc .updrow .tx small{display:block;font-size:11.5px;color:#5a6b86;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.updc .updrow .join{flex:0 0 auto;background:#2F56C9;color:#fff;border-radius:10px;padding:7px 12px;font-size:12.5px;font-weight:800}
.updc .updrow .join.gh{background:#E7EEFC;color:#2F56C9}
.bestc .w1{font-size:12px;opacity:.92;margin-top:3px}
/* Yesterday's best */
.bestc{background:linear-gradient(135deg,#3B1F5C,#5B2E8C 48%,#1FA79A);color:#fff;border:0;position:relative;overflow:hidden}
.bestc:before{content:'';position:absolute;inset:-40%;background:repeating-conic-gradient(from 0deg,rgba(255,255,255,.05) 0 8deg,transparent 8deg 16deg);animation:spin 42s linear infinite}
.bestc>*{position:relative}
.bestc .dh b{color:#F6D776}
.bestc .top{display:flex;align-items:center;gap:12px;margin-top:9px}
.bestc .av,.bestc .avn{width:54px;height:54px;border-radius:50%;flex:0 0 auto;object-fit:cover;object-position:top;border:3px solid #F6D776;box-shadow:0 0 0 4px rgba(246,215,118,.22);background:rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:800;color:#F6D776}
.bestc .nm{font-size:16px;font-weight:800}.bestc .ti{font-size:12.5px;opacity:.9}
.bestc ul{margin:9px 0 0;padding-left:18px;font-size:13px;line-height:1.5}
.bestc .cta{margin-top:9px;background:rgba(0,0,0,.18);border-radius:12px;padding:8px 11px;font-size:12.5px}
/* Incentive card + screen */
.dcard.inc .incrow{display:flex;align-items:flex-end;justify-content:space-between;margin-top:9px}
.dcard.inc .incrow small{font-size:11px;color:var(--muted)}
.dcard.inc .amt{font-size:20px;font-weight:800;color:var(--accent,#0F5257)}
.dcard.inc .incrow .r{text-align:right}
.dcard.inc .ap{font-size:20px;font-weight:800}
.ap.g,.perf.g,.bp.g{color:#1B8A5A}.ap.a,.perf.a,.bp.a{color:#C77D16}.ap.r,.perf.r,.bp.r{color:#E5484D}
.seg3{display:flex;gap:6px;margin:0 0 12px;background:var(--soft,#EEF2F1);border-radius:14px;padding:4px}
.seg3 button{flex:1;border:0;background:none;border-radius:11px;padding:10px 6px;font-weight:800;font-size:13px;color:var(--muted);min-height:auto}
.seg3 button.on{background:var(--card,#fff);color:var(--accent,#0F5257);box-shadow:0 2px 8px rgba(0,0,0,.08)}
.inchero{display:flex;align-items:center;gap:14px;border-radius:18px;padding:15px;margin:0 0 12px;background:linear-gradient(135deg,var(--h1,#0F5257),var(--h3,#1B7F79));color:#fff}
.inchero .amt{font-size:22px;font-weight:800;margin:3px 0}
.inchero small{font-size:12px;opacity:.92}
.inccard{border-radius:16px;border:1px solid var(--line,#e7edeb);background:var(--card,#fff);padding:14px;margin:0 0 12px}
.inccard h4{margin:12px 0 5px;font-size:12px;letter-spacing:.5px;text-transform:uppercase;color:var(--accent,#0F5257)}
.inccard h4:first-child{margin-top:0}
.inccard p{margin:0;font-size:13.5px;line-height:1.5}.inccard p.todo{background:#FFF7E6;border-left:3px solid #F5C451;padding:8px 10px;border-radius:8px}
.crit{list-style:none;margin:0;padding:0}
.crit li{font-size:13px;padding:5px 0 5px 24px;position:relative;line-height:1.4}
.crit li:before{position:absolute;left:0;top:4px;font-weight:800}
.crit li.ok:before{content:'✓';color:#1B8A5A}.crit li.no:before{content:'•';color:#C77D16;font-size:18px;top:1px}
/* Progress dashboard: overall strip + per-brand bars */
.dcard.prog .ovr{display:flex;align-items:center;gap:12px;margin:9px 0 4px}
.dcard.prog .ovr .opw{min-width:62px;text-align:center}
.dcard.prog .ovr .op{font-size:26px;font-weight:800;line-height:1}
.dcard.prog .ovr .opc{display:block;font-size:10px;color:var(--muted);letter-spacing:.3px}
.fthead .hb.ftbk{font-size:26px;font-weight:700;line-height:1}
.dcard.prog .ogrid{display:grid;grid-template-columns:1fr 1fr;gap:2px 12px;font-size:11.5px;color:var(--muted)}
.dcard.prog .ogrid b{color:var(--fg,#14302E)}
.dcard.prog .glbl{font-size:9.5px;letter-spacing:.6px;font-weight:800;color:var(--accent,#0F5257);margin:7px 0 2px}
.dcard.prog .pln{display:flex;align-items:center;gap:8px;margin:3px 0}
.dcard.prog .pln .nm{flex:0 0 38%;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dcard.prog .pln .ba{flex:1;height:7px;border-radius:5px;background:var(--soft,#EEF2F1);overflow:hidden}
.dcard.prog .pln .ba i{display:block;height:100%;border-radius:5px;background:#1B8A5A}
.dcard.prog .pln .ba i.a{background:#E0A82E}.dcard.prog .pln .ba i.r{background:#E5484D}
.dcard.prog .pln .pc{flex:0 0 38px;text-align:right;font-size:12px;font-weight:800}
.dcard.prog .tapfull{margin-top:8px;font-size:11px;color:var(--muted);text-align:center}
.dcard.prog .ptblwrap{margin-top:8px;overflow-x:auto}
.ptbl{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}
.ptbl th{font-size:10px;letter-spacing:.3px;text-transform:uppercase;color:var(--muted);font-weight:700;padding:3px 4px;text-align:left}
.ptbl th.r,.ptbl td.r{text-align:right}
.ptbl td{font-size:12px;padding:5px 4px;border-top:1px solid var(--line,#eef2f1)}
.ptbl td .bal{display:block;font-size:9.5px;color:#C77D16;font-weight:700}
.ptbl td.perf{font-weight:800}
.ptbl tr.grp td{background:var(--soft,#F2F5F4);font-size:9.5px;letter-spacing:.6px;font-weight:800;color:var(--accent,#0F5257);padding:4px 6px;border:0}
/* Progress full screen */
.psec{font-size:11px;letter-spacing:.7px;text-transform:uppercase;color:var(--accent,#0F5257);font-weight:800;margin:4px 0 8px}
.brcard{border-radius:16px;border:1px solid var(--line,#e7edeb);background:var(--card,#fff);padding:13px 15px;margin:0 0 11px;box-shadow:0 4px 12px rgba(16,40,38,.05)}
.brcard .bh{display:flex;align-items:center;justify-content:space-between}
.brcard .bh b{font-size:15px}
.brcard .bp{font-size:16px;font-weight:800}
.brcard .brl{display:flex;justify-content:space-between;font-size:13px;margin-top:6px}
.brcard .brl span{color:var(--muted)}
.brcard .brl b.muted{color:var(--muted)}.brcard .brl b.pob{color:#2F56C9}.brcard .brl b.ach{color:#0F5257}
.brcard .brl.bal b.r{color:#E5484D}.brcard .brl.bal b.g{color:#1B8A5A}
.brcard .pbar{height:8px;border-radius:6px;background:var(--soft,#EEF2F1);overflow:hidden;margin-top:9px}
.brcard .pbar i{display:block;height:100%;border-radius:6px;background:#1B8A5A;transition:width .6s ease}
.brcard .pbar i.a{background:#E0A82E}.brcard .pbar i.r{background:#E5484D}
`;document.head.appendChild(st);

/* latest manager message for today (from the daily-message feed) */
function mgrMsg(){try{var e=myEmail2();var ms=(S.msgs||[]).filter(function(x){return x.email===e&&x.date===TODAY});if(!ms.length)return null;ms.sort(function(a,b){return (b.ts||0)-(a.ts||0)});return ms[0]}catch(e){return null}}

/* ---------- Updates: meeting + manager info + daily quote (compact, colours when something new arrived) ---------- */
function quoteBlock(){try{var q=(U.C&&U.C().quotes)||[];if(!q.length)return'';var i=(U.dayIdx?U.dayIdx():new Date().getDate())%q.length;return h('div',{class:'quoteln'},h('small',{},'Ratan Roy says'),q[i])}catch(e){return''}}
function joinUrl(m){var ph=window.MGR_PHONE||'';return m.how==='phone'?'tel:+'+ph:m.how==='whatsapp'?'https://wa.me/'+ph:(m.link||'')}
function meetWhen(m){try{var d=new Date(+m.at);var day=(m.date===TODAY)?'Today':d.toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'});return day+' '+d.toLocaleTimeString('en-IN',{hour:'numeric',minute:'2-digit'})}catch(e){return m.time||''}}
U.updatesCard=function(){try{if(!isCSO())return'';
  var meets=(U.myMeetings&&U.myMeetings())||[],msg=mgrMsg();
  var newest=0;meets.forEach(function(m){newest=Math.max(newest,+m.ts||+m.at||0)});if(msg)newest=Math.max(newest,+msg.ts||0);
  var seen=+(U.lsGet&&U.lsGet('ft_upd_seen','0'))||0,isNew=newest>0&&newest>seen;
  function markSeen(){try{if(newest>seen){U.lsSet&&U.lsSet('ft_upd_seen',String(newest));render()}}catch(e){}}
  var card=h('div',{class:'dcard updc'+(isNew?' hasnew':''),onclick:markSeen});
  card.append(h('div',{class:'dh'},h('b',{},'🔔 Updates'),isNew?h('span',{class:'nb'},'NEW'):''));
  meets.forEach(function(m){var hw=m.how==='phone'?'📞':m.how==='whatsapp'?'💬':'🎥',url=joinUrl(m),jl=m.how==='phone'?'Call':m.how==='whatsapp'?'WhatsApp':'Join';
    card.append(h('div',{class:'updrow',onclick:function(ev){ev.stopPropagation();markSeen();if(url){try{if(window.openUrl)openUrl(url);else window.open(url,'_blank')}catch(e){location.href=url}}}},
      h('span',{class:'ic'},hw),h('div',{class:'tx'},h('b',{},m.title||'Meeting with Ratan Roy'),h('small',{},meetWhen(m)+(m.agenda?' · '+m.agenda:''))),url?h('span',{class:'join'},jl):''));});
  /* Immediate note only: a short urgent message flagged by Ratan (never the daily plan — that lives on its own tab, and this card never navigates away). */
  if(msg&&(msg.urgent||msg.slot==='now'||msg.slot==='immediate')){var first=(msg.text||'').split('\n').filter(Boolean)[0]||'';
    card.append(h('div',{class:'updrow msg'},h('span',{class:'ic'},'⚡'),h('div',{class:'tx'},h('b',{},'From Ratan Roy'),h('small',{},first))));}
  if(!meets.length&&!(msg&&(msg.urgent||msg.slot==='now'||msg.slot==='immediate')))card.append(h('div',{class:'none'},'✅ No meeting or urgent note right now.'));
  var q=quoteBlock();if(q)card.append(q);
  return card;
}catch(e){return''}};

/* ---------- Best field work: manager pick → feed → the app picks it itself from the team data ---------- */
function myHQ3(){try{if(S.viewAs&&S.viewAs.HQ)return S.viewAs.HQ;if(S.me&&S.me.HQ)return S.me.HQ;var k=Object.keys(S.feeds||{}).filter(function(z){return z.indexOf('perf_')===0})[0];return k?k.slice(5):''}catch(e){return''}}
function money(v){v=Math.round(+v||0);return (v<0?'–₹':'₹')+Math.abs(v).toLocaleString('en-IN')}
function teamRows(){try{var F=S.feeds||{},hq=myHQ3();var tf=F['teamperf_'+hq]||F.teamperf;return (tf&&tf.rows)||[]}catch(e){return[]}}
/* score every teammate by achievement (primary) + POB, so the app can choose the best on its own */
function scoreRows(){return teamRows().map(function(r){var ach=(r.ach==null?r.mtd:r.ach),pob=(r.pob==null?null:r.pob);return{r:r,ach:ach,pob:pob,s:(ach==null?-1:ach)+(pob==null?0:pob*0.3)}}).sort(function(a,b){return b.s-a.s})}
function winsOf(r,ach){var w=[];if(ach!=null)w.push(Math.round(ach)+'% of target');if(r.pobv!=null)w.push(money(r.pobv)+' POB');else if(r.pob!=null)w.push('POB '+Math.round(r.pob)+'%');if(r.close!=null)w.push('Closing '+money(r.close));return w.slice(0,3)}
function autoBest(){var sc=scoreRows();if(!sc.length)return null;var t=sc[0],r=t.r;
  return {name:r.name||'Top performer',hq:r.hq,title:'Leading the team'+(t.ach!=null?' at '+Math.round(t.ach)+'%':''),wins:winsOf(r,t.ach),cta:'Match '+String(r.name||'').split(' ')[0]+'\'s pace today',auto:true}}
function mgrSpot(){try{var sp=(S.entries||[]).filter(function(e){return e.type==='spotlight'&&!e.cancelled});if(!sp.length)return null;sp.sort(function(a,b){return (b.ts||0)-(a.ts||0)});var s=sp[0];return{name:s.name,hq:s.hq,title:s.title,wins:s.wins||[],cta:s.cta,photo:s.photo,by:s.by}}catch(e){return null}}
function feedSpot(){try{var F=S.feeds||{},hq=myHQ3();return F['spotlight_'+hq]||F.spotlight||null}catch(e){return null}}
U.bestCard=function(){try{if(!isCSO())return'';var sf=mgrSpot()||feedSpot()||autoBest();
  if(!sf)return h('div',{class:'dcard'},h('div',{class:'dh'},h('b',{},'🌟 Yesterday\'s best field work')),h('p',{class:'dhint'},'Appears right after a Sync — the app highlights the top field work of the team on its own, or Ratan picks one.'));
  var card=h('div',{class:'dcard bestc'});
  card.append(h('div',{class:'dh'},h('b',{},'🌟 Yesterday\'s best field work')));
  var av=sf.photo?h('img',{class:'av',src:sf.photo}):h('div',{class:'avn'},(sf.name||'?').slice(0,1));
  var win1=(sf.wins&&sf.wins[0])||sf.cta||'';
  card.append(h('div',{class:'top'},av,h('div',{},h('div',{class:'nm'},sf.name||'Top performer'),h('div',{class:'ti'},sf.title||'Did it right yesterday'),win1?h('div',{class:'w1'},'• '+win1):'')));
  if(sf.auto)card.append(h('div',{class:'autotag'},'⚙️ Chosen by the app from today\'s team standings'));
  return card;
}catch(e){return''}};

/* ---------- Manager: pick who to highlight (one tap). If untouched, the app shows the top performer itself. ---------- */
function setBest(r,ach){try{var payload={type:'spotlight',by:'Ratan Roy',ts:Date.now(),date:TODAY,hq:r.hq,name:r.name,title:'Best field work'+(r.hq?' · '+r.hq:''),wins:winsOf(r,ach),cta:'Match '+String(r.name||'').split(' ')[0]+'\'s work today'};
  var cs=((window.D&&D.users)||[]).filter(function(u){return u.Role==='CSO'&&u.Status==='Active'});
  var emails=cs.map(function(u){return u.Email});if(emails.indexOf('ratanroy98@gmail.com')<0)emails.push('ratanroy98@gmail.com');
  Promise.all(emails.map(function(e){return S.db.collection('entries').add(Object.assign({email:e},payload))})).then(function(){try{window.toast&&toast('🌟 '+r.name+' is now the team highlight')}catch(_){}try{render&&render()}catch(_){}});
}catch(e){try{window.toast&&toast('Could not set: '+e.message)}catch(_){}}}
U.bestPanel=function(){try{if(isCSO())return'';var sc=scoreRows();if(!sc.length)return'';var cur=mgrSpot();
  var box=h('div',{class:'dcard bestpanel'},h('div',{class:'dh'},h('b',{},'🌟 Best field work — who to highlight')));
  box.append(h('p',{class:'dhint'},cur?('Showing '+cur.name+' to the whole team now. Tap another to change it.'):('If you don\'t pick, the app shows '+sc[0].r.name+' automatically. Tap one to set it for the team.')));
  sc.slice(0,5).forEach(function(x,i){var r=x.r,picked=cur&&cur.name===r.name;
    box.append(h('div',{class:'bpk'+(i===0?' top':'')+(picked?' on':''),onclick:function(){setBest(r,x.ach)}},
      h('div',{class:'bav'},(r.name||'?').slice(0,1)),
      h('div',{class:'tx'},h('b',{},r.name||'—'),h('small',{},(x.ach!=null?Math.round(x.ach)+'% target':'')+(r.pobv!=null?' · '+money(r.pobv)+' POB':'')+(i===0&&!cur?' · app\'s pick':''))),
      h('span',{class:'set'},picked?'✓ Shown':'Set')));});
  return box;
}catch(e){return''}};

var st2=document.createElement('style');st2.textContent=`
.bestc .autotag{position:relative;margin-top:9px;font-size:11px;opacity:.85;background:rgba(0,0,0,.18);border-radius:10px;padding:5px 9px;display:inline-block}
.bestpanel .bpk{display:flex;align-items:center;gap:11px;margin:8px 0 0;padding:9px 11px;border-radius:13px;border:1px solid var(--line,#e7edeb);background:var(--card,#fff);cursor:pointer}
.bestpanel .bpk.top{border-color:#F0C94B;background:linear-gradient(135deg,#FFFaed,#fff)}
.bestpanel .bpk.on{border-color:#1B8A5A;background:#EEF8F1}
.bestpanel .bpk .bav{width:40px;height:40px;border-radius:50%;flex:0 0 auto;display:flex;align-items:center;justify-content:center;font-weight:800;color:#fff;background:linear-gradient(135deg,#5B2E8C,#1FA79A)}
.bestpanel .bpk .tx{flex:1;min-width:0}.bestpanel .bpk .tx b{font-size:14px}.bestpanel .bpk .tx small{display:block;color:var(--muted);font-size:11.5px}
.bestpanel .bpk .set{flex:0 0 auto;background:#5B2E8C;color:#fff;border-radius:10px;padding:7px 13px;font-size:12.5px;font-weight:800}
.bestpanel .bpk.on .set{background:#1B8A5A}
/* Tablet / landscape: keep a comfortable centred column instead of a stretched or tiny layout */
@media (min-width:700px){
  #app{max-width:640px!important;margin-left:auto!important;margin-right:auto!important}
  .fthead .row,.bnav{max-width:640px;margin-left:auto;margin-right:auto}
  .bnav{left:0;right:0}
  body{background:#E7ECEA}
}
@media (min-width:1000px){
  #app{max-width:720px!important}
  .fthead .row,.bnav{max-width:720px}
}
`;document.head.appendChild(st2);
})();
