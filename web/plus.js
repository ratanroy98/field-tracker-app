/* Field Tracker – Today hub, themes, settings, learning path, TP calendar, stock request, check-in, scorecard, badges, leaderboard. Coach: Ratan Roy. */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
var t=U.t,rs=U.rs,pc=U.pc,lsGet=U.lsGet,lsSet=U.lsSet;

/* ---------- words ---------- */
var W={
 en:{gm:'Good morning',ga:'Good afternoon',ge:'Good evening',checkin:'Start my day',checked:'Checked in',locating:'Finding location…',prio:'Do these first',tiles:'Quick actions',plan:'Day plan',lesson:'3-min lesson',calc:'Profit calculator',req:'Request stock',tp:'My TP',share:'Share plan',board:'Leaderboard',all:'All topics',tasks:"Today's full task list",offer:'Offer to talk about today',path:'My path',search:'Search a topic… (e.g. price, Raft, objection)',locked:'Finish the earlier phase to unlock',next:'Next',done:'Done',week:'Week',badges:'Badges',settings:'Settings',lang:'Language',theme:'Colours',size:'Text size',sound:'Sounds',on:'On',off:'Off',close:'Close',targetToday:'POB today',month:'Month',team:'Team today',noplan:'Your 8 AM day plan will appear here.',readplan:"Read Ratan Roy's day plan",doLesson:"Do today's 3-minute lesson",carry:'Carried from last visit',send:'Send request',qty:'Qty',note:'Note (optional)',myreq:'My requests',pending:'Pending',sent:'Sent',points:'points',rank:'Rank',updates:'The leaderboard updates every evening after the review.'},
 hi:{gm:'सुप्रभात',ga:'नमस्कार',ge:'शुभ संध्या',checkin:'दिन शुरू करें',checked:'चेक-इन हो गया',locating:'लोकेशन ढूँढ रहे हैं…',prio:'पहले ये करें',tiles:'जल्दी के काम',plan:'दिन का प्लान',lesson:'3 मिनट का पाठ',calc:'मुनाफ़ा कैलकुलेटर',req:'स्टॉक माँगें',tp:'मेरा TP',share:'प्लान भेजें',board:'लीडरबोर्ड',all:'सभी विषय',tasks:'आज के सारे काम',offer:'आज इस ऑफ़र की बात करें',path:'मेरा रास्ता',search:'विषय खोजें… (जैसे रेट, Raft, आपत्ति)',locked:'पिछला चरण पूरा करने पर खुलेगा',next:'अगला',done:'पूरा',week:'हफ़्ता',badges:'बैज',settings:'सेटिंग',lang:'भाषा',theme:'रंग',size:'अक्षर का आकार',sound:'आवाज़',on:'चालू',off:'बंद',close:'बंद करें',targetToday:'आज का POB',month:'महीना',team:'आज की टीम',noplan:'सुबह 8 बजे का प्लान यहाँ दिखेगा।',readplan:'रतन रॉय का दिन का प्लान पढ़ें',doLesson:'आज का 3 मिनट का पाठ करें',carry:'पिछली विज़िट से बाक़ी',send:'माँग भेजें',qty:'मात्रा',note:'नोट (ज़रूरी नहीं)',myreq:'मेरी माँगें',pending:'बाक़ी',sent:'भेजा गया',points:'अंक',rank:'रैंक',updates:'लीडरबोर्ड हर शाम रिव्यू के बाद अपडेट होता है।'},
 bn:{gm:'সুপ্রভাত',ga:'নমস্কার',ge:'শুভ সন্ধ্যা',checkin:'দিন শুরু করুন',checked:'চেক-ইন হয়েছে',locating:'লোকেশন খুঁজছে…',prio:'আগে এগুলো করুন',tiles:'দ্রুত কাজ',plan:'দিনের প্ল্যান',lesson:'৩ মিনিটের পাঠ',calc:'লাভের ক্যালকুলেটর',req:'স্টক চান',tp:'আমার TP',share:'প্ল্যান পাঠান',board:'লিডারবোর্ড',all:'সব বিষয়',tasks:'আজকের সব কাজ',offer:'আজ এই অফারের কথা বলুন',path:'আমার পথ',search:'বিষয় খুঁজুন… (যেমন দাম, Raft, আপত্তি)',locked:'আগের ধাপ শেষ করলে খুলবে',next:'পরের',done:'শেষ',week:'সপ্তাহ',badges:'ব্যাজ',settings:'সেটিংস',lang:'ভাষা',theme:'রং',size:'লেখার মাপ',sound:'শব্দ',on:'চালু',off:'বন্ধ',close:'বন্ধ করুন',targetToday:'আজকের POB',month:'মাস',team:'আজকের টিম',noplan:'সকাল ৮টার প্ল্যান এখানে দেখা যাবে।',readplan:'রতন রায়ের দিনের প্ল্যান পড়ুন',doLesson:'আজকের ৩ মিনিটের পাঠ করুন',carry:'আগের ভিজিট থেকে বাকি',send:'অনুরোধ পাঠান',qty:'পরিমাণ',note:'নোট (ঐচ্ছিক)',myreq:'আমার অনুরোধ',pending:'বাকি',sent:'পাঠানো হয়েছে',points:'পয়েন্ট',rank:'র‍্যাঙ্ক',updates:'লিডারবোর্ড প্রতি সন্ধ্যায় রিভিউয়ের পরে আপডেট হয়।'},
 as:{gm:'সুপ্ৰভাত',ga:'নমস্কাৰ',ge:'শুভ সন্ধিয়া',checkin:'দিন আৰম্ভ কৰক',checked:'চেক-ইন হ\'ল',locating:'লোকেশ্বন বিচাৰিছে…',prio:'প্ৰথমে এইবোৰ কৰক',tiles:'সোনকালৰ কাম',plan:'দিনৰ প্লেন',lesson:'৩ মিনিটৰ পাঠ',calc:'লাভৰ কেলকুলেটৰ',req:'ষ্টক খুজক',tp:'মোৰ TP',share:'প্লেন পঠাওক',board:'লিডাৰব\'ৰ্ড',all:'সকলো বিষয়',tasks:'আজিৰ সকলো কাম',offer:'আজি এই অফাৰৰ কথা কওক',path:'মোৰ পথ',search:'বিষয় বিচাৰক… (যেনে দাম, Raft, আপত্তি)',locked:'আগৰ পৰ্যায় শেষ কৰিলে খুলিব',next:'পিছৰ',done:'সম্পূৰ্ণ',week:'সপ্তাহ',badges:'বেজ',settings:'ছেটিংছ',lang:'ভাষা',theme:'ৰং',size:'আখৰৰ আকাৰ',sound:'শব্দ',on:'অন',off:'অফ',close:'বন্ধ কৰক',targetToday:'আজিৰ POB',month:'মাহ',team:'আজিৰ দল',noplan:'ৰাতিপুৱা ৮ বজাৰ প্লেন ইয়াত দেখা পাব।',readplan:'ৰতন ৰয়ৰ দিনৰ প্লেন পঢ়ক',doLesson:'আজিৰ ৩ মিনিটৰ পাঠ কৰক',carry:'আগৰ ভিজিটৰ পৰা বাকী',send:'অনুৰোধ পঠাওক',qty:'পৰিমাণ',note:'টোকা (বাধ্যতামূলক নহয়)',myreq:'মোৰ অনুৰোধ',pending:'বাকী',sent:'পঠোৱা হ\'ল',points:'পইণ্ট',rank:'স্থান',updates:'লিডাৰব\'ৰ্ড প্ৰতি সন্ধিয়া ৰিভিউৰ পিছত আপডেট হয়।'}};
