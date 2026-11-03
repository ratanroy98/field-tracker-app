/* Guwahati Field Tracker – premium shell, sounds, coach, progress & incentive. Coach: Ratan Roy. */
(function(){
'use strict';
function lsGet(k,d){try{var v=localStorage.getItem(k);return v==null?d:v}catch(e){return d}}
function lsSet(k,v){try{localStorage.setItem(k,v)}catch(e){}}
var UI=window.FTUI={lang:lsGet('ft_lang','en'),mute:lsGet('ft_mute','0')==='1'};
var C=function(){return (window.COACH||{})[UI.lang]||(window.COACH||{}).en||{}};
var LANGS=[['en','EN'],['hi','हिं'],['bn','বাং'],['as','অস']];
var TX={
 en:{today:'Today',work:'Work',learn:'Learn',progress:'Progress',msgs:'Messages',says:'Ratan Roy says',listen:'Listen',stop:'Stop',next:'Next',back:'Back',lesson:"Today's lesson",modules:'Modules',situ:'Situations',prod:'Rates & offers',quiz:'Quiz',month:'Month',pob:'POB',inc:'Incentive',q4:'Q4 & KPI',coach:'Your coach: Ratan Roy',done:'Lesson done',streak:'day learning streak',start:'Start lesson',what:'What to do',say:'What to say',score:'Score',again:'Try again',stock:'Stock stmt',beat:'Beat change',stockists:'Stockists',appOnly:'Please open the Field Tracker app on your phone. This page works only inside the app.'},
 hi:{today:'आज',work:'काम',learn:'सीखें',progress:'प्रगति',msgs:'संदेश',says:'रतन रॉय कहते हैं',listen:'सुनें',stop:'रोकें',next:'आगे',back:'पीछे',lesson:'आज का पाठ',modules:'मॉड्यूल',situ:'स्थितियाँ',prod:'रेट और ऑफ़र',quiz:'क्विज़',month:'महीना',pob:'POB',inc:'इंसेंटिव',q4:'Q4 और KPI',coach:'आपके कोच: रतन रॉय',done:'पाठ पूरा',streak:'दिन लगातार सीखना',start:'पाठ शुरू करें',what:'क्या करें',say:'क्या बोलें',score:'स्कोर',again:'फिर से',stock:'स्टॉक स्टेटमेंट',beat:'बीट बदलाव',stockists:'स्टॉकिस्ट',appOnly:'कृपया अपने फ़ोन पर Field Tracker ऐप खोलें।'},
 bn:{today:'আজ',work:'কাজ',learn:'শিখুন',progress:'অগ্রগতি',msgs:'বার্তা',says:'রতন রায় বলেন',listen:'শুনুন',stop:'থামুন',next:'পরের',back:'আগের',lesson:'আজকের পাঠ',modules:'মডিউল',situ:'পরিস্থিতি',prod:'রেট ও অফার',quiz:'কুইজ',month:'মাস',pob:'POB',inc:'ইনসেনটিভ',q4:'Q4 ও KPI',coach:'আপনার কোচ: রতন রায়',done:'পাঠ শেষ',streak:'দিন টানা শেখা',start:'পাঠ শুরু',what:'কী করবেন',say:'কী বলবেন',score:'স্কোর',again:'আবার',stock:'স্টক স্টেটমেন্ট',beat:'বিট পরিবর্তন',stockists:'স্টকিস্ট',appOnly:'অনুগ্রহ করে ফোনে Field Tracker অ্যাপ খুলুন।'},
 as:{today:'আজি',work:'কাম',learn:'শিকক',progress:'অগ্ৰগতি',msgs:'বাৰ্তা',says:'ৰতন ৰয়ে কয়',listen:'শুনক',stop:'ৰখক',next:'পিছৰ',back:'আগৰ',lesson:'আজিৰ পাঠ',modules:'মডিউল',situ:'পৰিস্থিতি',prod:'ৰেট আৰু অফাৰ',quiz:'কুইজ',month:'মাহ',pob:'POB',inc:'ইনচেণ্টিভ',q4:'Q4 আৰু KPI',coach:'আপোনাৰ কোচ: ৰতন ৰয়',done:'পাঠ সমাপ্ত',streak:'দিন একেৰাহে শিকা',start:'পাঠ আৰম্ভ',what:'কি কৰিব',say:'কি ক\'ব',score:'স্ক\'ৰ',again:'আকৌ',stock:'ষ্টক ষ্টেটমেণ্ট',beat:'বিট সলনি',stockists:'ষ্টকিষ্ট',appOnly:'অনুগ্ৰহ কৰি ফোনত Field Tracker এপ খোলক।'}};
function t(k){return (TX[UI.lang]||TX.en)[k]||TX.en[k]||k}
function rs(v){return '₹'+Math.round(v||0).toLocaleString('en-IN')}
function pc(a,b){return b?Math.round(a/b*100):0}
function dayIdx(){var d=new Date(TODAY+'T00:00:00');return Math.floor((d-new Date(d.getFullYear(),0,0))/864e5)}

/* ---------- style ---------- */
var css=`
:root,:root[data-theme],:root:not([data-theme="light"]){--bg:#EEF2F1!important;--panel:#FFFFFF!important;--ink:#132322!important;--muted:#5E716F!important;--line:#DCE5E3!important;--accent:#0E6B63!important;--accent-ink:#fff!important;--soft:#E3F1EF!important;--ok:#1E8E5A!important;--ok-bg:#E2F5EA!important;--warn:#B7791F!important;--warn-bg:#FFF4DE!important;--bad:#C93B32!important;--bad-bg:#FDE8E6!important;--gold:#C9A227;color-scheme:light!important}
html,body{background:var(--bg)!important;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}
input,textarea,select{-webkit-user-select:text;user-select:text}
img{-webkit-user-drag:none;pointer-events:auto}
#app{padding-bottom:96px!important;max-width:560px;margin:0 auto}
#app>header.top{display:none!important}
.fthead{position:sticky;top:0;z-index:20;margin:-16px -16px 12px;padding:14px 16px 12px;background:linear-gradient(135deg,var(--h1),var(--accent) 60%,var(--h3));color:#fff;box-shadow:0 6px 18px var(--accsh);border-radius:0 0 18px 18px}
.fthead .row{display:flex;align-items:center;gap:10px}
.fthead .av{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--gold2),var(--gold));color:var(--gink);display:grid;place-items:center;font-weight:800;font-size:15px;flex:none;box-shadow:0 2px 6px rgba(0,0,0,.2)}
.fthead .nm{font-weight:700;font-size:16px;line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fthead .row>div:nth-child(2){min-width:0;flex:1}.fthead .hq{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fthead .ib{flex:none;white-space:nowrap}.fthead .hq{font-size:12px;opacity:.8}
.fthead .sp{flex:1}
.fthead .ib{background:rgba(255,255,255,.14);border:0;color:#fff;border-radius:10px;padding:7px 9px;font-size:13px;min-height:auto}
.langs{display:flex;gap:4px;margin-top:10px}.langs button{flex:1;background:rgba(255,255,255,.12);border:0;color:#fff;border-radius:8px;padding:6px 0;font-size:13px;min-height:auto}.langs button.on{background:var(--gold2);color:var(--gink);font-weight:700}
.ftick{overflow:hidden;white-space:nowrap;background:var(--h0);color:#fff;border-radius:12px;margin:0 0 12px;padding:9px 0;font-size:14px;box-shadow:inset 0 0 0 1px rgba(246,215,118,.25)}
.ftick span{display:inline-block;padding-left:100%;animation:ftick linear infinite}.ftick b{color:var(--gold2)}.ftick i{font-style:normal;color:#FF9C92}
@keyframes ftick{from{transform:translateX(0)}to{transform:translateX(-100%)}}
.quote{background:linear-gradient(135deg,#FFF8E1,#FFFDF5);border:1px solid #F1DFA0;border-radius:14px;padding:12px 14px;margin-bottom:12px;animation:pop .5s ease both}
.quote .who{font-size:12px;font-weight:700;color:#8A6A00;letter-spacing:.3px;text-transform:uppercase}.quote .q{font-size:15px;line-height:1.45;margin-top:4px;color:var(--gink)}
.subtabs{display:flex;gap:8px;overflow-x:auto;padding:2px 2px 10px;margin:0 -2px 6px;scrollbar-width:none}.subtabs::-webkit-scrollbar{display:none}
.subtabs button{flex:none;border-radius:999px;border:1px solid var(--line);background:var(--panel);color:var(--ink);padding:8px 14px;font-size:14px;min-height:auto;box-shadow:0 1px 2px rgba(0,0,0,.04)}
.subtabs button.on{background:var(--accent);color:#fff;border-color:var(--accent);box-shadow:0 4px 10px var(--accsh)}
.bnav{position:fixed;left:0;right:0;bottom:0;z-index:30;background:var(--navbg);backdrop-filter:blur(8px);border-top:1px solid var(--line);display:flex;justify-content:space-around;padding:6px 4px calc(8px + env(safe-area-inset-bottom));box-shadow:0 -6px 18px rgba(0,0,0,.06)}
.bnav button{background:none;border:0;flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;color:#7A8B89;font-size:11px;min-height:auto;padding:4px 0;position:relative}
.bnav button .ic{font-size:22px;line-height:1;transition:transform .2s}.bnav button.on{color:var(--accent);font-weight:700}.bnav button.on .ic{transform:translateY(-2px) scale(1.12)}
.bnav button.on:after{content:'';position:absolute;top:-6px;width:28px;height:3px;border-radius:3px;background:var(--gold)}
.bnav .dot{position:absolute;top:0;right:22%;background:var(--bad);color:#fff;border-radius:9px;font-size:10px;padding:0 5px;min-width:16px}
.score,.item,.task,.today,.plan>*,.note,.card,.quote,.lcard{animation:rise .35s ease both}
.score,.item,.card,.note,.lcard{box-shadow:0 2px 10px rgba(16,40,38,.06)!important;border-radius:16px!important}
.task{border-radius:14px!important}
.today{background:linear-gradient(135deg,var(--accent),var(--h3))!important;border-radius:18px!important;box-shadow:0 8px 20px var(--accsh)!important}
.bar i{transform-origin:left;animation:grow 1s cubic-bezier(.2,.8,.2,1) both}
@keyframes grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes rise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes pop{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:none}}
button{transition:transform .08s}button:active{transform:scale(.97)}
.lcard{background:var(--panel);border:1px solid var(--line);padding:14px;margin-bottom:12px}
.lcard h3{margin:0 0 6px;font-size:17px}.lcard .meta{font-size:12px;color:var(--muted)}
.player{background:linear-gradient(160deg,var(--h1),var(--accent));color:#fff;border-radius:20px;padding:18px;min-height:300px;display:flex;flex-direction:column;box-shadow:0 10px 28px var(--accsh)}
.player .ttl{font-size:13px;opacity:.85;text-transform:uppercase;letter-spacing:.4px}
.player .slide{flex:1;display:flex;align-items:center;font-size:19px;line-height:1.5;padding:14px 2px;animation:pop .4s ease both}
.player .prog{display:flex;gap:4px;margin:6px 0 12px}.player .prog i{flex:1;height:4px;border-radius:4px;background:rgba(255,255,255,.25)}.player .prog i.on{background:var(--gold2)}
.player .ctl{display:flex;gap:8px}.player .ctl button{flex:1;border:0;border-radius:12px;padding:12px;font-weight:700;background:rgba(255,255,255,.15);color:#fff}.player .ctl .play{background:var(--gold2);color:var(--gink)}
.player .coach{font-size:12px;opacity:.85;margin-top:10px}
.sit{border-left:4px solid var(--gold)}.sit summary{font-weight:700;font-size:15px;list-style:none}.sit .lbl{font-size:12px;font-weight:700;color:var(--accent);margin-top:8px;text-transform:uppercase}
.qopt{display:block;width:100%;text-align:left;margin:6px 0;padding:12px;border-radius:12px;border:1px solid var(--line);background:var(--panel);color:var(--ink);font-size:15px}
.qopt.ok{background:var(--ok-bg);border-color:var(--ok)}.qopt.no{background:var(--bad-bg);border-color:var(--bad)}
.big{font-size:30px;font-weight:800;letter-spacing:-.5px}
.pbars{display:flex;align-items:flex-end;gap:4px;height:90px;margin:8px 0}.pbars div{flex:1;height:100%;background:var(--soft);border-radius:4px 4px 0 0;position:relative}.pbars div i{position:absolute;left:0;right:0;bottom:0;background:var(--accent);border-radius:4px 4px 0 0;animation:growy .8s ease both}.pbars div.hit i{background:var(--ok)}
@keyframes growy{from{height:0!important}}
.cf{position:fixed;top:-10px;width:8px;height:12px;z-index:99;border-radius:2px;animation:fall 1.6s ease-in forwards;pointer-events:none}
@keyframes fall{to{transform:translateY(105vh) rotate(540deg);opacity:.6}}
.toast{border-radius:14px!important;box-shadow:0 8px 24px rgba(0,0,0,.2)!important}
.apponly{position:fixed;inset:0;z-index:999;background:var(--h1);color:#fff;display:grid;place-items:center;padding:30px;text-align:center;font-size:18px}
`;
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
try{document.documentElement.setAttribute('data-theme','light')}catch(e){}

/* ---------- protection ---------- */
['contextmenu','dragstart','copy','cut'].forEach(function(ev){document.addEventListener(ev,function(e){var tg=e.target;if(tg&&/INPUT|TEXTAREA/.test(tg.tagName)&&ev!=='contextmenu')return;e.preventDefault()},true)});
document.addEventListener('keydown',function(e){if((e.ctrlKey||e.metaKey)&&/[pscu]/i.test(e.key)&&!/INPUT|TEXTAREA/.test((e.target||{}).tagName||''))e.preventDefault()},true);
window.addEventListener('beforeprint',function(){document.body.style.visibility='hidden'});window.addEventListener('afterprint',function(){document.body.style.visibility=''});
function inApp(){return /FieldTrackerApp|; wv\)/.test(navigator.userAgent)||!!window.AndroidApp}

/* ---------- sounds ---------- */
var AC=null;function ac(){if(!AC){try{AC=new(window.AudioContext||window.webkitAudioContext)()}catch(e){}}if(AC&&AC.state==='suspended')AC.resume();return AC}
function tone(f,d,w,type,vol){var a=ac();if(!a)return;var o=a.createOscillator(),g=a.createGain(),s=a.currentTime+w;o.type=type||'sine';o.frequency.value=f;g.gain.setValueAtTime(0.0001,s);g.gain.exponentialRampToValueAtTime(vol||.12,s+.012);g.gain.exponentialRampToValueAtTime(0.0001,s+d);o.connect(g);g.connect(a.destination);o.start(s);o.stop(s+d+.05)}
var SND={tap:function(){tone(1200,.04,0,'triangle',.035)},ok:function(){tone(660,.14,0,'sine',.12);tone(990,.22,.11,'sine',.12)},cash:function(){[1046,1318,1568,2093].forEach(function(f,i){tone(f,.14,i*.075,'triangle',.07)})},err:function(){tone(240,.18,0,'sawtooth',.05);tone(200,.2,.12,'sawtooth',.05)},page:function(){tone(520,.06,0,'sine',.05);tone(780,.08,.05,'sine',.05)}};
function play(n){if(UI.mute)return;try{SND[n]()}catch(e){}try{if(navigator.vibrate&&n!=='tap'&&n!=='page')navigator.vibrate(n==='err'?[60,40,60]:25)}catch(e){}}
window.ftPlay=play;
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('button,summary,.task');if(b&&!b.closest('.player'))play('tap')},true);
function confetti(n){var cols=['#F6D776','#0E6B63','#1E8E5A','#C9A227','#FF8A65','#4FC3F7'];for(var i=0;i<(n||36);i++){var d=document.createElement('div');d.className='cf';d.style.left=Math.random()*100+'vw';d.style.background=cols[i%cols.length];d.style.animationDelay=Math.random()*.4+'s';d.style.animationDuration=1.2+Math.random()*.9+'s';document.body.appendChild(d);setTimeout(function(x){return function(){x.remove()}}(d),2600)}}
window.ftConfetti=confetti;
var oToast=toast;toast=function(m){oToast(m);if(/saved|sent|approved|submitted|added|done/i.test(m)&&!/not/i.test(m)){play('ok');confetti(24)}else if(/not saved|wrong|cannot|pick exactly|incomplete/i.test(m))play('err')};

