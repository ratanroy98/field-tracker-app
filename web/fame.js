/* Field Tracker – Hall of Fame (animated), gift gallery & gift unlock, 2-tap doctor log, November corrections. */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
var t=U.t,lsGet=U.lsGet,lsSet=U.lsSet;
var M=window.FT_MEDIA||{};

/* ---------- private pictures (served only to signed-in users) ---------- */
var loading=false,waiters=[];
try{var c0=JSON.parse(lsGet('ft_media','null'));if(c0&&c0.img)M=window.FT_MEDIA=c0.img}catch(e){}
function loadMedia(cb){if(cb)waiters.push(cb);if(loading)return;var a=null;try{a=JSON.parse(lsGet('ft_auth','null'))}catch(e){}
  if(!a||!window.google||!google.script)return;loading=true;var cur='';try{cur=JSON.parse(lsGet('ft_media','{}')).v||''}catch(e){}
  google.script.run.withSuccessHandler(function(r){loading=false;var changed=false;try{if(r&&r.json){var o=JSON.parse(r.json);if(o&&o.img){M=window.FT_MEDIA=o.img;lsSet('ft_media',JSON.stringify({v:r.v,img:o.img}));changed=true}}}catch(e){}
    var w=waiters;waiters=[];w.forEach(function(f){try{f()}catch(e){}});if(changed){try{if(!document.querySelector('.fame'))render()}catch(e){}}}).withFailureHandler(function(){loading=false}).api(a,'media',{v:M.ratan?cur:''})}
var asked=false;function ensureMedia(){if(asked)return;asked=true;loadMedia()}
function withMedia(f){if(M.ratan&&M.bhub){f();return}var done=false;loadMedia(function(){if(!done){done=true;f()}});setTimeout(function(){if(!done){done=true;f()}},4000)}
function img(k,cls,alt){return M[k]?h('img',{src:M[k],class:cls||'',alt:alt||'',draggable:'false'}):h('div',{class:(cls||'')+' noimg'},'🎁')}