function w(k){return (W[U.lang]||W.en)[k]||W.en[k]||k}

/* ---------- themes & text size ---------- */
var THEMES={
 teal:{n:'Teal & Gold',h0:'#0A2B28',h1:'#0B4F49',h3:'#138A7F',acc:'#0E6B63',soft:'#E3F1EF',gold:'#C9A227',gold2:'#F6D776',gink:'#3B2C00',bg:'#EEF2F1'},
 royal:{n:'Royal Blue & Saffron',h0:'#0D1B45',h1:'#142B6F',h3:'#2F56C9',acc:'#1E3A8A',soft:'#E6ECFA',gold:'#E08A00',gold2:'#FFC857',gink:'#3A2400',bg:'#EEF1F8'},
 maroon:{n:'Maroon & Gold',h0:'#2E0710',h1:'#5B0F1F',h3:'#9E2343',acc:'#7A1530',soft:'#F7E7EB',gold:'#C9971C',gold2:'#F2D27A',gink:'#3B2A00',bg:'#F6F0F0'},
 forest:{n:'Forest & Lime',h0:'#12260F',h1:'#1E3D1A',h3:'#3F7F35',acc:'#2E5E27',soft:'#E7F1E4',gold:'#8FB82A',gold2:'#D4EC7A',gink:'#233000',bg:'#EFF4EC'},
 purple:{n:'Violet & Aqua',h0:'#23123A',h1:'#3B1F5C',h3:'#7B45B5',acc:'#5B2E8C',soft:'#EFE8F8',gold:'#1FA79A',gold2:'#8FE3D9',gink:'#05332E',bg:'#F3F0F8'},
 night:{n:'Night (dark)',h0:'#05100F',h1:'#0C1F1D',h3:'#1D4F49',acc:'#3FB3AC',soft:'#1B2C2A',gold:'#E0B84A',gold2:'#F6D776',gink:'#2B2000',bg:'#0E1615',dark:1}};
function applyTheme(){var k=lsGet('ft_theme','teal'),th=THEMES[k]||THEMES.teal;
  var v='--h0:'+th.h0+'!important;--h1:'+th.h1+'!important;--h3:'+th.h3+'!important;--accent:'+th.acc+'!important;--soft:'+th.soft+'!important;--gold:'+th.gold+'!important;--gold2:'+th.gold2+'!important;--gink:'+th.gink+'!important;--bg:'+th.bg+'!important;--accsh:'+th.acc+'40!important;';
  v+=th.dark?'--panel:#16211F!important;--ink:#E7EFEE!important;--muted:#9DB0AD!important;--line:#2A3836!important;--navbg:rgba(22,33,31,.97)!important;--ok-bg:#16352A!important;--warn-bg:#3A2E12!important;--bad-bg:#3B1A18!important;color-scheme:dark!important;':'--navbg:rgba(255,255,255,.96)!important;';
  var css='html:root:not([data-ftx]):not([data-fty]){'+v+'}';
  if(th.dark)css+='.quote{background:linear-gradient(135deg,#2B2513,#1E1A0F)!important;border-color:#4A3E1A!important}.quote .q{color:#F3E6B5!important}.quote .who{color:#E0B84A!important}input,select,textarea{background:#0F1918!important;color:#E7EFEE!important;border-color:#2A3836!important}';
  var el=document.getElementById('ft-theme');if(!el){el=document.createElement('style');el.id='ft-theme';document.head.appendChild(el)}el.textContent=css;
  try{document.documentElement.style.zoom=({s:'1',m:'1.1',l:'1.22'})[lsGet('ft_size','s')]||'1'}catch(e){}}
applyTheme();