/* ---------- speech ---------- */
var LC={en:'en-IN',hi:'hi-IN',bn:'bn-IN',as:'as-IN'};
var ttsRun=0;function stopSpeak(){ttsRun++;try{if(window.AndroidTTS&&AndroidTTS.stop)AndroidTTS.stop()}catch(e){}try{window.speechSynthesis&&speechSynthesis.cancel()}catch(e){}}
function speak(text,onend){stopSpeak();window.__ttsEnd=onend||null;
  if(window.AndroidTTS&&AndroidTTS.speak){AndroidTTS.speak(text,LC[UI.lang]||'en-IN');var started=false,n=0,my=++ttsRun;var iv=setInterval(function(){if(my!==ttsRun){clearInterval(iv);return}var on=false;try{on=AndroidTTS.isSpeaking()}catch(e){}if(on)started=true;if((started&&!on)||(++n>40&&!started)){clearInterval(iv);onend&&onend()}},300);return true}
  if(window.speechSynthesis&&window.SpeechSynthesisUtterance){var u=new SpeechSynthesisUtterance(text);u.lang=LC[UI.lang];var vs=speechSynthesis.getVoices();var v=vs.find(function(x){return x.lang===u.lang})||(UI.lang==='as'&&vs.find(function(x){return x.lang==='bn-IN'}))||null;if(v)u.voice=v;u.rate=.95;u.onend=function(){onend&&onend()};speechSynthesis.speak(u);return true}
  toast('Audio is not available on this phone');return false}