/* ---------- styles ---------- */
var st=document.createElement('style');st.textContent=`
.fame{position:fixed;inset:0;z-index:600;background:radial-gradient(circle at 50% 28%,#4b1f74 0%,#1a1446 45%,#07122b 100%);overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-align:center;padding:20px;animation:fade .35s ease both}
.fame:before{content:'';position:absolute;left:50%;top:30%;width:220vmax;height:220vmax;margin:-110vmax 0 0 -110vmax;background:repeating-conic-gradient(from 0deg,rgba(255,214,110,.13) 0 9deg,transparent 9deg 18deg);animation:spin 26s linear infinite;pointer-events:none}
.fame:after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 40%,transparent 30%,rgba(5,10,30,.75) 85%);pointer-events:none}
.fame>*{position:relative;z-index:1}
.fame .lg{width:96px;height:96px;object-fit:cover;border-radius:22px;box-shadow:0 8px 24px rgba(0,0,0,.4);animation:pop2 .7s cubic-bezier(.2,1.4,.4,1) both}
.fame .kick{font-size:12px;letter-spacing:2.5px;text-transform:uppercase;color:#F6D776;margin:12px 0 10px;animation:rise .6s ease .2s both}
.fame .ph{width:min(60vw,250px);aspect-ratio:3/4;border-radius:24px;overflow:hidden;position:relative;border:4px solid #F6D776;box-shadow:0 0 0 8px rgba(246,215,118,.18),0 0 60px rgba(246,215,118,.45),0 24px 60px rgba(0,0,0,.55);animation:lift .95s cubic-bezier(.2,.8,.2,1) .35s both}
.fame .ph img{width:100%;height:100%;object-fit:cover;object-position:top center;display:block;background:#1a1446}
.fame .ph:after{content:'';position:absolute;inset:0;background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.6) 50%,transparent 65%);transform:translateX(-130%);animation:shine 1.5s ease 1.3s 2}
.fame .cup{position:absolute;right:-14px;bottom:-14px;font-size:46px;color:#F6D776;animation:bounce 1.2s ease 1.2s infinite;filter:drop-shadow(0 4px 8px rgba(0,0,0,.4))}
.fame .nm{font-size:27px;font-weight:800;margin-top:18px;background:linear-gradient(90deg,#FFF3C4,#F6D776,#E0A82E,#F6D776,#FFF3C4);background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:rise .6s ease .9s both,gold 3s linear 1.5s infinite}
.fame .rl{font-size:13.5px;opacity:.85;margin-top:2px;animation:rise .6s ease 1s both}
.fame .ach{display:grid;gap:7px;margin-top:14px;max-width:340px;width:100%}
.fame .ach div{background:rgba(255,255,255,.1);border:1px solid rgba(246,215,118,.35);border-radius:14px;padding:9px 12px;font-size:14px;text-align:left;backdrop-filter:blur(4px);animation:slidein .5s ease both}
.fame .go{margin-top:18px;font-size:12.5px;opacity:.75;animation:pulse 1.6s ease 2.5s infinite}
.fame .dots{display:flex;gap:6px;justify-content:center;margin-top:10px}.fame .dots i{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.3)}.fame .dots i.on{background:#F6D776}
@keyframes spin{to{transform:rotate(360deg)}}@keyframes pop2{0%{transform:scale(.2) rotate(-12deg);opacity:0}100%{transform:none;opacity:1}}
@keyframes lift{0%{transform:translateY(60px) scale(.85);opacity:0}100%{transform:none;opacity:1}}@keyframes shine{to{transform:translateX(130%)}}
@keyframes bounce{0%,100%{transform:translateY(0) rotate(-6deg)}50%{transform:translateY(-10px) rotate(6deg)}}@keyframes gold{to{background-position:200% center}}
@keyframes slidein{from{opacity:0;transform:translateX(-24px)}to{opacity:1;transform:none}}@keyframes pulse{50%{opacity:.35}}
.hof{position:relative;border-radius:20px;padding:14px;margin:0 0 12px;color:#fff;background:linear-gradient(135deg,#3B1F5C,#5B2E8C 45%,#1FA79A);box-shadow:0 10px 26px rgba(59,31,92,.35);overflow:hidden;cursor:pointer;animation:rise .4s ease both}
.hof:before{content:'';position:absolute;inset:-40%;background:repeating-conic-gradient(from 0deg,rgba(255,255,255,.06) 0 8deg,transparent 8deg 16deg);animation:spin 40s linear infinite}
.hof>*{position:relative}
.hof .hd{display:flex;align-items:center;gap:8px;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:#F6D776;font-weight:700}
.hof .hd img{width:30px;height:30px;border-radius:8px;object-fit:cover}
.hof .pp{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}
.hof .p{text-align:center}.hof .p img,.hof .p .noimg{width:84px;height:84px;border-radius:50%;object-fit:cover;object-position:top;border:3px solid #F6D776;box-shadow:0 0 0 4px rgba(246,215,118,.25);display:block;margin:0 auto;background:rgba(255,255,255,.15)}
.hof .p b{display:block;margin-top:6px;font-size:14px}.hof .p small{display:block;font-size:11.5px;opacity:.85;line-height:1.3}
.hof .pp.three{grid-template-columns:1fr 1fr 1fr}.hof .p .empty,.fame .fimg.empty{display:flex!important;align-items:center;justify-content:center;font-size:34px;font-weight:800;color:#F6D776;border-style:dashed!important;background:rgba(255,255,255,.08)!important;animation:youpulse 1.8s ease-in-out infinite}
@keyframes youpulse{50%{box-shadow:0 0 0 8px rgba(246,215,118,.18)}}
.hof .enc{margin-top:10px;font-size:13px;line-height:1.4;background:rgba(0,0,0,.18);border-radius:12px;padding:8px 10px;text-align:center}
.hof.slim{padding:12px}.hof.slim .p img,.hof.slim .p .noimg{width:58px;height:58px}.hof.slim .p b{font-size:12.5px}.hof.slim .enc{font-size:12px;padding:6px 8px;margin-top:8px}.hof.slim .tap{display:none}
.fame .tog{display:flex;gap:16px;justify-content:center;align-items:flex-end;margin-top:6px}
.fame .tog .tp{text-align:center;animation:pop2 .6s cubic-bezier(.2,1.4,.4,1) both}.fame .tog .tp b{display:block;margin-top:8px;color:#FFF3C4}
.fame .tog .fimg{width:min(27vw,120px);height:min(27vw,120px);border-radius:50%;object-fit:cover;object-position:top;border:3px solid #F6D776;box-shadow:0 0 0 6px rgba(246,215,118,.18),0 0 40px rgba(246,215,118,.35);display:block}
.fame .encb{margin-top:22px;max-width:330px;font-size:16px;line-height:1.45;text-align:center;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(246,215,118,.35);border-radius:16px;padding:12px 14px;animation:rise .6s ease .5s both}
.hof .tap{text-align:center;font-size:11.5px;opacity:.8;margin-top:8px}
.gifts{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.gift{background:var(--panel);border:1px solid var(--line);border-radius:16px;overflow:hidden;box-shadow:0 2px 10px rgba(16,40,38,.06);animation:pop .4s ease both;cursor:pointer}
.gift img,.gift .noimg{width:100%;aspect-ratio:1/1;object-fit:cover;display:grid;place-items:center;font-size:40px;background:var(--soft)}
.gift .tx{padding:9px 10px}.gift .tx b{font-size:13.5px;display:block}.gift .tx small{display:block;color:var(--muted);font-size:11.5px;line-height:1.35;margin-top:2px}
.gift .who{display:inline-block;font-size:10.5px;padding:2px 8px;border-radius:8px;background:var(--soft);color:var(--accent);font-weight:700;margin-top:6px}
.unlock{display:flex;gap:12px;align-items:center;border-radius:16px;padding:10px;margin-top:10px;background:linear-gradient(135deg,#FFF6D6,#FFFDF3);border:1px solid #EBD38A;color:#3B2C00;animation:boom .6s cubic-bezier(.2,1.5,.4,1) both}
.unlock img,.unlock .noimg{width:74px;height:74px;border-radius:12px;object-fit:cover;flex:none}
.unlock b{font-size:16px;display:block}.unlock .x{font-size:26px;font-weight:800;color:#B7791F}
.unlock.lock{background:var(--soft);border-color:var(--line);color:var(--ink);animation:rise .3s ease both}.unlock.lock img{filter:grayscale(1);opacity:.55}
@keyframes boom{0%{transform:scale(.6);opacity:0}100%{transform:none;opacity:1}}
.ocard img.oi{width:76px;height:76px;border-radius:12px;object-fit:cover;float:right;margin:0 0 6px 10px}
.qd{display:flex;align-items:center;gap:8px;padding:10px 2px;border-bottom:1px solid var(--line)}.qd:last-child{border-bottom:0}
.qd .tx{flex:1;min-width:0}.qd .tx b{display:block;font-size:14.5px}.qd .tx small{color:var(--muted)}
.qd button{min-height:auto;padding:9px 12px;border-radius:12px;font-size:14px}.qd .y{background:var(--ok);color:#fff;border:0}.qd .n{background:var(--panel);color:var(--ink);border:1px solid var(--line)}
.chips{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0}.chips button{min-height:auto;padding:8px 12px;border-radius:999px;border:1px solid var(--line);background:var(--panel);color:var(--ink);font-size:13.5px}.chips button.on{background:var(--accent);color:#fff;border-color:var(--accent)}
.qdx{background:var(--soft);border-radius:14px;padding:10px;margin:2px 0 8px}
.hilite{border-radius:18px;padding:14px;margin:0 0 12px;color:#fff;background:linear-gradient(135deg,#7B2FBF 0%,#4B1F74 55%,#2A1456 100%);box-shadow:0 10px 26px rgba(75,31,116,.35);position:relative;overflow:hidden;animation:rise .4s ease both}
.hilite:before{content:'';position:absolute;right:-30px;top:-30px;width:130px;height:130px;border-radius:50%;background:rgba(246,215,118,.14)}
.hilite .hk{font-size:12px;letter-spacing:1.5px;text-transform:uppercase;font-weight:800;color:#F6D776}
.hilite .hrow{display:flex;align-items:center;gap:12px;margin-top:8px;position:relative;z-index:1}
.hilite .hpic{width:60px;height:60px;border-radius:50%;object-fit:cover;object-position:top center;border:3px solid #F6D776;flex:none;background:#2A1456;display:grid;place-items:center;font-size:26px}
.hilite .htx b{font-size:18px}.hilite .ht{font-size:13px;opacity:.9;margin-top:2px}
.hilite .hl{margin-top:10px;display:grid;gap:5px;font-size:13.5px}
.hilite .hclap{margin-top:10px;font-size:20px;letter-spacing:4px;animation:pulse 1.6s ease infinite}
`;document.head.appendChild(st);