/* ---------- extra styles ---------- */
var st=document.createElement('style');st.textContent=`
.hero{background:linear-gradient(140deg,var(--h1),var(--accent) 55%,var(--h3));color:#fff;border-radius:22px;padding:16px;margin-bottom:14px;box-shadow:0 10px 26px var(--accsh);position:relative;overflow:hidden;animation:rise .35s ease both}
.hero:after{content:'';position:absolute;right:-40px;top:-40px;width:160px;height:160px;border-radius:50%;background:rgba(255,255,255,.07)}
.hero .gr{font-size:13px;opacity:.85}.hero .br{font-size:21px;font-weight:800;margin:2px 0 10px;letter-spacing:-.3px}
.hero .row{display:flex;gap:14px;align-items:center}.hero .ring{flex:none}
.hero .kv{font-size:12px;opacity:.85}.hero .kv b{display:block;font-size:20px;opacity:1;color:#fff}
.hero .ci{margin-top:12px;width:100%;border:0;border-radius:14px;padding:13px;font-weight:800;font-size:15px;background:var(--gold2);color:var(--gink);box-shadow:0 4px 12px rgba(0,0,0,.18)}
.hero .ci.ok{background:rgba(255,255,255,.16);color:#fff;box-shadow:none;font-weight:600}
.sect{display:flex;align-items:center;justify-content:space-between;margin:16px 2px 8px}.sect b{font-size:13px;letter-spacing:.5px;text-transform:uppercase;color:var(--muted)}
.prio{display:flex;gap:12px;align-items:center;background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:12px 14px;margin-bottom:8px;box-shadow:0 2px 8px rgba(16,40,38,.05);animation:rise .35s ease both;cursor:pointer}
.prio .n{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:14px;flex:none;color:#fff;background:var(--accent)}
.prio.bad .n{background:var(--bad)}.prio.warn .n{background:var(--warn)}.prio.gold .n{background:var(--gold);color:var(--gink)}
.prio .tx{flex:1;font-size:15px;line-height:1.35}.prio .tx small{display:block;color:var(--muted);font-size:12.5px}.prio .go{color:var(--muted);font-size:20px}
.tiles{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.tile{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:12px 4px 10px;text-align:center;font-size:11.5px;line-height:1.25;color:var(--ink);min-height:auto;box-shadow:0 2px 8px rgba(16,40,38,.05);animation:pop .35s ease both}
.tile .i{display:grid;place-items:center;width:44px;height:44px;margin:0 auto 7px;border-radius:14px;font-size:21px;color:var(--gold2);background:linear-gradient(145deg,var(--h1),var(--h3));box-shadow:inset 0 0 0 1px rgba(246,215,118,.35),0 4px 10px var(--accsh)}
.ftsheet{position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.45);display:flex;align-items:flex-end;animation:fade .2s ease both}
.ftsheet .pn{background:var(--panel);color:var(--ink);width:100%;max-width:560px;margin:0 auto;border-radius:22px 22px 0 0;max-height:88vh;overflow:auto;padding:8px 16px calc(20px + env(safe-area-inset-bottom));animation:up .28s cubic-bezier(.2,.8,.2,1) both}
.ftsheet .grab{width:44px;height:5px;border-radius:5px;background:var(--line);margin:6px auto 10px}
.ftsheet .hd{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}.ftsheet .hd b{font-size:18px}
@keyframes up{from{transform:translateY(100%)}to{transform:none}}@keyframes fade{from{opacity:0}to{opacity:1}}
.sw{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.sw button{border:2px solid var(--line);border-radius:14px;padding:8px;background:var(--panel);color:var(--ink);font-size:12px;min-height:auto}
.sw button.on{border-color:var(--accent);box-shadow:0 0 0 2px var(--accsh)}
.sw .dots{display:flex;gap:3px;justify-content:center;margin-bottom:5px}.sw .dots i{width:16px;height:16px;border-radius:50%;display:block}
.seg{display:flex;gap:6px}.seg button{flex:1;border:1px solid var(--line);border-radius:12px;padding:10px 0;background:var(--panel);color:var(--ink);min-height:auto}.seg button.on{background:var(--accent);color:#fff;border-color:var(--accent)}
.lrow{display:flex;align-items:center;gap:12px;padding:12px 4px;border-bottom:1px solid var(--line);cursor:pointer}.lrow:last-child{border-bottom:0}
.lrow .ic{width:38px;height:38px;border-radius:12px;background:var(--soft);display:grid;place-items:center;font-size:19px;flex:none}
.lrow .tx{flex:1}.lrow .tx small{display:block;color:var(--muted)}.lrow .st{font-size:13px}
.lrow.lock{opacity:.5}.lrow.nx .ic{background:var(--gold2)}
.phase{background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:12px 14px;margin-bottom:12px;box-shadow:0 2px 10px rgba(16,40,38,.06);animation:rise .35s ease both}
.phase .ph{display:flex;justify-content:space-between;align-items:center}.phase .ph b{font-size:16px}.phase .ph small{color:var(--muted)}
.cal{display:grid;grid-template-columns:repeat(7,1fr);gap:4px}.cal .dw{font-size:11px;text-align:center;color:var(--muted);padding:2px 0}
.cal .d{min-height:56px;border-radius:10px;padding:4px;font-size:10px;line-height:1.15;background:var(--panel);border:1px solid var(--line);overflow:hidden;cursor:pointer}
.cal .d b{display:block;font-size:13px}.cal .d.fw{background:var(--soft)}.cal .d.off{background:transparent;color:var(--muted)}.cal .d.lv{background:var(--bad-bg)}.cal .d.hol{background:var(--warn-bg)}.cal .d.jw{background:var(--ok-bg)}
.cal .d.td{outline:2px solid var(--gold);outline-offset:-2px}.cal .d.sel{box-shadow:inset 0 0 0 2px var(--accent)}
.legend{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}.legend span{font-size:11px;padding:3px 8px;border-radius:8px;border:1px solid var(--line)}
.stp{display:flex;align-items:center;gap:6px}.stp button{width:36px;height:36px;border-radius:10px;border:1px solid var(--line);background:var(--soft);color:var(--ink);font-size:18px;min-height:auto;padding:0}.stp b{min-width:30px;text-align:center}
.badge{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.badge div{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:12px 6px;text-align:center;font-size:11.5px}
.badge div .i{font-size:28px;display:block;margin-bottom:4px}.badge div.no{opacity:.35;filter:grayscale(1)}
.lb{display:flex;align-items:center;gap:10px;padding:10px 4px;border-bottom:1px solid var(--line)}.lb .r{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;font-weight:800;background:var(--soft)}
.lb.me{background:var(--soft);border-radius:12px}.lb .r.g1{background:#F6D776}.lb .r.g2{background:#D9DEE2}.lb .r.g3{background:#E8B98A}
.srch{width:100%;border-radius:14px;padding:12px 14px;border:1px solid var(--line);background:var(--panel);color:var(--ink);font-size:15px;margin-bottom:10px}
`;document.head.appendChild(st);

/* ---------- helpers ---------- */
function me(){return who()||{}}
function isMgr(){return S.mgr&&!S.viewAs}
function hour(){return new Date().getHours()}
function sheet(title,body){var ov=h('div',{class:'ftsheet'});var pn=h('div',{class:'pn'},h('div',{class:'grab'}),h('div',{class:'hd'},h('b',{},title),h('button',{class:'ghost',onclick:function(){close()}},'✕')));
  function close(){ov.remove();S.dirty=false}ov.addEventListener('click',function(e){if(e.target===ov)close()});pn.append(body);ov.append(pn);document.body.append(ov);U.play('page');return close}
function ring(p,size,label,sub){p=Math.max(0,Math.min(100,p||0));var r=size/2-7,c=2*Math.PI*r;var NS='http://www.w3.org/2000/svg';
  var svg=document.createElementNS(NS,'svg');svg.setAttribute('width',size);svg.setAttribute('height',size);svg.setAttribute('class','ring');
  function circ(col,dash){var e=document.createElementNS(NS,'circle');e.setAttribute('cx',size/2);e.setAttribute('cy',size/2);e.setAttribute('r',r);e.setAttribute('fill','none');e.setAttribute('stroke',col);e.setAttribute('stroke-width','8');e.setAttribute('stroke-linecap','round');if(dash!=null){e.setAttribute('stroke-dasharray',c);e.setAttribute('stroke-dashoffset',c);e.setAttribute('transform','rotate(-90 '+size/2+' '+size/2+')');e.style.transition='stroke-dashoffset 1.1s cubic-bezier(.2,.8,.2,1)';setTimeout(function(){e.setAttribute('stroke-dashoffset',c*(1-dash/100))},60)}return e}
  svg.append(circ('rgba(255,255,255,.18)'),circ('var(--gold2)',p));
  var tx=document.createElementNS(NS,'text');tx.setAttribute('x','50%');tx.setAttribute('y','47%');tx.setAttribute('text-anchor','middle');tx.setAttribute('fill','#fff');tx.setAttribute('font-size','17');tx.setAttribute('font-weight','800');tx.textContent=label;
  var t2=document.createElementNS(NS,'text');t2.setAttribute('x','50%');t2.setAttribute('y','64%');t2.setAttribute('text-anchor','middle');t2.setAttribute('fill','rgba(255,255,255,.8)');t2.setAttribute('font-size','9.5');t2.textContent=sub;
  svg.append(tx,t2);return svg}