window.ftSpeak=speak;

/* ---------- incentive maths ---------- */
var RATES=[[500000,[.50,.70,.90]],[1000000,[.45,.65,.85]],[2000000,[.40,.60,.80]],[3000000,[.35,.55,.75]],[Infinity,[.30,.50,.70]]];
function rate(p,a){if(a<97)return 0;var r=RATES.find(function(x){return p<x[0]})[1];return a>=110?r[2]:a>=100?r[1]:r[0]}
function incOf(net,tgt){var a=tgt?net/tgt*100:0;return Math.round(net*rate(net,a)/100)}
function calc(hq){var tgt=(TGT[hq]||{}).Total||0,f=S.feeds['ach_'+hq]||{},net=f.total||0,x=S.feeds['inc_'+hq]||{};var a=tgt?net/tgt*100:0,r=rate(net,a);
  var lv=[97,100,110].map(function(p){return{p:p,need:Math.max(0,tgt*p/100-net),inc:incOf(Math.max(net,tgt*p/100),tgt)}});
  var ms=x.by17!=null?x.by17:(TODAY<='2026-11-17'?net:null);
  var cond=[['Growth vs last year',x.py!=null?(net>x.py?'ok':'bad'):'na',x.py!=null?('LY '+rs(x.py)):'Awaiting LY sales'],['Saleable returns ≤3%',x.returnsPct!=null?(x.returnsPct<=3?'ok':'bad'):'na',x.returnsPct!=null?(x.returnsLbl||'')+x.returnsPct+'%':'Awaiting data'],['Outlet coverage ≥90%',x.outletCov!=null?(x.outletCov>=90?'ok':'bad'):'na',x.outletCov!=null?x.outletCov+'%':'Awaiting data'],['HCP coverage ≥95%',x.hcpCov!=null?(x.hcpCov>=95?'ok':'bad'):'na',x.hcpCov!=null?x.hcpCov+'%':'Awaiting data']];
  return{tgt:tgt,net:net,ach:a,r:r,now:Math.round(net*r/100),lv:lv,bonus:Math.max(net,tgt)>=1000000?6000:4000,ms:ms,cond:cond,asOf:f.asOf||''}}