/* ---------- Hall of Fame ---------- */
var FAME=[
 {id:'bhub',mail:'rajibkundu.kundu@gmail.com',name:'Bhubaneswar Kundu',role:'CSO · Guwahati HQ',items:['🏆 RCL All India Top 10 – July 2026','🏆 RCL All India Top 10 – September 2026','🥇 RCL Quarter Winner – CSO','🛒 RCL Trolley Winner – East Zone'],cheer:'Guwahati is proud of you!'},
 {id:'ratan',mail:'ratanroy98@gmail.com',name:'Ratan Roy',role:'CSM · Guwahati Area',items:['🛒 RCL Trolley Winner – CSM, Guwahati','🌟 Coach of an All India Top 10 CSO – Jul & Sep 2026','🥇 Coach of an RCL Quarter Winner – CSO'],cheer:'Leading Guwahati to the top!'}];
function fanfare(){if(U.mute)return;try{var A=new(window.AudioContext||window.webkitAudioContext)();[[523,0],[659,.12],[784,.24],[1047,.38],[784,.62],[1047,.74]].forEach(function(n){var o=A.createOscillator(),g=A.createGain(),s=A.currentTime+n[1];o.type='triangle';o.frequency.value=n[0];g.gain.setValueAtTime(.0001,s);g.gain.exponentialRampToValueAtTime(.13,s+.02);g.gain.exponentialRampToValueAtTime(.0001,s+(n[1]>.6?.6:.28));o.connect(g);g.connect(A.destination);o.start(s);o.stop(s+.7)})}catch(e){}}
// Claps (short noise bursts) + a crackers/burst of confetti, for celebrations.
function clapSound(){if(U.mute)return;try{var A=new(window.AudioContext||window.webkitAudioContext)();for(var k=0;k<8;k++){var t=A.currentTime+k*0.085+Math.random()*0.02;var len=0.05,buf=A.createBuffer(1,A.sampleRate*len,A.sampleRate),d=buf.getChannelData(0);for(var j=0;j<d.length;j++)d[j]=(Math.random()*2-1)*Math.pow(1-j/d.length,2);var s=A.createBufferSource();s.buffer=buf;var bp=A.createBiquadFilter();bp.type='bandpass';bp.frequency.value=1600+Math.random()*600;var g=A.createGain();g.gain.value=0.5;s.connect(bp);bp.connect(g);g.connect(A.destination);s.start(t)}}catch(e){}}
function burst(){try{U.confetti&&U.confetti(90);setTimeout(function(){U.confetti&&U.confetti(60)},380);setTimeout(function(){U.confetti&&U.confetti(55)},820)}catch(e){}}
function celebrate(){fanfare();clapSound();burst()}
U.celebrate=celebrate;
// Preload the champion photos so the frame never opens as a blank box.
function preloadFame(cb){try{var urls=['rcl','bhub','ratan'].map(function(k){return M[k]}).filter(Boolean);var n=urls.length,done=0;if(!n){cb();return}var fin=function(){if(++done>=n)cb()};urls.forEach(function(u){var im=new Image();im.onload=fin;im.onerror=fin;im.src=u;if(im.complete)fin()});setTimeout(cb,1600)}catch(e){cb()}}
U.preloadFame=preloadFame;
function showFame(list){if(document.querySelector('.fame'))return;var i=0,ov=h('div',{class:'fame'}),timer=null;
  function draw(){var p=list[i];ov.innerHTML='';
    ov.append(img('rcl','lg','RCL'),h('div',{class:'kick'},'R-Loc Raft Champions League · Hall of Fame'),
      h('div',{class:'ph'},img(p.id,'',p.name),h('span',{class:'cup'},'🏆')),h('div',{class:'nm'},p.name),h('div',{class:'rl'},p.role+' · '+p.cheer),
      h('div',{class:'ach'},p.items.map(function(x,k){return h('div',{style:'animation-delay:'+(1.0+k*.16)+'s'},x)})),
      h('div',{class:'dots'},list.length>1?list.map(function(_,k){return h('i',{class:k<=i?'on':''})}):[]));
    celebrate();clearTimeout(timer);timer=setTimeout(next,4800)}
  function next(){if(i<list.length-1){i++;draw()}else{clearTimeout(timer);land()}}
  // Last frame: both champions together + an empty seat for the viewer, then the photos fly into their place on the screen.
  function together(){ov.innerHTML='';var me=who()||{},mine=FAME.some(function(p){return p.mail===String(me.Email||'').toLowerCase()});
    ov.append(img('rcl','lg','RCL'),h('div',{class:'kick'},'Guwahati Hall of Fame'),
      h('div',{class:'tog'},list.map(function(p,k){return h('div',{class:'tp',style:'animation-delay:'+(k*.15)+'s'},img(p.id,'fimg',p.name),h('b',{},p.name.split(' ')[0]))}),
        mine||S.mgr&&!S.viewAs?null:h('div',{class:'tp you',style:'animation-delay:.3s'},h('div',{class:'fimg empty'},'?'),h('b',{},'You next'))),
      h('div',{class:'encb'},encourage()),h('div',{class:'go'},'Tap to continue'));
    fanfare();setTimeout(function(){U.confetti(50)},300);clearTimeout(timer);timer=setTimeout(next,7000)}
  // The wall settles into the Hall of Fame card where it lives on the Today screen.
  function land(){var hof=document.querySelector('.hof');try{if(hof)hof.scrollIntoView({block:'center'})}catch(e){}
    burst();U.play&&U.play('cash');
    ov.style.transition='opacity .6s ease';ov.style.opacity='0';
    setTimeout(function(){ov.remove();try{if(hof){hof.style.boxShadow='0 0 0 3px rgba(246,215,118,.6)';hof.animate([{transform:'scale(1.12)'},{transform:'scale(1)'}],{duration:520,easing:'ease-out'});setTimeout(function(){hof.style.boxShadow=''},1200)}}catch(e){}},620)}
  document.body.append(ov);draw()}