function entriesOf(type,email){return (S.entries||[]).filter(function(e){return e.type===type&&(!email||e.email===email)})}
function myPob(){return S.feeds['pob_'+myHQ()]||null}
function todayMsg(){var m=(S.msgs||[]).filter(function(x){return x.email===myEmail()&&x.date===TODAY&&x.slot==='8am'})[0];return m||null}
function carryToday(){var c=S.feeds['carry_'+myHQ()]||{},out=[];Object.keys(c).forEach(function(b){if(c[b]&&c[b].due===TODAY)(c[b].items||[]).forEach(function(i){out.push(i)})});return out}
function checkinToday(email){return entriesOf('checkin',email||myEmail()).filter(function(e){return e.date===TODAY})[0]}
function directAdd(type,fields){try{var x=me();return S.db.collection('entries').add(Object.assign({type:type,email:x.Email,hq:x.HQ,name:x.Name,by:'',ts:Date.now(),date:TODAY},fields))}catch(e){return Promise.reject(e)}}

/* ---------- location ---------- */
function getLoc(cb){var doneF=false;function fin(v){if(doneF)return;doneF=true;cb(v)}
  try{if(window.AndroidApp&&AndroidApp.requestLocation){AndroidApp.requestLocation();var n=0;var iv=setInterval(function(){var s='';try{s=AndroidApp.getLocation()}catch(e){}if(s){clearInterval(iv);try{fin(JSON.parse(s))}catch(e){fin(null)}}else if(++n>40){clearInterval(iv);fin(null)}},300);return}}catch(e){}
  if(navigator.geolocation){navigator.geolocation.getCurrentPosition(function(p){fin({lat:p.coords.latitude,lng:p.coords.longitude,acc:Math.round(p.coords.accuracy)})},function(){fin(null)},{enableHighAccuracy:true,timeout:9000,maximumAge:60000});setTimeout(function(){fin(null)},10000)}else fin(null)}
function doCheckin(btn){if(checkinToday()){toast(w('checked'));return}if(isMgr()){toast('Pick a CSO with "View as" first.');return}
  if(U.beforeCheckin&&!(btn&&btn.__go)){U.beforeCheckin(function(extra){if(btn)btn.__go=1;doCheckin2(btn,extra||{})});return}doCheckin2(btn,{})}
function doCheckin2(btn,extra){
  if(btn){btn.textContent='📍 '+w('locating');btn.disabled=true}
  getLoc(function(l){var tm=new Date().toTimeString().slice(0,5);var f=Object.assign({time:tm,brick:(typeof brickToday==='function'&&brickToday())||''},extra||{});if(l){f.lat=l.lat;f.lng=l.lng;f.acc=l.acc}
    save('checkin',f).then(function(ok){if(ok){if(l){U.confetti(30)}else{toast('⚠️ Location was off — your check-in has no GPS tag. Turn on Location (GPS) and check in from the market so your selfie is geo-tagged.')}render()}else if(btn){btn.disabled=false;btn.textContent='📍 '+w('checkin')}})})}

/* ---------- share ---------- */
function sharePlan(){var m=todayMsg();if(!m){toast(w('noplan'));return}var txt='*'+me().Name+' – '+TODAY+'*\n'+m.text+'\n\n— Ratan Roy, Guwahati Area';
  if(window.AndroidApp&&AndroidApp.share){AndroidApp.share(txt);return}toast('Update the app to share.')}

/* ---------- settings ---------- */
U.settings=function(focus){var body=h('div');
  body.append(h('div',{class:'sect'},h('b',{},'🌐 '+w('lang'))),h('div',{class:'seg'},[['en','English'],['hi','हिंदी'],['bn','বাংলা'],['as','অসমীয়া']].map(function(l){return h('button',{class:U.lang===l[0]?'on':'',onclick:function(){U.lang=l[0];lsSet('ft_lang',l[0]);U.stopSpeak();close();render()}},l[1])})));
  body.append(h('div',{class:'sect'},h('b',{},'🎨 '+w('theme'))),h('div',{class:'sw'},Object.keys(THEMES).map(function(k){var th=THEMES[k];return h('button',{class:lsGet('ft_theme','teal')===k?'on':'',onclick:function(){lsSet('ft_theme',k);applyTheme();close();render();U.play('ok')}},h('div',{class:'dots'},h('i',{style:'background:'+th.h1}),h('i',{style:'background:'+th.acc}),h('i',{style:'background:'+th.gold2})),th.n)})));
  body.append(h('div',{class:'sect'},h('b',{},'🔠 '+w('size'))),h('div',{class:'seg'},[['s','A'],['m','A+'],['l','A++']].map(function(z){return h('button',{class:lsGet('ft_size','s')===z[0]?'on':'',onclick:function(){lsSet('ft_size',z[0]);applyTheme();close();render()}},z[1])})));
  body.append(h('div',{class:'sect'},h('b',{},'🔊 '+w('sound'))),h('div',{class:'seg'},[[false,w('on')],[true,w('off')]].map(function(z){return h('button',{class:U.mute===z[0]?'on':'',onclick:function(){U.mute=z[0];lsSet('ft_mute',z[0]?'1':'0');close();render()}},z[1])})));
  body.append(h('div',{class:'sect'},h('b',{},'📲 App version')));
  body.append(h('div',{class:'note',style:'margin-top:0'},'Build '+(window.FT_BUILD||'—')+(U.lsGet('ft_latest','')&&U.lsGet('ft_latest','')!==(window.FT_BUILD||'')?' · newer available':' · up to date')));
  body.append(h('button',{style:'width:100%;margin-top:8px',onclick:function(){try{U.lsSet('ft_upd','1')}catch(e){}var EX='https://script.google.com/macros/s/AKfycbyFp_mIJqqv-vya_y_DFmW7nwzZc83PQY5PnwOdzMPYjFK3EYg-p-ZHz0M7vSgMlV3_/exec';var url=EX+'?v='+Date.now();try{window.top.location.href=url}catch(e){try{window.open(url,'_top')}catch(_){location.href=url}}}},'⬇️ Get the latest version'));
  body.append(h('div',{class:'note',style:'margin-top:14px'},'👤 Coach: Ratan Roy · CSM, Guwahati Area'));
  var close=sheet('⚙️ '+w('settings'),body)};