window.ftIncentive={calc:calc,rate:rate};
function chip(s){return s==='ok'?'chip ok':s==='bad'?'chip bad':'chip mut'}
function incCard(hq){var c=calc(hq);
  return h('div',{class:'score'},h('div',{style:'display:flex;justify-content:space-between;align-items:center'},h('b',{},'My incentive · November'),h('span',{class:'chip '+(c.r?'ok':'warn')},c.r?(c.r+'% slab'):'Below 97%')),
   h('div',{},h('span',{class:'big'},rs(c.now)),h('small',{style:'color:var(--muted)'},'  earned · net '+rs(c.net)+' ('+c.ach.toFixed(0)+'%)')),bar(c.ach),
   h('div',{class:'tbl'},h('table',{},h('tr',{},h('th',{},'Reach'),h('th',{class:'r'},'Sell more'),h('th',{class:'r'},'Incentive')),c.lv.map(function(l){return h('tr',{},h('td',{},l.p+'%'),h('td',{class:'r num'},l.need?rs(l.need):'Done ✓'),h('td',{class:'r num'},rs(l.inc)))}))),
   h('div',{},h('b',{},'Milestone bonus '+rs(c.bonus)),h('small',{style:'display:block;color:var(--muted)'},'Needs 100% for the month AND 40% of target ('+rs(.4*c.tgt)+') by 17 Nov.'+(c.ms!=null?' Now '+rs(c.ms)+(c.ms>=.4*c.tgt?' ✓':' – '+rs(.4*c.tgt-c.ms)+' to go'):''))))}
function kpiCard(hq){var c=calc(hq);return h('div',{class:'score'},h('b',{},'KPI conditions (all 4 must be met)'),h('div',{style:'display:grid;gap:8px'},c.cond.map(function(k){return h('div',{style:'display:flex;justify-content:space-between;align-items:center'},h('span',{},k[0]),h('span',{class:chip(k[1])},k[2]))})),h('small',{style:'color:var(--muted)'},'Incentive is paid only if all four are met.'))}
function q4Card(hq){var q=S.feeds['incq_'+hq]||{},a=S.feeds['ach_'+hq]||{b:{}},T=TGT[hq]||{};
  var nov=a.total||0,ach=(q.octS||0)+nov,tg=q.target||0;
  var B=[['Deca Durabolin',['Deca Durabolin']],['R-Loc (all)',['Rloc (Tab+Inj)','Rloc Raft']],['Skinlite (all)',['Skinlite Cream','Skinlite Day Care','Skinlite Facewash']],['Dexona',['Dexona']]];
  var bv=function(keys,obj,f){return keys.reduce(function(s,k){return s+(((obj||{})[k]||{})[f]||0)},0)};
  var rows=B.map(function(x){var qb=(q.brands||{})[x[0]]||{};var A=(qb.octS||0)+bv(x[1],a.b,'v');return h('tr',{},h('td',{},x[0]),h('td',{class:'r num'},rs(A)+' / '+rs(qb.target||0)),h('td',{class:'r num'},(qb.target?pc(A,qb.target):0)+'%'))});
  return h('div',{class:'score'},h('div',{style:'display:flex;justify-content:space-between'},h('b',{},'Q4 (Oct–Dec) progress'),h('span',{class:'chip '+(q.amount?'ok':'mut')},q.amount?rs(q.amount):'Q4')),
   tg?h('div',{},h('span',{class:'big'},pc(ach,tg)+'%'),h('small',{style:'color:var(--muted)'},'  '+rs(ach)+' of '+rs(tg)),bar(pc(ach,tg)),
     h('div',{class:'tbl'},h('table',{},h('tr',{},h('th',{},'Month'),h('th',{class:'r'},'Target'),h('th',{class:'r'},'Sales')),
       h('tr',{},h('td',{},'Oct'),h('td',{class:'r num'},rs(q.octT)),h('td',{class:'r num'},rs(q.octS))),
       h('tr',{},h('td',{},'Nov'),h('td',{class:'r num'},rs(q.novT)),h('td',{class:'r num'},nov?rs(nov):'—')),
       h('tr',{},h('td',{},'Dec'),h('td',{class:'r num'},rs(q.decT)),h('td',{class:'r num'},'—')))),
     h('small',{style:'color:var(--muted)'},'To finish Q4 at 100%: sell '+rs(Math.max(0,tg-ach))+' more in Nov + Dec. Last year Dec: '+rs(q.decLY)+'.')):h('small',{style:'color:var(--muted)'},'Q4 figures will show here once loaded.'),
   h('b',{},'Impact brands · Q4'),h('div',{class:'tbl'},h('table',{},h('tr',{},h('th',{},'Brand'),h('th',{class:'r'},'Sales / Q4 target'),h('th',{class:'r'},'%')),rows)),
   h('small',{style:'color:var(--muted)'},q.amount?'':'Q4 incentive amount will show once the quarterly slab table is loaded.'))}
function mgrInc(){return h('div',{class:'score'},h('b',{},'Incentive · November'),h('div',{class:'tbl'},h('table',{},h('tr',{},h('th',{},'HQ'),h('th',{class:'r'},'Ach'),h('th',{class:'r'},'Earned'),h('th',{class:'r'},'To 100%'),h('th',{class:'r'},'At 100%')),['Agartala','Bongaigaon','Guwahati'].map(function(q){var c=calc(q);return h('tr',{},h('td',{},q),h('td',{class:'r num'},c.ach.toFixed(0)+'%'),h('td',{class:'r num'},rs(c.now)),h('td',{class:'r num'},c.lv[1].need?rs(c.lv[1].need):'✓'),h('td',{class:'r num'},rs(c.lv[1].inc)))}))))}
function pobCard(hq){var p=S.feeds['pob_'+hq];if(!p)return h('div',{class:'note'},'POB figures appear after the first Ventasys POB file is loaded.');
  var days=p.workingDays||[],mx=Math.max.apply(null,days.map(function(d){return (p.byDate||{})[d]||0}).concat([p.planPerDay||1]));
  return [h('div',{class:'score'},h('b',{},'POB target · 60% of month'),h('div',{},h('span',{class:'big'},rs(p.dailyNeed)),h('small',{style:'color:var(--muted)'},'  needed per day now')),bar(pc(p.done,p.target60)),h('small',{},rs(p.done)+' of '+rs(p.target60)+' · '+p.remDays+' working days left · finish by 26 Nov'),
    h('div',{class:'pbars'},days.map(function(d){var v=(p.byDate||{})[d]||0;return h('div',{class:v>=(p.planPerDay||0)?'hit':'',title:d},h('i',{style:'height:'+Math.round(v/mx*100)+'%'}))})),h('small',{style:'color:var(--muted)'},'Each bar = one working day. Green = day target hit.'))]}