U.showFame=showFame;
function dailyFame(){if(!S.ready||!who())return;var days=[];try{days=JSON.parse(lsGet('ft_fame_days','[]'))}catch(e){}if(days.indexOf(TODAY)>=0||days.length>=3)return;days.push(TODAY);lsSet('ft_fame_days',JSON.stringify(days));
  withMedia(function(){preloadFame(function(){showFame(FAME)})})}
/* Daily "Today's Star" – the stand-out CSO of the day, with a cheer. Fed by the engine (feed "highlight"), fresh each day. */
function highlightCard(){try{var f=(S.feeds||{}).highlight;if(!f||!f.name)return'';
  var pk=f.photo||({'rajibkundu.kundu@gmail.com':'bhub','ratanroy98@gmail.com':'ratan'}[String(f.email||'').toLowerCase()]||'');
  var pic=pk&&M[pk]?h('img',{class:'hpic',src:M[pk],alt:f.name}):h('div',{class:'hpic noimg'},'⭐');
  var card=h('div',{class:'hilite'},h('div',{class:'hk'},'🎉 Today\'s Star'+(f.date?' · '+f.date:'')),
    h('div',{class:'hrow'},pic,h('div',{class:'htx'},h('b',{},f.name),f.title?h('div',{class:'ht'},f.title):'')),
    (f.lines&&f.lines.length)?h('div',{class:'hl'},f.lines.map(function(x){return h('div',{},'🏅 '+x)})):'',
    h('div',{class:'hclap'},'👏 👏 👏'));
  try{if(lsGet('ft_hilite_day','')!==TODAY){lsSet('ft_hilite_day',TODAY);setTimeout(function(){celebrate()},450)}}catch(e){}
  return card;
}catch(e){return''}}
U.highlightCard=highlightCard;
function encourage(){var me=who()||{},em=String(me.Email||'').toLowerCase(),first=(me.Name||'').split(' ')[0];
  if(S.mgr&&!S.viewAs)return'Coach the team – the next photo on this wall could be Karamjit or Prashun.';
  if(em==='rajibkundu.kundu@gmail.com')return'Champion, '+first+'! Keep the crown – win RCL again this quarter.';
  var p=(S.feeds||{})['pob_'+me.HQ],pc_=p&&p.target60?Math.round(100*p.done/p.target60):null;
  return'Your photo can be here next, '+first+'.'+(pc_!==null?' You are at '+pc_+'% of '+new Date().toLocaleDateString('en-IN',{month:'long'})+' –':'')+' every order brings you closer. Ratan Roy believes in you.'}