/* ---------- learning path ---------- */
var PATH=[['m11','n0','n1','m0','m1','m2','n2'],['m3','m4','n3','n4','m6','m5'],['m8','n5','m7','m9','n6','n7','n12','n13'],['m10','n8','n9','n10','n11','n14']];
function allMods(){var c=U.C(),en=COACH.en,o={};(c.modules||en.modules||[]).forEach(function(m,i){o['m'+i]=m});(c.modules2||en.modules2||[]).forEach(function(m,i){o['n'+i]=m});return o}
function doneSet(){var s={};try{JSON.parse(lsGet('ft_done','[]')).forEach(function(x){s[x]=1})}catch(e){}entriesOf('lesson_done',myEmail()).forEach(function(e){s[e.mod]=1});return s}
function markDone(id){var d=[];try{d=JSON.parse(lsGet('ft_done','[]'))}catch(e){}if(d.indexOf(id)<0){d.push(id);lsSet('ft_done',JSON.stringify(d));if(!isMgr())directAdd('lesson_done',{mod:id}).catch(function(){})}}
function phaseDone(i,ds){return PATH[i].filter(function(id){return ds[id]}).length}
function unlocked(i,ds){if(i===0||S.mgr)return true;return phaseDone(i-1,ds)>=PATH[i-1].length-1&&unlocked(i-1,ds)}
function nextId(ds){for(var i=0;i<PATH.length;i++){if(!unlocked(i,ds))break;for(var j=0;j<PATH[i].length;j++)if(!ds[PATH[i][j]])return PATH[i][j]}var all=[].concat.apply([],PATH);return all[U.dayIdx()%all.length]}
function phaseOf(id){for(var i=0;i<PATH.length;i++)if(PATH[i].indexOf(id)>=0)return i;return 0}
function phName(i){var c=U.C();return ((c.phases||COACH.en.phases)||[])[i]||('Phase '+(i+1))}
function openMod(id){S.tab.learn='mods';S.tab.learnMod=id;go('learn')}
function modPlayer(id,after){var M=allMods()[id];if(!M)return h('div');return U.player(M,function(){markDone(id);after&&after()})}