/* ---------- ticker ---------- */
function tickItems(u){var keep=S.viewAs;if(u)S.viewAs=u;var out=[];try{TASKS.forEach(function(k){var x=k.status();if(x.level==='bad')out.push('<i>🔴 '+k.t+': '+x.why+'</i>');else if(x.level==='todo')out.push('🟡 '+k.t+': '+x.why)});var w=who();var p=S.feeds['pob_'+w.HQ];if(p)out.unshift('<b>🎯 POB today '+rs(p.dailyNeed)+'</b> · '+rs(p.done)+' of '+rs(p.target60));var c=calc(w.HQ);if(c.lv[1].need)out.push('<b>💰 Sell '+rs(c.lv[1].need)+' more → 100% → '+rs(c.lv[1].inc)+'</b>')}catch(e){}S.viewAs=keep;return out}
function ticker(){var parts=[];if(S.mgr&&!S.viewAs){D.users.filter(function(u){return u.Role==='CSO'&&u.Status==='Active'}).forEach(function(u){var it=tickItems(u),n=it.filter(function(x){return x.indexOf('🔴')>=0}).length,m=it.filter(function(x){return x.indexOf('🟡')>=0}).length;parts.push('<b>'+u.Name.split(' ')[0]+'</b>: '+(n?'<i>'+n+' to fix</i> · ':'')+m+' pending')})}else parts=tickItems();
  if(!parts.length)parts=['✅ All tasks done – great work!'];var txt=parts.join('   •   ');var d=h('div',{class:'ftick'});var sp=h('span',{html:txt});sp.style.animationDuration=Math.max(14,txt.replace(/<[^>]+>/g,'').length/6.5)+'s';d.append(sp);return d}