U.encourage=encourage;
function hofCard(slim){var me=who()||{},mine=FAME.some(function(p){return p.mail===String(me.Email||'').toLowerCase()}),showYou=!mine&&!(S.mgr&&!S.viewAs);
  return h('div',{class:'hof'+(slim?' slim':''),onclick:function(){withMedia(function(){preloadFame(function(){showFame(FAME)})})}},h('div',{class:'hd'},img('rcl','','RCL'),'Guwahati Hall of Fame · RCL'),
  h('div',{class:'pp'+(showYou?' three':'')},FAME.map(function(p){return h('div',{class:'p'},img(p.id,'',p.name),h('b',{},slim?p.name.split(' ')[0]:p.name),slim?'':h('small',{},p.items[0].replace(/^\S+\s/,'')))}).concat(showYou?[h('div',{class:'p you'},h('div',{class:'noimg empty'},'?'),h('b',{},'You next'),slim?'':h('small',{},'Hit 100% and win RCL'))]:[])),
  h('div',{class:'enc'},encourage()),h('div',{class:'tap'},'Tap to celebrate 🎉'))}
U.hofCard=hofCard;

/* ---------- gifts ---------- */
var GIFTS=[
 {id:'g_gillette',t:'Gillette Presto razor'+(TODAY>'2026-11-28'?' (ended 28 Nov)':''),who:'Trade stockist',rule:'R-Loc 150: 1 case (18 boxes) → 18 razors. R-Loc D: 1 case (30 boxes) → 15 razors.',more:'2–28 Nov 2026 · min 1 case · non-returnable · razors come in the same LR. Stockist gives 1 razor with each R-Loc 150 box (or every 2 R-Loc D boxes) to retailers.',say:'Sir, book 1 case of R-Loc 150 – you get 18 Gillette Presto razors, one for every box you sell to your retailers.'},
 {id:'g_iron',t:'USHA iron',who:'Stockist',rule:'Buy ₹50,000 of Deca-Durabolin → 1 USHA iron.',more:'November 2026 gift slab.',say:'₹50,000 of Deca this month and the USHA iron is yours.'},
 {id:'g_bedsheet',t:'2 Raymond double bedsheets',who:'Stockist',rule:'1 case of Skinlite Cream 15 g / 25 g → 2 bedsheets.',more:'November 2026 gift slab.',say:'One case of Skinlite Cream and you take home 2 Raymond bedsheets.'},
 {id:'g_cooker',t:'Hawkins Classic 4 L cooker',who:'Stockist',rule:'2 cases of Skinlite Cream 15 g / 25 g → 1 cooker.',more:'November 2026 gift slab.',say:'Make it 2 cases of Skinlite Cream and the Hawkins cooker is yours.'},
 {id:'g_bottle',t:'Branded water bottle',who:'Stockist',rule:'1 case Skinlite Day Care Sunscreen OR 2 cases Skinlite Bright Facewash → 1 bottle.',more:'November 2026 gift slab.',say:'One case of Day Care Sunscreen gets you a branded bottle – it sells with the Cream.'},
 {id:'g_glucon',t:'Glucon-D 125 g',who:'Retailer',rule:'Skinlite worth ₹1,000: Facewash and/or Day Care (min ₹300) + Skinlite Cream 15/25 g → 1 Glucon-D.',more:'Retailer Bonanza, November 2026.',say:'Sir, ₹1,000 of Skinlite – ₹300 Facewash or Sunscreen plus Cream – and Glucon-D is free.'}];