U.vLearn=function(app){var r=U.sub('learn',[['today',t('lesson').replace(/^Today's l/,'L')],['mods',w('path')],['situ',t('situ')],['quiz',t('quiz')]]);app.append(r[0]);var cur=r[1];var M=allMods(),ds=doneSet();
  if(!Object.keys(M).length){app.append(h('div',{class:'note'},'Loading lessons…'));return}
  if(cur==='today'){var q0=U.quote();if(q0)app.append(q0);var id=nextId(ds),m=M[id],pi=phaseOf(id);
    app.append(h('div',{class:'lcard'},h('div',{class:'meta'},'🔥 '+U.streak()+' '+t('streak')+' · '+phName(pi)),h('h3',{},(m.icon||'📘')+' '+m.title),h('div',{class:'meta'},m.sub||''),bar(pc(phaseDone(pi,ds),PATH[pi].length))));
    app.append(modPlayer(id,function(){render()}));var sits=U.C().situations||[];var s=sits[U.dayIdx()%Math.max(1,sits.length)];if(s)app.append(U.sitCard(s,true));return}
  if(cur==='mods'){var open=S.tab.learnMod;if(open&&M[open]){app.append(h('button',{class:'ghost',onclick:function(){S.tab.learnMod=null;render()}},'‹ '+w('path')),h('div',{class:'meta',style:'margin:6px 2px'},phName(phaseOf(open))));app.append(modPlayer(open,function(){S.tab.learnMod=null;render()}));return}
    var inp=h('input',{class:'srch',placeholder:'🔎 '+w('search'),value:S.tab.q||''});var res=h('div');app.append(inp,res);
    function draw(){var q=(inp.value||'').trim().toLowerCase();S.tab.q=inp.value;res.innerHTML='';
      if(q){var hits=Object.keys(M).filter(function(k){var m=M[k];return (m.title+' '+(m.sub||'')+' '+(m.steps||[]).join(' ')+' '+(m.says||'')).toLowerCase().indexOf(q)>=0});
        var box=h('div',{class:'phase'});hits.forEach(function(k){box.append(row(k))});(U.C().situations||[]).filter(function(s){return (s.q+' '+(s.do||[]).join(' ')+' '+(s.say||'')).toLowerCase().indexOf(q)>=0}).forEach(function(s){res.append(U.sitCard(s))});
        if(hits.length)res.prepend(box);if(!res.children.length)res.append(h('div',{class:'note'},'—'));return}
      var nid=nextId(ds);PATH.forEach(function(ids,i){var ul=unlocked(i,ds),dn=phaseDone(i,ds);var box=h('div',{class:'phase'},h('div',{class:'ph'},h('div',{},h('b',{},(ul?'':'🔒 ')+phName(i)),h('small',{style:'display:block'},((U.C().phaseSub||COACH.en.phaseSub)||[])[i]||'')),h('span',{class:'chip '+(dn===ids.length?'ok':'mut')},dn+' / '+ids.length)),bar(pc(dn,ids.length)));
        ids.forEach(function(k){box.append(row(k,!ul,k===nid))});res.append(box)})}
    function row(k,lock,nx){var m=M[k];return h('div',{class:'lrow'+(lock?' lock':'')+(nx?' nx':''),onclick:function(){if(lock){toast(w('locked'));return}openMod(k)}},h('div',{class:'ic'},m.icon||'📘'),h('div',{class:'tx'},h('b',{},m.title),h('small',{},m.sub||'')),h('span',{class:'st'},ds[k]?'✅':lock?'🔒':nx?'▶ '+w('next'):''))}
    inp.oninput=draw;draw();return}
  if(cur==='situ'){(U.C().situations||[]).forEach(function(s){app.append(U.sitCard(s))});return}
  if(cur==='prod'){U.vProd(app);return}
  if(cur==='quiz'){U.vQuiz(app)}};

/* ---------- Today hub ---------- */
U.today=function(app,tk,rest){var x=me(),hq=x.HQ;
  if(isMgr()){var tp=teamPanel();tk.after(tp);var q=U.quote();if(q)tp.after(q);return}
  var p=myPob(),ci=checkinToday(),tpd=tpFor(myEmail(),TODAY),brick=(typeof brickToday==='function'&&brickToday())||(tpd?tpd.Beat:'');
  var hr=hour(),gr=hr<12?w('gm'):hr<17?w('ga'):w('ge');
  var need=p?p.dailyNeed:0,today=p?((p.byDate||{})[TODAY]||0):0,mp=p?pc(p.done,p.target60):0;
  var ciBtn=h('button',{class:'ci'+(ci?' ok':''),onclick:function(){doCheckin(ciBtn)}},ci?'✅ '+w('checked')+' · '+ci.time+(ci.lat?' · 📍':''):'📍 '+w('checkin'));
  var hero=h('div',{class:'hero'},h('div',{class:'gr'},gr+', '+(x.Name||'').split(' ')[0]+' 👋'),h('div',{class:'br'},brick?('📍 '+brick):(tpd?tpd.DayType:'')),
    h('div',{class:'row'},ring(mp,92,mp+'%',w('month')),h('div',{style:'display:grid;gap:8px'},h('div',{class:'kv'},w('targetToday'),h('b',{},need?rs(need):'—')),h('div',{class:'kv'},w('month'),h('b',{style:'font-size:15px'},p?rs(p.done)+' / '+rs(p.target60):'—')))),
    tpd&&tpd.DayType!=='Field work'&&tpd.DayType!=='Joint working'?null:ciBtn);
  var list=[];
  if(!ci&&tpd&&/Field|Joint/.test(tpd.DayType))list.push({c:'gold',t:'📍 '+w('checkin'),s:'',f:function(){doCheckin(ciBtn)}});
  var m=todayMsg();if(m)list.push({c:'',t:'📋 '+w('readplan'),s:(m.text||'').split('\n')[0].slice(0,80),f:function(){go('msgs')}});
  carryToday().forEach(function(c){list.push({c:'warn',t:'↩️ '+w('carry'),s:c,f:function(){go('msgs')}})});
  try{TASKS.forEach(function(k){var s=k.status();if(s.level==='bad')list.push({c:'bad',t:k.t,s:s.why,f:function(){go(k.k)}})});TASKS.forEach(function(k){var s=k.status();if(s.level==='todo'&&list.length<6)list.push({c:'',t:k.t,s:s.why,f:function(){go(k.k)}})})}catch(e){}
  var ds=doneSet();if(!entriesOf('lesson_done',myEmail()).some(function(e){return e.date===TODAY}))list.push({c:'',t:'🎓 '+w('doLesson'),s:(allMods()[nextId(ds)]||{}).title||'',f:function(){S.tab.learn='today';go('learn')}});
  var prio=h('div');list.slice(0,6).forEach(function(it,i){prio.append(h('div',{class:'prio '+it.c,style:'animation-delay:'+(i*40)+'ms',onclick:it.f},h('div',{class:'n'},String(i+1)),h('div',{class:'tx'},it.t,it.s?h('small',{},it.s):null),h('div',{class:'go'},'›')))});
  var T=[['📋',w('plan'),function(){go('msgs')}],['🎓',w('lesson'),function(){S.tab.learn='today';go('learn')}],['🧮',w('calc'),function(){S.tab.rates='calc';go('sell')}],['📦',w('req'),stockSheet],['🗓️',w('tp'),function(){go('tp')}],['📤',w('share'),sharePlan],['🏆',w('board'),function(){S.tab.perf='board';go('perf')}],['🧭',w('all'),allSheet]];
  var tiles=h('div',{class:'tiles'},T.map(function(x,i){return h('button',{class:'tile',style:'animation-delay:'+(i*30)+'ms',onclick:x[2]},h('span',{class:'i'},x[0]),x[1])}));
  var R=U.REF(),off=null;if(R&&R.offers&&R.offers.length){var o=R.offers[U.dayIdx()%R.offers.length];off=h('div',{class:'lcard sit',onclick:function(){S.tab.rates='offers';go('sell')},style:'cursor:pointer'},h('div',{class:'meta'},'🎁 '+w('offer')),h('b',{},o.t),h('div',{style:'margin-top:4px'},o.d),h('div',{style:'font-style:italic;margin-top:6px;color:var(--accent)'},'“'+o.say+'”'))}
  var wrap=h('details',{class:'phase',open:true},h('summary',{style:'font-weight:700'},'✅ '+w('tasks')));rest.forEach(function(n){wrap.append(n)});
  var frag=[hero,h('div',{class:'sect'},h('b',{},w('prio'))),prio,h('div',{class:'sect'},h('b',{},w('tiles'))),tiles,off,U.quote(),wrap].filter(Boolean);
  var after=tk;frag.forEach(function(n){after.after(n);after=n})};

/* ---------- manager team panel ---------- */
function teamPanel(){var box=h('div',{class:'phase'},h('div',{class:'ph'},h('b',{},'👥 '+w('team')),h('small',{},TODAY)));
  var csos=D.users.filter(function(u){return u.Role==='CSO'&&u.Status==='Active'});
  csos.forEach(function(u){var c=checkinToday(u.Email),les=entriesOf('lesson_done',u.Email).filter(function(e){return e.date===TODAY}).length,p=S.feeds['pob_'+u.HQ],req=entriesOf('stock_request',u.Email).filter(function(e){return e.status!=='sent'}).length;
    box.append(h('div',{class:'lrow',onclick:function(){S.viewAs=u;render()}},(c&&c.selfie?h('img',{src:c.selfie,class:'ic',style:'object-fit:cover;border-radius:50%;border:2px solid var(--gold)'}):h('div',{class:'ic'},(u.Name||'?')[0])),h('div',{class:'tx'},h('b',{},u.Name.split(' ')[0]+' · '+u.HQ),h('small',{},(c?'✅ '+c.time+(c.lat?' 📍':''):'⏳ not checked in')+' · 🎓 '+les+' · POB '+(p?pc(p.done,p.target60)+'%':'—')+(req?' · 📦 '+req+' request':''))),h('span',{class:'st'},'›')))});
  var reqs=(S.entries||[]).filter(function(e){return e.type==='stock_request'&&e.status!=='sent'});
  if(reqs.length){box.append(h('div',{class:'sect'},h('b',{},'📦 Stock requests')));reqs.forEach(function(r){var items=Object.keys(r.items||{}).map(function(k){return k+' × '+r.items[k]}).join(', ');
    box.append(h('div',{class:'note'},h('b',{},r.name+' · '+r.date),h('div',{},items),r.note?h('small',{},r.note):null,h('button',{style:'margin-top:6px',onclick:function(){S.db.collection('entries').doc(r._id).update({status:'sent',sentTs:Date.now()}).then(function(){toast('Marked as sent');render()})}},'✅ Mark sent')))})}
  return box}

/* ---------- stock request ---------- */
function stockSheet(){if(isMgr()){toast('Pick a CSO with "View as" first.');return}var items=[];(D.stock||[]).forEach(function(r){if(r.Email===myEmail()&&items.indexOf(r.Input)<0)items.push(r.Input)});
  var q={};var body=h('div');body.append(h('div',{class:'note'},'Tap + for what you need. Ratan Roy gets it at once.'));
  items.forEach(function(it){var v=h('b',{},'0');q[it]=0;body.append(h('div',{class:'lrow',style:'cursor:default'},h('div',{class:'tx'},it),h('div',{class:'stp'},h('button',{onclick:function(){q[it]=Math.max(0,q[it]-1);v.textContent=q[it]}},'−'),v,h('button',{onclick:function(){q[it]+=it.match(/sample/i)?5:1;v.textContent=q[it]}},'+'))))});
  var note=h('input',{placeholder:w('note')});body.append(h('label',{},note));
  body.append(h('button',{style:'width:100%;margin-top:10px',onclick:function(){var o={};Object.keys(q).forEach(function(k){if(q[k]>0)o[k]=q[k]});if(!Object.keys(o).length){toast('Tap + on at least one item.');return}save('stock_request',{items:o,note:note.value,status:'pending'}).then(function(ok){if(ok){close();render()}})}},'📦 '+w('send')));
  var mine=entriesOf('stock_request',myEmail()).slice(-5).reverse();if(mine.length){body.append(h('div',{class:'sect'},h('b',{},w('myreq'))));mine.forEach(function(r){body.append(h('div',{class:'lrow',style:'cursor:default'},h('div',{class:'tx'},h('b',{},r.date),h('small',{},Object.keys(r.items||{}).map(function(k){return k+' × '+r.items[k]}).join(', '))),h('span',{class:'chip '+(r.status==='sent'?'ok':'warn')},r.status==='sent'?w('sent'):w('pending'))))})}
  var close=sheet('📦 '+w('req'),body)}

U.stockSheet=function(){stockSheet()};U.teamPanel=function(){return teamPanel()};U.checkinToday=function(){return checkinToday()};U.lessonDoneToday=function(){return entriesOf('lesson_done',myEmail()).some(function(e){return e.date===TODAY})||JSON.parse(lsGet('ft_learned','[]')).indexOf(TODAY)>=0};U.nextLesson=function(){return (allMods()[nextId(doneSet())]||{}).title||''};
/* ---------- all topics ---------- */
function allSheet(){var body=h('div');var G=[
  ['💼 '+t('work'),[['🧪','Rloc Raft',function(){go('raft')}],['💉','Deca',function(){go('deca')}],['💊','R-Loc',function(){go('rloc')}],['✨','Skinlite',function(){go('skin')}],['🧴','Dexona',function(){go('dexona')}],['🏬',t('stockists'),function(){go('stockists')}],['📄',t('stock'),function(){go('stock')}],['🔀',t('beat'),function(){go('beat')}],['📦',w('req'),stockSheet],['🗓️',w('tp'),function(){go('tp')}]]],
  ['🎓 '+t('learn'),[['▶️',w('lesson'),function(){S.tab.learn='today';go('learn')}],['🧭',w('path'),function(){S.tab.learn='mods';S.tab.learnMod=null;go('learn')}],['⚡',t('situ'),function(){S.tab.learn='situ';go('learn')}],['🎁',t('prod'),function(){S.tab.rates='offers';go('sell')}],['🧮',w('calc'),function(){S.tab.rates='calc';go('sell')}],['❓',t('quiz'),function(){S.tab.learn='quiz';go('learn')}]]],
  ['📈 '+t('progress'),[['📅',t('month'),function(){S.tab.perf='month';go('perf')}],['🎯','POB',function(){S.tab.perf='pob';go('perf')}],['💰',t('inc'),function(){S.tab.perf='inc';go('perf')}],['📊',t('q4'),function(){S.tab.perf='q4';go('perf')}],['🗓️',w('week'),function(){S.tab.perf='week';go('perf')}],['🏅',w('badges'),function(){S.tab.perf='badges';go('perf')}],['🏆',w('board'),function(){S.tab.perf='board';go('perf')}]]],
  ['⚙️ '+w('settings'),[['🌐',w('lang'),function(){U.settings()}],['🎨',w('theme'),function(){U.settings()}],['💬',t('msgs'),function(){go('msgs')}]]]];
  G.forEach(function(g){body.append(h('div',{class:'sect'},h('b',{},g[0])),h('div',{class:'tiles'},g[1].map(function(x){return h('button',{class:'tile',onclick:function(){close();x[2]()}},h('span',{class:'i'},x[0]),x[1])})))});
  var close=sheet('🧭 '+w('all'),body)}

/* ---------- TP calendar ---------- */
U.tabOfX={tp:'work'};
U.routes.tp=function(app){var who_=me(),email=myEmail();
  if(isMgr()){var cs=D.users.filter(function(u){return u.Role==='CSO'&&u.Status==='Active'});var pick=S.tab.tpWho||cs[0].Email;email=pick;app.append(h('div',{class:'subtabs'},cs.map(function(u){return h('button',{class:u.Email===pick?'on':'',onclick:function(){S.tab.tpWho=u.Email;render()}},u.Name.split(' ')[0])})))}
  var ym=TODAY.slice(0,7),rows={};D.tp.filter(function(r){return r.Email===email&&r.Date.slice(0,7)===ym}).forEach(function(r){rows[r.Date]=r});
  var d0=new Date(ym+'-01T00:00:00'),days=new Date(d0.getFullYear(),d0.getMonth()+1,0).getDate(),lead=(d0.getDay()+6)%7;
  var selD=S.tab.tpSel||TODAY;var cal=h('div',{class:'cal'},['M','T','W','T','F','S','S'].map(function(x){return h('div',{class:'dw'},x)}));
  for(var i=0;i<lead;i++)cal.append(h('div'));
  for(var dd=1;dd<=days;dd++){(function(dd){var ds=ym+'-'+('0'+dd).slice(-2),r=rows[ds],ty=r?r.DayType:'',cls=/Field/.test(ty)?'fw':/Joint/.test(ty)?'jw':/Leave/.test(ty)?'lv':/Holiday/.test(ty)?'hol':'off';
    var lab=r?(/Field|Joint/.test(ty)?(r.BrickID?r.BrickID.split(' | ')[1]:r.Beat):ty):'';
    cal.append(h('div',{class:'d '+cls+(ds===TODAY?' td':'')+(ds===selD?' sel':''),onclick:function(){S.tab.tpSel=ds;render()}},h('b',{},String(dd)),(lab||'').slice(0,18)))})(dd)}
  app.append(h('div',{class:'phase'},h('div',{class:'ph'},h('b',{},'🗓️ '+w('tp')+' · '+d0.toLocaleDateString('en-IN',{month:'long',year:'numeric'})),null),h('div',{class:'legend'},h('span',{style:'background:var(--soft)'},'Field work'),h('span',{style:'background:var(--ok-bg)'},'Joint working'),h('span',{style:'background:var(--bad-bg)'},'Leave'),h('span',{style:'background:var(--warn-bg)'},'Holiday'),h('span',{},'Off')),cal));
  var r=rows[selD];var det=h('div',{class:'lcard'},h('b',{},new Date(selD+'T00:00:00').toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'short'})));
  if(r){det.append(h('div',{},r.DayType+(r.Beat?' · '+r.Beat:'')),r.Objective?h('small',{style:'color:var(--muted)'},r.Objective):null);
    var br=r.BrickID?r.BrickID.split(' | ')[1]:'';if(br){var cnt={D:0,R:0,W:0};D.cust.forEach(function(c){if(c[2]===br&&cnt[c[3]]!=null)cnt[c[3]]++});det.append(h('div',{style:'margin-top:6px'},'👨‍⚕️ '+cnt.D+' doctors · 🏪 '+cnt.R+' retailers · 🏬 '+cnt.W+' wholesalers'));
      var hqx=(D.users.find(function(u){return u.Email===email})||{}).HQ;var c=(S.feeds['carry_'+hqx]||{})[br];if(c&&c.due===selD)det.append(h('div',{class:'note',style:'margin-top:6px'},'↩️ '+(c.items||[]).join(' · ')))}}
  else det.append(h('div',{class:'meta'},'No plan for this day.'));app.append(det)};

/* ---------- progress ---------- */
function weekDays(){var d=new Date(TODAY+'T00:00:00'),k=(d.getDay()+6)%7,out=[];d.setDate(d.getDate()-k);for(var i=0;i<6;i++){out.push(d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2));d.setDate(d.getDate()+1)}return out}
function badgeList(){var em=myEmail(),ds=doneSet(),ci=entriesOf('checkin',em).length,p=myPob()||{},hit=Object.keys(p.byDate||{}).some(function(k){return p.byDate[k]>=(p.planPerDay||p.dailyNeed||1e12)}),qb=+lsGet('ft_quizbest','0'),sk=U.streak();
  return [['📍','First check-in',ci>=1],['🌅','5 check-ins',ci>=5],['🔥','3-day learning streak',sk>=3],['⚡','7-day learning streak',sk>=7],['🎯','Day target hit',hit],['💯','Quiz 5 / 5',qb>=5],['🧮','Profit pro',lsGet('ft_calc','')==='1'],
    ['🥉',phName(0),phaseDone(0,ds)>=PATH[0].length],['🥈',phName(1),phaseDone(1,ds)>=PATH[1].length],['🥇',phName(2),phaseDone(2,ds)>=PATH[2].length],['🏆',phName(3),phaseDone(3,ds)>=PATH[3].length],['📚','10 lessons done',Object.keys(ds).length>=10]]}
function vWeek(app){var p=myPob()||{},em=myEmail(),wd=weekDays(),plan=p.planPerDay||p.dailyNeed||0,tot=0,tg=0;
  var rows=wd.map(function(d){var v=(p.byDate||{})[d]||0,work=(p.workingDays||[]).indexOf(d)>=0;if(work){tot+=v;tg+=plan}var c=entriesOf('checkin',em).some(function(e){return e.date===d}),l=entriesOf('lesson_done',em).filter(function(e){return e.date===d}).length;
    return h('tr',{},h('td',{},new Date(d+'T00:00:00').toLocaleDateString('en-IN',{weekday:'short',day:'numeric'})),h('td',{class:'r num'},work?rs(v):'off'),h('td',{class:'r num'},work?(v>=plan?'✅':d<TODAY?'❌':'·'):''),h('td',{class:'r'},c?'📍':''),h('td',{class:'r'},l?'🎓'+l:''))});
  var pp=pc(tot,tg);app.append(h('div',{class:'score'},h('b',{},'🗓️ '+w('week')+' scorecard'),h('div',{},h('span',{class:'big'},pp+'%'),h('small',{style:'color:var(--muted)'},'  POB '+rs(tot)+' of '+rs(tg))),bar(pp),
    h('div',{class:'tbl'},h('table',{},h('tr',{},h('th',{},'Day'),h('th',{class:'r'},'POB'),h('th',{class:'r'},'Target'),h('th',{class:'r'},'In'),h('th',{class:'r'},'Learn')),rows))),
    h('div',{class:'quote'},h('div',{class:'who'},'💬 '+t('says')),h('div',{class:'q'},pp>=100?'Excellent week! Keep the same rhythm next week.':pp>=70?'Good effort. Close the gap by booking before noon every day.':'This week is behind. Tell me where you need help – we will fix it together.')))}
function vBadges(app){var b=badgeList(),n=b.filter(function(x){return x[2]}).length;app.append(h('div',{class:'score'},h('b',{},'🏅 '+w('badges')+' · '+n+' / '+b.length),bar(pc(n,b.length))),h('div',{class:'badge'},b.map(function(x){return h('div',{class:x[2]?'':'no'},h('span',{class:'i'},x[0]),x[1])})))}
function vBoard(app){var f=null,k=Object.keys(S.feeds).find(function(x){return x.indexOf('board_')===0});f=k?S.feeds[k]:null;
  if(!f||!f.rows){app.append(h('div',{class:'note'},'🏆 '+w('updates')));return}
  var box=h('div',{class:'phase'},h('div',{class:'ph'},h('b',{},'🏆 '+w('board')),h('small',{},f.asOf||'')));
  f.rows.slice().sort(function(a,b){return b.points-a.points}).forEach(function(r,i){box.append(h('div',{class:'lb'+(r.email===myEmail()?' me':'')},h('div',{class:'r g'+(i+1)},String(i+1)),h('div',{style:'flex:1'},h('b',{},r.name),h('small',{style:'display:block;color:var(--muted)'},'POB '+r.pobPct+'% · 📍'+(r.checkins||0)+' · 🎓'+(r.lessons||0))),h('b',{},r.points+' '+w('points'))))});
  app.append(box,h('small',{style:'color:var(--muted)'},'Points: POB % of plan-to-date + 2 per check-in day + 3 per lesson.'))}
U.vPerf=function(app){var x=me();
  if(isMgr()){var r0=U.sub('perf',[['team','Team'],['board',w('board')]]);app.append(r0[0]);if(r0[1]==='board'){vBoard(app);return}app.append(U.mgrInc());['Agartala','Bongaigaon','Guwahati'].forEach(function(q){var s=scoreCard(q);if(s)app.append(s)});return}
  var r=U.sub('perf',[['brands','📊 Reports'],['month',t('month')],['pob','POB'],['week',w('week')],['inc',t('inc')],['q4',t('q4')],['badges',w('badges')],['board',w('board')]]);app.append(r[0]);
  if(r[1]==='brands'&&U.csoPerf){U.csoPerf(app);return}
  if(r[1]==='month'){var s=scoreCard(x.HQ);if(s)app.append(s)}
  if(r[1]==='pob')[].concat(U.pobCard(x.HQ)).forEach(function(n){app.append(n)});
  if(r[1]==='week')vWeek(app);
  if(r[1]==='inc')app.append(U.incCard(x.HQ));
  if(r[1]==='q4'){app.append(U.q4Card(x.HQ));app.append(U.kpiCard(x.HQ))}
  if(r[1]==='badges')vBadges(app);
  if(r[1]==='board')vBoard(app)};

/* ---------- smart memory: remember last stockist / retailer / wholesaler ---------- */
var REM=['stockist','retailer','ws'];
document.addEventListener('change',function(e){var el=e.target;if(el&&el.tagName==='SELECT'&&REM.indexOf(el.name)>=0&&el.value)lsSet('ft_last_'+el.name,el.value)},true);
U.after=function(app,r){try{app.querySelectorAll('select').forEach(function(sel){if(sel.value||REM.indexOf(sel.name)<0)return;var v=lsGet('ft_last_'+sel.name,'');if(v&&[].some.call(sel.options,function(o){return o.value===v})){sel.value=v}})}catch(e){}};

try{if(S.ready)render()}catch(e){}
})();