/* ---------- shell pieces ---------- */
var WORK=[['raft','Raft'],['deca','Deca'],['rloc','Rloc'],['skin','Skinlite'],['dexona','Dexona'],['stockists','stockists'],['stock','stock'],['beat','beat']];
function head(){var w=who();var ini=(w.Name||'?').split(' ').map(function(x){return x[0]}).join('').slice(0,2);
  var mute=h('button',{class:'ib',onclick:function(){UI.mute=!UI.mute;lsSet('ft_mute',UI.mute?'1':'0');mute.textContent=UI.mute?'🔇':'🔊';if(!UI.mute)play('ok')}},UI.mute?'🔇':'🔊');
  return h('div',{class:'fthead'},h('div',{class:'row'},h('div',{class:'av'},ini),h('div',{},h('div',{class:'nm'},w.Name+(S.viewAs?' (viewing)':'')),h('div',{class:'hq'},w.HQ+' · '+new Date(TODAY+'T00:00:00').toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'}))),h('button',{class:'ib',onclick:function(){UI.settings&&UI.settings('lang')}},'🌐 '+(LANGS.find(function(l){return l[0]===UI.lang})||LANGS[0])[1]),mute,h('button',{class:'ib',onclick:function(){UI.settings&&UI.settings()}},'⚙️')))}
function quote(){var qs=(C().quotes)||[];if(!qs.length)return null;var q=qs[dayIdx()%qs.length];return h('div',{class:'quote'},h('div',{class:'who'},'💬 '+t('says')),h('div',{class:'q'},q))}
function tabOf(r){if(UI.tabOfX&&UI.tabOfX[r])return UI.tabOfX[r];if(r==='home'||r==='mgr')return'today';if(r==='learn')return'learn';if(r==='perf')return'progress';if(r==='msgs')return'msgs';return'work'}
function nav(r){var cur=tabOf(r);var pend=0;try{if(!S.mgr||S.viewAs)TASKS.forEach(function(k){var l=k.status().level;if(l==='bad'||l==='todo')pend++})}catch(e){}
  var items=[['today','🏠',function(){go('home')}],['work','💼',function(){go(lsGet('ft_work','raft'))}],['learn','🎓',function(){go('learn')}],['progress','📈',function(){go('perf')}],['msgs','💬',function(){go('msgs')}]];
  return h('nav',{class:'bnav'},items.map(function(it){return h('button',{class:cur===it[0]?'on':'',onclick:it[2]},h('span',{class:'ic'},it[1]),t(it[0]),it[0]==='today'&&pend?h('span',{class:'dot'},String(pend)):null)}))}
function sub(key,tabs,onpick){var cur=S.tab[key]||tabs[0][0];return[h('div',{class:'subtabs'},tabs.map(function(x){return h('button',{class:x[0]===cur?'on':'',onclick:function(){S.tab[key]=x[0];onpick?onpick(x[0]):render()}},x[1])})),cur]}

/* ---------- learn (coach) ---------- */
function modules(){return C().modules||[]}
function streak(){var days=JSON.parse(lsGet('ft_learned','[]'));var s=0,d=new Date(TODAY+'T00:00:00');for(;;){var k=d.toISOString().slice(0,10);if(days.indexOf(k)>=0){s++;d.setDate(d.getDate()-1)}else break}return s}
function markLearned(){var days=JSON.parse(lsGet('ft_learned','[]'));if(days.indexOf(TODAY)<0){days.push(TODAY);lsSet('ft_learned',JSON.stringify(days.slice(-60)))}}
function player(mod,onDone){var i=0,auto=false;var steps=[mod.title].concat(mod.steps||[]).concat(mod.says?[t('says')+': '+mod.says]:[]);
  var box=h('div',{class:'player'});
  function draw(){box.innerHTML='';box.append(h('div',{class:'ttl'},'🎓 '+mod.title),h('div',{class:'prog'},steps.map(function(_,k){return h('i',{class:k<=i?'on':''})})),h('div',{class:'slide'},steps[i]),
    h('div',{class:'ctl'},h('button',{onclick:function(){auto=false;stopSpeak();if(i>0){i--;play('page');draw()}}},'◀ '+t('back')),h('button',{class:'play',onclick:function(){if(auto){auto=false;stopSpeak();draw();return}auto=true;draw();say()}},auto?'⏸ '+t('stop'):'🔊 '+t('listen')),h('button',{onclick:function(){auto=false;stopSpeak();nextS()}},t('next')+' ▶')),h('div',{class:'coach'},'👤 '+t('coach')))}
  function nextS(){if(i<steps.length-1){i++;play('page');draw();if(auto)say()}else{auto=false;markLearned();play('cash');confetti(40);toast(t('done')+' ✓');onDone&&onDone()}}
  function say(){speak(steps[i],function(){if(auto)setTimeout(nextS,500)})}
  draw();return box}
function vLearn(app){var r=sub('learn',[['today',t('lesson').replace(/^Today's l/,'L')],['mods',t('modules')],['situ',t('situ')],['prod',t('prod')],['quiz',t('quiz')]]);app.append(r[0]);var cur=r[1];var M=modules();
  if(!M.length){app.append(h('div',{class:'note'},'Loading lessons…'));return}
  if(cur==='today'){var m=M[dayIdx()%M.length];var sk=streak();
    app.append(h('div',{class:'lcard'},h('div',{class:'meta'},'🔥 '+sk+' '+t('streak')),h('h3',{},t('lesson')+': '+m.title),h('div',{class:'meta'},(m.steps||[]).length+' steps · 3 min')));app.append(player(m,function(){render()}));
    var s=(C().situations||[])[dayIdx()%Math.max(1,(C().situations||[]).length)];if(s)app.append(sitCard(s,true))}
  if(cur==='mods'){var open=S.tab.learnMod;if(open!=null&&M[open]){app.append(h('button',{class:'ghost',onclick:function(){S.tab.learnMod=null;render()}},'‹ '+t('modules')));app.append(player(M[open]));return}
    M.forEach(function(m,k){app.append(h('div',{class:'lcard',onclick:function(){S.tab.learnMod=k;render()},style:'cursor:pointer'},h('h3',{},(m.icon||'📘')+' '+m.title),h('div',{class:'meta'},m.sub||'')))})}
  if(cur==='situ')(C().situations||[]).forEach(function(s){app.append(sitCard(s))});
  if(cur==='prod')vProd(app);
  if(cur==='quiz')vQuiz(app)}
function sitCard(s,openIt){var d=h('details',{class:'lcard sit'});if(openIt)d.open=true;d.append(h('summary',{},'⚡ '+s.q),h('div',{class:'lbl'},t('what')),h('ul',{},(s.do||[]).map(function(x){return h('li',{},x)})),s.say?h('div',{class:'lbl'},t('say')):null,s.say?h('div',{style:'font-style:italic'},'“'+s.say+'”'):null,h('button',{class:'ghost',style:'margin-top:8px',onclick:function(e){e.preventDefault();speak(s.q+'. '+(s.do||[]).join('. ')+'. '+(s.say||''))}},'🔊 '+t('listen')));return d}
function REF(){var f=S.feeds;var k=Object.keys(f).find(function(x){return x.indexOf('rates_')===0});return k?f[k]:null}
function money(v){return '₹'+(v>=100?Math.round(v).toLocaleString('en-IN'):v.toFixed(2))}
function vProd(app){var R=UI.REF();if(!R){app.append(h('div',{class:'note'},'Rates and offers are loading…'));return}
  var r=sub('rates',[['offers','📣 Offers'],['gifts','🎁 Gifts'],['calc','🧮 Profit calculator'],['list','📋 Price list'],['stk','🏬 Stockist terms']]);app.append(r[0]);if(r[1]==='stk'&&UI.vStockist){UI.vStockist(app);return}if(r[1]==='gifts'&&UI.vGifts){UI.vGifts(app);return}
  if(r[1]==='offers'){var w=null;app.append(h('div',{class:'quote'},h('div',{class:'who'},'💬 '+t('says')),h('div',{class:'q'},'Tell every customer the offer AND his profit in rupees. People buy when they see what they earn.')));
    var OFF=R.offers.slice().sort(function(a,b){return (a.who==='Retailer'?0:1)-(b.who==='Retailer'?0:1)}),hd0=0,hd1=0;OFF.forEach(function(o){if(o.who==='Retailer'&&!hd0){hd0=1;app.append(h('div',{class:'sect'},h('b',{},'For retailers')))}if(o.who!=='Retailer'&&!hd1){hd1=1;app.append(h('div',{class:'sect'},h('b',{},'For stockists only')))}app.append(h('div',{class:'lcard sit ocard'},UI.offerImg?UI.offerImg(o):'',h('div',{style:'display:flex;justify-content:space-between;gap:8px'},h('b',{},'🎁 '+o.t),h('span',{class:'chip '+(o.who==='Retailer'?'ok':'warn')},o.who)),h('div',{style:'margin:6px 0'},o.d),h('div',{class:'lbl'},t('say')),h('div',{style:'font-style:italic'},'“'+o.say+'”'),h('button',{class:'ghost',style:'margin-top:8px',onclick:function(){speak(o.t+'. '+o.d+'. '+o.say)}},'🔊 '+t('listen'))))});
    app.append(h('div',{class:'note'},R.notes.map(function(n){return h('div',{},'• '+n)})));return}
  if(r[1]==='list'){R.products.forEach(function(p){var m=mrpOf(p);var g=1+p.gst/100,ptr=m/g*.8;
    app.append(h('details',{class:'lcard'},h('summary',{},h('b',{},p.n),h('span',{class:'meta'},'  · '+p.u+(m?' · MRP '+(p.mrp?'':'≈')+money(m):''))),
      m?h('div',{class:'tbl'},h('table',{},h('tr',{},h('th',{},''),h('th',{class:'r'},'Buys at*'),h('th',{class:'r'},'Profit')),
        h('tr',{},h('td',{},'Retailer 20%'),h('td',{class:'r num'},money(ptr*g)),h('td',{class:'r num'},money(m-ptr*g))),
        h('tr',{},h('td',{},'Wholesaler 7%'),h('td',{class:'r num'},money(ptr*.93*g)),h('td',{class:'r num'},money(ptr*.07*g))),
        h('tr',{},h('td',{},'Stockist 10%'),h('td',{class:'r num'},money(ptr*.9*g)),h('td',{class:'r num'},money(ptr*.1*g))))):h('small',{},'Enter MRP from the pack in the calculator.'),
      h('div',{class:'meta'},['GST '+p.gst+'%',p.sch?'Scheme lots: '+p.sch:''].filter(Boolean).join(' · ')),
      (p.box||p.case||p.minBill||p.slab||p.flat)?h('div',{class:'meta',style:'color:var(--accent);cursor:pointer',onclick:function(){S.tab.rates='stk';render()}},'🏬 Box, case, minimum billing, discounts and flat rates → Stockist terms'):''))});
    app.append(h('small',{style:'color:var(--muted);display:block'},'* incl. GST, per unit. ≈ MRP is worked out from the company rate – always check the MRP printed on the pack.'));return}
  // calculator
  var P=R.products;var st=S.tab.calc||(S.tab.calc={p:8,who:'Retailer',q:10,lot:0,mrp:''});
  var sel=h('select',{},P.map(function(p,k){return h('option',{value:k},p.n)}));sel.value=st.p;
  var who=h('div',{class:'subtabs'},['Retailer','Wholesaler','Stockist'].map(function(x){return h('button',{class:st.who===x?'on':'',onclick:function(){st.who=x;render()}},x)}));
  var p=P[st.p];var lots=(p.sch||'').split('·').map(function(x){return x.trim()}).filter(Boolean);
  var lot=h('select',{},[h('option',{value:0},'No scheme')].concat(lots.map(function(l,k){return h('option',{value:k+1},'Scheme '+l)})));lot.value=st.lot;
  var qty=h('input',{type:'number',inputmode:'numeric',value:st.q});var mrp=h('input',{type:'number',inputmode:'decimal',value:st.mrp||(mrpOf(p)?mrpOf(p).toFixed(2):''),placeholder:'MRP on the pack'});
  var out=h('div');
  var dIn=h('input',{type:'number',inputmode:'decimal',min:'0',max:'10',step:'0.5',value:st.d||0});
  var dChips=h('div',{class:'chips'},[0,1,2,3,5,7,10].map(function(v){return h('button',{class:(+st.d||0)===v?'on':'',onclick:function(){st.d=v;dIn.value=v;[].forEach.call(dChips.children,function(c){c.classList.toggle('on',+c.textContent.replace('%','')===v)});calc()}},v+'%')}));
  function calc(){lsSet('ft_calc','1');st.q=+qty.value||0;st.lot=+lot.value;st.mrp=mrp.value;var m=+mrp.value||0,g=1+p.gst/100,ptr=m/g*.8;out.innerHTML='';if(!m){out.append(h('div',{class:'note'},'Type the MRP printed on the pack.'));return}
    var cap=st.who==='Wholesaler'?3:10,d=Math.max(0,Math.min(cap,+dIn.value||0));st.d=d;var dd=d/100;
    var buy=st.who==='Retailer'?ptr*(1-dd)*g:st.who==='Wholesaler'?ptr*(.93-dd)*g:ptr*.9*g,sell=st.who==='Retailer'?m:ptr*g;
    var paid=st.q,free=0,L=lots[st.lot-1];if(L){var ab=L.split('+').map(Number);free=Math.floor(paid/ab[0])*ab[1]}
    var cost=paid*buy,rev=(paid+free)*sell,prof=rev-cost,eff=(paid+free)?cost/(paid+free):0,unitP=sell-eff,pp=sell?unitP/sell*100:0;
    var line=function(a,b){return h('div',{style:'display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--line)'},h('span',{},a),h('b',{class:'num'},b))};
    var unit=p.u.replace(/ of \d+/,''),pts=ptr*.9*g;
    var stkKeepR=10-(st.who==='Retailer'?d:0),stkKeepW=3-(st.who==='Wholesaler'?d:0);
    var say=st.who==='Retailer'?'Sir, you buy at '+money(buy)+' a '+unit+' and sell at MRP '+money(m)+' – that is '+money(m-buy)+' profit on every '+unit+(d?' (20% margin + '+d+'% extra from the stockist)':'')+'.'+(free?' With scheme '+L+' you get '+free+' free, so your profit goes up to '+money(unitP)+' a '+unit+' ('+pp.toFixed(0)+'%).':'')+' On this order you earn '+money(prof)+'.'
      :st.who==='Wholesaler'?'You buy at '+money(buy)+(d?' (7% + '+d+'% extra from the stockist)':'')+' and sell to retailers at '+money(sell)+' – '+money(sell-buy)+' per '+unit+'.'+(free?' Pass the '+L+' scheme to retailers and they will order more.':'')+' This order earns you '+money(prof)+'.'
      :'Your rate is '+money(buy)+' a '+unit+'. Selling to retailers at '+money(sell)+' you earn 10%; through wholesalers you keep 3%. Any extra discount you give comes out of this 10%.'+(p.slab?' '+p.slab+'.':'')+(p.flat?' Flat rate available in one invoice.':'');
    var chain=h('div',{class:'score'},h('b',{},'Who earns what on one '+unit+' (MRP '+money(m)+')'),
      line('Retailer buys at',money(st.who==='Retailer'?buy:ptr*g)),line('Retailer earns',money(m-(st.who==='Retailer'?buy:ptr*g))+' ('+((m-(st.who==='Retailer'?buy:ptr*g))/m*100).toFixed(1)+'% of MRP)'),
      st.who==='Wholesaler'?line('Wholesaler earns',money(sell-buy)+' ('+(7+d)+'% of PTR)'):'',
      line('Stockist buys at (PTS)',money(pts)),line('Stockist keeps',(st.who==='Wholesaler'?stkKeepW:stkKeepR).toFixed(1)+'% of PTR = '+money(ptr*g*(st.who==='Wholesaler'?stkKeepW:stkKeepR)/100)),
      d?h('small',{style:'display:block;color:var(--muted);margin-top:4px'},'Extra '+d+'% given by the stockist from his own 10% margin.'):'');
    out.append(h('div',{class:'score'},line('Buys at (incl. GST)',money(buy)+' / '+unit),line('Sells at',money(sell)+' / '+unit),line('Order: pays for',paid+' '+unit+(free?' + '+free+' free':'')),line('Bill value',money(cost)),
      h('div',{style:'display:flex;justify-content:space-between;align-items:end;margin-top:6px'},h('span',{},'Profit on this order'),h('span',{class:'big',style:'color:var(--ok)'},money(prof))),
      h('small',{style:'color:var(--muted)'},'Profit per '+unit+': '+money(unitP)+' ('+pp.toFixed(1)+'% of selling price)')),chain,
      h('div',{class:'quote'},h('div',{class:'who'},'🗣️ '+t('say')),h('div',{class:'q'},say),h('button',{class:'ghost',style:'margin-top:8px',onclick:function(){speak(say)}},'🔊 '+t('listen'))),
      st.who==='Stockist'&&(p.slab||p.flat||p.gift||p.minBill||p.case)?h('div',{class:'note'},[p.minBill?'Minimum billing: '+p.minBill:'',p.case||'',p.slab||'',p.flat?'Flat (direct stockist, one invoice): '+p.flat.map(function(f){return f[0]+' ₹'+f[1]}).join(' · '):'',p.gift?'🎁 '+p.gift:''].filter(Boolean).map(function(x){return h('div',{},'• '+x)})):'')}
  dIn.oninput=calc;
  sel.onchange=function(){st.p=+sel.value;st.lot=0;st.mrp='';render()};lot.onchange=function(){var L=lots[+lot.value-1];if(L){var a0=+L.split('+')[0];if((+qty.value||0)<a0)qty.value=a0}calc()};qty.oninput=calc;mrp.oninput=calc;
  app.append(h('div',{class:'score'},h('b',{},'Price & profit calculator'),h('label',{},'Product',sel),h('label',{},'Customer'),who,h('div',{style:'display:grid;grid-template-columns:1fr 1fr;gap:8px'},h('label',{},'Quantity ('+p.u+')',qty),h('label',{},'MRP ₹ (from pack)',mrp)),h('label',{},'Scheme',lot),st.who==='Stockist'?'':h('label',{},'Extra discount from stockist (% of PTR, out of his 10%'+(st.who==='Wholesaler'?'; max 3% via wholesaler':'')+')',dChips,dIn)),out);calc()}
function mrpOf(p){if(p.mrp)return p.mrp;if(!p.pts)return 0;return Math.round(p.pts*(1+p.gst/100)/.72*100)/100}
function vQuiz(app){var Q=(C().quiz||[]);if(!Q.length)return;var seed=dayIdx();var pick=[];for(var k=0;k<5&&k<Q.length;k++)pick.push(Q[(seed*7+k*3)%Q.length]);
  var st=S.tab.quizState||(S.tab.quizState={i:0,score:0,ans:null});if(st.day!==TODAY){st.day=TODAY;st.i=0;st.score=0;st.ans=null}
  if(st.i>=pick.length){try{var qb=+lsGet('ft_quizbest','0');if(st.score>qb)lsSet('ft_quizbest',String(st.score))}catch(e){}app.append(h('div',{class:'lcard',style:'text-align:center'},h('div',{class:'big'},st.score+' / '+pick.length),h('div',{},st.score>=4?'🏆 '+(C().quizWin||'Excellent!'):(C().quizTry||'Keep learning!')),h('button',{style:'margin-top:10px',onclick:function(){st.i=0;st.score=0;st.ans=null;render()}},t('again'))));return}
  var q=pick[st.i];var card=h('div',{class:'lcard'},h('div',{class:'meta'},(st.i+1)+' / '+pick.length+' · '+t('score')+' '+st.score),h('h3',{},q.q));
  q.o.forEach(function(o,k){var b=h('button',{class:'qopt'+(st.ans!=null?(k===q.a?' ok':k===st.ans?' no':''):''),onclick:function(){if(st.ans!=null)return;st.ans=k;if(k===q.a){st.score++;play('ok')}else play('err');render()}},o);card.append(b)});
  if(st.ans!=null){card.append(h('div',{class:'quote',style:'margin-top:10px'},h('div',{class:'who'},'💬 '+t('says')),h('div',{class:'q'},q.e||'')),h('button',{onclick:function(){st.i++;st.ans=null;render()}},t('next')+' ▶'))}
  app.append(card)}

/* ---------- progress ---------- */
function vPerf(app){var w=who();if(S.mgr&&!S.viewAs){app.append(mgrInc());['Agartala','Bongaigaon','Guwahati'].forEach(function(q){var s=scoreCard(q);if(s)app.append(s)});return}
  var r=sub('perf',[['month',t('month')],['pob',t('pob')],['inc',t('inc')],['q4',t('q4')]]);app.append(r[0]);
  if(r[1]==='month'){var s=scoreCard(w.HQ);if(s)app.append(s)}
  if(r[1]==='pob')[].concat(pobCard(w.HQ)).forEach(function(x){app.append(x)});
  if(r[1]==='inc')app.append(incCard(w.HQ));
  if(r[1]==='q4'){app.append(q4Card(w.HQ));app.append(kpiCard(w.HQ))}}

/* ---------- simpler filling: auto-pick today's brick ---------- */
function autofill(app){try{var b=(typeof brickToday==='function')&&brickToday();if(!b)return;app.querySelectorAll('select').forEach(function(sel){if(sel.value)return;var lab=sel.closest('label');if(!lab||!/^\s*Brick/i.test(lab.textContent))return;var o=[].slice.call(sel.options).find(function(x){return x.value===b||x.textContent===b});if(o){sel.value=o.value;sel.dispatchEvent(new Event('change',{bubbles:true}));S.dirty=false}})}catch(e){}}

/* ---------- android bridge ---------- */
function bridge(){try{if(window.AndroidApp&&AndroidApp.setAuth){var a=lsGet('ft_auth','');if(a)AndroidApp.setAuth(a)}}catch(e){}}

Object.assign(UI,{t:t,rs:rs,pc:pc,sub:sub,player:player,speak:speak,stopSpeak:stopSpeak,play:play,confetti:confetti,quote:quote,sitCard:sitCard,dayIdx:dayIdx,lsGet:lsGet,lsSet:lsSet,vLearn:vLearn,vPerf:vPerf,vProd:vProd,vQuiz:vQuiz,REF:REF,money:money,mrpOf:mrpOf,calc:calc,incCard:incCard,kpiCard:kpiCard,q4Card:q4Card,pobCard:pobCard,mgrInc:mgrInc,streak:streak,markLearned:markLearned,C:C,TX:TX,LANGS:LANGS,head:head,ticker:ticker,nav:nav,tabOf:tabOf,routes:{}});
/* ---------- main render override ---------- */
var base=render;
render=function(){var r=S.route,w=who();
  if(!S.ready||!w){base();return}
  if(!S.mgr&&!inApp()){document.body.innerHTML='';document.body.append(h('div',{class:'apponly'},t('appOnly')));return}
  var app=document.getElementById('app');
  if(r==='learn'||r==='perf'||UI.routes[r]){app.innerHTML='';app.append(head(),ticker());if(UI.routes[r])UI.routes[r](app);else if(r==='learn')UI.vLearn(app);else UI.vPerf(app);app.append(nav(r));bridge();UI.after&&UI.after(app,r);return}
  base();
  app.prepend(head(),ticker());var hd=app.querySelector('.fthead'),tk=app.querySelector('.ftick');
  if(tabOf(r)==='today'){if(!S.mgr||S.viewAs){app.querySelectorAll('.score').forEach(function(x){x.remove()})}if(UI.today){var rest=[].slice.call(app.children).filter(function(x){return x!==hd&&x!==tk&&x.tagName!=='HEADER'});UI.today(app,tk,rest)}else{var q=quote();if(q)tk.after(q)}}
  if(tabOf(r)==='work'){lsSet('ft_work',r);var lab={stock:t('stock'),beat:t('beat'),stockists:t('stockists')};tk.after(h('div',{class:'subtabs'},WORK.map(function(x){return h('button',{class:x[0]===r?'on':'',onclick:function(){go(x[0])}},lab[x[0]]||x[1])})));autofill(app)}
  app.append(nav(r));bridge();UI.after&&UI.after(app,r)};
window.addEventListener('hashchange',function(){});
try{if(S.ready)render()}catch(e){}
})();