function giftById(id){return GIFTS.filter(function(g){return g.id===id})[0]}
function giftSheet(g){var close;var body=h('div',{},img(g.id,'',g.t),h('div',{class:'lcard',style:'margin-top:10px'},h('span',{class:'gift'},h('span',{class:'who'},g.who)),h('h3',{},g.t),h('div',{},g.rule),h('small',{style:'display:block;color:var(--muted);margin-top:6px'},g.more),h('div',{class:'lbl',style:'margin-top:10px;font-weight:700;color:var(--accent)'},t('say')),h('div',{style:'font-style:italic'},'“'+g.say+'”'),h('button',{class:'ghost',style:'margin-top:8px',onclick:function(){U.speak(g.t+'. '+g.rule+'. '+g.say)}},'🔊 '+t('listen'))));
  body.querySelector('img')&&(body.querySelector('img').style.cssText='width:100%;border-radius:16px');
  var ov=h('div',{class:'ftsheet'},h('div',{class:'pn'},h('div',{class:'grab'}),h('div',{class:'hd'},h('b',{},'🎁 '+g.t),h('button',{class:'ghost',onclick:function(){ov.remove()}},'✕')),body));ov.addEventListener('click',function(e){if(e.target===ov)ov.remove()});document.body.append(ov)}
var CHECK=[
 {k:'r150',n:'R-Loc 150 (stockist)',f:[['c','Cases (18 boxes each)']],calc:function(v){return v.c>=1?[['g_gillette',v.c*18,'Gillette Presto razors']]:[]},next:function(v){return v.c<1?'1 case unlocks 18 razors':''}},
 {k:'rd',n:'R-Loc D (stockist)',f:[['c','Cases (30 boxes each)']],calc:function(v){return v.c>=1?[['g_gillette',v.c*15,'Gillette Presto razors']]:[]},next:function(v){return v.c<1?'1 case unlocks 15 razors':''}},
 {k:'deca',n:'Deca-Durabolin (stockist)',f:[['r','Order value ₹']],calc:function(v){var n=Math.floor(v.r/50000);return n?[['g_iron',n,'USHA iron'+(n>1?'s':'')]]:[]},next:function(v){var r=50000-v.r%50000;return '₹'+Math.round(r).toLocaleString('en-IN')+' more for '+(Math.floor(v.r/50000)?'another':'the')+' USHA iron'}},
 {k:'cream',n:'Skinlite Cream 15/25 g (stockist)',f:[['c','Cases']],calc:function(v){var o=[];if(v.c>=2)o.push(['g_cooker',Math.floor(v.c/2),'Hawkins cooker']);if(v.c%2===1)o.push(['g_bedsheet',2,'Raymond bedsheets']);return o},next:function(v){return v.c%2===1?'1 more case → Hawkins cooker instead of bedsheets':v.c<1?'1 case → 2 bedsheets · 2 cases → Hawkins cooker':''}},
 {k:'npd',n:'Skinlite Day Care / Facewash (stockist)',f:[['d','Day Care cases'],['w','Facewash cases']],calc:function(v){var n=v.d+Math.floor(v.w/2);return n?[['g_bottle',n,'water bottle'+(n>1?'s':'')]]:[]},next:function(v){return v.w%2===1?'1 more Facewash case → 1 more bottle':''}},
 {k:'gd',n:'Skinlite retailer bonanza',f:[['p','Facewash / Day Care ₹'],['q','Skinlite Cream ₹']],calc:function(v){return v.p>=300&&v.q>0&&v.p+v.q>=1000?[['g_glucon',1,'Glucon-D 125 g']]:[]},next:function(v){var o=[];if(v.p<300)o.push('₹'+(300-v.p)+' more Facewash/Day Care');if(v.q<=0)o.push('add Skinlite Cream');if(v.p+v.q<1000)o.push('₹'+Math.max(0,1000-v.p-v.q)+' more in total');return o.length?o.join(' · '):''}}];
function vGifts(app){if(TODAY>'2026-11-30'){app.append(h('div',{class:'note'},'November gifts have ended. This month\'s gifts will appear here as soon as they are loaded.'));return}app.append(h('div',{class:'quote'},h('div',{class:'who'},'💬 '+t('says')),h('div',{class:'q'},'Show the gift picture first, then the profit. A customer who can see the gift orders faster.')));
  var cst=S.tab.gck||(S.tab.gck={k:'r150',v:{}});var ck=CHECK.filter(function(c){return c.k===cst.k})[0];
  var box=h('div',{class:'score'},h('b',{},'🎁 Gift checker'),h('div',{class:'subtabs',style:'margin-top:8px'},CHECK.map(function(c){return h('button',{class:c.k===cst.k?'on':'',onclick:function(){cst.k=c.k;cst.v={};render()}},c.n)})));
  var out=h('div');var ins=ck.f.map(function(f){var i=h('input',{type:'number',inputmode:'numeric',value:cst.v[f[0]]||'',placeholder:'0'});i.oninput=function(){cst.v[f[0]]=+i.value||0;paint(true)};return h('label',{},f[1],i)});
  ins.forEach(function(x){box.append(x)});box.append(out);
  var last='';function paint(anim){var v={};ck.f.forEach(function(f){v[f[0]]=+cst.v[f[0]]||0});var got=ck.calc(v),nx=ck.next(v);out.innerHTML='';
    got.forEach(function(g){out.append(h('div',{class:'unlock'},img(g[0]),h('div',{},h('b',{},'Unlocked! 🎉'),h('span',{class:'x'},'× '+g[1]),h('div',{},g[2]))))});
    if(!got.length){var first=ck.calc({c:2,r:50000,d:1,w:0,p:300,q:700})[0];if(first)out.append(h('div',{class:'unlock lock'},img(first[0]),h('div',{},h('b',{},'🔒 Not yet'),h('div',{},nx))))}else if(nx)out.append(h('small',{style:'display:block;margin-top:6px;color:var(--muted)'},'➕ '+nx));
    var sig=JSON.stringify(got);if(anim&&got.length&&sig!==last){U.play('cash');U.confetti(30)}last=sig}
  paint(false);app.append(box);
  app.append(h('div',{class:'sect'},h('b',{},'🎁 November gifts')),h('div',{class:'gifts'},GIFTS.map(function(g,i){return h('div',{class:'gift',style:'animation-delay:'+(i*50)+'ms',onclick:function(){giftSheet(g)}},img(g.id),h('div',{class:'tx'},h('b',{},g.t),h('small',{},g.rule),h('span',{class:'who'},g.who)))})))}
U.vGifts=vGifts;
function offerImg(o){var s=(o.t||'')+' '+(o.d||'');if(/Gillette|R-Loc.*Bonanza|Bumper Bonanza – R-Loc/i.test(s))return 'g_gillette';if(/Glucon/i.test(s))return 'g_glucon';if(/Hawkins|bedsheet/i.test(s))return 'g_cooker';if(/bottle/i.test(s))return 'g_bottle';if(/USHA|iron/i.test(s))return 'g_iron';return null}
U.offerImg=function(o){if(TODAY>'2026-11-30')return '';var k=offerImg(o);return k&&M[k]?h('img',{src:M[k],class:'oi',draggable:'false'}):''};

/* ---------- November corrections (from the R-Loc Trade Bonanza circular) ---------- */
var baseREF=U.REF;U.REF=function(){var R=baseREF();if(!R||R.__fx)return R;R=JSON.parse(JSON.stringify(R));R.__fx=1;
  (R.offers||[]).forEach(function(o){if(/R-Loc/.test(o.t)&&/Bonanza/.test(o.t)){o.who='Trade stockist';o.t='R-Loc Trade Bonanza – Gillette Presto';o.d='2–28 Nov 2026. R-Loc 150: 1 case (18 boxes) → 18 Gillette Presto. R-Loc D: 1 case (30 boxes) → 15 Gillette Presto. Min 1 case, non-returnable, razors come in the same LR. Stockist gives 1 razor per R-Loc 150 box (1 per 2 R-Loc D boxes) to retailers.';o.say='Sir, book 1 case of R-Loc 150 – 18 Gillette Presto razors come free, one for every box you sell to retailers.'}
    if(/Falcigo/.test(o.t))o.d='Falcigo 60 (1 case = 65): ₹38 (stock <12 months validity) / ₹40 (>12 months). Falcigo 120 (1 case = 150): 1–5 cases ₹105 · more than 5 cases ₹100. Direct stockists, one invoice only.'});
  (R.products||[]).forEach(function(p){if(p.n==='Falcigo 60 Inj')p.case='1 case = 65 vials';if(p.n==='Falcigo 120 Inj')p.case='1 case = 150 units';if(p.n==='R-Loc 150 Tab'){p.box='1 box = 30 strips · 1 case = 18 boxes';p.gift='Trade Bonanza 2–28 Nov: 1 case → 18 Gillette Presto'}if(p.n==='R-Loc D Tab'){p.box='1 box = 15 strips · 1 case = 30 boxes';p.gift='Trade Bonanza 2–28 Nov: 1 case → 15 Gillette Presto'}});
  return R};

/* ---------- 2-tap doctor log ---------- */
var BR={raft:'Rloc Raft',deca:'Deca Durabolin',rloc:'Rloc Tablets'};
var NO=['Doctor not met','No suitable patient yet','Prefers another brand','Will start next visit'];
function quickDocs(app,r){if(S.mgr&&!S.viewAs)return;var brand=BR[r];if(!brand||typeof drListFor!=='function')return;var L=drListFor(brand);if(L.status!=='approved')return;
  var br=(typeof brickToday==='function'&&brickToday())||'';var logged=todays('dr_input').filter(function(e){return e.brand===brand}).map(function(e){return e.dr});
  var docs=(L.doctors||[]).filter(function(c){return CUST[c]&&CUST[c].brick===br});if(!docs.length)return;
  var card=h('div',{class:'phase'},h('div',{class:'ph'},h('b',{},'⚡ Today\'s '+brand+' doctors'),h('small',{},'2–3 taps each')),h('small',{style:'display:block;color:var(--muted);margin-bottom:4px'},'Inputs come from Ventasys. Just tell us the Rx.'));
  docs.forEach(function(c){var d=CUST[c],done=logged.indexOf(c)>=0;var row=h('div',{class:'qd'},h('div',{class:'tx'},h('b',{},d.name),h('small',{},(d.spec||'')+(done?' · ✅ logged':''))));var ex=h('div');
    if(!done){row.append(h('button',{class:'y',onclick:function(){yes(c,ex)}},'✅ Rx'),h('button',{class:'n',onclick:function(){no(c,ex)}},'❌'))}
    card.append(row,ex)});
  var anchor=app.querySelector('.tabs')||app.querySelector('.subtabs');if(anchor&&anchor.nextSibling)anchor.parentNode.insertBefore(card,anchor.nextSibling);else app.append(card);
  function yes(c,ex){var st={q:0,ret:lsGet('ft_last_retailer',''),stk:lsGet('ft_last_stockist','')};ex.innerHTML='';var b=h('div',{class:'qdx'});ex.append(b);
    var prev=myEntries('dr_input').some(function(e){return e.dr===c&&/Rx/.test(e.rx||'')});
    function draw(){b.innerHTML='';b.append(h('small',{},'How many Rx?'),h('div',{class:'chips'},[1,2,3,5,10].map(function(n){return h('button',{class:st.q===n?'on':'',onclick:function(){st.q=n;draw();fin()}},String(n))})));
      var rets=typeof custIn==='function'?custIn(myHQ(),br,['R','W']).slice(0,8):[];b.append(h('small',{},'Filled at which chemist?'),h('div',{class:'chips'},rets.map(function(x){return h('button',{class:st.ret===x.code?'on':'',onclick:function(){st.ret=x.code;lsSet('ft_last_retailer',x.code);draw();fin()}},x.name.split(' ').slice(0,3).join(' '))})));
      var sk=stockistsOf(myHQ());if(!st.stk||!sk.some(function(s){return s.StockistCode===st.stk}))b.append(h('small',{},'Stockist'),h('div',{class:'chips'},sk.map(function(s){return h('button',{class:st.stk===s.StockistCode?'on':'',onclick:function(){st.stk=s.StockistCode;lsSet('ft_last_stockist',s.StockistCode);draw();fin()}},s.Stockist.split(' ').slice(0,2).join(' '))})))}
    function fin(){if(st.q&&st.ret&&st.stk)save('dr_input',{brand:brand,dr:c,input:'As per Ventasys',rx:prev?'Regular':'First Rx',rxqty:String(st.q),retailer:st.ret,stockist:st.stk,quick:1}).then(function(ok){if(ok)render()})}
    draw()}
  function no(c,ex){ex.innerHTML='';ex.append(h('div',{class:'qdx'},h('small',{},'Why not yet?'),h('div',{class:'chips'},NO.map(function(x){return h('button',{onclick:function(){save('dr_input',{brand:brand,dr:c,input:'As per Ventasys',rx:'Not yet',reason:x,quick:1}).then(function(ok){if(ok)render()})}},x)}))))}}

/* ---------- hooks ---------- */
var prevToday=U.today;U.today=function(app,tk,rest){ensureMedia();prevToday&&prevToday(app,tk,rest);var hero=app.querySelector('.hero')||tk;var c=hofCard(true);hero.after(c);dailyFame()};
U.routes.hof=function(app){ensureMedia();app.append(hofCard(false));var w0=h('div',{class:'phase'},h('div',{class:'ph'},h('b',{},'🏆 Their wins')));FAME.forEach(function(p){w0.append(h('div',{class:'lrow',style:'cursor:default'},h('div',{class:'tx'},h('b',{},p.name),h('small',{},p.items.join(' · ')))))});app.append(w0);var q=U.quote();if(q)app.append(q)};
/* "Today's doctors" no longer appears on the brand page — it is carried in the daily Work task instead (see task.js U.todaysDoctors). */
var prevAfter=U.after;U.after=function(app,r){ensureMedia();prevAfter&&prevAfter(app,r);};
try{if(S.ready)render()}catch(e){}
})();
