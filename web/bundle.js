window.FT_BUILD='20261104040911';
/* Field Tracker – premium line icons. Replaces emoji everywhere in the app with one consistent SVG set. */
(function(){
'use strict';
var P={
home:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
work:'<rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>',
learn:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/><path d="M22 9v6"/>',
progress:'<path d="M3 20h18"/><path d="M6 16l4-5 3 3 5-7"/><path d="M15 7h3v3"/>',
msgs:'<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
plan:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1"/><path d="M9 10h6M9 14h6M9 18h3"/>',
play:'<circle cx="12" cy="12" r="9"/><path d="M10 8.5v7l6-3.5z"/>',
calc:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8"/><path d="M8 12h1M12 12h.01M15.5 12h.5M8 16h1M12 16h.01M15.5 16h.5"/>',
box:'<path d="M3 7l9-4 9 4-9 4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/>',
cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M7.5 14h2M11 14h2M14.5 14h2M7.5 17.5h2"/>',
share:'<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.6M8.2 13.2l7.6 4.6"/>',
trophy:'<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4"/><path d="M12 13v4M9 21h6M10 17h4"/>',
compass:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
gift:'<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13"/><path d="M12 8c-2-4-6-3-5-1s5 1 5 1zM12 8c2-4 6-3 5-1s-5 1-5 1z"/>',
pin:'<path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
doctor:'<circle cx="12" cy="7" r="4"/><path d="M5 21c0-4 3-7 7-7s7 3 7 7"/><path d="M12 15v3M10.5 16.5h3"/>',
flame:'<path d="M12 21c-4 0-6.5-2.7-6.5-6.2 0-3.6 3-5.6 3.5-9.3 2 1.3 3.3 3.3 3.3 5.5 1-.7 1.7-2 1.8-3.2 2 1.7 3.4 4.2 3.4 7 0 3.5-2.5 6.2-5.5 6.2z"/>',
target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
money:'<circle cx="12" cy="12" r="9"/><path d="M9 7.5h6M9 10.5h6M13.5 7.5c1.5 0 1.5 6-2.5 6l3.5 3.5"/>',
gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z"/>',
sound:'<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',
mute:'<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 9.5l5 5M22 9.5l-5 5"/>',
check:'<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>',
cross:'<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',
back:'<path d="M9 14l-5-5 5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>',
bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
pill:'<rect x="3" y="8.5" width="18" height="7" rx="3.5" transform="rotate(-35 12 12)"/><path d="M9.6 8.6l4.8 6.8"/>',
store:'<path d="M3 9l1.5-5h15L21 9"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 11.5V20h14v-8.5M10 20v-5h4v5"/>',
voice:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M9 21h6"/>',
hands:'<path d="M2 12l4-4 4 2 3-2 3 1 4 3"/><path d="M6 8v5l5 5c.8.8 2 .8 2.8 0l4.7-4.7"/><path d="M10 10l3 3"/>',
scale:'<path d="M12 3v18M7 21h10M5 7h14"/><path d="M5 7l-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0z"/>',
phone:'<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17h.01"/>',
chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
building:'<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3"/>',
cycle:'<path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3"/><path d="M18 3v4h-4M6 21v-4h4"/>',
map:'<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
tent:'<path d="M12 3L2 21h20z"/><path d="M12 3v18M9 21l3-6 3 6"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
bag:'<rect x="4" y="7" width="16" height="14" rx="3"/><path d="M8 7V5a4 4 0 0 1 8 0v2M8 13h8"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
medal:'<circle cx="12" cy="15" r="6"/><path d="M8.5 9.8L6 3h4l2 4 2-4h4l-2.5 6.8"/><path d="M12 12.5l.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3z"/>',
star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
cart:'<path d="M3 4h2.5l2.2 11h10.6l2-8H6.5"/><circle cx="9.5" cy="19.5" r="1.5"/><circle cx="17" cy="19.5" r="1.5"/>',
spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
camera:'<path d="M4 8h3l2-3h6l2 3h3v12H4z"/><circle cx="12" cy="13.5" r="3.5"/>',
note:'<path d="M5 3h10l4 4v14H5z"/><path d="M15 3v4h4M8 12h8M8 16h6"/>',
swap:'<path d="M4 8h14l-3-3M20 16H6l3 3"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
team:'<circle cx="9" cy="8" r="3.5"/><circle cx="17" cy="9" r="2.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M15 14.2c3 0 6.5 1.6 6.5 5.3"/>',
info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>',
palette:'<path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.8-.9 1.8-1.8 0-1.4-1.2-1.6-1.2-2.8 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4C21 6.5 17 3 12 3z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/>',
text:'<path d="M4 7V5h16v2M12 5v14M9 19h6"/>',
megaphone:'<path d="M3 10v4h3l9 5V5L6 10z"/><path d="M18 9a4 4 0 0 1 0 6M6 14l1.5 5h3L9 14"/>',
list:'<path d="M9 6h12M9 12h12M9 18h12"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
syringe:'<path d="M18 3l3 3M16.5 4.5l3 3M19 6l-10.5 10.5-3-3L16 3M7 15l-4 4M9.5 11.5l2 2M12 9l2 2"/>',
drop:'<path d="M12 3s6.5 6.6 6.5 11a6.5 6.5 0 0 1-13 0C5.5 9.6 12 3 12 3z"/>',
sparkles:'<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
flask:'<path d="M9 3h6M10 3v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3"/><path d="M7.5 15h9"/>',
wave:'<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6.5a1.5 1.5 0 0 1 3 0v7.5a7 7 0 0 1-7 7c-2.5 0-4-1.3-5.5-3.5L3 14.5a1.5 1.5 0 0 1 2.5-1.6L8 15"/>'};
function svg(name,size,color){var p=P[name];if(!p)return null;var s=document.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('viewBox','0 0 24 24');s.setAttribute('width',size||'1.15em');s.setAttribute('height',size||'1.15em');s.setAttribute('fill','none');s.setAttribute('stroke',color||'currentColor');s.setAttribute('stroke-width','1.7');s.setAttribute('stroke-linecap','round');s.setAttribute('stroke-linejoin','round');s.setAttribute('class','fti');s.setAttribute('aria-hidden','true');s.innerHTML=p;return s}
window.FTIC=svg;
/* emoji → icon */
var E={'🏠':'home','💼':'work','🎓':'learn','📈':'progress','💬':'msgs','📋':'plan','▶️':'play','🧮':'calc','📦':'box','🗓️':'cal','📅':'cal','📤':'share','🏆':'trophy','🧭':'compass','🎁':'gift','📍':'pin','👨‍⚕️':'doctor','🩺':'doctor','🔥':'flame','🎯':'target','💰':'money','⚙️':'gear','🌐':'globe','🔊':'sound','🔇':'mute','✅':'check','❌':'cross','↩️':'back','⚡':'bolt','🔒':'lock','💊':'pill','🏪':'store','🗣️':'voice','🤝':'hands','⚖️':'scale','📱':'phone','🛡️':'shield','❓':'help','💹':'chart','📊':'chart','🏬':'building','♻️':'cycle','🗺️':'map','🏕️':'tent','⏰':'clock','🎒':'bag','🔍':'search','🔎':'search','🥇':'medal','🥈':'medal','🥉':'medal','🏅':'medal','🌟':'star','⭐':'star','🛒':'cart','🎉':'sparkles','✨':'sparkles','📸':'camera','📄':'note','📝':'note','🔀':'swap','👤':'user','👥':'team','💯':'star','🌅':'sun','☀️':'sun','🎨':'palette','🔠':'text','📣':'megaphone','🧪':'flask','💉':'syringe','🧴':'drop','👋':'wave','📚':'learn','⏳':'clock','🧱':'shield','➕':'spark','🗺':'map'};
var keys=Object.keys(E).sort(function(a,b){return b.length-a.length});
var RX=new RegExp('('+keys.map(function(k){return k.replace(/\uFE0F/g,'').replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\uFE0F?'}).join('|')+')','g');
function lookup(m){return E[m]||E[m+'\uFE0F']||E[m.replace(/\uFE0F/g,'')]}
function iconize(root){if(!root||!root.ownerDocument&&root!==document)return;var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){var p=n.parentNode;if(!p||/^(SCRIPT|STYLE|TEXTAREA|INPUT|OPTION|SELECT)$/.test(p.nodeName)||p.closest&&p.closest('.noicon'))return NodeFilter.FILTER_REJECT;RX.lastIndex=0;return RX.test(n.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),list=[];
  while(w.nextNode())list.push(w.currentNode);
  list.forEach(function(n){var parts=n.nodeValue.split(RX),f=document.createDocumentFragment();parts.forEach(function(s){if(!s)return;var nm=lookup(s);if(nm){var i=svg(nm);if(i){f.appendChild(i);return}}f.appendChild(document.createTextNode(s))});n.parentNode.replaceChild(f,n)})}
window.FTiconize=iconize;
var st=document.createElement('style');st.textContent='svg.fti{display:inline-block;vertical-align:-0.2em;flex:none}.bnav .ic svg.fti{width:24px;height:24px}.tile .i svg.fti{width:23px;height:23px}h3 svg.fti,b svg.fti{margin-right:2px}';document.head.appendChild(st);
var pending=false;new MutationObserver(function(){if(pending)return;pending=true;requestAnimationFrame(function(){pending=false;iconize(document.body)})}).observe(document.documentElement,{childList:true,subtree:true});
})();
window.COACH=window.COACH||{};
COACH.en={
quotes:[
"Plan the day before the day starts. A CSO with a plan sells; a CSO without one only visits.",
"Every chemist you skip today is an order your competitor takes.",
"Do not chase the target on the last day. Win it a little every day.",
"Doctors remember people who keep promises. Bring what you said you would bring.",
"Ask for the order. If you do not ask, the answer is always no.",
"Your smile is the first product you detail.",
"Ten good calls beat twenty rushed calls.",
"Know your scheme lots by heart. Confidence closes orders.",
"A shelf with our brand in front sells even when you are not there.",
"Listen more than you speak. The customer tells you how to sell to him.",
"Small daily POB adds up to a big month.",
"Fill the app in the shop, not at night. Fresh data is true data.",
"Every 'no' teaches you something. Note it, fix it, come back.",
"Respect the retailer's time and he will respect your brand.",
"Your territory is your business. Run it like an owner.",
"One extra SKU in every order is how champions grow.",
"Discipline beats talent when talent does not show up on time.",
"Win-win is the only deal that repeats.",
"Prepare your bag in the morning: samples, inputs, order book, price list.",
"The best time to fix a shortfall is today.",
"Ask one more question before you leave every shop.",
"Strong relationships are built on small, regular visits.",
"If the doctor writes it, the chemist must stock it. Connect both.",
"Speak slowly, clearly and with energy. Your voice carries your belief.",
"Review your day every evening: what worked, what didn't, what next.",
"A missed visit is a missed sale. Reschedule it, never forget it.",
"Your report is your mirror. Make it honest.",
"Every brick has a hidden order. Find it.",
"Learn one new thing every day. In a year you will be unstoppable.",
"I believe in you. Now go and prove it today."],
prodIntro:"Know the smallest scheme lot of every product. When you quote the lot with confidence, the chemist trusts you and the order gets bigger.",
quizWin:"Excellent! You know your work. Keep it up.",
quizTry:"Good effort. Read today's lesson again and try tomorrow.",
modules:[
{icon:'🩺',title:'How to detail a doctor',sub:'Opening, need, message, proof, close',steps:[
"Before you enter, check: what did this doctor prescribe last time, and what did you promise him?",
"Greet him by name, smile and keep the visit short. Ask: 'Doctor, do you have two minutes?'",
"Start with his patient, not your product. Ask: 'What type of patients are you seeing most this week?'",
"Give one key message per brand. Say the benefit in one line, then show one proof: a study, a leaflet or a patient result.",
"Handle his doubt calmly. Repeat his concern, then answer with a fact.",
"Close with a clear request: 'Doctor, please try it on your next five patients.'",
"Note the outcome in the app before you reach the next doctor."],
says:'Detail to solve his patient\'s problem, not to finish your speech.'},
{icon:'💊',title:'How to detail a chemist',sub:'Stock, rotation, scheme, order',steps:[
"Check the shelf first. Which of our products are there, which are missing, which are behind competitors?",
"Tell him which doctors nearby are prescribing our brands. Prescriptions are what he cares about.",
"Show the scheme lot and his margin in rupees, not percent.",
"Suggest a quantity that matches his sale, so stock rotates and does not expire.",
"Ask for the order with a number: 'Let us book 9 plus 1 of Oflin 400 today.'",
"Before leaving, ask to place our product in front, at eye level."],
says:'A chemist buys when he sees prescriptions and margin. Show both.'},
{icon:'🏪',title:'How to work with retailers',sub:'Coverage, placement, multiple orders',steps:[
"Visit every retailer in the brick as per plan. Coverage is a KPI for your incentive.",
"Look for gaps: which fast-moving product of ours is not on his shelf?",
"Offer the smallest scheme lot first. Small first orders become big repeat orders.",
"Book more than one product. Suggest a basket: one impact brand, one NPD, one regular.",
"Arrange or confirm delivery through the stockist the same day.",
"Thank him and tell him when you will come back."],
says:'Every retailer is a small branch of our company. Fill every branch.'},
{icon:'🎯',title:'Pitching that works',sub:'Hook, benefit, proof, ask',steps:[
"Hook: start with a question about his patients or his sales.",
"Benefit: say what changes for him in one sentence.",
"Proof: show one fact. One strong fact beats five weak ones.",
"Ask: end with a clear request and stay silent. Let him answer.",
"Practise your pitch for each impact brand until you can say it in 30 seconds."],
says:'If you cannot say it in 30 seconds, you are not ready to say it.'},
{icon:'🗣️',title:'Voice, eye contact and body language',sub:'How you say it matters',steps:[
"Speak a little slower than normal. Pause after the key benefit.",
"Raise your energy on the benefit, lower your voice when you share a fact. Change of tone keeps attention.",
"Look the customer in the eye while you speak. Look at the leaflet only when you point.",
"Stand straight, keep hands open and visible, and keep your phone away during the call.",
"Mirror his pace: if he is busy, be brief; if he is relaxed, give more detail.",
"End with a firm, polite thank you and a smile."],
says:'People buy belief before they buy a brand. Let your voice and eyes show it.'},
{icon:'🤝',title:'Building relationships',sub:'Trust grows with regular small actions',steps:[
"Visit regularly as per the TP. Being there on the promised day builds trust.",
"Remember small details: his clinic timings, busy days, family function. Note them.",
"Solve his problems: shortage, expiry return, scheme credit. Follow up until closed.",
"Never over-promise. Promise less and deliver more.",
"Keep it professional. Gifts and inputs only as per company policy and only to list doctors."],
says:'Relationships are not built in one big meeting. They are built in a hundred small visits.'},
{icon:'⚖️',title:'Convincing and win-win',sub:'Handle objections, close fairly',steps:[
"Listen to the full objection. Do not interrupt.",
"Repeat it back: 'So your concern is the price, right?' This shows respect.",
"Answer with value: margin per unit, fast rotation, doctors prescribing.",
"Offer a choice, not a pressure: 'Should we start with 9 plus 1 or 27 plus 3?'",
"Make sure both sides gain: he sells easily, we grow. A forced order comes back as a return."],
says:'Win-win is the only deal that repeats every month.'},
{icon:'📦',title:'Brand placement and multiple orders',sub:'Shelf, visibility, basket selling',steps:[
"Ask for eye-level placement for impact brands: Deca, Rloc, Skinlite, Dexona.",
"Keep products facing forward and clean. Remove damaged or near-expiry packs.",
"Use the basket rule: in every order add one more SKU than last time.",
"Link products: Skinlite Cream with Skinlite Facewash; Rloc tablets with Rloc Raft.",
"Take a photo of good placement and upload it in the app."],
says:'What the customer sees first, he sells first.'},
{icon:'🧮',title:'Quantity, lots and minimum billing',sub:'Speak in lots, not loose units',steps:[
"Know the scheme lot of every product, for example Oflin 400: 9 plus 1, Skinlite Cream 15 g: 50 plus 10.",
"Always quote the smallest lot first, then show the bigger lot for more free goods.",
"Check the stockist's minimum billing before booking. Combine products to cross it.",
"Never book loose quantity below the lot when a scheme exists. He loses free goods.",
"Use the order value calculator in the Products tab to tell him the value at once."],
says:'A CSO who knows his numbers never fumbles at the counter.'},
{icon:'📈',title:'Daily POB discipline',sub:'Hit the day target, every day',steps:[
"Your POB target is 60 percent of the monthly target, spread over working days.",
"If you miss a day or take leave, the daily target rises. Check the Progress tab every morning.",
"Plan the day's POB from today's brick: which chemists, which products, how much.",
"Book orders before noon when shops are free. Afternoons are for doctors.",
"Do not keep orders for the closing days. Late orders hurt everyone."],
says:'The target is not a mountain at the month end. It is a small step every day.'},
{icon:'🔍',title:'Situation analysis',sub:'Read the brick before you work it',steps:[
"Look at last month: which chemists ordered, which stopped, which never ordered.",
"Look at doctors: who prescribes our impact brands, who does not.",
"Find the gap: a prescribing doctor with no stock nearby, or stock with no prescriber.",
"Decide one action per gap and do it today.",
"In the evening, check what changed and update the plan."],
says:'Do not work harder in the same way. Find the gap and work smarter.'},
{icon:'🎒',title:'Morning preparation',sub:'Ten minutes that decide the day',steps:[
"Open Today: read your plan, your POB target and pending tasks.",
"Pack samples and inputs for today's doctors as per plan.",
"Revise the scheme lots of the brands you will push today.",
"Decide your first three calls and the order you expect from each.",
"Start on time. The first call sets the energy for the whole day."],
says:'Win the morning and you win the day.'}],
situations:[
{q:'Chemist says: "Your product is not moving."',do:['Ask which doctors nearby treat this condition.','Visit those doctors today and detail the brand.','Come back and tell the chemist which doctor will prescribe.','Suggest the smallest lot so stock rotates.'],say:'Sir, Dr. ___ will start prescribing this week. Keep just the small lot, and I will make sure it moves.'},
{q:'Chemist says: "Competitor gives more scheme."',do:['Compare margin per unit, not just free goods.','Point out our prescription support in his area.','Offer the right lot size for his sale.'],say:'Sir, their scheme is bigger but the product sits. Ours has doctors writing it, so you sell faster and earn more.'},
{q:'Doctor says: "I have no time today."',do:['Respect it. Give a one-line message.','Leave the leaflet or sample.','Ask for a better time and note it.'],say:'Doctor, just one line: ___. When can I meet you for two minutes?'},
{q:'Doctor says: "Your product is costly."',do:['Talk about patient outcome and compliance.','Compare cost per day of therapy.','Suggest it for the right patient group.'],say:'Doctor, per day it is only a little more, and the patient gets better results, so he comes back to you happy.'},
{q:'Retailer has no space on the shelf.',do:['Ask for a small front space for one impact brand.','Remove damaged or expired stock with his permission.','Offer the smallest lot.'],say:'Just give me this small corner for one product. If it does not sell in two weeks, I will take it back.'},
{q:'Stockist is out of stock of our product.',do:['Inform Ratan Roy and the stockist the same day.','Book the order anyway and note the delivery date.','Tell the chemist when stock will arrive.'],say:'Sir, stock is coming on ___. I have booked your order so you get it first.'},
{q:'You are behind your POB target.',do:['Check the Progress tab for the exact daily need.','List chemists who ordered before but not this month.','Visit them first and book their regular lot.'],say:'Sir, your last order was ___. Shall we repeat it today?'},
{q:'Chemist asks for a scheme that does not exist.',do:['Stay polite and honest. Never promise what is not there.','Explain the scheme that is available.','Show the margin he gets.'],say:'Sir, I cannot give what the company has not approved. But with this lot you still earn ___.'},
{q:'A doctor complains about a past promise you did not keep.',do:['Apologise without excuses.','Fix it now or give a date.','Keep the date.'],say:'Doctor, you are right, I am sorry. I will bring it on ___ and I will not miss again.'},
{q:'Order is ready but below minimum billing.',do:['Add one more product he sells well.','Combine with an NPD or impact brand.','Show him the total value.'],say:'Sir, let us add ___ too. Then your bill crosses the minimum and you get both on time.'}],
quiz:[
{q:'Your POB target is what part of the monthly target?',o:['40%','60%','80%','100%'],a:1,e:'POB target is 60% of the monthly target, spread over working days.'},
{q:'Gifts can be given to…',o:['Any doctor','Only list doctors','Any chemist','Anyone who orders'],a:1,e:'Gifts go only to list doctors. Samples can go to any doctor.'},
{q:'What should you quote first to a chemist?',o:['The biggest lot','The smallest scheme lot','Loose units','Nothing, wait for him'],a:1,e:'Start with the smallest lot. Small first orders become big repeat orders.'},
{q:'You took one day of leave. Your daily POB target…',o:['Stays the same','Goes down','Goes up','Is cancelled'],a:2,e:'Fewer working days left means the daily need goes up.'},
{q:'When should you fill the app?',o:['At night','At the shop, right after the call','Next morning','Once a week'],a:1,e:'Fresh data is true data. Fill it right after the call.'},
{q:'Best opening with a doctor?',o:['Start with price','Talk about his patients','Talk about competitors','Show all brands'],a:1,e:'Start with his patient. Then connect your brand to that need.'},
{q:'Where should impact brands be placed?',o:['Back shelf','Under the counter','Eye level in front','In the store room'],a:2,e:'What the customer sees first, he sells first.'},
{q:'A chemist says your product is not moving. First step?',o:['Take back stock','Give more discount','Find nearby prescribing doctors','Stop visiting him'],a:2,e:'Create prescriptions near him, then the stock moves.'},
{q:'Milestone bonus needs…',o:['100% for the month only','40% by 17th only','100% for the month AND 40% by 17th','Nothing'],a:2,e:'Both conditions are needed for the milestone bonus.'},
{q:'Saleable returns must be…',o:['Up to 3%','Up to 10%','Any amount','Zero'],a:0,e:'Saleable returns must be 3% or less for the incentive.'},
{q:'Outlet coverage target is…',o:['50%','75%','90%','100%'],a:2,e:'Outlet coverage must be at least 90%.'},
{q:'HCP coverage target is…',o:['80%','90%','95%','100%'],a:2,e:'Doctor (HCP) coverage must be at least 95%.'},
{q:'Raft doctors are visited…',o:['Any day','As per their brick in the TP','Only on Mondays','Only once a month'],a:1,e:'Visit Raft doctors on the day their brick is in the TP.'},
{q:'The order is below minimum billing. You should…',o:['Cancel it','Add another product he sells','Book it anyway','Ask the stockist to ignore it'],a:1,e:'Add one more product to cross the minimum and grow the basket.'},
{q:'Good voice for detailing?',o:['Fast and loud','Slow, clear, with pauses','Very soft','Same tone all the time'],a:1,e:'Slow and clear with a pause after the key benefit.'}]
};
window.COACH_PRODUCTS=[
{n:'Deca 25mg/ml Combipack',pack:'Combipack',scheme:'36+4 · 180+20',rate:'₹206',unit:205.9},
{n:'Deca 50mg/ml Combipack',pack:'Combipack',scheme:'36+4 · 72+8 · 108+12',rate:'₹310',unit:309.6},
{n:'Deca 100mg/ml Combipack',pack:'Combipack',scheme:'18+2 · 36+4',rate:'₹435',unit:434.6},
{n:'Durabolin 25mg Amp',pack:'Ampoule',scheme:'42+8',rate:'₹100',unit:99.7},
{n:'R-Loc 150 Tab',pack:'Strip',scheme:'225+45 · 675+135',rate:'₹29',unit:28.9},
{n:'R-Loc D Tab',pack:'Strip',scheme:'130+20',rate:'₹28',unit:28.4},
{n:'R-Loc Inj',pack:'Ampoule',scheme:'480+80 · 960+160',rate:'₹4.6',unit:4.6},
{n:'Rloc Raft 150ml',pack:'Bottle',scheme:'50+10 · 100+20 · 150+30',rate:'₹94',unit:94.3},
{n:'Skinlite Cream 15g',pack:'Tube',scheme:'50+10 · 100+20 · 150+30',rate:'₹113',unit:113.2},
{n:'Skinlite Cream 25g',pack:'Tube',scheme:'50+10 · 100+20 · 150+30',rate:'₹188',unit:187.5},
{n:'Skinlite Facewash 50g',pack:'Tube',scheme:'120+24 · 180+36',rate:'₹46',unit:45.8},
{n:'Skinlite Day Care 30g',pack:'Tube',scheme:'40+8 · 80+16',rate:'₹92',unit:91.5},
{n:'Dexona Tab',pack:'Strip',scheme:'210+15 · 602+43',rate:'₹4.6',unit:4.6},
{n:'Oflin 200 Tab',pack:'Strip',scheme:'9+1 · 18+2 · 27+3',rate:'₹72',unit:72.1},
{n:'Oflin 400 Tab',pack:'Strip',scheme:'9+1 · 27+3',rate:'₹154',unit:153.7},
{n:'Oflin-O Tab',pack:'Strip',scheme:'24+6',rate:'₹74',unit:73.9},
{n:'Ciprobid 500 Tab',pack:'Strip',scheme:'135+15 · 270+30',rate:'₹27',unit:26.9},
{n:'Ciprobid 250 Tab',pack:'Strip',scheme:'135+15',rate:'₹14',unit:13.9},
{n:'Tiniba 300 Tab',pack:'Strip',scheme:'45+15 · 90+30',rate:'₹47',unit:46.9},
{n:'Tiniba 500 Tab',pack:'Strip',scheme:'90+30 · 180+60',rate:'₹85',unit:84.6},
{n:'Tiniba Infusion',pack:'Bottle',scheme:'45+15 · 135+45',rate:'₹101',unit:100.7},
{n:'Zipcet Tab',pack:'Strip',scheme:'96+24 · 288+72',rate:'₹19',unit:19.1},
{n:'Itchcam 60ml',pack:'Bottle',scheme:'8+2 · 16+4',rate:'₹183',unit:183.1},
{n:'Cadiphylate Elixir',pack:'Bottle',scheme:'46+2',rate:'₹65',unit:64.8}];
window.COACH=window.COACH||{};
COACH.hi={
quotes:[
"दिन शुरू होने से पहले दिन की योजना बनाइए। योजना वाला CSO बेचता है, बिना योजना वाला सिर्फ़ विज़िट करता है।",
"आज जो केमिस्ट आप छोड़ेंगे, उसका ऑर्डर आपका प्रतियोगी ले जाएगा।",
"आख़िरी दिन टारगेट के पीछे मत भागिए। हर दिन थोड़ा-थोड़ा जीतिए।",
"डॉक्टर उन्हें याद रखते हैं जो वादा निभाते हैं। जो कहा था, वह लेकर जाइए।",
"ऑर्डर माँगिए। अगर आप नहीं माँगेंगे, तो जवाब हमेशा 'ना' होगा।",
"आपकी मुस्कान पहला प्रोडक्ट है जिसे आप डिटेल करते हैं।",
"दस अच्छी कॉल, बीस जल्दबाज़ी वाली कॉल से बेहतर हैं।",
"अपने स्कीम लॉट मुँह-ज़बानी याद रखिए। आत्मविश्वास ऑर्डर दिलाता है।",
"जिस शेल्फ़ पर हमारा ब्रांड सामने है, वह आपके न होने पर भी बिकता है।",
"बोलने से ज़्यादा सुनिए। ग्राहक ख़ुद बताता है कि उसे कैसे बेचना है।",
"छोटा-छोटा रोज़ का POB मिलकर बड़ा महीना बनता है।",
"ऐप दुकान पर ही भरिए, रात को नहीं। ताज़ा डेटा ही सच्चा डेटा है।",
"हर 'ना' कुछ सिखाता है। लिखिए, सुधारिए, फिर जाइए।",
"रिटेलर के समय का सम्मान कीजिए, वह आपके ब्रांड का सम्मान करेगा।",
"आपका इलाक़ा आपका बिज़नेस है। मालिक की तरह चलाइए।",
"हर ऑर्डर में एक SKU ज़्यादा — यही चैंपियन की पहचान है।",
"अनुशासन प्रतिभा को हरा देता है, जब प्रतिभा समय पर नहीं आती।",
"विन-विन ही वह सौदा है जो बार-बार होता है।",
"सुबह बैग तैयार कीजिए: सैंपल, इनपुट, ऑर्डर बुक, प्राइस लिस्ट।",
"कमी को पूरा करने का सबसे अच्छा दिन आज है।",
"हर दुकान से निकलने से पहले एक और सवाल पूछिए।",
"मज़बूत रिश्ते छोटी, नियमित मुलाक़ातों से बनते हैं।",
"अगर डॉक्टर लिखता है, तो केमिस्ट को रखना ही होगा। दोनों को जोड़िए।",
"धीरे, साफ़ और जोश से बोलिए। आपकी आवाज़ आपके विश्वास को दिखाती है।",
"हर शाम दिन की समीक्षा कीजिए: क्या चला, क्या नहीं, आगे क्या।",
"छूटी विज़िट यानी छूटी बिक्री। उसे दोबारा तय कीजिए, भूलिए नहीं।",
"आपकी रिपोर्ट आपका आईना है। उसे सच्चा रखिए।",
"हर ब्रिक में एक छुपा ऑर्डर है। उसे ढूँढिए।",
"हर दिन एक नई बात सीखिए। एक साल में आपको कोई नहीं रोक पाएगा।",
"मुझे आप पर भरोसा है। आज जाकर साबित कीजिए।"],
prodIntro:"हर प्रोडक्ट का सबसे छोटा स्कीम लॉट याद रखिए। जब आप भरोसे से लॉट बताते हैं, केमिस्ट आप पर भरोसा करता है और ऑर्डर बड़ा होता है।",
quizWin:"बहुत बढ़िया! आप अपना काम जानते हैं। ऐसे ही चलते रहिए।",
quizTry:"अच्छी कोशिश। आज का पाठ फिर से पढ़िए और कल फिर कोशिश कीजिए।",
modules:[
{icon:'🩺',title:'डॉक्टर को डिटेल कैसे करें',sub:'शुरुआत, ज़रूरत, संदेश, प्रमाण, क्लोज़',steps:[
"अंदर जाने से पहले देखिए: पिछली बार डॉक्टर ने क्या लिखा था और आपने क्या वादा किया था?",
"नाम से अभिवादन कीजिए, मुस्कुराइए और विज़िट छोटी रखिए। पूछिए: 'डॉक्टर, दो मिनट हैं?'",
"अपने प्रोडक्ट से नहीं, उनके मरीज़ से शुरू कीजिए। पूछिए: 'इस हफ़्ते किस तरह के मरीज़ ज़्यादा आ रहे हैं?'",
"हर ब्रांड का एक मुख्य संदेश दीजिए। फ़ायदा एक लाइन में, फिर एक प्रमाण: स्टडी, लीफ़लेट या मरीज़ का नतीजा।",
"उनकी शंका को शांति से सुनिए। उनकी बात दोहराइए, फिर तथ्य से जवाब दीजिए।",
"साफ़ अनुरोध से ख़त्म कीजिए: 'डॉक्टर, अगले पाँच मरीज़ों पर ज़रूर आज़माइए।'",
"अगले डॉक्टर तक पहुँचने से पहले ऐप में नतीजा लिखिए।"],
says:'भाषण पूरा करने के लिए नहीं, मरीज़ की समस्या हल करने के लिए डिटेल कीजिए।'},
{icon:'💊',title:'केमिस्ट को डिटेल कैसे करें',sub:'स्टॉक, रोटेशन, स्कीम, ऑर्डर',steps:[
"पहले शेल्फ़ देखिए। हमारे कौन-से प्रोडक्ट हैं, कौन-से नहीं, कौन-से प्रतियोगी के पीछे हैं?",
"बताइए कि पास के कौन-से डॉक्टर हमारे ब्रांड लिख रहे हैं। केमिस्ट को प्रिस्क्रिप्शन की परवाह होती है।",
"स्कीम लॉट और उनका मार्जिन रुपये में बताइए, प्रतिशत में नहीं।",
"उनकी बिक्री के हिसाब से मात्रा सुझाइए, ताकि स्टॉक घूमे और एक्सपायर न हो।",
"संख्या के साथ ऑर्डर माँगिए: 'आज Oflin 400 का 9+1 बुक कर लेते हैं।'",
"निकलने से पहले हमारा प्रोडक्ट सामने, आँखों के स्तर पर रखवाइए।"],
says:'केमिस्ट तब ख़रीदता है जब उसे प्रिस्क्रिप्शन और मार्जिन दिखता है। दोनों दिखाइए।'},
{icon:'🏪',title:'रिटेलर के साथ काम',sub:'कवरेज, प्लेसमेंट, ज़्यादा ऑर्डर',steps:[
"प्लान के अनुसार ब्रिक के हर रिटेलर पर जाइए। कवरेज आपके इंसेंटिव का KPI है।",
"कमी ढूँढिए: हमारा कौन-सा तेज़ बिकने वाला प्रोडक्ट उनकी शेल्फ़ पर नहीं है?",
"पहले सबसे छोटा स्कीम लॉट दीजिए। छोटे पहले ऑर्डर बड़े रिपीट ऑर्डर बनते हैं।",
"एक से ज़्यादा प्रोडक्ट बुक कीजिए। बास्केट सुझाइए: एक इम्पैक्ट ब्रांड, एक NPD, एक रेगुलर।",
"उसी दिन स्टॉकिस्ट से डिलीवरी तय कीजिए।",
"धन्यवाद कहिए और बताइए कि आप कब फिर आएँगे।"],
says:'हर रिटेलर हमारी कंपनी की एक छोटी शाखा है। हर शाखा भरिए।'},
{icon:'🎯',title:'असरदार पिचिंग',sub:'हुक, फ़ायदा, प्रमाण, माँग',steps:[
"हुक: उनके मरीज़ों या बिक्री के बारे में सवाल से शुरू कीजिए।",
"फ़ायदा: एक वाक्य में बताइए कि उनके लिए क्या बदलेगा।",
"प्रमाण: एक तथ्य दिखाइए। एक मज़बूत तथ्य पाँच कमज़ोर तथ्यों से बेहतर है।",
"माँग: साफ़ अनुरोध कीजिए और चुप रहिए। उन्हें जवाब देने दीजिए।",
"हर इम्पैक्ट ब्रांड की पिच तब तक अभ्यास कीजिए जब तक 30 सेकंड में न बोल सकें।"],
says:'अगर 30 सेकंड में नहीं कह सकते, तो आप अभी कहने के लिए तैयार नहीं हैं।'},
{icon:'🗣️',title:'आवाज़, नज़र और बॉडी लैंग्वेज',sub:'कैसे कहते हैं, यह मायने रखता है',steps:[
"सामान्य से थोड़ा धीरे बोलिए। मुख्य फ़ायदे के बाद रुकिए।",
"फ़ायदे पर जोश बढ़ाइए, तथ्य बताते समय आवाज़ धीमी कीजिए। सुर बदलने से ध्यान बना रहता है।",
"बोलते समय ग्राहक की आँखों में देखिए। लीफ़लेट तभी देखिए जब उस पर इशारा करें।",
"सीधे खड़े रहिए, हाथ खुले और दिखते रहें, कॉल के दौरान फ़ोन दूर रखिए।",
"उनकी गति से मेल खाइए: व्यस्त हों तो छोटा, आराम में हों तो ज़्यादा जानकारी।",
"मज़बूत, विनम्र धन्यवाद और मुस्कान के साथ ख़त्म कीजिए।"],
says:'लोग ब्रांड से पहले विश्वास ख़रीदते हैं। अपनी आवाज़ और आँखों से वह दिखाइए।'},
{icon:'🤝',title:'रिश्ते बनाना',sub:'भरोसा छोटे नियमित कामों से बढ़ता है',steps:[
"TP के अनुसार नियमित जाइए। वादे के दिन पहुँचना भरोसा बनाता है।",
"छोटी बातें याद रखिए: क्लिनिक का समय, व्यस्त दिन, पारिवारिक कार्यक्रम। लिखकर रखिए।",
"उनकी समस्याएँ सुलझाइए: शॉर्टेज, एक्सपायरी रिटर्न, स्कीम क्रेडिट। बंद होने तक फ़ॉलो-अप कीजिए।",
"ज़्यादा वादा कभी मत कीजिए। कम वादा, ज़्यादा काम।",
"व्यवहार पेशेवर रखिए। गिफ़्ट और इनपुट सिर्फ़ कंपनी नीति के अनुसार और सिर्फ़ लिस्ट डॉक्टरों को।"],
says:'रिश्ते एक बड़ी मीटिंग में नहीं बनते। वे सौ छोटी मुलाक़ातों में बनते हैं।'},
{icon:'⚖️',title:'मनाना और विन-विन',sub:'आपत्ति सँभालिए, ईमानदारी से क्लोज़ कीजिए',steps:[
"पूरी आपत्ति सुनिए। बीच में मत टोकिए।",
"दोहराइए: 'तो आपकी चिंता क़ीमत की है, सही?' इससे सम्मान दिखता है।",
"वैल्यू से जवाब दीजिए: प्रति यूनिट मार्जिन, तेज़ रोटेशन, लिखने वाले डॉक्टर।",
"दबाव नहीं, विकल्प दीजिए: '9+1 से शुरू करें या 27+3 से?'",
"दोनों का फ़ायदा पक्का कीजिए: वह आसानी से बेचे, हम बढ़ें। ज़बरदस्ती का ऑर्डर रिटर्न बनकर लौटता है।"],
says:'विन-विन ही वह सौदा है जो हर महीने दोहराया जाता है।'},
{icon:'📦',title:'ब्रांड प्लेसमेंट और ज़्यादा ऑर्डर',sub:'शेल्फ़, दिखावट, बास्केट सेलिंग',steps:[
"इम्पैक्ट ब्रांड के लिए आँखों के स्तर पर जगह माँगिए: Deca, Rloc, Skinlite, Dexona।",
"प्रोडक्ट सामने की ओर और साफ़ रखिए। ख़राब या एक्सपायरी के क़रीब पैक हटाइए।",
"बास्केट नियम: हर ऑर्डर में पिछली बार से एक SKU ज़्यादा जोड़िए।",
"प्रोडक्ट जोड़िए: Skinlite Cream के साथ Skinlite Facewash; Rloc टैबलेट के साथ Rloc Raft।",
"अच्छे प्लेसमेंट की फ़ोटो लेकर ऐप में अपलोड कीजिए।"],
says:'ग्राहक जो पहले देखता है, वही पहले बिकता है।'},
{icon:'🧮',title:'मात्रा, लॉट और न्यूनतम बिलिंग',sub:'लॉट में बात कीजिए, खुली यूनिट में नहीं',steps:[
"हर प्रोडक्ट का स्कीम लॉट जानिए, जैसे Oflin 400: 9+1, Skinlite Cream 15 g: 50+10।",
"पहले सबसे छोटा लॉट बताइए, फिर ज़्यादा फ़्री माल के लिए बड़ा लॉट दिखाइए।",
"बुक करने से पहले स्टॉकिस्ट की न्यूनतम बिलिंग देखिए। प्रोडक्ट जोड़कर उसे पार कीजिए।",
"स्कीम होने पर लॉट से कम खुली मात्रा कभी बुक मत कीजिए। उनका फ़्री माल छूट जाएगा।",
"Products टैब के ऑर्डर वैल्यू कैलकुलेटर से तुरंत वैल्यू बताइए।"],
says:'जो CSO अपने आँकड़े जानता है, वह काउंटर पर कभी नहीं अटकता।'},
{icon:'📈',title:'रोज़ का POB अनुशासन',sub:'हर दिन, दिन का टारगेट',steps:[
"आपका POB टारगेट मासिक टारगेट का 60 प्रतिशत है, कार्यदिवसों में बँटा हुआ।",
"कोई दिन छूटे या छुट्टी हो, तो रोज़ का टारगेट बढ़ जाता है। हर सुबह Progress टैब देखिए।",
"आज के ब्रिक से दिन का POB तय कीजिए: कौन-से केमिस्ट, कौन-से प्रोडक्ट, कितना।",
"दोपहर से पहले ऑर्डर बुक कीजिए जब दुकानें ख़ाली हों। दोपहर बाद डॉक्टर।",
"ऑर्डर आख़िरी दिनों के लिए मत रखिए। देर के ऑर्डर सबको नुक़सान करते हैं।"],
says:'टारगेट महीने के अंत का पहाड़ नहीं है। यह हर दिन का एक छोटा क़दम है।'},
{icon:'🔍',title:'स्थिति का विश्लेषण',sub:'काम से पहले ब्रिक को पढ़िए',steps:[
"पिछला महीना देखिए: किसने ऑर्डर दिया, किसने बंद किया, किसने कभी नहीं दिया।",
"डॉक्टर देखिए: कौन हमारे इम्पैक्ट ब्रांड लिखता है, कौन नहीं।",
"कमी ढूँढिए: लिखने वाला डॉक्टर पर पास में स्टॉक नहीं, या स्टॉक है पर लिखने वाला नहीं।",
"हर कमी के लिए एक काम तय कीजिए और आज ही कीजिए।",
"शाम को देखिए क्या बदला और प्लान अपडेट कीजिए।"],
says:'उसी तरीक़े से ज़्यादा मेहनत मत कीजिए। कमी ढूँढिए और समझदारी से काम कीजिए।'},
{icon:'🎒',title:'सुबह की तैयारी',sub:'दस मिनट जो दिन तय करते हैं',steps:[
"Today खोलिए: अपना प्लान, POB टारगेट और बाक़ी काम पढ़िए।",
"प्लान के अनुसार आज के डॉक्टरों के लिए सैंपल और इनपुट रखिए।",
"आज जिन ब्रांड पर ज़ोर देना है, उनके स्कीम लॉट दोहराइए।",
"पहली तीन कॉल और हर एक से अपेक्षित ऑर्डर तय कीजिए।",
"समय पर निकलिए। पहली कॉल पूरे दिन की ऊर्जा तय करती है।"],
says:'सुबह जीतिए, दिन जीत जाएँगे।'}],
situations:[
{q:'केमिस्ट कहता है: "आपका प्रोडक्ट नहीं चल रहा।"',do:['पूछिए कि पास के कौन-से डॉक्टर यह बीमारी देखते हैं।','आज ही उन डॉक्टरों को ब्रांड डिटेल कीजिए।','वापस आकर केमिस्ट को बताइए कौन-सा डॉक्टर लिखेगा।','सबसे छोटा लॉट सुझाइए ताकि स्टॉक घूमे।'],say:'सर, डॉ. ___ इस हफ़्ते से लिखना शुरू करेंगे। बस छोटा लॉट रखिए, मैं इसे चलवाऊँगा।'},
{q:'केमिस्ट कहता है: "प्रतियोगी ज़्यादा स्कीम देता है।"',do:['सिर्फ़ फ़्री माल नहीं, प्रति यूनिट मार्जिन की तुलना कीजिए।','उनके इलाक़े में हमारे प्रिस्क्रिप्शन सपोर्ट को बताइए।','उनकी बिक्री के हिसाब से सही लॉट दीजिए।'],say:'सर, उनकी स्कीम बड़ी है पर माल पड़ा रहता है। हमारा डॉक्टर लिखते हैं, इसलिए जल्दी बिकता है और कमाई ज़्यादा।'},
{q:'डॉक्टर कहते हैं: "आज समय नहीं है।"',do:['सम्मान कीजिए। एक लाइन का संदेश दीजिए।','लीफ़लेट या सैंपल छोड़िए।','बेहतर समय पूछिए और लिखिए।'],say:'डॉक्टर, बस एक लाइन: ___। दो मिनट के लिए कब मिल सकता हूँ?'},
{q:'डॉक्टर कहते हैं: "आपका प्रोडक्ट महँगा है।"',do:['मरीज़ के नतीजे और कम्प्लायंस की बात कीजिए।','प्रति दिन इलाज की क़ीमत की तुलना कीजिए।','सही मरीज़ समूह के लिए सुझाइए।'],say:'डॉक्टर, प्रति दिन बस थोड़ा ज़्यादा है, और मरीज़ को बेहतर नतीजा मिलता है, तो वह ख़ुश होकर आपके पास लौटता है।'},
{q:'रिटेलर की शेल्फ़ पर जगह नहीं है।',do:['एक इम्पैक्ट ब्रांड के लिए सामने थोड़ी जगह माँगिए।','उनकी अनुमति से ख़राब या एक्सपायर्ड स्टॉक हटाइए।','सबसे छोटा लॉट दीजिए।'],say:'बस यह छोटा कोना एक प्रोडक्ट के लिए दीजिए। दो हफ़्ते में न बिके तो मैं वापस ले लूँगा।'},
{q:'स्टॉकिस्ट के पास हमारा प्रोडक्ट नहीं है।',do:['उसी दिन रतन रॉय और स्टॉकिस्ट को बताइए।','फिर भी ऑर्डर बुक कीजिए और डिलीवरी की तारीख़ लिखिए।','केमिस्ट को बताइए स्टॉक कब आएगा।'],say:'सर, स्टॉक ___ को आ रहा है। मैंने आपका ऑर्डर बुक कर दिया है ताकि सबसे पहले आपको मिले।'},
{q:'आप POB टारगेट से पीछे हैं।',do:['Progress टैब में सही रोज़ की ज़रूरत देखिए।','उन केमिस्टों की सूची बनाइए जिन्होंने पहले ऑर्डर दिया पर इस महीने नहीं।','पहले उनके पास जाकर उनका नियमित लॉट बुक कीजिए।'],say:'सर, आपका पिछला ऑर्डर ___ था। आज वही दोहरा दें?'},
{q:'केमिस्ट ऐसी स्कीम माँगता है जो है ही नहीं।',do:['विनम्र और ईमानदार रहिए। जो नहीं है उसका वादा कभी मत कीजिए।','जो स्कीम है वह समझाइए।','उनका मार्जिन दिखाइए।'],say:'सर, जो कंपनी ने मंज़ूर नहीं किया, वह मैं नहीं दे सकता। पर इस लॉट में भी आप ___ कमाते हैं।'},
{q:'डॉक्टर पुराना वादा पूरा न करने की शिकायत करते हैं।',do:['बिना बहाने माफ़ी माँगिए।','अभी ठीक कीजिए या तारीख़ दीजिए।','तारीख़ निभाइए।'],say:'डॉक्टर, आप सही हैं, माफ़ कीजिए। मैं ___ को लाऊँगा और फिर नहीं चूकूँगा।'},
{q:'ऑर्डर तैयार है पर न्यूनतम बिलिंग से कम है।',do:['एक और अच्छा बिकने वाला प्रोडक्ट जोड़िए।','NPD या इम्पैक्ट ब्रांड साथ जोड़िए।','कुल वैल्यू दिखाइए।'],say:'सर, ___ भी जोड़ लेते हैं। फिर बिल न्यूनतम पार करेगा और दोनों समय पर मिलेंगे।'}],
quiz:[
{q:'आपका POB टारगेट मासिक टारगेट का कितना हिस्सा है?',o:['40%','60%','80%','100%'],a:1,e:'POB टारगेट मासिक टारगेट का 60% है, कार्यदिवसों में बँटा।'},
{q:'गिफ़्ट किसे दिए जा सकते हैं?',o:['किसी भी डॉक्टर को','सिर्फ़ लिस्ट डॉक्टरों को','किसी भी केमिस्ट को','जो भी ऑर्डर दे'],a:1,e:'गिफ़्ट सिर्फ़ लिस्ट डॉक्टरों को। सैंपल किसी भी डॉक्टर को दिए जा सकते हैं।'},
{q:'केमिस्ट को पहले क्या बताना चाहिए?',o:['सबसे बड़ा लॉट','सबसे छोटा स्कीम लॉट','खुली यूनिट','कुछ नहीं, इंतज़ार कीजिए'],a:1,e:'सबसे छोटे लॉट से शुरू कीजिए। छोटे पहले ऑर्डर बड़े रिपीट ऑर्डर बनते हैं।'},
{q:'आपने एक दिन छुट्टी ली। आपका रोज़ का POB टारगेट…',o:['वही रहता है','कम होता है','बढ़ता है','रद्द हो जाता है'],a:2,e:'कम कार्यदिवस बचे हैं, इसलिए रोज़ की ज़रूरत बढ़ जाती है।'},
{q:'ऐप कब भरना चाहिए?',o:['रात को','दुकान पर, कॉल के तुरंत बाद','अगली सुबह','हफ़्ते में एक बार'],a:1,e:'ताज़ा डेटा ही सच्चा डेटा है। कॉल के तुरंत बाद भरिए।'},
{q:'डॉक्टर के साथ सबसे अच्छी शुरुआत?',o:['क़ीमत से शुरू','उनके मरीज़ों की बात','प्रतियोगी की बात','सारे ब्रांड दिखाना'],a:1,e:'मरीज़ से शुरू कीजिए, फिर ब्रांड को उस ज़रूरत से जोड़िए।'},
{q:'इम्पैक्ट ब्रांड कहाँ रखने चाहिए?',o:['पीछे की शेल्फ़','काउंटर के नीचे','सामने आँखों के स्तर पर','गोदाम में'],a:2,e:'ग्राहक जो पहले देखता है, वही पहले बिकता है।'},
{q:'केमिस्ट कहता है प्रोडक्ट नहीं चल रहा। पहला क़दम?',o:['स्टॉक वापस लेना','ज़्यादा छूट देना','पास के लिखने वाले डॉक्टर ढूँढना','उनके पास जाना बंद'],a:2,e:'उनके पास प्रिस्क्रिप्शन बनाइए, फिर स्टॉक चलेगा।'},
{q:'माइलस्टोन बोनस के लिए ज़रूरी है…',o:['सिर्फ़ महीने का 100%','सिर्फ़ 17 तारीख़ तक 40%','महीने का 100% और 17 तारीख़ तक 40%','कुछ नहीं'],a:2,e:'माइलस्टोन बोनस के लिए दोनों शर्तें ज़रूरी हैं।'},
{q:'सेलेबल रिटर्न होना चाहिए…',o:['3% तक','10% तक','कितना भी','शून्य'],a:0,e:'इंसेंटिव के लिए सेलेबल रिटर्न 3% या कम होना चाहिए।'},
{q:'आउटलेट कवरेज टारगेट है…',o:['50%','75%','90%','100%'],a:2,e:'आउटलेट कवरेज कम से कम 90% होना चाहिए।'},
{q:'HCP कवरेज टारगेट है…',o:['80%','90%','95%','100%'],a:2,e:'डॉक्टर (HCP) कवरेज कम से कम 95% होना चाहिए।'},
{q:'Raft डॉक्टरों के पास कब जाना है?',o:['किसी भी दिन','TP में उनके ब्रिक के दिन','सिर्फ़ सोमवार','महीने में एक बार'],a:1,e:'जिस दिन TP में उनका ब्रिक हो, उस दिन जाइए।'},
{q:'ऑर्डर न्यूनतम बिलिंग से कम है। आपको…',o:['रद्द करना चाहिए','एक और बिकने वाला प्रोडक्ट जोड़ना चाहिए','वैसे ही बुक करना','स्टॉकिस्ट से अनदेखा करने को कहना'],a:1,e:'एक प्रोडक्ट जोड़कर न्यूनतम पार कीजिए और बास्केट बढ़ाइए।'},
{q:'डिटेलिंग के लिए अच्छी आवाज़?',o:['तेज़ और ऊँची','धीमी, साफ़, रुककर','बहुत धीमी','हमेशा एक सुर'],a:1,e:'धीमी और साफ़, मुख्य फ़ायदे के बाद रुकिए।'}]
};
window.COACH=window.COACH||{};
COACH.bn={
quotes:[
"দিন শুরুর আগেই দিনের পরিকল্পনা করুন। পরিকল্পনা থাকলে CSO বিক্রি করে, না থাকলে শুধু ভিজিট করে।",
"আজ যে কেমিস্টকে বাদ দেবেন, তার অর্ডার নিয়ে যাবে প্রতিযোগী।",
"শেষ দিনে টার্গেটের পেছনে ছুটবেন না। প্রতিদিন একটু একটু করে জিতুন।",
"ডাক্তার মনে রাখেন তাঁদের, যাঁরা কথা রাখেন। যা বলেছিলেন, তা নিয়ে যান।",
"অর্ডার চান। না চাইলে উত্তর সবসময় 'না'।",
"আপনার হাসিই প্রথম প্রোডাক্ট যা আপনি ডিটেল করেন।",
"দশটা ভালো কল কুড়িটা তাড়াহুড়োর কলের চেয়ে ভালো।",
"স্কিম লট মুখস্থ রাখুন। আত্মবিশ্বাসই অর্ডার আনে।",
"যে শেলফে আমাদের ব্র্যান্ড সামনে, সেটা আপনি না থাকলেও বিক্রি হয়।",
"বলার চেয়ে বেশি শুনুন। গ্রাহক নিজেই বলে দেন কীভাবে তাঁকে বিক্রি করতে হবে।",
"রোজকার ছোট POB মিলে বড় মাস তৈরি হয়।",
"অ্যাপ দোকানেই পূরণ করুন, রাতে নয়। টাটকা ডেটাই সত্যি ডেটা।",
"প্রতিটি 'না' কিছু শেখায়। লিখে রাখুন, শুধরে নিন, আবার যান।",
"রিটেলারের সময়ের সম্মান করুন, তিনি আপনার ব্র্যান্ডের সম্মান করবেন।",
"আপনার এলাকা আপনার ব্যবসা। মালিকের মতো চালান।",
"প্রতি অর্ডারে একটা SKU বেশি — এটাই চ্যাম্পিয়নের পরিচয়।",
"প্রতিভা সময়ে না এলে শৃঙ্খলাই জেতে।",
"উইন-উইন চুক্তিই বারবার হয়।",
"সকালে ব্যাগ গুছিয়ে নিন: স্যাম্পল, ইনপুট, অর্ডার বুক, প্রাইস লিস্ট।",
"ঘাটতি পূরণের সবচেয়ে ভালো দিন আজ।",
"প্রতিটি দোকান থেকে বেরোনোর আগে আরও একটা প্রশ্ন করুন।",
"মজবুত সম্পর্ক তৈরি হয় ছোট, নিয়মিত ভিজিটে।",
"ডাক্তার লিখলে কেমিস্টকে রাখতেই হবে। দুজনকে জুড়ে দিন।",
"ধীরে, স্পষ্ট আর উদ্যম নিয়ে বলুন। আপনার গলায় আপনার বিশ্বাস ফোটে।",
"প্রতি সন্ধ্যায় দিনের পর্যালোচনা করুন: কী হল, কী হল না, এরপর কী।",
"বাদ পড়া ভিজিট মানে বাদ পড়া বিক্রি। আবার ঠিক করুন, ভুলবেন না।",
"আপনার রিপোর্ট আপনার আয়না। সৎ রাখুন।",
"প্রতিটি ব্রিকে একটা লুকোনো অর্ডার আছে। খুঁজে বের করুন।",
"প্রতিদিন একটা নতুন জিনিস শিখুন। এক বছরে আপনাকে কেউ থামাতে পারবে না।",
"আমি আপনাকে বিশ্বাস করি। আজ গিয়ে প্রমাণ করুন।"],
prodIntro:"প্রতিটি প্রোডাক্টের সবচেয়ে ছোট স্কিম লট মনে রাখুন। আত্মবিশ্বাসের সঙ্গে লট বললে কেমিস্ট ভরসা করেন আর অর্ডার বড় হয়।",
quizWin:"দারুণ! আপনি নিজের কাজ জানেন। এভাবেই চালিয়ে যান।",
quizTry:"ভালো চেষ্টা। আজকের পাঠ আবার পড়ুন আর কাল চেষ্টা করুন।",
modules:[
{icon:'🩺',title:'ডাক্তারকে কীভাবে ডিটেল করবেন',sub:'শুরু, প্রয়োজন, বার্তা, প্রমাণ, ক্লোজ',steps:[
"ঢোকার আগে দেখে নিন: আগের বার ডাক্তার কী লিখেছিলেন আর আপনি কী কথা দিয়েছিলেন?",
"নাম ধরে সম্ভাষণ করুন, হাসুন, ভিজিট ছোট রাখুন। জিজ্ঞেস করুন: 'ডাক্তারবাবু, দু'মিনিট হবে?'",
"নিজের প্রোডাক্ট নয়, তাঁর রোগী দিয়ে শুরু করুন: 'এই সপ্তাহে কোন ধরনের রোগী বেশি আসছে?'",
"প্রতি ব্র্যান্ডে একটাই মূল বার্তা দিন। এক লাইনে সুবিধা, তারপর একটা প্রমাণ: স্টাডি, লিফলেট বা রোগীর ফল।",
"তাঁর সন্দেহ শান্তভাবে শুনুন। তাঁর কথাটা আবার বলুন, তারপর তথ্য দিয়ে উত্তর দিন।",
"স্পষ্ট অনুরোধে শেষ করুন: 'ডাক্তারবাবু, পরের পাঁচজন রোগীর ওপর একবার দেখুন।'",
"পরের ডাক্তারের কাছে যাওয়ার আগে অ্যাপে ফলাফল লিখুন।"],
says:'বক্তৃতা শেষ করতে নয়, রোগীর সমস্যা মেটাতে ডিটেল করুন।'},
{icon:'💊',title:'কেমিস্টকে কীভাবে ডিটেল করবেন',sub:'স্টক, রোটেশন, স্কিম, অর্ডার',steps:[
"আগে শেলফ দেখুন। আমাদের কোন প্রোডাক্ট আছে, কোনটা নেই, কোনটা প্রতিযোগীর পেছনে?",
"বলুন কাছের কোন ডাক্তাররা আমাদের ব্র্যান্ড লিখছেন। কেমিস্টের কাছে প্রেসক্রিপশনই আসল।",
"স্কিম লট আর তাঁর মার্জিন টাকায় বলুন, শতাংশে নয়।",
"তাঁর বিক্রি অনুযায়ী পরিমাণ বলুন, যাতে স্টক ঘোরে আর মেয়াদ না পেরোয়।",
"সংখ্যা দিয়ে অর্ডার চান: 'আজ Oflin 400-এর 9+1 বুক করে নিই।'",
"বেরোনোর আগে আমাদের প্রোডাক্ট সামনে, চোখের উচ্চতায় রাখতে বলুন।"],
says:'কেমিস্ট কেনেন যখন প্রেসক্রিপশন আর মার্জিন দেখেন। দুটোই দেখান।'},
{icon:'🏪',title:'রিটেলারের সঙ্গে কাজ',sub:'কভারেজ, প্লেসমেন্ট, একাধিক অর্ডার',steps:[
"প্ল্যান মতো ব্রিকের প্রতিটি রিটেলারের কাছে যান। কভারেজ আপনার ইনসেনটিভের KPI।",
"ফাঁক খুঁজুন: আমাদের কোন দ্রুত-বিক্রি প্রোডাক্ট তাঁর শেলফে নেই?",
"প্রথমে সবচেয়ে ছোট স্কিম লট দিন। ছোট প্রথম অর্ডার বড় রিপিট অর্ডার হয়।",
"একাধিক প্রোডাক্ট বুক করুন। বাস্কেট বলুন: একটা ইমপ্যাক্ট ব্র্যান্ড, একটা NPD, একটা রেগুলার।",
"সেদিনই স্টকিস্টের মাধ্যমে ডেলিভারি নিশ্চিত করুন।",
"ধন্যবাদ দিন আর বলুন কবে আবার আসবেন।"],
says:'প্রতিটি রিটেলার আমাদের কোম্পানির ছোট শাখা। প্রতিটি শাখা ভরে তুলুন।'},
{icon:'🎯',title:'কার্যকর পিচিং',sub:'হুক, সুবিধা, প্রমাণ, অনুরোধ',steps:[
"হুক: তাঁর রোগী বা বিক্রি নিয়ে প্রশ্ন দিয়ে শুরু করুন।",
"সুবিধা: এক বাক্যে বলুন তাঁর জন্য কী বদলাবে।",
"প্রমাণ: একটা তথ্য দেখান। একটা জোরালো তথ্য পাঁচটা দুর্বল তথ্যের চেয়ে ভালো।",
"অনুরোধ: স্পষ্ট করে চান, তারপর চুপ থাকুন। তাঁকে উত্তর দিতে দিন।",
"প্রতিটি ইমপ্যাক্ট ব্র্যান্ডের পিচ ৩০ সেকেন্ডে বলতে না পারা পর্যন্ত অনুশীলন করুন।"],
says:'৩০ সেকেন্ডে বলতে না পারলে, আপনি এখনও বলার জন্য তৈরি নন।'},
{icon:'🗣️',title:'গলা, চোখে চোখ আর শরীরী ভাষা',sub:'কীভাবে বলছেন, সেটাই আসল',steps:[
"স্বাভাবিকের চেয়ে একটু ধীরে বলুন। মূল সুবিধার পরে থামুন।",
"সুবিধায় উদ্যম বাড়ান, তথ্য বলার সময় গলা নামান। সুর বদলালে মনোযোগ থাকে।",
"বলার সময় গ্রাহকের চোখে তাকান। লিফলেটে তাকান শুধু দেখানোর সময়।",
"সোজা দাঁড়ান, হাত খোলা ও দৃশ্যমান রাখুন, কলের সময় ফোন সরিয়ে রাখুন।",
"তাঁর গতির সঙ্গে মিলিয়ে চলুন: ব্যস্ত থাকলে ছোট, আরামে থাকলে বিস্তারিত।",
"দৃঢ়, বিনম্র ধন্যবাদ আর হাসি দিয়ে শেষ করুন।"],
says:'মানুষ ব্র্যান্ডের আগে বিশ্বাস কেনে। গলায় আর চোখে সেটা দেখান।'},
{icon:'🤝',title:'সম্পর্ক গড়া',sub:'ছোট নিয়মিত কাজে ভরসা বাড়ে',steps:[
"TP অনুযায়ী নিয়মিত যান। কথা দেওয়া দিনে পৌঁছনোই ভরসা তৈরি করে।",
"ছোট বিষয় মনে রাখুন: চেম্বারের সময়, ব্যস্ত দিন, পারিবারিক অনুষ্ঠান। লিখে রাখুন।",
"তাঁর সমস্যা মেটান: শর্টেজ, এক্সপায়ারি রিটার্ন, স্কিম ক্রেডিট। শেষ না হওয়া পর্যন্ত ফলো-আপ করুন।",
"কখনও বেশি প্রতিশ্রুতি দেবেন না। কম কথা দিন, বেশি করুন।",
"পেশাদার থাকুন। গিফট ও ইনপুট শুধু কোম্পানির নীতি মেনে, শুধু লিস্ট ডাক্তারদের।"],
says:'সম্পর্ক একটা বড় মিটিংয়ে তৈরি হয় না। তৈরি হয় একশোটা ছোট ভিজিটে।'},
{icon:'⚖️',title:'বোঝানো আর উইন-উইন',sub:'আপত্তি সামলান, সৎভাবে ক্লোজ করুন',steps:[
"পুরো আপত্তিটা শুনুন। মাঝে বাধা দেবেন না।",
"আবার বলুন: 'তাহলে আপনার চিন্তা দাম নিয়ে, তাই তো?' এতে সম্মান প্রকাশ পায়।",
"মূল্য দিয়ে উত্তর দিন: প্রতি ইউনিট মার্জিন, দ্রুত রোটেশন, লিখছেন এমন ডাক্তার।",
"চাপ নয়, পছন্দ দিন: '9+1 দিয়ে শুরু করব, না 27+3?'",
"দু'পক্ষের লাভ নিশ্চিত করুন: তিনি সহজে বিক্রি করবেন, আমরা বাড়ব। জোর করে নেওয়া অর্ডার রিটার্ন হয়ে ফেরে।"],
says:'উইন-উইন চুক্তিই প্রতি মাসে আবার হয়।'},
{icon:'📦',title:'ব্র্যান্ড প্লেসমেন্ট আর একাধিক অর্ডার',sub:'শেলফ, দৃশ্যমানতা, বাস্কেট সেলিং',steps:[
"ইমপ্যাক্ট ব্র্যান্ডের জন্য চোখের উচ্চতায় জায়গা চান: Deca, Rloc, Skinlite, Dexona।",
"প্রোডাক্ট সামনের দিকে মুখ করে, পরিষ্কার রাখুন। নষ্ট বা মেয়াদ-ঘনিয়ে আসা প্যাক সরান।",
"বাস্কেট নিয়ম: প্রতি অর্ডারে আগের বারের চেয়ে একটা SKU বেশি যোগ করুন।",
"প্রোডাক্ট জুড়ুন: Skinlite Cream-এর সঙ্গে Skinlite Facewash; Rloc ট্যাবলেটের সঙ্গে Rloc Raft।",
"ভালো প্লেসমেন্টের ছবি তুলে অ্যাপে আপলোড করুন।"],
says:'গ্রাহক যা আগে দেখেন, সেটাই আগে বিক্রি হয়।'},
{icon:'🧮',title:'পরিমাণ, লট আর ন্যূনতম বিলিং',sub:'লটে কথা বলুন, খোলা ইউনিটে নয়',steps:[
"প্রতিটি প্রোডাক্টের স্কিম লট জানুন, যেমন Oflin 400: 9+1, Skinlite Cream 15 g: 50+10।",
"আগে সবচেয়ে ছোট লট বলুন, তারপর বেশি ফ্রি মালের জন্য বড় লট দেখান।",
"বুক করার আগে স্টকিস্টের ন্যূনতম বিলিং দেখুন। প্রোডাক্ট মিলিয়ে সেটা পার করুন।",
"স্কিম থাকলে লটের কম খোলা পরিমাণ কখনও বুক করবেন না। তাঁর ফ্রি মাল হাতছাড়া হবে।",
"Products ট্যাবের অর্ডার ভ্যালু ক্যালকুলেটরে সঙ্গে সঙ্গে মূল্য বলে দিন।"],
says:'যে CSO নিজের সংখ্যা জানেন, তিনি কাউন্টারে কখনও আটকান না।'},
{icon:'📈',title:'রোজকার POB শৃঙ্খলা',sub:'প্রতিদিন, দিনের টার্গেট',steps:[
"আপনার POB টার্গেট মাসিক টার্গেটের ৬০ শতাংশ, কর্মদিবসে ভাগ করা।",
"কোনো দিন বাদ গেলে বা ছুটি নিলে রোজকার টার্গেট বাড়ে। প্রতি সকালে Progress ট্যাব দেখুন।",
"আজকের ব্রিক থেকে দিনের POB ঠিক করুন: কোন কেমিস্ট, কোন প্রোডাক্ট, কতটা।",
"দোকান ফাঁকা থাকতে দুপুরের আগে অর্ডার বুক করুন। দুপুরের পরে ডাক্তার।",
"শেষ দিনের জন্য অর্ডার ফেলে রাখবেন না। দেরির অর্ডার সবার ক্ষতি করে।"],
says:'টার্গেট মাসের শেষে পাহাড় নয়। প্রতিদিনের একটা ছোট পদক্ষেপ।'},
{icon:'🔍',title:'পরিস্থিতি বিশ্লেষণ',sub:'কাজের আগে ব্রিকটা পড়ুন',steps:[
"গত মাস দেখুন: কে অর্ডার দিয়েছে, কে বন্ধ করেছে, কে কখনও দেয়নি।",
"ডাক্তার দেখুন: কে আমাদের ইমপ্যাক্ট ব্র্যান্ড লেখেন, কে লেখেন না।",
"ফাঁক খুঁজুন: লিখছেন এমন ডাক্তার অথচ কাছে স্টক নেই, বা স্টক আছে অথচ লেখার কেউ নেই।",
"প্রতিটি ফাঁকের জন্য একটা কাজ ঠিক করুন আর আজই করুন।",
"সন্ধ্যায় দেখুন কী বদলাল আর প্ল্যান আপডেট করুন।"],
says:'একই ভাবে বেশি খাটবেন না। ফাঁক খুঁজুন, বুদ্ধি করে কাজ করুন।'},
{icon:'🎒',title:'সকালের প্রস্তুতি',sub:'দশ মিনিট যা দিন ঠিক করে',steps:[
"Today খুলুন: প্ল্যান, POB টার্গেট আর বাকি কাজ পড়ুন।",
"প্ল্যান অনুযায়ী আজকের ডাক্তারদের জন্য স্যাম্পল আর ইনপুট নিন।",
"আজ যে ব্র্যান্ডে জোর দেবেন, তাদের স্কিম লট ঝালিয়ে নিন।",
"প্রথম তিনটে কল আর প্রত্যেকের কাছে প্রত্যাশিত অর্ডার ঠিক করুন।",
"সময়মতো বেরোন। প্রথম কলই সারা দিনের উদ্যম ঠিক করে।"],
says:'সকাল জিতুন, দিন জিতে যাবেন।'}],
situations:[
{q:'কেমিস্ট বলছেন: "আপনার প্রোডাক্ট চলছে না।"',do:['জিজ্ঞেস করুন কাছের কোন ডাক্তাররা এই রোগ দেখেন।','আজই সেই ডাক্তারদের ব্র্যান্ড ডিটেল করুন।','ফিরে এসে কেমিস্টকে বলুন কোন ডাক্তার লিখবেন।','স্টক ঘোরাতে সবচেয়ে ছোট লট বলুন।'],say:'দাদা, ডা. ___ এই সপ্তাহ থেকে লিখবেন। শুধু ছোট লটটা রাখুন, আমি চালিয়ে দেব।'},
{q:'কেমিস্ট বলছেন: "প্রতিযোগী বেশি স্কিম দেয়।"',do:['শুধু ফ্রি মাল নয়, প্রতি ইউনিট মার্জিন তুলনা করুন।','তাঁর এলাকায় আমাদের প্রেসক্রিপশন সাপোর্টের কথা বলুন।','তাঁর বিক্রি অনুযায়ী সঠিক লট দিন।'],say:'দাদা, ওদের স্কিম বড় কিন্তু মাল পড়ে থাকে। আমাদেরটা ডাক্তার লেখেন, তাই তাড়াতাড়ি বিক্রি হয়, আয়ও বেশি।'},
{q:'ডাক্তার বলছেন: "আজ সময় নেই।"',do:['সম্মান করুন। এক লাইনের বার্তা দিন।','লিফলেট বা স্যাম্পল রেখে আসুন।','ভালো সময় জিজ্ঞেস করে লিখে রাখুন।'],say:'ডাক্তারবাবু, শুধু এক লাইন: ___। দু\'মিনিটের জন্য কবে দেখা করতে পারি?'},
{q:'ডাক্তার বলছেন: "আপনার প্রোডাক্ট দামি।"',do:['রোগীর ফলাফল আর নিয়মিত সেবনের কথা বলুন।','প্রতিদিনের চিকিৎসার খরচ তুলনা করুন।','সঠিক রোগী গোষ্ঠীর জন্য বলুন।'],say:'ডাক্তারবাবু, দিনে সামান্য বেশি, কিন্তু রোগী ভালো ফল পান, তাই খুশি হয়ে আপনার কাছেই ফেরেন।'},
{q:'রিটেলারের শেলফে জায়গা নেই।',do:['একটা ইমপ্যাক্ট ব্র্যান্ডের জন্য সামনে একটু জায়গা চান।','অনুমতি নিয়ে নষ্ট বা মেয়াদোত্তীর্ণ স্টক সরান।','সবচেয়ে ছোট লট দিন।'],say:'শুধু এই ছোট কোণটা একটা প্রোডাক্টের জন্য দিন। দু\'সপ্তাহে না চললে আমি ফেরত নেব।'},
{q:'স্টকিস্টের কাছে আমাদের প্রোডাক্ট নেই।',do:['সেদিনই রতন রায় আর স্টকিস্টকে জানান।','তবুও অর্ডার বুক করুন, ডেলিভারির তারিখ লিখুন।','কেমিস্টকে জানান স্টক কবে আসবে।'],say:'দাদা, স্টক ___ তারিখে আসছে। আপনার অর্ডার বুক করে রেখেছি, যাতে আপনি আগে পান।'},
{q:'আপনি POB টার্গেটে পিছিয়ে।',do:['Progress ট্যাবে রোজকার সঠিক প্রয়োজন দেখুন।','যাঁরা আগে অর্ডার দিয়েছেন কিন্তু এই মাসে দেননি, তাঁদের তালিকা করুন।','আগে তাঁদের কাছে গিয়ে নিয়মিত লট বুক করুন।'],say:'দাদা, আপনার আগের অর্ডার ছিল ___। আজ সেটাই আবার করি?'},
{q:'কেমিস্ট এমন স্কিম চাইছেন যা নেই।',do:['ভদ্র ও সৎ থাকুন। যা নেই তার প্রতিশ্রুতি কখনও দেবেন না।','যে স্কিম আছে তা বুঝিয়ে বলুন।','তাঁর মার্জিন দেখান।'],say:'দাদা, কোম্পানি যা অনুমোদন করেনি তা আমি দিতে পারি না। কিন্তু এই লটেও আপনি ___ আয় করবেন।'},
{q:'ডাক্তার পুরনো প্রতিশ্রুতি না রাখার অভিযোগ করছেন।',do:['অজুহাত ছাড়া ক্ষমা চান।','এখনই ঠিক করুন বা তারিখ দিন।','তারিখ রাখুন।'],say:'ডাক্তারবাবু, আপনি ঠিক, দুঃখিত। ___ তারিখে নিয়ে আসব, আর ভুল হবে না।'},
{q:'অর্ডার তৈরি কিন্তু ন্যূনতম বিলিংয়ের কম।',do:['আরও একটা ভালো-চলা প্রোডাক্ট যোগ করুন।','NPD বা ইমপ্যাক্ট ব্র্যান্ড জুড়ুন।','মোট মূল্য দেখান।'],say:'দাদা, ___-ও যোগ করি। তাহলে বিল ন্যূনতম পার হবে আর দুটোই সময়ে পাবেন।'}],
quiz:[
{q:'আপনার POB টার্গেট মাসিক টার্গেটের কত অংশ?',o:['40%','60%','80%','100%'],a:1,e:'POB টার্গেট মাসিক টার্গেটের ৬০%, কর্মদিবসে ভাগ করা।'},
{q:'গিফট কাকে দেওয়া যায়?',o:['যেকোনো ডাক্তার','শুধু লিস্ট ডাক্তার','যেকোনো কেমিস্ট','যে অর্ডার দেয়'],a:1,e:'গিফট শুধু লিস্ট ডাক্তারদের। স্যাম্পল যেকোনো ডাক্তারকে দেওয়া যায়।'},
{q:'কেমিস্টকে প্রথমে কী বলবেন?',o:['সবচেয়ে বড় লট','সবচেয়ে ছোট স্কিম লট','খোলা ইউনিট','কিছু না, অপেক্ষা'],a:1,e:'ছোট লট দিয়ে শুরু করুন। ছোট প্রথম অর্ডার বড় রিপিট অর্ডার হয়।'},
{q:'আপনি এক দিন ছুটি নিয়েছেন। রোজকার POB টার্গেট…',o:['একই থাকে','কমে','বাড়ে','বাতিল হয়'],a:2,e:'কর্মদিবস কম বাকি, তাই রোজকার প্রয়োজন বাড়ে।'},
{q:'অ্যাপ কখন পূরণ করবেন?',o:['রাতে','দোকানেই, কলের ঠিক পরে','পরের সকালে','সপ্তাহে একবার'],a:1,e:'টাটকা ডেটাই সত্যি ডেটা। কলের ঠিক পরে পূরণ করুন।'},
{q:'ডাক্তারের সঙ্গে সেরা শুরু?',o:['দাম দিয়ে','তাঁর রোগীর কথা','প্রতিযোগীর কথা','সব ব্র্যান্ড দেখানো'],a:1,e:'রোগী দিয়ে শুরু করুন, তারপর ব্র্যান্ডকে সেই প্রয়োজনের সঙ্গে জুড়ুন।'},
{q:'ইমপ্যাক্ট ব্র্যান্ড কোথায় রাখা উচিত?',o:['পেছনের শেলফ','কাউন্টারের নিচে','সামনে চোখের উচ্চতায়','গুদামে'],a:2,e:'গ্রাহক যা আগে দেখেন, সেটাই আগে বিক্রি হয়।'},
{q:'কেমিস্ট বলছেন প্রোডাক্ট চলছে না। প্রথম পদক্ষেপ?',o:['স্টক ফেরত নেওয়া','বেশি ছাড় দেওয়া','কাছের লিখছেন এমন ডাক্তার খোঁজা','যাওয়া বন্ধ'],a:2,e:'তাঁর কাছাকাছি প্রেসক্রিপশন তৈরি করুন, তবেই স্টক চলবে।'},
{q:'মাইলস্টোন বোনাসের জন্য দরকার…',o:['শুধু মাসের 100%','শুধু ১৭ তারিখে 40%','মাসের 100% এবং ১৭ তারিখে 40%','কিছু না'],a:2,e:'মাইলস্টোন বোনাসে দুটো শর্তই দরকার।'},
{q:'সেলেবল রিটার্ন হতে হবে…',o:['3% পর্যন্ত','10% পর্যন্ত','যেকোনো','শূন্য'],a:0,e:'ইনসেনটিভের জন্য সেলেবল রিটার্ন 3% বা কম হতে হবে।'},
{q:'আউটলেট কভারেজ টার্গেট…',o:['50%','75%','90%','100%'],a:2,e:'আউটলেট কভারেজ অন্তত 90% হতে হবে।'},
{q:'HCP কভারেজ টার্গেট…',o:['80%','90%','95%','100%'],a:2,e:'ডাক্তার (HCP) কভারেজ অন্তত 95% হতে হবে।'},
{q:'Raft ডাক্তারদের কাছে কখন যাবেন?',o:['যেকোনো দিন','TP-তে তাঁদের ব্রিকের দিন','শুধু সোমবার','মাসে একবার'],a:1,e:'TP-তে যেদিন তাঁদের ব্রিক, সেদিন যান।'},
{q:'অর্ডার ন্যূনতম বিলিংয়ের কম। আপনি…',o:['বাতিল করবেন','আরেকটা চলা প্রোডাক্ট যোগ করবেন','এমনিই বুক করবেন','স্টকিস্টকে উপেক্ষা করতে বলবেন'],a:1,e:'একটা প্রোডাক্ট যোগ করে ন্যূনতম পার করুন, বাস্কেট বাড়ান।'},
{q:'ডিটেলিংয়ের জন্য ভালো গলা?',o:['দ্রুত আর জোরে','ধীর, স্পষ্ট, থেমে থেমে','খুব আস্তে','সবসময় এক সুরে'],a:1,e:'ধীর ও স্পষ্ট, মূল সুবিধার পরে একটু থামুন।'}]
};
window.COACH=window.COACH||{};
COACH.as={
quotes:[
"দিন আৰম্ভ হোৱাৰ আগতেই দিনটোৰ পৰিকল্পনা কৰক। পৰিকল্পনা থকা CSO-এ বিক্ৰী কৰে, নথকাজনে কেৱল ভিজিট কৰে।",
"আজি যি কেমিষ্টক এৰি যাব, তেওঁৰ অৰ্ডাৰ প্ৰতিযোগীয়ে লৈ যাব।",
"শেষ দিনা টাৰ্গেটৰ পাছত দৌৰি নাযাব। প্ৰতিদিনে অলপ অলপকৈ জিকক।",
"ডাক্তৰে তেওঁলোককে মনত ৰাখে, যিসকলে কথা ৰাখে। যি কৈছিল, সেয়া লৈ যাওক।",
"অৰ্ডাৰ খুজক। নুখুজিলে উত্তৰ সদায় 'নহয়'।",
"আপোনাৰ হাঁহিয়েই প্ৰথম প্ৰডাক্ট, যাক আপুনি ডিটেল কৰে।",
"দহটা ভাল কল কুৰিটা খৰখেদাৰ কলতকৈ ভাল।",
"স্কীম লট মুখস্থ ৰাখক। আত্মবিশ্বাসেই অৰ্ডাৰ আনে।",
"যি শ্বেলফত আমাৰ ব্ৰেণ্ড আগত থাকে, সেয়া আপুনি নাথাকিলেও বিক্ৰী হয়।",
"কোৱাতকৈ বেছি শুনক। গ্ৰাহকে নিজেই কৈ দিয়ে কেনেকৈ তেওঁক বিক্ৰী কৰিব লাগে।",
"প্ৰতিদিনৰ সৰু POB-এ ডাঙৰ মাহ গঢ়ে।",
"এপ দোকানতে পূৰণ কৰক, ৰাতি নহয়। সতেজ ডেটাই সঁচা ডেটা।",
"প্ৰতিটো 'নহয়'-এ কিবা শিকায়। লিখি ৰাখক, শুধৰাওক, আকৌ যাওক।",
"ৰিটেইলাৰৰ সময়ক সন্মান কৰক, তেওঁ আপোনাৰ ব্ৰেণ্ডক সন্মান কৰিব।",
"আপোনাৰ এলেকা আপোনাৰ ব্যৱসায়। মালিকৰ দৰে চলাওক।",
"প্ৰতিটো অৰ্ডাৰত এটা SKU বেছি — এয়াই চেম্পিয়নৰ চিন।",
"প্ৰতিভা সময়ত নাহিলে অনুশাসনেই জিকে।",
"উইন-উইন চুক্তিহে বাৰে বাৰে হয়।",
"ৰাতিপুৱা বেগ সাজু কৰক: চেম্পল, ইনপুট, অৰ্ডাৰ বুক, প্ৰাইচ লিষ্ট।",
"ঘাটি পূৰণৰ আটাইতকৈ ভাল দিন আজি।",
"প্ৰতিখন দোকানৰ পৰা ওলোৱাৰ আগতে আৰু এটা প্ৰশ্ন সোধক।",
"শক্তিশালী সম্পৰ্ক সৰু, নিয়মীয়া ভিজিটত গঢ় লয়।",
"ডাক্তৰে লিখিলে কেমিষ্টে ৰাখিবই লাগিব। দুয়োকে সংযোগ কৰক।",
"লাহে লাহে, স্পষ্টকৈ আৰু উৎসাহেৰে কওক। আপোনাৰ মাতত আপোনাৰ বিশ্বাস ফুটি উঠে।",
"প্ৰতি সন্ধিয়া দিনটোৰ পৰ্যালোচনা কৰক: কি হ'ল, কি নহ'ল, এতিয়া কি।",
"বাদ পৰা ভিজিট মানে বাদ পৰা বিক্ৰী। আকৌ ঠিক কৰক, পাহৰি নাযাব।",
"আপোনাৰ ৰিপৰ্ট আপোনাৰ দাপোন। সৎ ৰাখক।",
"প্ৰতিটো ব্ৰিকত এটা লুকাই থকা অৰ্ডাৰ আছে। বিচাৰি উলিয়াওক।",
"প্ৰতিদিনে এটা নতুন কথা শিকক। এবছৰত আপোনাক কোনেও ৰখাব নোৱাৰিব।",
"মই আপোনাক বিশ্বাস কৰোঁ। আজি গৈ প্ৰমাণ কৰক।"],
prodIntro:"প্ৰতিটো প্ৰডাক্টৰ আটাইতকৈ সৰু স্কীম লট মনত ৰাখক। আত্মবিশ্বাসেৰে লট ক'লে কেমিষ্টে ভৰসা কৰে আৰু অৰ্ডাৰ ডাঙৰ হয়।",
quizWin:"বহুত ভাল! আপুনি নিজৰ কাম জানে। এনেদৰেই আগবাঢ়ক।",
quizTry:"ভাল চেষ্টা। আজিৰ পাঠ আকৌ পঢ়ক আৰু কাইলৈ চেষ্টা কৰক।",
modules:[
{icon:'🩺',title:'ডাক্তৰক কেনেকৈ ডিটেল কৰিব',sub:'আৰম্ভণি, প্ৰয়োজন, বাৰ্তা, প্ৰমাণ, ক্লোজ',steps:[
"সোমোৱাৰ আগতে চাওক: যোৱাবাৰ ডাক্তৰে কি লিখিছিল আৰু আপুনি কি প্ৰতিশ্ৰুতি দিছিল?",
"নাম লৈ সম্ভাষণ কৰক, হাঁহক, ভিজিট চুটি ৰাখক। সোধক: 'ডাক্তৰ, দুমিনিট সময় হ'ব নে?'",
"নিজৰ প্ৰডাক্টৰে নহয়, তেওঁৰ ৰোগীৰে আৰম্ভ কৰক: 'এই সপ্তাহত কেনেধৰণৰ ৰোগী বেছি আহিছে?'",
"প্ৰতিটো ব্ৰেণ্ডত এটাই মূল বাৰ্তা দিয়ক। এশাৰীত সুবিধা, তাৰপিছত এটা প্ৰমাণ: ষ্টাডী, লিফলেট বা ৰোগীৰ ফলাফল।",
"তেওঁৰ সন্দেহ শান্তভাৱে শুনক। তেওঁৰ কথা পুনৰ কওক, তাৰপিছত তথ্যৰে উত্তৰ দিয়ক।",
"স্পষ্ট অনুৰোধেৰে শেষ কৰক: 'ডাক্তৰ, পিছৰ পাঁচজন ৰোগীৰ ওপৰত এবাৰ চাওক।'",
"পিছৰ ডাক্তৰৰ ওচৰ পোৱাৰ আগতে এপত ফলাফল লিখক।"],
says:'ভাষণ শেষ কৰিবলৈ নহয়, ৰোগীৰ সমস্যা সমাধান কৰিবলৈ ডিটেল কৰক।'},
{icon:'💊',title:'কেমিষ্টক কেনেকৈ ডিটেল কৰিব',sub:'ষ্টক, ৰ\'টেচন, স্কীম, অৰ্ডাৰ',steps:[
"প্ৰথমে শ্বেলফ চাওক। আমাৰ কোনবোৰ প্ৰডাক্ট আছে, কোনবোৰ নাই, কোনবোৰ প্ৰতিযোগীৰ পাছত?",
"কওক ওচৰৰ কোন ডাক্তৰে আমাৰ ব্ৰেণ্ড লিখিছে। কেমিষ্টৰ বাবে প্ৰেছক্ৰিপচনেই আচল।",
"স্কীম লট আৰু তেওঁৰ মাৰ্জিন টকাত কওক, শতাংশত নহয়।",
"তেওঁৰ বিক্ৰী অনুসৰি পৰিমাণ কওক, যাতে ষ্টক ঘূৰে আৰু মিয়াদ উকলি নাযায়।",
"সংখ্যাৰে অৰ্ডাৰ খুজক: 'আজি Oflin 400-ৰ 9+1 বুক কৰি লওঁ।'",
"ওলোৱাৰ আগতে আমাৰ প্ৰডাক্ট আগত, চকুৰ উচ্চতাত ৰাখিবলৈ কওক।"],
says:'কেমিষ্টে কিনে যেতিয়া প্ৰেছক্ৰিপচন আৰু মাৰ্জিন দেখে। দুয়োটা দেখুৱাওক।'},
{icon:'🏪',title:'ৰিটেইলাৰৰ সৈতে কাম',sub:'কভাৰেজ, প্লেচমেণ্ট, একাধিক অৰ্ডাৰ',steps:[
"প্লেন অনুসৰি ব্ৰিকৰ প্ৰতিজন ৰিটেইলাৰৰ ওচৰলৈ যাওক। কভাৰেজ আপোনাৰ ইনচেণ্টিভৰ KPI।",
"খালী ঠাই বিচাৰক: আমাৰ কোনটো সোনকালে বিক্ৰী হোৱা প্ৰডাক্ট তেওঁৰ শ্বেলফত নাই?",
"প্ৰথমে আটাইতকৈ সৰু স্কীম লট দিয়ক। সৰু প্ৰথম অৰ্ডাৰ ডাঙৰ ৰিপিট অৰ্ডাৰ হয়।",
"একাধিক প্ৰডাক্ট বুক কৰক। বাস্কেট কওক: এটা ইম্পেক্ট ব্ৰেণ্ড, এটা NPD, এটা নিয়মীয়া।",
"সেইদিনাই ষ্টকিষ্টৰ জৰিয়তে ডেলিভাৰী নিশ্চিত কৰক।",
"ধন্যবাদ দিয়ক আৰু কওক কেতিয়া আকৌ আহিব।"],
says:'প্ৰতিজন ৰিটেইলাৰ আমাৰ কোম্পানীৰ সৰু শাখা। প্ৰতিটো শাখা ভৰাই তোলক।'},
{icon:'🎯',title:'ফলপ্ৰসূ পিচিং',sub:'হুক, সুবিধা, প্ৰমাণ, অনুৰোধ',steps:[
"হুক: তেওঁৰ ৰোগী বা বিক্ৰীৰ বিষয়ে প্ৰশ্নৰে আৰম্ভ কৰক।",
"সুবিধা: এটা বাক্যত কওক তেওঁৰ বাবে কি সলনি হ'ব।",
"প্ৰমাণ: এটা তথ্য দেখুৱাওক। এটা শক্তিশালী তথ্য পাঁচটা দুৰ্বল তথ্যতকৈ ভাল।",
"অনুৰোধ: স্পষ্টকৈ খুজক, তাৰপিছত মনে মনে থাকক। তেওঁক উত্তৰ দিবলৈ দিয়ক।",
"প্ৰতিটো ইম্পেক্ট ব্ৰেণ্ডৰ পিচ ৩০ ছেকেণ্ডত ক'ব নোৱাৰালৈকে অনুশীলন কৰক।"],
says:'৩০ ছেকেণ্ডত ক\'ব নোৱাৰিলে, আপুনি এতিয়াও ক\'বলৈ সাজু নহয়।'},
{icon:'🗣️',title:'মাত, চকুত চকু আৰু শৰীৰৰ ভাষা',sub:'কেনেকৈ কয়, সেইটোৱেই আচল',steps:[
"সাধাৰণতকৈ অলপ লাহে কওক। মূল সুবিধাৰ পিছত ৰওক।",
"সুবিধাত উৎসাহ বঢ়াওক, তথ্য কওঁতে মাত নমাওক। সুৰ সলনি হ'লে মনোযোগ থাকে।",
"কওঁতে গ্ৰাহকৰ চকুলৈ চাওক। লিফলেটলৈ কেৱল দেখুওৱাৰ সময়ত চাওক।",
"পোন হৈ থিয় হওক, হাত খোলা আৰু দেখা পোৱা ৰাখক, কলৰ সময়ত ফোন আঁতৰাই ৰাখক।",
"তেওঁৰ গতিৰ সৈতে মিলাই চলক: ব্যস্ত হ'লে চুটি, আৰামত থাকিলে বিতং।",
"দৃঢ়, বিনম্ৰ ধন্যবাদ আৰু হাঁহিৰে শেষ কৰক।"],
says:'মানুহে ব্ৰেণ্ডৰ আগতে বিশ্বাস কিনে। মাত আৰু চকুৰে সেয়া দেখুৱাওক।'},
{icon:'🤝',title:'সম্পৰ্ক গঢ়া',sub:'সৰু নিয়মীয়া কামত ভৰসা বাঢ়ে',steps:[
"TP অনুসৰি নিয়মীয়াকৈ যাওক। প্ৰতিশ্ৰুতি দিয়া দিনা উপস্থিত হোৱাটোৱে ভৰসা গঢ়ে।",
"সৰু কথা মনত ৰাখক: চেম্বাৰৰ সময়, ব্যস্ত দিন, পাৰিবাৰিক অনুষ্ঠান। লিখি ৰাখক।",
"তেওঁৰ সমস্যা সমাধান কৰক: চৰ্টেজ, এক্সপায়াৰী ৰিটাৰ্ণ, স্কীম ক্ৰেডিট। শেষ নোহোৱালৈকে ফল'-আপ কৰক।",
"কেতিয়াও বেছি প্ৰতিশ্ৰুতি নিদিব। কম কওক, বেছি কৰক।",
"পেছাদাৰী হওক। গিফট আৰু ইনপুট কেৱল কোম্পানীৰ নীতি অনুসৰি, কেৱল লিষ্ট ডাক্তৰক।"],
says:'সম্পৰ্ক এখন ডাঙৰ মিটিঙত গঢ় নলয়। গঢ় লয় এশটা সৰু ভিজিটত।'},
{icon:'⚖️',title:'বুজোৱা আৰু উইন-উইন',sub:'আপত্তি সামৰক, সৎভাৱে ক্লোজ কৰক',steps:[
"সম্পূৰ্ণ আপত্তিটো শুনক। মাজতে বাধা নিদিব।",
"পুনৰ কওক: 'তেন্তে আপোনাৰ চিন্তা দামক লৈ, নহয় নে?' ইয়াত সন্মান প্ৰকাশ পায়।",
"মূল্যৰে উত্তৰ দিয়ক: প্ৰতি ইউনিট মাৰ্জিন, সোনকালে ৰ'টেচন, লিখি থকা ডাক্তৰ।",
"হেঁচা নহয়, বিকল্প দিয়ক: '9+1-ৰে আৰম্ভ কৰিম নে 27+3-ৰে?'",
"দুয়োপক্ষৰ লাভ নিশ্চিত কৰক: তেওঁ সহজে বিক্ৰী কৰিব, আমি বাঢ়িম। জোৰকৈ লোৱা অৰ্ডাৰ ৰিটাৰ্ণ হৈ উভতি আহে।"],
says:'উইন-উইন চুক্তিহে প্ৰতি মাহে পুনৰ হয়।'},
{icon:'📦',title:'ব্ৰেণ্ড প্লেচমেণ্ট আৰু একাধিক অৰ্ডাৰ',sub:'শ্বেলফ, দৃশ্যমানতা, বাস্কেট চেলিং',steps:[
"ইম্পেক্ট ব্ৰেণ্ডৰ বাবে চকুৰ উচ্চতাত ঠাই খুজক: Deca, Rloc, Skinlite, Dexona।",
"প্ৰডাক্ট আগফালে মুখ কৰি, চাফা ৰাখক। নষ্ট বা মিয়াদ ওচৰ চপা পেক আঁতৰাওক।",
"বাস্কেট নিয়ম: প্ৰতিটো অৰ্ডাৰত আগৰবাৰতকৈ এটা SKU বেছি যোগ কৰক।",
"প্ৰডাক্ট সংযোগ কৰক: Skinlite Cream-ৰ সৈতে Skinlite Facewash; Rloc টেবলেটৰ সৈতে Rloc Raft।",
"ভাল প্লেচমেণ্টৰ ফটো তুলি এপত আপলোড কৰক।"],
says:'গ্ৰাহকে যি আগতে দেখে, সেয়াই আগতে বিক্ৰী হয়।'},
{icon:'🧮',title:'পৰিমাণ, লট আৰু নূন্যতম বিলিং',sub:'লটত কথা কওক, খোলা ইউনিটত নহয়',steps:[
"প্ৰতিটো প্ৰডাক্টৰ স্কীম লট জানক, যেনে Oflin 400: 9+1, Skinlite Cream 15 g: 50+10।",
"প্ৰথমে আটাইতকৈ সৰু লট কওক, তাৰপিছত বেছি ফ্ৰী মালৰ বাবে ডাঙৰ লট দেখুৱাওক।",
"বুক কৰাৰ আগতে ষ্টকিষ্টৰ নূন্যতম বিলিং চাওক। প্ৰডাক্ট মিলাই সেয়া পাৰ কৰক।",
"স্কীম থাকিলে লটতকৈ কম খোলা পৰিমাণ কেতিয়াও বুক নকৰিব। তেওঁৰ ফ্ৰী মাল হেৰাব।",
"Products টেবৰ অৰ্ডাৰ ভেলু কেলকুলেটৰেৰে লগে লগে মূল্য কৈ দিয়ক।"],
says:'যি CSO-এ নিজৰ সংখ্যা জানে, তেওঁ কাউণ্টাৰত কেতিয়াও আটকি নাযায়।'},
{icon:'📈',title:'প্ৰতিদিনৰ POB অনুশাসন',sub:'প্ৰতিদিনে, দিনৰ টাৰ্গেট',steps:[
"আপোনাৰ POB টাৰ্গেট মাহেকীয়া টাৰ্গেটৰ ৬০ শতাংশ, কৰ্মদিৱসত ভাগ কৰা।",
"কোনো দিন বাদ পৰিলে বা ছুটী ল'লে প্ৰতিদিনৰ টাৰ্গেট বাঢ়ে। প্ৰতি ৰাতিপুৱা Progress টেব চাওক।",
"আজিৰ ব্ৰিকৰ পৰা দিনৰ POB ঠিক কৰক: কোন কেমিষ্ট, কোন প্ৰডাক্ট, কিমান।",
"দোকান খালী থাকোঁতে দুপৰীয়াৰ আগতে অৰ্ডাৰ বুক কৰক। দুপৰীয়াৰ পিছত ডাক্তৰ।",
"শেষৰ দিনবোৰৰ বাবে অৰ্ডাৰ ৰাখি নাথাকিব। পলমৰ অৰ্ডাৰে সকলোৰে ক্ষতি কৰে।"],
says:'টাৰ্গেট মাহৰ শেষৰ পাহাৰ নহয়। ই প্ৰতিদিনৰ এটা সৰু খোজ।'},
{icon:'🔍',title:'পৰিস্থিতি বিশ্লেষণ',sub:'কামৰ আগতে ব্ৰিকটো পঢ়ক',steps:[
"যোৱা মাহ চাওক: কোনে অৰ্ডাৰ দিছিল, কোনে বন্ধ কৰিলে, কোনে কেতিয়াও দিয়া নাই।",
"ডাক্তৰ চাওক: কোনে আমাৰ ইম্পেক্ট ব্ৰেণ্ড লিখে, কোনে নিলিখে।",
"খালী ঠাই বিচাৰক: লিখা ডাক্তৰ আছে কিন্তু ওচৰত ষ্টক নাই, বা ষ্টক আছে কিন্তু লিখোঁতা নাই।",
"প্ৰতিটো খালী ঠাইৰ বাবে এটা কাম ঠিক কৰক আৰু আজিয়েই কৰক।",
"সন্ধিয়া চাওক কি সলনি হ'ল আৰু প্লেন আপডেট কৰক।"],
says:'একে ধৰণে বেছি কষ্ট নকৰিব। খালী ঠাই বিচাৰক, বুদ্ধিৰে কাম কৰক।'},
{icon:'🎒',title:'ৰাতিপুৱাৰ প্ৰস্তুতি',sub:'দহ মিনিট যিয়ে দিনটো ঠিক কৰে',steps:[
"Today খোলক: প্লেন, POB টাৰ্গেট আৰু বাকী কাম পঢ়ক।",
"প্লেন অনুসৰি আজিৰ ডাক্তৰসকলৰ বাবে চেম্পল আৰু ইনপুট লওক।",
"আজি যি ব্ৰেণ্ডত জোৰ দিব, সেইবোৰৰ স্কীম লট পুনৰ চাই লওক।",
"প্ৰথম তিনিটা কল আৰু প্ৰতিটোৰ পৰা আশা কৰা অৰ্ডাৰ ঠিক কৰক।",
"সময়মতে ওলাওক। প্ৰথম কলেই গোটেই দিনৰ উৎসাহ ঠিক কৰে।"],
says:'ৰাতিপুৱা জিকক, দিনটো জিকি যাব।'}],
situations:[
{q:'কেমিষ্টে কৈছে: "আপোনাৰ প্ৰডাক্ট চলা নাই।"',do:['সোধক ওচৰৰ কোন ডাক্তৰে এই ৰোগ চায়।','আজিয়েই সেই ডাক্তৰসকলক ব্ৰেণ্ড ডিটেল কৰক।','উভতি আহি কেমিষ্টক কওক কোন ডাক্তৰে লিখিব।','ষ্টক ঘূৰাবলৈ আটাইতকৈ সৰু লট কওক।'],say:'দাদা, ডা. ___-এ এই সপ্তাহৰ পৰা লিখিব। কেৱল সৰু লটটো ৰাখক, মই চলাই দিম।'},
{q:'কেমিষ্টে কৈছে: "প্ৰতিযোগীয়ে বেছি স্কীম দিয়ে।"',do:['কেৱল ফ্ৰী মাল নহয়, প্ৰতি ইউনিট মাৰ্জিন তুলনা কৰক।','তেওঁৰ এলেকাত আমাৰ প্ৰেছক্ৰিপচন চাপ\'ৰ্টৰ কথা কওক।','তেওঁৰ বিক্ৰী অনুসৰি সঠিক লট দিয়ক।'],say:'দাদা, সিহঁতৰ স্কীম ডাঙৰ কিন্তু মাল পৰি থাকে। আমাৰটো ডাক্তৰে লিখে, সেয়েহে সোনকালে বিক্ৰী হয়, উপাৰ্জনো বেছি।'},
{q:'ডাক্তৰে কৈছে: "আজি সময় নাই।"',do:['সন্মান কৰক। এশাৰীৰ বাৰ্তা দিয়ক।','লিফলেট বা চেম্পল ৰাখি আহক।','ভাল সময় সুধি লিখি ৰাখক।'],say:'ডাক্তৰ, মাত্ৰ এশাৰী: ___। দুমিনিটৰ বাবে কেতিয়া লগ পাব পাৰোঁ?'},
{q:'ডাক্তৰে কৈছে: "আপোনাৰ প্ৰডাক্ট দামী।"',do:['ৰোগীৰ ফলাফল আৰু নিয়মীয়া সেৱনৰ কথা কওক।','প্ৰতিদিনৰ চিকিৎসাৰ খৰচ তুলনা কৰক।','সঠিক ৰোগী গোটৰ বাবে কওক।'],say:'ডাক্তৰ, দিনে সামান্য বেছি, কিন্তু ৰোগীয়ে ভাল ফল পায়, সেয়েহে সন্তুষ্ট হৈ আপোনাৰ ওচৰলৈকে উভতি আহে।'},
{q:'ৰিটেইলাৰৰ শ্বেলফত ঠাই নাই।',do:['এটা ইম্পেক্ট ব্ৰেণ্ডৰ বাবে আগত অলপ ঠাই খুজক।','অনুমতি লৈ নষ্ট বা মিয়াদ উকলা ষ্টক আঁতৰাওক।','আটাইতকৈ সৰু লট দিয়ক।'],say:'মাত্ৰ এই সৰু চুকটো এটা প্ৰডাক্টৰ বাবে দিয়ক। দুসপ্তাহত নচলিলে মই ঘূৰাই ল\'ম।'},
{q:'ষ্টকিষ্টৰ ওচৰত আমাৰ প্ৰডাক্ট নাই।',do:['সেইদিনাই ৰতন ৰয় আৰু ষ্টকিষ্টক জনাওক।','তথাপি অৰ্ডাৰ বুক কৰক, ডেলিভাৰীৰ তাৰিখ লিখক।','কেমিষ্টক জনাওক ষ্টক কেতিয়া আহিব।'],say:'দাদা, ষ্টক ___ তাৰিখে আহিছে। আপোনাৰ অৰ্ডাৰ বুক কৰি ৰাখিছোঁ, যাতে আপুনি আগতে পায়।'},
{q:'আপুনি POB টাৰ্গেটত পিছপৰি আছে।',do:['Progress টেবত প্ৰতিদিনৰ সঠিক প্ৰয়োজন চাওক।','যিসকলে আগতে অৰ্ডাৰ দিছিল কিন্তু এই মাহত দিয়া নাই, তেওঁলোকৰ তালিকা কৰক।','প্ৰথমে তেওঁলোকৰ ওচৰলৈ গৈ নিয়মীয়া লট বুক কৰক।'],say:'দাদা, আপোনাৰ আগৰ অৰ্ডাৰ আছিল ___। আজি সেইটোৱেই আকৌ কৰোঁ নে?'},
{q:'কেমিষ্টে এনে স্কীম বিচাৰিছে যিটো নাই।',do:['ভদ্ৰ আৰু সৎ হওক। যি নাই তাৰ প্ৰতিশ্ৰুতি কেতিয়াও নিদিব।','যি স্কীম আছে সেয়া বুজাই কওক।','তেওঁৰ মাৰ্জিন দেখুৱাওক।'],say:'দাদা, কোম্পানীয়ে যি অনুমোদন কৰা নাই, সেয়া মই দিব নোৱাৰোঁ। কিন্তু এই লটতো আপুনি ___ উপাৰ্জন কৰিব।'},
{q:'ডাক্তৰে পুৰণি প্ৰতিশ্ৰুতি নৰখাৰ অভিযোগ কৰিছে।',do:['অজুহাত নিদিয়াকৈ ক্ষমা বিচাৰক।','এতিয়াই ঠিক কৰক বা তাৰিখ দিয়ক।','তাৰিখ ৰাখক।'],say:'ডাক্তৰ, আপুনি শুদ্ধ, মই দুঃখিত। ___ তাৰিখে লৈ আহিম, আৰু ভুল নহ\'ব।'},
{q:'অৰ্ডাৰ সাজু কিন্তু নূন্যতম বিলিংতকৈ কম।',do:['আৰু এটা ভালকৈ চলা প্ৰডাক্ট যোগ কৰক।','NPD বা ইম্পেক্ট ব্ৰেণ্ড সংযোগ কৰক।','মুঠ মূল্য দেখুৱাওক।'],say:'দাদা, ___-ও যোগ কৰোঁ। তেতিয়া বিল নূন্যতম পাৰ হ\'ব আৰু দুয়োটা সময়ত পাব।'}],
quiz:[
{q:'আপোনাৰ POB টাৰ্গেট মাহেকীয়া টাৰ্গেটৰ কিমান অংশ?',o:['40%','60%','80%','100%'],a:1,e:'POB টাৰ্গেট মাহেকীয়া টাৰ্গেটৰ ৬০%, কৰ্মদিৱসত ভাগ কৰা।'},
{q:'গিফট কাক দিব পাৰি?',o:['যিকোনো ডাক্তৰ','কেৱল লিষ্ট ডাক্তৰ','যিকোনো কেমিষ্ট','যিয়ে অৰ্ডাৰ দিয়ে'],a:1,e:'গিফট কেৱল লিষ্ট ডাক্তৰক। চেম্পল যিকোনো ডাক্তৰক দিব পাৰি।'},
{q:'কেমিষ্টক প্ৰথমে কি ক\'ব?',o:['আটাইতকৈ ডাঙৰ লট','আটাইতকৈ সৰু স্কীম লট','খোলা ইউনিট','একো নহয়, অপেক্ষা'],a:1,e:'সৰু লটেৰে আৰম্ভ কৰক। সৰু প্ৰথম অৰ্ডাৰ ডাঙৰ ৰিপিট অৰ্ডাৰ হয়।'},
{q:'আপুনি এদিন ছুটী লৈছে। প্ৰতিদিনৰ POB টাৰ্গেট…',o:['একে থাকে','কমে','বাঢ়ে','বাতিল হয়'],a:2,e:'কৰ্মদিৱস কম বাকী, সেয়েহে প্ৰতিদিনৰ প্ৰয়োজন বাঢ়ে।'},
{q:'এপ কেতিয়া পূৰণ কৰিব?',o:['ৰাতি','দোকানতে, কলৰ পিছত লগে লগে','পিছদিনা ৰাতিপুৱা','সপ্তাহত এবাৰ'],a:1,e:'সতেজ ডেটাই সঁচা ডেটা। কলৰ পিছত লগে লগে পূৰণ কৰক।'},
{q:'ডাক্তৰৰ সৈতে শ্ৰেষ্ঠ আৰম্ভণি?',o:['দামেৰে','তেওঁৰ ৰোগীৰ কথা','প্ৰতিযোগীৰ কথা','সকলো ব্ৰেণ্ড দেখুওৱা'],a:1,e:'ৰোগীৰে আৰম্ভ কৰক, তাৰপিছত ব্ৰেণ্ডক সেই প্ৰয়োজনৰ সৈতে জোৰা লগাওক।'},
{q:'ইম্পেক্ট ব্ৰেণ্ড ক\'ত ৰাখিব লাগে?',o:['পিছফালৰ শ্বেলফ','কাউণ্টাৰৰ তলত','আগত চকুৰ উচ্চতাত','গুদামত'],a:2,e:'গ্ৰাহকে যি আগতে দেখে, সেয়াই আগতে বিক্ৰী হয়।'},
{q:'কেমিষ্টে কৈছে প্ৰডাক্ট চলা নাই। প্ৰথম খোজ?',o:['ষ্টক ঘূৰাই লোৱা','বেছি ৰেহাই দিয়া','ওচৰৰ লিখা ডাক্তৰ বিচৰা','যোৱা বন্ধ'],a:2,e:'তেওঁৰ ওচৰত প্ৰেছক্ৰিপচন সৃষ্টি কৰক, তেতিয়াহে ষ্টক চলিব।'},
{q:'মাইলষ্টোন ব\'নাছৰ বাবে লাগে…',o:['কেৱল মাহৰ 100%','কেৱল ১৭ তাৰিখলৈ 40%','মাহৰ 100% আৰু ১৭ তাৰিখলৈ 40%','একো নালাগে'],a:2,e:'মাইলষ্টোন ব\'নাছত দুয়োটা চৰ্ত লাগে।'},
{q:'চেলেবল ৰিটাৰ্ণ হ\'ব লাগে…',o:['3% লৈকে','10% লৈকে','যিকোনো','শূন্য'],a:0,e:'ইনচেণ্টিভৰ বাবে চেলেবল ৰিটাৰ্ণ 3% বা কম হ\'ব লাগে।'},
{q:'আউটলেট কভাৰেজ টাৰ্গেট…',o:['50%','75%','90%','100%'],a:2,e:'আউটলেট কভাৰেজ অন্ততঃ 90% হ\'ব লাগে।'},
{q:'HCP কভাৰেজ টাৰ্গেট…',o:['80%','90%','95%','100%'],a:2,e:'ডাক্তৰ (HCP) কভাৰেজ অন্ততঃ 95% হ\'ব লাগে।'},
{q:'Raft ডাক্তৰৰ ওচৰলৈ কেতিয়া যাব?',o:['যিকোনো দিনা','TP-ত তেওঁলোকৰ ব্ৰিকৰ দিনা','কেৱল সোমবাৰে','মাহত এবাৰ'],a:1,e:'TP-ত যিদিনা তেওঁলোকৰ ব্ৰিক, সেইদিনা যাওক।'},
{q:'অৰ্ডাৰ নূন্যতম বিলিংতকৈ কম। আপুনি…',o:['বাতিল কৰিব','আৰু এটা চলা প্ৰডাক্ট যোগ কৰিব','এনেয়ে বুক কৰিব','ষ্টকিষ্টক উপেক্ষা কৰিবলৈ ক\'ব'],a:1,e:'এটা প্ৰডাক্ট যোগ কৰি নূন্যতম পাৰ কৰক, বাস্কেট বঢ়াওক।'},
{q:'ডিটেলিঙৰ বাবে ভাল মাত?',o:['খৰ আৰু ডাঙৰকৈ','লাহে, স্পষ্ট, ৰৈ ৰৈ','বৰ লাহে','সদায় একে সুৰত'],a:1,e:'লাহে আৰু স্পষ্ট, মূল সুবিধাৰ পিছত অলপ ৰওক।'}]
};
window.COACH=window.COACH||{};
COACH.en.phases=['Phase 1 · Basics','Phase 2 · Selling skills','Phase 3 · Business & numbers','Phase 4 · Champion'];
COACH.en.phaseSub=['Your first two weeks','Talk, listen and convince','Margins, stock and stockists','Plan, lead and win'];
COACH.en.modules2=[
{icon:'💊',title:'Our products in simple words',sub:'What each brand is for',steps:[
"R-Loc 150 is ranitidine, for acidity and ulcer pain. R-Loc D adds domperidone, for acidity with nausea or bloating.",
"R-Loc Raft is for heartburn and reflux (GERD). Tell the doctor: for patients who feel burning after meals.",
"Skinlite Cream is for dark patches on the face (melasma). It is applied at night and only on a doctor's prescription. In the day the patient needs sunscreen, so Day Care Sunscreen and Bright Facewash go with it.",
"Deca-Durabolin (injection) and Dexona (tablets and injection) are prescription products used by doctors for specific conditions. Speak only what the detailing aid says.",
"Oflin, Oflin-O, Ciprobid and Tiniba are anti-infectives. Zipcet is for allergy. Cadiphylate is for cough with breathing trouble.",
"Never give medical advice yourself. Your job: tell the doctor what our leaflet says, and make sure the chemist has stock."],
says:'You do not need to be a doctor. Know in one line what each brand is for, and say it with confidence.'},
{icon:'📱',title:'Using this app in 2 minutes a day',sub:'Less typing, more selling',steps:[
"Morning: open Today. Tap Check-in, read your priorities and your POB target. That is one minute.",
"Your brick is already filled in every form. You only pick the doctor or outlet and tap Save.",
"Stockist and retailer you used last time are remembered. Do not type what the app already knows.",
"Tap Request stock when samples or inputs run low. No calls, no WhatsApp.",
"Evening: read Ratan Roy's review in Messages. Reply to the 'Explanation required' points by 11 AM.",
"Use spare minutes, while waiting at a clinic, for today's 3-minute lesson."],
says:'The app is your assistant, not your boss. Spend your time with customers, not with your phone.'},
{icon:'🛡️',title:'Rules you must never break',sub:'Protect yourself and the company',steps:[
"Prescription products (Skinlite Cream, Deca, R-Loc, Dexona) are sold only against a doctor's prescription. Never push a chemist to sell them over the counter.",
"Doctor gifts go only to list doctors, as per company policy. Never give doctor gifts to chemists.",
"Speak only claims from the approved detailing aid. Never compare unfairly or speak against another company.",
"Report honestly. A wrong report is worse than a low number. Ratan Roy will help with a low number; nobody can help with a false one.",
"If a patient or doctor reports a side effect, tell Ratan Roy the same day with the details.",
"Never promise a scheme, rate or gift that the company has not approved."],
says:'Numbers can be recovered next week. Trust, once lost, never comes back.'},
{icon:'❓',title:'Questions that open doors',sub:'Ask, listen, then sell',steps:[
"Ask open questions that start with What, Which, How: 'Which patients come most with acidity?'",
"Ask about his business, not your product: 'Which skin products move fastest here?'",
"Listen fully. Nod. Write down one thing he said.",
"Use his words in your pitch: 'You said many patients have burning after meals – that is exactly where R-Loc Raft helps.'",
"End with a closing question: 'Shall I book 6 bottles to start?'"],
says:'The customer who talks more buys more. Your best sales tool is a good question.'},
{icon:'🧱',title:'Handling objections – the 4-step way',sub:'Listen, agree, answer, ask',steps:[
"Step 1, Listen: let him finish completely. Do not interrupt.",
"Step 2, Agree with the feeling, not the fact: 'I understand, sir, price matters.'",
"Step 3, Answer with one fact: margin in rupees, a doctor who prescribes, or a scheme.",
"Step 4, Ask again with a smaller step: 'Shall we start with the smallest lot?'",
"Common objections: costly, no demand, competitor gives more, stock already there, owner not here. Each has a card in Situations."],
says:'An objection is not a no. It is a question asking you to explain better.'},
{icon:'💹',title:'Talking margin and profit',sub:'Show him what he earns',steps:[
"A retailer earns about 20 percent of MRP. A wholesaler earns about 7 percent. A stockist earns about 10 percent.",
"Do not say 'good margin'. Say the rupees: 'You earn about ₹33 on every tube.'",
"With a free-goods scheme, profit goes up. Show it: 'With 50 plus 10, your profit becomes about 28 percent.'",
"Use the Profit calculator in Learn, Rates & offers. Pick the product and customer, and read out the 'What to say' line.",
"Always check the MRP printed on the pack before you quote."],
says:'People do not buy products. They buy profit. Show him his profit in rupees.'},
{icon:'🏬',title:'Working with stockists and wholesalers',sub:'The pipeline that feeds every shop',steps:[
"Visit your stockists every week. Check stock, pending orders and expiry.",
"Collect the stock statement by the 7th of every month. It shows what is really selling.",
"Explain slabs and gifts: for example Dexona injection, 6 cases and above gets 2 percent off.",
"Flat rates are only for direct Zydus stockists, once per invoice. Never promise them to others.",
"Wholesalers move volume. Book big lots early in the month, not on the last day."],
says:'If the stockist is empty, the best detailing in the world will not sell.'},
{icon:'♻️',title:'Stock, expiry and returns',sub:'Keep returns below 3 percent',steps:[
"Saleable returns must stay at or below 3 percent, or the incentive is lost.",
"Book only what will sell. A forced order comes back as a return.",
"Check near-expiry stock at every chemist. Move it to a faster outlet before it expires.",
"Rotate stock: old stock in front, new stock behind.",
"Tell Ratan Roy early about slow stock. Early action saves the return."],
says:'A sale that comes back is not a sale. Sell what the market can use.'},
{icon:'🗺️',title:'Planning your brick',sub:'Work smart, not just hard',steps:[
"Look at your TP calendar. Know which brick you work each day of the month.",
"For each brick, list: top 5 doctors, top 5 chemists, wholesalers, and NPD outlets.",
"Plan the route: wholesalers first, doctors mid-day, retailers in the afternoon.",
"Missed something today? It moves to the next date you visit that brick. Check carried items every morning.",
"Every brick should give a fair share of your monthly POB. Know that number before you go."],
says:'A brick visited without a plan is a day spent, not a day invested.'},
{icon:'🏕️',title:'Running a doctor camp',sub:'Shakti camp, step by step',steps:[
"Pick a list doctor with good patient flow. Fix the date with him one week ahead.",
"Arrange the material, register and inputs from your stock. Request stock in the app if short.",
"On the day, reach early, set up neatly and help the doctor's staff.",
"Record the number of patients and prescriptions, with photos.",
"Next day, visit nearby chemists and make sure the prescribed products are in stock."],
says:'A good camp builds a doctor relationship that lasts years. Plan it like a wedding.'},
{icon:'⏰',title:'Time and self-motivation',sub:'Own your day',steps:[
"Start on time. The first call before 10 AM sets the tone for the day.",
"Keep your phone for work in the field. Social media can wait until evening.",
"Break the day target into small goals: ₹X before lunch, the rest after.",
"After a bad call, take one deep breath and walk into the next shop with a smile.",
"Every evening, write one thing you learned. Small daily progress becomes a big career."],
says:'Motivation gets you started. Habit keeps you going.'},
{icon:'🏆',title:'Winning your incentive',sub:'Know the rules, then beat them',steps:[
"The monthly incentive starts at 97 percent of target. 100 and 110 percent pay much more.",
"Milestone bonus needs 100 percent for the month and 40 percent of target by the 17th.",
"All four KPI conditions must be met: growth over last year, returns 3 percent or less, outlet coverage 90 percent, doctor coverage 95 percent.",
"Check the Progress tab every morning: it shows how much more to sell for each level.",
"Impact brands (Deca, R-Loc, Skinlite, Dexona) also count for the quarter. Push them every week."],
says:'The incentive is not luck. It is the result of daily discipline. Track it every day.'}];
window.COACH=window.COACH||{};
COACH.hi.phases=['चरण 1 · बुनियाद','चरण 2 · बिक्री कौशल','चरण 3 · बिज़नेस और आँकड़े','चरण 4 · चैंपियन'];
COACH.hi.phaseSub=['आपके पहले दो हफ़्ते','बोलना, सुनना और मनाना','मार्जिन, स्टॉक और स्टॉकिस्ट','प्लान करें, आगे बढ़ें, जीतें'];
COACH.hi.modules2=[
{icon:'💊',title:'हमारे प्रोडक्ट आसान शब्दों में',sub:'कौन-सा ब्रांड किस काम का',steps:[
"R-Loc 150 रैनिटिडीन है, एसिडिटी और अल्सर के दर्द के लिए। R-Loc D में डोमपेरिडोन भी है, जी मिचलाने या पेट फूलने वाली एसिडिटी के लिए।",
"R-Loc Raft सीने की जलन और रिफ़्लक्स (GERD) के लिए है। डॉक्टर से कहिए: जिन मरीज़ों को खाने के बाद जलन होती है।",
"Skinlite Cream चेहरे के काले धब्बों (मेलाज़्मा) के लिए है। रात में लगाई जाती है और सिर्फ़ डॉक्टर के पर्चे पर। दिन में सनस्क्रीन ज़रूरी है, इसलिए Day Care Sunscreen और Bright Facewash साथ में।",
"Deca-Durabolin (इंजेक्शन) और Dexona (टैबलेट और इंजेक्शन) पर्चे वाले प्रोडक्ट हैं, जिन्हें डॉक्टर ख़ास स्थितियों में देते हैं। सिर्फ़ वही बोलिए जो डिटेलिंग एड में लिखा है।",
"Oflin, Oflin-O, Ciprobid और Tiniba संक्रमण की दवाएँ हैं। Zipcet एलर्जी के लिए है। Cadiphylate साँस की तकलीफ़ वाली खाँसी के लिए है।",
"ख़ुद कभी दवा की सलाह मत दीजिए। आपका काम: डॉक्टर को लीफ़लेट की बात बताना और केमिस्ट के पास स्टॉक पक्का करना।"],
says:'आपको डॉक्टर बनने की ज़रूरत नहीं। हर ब्रांड एक लाइन में जानिए और भरोसे से बोलिए।'},
{icon:'📱',title:'ऐप दिन में सिर्फ़ 2 मिनट',sub:'कम टाइपिंग, ज़्यादा बिक्री',steps:[
"सुबह: Today खोलिए। Check-in दबाइए, अपनी प्राथमिकताएँ और POB टारगेट पढ़िए। बस एक मिनट।",
"हर फ़ॉर्म में आपका ब्रिक पहले से भरा है। बस डॉक्टर या दुकान चुनिए और Save दबाइए।",
"पिछली बार चुना स्टॉकिस्ट और रिटेलर ऐप याद रखता है। जो ऐप जानता है, वह टाइप मत कीजिए।",
"सैंपल या इनपुट कम हों तो Request stock दबाइए। न फ़ोन, न व्हाट्सऐप।",
"शाम: Messages में रतन रॉय का रिव्यू पढ़िए। 'Explanation required' का जवाब सुबह 11 बजे तक दीजिए।",
"क्लिनिक में इंतज़ार के ख़ाली मिनटों में आज का 3 मिनट का पाठ कीजिए।"],
says:'ऐप आपका सहायक है, मालिक नहीं। समय ग्राहकों को दीजिए, फ़ोन को नहीं।'},
{icon:'🛡️',title:'नियम जो कभी नहीं तोड़ने',sub:'ख़ुद को और कंपनी को सुरक्षित रखिए',steps:[
"पर्चे वाले प्रोडक्ट (Skinlite Cream, Deca, R-Loc, Dexona) सिर्फ़ डॉक्टर के पर्चे पर बिकते हैं। केमिस्ट पर बिना पर्चे बेचने का दबाव कभी मत डालिए।",
"डॉक्टर गिफ़्ट सिर्फ़ लिस्ट डॉक्टरों को, कंपनी नीति के अनुसार। केमिस्ट को डॉक्टर गिफ़्ट कभी नहीं।",
"सिर्फ़ मंज़ूर डिटेलिंग एड की बातें बोलिए। किसी दूसरी कंपनी के ख़िलाफ़ ग़लत तुलना मत कीजिए।",
"ईमानदारी से रिपोर्ट कीजिए। ग़लत रिपोर्ट कम आँकड़े से ज़्यादा बुरी है। कम आँकड़े में रतन रॉय मदद करेंगे; झूठ में कोई नहीं कर सकता।",
"अगर कोई मरीज़ या डॉक्टर दुष्प्रभाव बताए, उसी दिन पूरी जानकारी के साथ रतन रॉय को बताइए।",
"जो स्कीम, रेट या गिफ़्ट कंपनी ने मंज़ूर नहीं किया, उसका वादा कभी मत कीजिए।"],
says:'आँकड़े अगले हफ़्ते सुधर सकते हैं। भरोसा एक बार गया तो वापस नहीं आता।'},
{icon:'❓',title:'सवाल जो दरवाज़े खोलते हैं',sub:'पूछिए, सुनिए, फिर बेचिए',steps:[
"खुले सवाल पूछिए जो क्या, कौन-सा, कैसे से शुरू हों: 'एसिडिटी के मरीज़ सबसे ज़्यादा किस तरह के आते हैं?'",
"उनके बिज़नेस के बारे में पूछिए, अपने प्रोडक्ट के नहीं: 'यहाँ कौन-से स्किन प्रोडक्ट सबसे तेज़ बिकते हैं?'",
"पूरा सुनिए। सिर हिलाइए। उनकी एक बात लिख लीजिए।",
"अपनी पिच में उनके शब्द इस्तेमाल कीजिए: 'आपने कहा कई मरीज़ों को खाने के बाद जलन होती है – वहीं R-Loc Raft काम आता है।'",
"एक क्लोज़िंग सवाल से ख़त्म कीजिए: 'शुरुआत में 6 बोतल बुक कर दूँ?'"],
says:'जो ग्राहक ज़्यादा बोलता है, वह ज़्यादा ख़रीदता है। आपका सबसे बड़ा हथियार एक अच्छा सवाल है।'},
{icon:'🧱',title:'आपत्ति सँभालना – 4 क़दम',sub:'सुनिए, सहमति, जवाब, फिर पूछिए',steps:[
"क़दम 1, सुनिए: उन्हें पूरी बात कहने दीजिए। बीच में मत टोकिए।",
"क़दम 2, भावना से सहमत होइए, तथ्य से नहीं: 'समझता हूँ सर, क़ीमत मायने रखती है।'",
"क़दम 3, एक तथ्य से जवाब दीजिए: रुपये में मार्जिन, लिखने वाला डॉक्टर, या स्कीम।",
"क़दम 4, छोटे क़दम के साथ फिर पूछिए: 'सबसे छोटे लॉट से शुरू करें?'",
"आम आपत्तियाँ: महँगा, माँग नहीं, प्रतियोगी ज़्यादा देता है, स्टॉक पहले से है, मालिक नहीं हैं। हर एक का कार्ड Situations में है।"],
says:'आपत्ति “ना” नहीं है। यह एक सवाल है कि आप बेहतर समझाइए।'},
{icon:'💹',title:'मार्जिन और मुनाफ़े की बात',sub:'दिखाइए वे क्या कमाते हैं',steps:[
"रिटेलर MRP का लगभग 20 प्रतिशत कमाता है। होलसेलर लगभग 7 प्रतिशत। स्टॉकिस्ट लगभग 10 प्रतिशत।",
"'अच्छा मार्जिन' मत कहिए। रुपये बताइए: 'हर ट्यूब पर आप लगभग ₹33 कमाते हैं।'",
"फ़्री माल वाली स्कीम से मुनाफ़ा बढ़ता है। दिखाइए: '50+10 में आपका मुनाफ़ा लगभग 28 प्रतिशत हो जाता है।'",
"Learn में Rates & offers का Profit calculator इस्तेमाल कीजिए। प्रोडक्ट और ग्राहक चुनिए और 'क्या बोलें' वाली लाइन पढ़िए।",
"रेट बताने से पहले पैक पर छपी MRP ज़रूर देखिए।"],
says:'लोग प्रोडक्ट नहीं, मुनाफ़ा ख़रीदते हैं। उन्हें रुपये में उनका मुनाफ़ा दिखाइए।'},
{icon:'🏬',title:'स्टॉकिस्ट और होलसेलर के साथ काम',sub:'वह पाइपलाइन जो हर दुकान भरती है',steps:[
"हर हफ़्ते स्टॉकिस्ट से मिलिए। स्टॉक, बाक़ी ऑर्डर और एक्सपायरी देखिए।",
"हर महीने 7 तारीख़ तक स्टॉक स्टेटमेंट लीजिए। इससे पता चलता है असल में क्या बिक रहा है।",
"स्लैब और गिफ़्ट समझाइए: जैसे Dexona इंजेक्शन, 6 केस या ज़्यादा पर 2 प्रतिशत छूट।",
"फ़्लैट रेट सिर्फ़ सीधे Zydus स्टॉकिस्ट के लिए, एक इनवॉइस में एक बार। दूसरों से इसका वादा मत कीजिए।",
"होलसेलर बड़ा माल चलाते हैं। बड़े लॉट महीने की शुरुआत में बुक कीजिए, आख़िरी दिन नहीं।"],
says:'स्टॉकिस्ट ख़ाली है तो दुनिया की सबसे अच्छी डिटेलिंग भी नहीं बेच पाएगी।'},
{icon:'♻️',title:'स्टॉक, एक्सपायरी और रिटर्न',sub:'रिटर्न 3 प्रतिशत से कम रखिए',steps:[
"सेलेबल रिटर्न 3 प्रतिशत या उससे कम रहना चाहिए, वरना इंसेंटिव चला जाता है।",
"सिर्फ़ उतना बुक कीजिए जितना बिकेगा। ज़बरदस्ती का ऑर्डर रिटर्न बनकर लौटता है।",
"हर केमिस्ट पर एक्सपायरी के क़रीब का स्टॉक देखिए। एक्सपायर होने से पहले तेज़ दुकान पर पहुँचाइए।",
"स्टॉक घुमाइए: पुराना आगे, नया पीछे।",
"धीमे स्टॉक के बारे में रतन रॉय को जल्दी बताइए। जल्दी क़दम रिटर्न बचाता है।"],
says:'जो बिक्री वापस आ जाए, वह बिक्री नहीं। उतना बेचिए जितना बाज़ार इस्तेमाल कर सके।'},
{icon:'🗺️',title:'अपने ब्रिक की योजना',sub:'सिर्फ़ मेहनत नहीं, समझदारी से',steps:[
"अपना TP कैलेंडर देखिए। जानिए महीने के हर दिन कौन-सा ब्रिक है।",
"हर ब्रिक के लिए लिखिए: टॉप 5 डॉक्टर, टॉप 5 केमिस्ट, होलसेलर और NPD आउटलेट।",
"रूट तय कीजिए: पहले होलसेलर, दोपहर में डॉक्टर, शाम को रिटेलर।",
"आज कुछ छूटा? वह उस ब्रिक की अगली तारीख़ पर चला जाता है। हर सुबह आगे बढ़े काम देखिए।",
"हर ब्रिक से महीने के POB का सही हिस्सा आना चाहिए। निकलने से पहले वह आँकड़ा जानिए।"],
says:'बिना योजना का ब्रिक दिन ख़र्च करता है, निवेश नहीं करता।'},
{icon:'🏕️',title:'डॉक्टर कैंप कैसे चलाएँ',sub:'शक्ति कैंप, क़दम दर क़दम',steps:[
"अच्छे मरीज़ों वाला लिस्ट डॉक्टर चुनिए। एक हफ़्ता पहले उनके साथ तारीख़ तय कीजिए।",
"सामग्री, रजिस्टर और इनपुट अपने स्टॉक से तैयार कीजिए। कम हो तो ऐप में Request stock कीजिए।",
"उस दिन जल्दी पहुँचिए, साफ़-सुथरा सेटअप कीजिए और डॉक्टर के स्टाफ़ की मदद कीजिए।",
"मरीज़ों और पर्चों की संख्या फ़ोटो के साथ दर्ज कीजिए।",
"अगले दिन पास के केमिस्ट पर जाकर पक्का कीजिए कि लिखे गए प्रोडक्ट स्टॉक में हैं।"],
says:'अच्छा कैंप सालों चलने वाला रिश्ता बनाता है। इसे शादी की तरह प्लान कीजिए।'},
{icon:'⏰',title:'समय और ख़ुद की प्रेरणा',sub:'अपने दिन के मालिक बनिए',steps:[
"समय पर शुरू कीजिए। सुबह 10 बजे से पहले की पहली कॉल पूरे दिन का माहौल बनाती है।",
"फ़ील्ड में फ़ोन सिर्फ़ काम के लिए। सोशल मीडिया शाम तक रुक सकता है।",
"दिन का टारगेट छोटे लक्ष्यों में बाँटिए: लंच से पहले ₹X, बाक़ी बाद में।",
"ख़राब कॉल के बाद एक गहरी साँस लीजिए और मुस्कान के साथ अगली दुकान में जाइए।",
"हर शाम एक सीखी हुई बात लिखिए। रोज़ की छोटी तरक़्क़ी बड़ा करियर बनाती है।"],
says:'प्रेरणा शुरुआत कराती है। आदत आगे ले जाती है।'},
{icon:'🏆',title:'अपना इंसेंटिव जीतिए',sub:'नियम जानिए, फिर उन्हें पार कीजिए',steps:[
"मासिक इंसेंटिव टारगेट के 97 प्रतिशत से शुरू होता है। 100 और 110 प्रतिशत पर काफ़ी ज़्यादा मिलता है।",
"माइलस्टोन बोनस के लिए महीने का 100 प्रतिशत और 17 तारीख़ तक 40 प्रतिशत ज़रूरी है।",
"चारों KPI शर्तें ज़रूरी: पिछले साल से ग्रोथ, रिटर्न 3 प्रतिशत या कम, आउटलेट कवरेज 90 प्रतिशत, डॉक्टर कवरेज 95 प्रतिशत।",
"हर सुबह Progress टैब देखिए: हर स्तर के लिए कितना और बेचना है, वह दिखता है।",
"इम्पैक्ट ब्रांड (Deca, R-Loc, Skinlite, Dexona) तिमाही में भी गिने जाते हैं। हर हफ़्ते उन पर ज़ोर दीजिए।"],
says:'इंसेंटिव क़िस्मत नहीं, रोज़ के अनुशासन का नतीजा है। हर दिन ट्रैक कीजिए।'}];
window.COACH=window.COACH||{};
COACH.bn.phases=['ধাপ ১ · ভিত','ধাপ ২ · বিক্রির দক্ষতা','ধাপ ৩ · ব্যবসা ও সংখ্যা','ধাপ ৪ · চ্যাম্পিয়ন'];
COACH.bn.phaseSub=['আপনার প্রথম দুই সপ্তাহ','বলা, শোনা ও বোঝানো','মার্জিন, স্টক ও স্টকিস্ট','পরিকল্পনা, নেতৃত্ব, জয়'];
COACH.bn.modules2=[
{icon:'💊',title:'আমাদের প্রোডাক্ট সহজ কথায়',sub:'কোন ব্র্যান্ড কীসের জন্য',steps:[
"R-Loc 150 হল র‍্যানিটিডিন, অম্বল আর আলসারের ব্যথার জন্য। R-Loc D-তে ডমপেরিডোনও আছে, বমি-ভাব বা পেট ফাঁপা সহ অম্বলের জন্য।",
"R-Loc Raft বুক জ্বালা ও রিফ্লাক্সের (GERD) জন্য। ডাক্তারকে বলুন: যে রোগীদের খাওয়ার পরে জ্বালা হয়।",
"Skinlite Cream মুখের কালো ছোপের (মেলাসমা) জন্য। রাতে লাগাতে হয়, শুধু ডাক্তারের প্রেসক্রিপশনে। দিনে সানস্ক্রিন লাগে, তাই Day Care Sunscreen আর Bright Facewash সঙ্গে চলে।",
"Deca-Durabolin (ইনজেকশন) আর Dexona (ট্যাবলেট ও ইনজেকশন) প্রেসক্রিপশনের প্রোডাক্ট, ডাক্তার নির্দিষ্ট অবস্থায় দেন। শুধু ডিটেলিং এইডে যা লেখা, তা-ই বলুন।",
"Oflin, Oflin-O, Ciprobid আর Tiniba সংক্রমণের ওষুধ। Zipcet অ্যালার্জির জন্য। Cadiphylate শ্বাসকষ্ট সহ কাশির জন্য।",
"নিজে কখনও ওষুধের পরামর্শ দেবেন না। আপনার কাজ: লিফলেটের কথা ডাক্তারকে বলা, আর কেমিস্টের কাছে স্টক নিশ্চিত করা।"],
says:'আপনাকে ডাক্তার হতে হবে না। প্রতিটি ব্র্যান্ড এক লাইনে জানুন, আর আত্মবিশ্বাসের সঙ্গে বলুন।'},
{icon:'📱',title:'অ্যাপ দিনে মাত্র ২ মিনিট',sub:'কম টাইপ, বেশি বিক্রি',steps:[
"সকালে: Today খুলুন। Check-in চাপুন, অগ্রাধিকার আর POB টার্গেট পড়ুন। এক মিনিটই যথেষ্ট।",
"প্রতিটি ফর্মে আপনার ব্রিক আগে থেকেই ভরা। শুধু ডাক্তার বা দোকান বেছে Save চাপুন।",
"আগের বার বাছা স্টকিস্ট আর রিটেলার অ্যাপ মনে রাখে। অ্যাপ যা জানে, তা টাইপ করবেন না।",
"স্যাম্পল বা ইনপুট কমে গেলে Request stock চাপুন। ফোন বা হোয়াটসঅ্যাপ লাগবে না।",
"সন্ধ্যায়: Messages-এ রতন রায়ের রিভিউ পড়ুন। 'Explanation required'-এর উত্তর সকাল ১১টার মধ্যে দিন।",
"ক্লিনিকে অপেক্ষার ফাঁকা সময়ে আজকের ৩ মিনিটের পাঠ করে নিন।"],
says:'অ্যাপ আপনার সহকারী, মালিক নয়। সময় দিন গ্রাহককে, ফোনকে নয়।'},
{icon:'🛡️',title:'যে নিয়ম কখনও ভাঙবেন না',sub:'নিজেকে আর কোম্পানিকে সুরক্ষিত রাখুন',steps:[
"প্রেসক্রিপশনের প্রোডাক্ট (Skinlite Cream, Deca, R-Loc, Dexona) শুধু ডাক্তারের প্রেসক্রিপশনে বিক্রি হয়। কেমিস্টকে প্রেসক্রিপশন ছাড়া বেচতে কখনও চাপ দেবেন না।",
"ডাক্তারের গিফট শুধু লিস্ট ডাক্তারদের, কোম্পানির নীতি মেনে। কেমিস্টকে ডাক্তারের গিফট কখনও নয়।",
"শুধু অনুমোদিত ডিটেলিং এইডের কথা বলুন। অন্য কোম্পানির বিরুদ্ধে অন্যায্য তুলনা করবেন না।",
"সৎভাবে রিপোর্ট করুন। ভুল রিপোর্ট কম সংখ্যার চেয়েও খারাপ। কম সংখ্যায় রতন রায় সাহায্য করবেন; মিথ্যায় কেউ পারবে না।",
"কোনো রোগী বা ডাক্তার পার্শ্বপ্রতিক্রিয়ার কথা বললে, সেদিনই বিস্তারিত সহ রতন রায়কে জানান।",
"কোম্পানি যে স্কিম, রেট বা গিফট অনুমোদন করেনি, তার প্রতিশ্রুতি কখনও দেবেন না।"],
says:'সংখ্যা পরের সপ্তাহে ঠিক করা যায়। বিশ্বাস একবার গেলে আর ফেরে না।'},
{icon:'❓',title:'যে প্রশ্ন দরজা খোলে',sub:'জিজ্ঞেস করুন, শুনুন, তারপর বেচুন',steps:[
"খোলা প্রশ্ন করুন যা কী, কোন, কীভাবে দিয়ে শুরু: 'অম্বলের কোন ধরনের রোগী সবচেয়ে বেশি আসেন?'",
"নিজের প্রোডাক্ট নয়, তাঁর ব্যবসা নিয়ে জিজ্ঞেস করুন: 'এখানে কোন স্কিন প্রোডাক্ট সবচেয়ে তাড়াতাড়ি চলে?'",
"পুরোটা শুনুন। মাথা নাড়ুন। তাঁর একটা কথা লিখে রাখুন।",
"পিচে তাঁর কথাই ব্যবহার করুন: 'আপনি বললেন অনেক রোগীর খাওয়ার পরে জ্বালা হয় – ঠিক সেখানেই R-Loc Raft কাজে আসে।'",
"একটা ক্লোজিং প্রশ্নে শেষ করুন: 'শুরুতে ৬ বোতল বুক করে দিই?'"],
says:'যে গ্রাহক বেশি কথা বলেন, তিনি বেশি কেনেন। আপনার সেরা অস্ত্র একটা ভালো প্রশ্ন।'},
{icon:'🧱',title:'আপত্তি সামলানো – ৪ ধাপে',sub:'শুনুন, সায় দিন, উত্তর দিন, আবার চান',steps:[
"ধাপ ১, শুনুন: তাঁকে পুরোটা বলতে দিন। মাঝে বাধা দেবেন না।",
"ধাপ ২, অনুভূতিতে সায় দিন, তথ্যে নয়: 'বুঝতে পারছি দাদা, দামটা গুরুত্বপূর্ণ।'",
"ধাপ ৩, একটা তথ্য দিয়ে উত্তর দিন: টাকায় মার্জিন, লিখছেন এমন ডাক্তার, বা স্কিম।",
"ধাপ ৪, ছোট পদক্ষেপে আবার চান: 'সবচেয়ে ছোট লট দিয়ে শুরু করি?'",
"সাধারণ আপত্তি: দামি, চাহিদা নেই, প্রতিযোগী বেশি দেয়, স্টক আগেই আছে, মালিক নেই। প্রতিটির কার্ড Situations-এ আছে।"],
says:'আপত্তি মানে না নয়। এটা একটা প্রশ্ন – আরও ভালো করে বোঝান।'},
{icon:'💹',title:'মার্জিন আর লাভের কথা',sub:'দেখান তিনি কত আয় করবেন',steps:[
"রিটেলার MRP-র প্রায় ২০ শতাংশ আয় করেন। হোলসেলার প্রায় ৭ শতাংশ। স্টকিস্ট প্রায় ১০ শতাংশ।",
"'ভালো মার্জিন' বলবেন না। টাকায় বলুন: 'প্রতি টিউবে আপনি প্রায় ₹৩৩ আয় করবেন।'",
"ফ্রি মালের স্কিমে লাভ বাড়ে। দেখান: '৫০+১০-এ আপনার লাভ প্রায় ২৮ শতাংশ হয়ে যায়।'",
"Learn-এ Rates & offers-এর Profit calculator ব্যবহার করুন। প্রোডাক্ট আর গ্রাহক বেছে 'কী বলবেন' লাইনটা পড়ুন।",
"দাম বলার আগে প্যাকে ছাপা MRP অবশ্যই দেখে নিন।"],
says:'মানুষ প্রোডাক্ট কেনে না, লাভ কেনে। টাকায় তাঁর লাভ দেখান।'},
{icon:'🏬',title:'স্টকিস্ট আর হোলসেলারের সঙ্গে কাজ',sub:'যে পাইপলাইন প্রতিটি দোকান ভরায়',steps:[
"প্রতি সপ্তাহে স্টকিস্টের কাছে যান। স্টক, বাকি অর্ডার আর এক্সপায়ারি দেখুন।",
"প্রতি মাসে ৭ তারিখের মধ্যে স্টক স্টেটমেন্ট নিন। এতে বোঝা যায় আসলে কী বিক্রি হচ্ছে।",
"স্ল্যাব আর গিফট বুঝিয়ে বলুন: যেমন Dexona ইনজেকশন, ৬ কেস বা বেশিতে ২ শতাংশ ছাড়।",
"ফ্ল্যাট রেট শুধু সরাসরি Zydus স্টকিস্টের জন্য, এক ইনভয়েসে একবার। অন্যদের প্রতিশ্রুতি দেবেন না।",
"হোলসেলাররা বেশি মাল চালান। বড় লট মাসের শুরুতে বুক করুন, শেষ দিনে নয়।"],
says:'স্টকিস্ট খালি থাকলে দুনিয়ার সেরা ডিটেলিংও বিক্রি আনতে পারবে না।'},
{icon:'♻️',title:'স্টক, এক্সপায়ারি আর রিটার্ন',sub:'রিটার্ন ৩ শতাংশের নিচে রাখুন',steps:[
"সেলেবল রিটার্ন ৩ শতাংশ বা কম থাকতে হবে, নইলে ইনসেনটিভ চলে যায়।",
"যতটা বিক্রি হবে, শুধু ততটাই বুক করুন। জোর করে নেওয়া অর্ডার রিটার্ন হয়ে ফেরে।",
"প্রতিটি কেমিস্টে মেয়াদ-ঘনিয়ে আসা স্টক দেখুন। মেয়াদ পেরোনোর আগে দ্রুত চলা দোকানে সরান।",
"স্টক ঘোরান: পুরনো সামনে, নতুন পেছনে।",
"ধীরে চলা স্টকের কথা রতন রায়কে আগেভাগে জানান। আগে পদক্ষেপ নিলে রিটার্ন বাঁচে।"],
says:'যে বিক্রি ফেরত আসে, সেটা বিক্রি নয়। বাজার যতটা নিতে পারে, ততটাই বেচুন।'},
{icon:'🗺️',title:'আপনার ব্রিকের পরিকল্পনা',sub:'শুধু খাটুনি নয়, বুদ্ধি দিয়ে',steps:[
"আপনার TP ক্যালেন্ডার দেখুন। মাসের প্রতিদিন কোন ব্রিক, জেনে রাখুন।",
"প্রতিটি ব্রিকের জন্য লিখুন: সেরা ৫ ডাক্তার, সেরা ৫ কেমিস্ট, হোলসেলার আর NPD আউটলেট।",
"রুট ঠিক করুন: আগে হোলসেলার, দুপুরে ডাক্তার, বিকেলে রিটেলার।",
"আজ কিছু বাদ গেছে? সেটা ওই ব্রিকের পরের তারিখে চলে যায়। প্রতি সকালে এগিয়ে আসা কাজ দেখুন।",
"প্রতিটি ব্রিক থেকে মাসের POB-এর ন্যায্য অংশ আসা উচিত। বেরোনোর আগে সংখ্যাটা জানুন।"],
says:'পরিকল্পনা ছাড়া ব্রিকে গেলে দিনটা খরচ হয়, বিনিয়োগ হয় না।'},
{icon:'🏕️',title:'ডাক্তার ক্যাম্প কীভাবে করবেন',sub:'শক্তি ক্যাম্প, ধাপে ধাপে',steps:[
"ভালো রোগী আসেন এমন লিস্ট ডাক্তার বাছুন। এক সপ্তাহ আগে তাঁর সঙ্গে তারিখ ঠিক করুন।",
"উপকরণ, রেজিস্টার আর ইনপুট নিজের স্টক থেকে গুছিয়ে নিন। কম থাকলে অ্যাপে Request stock করুন।",
"সেদিন আগে পৌঁছন, পরিচ্ছন্নভাবে সাজান আর ডাক্তারের কর্মীদের সাহায্য করুন।",
"রোগী আর প্রেসক্রিপশনের সংখ্যা ছবি সহ লিখে রাখুন।",
"পরদিন কাছের কেমিস্টে গিয়ে নিশ্চিত করুন যে লেখা প্রোডাক্ট স্টকে আছে।"],
says:'ভালো ক্যাম্প বছরের পর বছর টেকা সম্পর্ক গড়ে। বিয়ের মতো পরিকল্পনা করুন।'},
{icon:'⏰',title:'সময় আর নিজের প্রেরণা',sub:'নিজের দিনের মালিক হোন',steps:[
"সময়ে শুরু করুন। সকাল ১০টার আগের প্রথম কলই সারা দিনের সুর বাঁধে।",
"মাঠে ফোন শুধু কাজের জন্য। সোশ্যাল মিডিয়া সন্ধ্যা পর্যন্ত অপেক্ষা করতে পারে।",
"দিনের টার্গেট ছোট লক্ষ্যে ভাগ করুন: দুপুরের আগে ₹X, বাকিটা পরে।",
"খারাপ কলের পরে একটা গভীর শ্বাস নিন, আর হাসিমুখে পরের দোকানে ঢুকুন।",
"প্রতি সন্ধ্যায় একটা শেখা কথা লিখুন। রোজকার ছোট উন্নতি বড় কেরিয়ার গড়ে।"],
says:'প্রেরণা শুরু করায়। অভ্যাস এগিয়ে নিয়ে যায়।'},
{icon:'🏆',title:'আপনার ইনসেনটিভ জিতুন',sub:'নিয়ম জানুন, তারপর ছাপিয়ে যান',steps:[
"মাসিক ইনসেনটিভ টার্গেটের ৯৭ শতাংশ থেকে শুরু। ১০০ আর ১১০ শতাংশে অনেক বেশি মেলে।",
"মাইলস্টোন বোনাসের জন্য মাসের ১০০ শতাংশ আর ১৭ তারিখের মধ্যে ৪০ শতাংশ দরকার।",
"চারটি KPI শর্তই দরকার: গত বছরের চেয়ে বৃদ্ধি, রিটার্ন ৩ শতাংশ বা কম, আউটলেট কভারেজ ৯০ শতাংশ, ডাক্তার কভারেজ ৯৫ শতাংশ।",
"প্রতি সকালে Progress ট্যাব দেখুন: প্রতিটি স্তরের জন্য আর কত বেচতে হবে, দেখায়।",
"ইমপ্যাক্ট ব্র্যান্ড (Deca, R-Loc, Skinlite, Dexona) ত্রৈমাসিকেও গোনা হয়। প্রতি সপ্তাহে জোর দিন।"],
says:'ইনসেনটিভ ভাগ্য নয়, রোজকার শৃঙ্খলার ফল। প্রতিদিন নজর রাখুন।'}];
window.COACH=window.COACH||{};
COACH.as.phases=['পৰ্যায় ১ · ভেটি','পৰ্যায় ২ · বিক্ৰীৰ দক্ষতা','পৰ্যায় ৩ · ব্যৱসায় আৰু সংখ্যা','পৰ্যায় ৪ · চেম্পিয়ন'];
COACH.as.phaseSub=['আপোনাৰ প্ৰথম দুসপ্তাহ','কোৱা, শুনা আৰু বুজোৱা','মাৰ্জিন, ষ্টক আৰু ষ্টকিষ্ট','পৰিকল্পনা, নেতৃত্ব, জয়'];
COACH.as.modules2=[
{icon:'💊',title:'আমাৰ প্ৰডাক্ট সহজ কথাত',sub:'কোনটো ব্ৰেণ্ড কিহৰ বাবে',steps:[
"R-Loc 150 হৈছে ৰেনিটিডিন, এচিডিটি আৰু আলচাৰৰ বিষৰ বাবে। R-Loc D-ত ডমপেৰিডোনো আছে, বমি-ভাব বা পেট ফুলাৰ সৈতে এচিডিটিৰ বাবে।",
"R-Loc Raft বুকু জ্বলা আৰু ৰিফ্লাক্সৰ (GERD) বাবে। ডাক্তৰক কওক: যিসকল ৰোগীৰ খোৱাৰ পিছত জ্বলে।",
"Skinlite Cream মুখৰ ক'লা দাগৰ (মেলাজমা) বাবে। ৰাতি লগাব লাগে, কেৱল ডাক্তৰৰ প্ৰেছক্ৰিপচনত। দিনত ছানস্ক্ৰীন লাগে, সেয়েহে Day Care Sunscreen আৰু Bright Facewash লগত চলে।",
"Deca-Durabolin (ইনজেকচন) আৰু Dexona (টেবলেট আৰু ইনজেকচন) প্ৰেছক্ৰিপচনৰ প্ৰডাক্ট, ডাক্তৰে নিৰ্দিষ্ট অৱস্থাত দিয়ে। কেৱল ডিটেলিং এইডত যি লিখা আছে, সেয়াই কওক।",
"Oflin, Oflin-O, Ciprobid আৰু Tiniba সংক্ৰমণৰ ঔষধ। Zipcet এলাৰ্জীৰ বাবে। Cadiphylate উশাহৰ কষ্টৰ সৈতে কাহৰ বাবে।",
"নিজে কেতিয়াও ঔষধৰ পৰামৰ্শ নিদিব। আপোনাৰ কাম: লিফলেটৰ কথা ডাক্তৰক কোৱা, আৰু কেমিষ্টৰ ওচৰত ষ্টক নিশ্চিত কৰা।"],
says:'আপুনি ডাক্তৰ হ\'ব নালাগে। প্ৰতিটো ব্ৰেণ্ড এশাৰীত জানক, আৰু আত্মবিশ্বাসেৰে কওক।'},
{icon:'📱',title:'এপ দিনে মাত্ৰ ২ মিনিট',sub:'কম টাইপ, বেছি বিক্ৰী',steps:[
"ৰাতিপুৱা: Today খোলক। Check-in টিপক, অগ্ৰাধিকাৰ আৰু POB টাৰ্গেট পঢ়ক। এক মিনিটেই যথেষ্ট।",
"প্ৰতিখন ফৰ্মত আপোনাৰ ব্ৰিক আগৰে পৰা ভৰোৱা আছে। কেৱল ডাক্তৰ বা দোকান বাছি Save টিপক।",
"আগৰবাৰ বছা ষ্টকিষ্ট আৰু ৰিটেইলাৰ এপে মনত ৰাখে। এপে যি জানে, সেয়া টাইপ নকৰিব।",
"চেম্পল বা ইনপুট কমি আহিলে Request stock টিপক। ফোন বা হোৱাটছএপ নালাগে।",
"সন্ধিয়া: Messages-ত ৰতন ৰয়ৰ ৰিভিউ পঢ়ক। 'Explanation required'-ৰ উত্তৰ ৰাতিপুৱা ১১ বজাৰ ভিতৰত দিয়ক।",
"ক্লিনিকত অপেক্ষাৰ খালী সময়ত আজিৰ ৩ মিনিটৰ পাঠ কৰি লওক।"],
says:'এপ আপোনাৰ সহায়ক, মালিক নহয়। সময় গ্ৰাহকক দিয়ক, ফোনক নহয়।'},
{icon:'🛡️',title:'যি নিয়ম কেতিয়াও নাভাঙিব',sub:'নিজকে আৰু কোম্পানীক সুৰক্ষিত ৰাখক',steps:[
"প্ৰেছক্ৰিপচনৰ প্ৰডাক্ট (Skinlite Cream, Deca, R-Loc, Dexona) কেৱল ডাক্তৰৰ প্ৰেছক্ৰিপচনত বিক্ৰী হয়। কেমিষ্টক প্ৰেছক্ৰিপচন অবিহনে বেচিবলৈ কেতিয়াও হেঁচা নিদিব।",
"ডাক্তৰৰ গিফট কেৱল লিষ্ট ডাক্তৰক, কোম্পানীৰ নীতি অনুসৰি। কেমিষ্টক ডাক্তৰৰ গিফট কেতিয়াও নহয়।",
"কেৱল অনুমোদিত ডিটেলিং এইডৰ কথা কওক। আন কোম্পানীৰ বিৰুদ্ধে অন্যায্য তুলনা নকৰিব।",
"সৎভাৱে ৰিপৰ্ট কৰক। ভুল ৰিপৰ্ট কম সংখ্যাতকৈও বেয়া। কম সংখ্যাত ৰতন ৰয়ে সহায় কৰিব; মিছাত কোনেও নোৱাৰে।",
"কোনো ৰোগী বা ডাক্তৰে পাৰ্শ্বক্ৰিয়াৰ কথা ক'লে, সেইদিনাই বিতংভাৱে ৰতন ৰয়ক জনাওক।",
"কোম্পানীয়ে যি স্কীম, ৰেট বা গিফট অনুমোদন কৰা নাই, তাৰ প্ৰতিশ্ৰুতি কেতিয়াও নিদিব।"],
says:'সংখ্যা পিছৰ সপ্তাহত ঠিক কৰিব পাৰি। বিশ্বাস এবাৰ গ\'লে আৰু উভতি নাহে।'},
{icon:'❓',title:'যি প্ৰশ্নই দুৱাৰ খোলে',sub:'সোধক, শুনক, তাৰপিছত বেচক',steps:[
"মুকলি প্ৰশ্ন সোধক যি কি, কোনটো, কেনেকৈৰে আৰম্ভ হয়: 'এচিডিটিৰ কেনেধৰণৰ ৰোগী আটাইতকৈ বেছি আহে?'",
"নিজৰ প্ৰডাক্ট নহয়, তেওঁৰ ব্যৱসায়ৰ বিষয়ে সোধক: 'ইয়াত কোনবোৰ স্কিন প্ৰডাক্ট আটাইতকৈ সোনকালে চলে?'",
"সম্পূৰ্ণকৈ শুনক। মূৰ দোঁৱাওক। তেওঁৰ এটা কথা লিখি ৰাখক।",
"পিচত তেওঁৰ কথাই ব্যৱহাৰ কৰক: 'আপুনি ক\'লে বহুতো ৰোগীৰ খোৱাৰ পিছত জ্বলে – ঠিক তাতেই R-Loc Raft কামত আহে।'",
"এটা ক্লজিং প্ৰশ্নৰে শেষ কৰক: 'আৰম্ভণিতে ৬ বটল বুক কৰি দিওঁ নে?'"],
says:'যি গ্ৰাহকে বেছি কথা কয়, তেওঁ বেছি কিনে। আপোনাৰ শ্ৰেষ্ঠ অস্ত্ৰ এটা ভাল প্ৰশ্ন।'},
{icon:'🧱',title:'আপত্তি সামৰা – ৪ খোজত',sub:'শুনক, সন্মতি, উত্তৰ, আকৌ খুজক',steps:[
"খোজ ১, শুনক: তেওঁক সম্পূৰ্ণ ক\'বলৈ দিয়ক। মাজতে বাধা নিদিব।",
"খোজ ২, অনুভূতিত সন্মতি দিয়ক, তথ্যত নহয়: 'বুজি পাইছোঁ দাদা, দামটো গুৰুত্বপূৰ্ণ।'",
"খোজ ৩, এটা তথ্যৰে উত্তৰ দিয়ক: টকাত মাৰ্জিন, লিখা ডাক্তৰ, বা স্কীম।",
"খোজ ৪, সৰু খোজৰে আকৌ খুজক: 'আটাইতকৈ সৰু লটেৰে আৰম্ভ কৰোঁ নে?'",
"সাধাৰণ আপত্তি: দামী, চাহিদা নাই, প্ৰতিযোগীয়ে বেছি দিয়ে, ষ্টক আগতেই আছে, মালিক নাই। প্ৰতিটোৰ কাৰ্ড Situations-ত আছে।"],
says:'আপত্তি মানে নহয় বুলি নহয়। ই এটা প্ৰশ্ন – আৰু ভালকৈ বুজাওক।'},
{icon:'💹',title:'মাৰ্জিন আৰু লাভৰ কথা',sub:'দেখুৱাওক তেওঁ কিমান উপাৰ্জন কৰিব',steps:[
"ৰিটেইলাৰে MRP-ৰ প্ৰায় ২০ শতাংশ উপাৰ্জন কৰে। হোলচেলাৰে প্ৰায় ৭ শতাংশ। ষ্টকিষ্টে প্ৰায় ১০ শতাংশ।",
"'ভাল মাৰ্জিন' নক\'ব। টকাত কওক: 'প্ৰতি টিউবত আপুনি প্ৰায় ₹৩৩ উপাৰ্জন কৰিব।'",
"ফ্ৰী মালৰ স্কীমত লাভ বাঢ়ে। দেখুৱাওক: '৫০+১০-ত আপোনাৰ লাভ প্ৰায় ২৮ শতাংশ হয়।'",
"Learn-ত Rates & offers-ৰ Profit calculator ব্যৱহাৰ কৰক। প্ৰডাক্ট আৰু গ্ৰাহক বাছি 'কি ক\'ব' শাৰীটো পঢ়ক।",
"দাম কোৱাৰ আগতে পেকত ছপা MRP নিশ্চয় চাই লওক।"],
says:'মানুহে প্ৰডাক্ট নিকিনে, লাভ কিনে। টকাত তেওঁৰ লাভ দেখুৱাওক।'},
{icon:'🏬',title:'ষ্টকিষ্ট আৰু হোলচেলাৰৰ সৈতে কাম',sub:'যি পাইপলাইনে প্ৰতিখন দোকান ভৰায়',steps:[
"প্ৰতি সপ্তাহে ষ্টকিষ্টৰ ওচৰলৈ যাওক। ষ্টক, বাকী অৰ্ডাৰ আৰু এক্সপায়াৰী চাওক।",
"প্ৰতি মাহৰ ৭ তাৰিখৰ ভিতৰত ষ্টক ষ্টেটমেণ্ট লওক। ইয়াৰ পৰা গম পায় আচলতে কি বিক্ৰী হৈছে।",
"স্লেব আৰু গিফট বুজাই কওক: যেনে Dexona ইনজেকচন, ৬ কেছ বা বেছিত ২ শতাংশ ৰেহাই।",
"ফ্লেট ৰেট কেৱল পোনপটীয়া Zydus ষ্টকিষ্টৰ বাবে, এখন ইনভইচত এবাৰ। আনক প্ৰতিশ্ৰুতি নিদিব।",
"হোলচেলাৰে বেছি মাল চলায়। ডাঙৰ লট মাহৰ আৰম্ভণিতে বুক কৰক, শেষ দিনা নহয়।"],
says:'ষ্টকিষ্ট খালী হ\'লে পৃথিৱীৰ শ্ৰেষ্ঠ ডিটেলিঙেও বিক্ৰী আনিব নোৱাৰে।'},
{icon:'♻️',title:'ষ্টক, এক্সপায়াৰী আৰু ৰিটাৰ্ণ',sub:'ৰিটাৰ্ণ ৩ শতাংশৰ তলত ৰাখক',steps:[
"চেলেবল ৰিটাৰ্ণ ৩ শতাংশ বা কম হ\'ব লাগিব, নহ\'লে ইনচেণ্টিভ হেৰায়।",
"যিমান বিক্ৰী হ\'ব, কেৱল সিমানেই বুক কৰক। জোৰকৈ লোৱা অৰ্ডাৰ ৰিটাৰ্ণ হৈ উভতি আহে।",
"প্ৰতিজন কেমিষ্টৰ ওচৰত মিয়াদ ওচৰ চপা ষ্টক চাওক। মিয়াদ উকলাৰ আগতে সোনকালে চলা দোকানলৈ নিয়ক।",
"ষ্টক ঘূৰাওক: পুৰণি আগত, নতুন পিছত।",
"লাহে চলা ষ্টকৰ কথা ৰতন ৰয়ক আগতীয়াকৈ জনাওক। আগতে খোজ ল\'লে ৰিটাৰ্ণ ৰক্ষা পৰে।"],
says:'যি বিক্ৰী উভতি আহে, সেয়া বিক্ৰী নহয়। বজাৰে যিমান ল\'ব পাৰে, সিমানেই বেচক।'},
{icon:'🗺️',title:'আপোনাৰ ব্ৰিকৰ পৰিকল্পনা',sub:'কেৱল কষ্ট নহয়, বুদ্ধিৰে',steps:[
"আপোনাৰ TP কেলেণ্ডাৰ চাওক। মাহৰ প্ৰতিদিনে কোনটো ব্ৰিক, জানি ৰাখক।",
"প্ৰতিটো ব্ৰিকৰ বাবে লিখক: শীৰ্ষ ৫ ডাক্তৰ, শীৰ্ষ ৫ কেমিষ্ট, হোলচেলাৰ আৰু NPD আউটলেট।",
"ৰুট ঠিক কৰক: প্ৰথমে হোলচেলাৰ, দুপৰীয়া ডাক্তৰ, আবেলি ৰিটেইলাৰ।",
"আজি কিবা বাদ পৰিল? সেয়া সেই ব্ৰিকৰ পিছৰ তাৰিখলৈ যায়। প্ৰতি ৰাতিপুৱা আগবঢ়া কাম চাওক।",
"প্ৰতিটো ব্ৰিকৰ পৰা মাহৰ POB-ৰ ন্যায্য অংশ আহিব লাগে। ওলোৱাৰ আগতে সংখ্যাটো জানক।"],
says:'পৰিকল্পনা নোহোৱাকৈ ব্ৰিকলৈ গ\'লে দিনটো খৰচ হয়, বিনিয়োগ নহয়।'},
{icon:'🏕️',title:'ডাক্তৰ কেম্প কেনেকৈ কৰিব',sub:'শক্তি কেম্প, খোজে খোজে',steps:[
"ভাল ৰোগী অহা লিষ্ট ডাক্তৰ বাছক। এসপ্তাহ আগতে তেওঁৰ সৈতে তাৰিখ ঠিক কৰক।",
"সামগ্ৰী, ৰেজিষ্টাৰ আৰু ইনপুট নিজৰ ষ্টকৰ পৰা সাজু কৰক। কম থাকিলে এপত Request stock কৰক।",
"সেইদিনা আগতে পাওক, পৰিপাটিকৈ সজাওক আৰু ডাক্তৰৰ কৰ্মচাৰীক সহায় কৰক।",
"ৰোগী আৰু প্ৰেছক্ৰিপচনৰ সংখ্যা ফটোৰ সৈতে লিখি ৰাখক।",
"পিছদিনা ওচৰৰ কেমিষ্টলৈ গৈ নিশ্চিত কৰক যে লিখা প্ৰডাক্ট ষ্টকত আছে।"],
says:'ভাল কেম্পে বছৰ বছৰ টিকি থকা সম্পৰ্ক গঢ়ে। বিয়াৰ দৰে পৰিকল্পনা কৰক।'},
{icon:'⏰',title:'সময় আৰু নিজৰ প্ৰেৰণা',sub:'নিজৰ দিনৰ মালিক হওক',steps:[
"সময়মতে আৰম্ভ কৰক। ৰাতিপুৱা ১০ বজাৰ আগৰ প্ৰথম কলেই গোটেই দিনৰ সুৰ বান্ধে।",
"পথাৰত ফোন কেৱল কামৰ বাবে। ছ\'চিয়েল মিডিয়া সন্ধিয়ালৈ অপেক্ষা কৰিব পাৰে।",
"দিনৰ টাৰ্গেট সৰু লক্ষ্যত ভাগ কৰক: দুপৰীয়াৰ আগতে ₹X, বাকীখিনি পিছত।",
"বেয়া কলৰ পিছত এটা দীঘল উশাহ লওক, আৰু হাঁহিমুখে পিছৰ দোকানলৈ যাওক।",
"প্ৰতি সন্ধিয়া এটা শিকা কথা লিখক। প্ৰতিদিনৰ সৰু উন্নতিয়ে ডাঙৰ কেৰিয়াৰ গঢ়ে।"],
says:'প্ৰেৰণাই আৰম্ভ কৰায়। অভ্যাসে আগুৱাই লৈ যায়।'},
{icon:'🏆',title:'আপোনাৰ ইনচেণ্টিভ জিকক',sub:'নিয়ম জানক, তাৰপিছত অতিক্ৰম কৰক',steps:[
"মাহেকীয়া ইনচেণ্টিভ টাৰ্গেটৰ ৯৭ শতাংশৰ পৰা আৰম্ভ। ১০০ আৰু ১১০ শতাংশত বহুত বেছি পোৱা যায়।",
"মাইলষ্টোন ব\'নাছৰ বাবে মাহৰ ১০০ শতাংশ আৰু ১৭ তাৰিখৰ ভিতৰত ৪০ শতাংশ লাগে।",
"চাৰিওটা KPI চৰ্ত লাগে: যোৱা বছৰতকৈ বৃদ্ধি, ৰিটাৰ্ণ ৩ শতাংশ বা কম, আউটলেট কভাৰেজ ৯০ শতাংশ, ডাক্তৰ কভাৰেজ ৯৫ শতাংশ।",
"প্ৰতি ৰাতিপুৱা Progress টেব চাওক: প্ৰতিটো স্তৰৰ বাবে আৰু কিমান বেচিব লাগিব, দেখুৱায়।",
"ইম্পেক্ট ব্ৰেণ্ড (Deca, R-Loc, Skinlite, Dexona) ত্ৰৈমাসিকতো গণনা হয়। প্ৰতি সপ্তাহে জোৰ দিয়ক।"],
says:'ইনচেণ্টিভ ভাগ্য নহয়, প্ৰতিদিনৰ অনুশাসনৰ ফল। প্ৰতিদিনে নজৰ ৰাখক।'}];
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
    save('checkin',f).then(function(ok){if(ok){U.confetti(30);render()}else if(btn){btn.disabled=false;btn.textContent='📍 '+w('checkin')}})})}

/* ---------- share ---------- */
function sharePlan(){var m=todayMsg();if(!m){toast(w('noplan'));return}var txt='*'+me().Name+' – '+TODAY+'*\n'+m.text+'\n\n— Ratan Roy, Guwahati Area';
  if(window.AndroidApp&&AndroidApp.share){AndroidApp.share(txt);return}toast('Update the app to share.')}

/* ---------- settings ---------- */
U.settings=function(focus){var body=h('div');
  body.append(h('div',{class:'sect'},h('b',{},'🌐 '+w('lang'))),h('div',{class:'seg'},[['en','English'],['hi','हिंदी'],['bn','বাংলা'],['as','অসমীয়া']].map(function(l){return h('button',{class:U.lang===l[0]?'on':'',onclick:function(){U.lang=l[0];lsSet('ft_lang',l[0]);U.stopSpeak();close();render()}},l[1])})));
  body.append(h('div',{class:'sect'},h('b',{},'🎨 '+w('theme'))),h('div',{class:'sw'},Object.keys(THEMES).map(function(k){var th=THEMES[k];return h('button',{class:lsGet('ft_theme','teal')===k?'on':'',onclick:function(){lsSet('ft_theme',k);applyTheme();close();render();U.play('ok')}},h('div',{class:'dots'},h('i',{style:'background:'+th.h1}),h('i',{style:'background:'+th.acc}),h('i',{style:'background:'+th.gold2})),th.n)})));
  body.append(h('div',{class:'sect'},h('b',{},'🔠 '+w('size'))),h('div',{class:'seg'},[['s','A'],['m','A+'],['l','A++']].map(function(z){return h('button',{class:lsGet('ft_size','s')===z[0]?'on':'',onclick:function(){lsSet('ft_size',z[0]);applyTheme();close();render()}},z[1])})));
  body.append(h('div',{class:'sect'},h('b',{},'🔊 '+w('sound'))),h('div',{class:'seg'},[[false,w('on')],[true,w('off')]].map(function(z){return h('button',{class:U.mute===z[0]?'on':'',onclick:function(){U.mute=z[0];lsSet('ft_mute',z[0]?'1':'0');close();render()}},z[1])})));
  body.append(h('div',{class:'note',style:'margin-top:14px'},'👤 Coach: Ratan Roy · CSM, Guwahati Area'));
  var close=sheet('⚙️ '+w('settings'),body)};

/* ---------- learning path ---------- */
var PATH=[['m11','n0','n1','m0','m1','m2','n2'],['m3','m4','n3','n4','m6','m5'],['m8','n5','m7','m9','n6','n7'],['m10','n8','n9','n10','n11']];
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
  var r=U.sub('perf',[['month',t('month')],['pob','POB'],['week',w('week')],['inc',t('inc')],['q4',t('q4')],['badges',w('badges')],['board',w('board')]]);app.append(r[0]);
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
var prevAfter=U.after;U.after=function(app,r){ensureMedia();prevAfter&&prevAfter(app,r);try{quickDocs(app,r)}catch(e){}};
try{if(S.ready)render()}catch(e){}
})();
/* Field Tracker – approved brick plan (days fixed after Ratan's approval), brick lock on mandatory entries,
   selfie check-in, Ventasys-first banner, Stockist terms (box / case / flats in one place). */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
var t=U.t,lsGet=U.lsGet,lsSet=U.lsSet;
function isMgr(){return S.mgr&&!S.viewAs}
function ym(d){return (d||TODAY).slice(0,7)}
function nextYm(){var d=new Date(TODAY+'T00:00:00');d.setDate(1);d.setMonth(d.getMonth()+1);return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)}
function monthName(m){return new Date(m+'-01T00:00:00').toLocaleDateString('en-IN',{month:'long',year:'numeric'})}
function daysOf(m){var d=new Date(m+'-01T00:00:00'),n=new Date(d.getFullYear(),d.getMonth()+1,0).getDate(),o=[];for(var i=1;i<=n;i++)o.push(m+'-'+('0'+i).slice(-2));return o}
function plans(email){return (S.entries||[]).filter(function(e){return e.type==='brick_plan'&&e.email===email})}
function planFor(email,m){var p=plans(email).filter(function(e){return e.month===m}).sort(function(a,b){return b.ts-a.ts});return p[0]||null}
function tpDay(email,d){var r=D.tp.find(function(x){return x.Email===email&&x.Date===d});return{type:r?r.DayType:(new Date(d+'T00:00:00').getDay()===0?'Weekly Off':'Field work'),brick:r&&r.BrickID?r.BrickID.split(' | ')[1]:'',beat:r?r.Beat:''}}
function effDay(email,d){var v=tpDay(email,d);plans(email).filter(function(p){return p.status==='approved'&&p.month===d.slice(0,7)&&p.days&&p.days[d]}).sort(function(a,b){return a.ts-b.ts}).forEach(function(p){v={type:p.days[d].type,brick:p.days[d].brick,changed:1}});return v}
function pendDay(email,d){var p=plans(email).filter(function(p){return p.status==='pending'&&p.days&&p.days[d]})[0];return p?p.days[d]:null}
/* ---------- today's brick: beat change > approved change > TP ---------- */
var baseBrick=window.brickToday;
if(typeof baseBrick==='function'){window.brickToday=brickToday=function(){var ch=todays('beat_change').slice(-1)[0];if(ch)return ch.actual;var v=effDay(myEmail(),TODAY);return v.brick||baseBrick()}}

/* ---------- styles ---------- */
var st=document.createElement('style');st.textContent=`
.vbar{display:flex;gap:10px;align-items:center;border-radius:14px;padding:10px 12px;margin:0 0 12px;background:#EAF2FF;border:1px solid #C9DBF7;color:#16325C;font-size:13px;line-height:1.35}
.vbar b{display:block;font-size:13.5px}
.lockn{font-size:12px;color:var(--muted);margin:-4px 0 8px;display:flex;gap:6px;align-items:center}
select.locked{background:var(--soft)!important;color:var(--ink)!important;opacity:1!important;border-style:dashed!important}
.bp-row{display:grid;grid-template-columns:86px 1fr;gap:8px;align-items:center;padding:7px 0;border-bottom:1px solid var(--line)}
.bp-row small{color:var(--muted)}.bp-row .off{color:var(--muted);font-size:13px}
.bpst{display:inline-block;font-size:12px;font-weight:700;padding:3px 10px;border-radius:999px}
.bpst.ok{background:var(--ok-bg);color:var(--ok)}.bpst.wait{background:var(--warn-bg);color:var(--warn)}.bpst.no{background:var(--bad-bg);color:var(--bad)}
.selfie{width:150px;height:150px;border-radius:50%;object-fit:cover;border:4px solid var(--gold);display:block;margin:6px auto 10px;background:var(--soft)}
.stk th,.stk td{font-size:12.5px;vertical-align:top}.stk td small{display:block;color:var(--muted)}
.forstk{display:flex;gap:8px;align-items:center;background:linear-gradient(135deg,var(--h1),var(--h3));color:#fff;border-radius:14px;padding:10px 12px;margin-bottom:10px;font-size:13px}
.forstk b{color:var(--gold2)}
`;document.head.appendChild(st);

/* ---------- brick plan screen (inside My TP) ---------- */
function planCard(email){var hq=(D.users.find(function(u){return u.Email===email})||{}).HQ,box=h('div',{class:'phase'});
  var months=[ym(),nextYm()],cur=S.tab.bpm||months[0];
  box.append(h('div',{class:'ph'},h('b',{},'📋 My brick plan'),h('div',{class:'subtabs',style:'margin:0;padding:0'},months.map(function(m){return h('button',{class:m===cur?'on':'',onclick:function(){S.tab.bpm=m;S.tab.bpEdit=false;render()}},new Date(m+'-01T00:00:00').toLocaleDateString('en-IN',{month:'short'}))}))));
  var pend=plans(email).filter(function(p){return p.month===cur&&p.status==='pending'}),ret=plans(email).filter(function(p){return p.month===cur&&p.status==='returned'}).sort(function(a,b){return b.ts-a.ts})[0];
  box.append(h('div',{style:'margin:6px 0'},h('span',{class:'bpst ok'},'✅ Same as TP – no approval needed'),pend.length?h('span',{class:'bpst wait',style:'margin-left:6px'},'⏳ '+pend.reduce(function(n,p){return n+Object.keys(p.days||{}).length},0)+' change(s) waiting'):''));
  if(ret&&ret.note)box.append(h('div',{class:'note'},'↩️ Ratan Roy returned a change: '+ret.note));
  var editing=!isMgr()&&S.tab.bpEdit,draft=S.tab.bpDraft&&S.tab.bpDraft.m===cur?S.tab.bpDraft:(S.tab.bpDraft={m:cur,days:{}});
  var bricks=bricksOf(hq),TY=['Field work','Joint working','Weekly Off','Leave','Holiday','Meeting'],list=h('div');
  daysOf(cur).forEach(function(d){var e=effDay(email,d),pd=pendDay(email,d),v=draft.days[d]||{type:e.type,brick:e.brick};
    var lab=h('div',{},h('b',{},new Date(d+'T00:00:00').toLocaleDateString('en-IN',{weekday:'short',day:'numeric'})),h('small',{style:'display:block'},v.type));
    var right;if(editing){var ty=h('select',{},TY.map(function(x){return h('option',{value:x,selected:x===v.type},x)}));var bs=h('select',{},[h('option',{value:''},'Brick…')].concat(bricks.map(function(b){return h('option',{value:b,selected:b===v.brick},b)})));
      function upd(){draft.days[d]={type:ty.value,brick:/Field|Joint/.test(ty.value)?bs.value:''};bs.disabled=!/Field|Joint/.test(ty.value)}ty.onchange=upd;bs.onchange=upd;bs.disabled=!/Field|Joint/.test(v.type);right=h('div',{style:'display:grid;gap:4px'},ty,bs)}
    else right=h('div',{},/Field|Joint/.test(e.type)?(e.brick||'—'):h('span',{class:'off'},e.type),e.changed?h('small',{style:'display:block;color:var(--ok)'},'✅ changed, approved'):'',pd?h('small',{style:'display:block;color:var(--warn)'},'⏳ change asked: '+(pd.brick||pd.type)):'');
    list.append(h('div',{class:'bp-row'},lab,right))});
  box.append(list);
  if(!isMgr()){if(!editing)box.append(h('button',{class:'ghost',style:'width:100%;margin-top:10px',onclick:function(){S.tab.bpEdit=true;S.tab.bpDraft={m:cur,days:{}};render()}},'✏️ Change some days'));
    else box.append(h('button',{style:'width:100%;margin-top:10px',onclick:function(){var diff={};Object.keys(draft.days).forEach(function(d){var v=draft.days[d],e=effDay(email,d);if(v.type!==e.type||(v.brick||'')!==(e.brick||''))diff[d]=v});
      var miss=Object.keys(diff).filter(function(d){return /Field|Joint/.test(diff[d].type)&&!diff[d].brick});if(miss.length){toast('Pick a brick for '+miss.length+' day(s).');return}
      if(!Object.keys(diff).length){S.tab.bpEdit=false;toast('No change – nothing to approve.');render();return}
      save('brick_plan',{month:cur,days:diff,status:'pending'}).then(function(ok){if(ok){S.tab.bpEdit=false;render()}})}},'📤 Send only the changes to Ratan Roy'))}
  if(isMgr())pend.forEach(function(p){box.append(h('div',{class:'note'},h('b',{},'Change asked'),Object.keys(p.days).sort().map(function(d){var e=tpDay(email,d);return h('div',{},new Date(d+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short'})+': '+(e.brick||e.type)+' → '+(p.days[d].brick||p.days[d].type))}),
    h('div',{style:'display:flex;gap:8px;margin-top:8px'},h('button',{style:'flex:1',onclick:function(){S.db.collection('entries').doc(p._id).update({status:'approved',approvedTs:Date.now()}).then(function(){toast('Approved');render()})}},'✅ Approve'),h('button',{class:'ghost',style:'flex:1',onclick:function(){var n=prompt('What should be corrected?')||'';S.db.collection('entries').doc(p._id).update({status:'returned',note:n}).then(function(){toast('Returned');render()})}},'↩️ Return'))))});
  return box}
var tpRoute=U.routes.tp;U.routes.tp=function(app){var email=isMgr()?(S.tab.tpWho||(D.users.filter(function(u){return u.Role==='CSO'&&u.Status==='Active'})[0]||{}).Email):myEmail();tpRoute(app);app.append(planCard(email))};

/* ---------- lock mandatory entries to today's brick ---------- */
var LOCK={rloc:1,dexona:1,raft:{dr:1},deca:{dr:1},skin:{npd:1,photo:1}};
function lockBricks(app,r){var rule=LOCK[r];if(!rule||isMgr())return;if(typeof rule==='object'){var tab=S.tab[r]||Object.keys(rule)[0];if(!rule[tab])return}
  var b=brickToday();if(!b)return;app.querySelectorAll('select[name=brick]').forEach(function(sel){if(sel.dataset.lk)return;sel.dataset.lk='1';if(sel.value!==b&&[].some.call(sel.options,function(o){return o.value===b})){sel.value=b;sel.dispatchEvent(new Event('change',{bubbles:true}))}
    sel.classList.add('locked');sel.addEventListener('mousedown',function(e){e.preventDefault();toast('Locked to today\'s brick. Worked another brick? Use Beat change.')});sel.addEventListener('keydown',function(e){e.preventDefault()});sel.addEventListener('change',function(){if(sel.value!==b){sel.value=b;sel.dispatchEvent(new Event('change',{bubbles:true}))}});
    var lab=sel.closest('label');if(lab&&!lab.nextSibling||lab&&!(lab.nextSibling.classList&&lab.nextSibling.classList.contains('lockn')))lab.after(h('div',{class:'lockn'},'🔒 Today\'s brick'));S.dirty=false})}

/* ---------- Ventasys first ---------- */
function vbar(){return h('div',{class:'vbar'},h('span',{},'📋'),h('div',{},h('b',{},'Ventasys reporting is mandatory'),'Enter your calls, POB and inputs in Ventasys as usual. This app reads them – and only asks what Ventasys doesn\'t have.'))}

/* ---------- selfie check-in ---------- */
var REASONS=['Doctor / chemist not available','Joint work with Ratan Roy','Urgent stockist order','Rain / road problem','Other'];
U.beforeCheckin=function(go){var x=who()||{},b=brickToday(),tpv=tpDay(myEmail(),TODAY);if(todays('beat_change').length){selfie(go);return}
  var body=h('div'),ch={brick:'',reason:''};
  function step1(){body.innerHTML='';body.append(h('div',{class:'lcard',style:'text-align:center'},h('div',{class:'meta'},new Date(TODAY+'T00:00:00').toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long'})),h('h3',{style:'margin:6px 0'},(x.Name||'').split(' ')[0]+', today your brick is'),h('div',{class:'big',style:'color:var(--accent)'},b||tpv.beat||'—'),h('small',{style:'color:var(--muted)'},'As per your plan')),
      h('button',{style:'width:100%',onclick:function(){close();selfie(go)}},'✅ Yes, correct'),h('button',{class:'ghost',style:'width:100%;margin-top:8px',onclick:step2},'🔀 No, I am working another brick'))}
  function step2(){body.innerHTML='';var bricks=bricksOf(myHQ()).filter(function(z){return z!==b});
    body.append(h('small',{},'Which brick today?'),h('div',{class:'chips'},bricks.map(function(z){return h('button',{class:ch.brick===z?'on':'',onclick:function(){ch.brick=z;step2()}},z)})),h('small',{},'Why?'),h('div',{class:'chips'},REASONS.map(function(z){return h('button',{class:ch.reason===z?'on':'',onclick:function(){ch.reason=z;step2()}},z)})),
      h('button',{style:'width:100%;margin-top:8px',disabled:!(ch.brick&&ch.reason),onclick:function(){save('beat_change',{actual:ch.brick,planned:b,reason:ch.reason,status:'pending'}).then(function(ok){if(ok){close();selfie(go)}})}},'📤 Send to Ratan Roy for approval'),h('button',{class:'ghost',style:'width:100%;margin-top:8px',onclick:step1},'‹ Back'))}
  var ov=h('div',{class:'ftsheet'},h('div',{class:'pn'},h('div',{class:'grab'}),h('div',{class:'hd'},h('b',{},'📍 Start my day'),h('button',{class:'ghost',onclick:function(){close()}},'✕')),body));function close(){ov.remove()}document.body.append(ov);step1()};
// Only the latest selfie is kept: the server renames it and removes this CSO's older selfies.
function keepOnlySelfie(id){try{var a=JSON.parse(U.lsGet('ft_auth','null'));if(!id||!a||!window.google||!google.script)return;google.script.run.withFailureHandler(function(){}).api(a,'selfie',{id:id})}catch(e){}}
function selfie(go){var body=h('div'),url=null,busy=false;var pic=h('img',{class:'selfie',alt:'',src:'data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#8aa" stroke-width="1.2"><circle cx="12" cy="9" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>')});
  var inp=h('input',{type:'file',accept:'image/*',capture:'user',style:'display:none'});var stx=h('div',{style:'text-align:center;color:var(--muted);font-size:13px;min-height:18px'});
  var take=h('button',{style:'width:100%',onclick:function(){inp.click()}},'📸 Take my selfie');
  var done=h('button',{style:'width:100%;margin-top:8px',disabled:true,onclick:function(){if(!url||busy)return;close();go({selfie:url})}},'✅ Start my day');
  inp.addEventListener('change',function(){var f=inp.files&&inp.files[0];if(!f)return;busy=true;stx.textContent='Uploading…';take.disabled=true;
    uploadPhoto(f).then(function(p){url=p.url;keepOnlySelfie(p.id);pic.src=p.url;stx.textContent='Looks good!';done.disabled=false;busy=false;take.disabled=false;take.textContent='📸 Retake'},function(e){busy=false;take.disabled=false;stx.textContent=(e&&e.message)||'Upload failed. Try again.'})});
  body.append(h('div',{class:'quote'},h('div',{class:'who'},'💬 '+t('says')),h('div',{class:'q'},'Your selfie and location go to me from here. No need to send a picture separately on WhatsApp – the app does it for you.')),pic,stx,inp,take,done,
    h('button',{class:'ghost',style:'width:100%;margin-top:8px',onclick:function(){close();go({selfie:'',noSelfie:1})}},'No camera now – check in without selfie'));
  var ov=h('div',{class:'ftsheet'},h('div',{class:'pn'},h('div',{class:'grab'}),h('div',{class:'hd'},h('b',{},'📍 Start my day'),h('button',{class:'ghost',onclick:function(){close()}},'✕')),body));
  function close(){ov.remove()}document.body.append(ov)}

/* ---------- Stockist terms: box, case, minimum billing, case discounts, flats, stockist gifts – one place ---------- */
var CASE={'R-Loc 150 Tab':{box:'30 strips × 30 tabs',cs:'18 boxes'},'R-Loc D Tab':{box:'15 strips × 30 tabs',cs:'30 boxes'},'R-Loc Inj 2ml':{box:'14 ampoules',cs:''},'Oflin Infusion 100ml':{box:'1 bottle',cs:'48 bottles'},'Falcigo 60 Inj':{box:'1 vial',cs:'65 vials'},'Falcigo 120 Inj':{box:'1 vial',cs:'150 units'},'Ciprobid 250 Tab':{box:'10 × 5 × 10 tabs',cs:'1,200'},'Ciprobid 500 Tab':{box:'10 × 5 × 10 tabs',cs:''},'Dexona Tab':{box:'30 strips × 30 tabs',cs:''},'Oflin 200 Tab':{box:'10 strips × 10 tabs',cs:''},'Oflin 400 Tab':{box:'10 strips × 10 tabs',cs:''},'Oflin-O Tab':{box:'10 strips × 10 tabs',cs:''},'Tiniba 300 Tab':{box:'20 strips × 10 tabs',cs:''},'Tiniba 500 Tab':{box:'10 × 3 × 10 tabs',cs:''},'Zipcet Tab':{box:'10 strips × 10 tabs',cs:''},'Dexona Inj 2ml':{box:'8 vials / 20 vials',cs:''}};
var STKGIFT={'R-Loc 150 Tab':'1 case → 18 Gillette Presto (2–28 Nov, trade stockists)','R-Loc D Tab':'1 case → 15 Gillette Presto (2–28 Nov, trade stockists)','Deca-Durabolin 25mg/ml':'₹50,000 of Deca → 1 USHA iron','Deca-Durabolin 50mg/ml':'₹50,000 of Deca → 1 USHA iron','Deca-Durabolin 100mg/ml':'₹50,000 of Deca → 1 USHA iron','Skinlite Cream 15g':'1 case → 2 Raymond bedsheets · 2 cases → Hawkins 4 L cooker','Skinlite Cream 25g':'1 case → 2 Raymond bedsheets · 2 cases → Hawkins 4 L cooker','Skinlite Day Care Sunscreen 30g':'1 case → 1 branded water bottle','Skinlite Bright Facewash 50g':'2 cases → 1 branded water bottle'};
function vStockist(app){var R=U.REF();if(!R)return;app.append(h('div',{class:'forstk'},h('span',{},'🏬'),h('div',{},h('b',{},'For stockists only. '),'Box and case (C/S) sizes, minimum billing, case discounts, flat rates and stockist gifts. Do not quote flat rates to retailers or wholesalers.')));
  app.append(h('div',{class:'sect'},h('b',{},'Stockist terms · '+(R.asOf||''))));
  (R.products||[]).forEach(function(p){var c=CASE[p.n]||{};var gift=TODAY<='2026-11-30'?(STKGIFT[p.n]||''):'';var cs=c.cs||(p.case||'').replace(/^1 case = /,'');
    var L=[['Box',c.box],['1 case (C/S)',cs],['Minimum billing',p.minBill],['Case discount',p.slab],['Flat rate',p.flat?p.flat.map(function(f){return f[0]+': ₹'+f[1]}).join(' · ')+' (direct Zydus stockist, one invoice)':''],['Stockist gift',gift]].filter(function(x){return x[1]});
    if(!L.length)return;
    app.append(h('div',{class:'lcard',style:'padding:12px 14px'},h('b',{},p.n),p.sch?h('div',{class:'meta'},'Scheme lots: '+p.sch):'',
      h('div',{style:'margin-top:6px'},L.map(function(x){return h('div',{style:'display:grid;grid-template-columns:118px 1fr;gap:8px;padding:5px 0;border-top:1px solid var(--line);font-size:13.5px'},h('span',{style:'color:var(--muted)'},x[0]),h('span',{style:x[0]==='Flat rate'?'font-weight:700;color:var(--accent)':''},x[1]))}))))});
  app.append(h('small',{style:'display:block;color:var(--muted)'},'Products without box or case size: waiting for the company list. Stockist margin is 10% of PTR; any extra discount he gives comes from this 10% (see Profit calculator).'))}
U.vStockist=vStockist;

/* ---------- hooks ---------- */
var prevToday=U.today;U.today=function(app,tk,rest){prevToday&&prevToday(app,tk,rest);if(!isMgr()){var hof=app.querySelector('.hof')||app.querySelector('.hero')||tk;hof.after(vbar())}else{var tp=app.querySelector('.phase');if(tp)tp.after(pendingPlans())}};
U.pendingPlans=function(){return pendingPlans()};U.vbar=function(){return vbar()};
function pendingPlans(){var L=(S.entries||[]).filter(function(e){return e.type==='brick_plan'&&e.status==='pending'}),B=(S.entries||[]).filter(function(e){return e.type==='beat_change'&&e.status==='pending'&&e.date>=TODAY});var box=h('div');if(!L.length&&!B.length)return box;
  box.className='phase';box.append(h('div',{class:'ph'},h('b',{},'📋 Brick changes to approve'),h('small',{},String(L.length+B.length))));
  B.forEach(function(e){box.append(h('div',{class:'lrow',style:'cursor:default'},h('div',{class:'tx'},h('b',{},e.name+' · today'),h('small',{},(e.planned||'—')+' → '+e.actual+' · '+e.reason)),h('button',{style:'min-height:auto;padding:8px 12px',onclick:function(){S.db.collection('entries').doc(e._id).update({status:'approved',approvedTs:Date.now()}).then(function(){toast('Approved');render()})}},'✅')))});
  L.forEach(function(p){box.append(h('div',{class:'lrow',onclick:function(){S.tab.tpWho=p.email;S.tab.bpm=p.month;go('tp')}},h('div',{class:'tx'},h('b',{},p.name+' · '+monthName(p.month)),h('small',{},Object.keys(p.days||{}).length+' day(s) changed · tap to review')),h('span',{class:'st'},'›')))});return box}
var prevAfter=U.after;U.after=function(app,r){prevAfter&&prevAfter(app,r);try{lockBricks(app,r)}catch(e){}};
var prevPerf=U.vPerf;
try{if(S.ready)render()}catch(e){}
})();
/* Field Tracker – meetings (phone / WhatsApp / video link) with on-screen card + phone alarms; offline saving. */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
var MGR_PHONE='918811087925';
function isMgr(){return S.mgr&&!S.viewAs}
function atOf(m){return m.at||Date.parse(m.date+'T'+(m.time||'10:00')+':00+05:30')}
function when(m){var d=new Date(atOf(m)),now=Date.now(),mins=Math.round((atOf(m)-now)/60000);var day=m.date===TODAY?'Today':new Date(m.date+'T00:00:00').toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'});
  var tm=d.toLocaleTimeString('en-IN',{hour:'numeric',minute:'2-digit'});var rel=mins>0&&mins<180?' · in '+(mins<60?mins+' min':Math.floor(mins/60)+' h '+(mins%60)+' min'):mins<=0&&mins>-60?' · now':'';return day+', '+tm+rel}
var HOW={phone:['📞','Phone call'],whatsapp:['💬','WhatsApp call'],link:['🎥','Video meeting']};
var HOWTXT={phone:'on a phone call',whatsapp:'on a WhatsApp call',link:'on the meeting link'};
function clock(m){return new Date(atOf(m)).toLocaleTimeString('en-IN',{hour:'numeric',minute:'2-digit'})}
function dayTxt(m){return m.date===TODAY?'today':new Date(m.date+'T00:00:00').toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'short'})}
function msg(m){return 'You are asked to join '+(HOWTXT[m.how]||HOWTXT.phone)+' '+dayTxt(m)+' at '+clock(m)+(m.how==='link'?', as per the link and instructions':', as per instructions')+'.'+(m.agenda?' Agenda: '+m.agenda+'.':'')+(m.prep?' Please be prepared with: '+m.prep+'.':'')}
U.meetMsg=msg;
function joinUrl(m){return m.how==='phone'?'tel:+'+MGR_PHONE:m.how==='whatsapp'?'https://wa.me/'+MGR_PHONE:(m.link||'')}
function openUrl(u){if(!u)return;try{if(window.AndroidApp&&AndroidApp.open){AndroidApp.open(u);return}}catch(e){}try{window.open(u,'_blank')}catch(e){location.href=u}}
function mine(){return (S.entries||[]).filter(function(e){return e.type==='meeting'&&e.email===myEmail()&&atOf(e)>Date.now()-60*60000&&!e.cancelled}).sort(function(a,b){return atOf(a)-atOf(b)})}

var st=document.createElement('style');st.textContent=`
.meet{border-radius:18px;padding:14px;margin:0 0 12px;color:#fff;background:linear-gradient(135deg,#1E3A8A,#2F56C9 55%,#3FB3AC);box-shadow:0 10px 24px rgba(30,58,138,.3);animation:rise .35s ease both;position:relative;overflow:hidden}
.meet .k{font-size:12px;letter-spacing:1.4px;text-transform:uppercase;color:#FFE08A;font-weight:700;display:flex;gap:6px;align-items:center}
.meet h3{margin:6px 0 2px;font-size:18px}.meet .w{font-size:14px;opacity:.9}.meet .ag{font-size:13px;opacity:.85;margin-top:6px}
.meet .bt{display:flex;gap:8px;margin-top:12px}.meet .bt button{flex:1;border:0;border-radius:12px;padding:11px;font-weight:700;min-height:auto}
.meet .j{background:#FFE08A;color:#2B2000}.meet .prep{background:rgba(255,224,138,.16);border-left:3px solid #FFE08A;padding:8px 10px;border-radius:8px;opacity:1}.meet .a{background:rgba(255,255,255,.18);color:#fff}
.meet.now{animation:glow 1.6s ease infinite alternate}@keyframes glow{to{box-shadow:0 0 0 6px rgba(255,224,138,.45),0 10px 24px rgba(30,58,138,.3)}}
.qbox{display:grid;gap:6px}
`;document.head.appendChild(st);

/* ---------- CSO: meeting card(s) ---------- */
function card(m){var soon=atOf(m)-Date.now()<15*60000;var hw=HOW[m.how]||HOW.phone;
  return h('div',{class:'meet'+(soon?' now':'')},h('div',{class:'k'},'📅 Meeting with Ratan Roy'),h('h3',{},m.title||'Team meeting'),h('div',{class:'w'},hw[0]+' '+hw[1]+' · '+when(m)),
    h('div',{class:'ag'},'You are asked to join '+(HOWTXT[m.how]||HOWTXT.phone)+' '+dayTxt(m)+' at '+clock(m)+(m.how==='link'?', as per the link and instructions.':', as per instructions.')),
    m.agenda?h('div',{class:'ag'},h('b',{},'Agenda: '),m.agenda):'',
    m.prep?h('div',{class:'ag prep'},h('b',{},'Please be prepared with: '),m.prep):'',
    h('div',{class:'bt'},h('button',{class:'j',onclick:function(){if(!m.seen)try{S.db.collection('entries').doc(m._id).update({seen:Date.now()})}catch(e){}openUrl(joinUrl(m))}},m.how==='phone'?'📞 Call now':m.how==='whatsapp'?'💬 Open WhatsApp':'🎥 Join meeting')))}
function alarms(){try{if(!window.AndroidApp||!AndroidApp.meeting)return;mine().forEach(function(m){AndroidApp.meeting(String(m._id),atOf(m),'📅 '+(m.title||'Meeting with Ratan Roy'),msg(m))})}catch(e){}}

/* ---------- manager: schedule + status ---------- */
function scheduleSheet(){var cs=D.users.filter(function(u){return u.Role==='CSO'&&u.Status==='Active'});var f={how:'whatsapp',who:cs.map(function(u){return u.Email}),date:TODAY,time:'',title:'',link:'',agenda:'',prep:''};var body=h('div');
  function draw(){body.innerHTML='';var title=h('input',{value:f.title,placeholder:'e.g. POB review, MS-1 push'});title.oninput=function(){f.title=title.value};
    var dt=h('input',{type:'date',value:f.date});dt.onchange=function(){f.date=dt.value};var tm=h('input',{type:'time',value:f.time});tm.onchange=function(){f.time=tm.value};
    var link=h('input',{value:f.link,placeholder:'Paste Meet / Zoom / Teams link'});link.oninput=function(){f.link=link.value};var ag=h('input',{value:f.agenda,placeholder:'e.g. November POB review'});ag.oninput=function(){f.agenda=ag.value};var pr=h('input',{value:f.prep,placeholder:'e.g. MS-1 stock, POB of last 7 days (optional)'});pr.oninput=function(){f.prep=pr.value};
    body.append(h('label',{},'Topic',title),h('div',{style:'display:grid;grid-template-columns:1fr 1fr;gap:8px'},h('label',{},'Date',dt),h('label',{},'Time',tm)),
      h('small',{},'How'),h('div',{class:'chips'},Object.keys(HOW).map(function(k){return h('button',{class:f.how===k?'on':'',onclick:function(){f.how=k;draw()}},HOW[k][0]+' '+HOW[k][1])})),
      f.how==='link'?h('label',{},'Link',link):h('small',{style:'display:block;color:var(--muted)'},f.how==='phone'?'CSOs get a "Call now" button to your number.':'CSOs get an "Open WhatsApp" button to your WhatsApp.'),
      h('small',{},'Who'),h('div',{class:'chips'},[h('button',{class:f.who.length===cs.length?'on':'',onclick:function(){f.who=f.who.length===cs.length?[]:cs.map(function(u){return u.Email});draw()}},'Everyone')].concat(cs.map(function(u){var on=f.who.indexOf(u.Email)>=0;return h('button',{class:on?'on':'',onclick:function(){f.who=on?f.who.filter(function(x){return x!==u.Email}):f.who.concat([u.Email]);draw()}},u.Name.split(' ')[0])}))),
      h('label',{},'Agenda (optional)',ag),h('label',{},'Be prepared with (optional)',pr),
      h('button',{style:'width:100%;margin-top:8px',onclick:function(){if(!f.time){toast('Pick the time.');return}if(!f.who.length){toast('Pick who should join.');return}if(f.how==='link'&&!/^https?:\/\//.test(f.link)){toast('Paste the meeting link.');return}
        var at=Date.parse(f.date+'T'+f.time+':00+05:30'),mid='m'+Date.now();
        Promise.all(f.who.map(function(e){var u=cs.find(function(x){return x.Email===e});return S.db.collection('entries').add({type:'meeting',mid:mid,email:e,hq:u.HQ,name:u.Name,by:'Ratan Roy',ts:Date.now(),date:f.date,time:f.time,at:at,how:f.how,link:f.link,title:f.title||'Team meeting',agenda:f.agenda,prep:f.prep})}))
          .then(function(){close();toast('Meeting sent');render()},function(){toast('Not sent. Check internet.')})}},'📤 Send to CSOs'))}
  draw();var ov=h('div',{class:'ftsheet'},h('div',{class:'pn'},h('div',{class:'grab'}),h('div',{class:'hd'},h('b',{},'📅 Schedule a meeting'),h('button',{class:'ghost',onclick:function(){close()}},'✕')),body));function close(){ov.remove()}document.body.append(ov)}
U.scheduleMeeting=scheduleSheet;U.meetPanel=function(){return mgrPanel()};U.myMeetings=function(){return mine().filter(function(m){return atOf(m)-Date.now()<36*3600000})};U.meetCard=function(m){return card(m)};
function mgrPanel(){var L=(S.entries||[]).filter(function(e){return e.type==='meeting'&&atOf(e)>Date.now()-60*60000&&!e.cancelled}),G={};L.forEach(function(e){(G[e.mid]=G[e.mid]||[]).push(e)});
  var box=h('div',{class:'phase'},h('div',{class:'ph'},h('b',{},'📅 Meetings'),h('button',{style:'min-height:auto;padding:8px 12px',onclick:scheduleSheet},'+ Schedule')));
  var ids=Object.keys(G).sort(function(a,b){return atOf(G[a][0])-atOf(G[b][0])});if(!ids.length)box.append(h('small',{style:'color:var(--muted)'},'No meeting scheduled. Tap + Schedule – it appears on the CSOs\' screens with a phone alert, then reminders 15 minutes before and at the time.'));
  ids.forEach(function(id){var g=G[id],m=g[0];box.append(h('div',{class:'lrow',style:'cursor:default'},h('div',{class:'tx'},h('b',{},m.title+' · '+when(m)),h('small',{},(HOW[m.how]||HOW.phone)[1]+' · '+g.map(function(e){return e.name.split(' ')[0]}).join('  '))),
    h('button',{class:'ghost',style:'min-height:auto;padding:8px 10px',onclick:function(){if(!confirm('Cancel this meeting for everyone?'))return;Promise.all(g.map(function(e){return S.db.collection('entries').doc(e._id).update({cancelled:1})})).then(function(){toast('Meeting cancelled');render()})}},'✕')))});
  return box}

/* ---------- offline saving: entries wait on the phone and send themselves ---------- */
var QK='ft_outbox';function q(){try{return JSON.parse(U.lsGet(QK,'[]'))}catch(e){return[]}}function setQ(a){U.lsSet(QK,JSON.stringify(a))}
var baseSave=window.save;
if(typeof baseSave==='function'){window.save=save=function(type,fields){if(navigator.onLine===false&&!(fields&&fields.photos&&fields.photos.length)){var w=who();if(!w||isMgr())return baseSave(type,fields);
    var doc=Object.assign({type:type,email:w.Email,hq:w.HQ,name:w.Name,by:'',ts:Date.now(),date:TODAY,offline:1},fields);var a=q();a.push(doc);setQ(a);S.dirty=false;toast('📶 No network – saved on your phone. It will send itself.');U.play('ok');
    try{S.entries=(S.entries||[]).concat([doc])}catch(e){}return Promise.resolve(true)}return baseSave(type,fields)}}
function flush(quiet){var a=q();if(!a.length||!S.db||navigator.onLine===false)return Promise.resolve(a.length);var doc=a[0];return S.db.collection('entries').add(doc).then(function(){var b=q();b.shift();setQ(b);if(b.length)return flush(quiet);if(!quiet)toast('📶 Back online – '+a.length+' saved entr'+(a.length>1?'ies':'y')+' sent');return 0},function(){return q().length})}
U.flushOutbox=function(){return flush(true)};U.outboxCount=function(){return q().length};
window.addEventListener('online',function(){setTimeout(function(){flush()},1500)});setInterval(function(){flush()},60000);
function outboxNote(){var n=q().length;return n?h('div',{class:'note',style:'margin-bottom:10px'},'📶 '+n+' entr'+(n>1?'ies':'y')+' saved on your phone, waiting for network.'):''}

/* ---------- hooks ---------- */
var prevToday=U.today;U.today=function(app,tk,rest){prevToday&&prevToday(app,tk,rest);
  if(isMgr()){var tp=app.querySelector('.phase');var p=mgrPanel();if(tp)tp.before(p);else tk.after(p);return}
  var ms=mine().filter(function(m){return atOf(m)-Date.now()<36*3600000});var after=tk;ms.forEach(function(m){var c=card(m);after.after(c);after=c});var ob=outboxNote();if(ob)after.after(ob);alarms()};
setTimeout(function(){flush()},4000);
try{if(S.ready)render()}catch(e){}
})();
/* Field Tracker – Sync: always-visible button + reminders (on opening, after each entry, when all tasks are done). */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
var K='ft_lastsync',KD='ft_unsynced';
function isMgr(){return S.mgr&&!S.viewAs}
function last(){return +U.lsGet(K,'0')||0}
function unsynced(){return U.lsGet(KD,'')==='1'||(U.outboxCount&&U.outboxCount()>0)}
var syncedThisOpen=false,busy=false,allDoneShown=U.lsGet('ft_alldone_'+TODAY,'')==='1';
function ago(){var t=last();if(!t)return'not synced yet';var m=Math.round((Date.now()-t)/60000);if(m<1)return'synced just now';if(m<60)return'synced '+m+' min ago';
  return'synced '+new Date(t).toLocaleTimeString('en-IN',{hour:'numeric',minute:'2-digit'})}

var st=document.createElement('style');st.textContent=`
#ftsync{position:fixed;right:12px;bottom:calc(150px + env(safe-area-inset-bottom));z-index:40;display:flex;align-items:center;gap:8px;border:0;border-radius:999px;padding:9px 14px 9px 11px;min-height:auto;
  background:linear-gradient(135deg,var(--h1,#0F5257),var(--h3,#1B7F79));color:#fff;font-weight:700;font-size:14px;box-shadow:0 8px 20px rgba(0,0,0,.25)}
#ftsync small{display:block;font-weight:500;font-size:10.5px;opacity:.85;line-height:1.1}
#ftsync .ic{width:20px;height:20px;display:inline-flex}
#ftsync.spin .ic{animation:ftspin 0.9s linear infinite}@keyframes ftspin{to{transform:rotate(360deg)}}
#ftsync.due{background:linear-gradient(135deg,#E8A317,#F5C451);color:#2B2000;animation:ftpulse 1.4s ease-in-out infinite}
@keyframes ftpulse{50%{box-shadow:0 0 0 7px rgba(245,196,81,.35),0 8px 20px rgba(0,0,0,.25)}}
#ftsync .dot{position:absolute;top:2px;right:4px;width:10px;height:10px;border-radius:50%;background:#E5484D;border:2px solid #fff}
.syncnote{display:flex;gap:10px;align-items:center;border-radius:14px;padding:12px;margin:0 0 12px;background:#FFF6DA;border:1px solid #F2D27A;color:#4A3800}
.syncnote b{display:block}.syncnote small{color:#6B5A1E}.syncnote button{margin-left:auto;min-height:auto;padding:9px 14px;white-space:nowrap}
html[data-theme=night] .syncnote{background:#2E2710;border-color:#6B5A1E;color:#FFE9A8}
`;document.head.appendChild(st);

var ICON='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M3 21v-5h5"/></svg>';
function btn(){var b=document.getElementById('ftsync');if(!b){b=document.createElement('button');b.id='ftsync';b.onclick=function(){doSync()};document.body.appendChild(b)}
  var due=!busy&&(unsynced()||!syncedThisOpen);b.className=(busy?'spin':'')+(due?' due':'');
  var html='<span class="ic">'+ICON+'</span><span>'+(busy?'Syncing…':'Sync')+'<small>'+(busy?'please wait':ago())+'</small></span>'+(unsynced()&&!busy?'<i class="dot"></i>':'');if(b._h!==html){b.innerHTML=html;b._h=html}
  b.style.display=document.getElementById('ftlogin')||typeof S==='undefined'||!S.db?'none':''}
setInterval(btn,3000);

// After every Sync: if a newer version of the screens is published, load it straight away (no reinstall, no waiting).
var EXEC='https://script.google.com/macros/s/AKfycbyFp_mIJqqv-vya_y_DFmW7nwzZc83PQY5PnwOdzMPYjFK3EYg-p-ZHz0M7vSgMlV3_/exec';
function checkUpdate(){try{var a=JSON.parse(U.lsGet('ft_auth','null'));if(!a||!window.google||!google.script||!window.FT_BUILD)return;
  google.script.run.withSuccessHandler(function(r){var b=r&&r.b;if(!b||b===window.FT_BUILD)return;
    if(U.flushOutbox&&U.outboxCount&&U.outboxCount()>0)return;U.lsSet('ft_upd','1');toast('⬇️ New version found – updating…');
    setTimeout(function(){try{window.top.location.href=EXEC}catch(e){try{window.open(EXEC,'_top')}catch(_){location.reload()}}},900)}).withFailureHandler(function(){}).api(a,'ver',{})}catch(e){}}
setTimeout(function(){try{if(U.lsGet('ft_upd','')==='1'){U.lsSet('ft_upd','');toast('✅ Updated – you have the latest version with all changes.')}}catch(e){}},2500);
function doSync(){if(busy)return;try{U.geoReset&&U.geoReset()}catch(e){}if(navigator.onLine===false){toast('📶 No network. Your entries are safe on your phone – tap Sync when network is back.');return}
  busy=true;btn();var t0=Date.now();
  Promise.resolve(U.flushOutbox?U.flushOutbox():0).then(function(left){
    try{document.dispatchEvent(new Event('visibilitychange'))}catch(e){}   // pulls the latest data from the server
    return new Promise(function(r){setTimeout(function(){r(left)},Math.max(0,1800-(Date.now()-t0)))})})
  .then(function(left){busy=false;if(left>0){toast('Some entries are still waiting – tap Sync again in a minute.');btn();return}
    syncedThisOpen=true;U.lsSet(K,String(Date.now()));U.lsSet(KD,'');try{U.play&&U.play('ok')}catch(e){}
    toast(isMgr()?'✅ Synced – you have the team\'s latest entries.':'✅ Synced – Ratan has all your entries and you have the latest from him.');try{render()}catch(e){btn()}
    checkUpdate()},
  function(){busy=false;btn();toast('Sync did not finish. Check internet and tap Sync again.')})}
U.sync=doSync;U.syncState=function(){return{busy:busy,due:unsynced()||!syncedThisOpen,unsent:unsynced(),opened:syncedThisOpen,ago:ago()}};U.allDone=function(){return allDone()};

/* after each entry: gentle nudge */
var baseSave=window.save;
if(typeof baseSave==='function'){window.save=save=function(type,fields){var r=baseSave(type,fields);Promise.resolve(r).then(function(ok){if(!ok||isMgr())return;U.lsSet(KD,'1');btn();
  setTimeout(function(){if(allDone()&&!allDoneShown){allDoneShown=true;U.lsSet('ft_alldone_'+TODAY,'1');toast('🎉 All tasks done for today! Tap Sync now so Ratan gets everything.')}
    else toast('Saved ✓  You can tap Sync now, or sync once everything is done at your end.')},1700)});return r}}

function allDone(){try{var L=(typeof TASKS!=='undefined'?TASKS:[]).map(function(t){return t.status().level}).filter(function(l){return l!=='na'});return L.length>0&&L.every(function(l){return l==='ok'})}catch(e){return false}}

function note(icon,title,sub,label){return h('div',{class:'syncnote'},h('span',{style:'font-size:22px'},icon),h('div',{},h('b',{},title),h('small',{},sub)),h('button',{onclick:function(){doSync()}},label||'🔄 Sync now'))}
var prevToday=U.today;U.today=function(app,tk,rest){prevToday&&prevToday(app,tk,rest);btn();if(isMgr())return;
  var n=null;
  if(allDone()&&unsynced())n=note('🎉','All tasks done – sync now','So Ratan sees everything you did today.');
  else if(!syncedThisOpen)n=note('🔄','Sync first','Get today\'s latest plan, targets, meetings and messages from Ratan.');
  else if(unsynced())n=note('📤','You can sync now','Or sync once everything is done at your end.','Sync');
  if(n){var top=app.querySelector('.meet')||tk;if(top&&top.parentNode)top.before(n);else app.prepend(n)}};
var prevAfter=U.after;U.after=function(app,r){prevAfter&&prevAfter(app,r);btn()};

/* on opening the app: remind once */
var told=false;function openNudge(){if(told||typeof S==='undefined'||!S.db||isMgr())return;told=true;setTimeout(function(){if(!syncedThisOpen)toast('👋 Tap Sync to get the latest from Ratan before you start.')},2500)}
setInterval(openNudge,1500);
document.addEventListener('visibilitychange',function(){if(!document.hidden&&last()&&Date.now()-last()>3*3600000){syncedThisOpen=false;told=false;btn()}});
try{if(S.ready)render()}catch(e){}
})();
/* Field Tracker – Daily task: read today's task from Ratan, then share it to the WhatsApp group "Guwahati CSM Team".
   Pops up on opening until shared; the phone keeps reminding (every 30 min, 8 AM–9 PM) until it is shared. */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
var GROUP='Guwahati CSM Team';
function isMgr(){return S.mgr&&!S.viewAs}
function sharedToday(){try{return todays('task_share').length>0||U.lsGet('ft_tshare_'+TODAY,'')==='1'}catch(e){return false}}
function hourIST(){return new Date().getHours()}
function due(){return !isMgr()&&!sharedToday()&&hourIST()>=7&&new Date().getDay()!==0}
function rs(v){return '₹'+Math.round(v||0).toString().replace(/(\d)(?=(\d\d)+\d$)/g,'$1,')}
function planMsg(){try{var w=who();return (S.msgs||[]).filter(function(m){return m.email===w.Email&&m.date===TODAY&&m.slot!=='8pm'}).sort(function(a,b){return b.ts-a.ts})[0]}catch(e){return null}}
function body(){var m=planMsg();if(m&&m.text)return m.text;
  // No message from Ratan yet: build today's task from the app's own data.
  var w=who(),L=[],f=(S.feeds||{})['pob_'+w.HQ];var dt=new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short'});
  L.push('🎯 '+dt+' – '+String(w.HQ).toUpperCase()+(f&&f.dailyNeed?' | POB target '+rs(f.dailyNeed):''));
  try{var b=brickToday();if(b)L.push('📍 Brick: '+b)}catch(e){}
  if(f&&f.target60)L.push('Month: '+rs(f.done)+' of '+rs(f.target60));
  try{(typeof TASKS!=='undefined'?TASKS:[]).forEach(function(t){var s=t.status();if(s.level==='na')return;L.push((s.level==='ok'?'✅ ':'☐ ')+t.t+(s.level!=='ok'&&s.why?' – '+s.why:''))})}catch(e){}
  L.push('⏰ Enter all POB, inputs and reasons by 8 PM.');return L.join('\n')}
function shareText(){var w=who();return '📋 Daily task – '+w.Name+', '+w.HQ+'\n\n'+body()+'\n\n✅ I have read today\'s full task and will complete it.'}

var st=document.createElement('style');st.textContent=`
.tasknag{border-radius:18px;padding:14px;margin:0 0 12px;color:#fff;background:linear-gradient(135deg,#0B6B4F,#128C7E 60%,#25D366);box-shadow:0 10px 24px rgba(18,140,126,.3);animation:rise .35s ease both}
.tasknag .k{font-size:12px;letter-spacing:1.3px;text-transform:uppercase;color:#D8FFE6;font-weight:700}
.tasknag h3{margin:6px 0 4px;font-size:18px}.tasknag p{margin:0;font-size:13.5px;opacity:.92}
.tasknag button{margin-top:12px;width:100%;border:0;border-radius:12px;padding:12px;font-weight:800;background:#fff;color:#0B6B4F;min-height:auto}
.tview{white-space:pre-wrap;background:var(--soft,#F2F5F4);border-radius:12px;padding:12px;font-size:14.5px;line-height:1.5;max-height:46vh;overflow:auto;margin:6px 0 10px}
.wabtn{width:100%;border:0;border-radius:14px;padding:14px;font-weight:800;font-size:16px;background:#25D366;color:#063;display:flex;gap:8px;align-items:center;justify-content:center;min-height:auto}
.tdone{display:flex;gap:10px;align-items:center;border-radius:14px;padding:10px 12px;margin:0 0 12px;background:#E7F8EE;color:#0B6B4F;font-size:13.5px}
`;document.head.appendChild(st);
var WA='<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>';

function doShare(){var t=shareText();
  try{if(window.AndroidApp&&AndroidApp.shareWhatsApp){AndroidApp.shareWhatsApp(t)}else window.open('https://wa.me/?text='+encodeURIComponent(t),'_blank')}catch(e){try{location.href='https://wa.me/?text='+encodeURIComponent(t)}catch(_){}}
  U.lsSet('ft_tshare_'+TODAY,'1');
  var w=who();try{S.db.collection('entries').add({type:'task_share',email:w.Email,hq:w.HQ,name:w.Name,by:'',ts:Date.now(),date:TODAY,group:GROUP}).catch(function(){})}catch(e){}
  setTimeout(function(){var o=document.querySelector('.ftsheet.tsheet');if(o)o.remove();try{render()}catch(e){}},800)}

function sheet(){if(document.querySelector('.ftsheet.tsheet'))return;
  var ov=h('div',{class:'ftsheet tsheet'},h('div',{class:'pn'},h('div',{class:'grab'}),
    h('div',{class:'hd'},h('b',{},'📋 Today\'s task from Ratan Roy'),h('button',{class:'ghost',onclick:function(){ov.remove()}},'✕')),
    h('small',{style:'color:var(--muted)'},'Read the full task, then share it to the WhatsApp group.'),
    h('div',{class:'tview'},body()),
    (function(){var b=h('button',{class:'wabtn',onclick:doShare});b.innerHTML=WA+'<span>Share to WhatsApp – '+GROUP+'</span>';return b})(),
    h('small',{style:'display:block;text-align:center;margin-top:8px;color:var(--muted)'},'WhatsApp opens – pick "'+GROUP+'" and tap Send.')));
  document.body.append(ov)}
U.taskSheet=sheet;U.taskShared=sharedToday;U.taskDue=due;

var prevToday=U.today;U.today=function(app,tk,rest){prevToday&&prevToday(app,tk,rest);if(isMgr()){mgrLine(app);return}
  var c;if(due())c=h('div',{class:'tasknag'},h('div',{class:'k'},'📋 Daily task'),h('h3',{},'Read today\'s task and share it'),h('p',{},'Share it to WhatsApp "'+GROUP+'" to confirm you have gone through the full task for today.'),h('button',{onclick:sheet},'Read & share'));
  else if(sharedToday())c=h('div',{class:'tdone'},'✅ Today\'s task shared to '+GROUP+'.');
  if(c){var top=app.querySelector('.syncnote')||app.querySelector('.meet')||tk;if(top&&top.parentNode)top.before(c);else app.prepend(c)}};

/* manager: who has shared today */
function mgrLine(app){try{var cs=D.users.filter(function(u){return u.Role==='CSO'&&u.Status==='Active'});var done=(S.entries||[]).filter(function(e){return e.type==='task_share'&&e.date===TODAY}).map(function(e){return e.email});
  var n=h('div',{class:'tdone',style:'flex-wrap:wrap'},h('b',{},'📋 Daily task shared: '),cs.map(function(u){return h('span',{},u.Name.split(' ')[0]+(done.indexOf(u.Email)>=0?' ✅':' ⏳')+'  ')}));var p=app.querySelector('.phase');if(p)p.before(n)}catch(e){}}

/* pop up on opening, once per open, until shared */
var popped=false;function autoPop(){if(popped||typeof S==='undefined'||!S.db||!due())return;if(document.querySelector('.ftsheet')||document.getElementById('ftlogin')||document.querySelector('div.fame'))return;
  popped=true;sheet()}
setInterval(autoPop,2000);
document.addEventListener('visibilitychange',function(){if(!document.hidden)popped=false});
try{if(S.ready)render()}catch(e){}
})();
/* Field Tracker – clean layout: 5 tabs with sub-tabs, one "Next step" card on Today, Sync + Messages in the top bar.
   Loaded last: it rearranges what the other modules draw, so nothing is lost – it is just placed where it belongs. */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
function isMgr(){return S.mgr&&!S.viewAs}
/* Less typing: the CSO's calls, POB, inputs, NPD and wholesalers already go into Ventasys and reach Ratan from there,
   so the app never nags them to re-type those. Only genuinely app-only, one-tap actions are nudged on Today. */
var NONAG={raft:1,deca:1,rloc:1,skin:1,dexona:1,stock:1,stockists:1,beat:1};
U.nagList=function(){var o=[];try{(typeof TASKS!=='undefined'?TASKS:[]).forEach(function(k){if(NONAG[k.k])return;var s=k.status();if(s.level==='bad'||s.level==='todo')o.push({k:k,s:s})})}catch(e){}return o};
var SYNC='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M3 21v-5h5"/></svg>';
var APK='https://github.com/ratanroy98/field-tracker-app/releases/download/latest/GuwahatiFieldTracker.apk';

var st=document.createElement('style');st.textContent=`
.ftick,#ftsync{display:none!important}
.fthead .ib.lx{display:none}
.fthead .acts{margin-left:auto;display:flex;gap:6px}
.fthead .hb{position:relative;width:40px;height:40px;min-height:auto;padding:0;border-radius:12px;border:0;background:rgba(255,255,255,.16);color:#fff;display:inline-flex;align-items:center;justify-content:center}
.fthead .hb.due{background:#F5C451;color:#2B2000;animation:ftpulse 1.4s ease-in-out infinite}
.fthead .hb.spin svg{animation:ftspin .9s linear infinite}
.fthead .hb .dot{position:absolute;top:-3px;right:-3px;width:11px;height:11px;border-radius:50%;background:#E5484D;border:2px solid #fff}
@keyframes ftspin{to{transform:rotate(360deg)}}@keyframes ftpulse{50%{box-shadow:0 0 0 6px rgba(245,196,81,.35)}}
.subtabs.l2{margin-top:-4px}.subtabs.l2 button{font-size:13px;padding:7px 12px}
.next{border-radius:20px;padding:16px;margin:0 0 12px;color:#fff;background:linear-gradient(135deg,var(--h1,#0F5257),var(--h3,#1B7F79));box-shadow:0 10px 26px rgba(0,0,0,.18);animation:rise .35s ease both}
.next .k{display:flex;justify-content:space-between;align-items:center;font-size:12px;letter-spacing:1.3px;text-transform:uppercase;color:var(--gold2,#F6D776);font-weight:700}
.next .k i{display:inline-flex;gap:4px}.next .k i b{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.3)}.next .k i b.on{background:var(--gold2,#F6D776)}
.next h3{margin:8px 0 4px;font-size:19px;line-height:1.25}.next p{margin:0;font-size:13.5px;opacity:.9;line-height:1.4}
.next button.go1{margin-top:12px;width:100%;border:0;border-radius:14px;padding:13px;font-weight:800;font-size:15.5px;background:var(--gold2,#F6D776);color:#2B2000;min-height:auto}
.next .lnk{display:block;text-align:center;margin-top:9px;font-size:12.5px;opacity:.85;text-decoration:underline;cursor:pointer}
.next.win{background:linear-gradient(135deg,#0B6B4F,#1B9E6E)}.next.wa{background:linear-gradient(135deg,#0B6B4F,#128C7E 60%,#25D366)}.next.wa button.go1{background:#fff;color:#0B6B4F}
.tline{display:flex;align-items:center;gap:10px;border-radius:14px;padding:12px 14px;margin:0 0 12px;background:var(--card,#fff);border:1px solid var(--line,#e5ece9);cursor:pointer;font-size:14px}
.tline b{font-size:15px}.tline .go{margin-left:auto;color:var(--muted)}
.qline{margin:0 0 12px;padding:12px 14px;border-radius:14px;background:var(--soft,#F2F5F4);font-size:14px;line-height:1.45}
.qline small{display:block;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:var(--accent);font-weight:700;margin-bottom:4px}
.upd{display:flex;align-items:center;gap:10px;border-radius:14px;padding:11px 12px;margin:0 0 12px;background:#E8F0FF;color:#1E3A8A;font-size:13.5px;text-decoration:none}
.salestop .tbl{overflow:visible}.salestop table{width:100%}.salestop td,.salestop th,.salestop .num{font-size:11.5px!important;padding:7px 3px!important;letter-spacing:-.2px;white-space:nowrap}.salestop td:first-child{white-space:normal}
.upd b{display:block}.upd span.btn{margin-left:auto;background:#1E3A8A;color:#fff;border-radius:10px;padding:8px 12px;font-weight:700;white-space:nowrap}
.coachc{border-radius:16px;padding:13px 15px;margin:0 0 12px;background:linear-gradient(135deg,#FFF4D6,#FDE8B8);border:1px solid #F0D18A;color:#5A4300}
.coachc .k{font-weight:800;font-size:14.5px;display:flex;align-items:center;gap:7px}
.coachc p{margin:5px 0 0;font-size:13px;line-height:1.45;color:#6a5320}
.coachc .big2{font-size:22px;font-weight:800}
`;document.head.appendChild(st);

/* ---------- which tab each screen belongs to ---------- */
var WORKR=['raft','deca','rloc','skin','dexona','stockists','stock','beat','tp'];
function tabFor(r){if(isMgr()){if(r==='home'||r==='mgr')return'team';if(r==='approve')return'approve';if(r==='meet')return'meet';if(r==='geo'||r==='perf'||r==='mail')return'reports';if(r==='msgs'||r==='hof')return'me';if(r==='sell')return'sell';return'team'}
  if(r==='home')return'today';if(r==='sell')return'sell';if(r==='learn')return'learn';if(r==='perf'||r==='msgs'||r==='hof')return'me';return'work'}
function NAV(){return isMgr()?[['team','👥','Team',function(){go('home')}],['approve','✅','Approvals',function(){go('approve')}],['meet','📅','Meetings',function(){go('meet')}],['reports','📈','Reports',function(){go('geo')}],['me','👤','Me',function(){go(U.lsGet('ft_me','msgs'))}]]
  :[['today','🏠','Today',function(){go('home')}],['work','💼','Work',function(){go(U.lsGet('ft_work','raft'))}],['sell','🛒','Sell',function(){go('sell')}],['learn','🎓','Learn',function(){go('learn')}],['me','👤','Me',function(){go(U.lsGet('ft_me','perf'))}]]}
function nav(r){var cur=tabFor(r),pend=0,appr=0;
  try{if(!isMgr())pend=U.nagList().length;else appr=(S.entries||[]).filter(function(e){return (e.type==='brick_plan'||e.type==='beat_change'&&e.date>=TODAY)&&e.status==='pending'}).length}catch(e){}
  return h('nav',{class:'bnav'},NAV().map(function(it){var n=it[0]==='today'?pend:it[0]==='approve'?appr:0;return h('button',{class:cur===it[0]?'on':'',onclick:it[3]},h('span',{class:'ic'},it[1]),it[2],n?h('span',{class:'dot'},String(n)):'')}))}

/* ---------- sub-tab rows ---------- */
function tabs(list,cur,cls){return h('div',{class:'subtabs'+(cls?' '+cls:'')},list.map(function(x){return h('button',{class:x[0]===cur?'on':'',onclick:x[2]},x[1])}))}
function workTabs(r){var grp=r==='stockists'?'cust':(r==='tp'||r==='beat')?'tp':'ent';
  var top=tabs([['ent','Entries',function(){go(U.lsGet('ft_went','raft'))}],['cust','Customers',function(){go('stockists')}],['tp','TP & Brick',function(){go('tp')}],['req','Stock request',function(){U.stockSheet&&U.stockSheet()}]],grp);
  if(grp==='ent'){U.lsSet('ft_went',r);return[top,tabs([['raft','Raft'],['deca','Deca'],['rloc','R-Loc'],['skin','Skinlite'],['dexona','Dexona'],['stock','Stock statement']].map(function(x){return[x[0],x[1],function(){go(x[0])}]}),r,'l2')]}
  if(grp==='tp')return[top,tabs([['tp','TP calendar',function(){go('tp')}],['beat','Change brick',function(){go('beat')}]],r,'l2')];
  return[top]}
function meTabs(r){var L=isMgr()?[['msgs','Messages'],['hof','Hall of Fame'],['set','Settings']]:[['perf','Progress'],['msgs','Messages'],['hof','Hall of Fame'],['set','Settings']];
  return tabs(L.map(function(x){return[x[0],x[1],function(){if(x[0]==='set'){U.settings&&U.settings();return}U.lsSet('ft_me',x[0]);go(x[0])}]}),r)}

/* ---------- top bar: name · Sync · Messages · Settings ---------- */
function topbar(app,r){var hd=app.querySelector('.fthead .row');if(!hd||hd.querySelector('.acts'))return;
  hd.querySelectorAll('.ib').forEach(function(b){b.classList.add('lx')});
  var sb=h('button',{class:'hb',title:'Sync',onclick:function(){U.sync&&U.sync()}});sb.id='ftsynch';paintSync(sb);
  hd.append(h('div',{class:'acts'},sb,h('button',{class:'hb',title:'Messages',onclick:function(){U.lsSet('ft_me','msgs');go('msgs')}},'💬'),h('button',{class:'hb',title:'Settings',onclick:function(){U.settings&&U.settings()}},'⚙️')))}
function paintSync(b){b=b||document.getElementById('ftsynch');if(!b||!U.syncState)return;var s=U.syncState();var cls='hb'+(s.busy?' spin':s.due?' due':'');var html=SYNC+(s.unsent&&!s.busy?'<i class="dot"></i>':'');
  if(b.className!==cls)b.className=cls;if(b._h!==html){b.innerHTML=html;b._h=html}b.title=s.busy?'Syncing…':'Sync · '+s.ago}
setInterval(function(){paintSync()},1500);

/* ---------- Today: one "Next step" card ---------- */
function field(){try{var tp=tpFor(myEmail(),TODAY);return !tp||/Field|Joint/.test(tp.DayType||'')}catch(e){return true}}
function steps(app){var S0=U.syncState?U.syncState():{opened:true,unsent:false},L=[];
  var ci=!!(U.checkinToday&&U.checkinToday());var pend=U.nagList();
  pend.sort(function(a,b){return (a.s.level==='bad'?0:1)-(b.s.level==='bad'?0:1)});
  L.push({done:S0.opened,cls:'',t:'Sync to get today\'s latest',p:'Your plan, targets, meetings and messages from Ratan Roy.',b:'🔄 Sync now',f:function(){U.sync()}});
  L.push({done:!U.taskDue||!U.taskDue(),cls:'wa',t:'Read today\'s task and share it',p:'Share it to WhatsApp "Guwahati CSM Team" to confirm you have gone through the full task.',b:'Read & share',f:function(){U.taskSheet()}});
  if(field())L.push({done:ci,cls:'',t:'Start my day',p:'Confirm today\'s brick and take your selfie – one tap.',b:'📍 Start my day',f:function(){var c=app.querySelector('.hero .ci');if(c)c.click()}});
  if(pend.length){var top=pend[0];L.push({done:false,cls:'',t:top.k.t,p:(top.s.why||'')+(pend.length>1?' · '+(pend.length-1)+' more after this':''),b:'Open',f:function(){go(top.k.k)},lnk:pend.length>1?['See all '+pend.length+' tasks',function(){go(U.lsGet('ft_went','raft'))}]:null});}
  L.push({done:!U.lessonDoneToday||U.lessonDoneToday(),cls:'',t:'Today\'s 3-minute lesson',p:(U.nextLesson&&U.nextLesson())||'From Ratan Roy',b:'🎓 Start lesson',f:function(){S.tab.learn='today';go('learn')}});
  return L}
function nextCard(app){var L=steps(app),i=L.findIndex(function(x){return!x.done}),S0=U.syncState?U.syncState():{};
  var dots=h('i',{},L.map(function(x,k){return h('b',{class:x.done?'on':''})}));
  if(i<0){if(S0.unsent)return h('div',{class:'next win'},h('div',{class:'k'},h('span',{},'All done'),dots),h('h3',{},'🎉 All tasks done – sync now'),h('p',{},'So Ratan Roy gets everything you did today.'),h('button',{class:'go1',onclick:function(){U.sync()}},'🔄 Sync now'));
    return h('div',{class:'next win'},h('div',{class:'k'},h('span',{},'All done'),dots),h('h3',{},'🎉 Great work today!'),h('p',{},'Everything is done and synced. Ratan Roy is proud of you.'))}
  var s=L[i],done=L.filter(function(x){return x.done}).length;
  return h('div',{class:'next '+s.cls},h('div',{class:'k'},h('span',{},'Next step · '+(done+1)+' of '+L.length),dots),h('h3',{},s.t),s.p?h('p',{},s.p):'',
    h('button',{class:'go1',onclick:s.f},s.b),s.lnk?h('a',{class:'lnk',onclick:s.lnk[1]},s.lnk[0]):(S0.unsent&&i>0?h('a',{class:'lnk',onclick:function(){U.sync()}},'You can sync now, or once everything is done'):''))}
function updBanner(){try{if(!window.AndroidApp||!AndroidApp.version)return'';if(+AndroidApp.version()>=5)return''}catch(e){return''}
  return h('a',{class:'upd',href:APK},h('div',{},h('b',{},'📲 New app version'),'Meeting alarms, selfie camera and WhatsApp sharing.'),h('span',{class:'btn'},'Update'))}
function quoteLine(){var qs=(U.C().quotes)||[];if(!qs.length)return'';return h('div',{class:'qline'},h('small',{},'Ratan Roy says'),qs[U.dayIdx()%qs.length])}
/* Guide, don't collect.
   FRONT SCREEN: for each doctor / chemist / wholesaler on today's list, tell them what to hand over, then report in Ventasys.
   BRAND TAB + SAMPLES: show the total inputs / samples of that category the CSO is holding.
   Counts come from feed inbal_<HQ> {asOf, items:[{name, qty, brand, kind:'input'|'sample'}]} (evening review, from the Ventasys input-tracking / in-hand file). */
function brickNames(codes,brick){try{if(typeof CUST==='undefined')return[];return (codes||[]).filter(function(c){return CUST[c]&&CUST[c].brick===brick}).map(function(c){return CUST[c].name})}catch(e){return[]}}
function nameList(a,n){n=n||5;return a.slice(0,n).join(', ')+(a.length>n?' +'+(a.length-n)+' more':'')}
function handoverCard(){try{if(isMgr())return'';
  var brick=(typeof brickToday==='function'&&brickToday())||'';
  var lines=[];
  [['Rloc Raft','the Raft input'],['Deca Durabolin','the Deca input'],['Rloc Tablets','the R-Loc gift']].forEach(function(x){
    if(typeof drListFor!=='function')return;var L=drListFor(x[0]);if(!L||L.status!=='approved')return;
    var docs=brickNames(L.doctors,brick);if(docs.length)lines.push('Hand over '+x[1]+' to '+nameList(docs)+', then report the Rx in Ventasys.')});
  try{var nk=Object.keys(S.feeds||{}).filter(function(z){return z.indexOf('npd_')===0})[0];var nf=nk?S.feeds[nk]:null;
    var outs=nf?brickNames(nf.codes,brick):[];if(outs.length)lines.push('Give Skinlite Facewash/Day Care to '+nameList(outs)+', then report the order in Ventasys.')}catch(e){}
  if(!lines.length){return h('div',{class:'coachc'},h('div',{class:'k'},'📲 Report in Ventasys as you go'),h('p',{},'As you meet each doctor, chemist and wholesaler on today\'s list, hand over your inputs and samples and enter the Rx, input or order in Ventasys the same day. The app will tell you exactly what to give to whom.'));}
  var box=h('div',{class:'coachc'},h('div',{class:'k'},'📋 Today'+(brick?' · '+brick:'')+' — hand over, then report in Ventasys'));
  lines.forEach(function(t){box.append(h('p',{},'• '+t))});
  box.append(h('p',{style:'margin-top:7px;font-weight:700;color:#5A4300'},'Then visit your chemists and wholesalers on the list, hand over their inputs and report each order in Ventasys.'));
  return box;
}catch(e){return''}}
/* Count of inputs/samples of one brand still with the CSO – shown on that brand's Work tab and in Samples. */
function brandInputs(brand){try{if(isMgr())return'';
  var k=Object.keys(S.feeds||{}).filter(function(x){return x.indexOf('inbal_')===0})[0];var f=k?S.feeds[k]:null;
  if(!f){return h('div',{class:'coachc'},h('div',{class:'k'},'📲 Hand over & report in Ventasys'),h('p',{},'Give your '+brand+' inputs and samples to today\'s doctors and chemists on the list, and report each in Ventasys the same day.'));}
  var items=(f.items||[]).filter(function(x){return x.brand===brand});
  var inp=items.filter(function(x){return (x.kind||'input')!=='sample'}).reduce(function(a,x){return a+(+x.qty||0)},0);
  var smp=items.filter(function(x){return x.kind==='sample'}).reduce(function(a,x){return a+(+x.qty||0)},0);
  if(!inp&&!smp){return h('div',{class:'coachc',style:'background:linear-gradient(135deg,#E8F6EE,#D6F0E0);border-color:#9FD9B6;color:#13684A'},h('div',{class:'k'},'✅ '+brand+' — all handed over'),h('p',{style:'color:#1b6b4a'},'No '+brand+' inputs or samples lying with you.'));}
  var names=items.filter(function(x){return (+x.qty||0)>0}).slice(0,6).map(function(x){return x.name+' ×'+x.qty}).join(', ');
  return h('div',{class:'coachc'},h('div',{class:'k'},'📦 You hold ',h('span',{class:'big2'},String(inp)),' '+brand+' input'+(inp===1?'':'s')+(smp?' · '+smp+' sample'+(smp===1?'':'s'):'')),
    h('p',{},(names?names+'. ':'')+'Hand these over to today\'s '+brand+' doctors and chemists on the list, and report each in Ventasys the same day.'+(f.asOf?' As of '+f.asOf+'.':'')));
}catch(e){return''}}
U.handoverCard=handoverCard;U.brandInputs=brandInputs;

function todayCSO(app){var keep=[app.querySelector('.fthead')],hero=app.querySelector('.hero'),meets=[].slice.call(app.querySelectorAll('.meet')),hof=app.querySelector('.hof'),ob=[].slice.call(app.querySelectorAll('.note')).filter(function(n){return /saved on your phone/.test(n.textContent)})[0],nav0=app.querySelector('.bnav');
  var pend=U.nagList().length;
  [].slice.call(app.children).forEach(function(c){if(keep.indexOf(c)<0)c.remove()});
  var u=updBanner(),list=[u,(U.highlightCard&&U.highlightCard())||"",nextCard(app),handoverCard(),meets,hero,ob,pend?h('div',{class:'tline',onclick:function(){go(U.lsGet('ft_went','raft'))}},'📋',h('div',{},h('b',{},pend+' task'+(pend>1?'s':'')+' pending'),h('small',{style:'display:block;color:var(--muted)'},'Open Work to finish them')),h('span',{class:'go'},'›')):'',hof,quoteLine()];
  [].concat.apply([],list).forEach(function(n){if(n)app.append(n)})}
function todayMgr(app){var keep=[app.querySelector('.fthead')];var team=U.teamPanel?U.teamPanel():null,share=[].slice.call(app.querySelectorAll('.tdone'))[0],hof=app.querySelector('.hof');
  [].slice.call(app.children).forEach(function(c){if(keep.indexOf(c)<0)c.remove()});
  [team,share,hof,quoteLine()].forEach(function(n){if(n)app.append(n)})}

/* ---------- manager routes ---------- */
U.routes.approve=function(app){var p=U.pendingPlans?U.pendingPlans():null;if(p&&p.children.length)app.append(p);else app.append(h('div',{class:'note'},'✅ Nothing waiting for your approval.'));
  try{var reqs=(S.entries||[]).filter(function(e){return e.type==='stock_request'&&e.status!=='sent'});if(reqs.length)app.append(h('div',{class:'note'},'📦 '+reqs.length+' stock request(s) – see Team.'))}catch(e){}};
U.routes.meet=function(app){if(U.meetPanel)app.append(U.meetPanel())};
U.routes.sell=function(app){U.vProd(app)};

/* ---------- manager: cumulative company sales at the top of Reports ---------- */
var HQS=['Agartala','Bongaigaon','Dhubri','Guwahati'];
function rsx(v){return (v<0?'–':'')+'₹'+Math.abs(Math.round(v||0)).toLocaleString('en-IN')}
function salesTop(){var T={net:0,tgt:0,gross:0,cl:0},asOf='',hasG=true,rows=[];
  HQS.forEach(function(q){var f=S.feeds['ach_'+q]||{},tg=(typeof TGT!=='undefined'&&TGT[q]&&TGT[q].Total)||((S.feeds['incq_'+q]||{}).novT)||0;
    if(f.asOf)asOf=f.asOf;if(f.gross==null)hasG=false;var n=f.total||0;T.net+=n;T.tgt+=tg;T.gross+=f.gross||0;T.cl+=f.claims||0;rows.push({q:q,n:n,tg:tg,g:f.gross||0,c:f.claims||0})});
  var pc=function(a,b){return b?Math.round(a/b*100):0},p=pc(T.net,T.tgt);
  function row(x,b){var c=[h('td',{},b?h('b',{},x.q):x.q,h('small',{style:'display:block;color:var(--muted);font-size:11px'},'Tgt '+rsx(x.tg)))];if(hasG)c.push(h('td',{class:'r num'},rsx(x.g)),h('td',{class:'r num'},x.c?rsx(-x.c):'—'));
    c.push(h('td',{class:'r num'},b?h('b',{},rsx(x.n)):rsx(x.n)),h('td',{class:'r num'},pc(x.n,x.tg)+'%'));return h('tr',b?{style:'border-top:2px solid var(--line)'}:{},c)}
  var hd=[h('th',{},'HQ')];if(hasG)hd.push(h('th',{class:'r'},'Gross'),h('th',{class:'r'},'Exp/Brk'));hd.push(h('th',{class:'r'},'Net'),h('th',{class:'r'},'%'));
  return h('div',{class:'score salestop'},h('b',{},'Company sales · November'+(asOf?' (cumulative to '+asOf+')':'')),
    h('div',{},h('span',{class:'big'},p+'%'),h('small',{style:'color:var(--muted)'},'  Area net '+rsx(T.net)+' of '+rsx(T.tgt))),
    h('div',{style:'height:8px;border-radius:6px;background:var(--soft,#EEF2F1);overflow:hidden;margin:6px 0 8px'},h('div',{style:'height:100%;width:'+Math.max(0,Math.min(100,p))+'%;background:var(--accent,#0F5257)'})),
    h('div',{class:'tbl'},h('table',{style:'font-size:12.5px'},h('tr',{},hd),rows.map(function(x){return row(x)}),row({q:'Area total',n:T.net,tg:T.tgt,g:T.gross,c:T.cl},true))),
    h('small',{style:'color:var(--muted)'},'Net = gross billing minus expiry and breakage claims. Dhubri is vacant.'+(hasG?'':' Gross and claims columns appear from the next evening review.')))}

/* ---------- manager viewing a CSO: always a way back ---------- */
var vaBar=document.createElement('style');vaBar.textContent='.vabar{display:flex;align-items:center;gap:10px;margin:0 0 12px;padding:10px 12px;border-radius:14px;background:#FFF4D6;color:#5A4300;font-size:14px}.vabar button{margin-left:auto;border:0;border-radius:10px;padding:9px 14px;font-weight:800;background:#0F5257;color:#fff;min-height:auto}';document.head.appendChild(vaBar);
function backToTeam(){S.viewAs=null;try{if(history.state&&history.state.ftva)history.back()}catch(e){}go('home')}
window.addEventListener('popstate',function(){if(S.viewAs){S.viewAs=null;go('home')}});
function viewBar(app){if(!S.mgr||!S.viewAs)return;try{if(!history.state||!history.state.ftva)history.pushState({ftva:1},'')}catch(e){}
  var hd=app.querySelector('.fthead');if(!hd||app.querySelector('.vabar'))return;var nm=((S.viewAs&&S.viewAs.Name)||'CSO').split(' ')[0];
  hd.after(h('div',{class:'vabar'},'👀',h('div',{},h('b',{},'Viewing '+nm+'\'s app'),h('small',{style:'display:block'},'Nothing you see here is changed for '+nm+'.')),h('button',{onclick:backToTeam},'← Back to Team')))}

/* ---------- apply after every screen is drawn ---------- */
var prevAfter=U.after;U.after=function(app,r){prevAfter&&prevAfter(app,r);if(document.getElementById('ftlogin'))return;
  try{topbar(app,r);var t=tabFor(r),hd=app.querySelector('.fthead');
    if(r==='home'){if(isMgr())todayMgr(app);else todayCSO(app)}
    // replace the old sub-tab row on Work screens
    if(t==='work'){U.lsSet('ft_work',r);var old=app.querySelector('.fthead~.subtabs');if(old&&old.textContent.indexOf('Raft')>=0&&!old.classList.contains('l2'))old.remove();var rows=workTabs(r);var after=hd;rows.forEach(function(x){after.after(x);after=x});
      if(!isMgr()&&WORKR.indexOf(r)>=0&&!app.querySelector('.optnote')){
        var BM={raft:'Rloc Raft',deca:'Deca Durabolin',rloc:'Rloc Tablets',skin:'Skinlite',dexona:'Dexona'};
        var cc=brandInputs(BM[r]);if(cc){after.after(cc);after=cc}
        var on=h('div',{class:'qline optnote'},h('small',{},'The app guides — Ventasys collects'),'When you meet a doctor or chemist, report the input, Rx or order in Ventasys. You don\'t have to fill the lists below — they are only here to show you who to meet and what to carry.');after.after(on)}}
    if(t==='me'){var mt=meTabs(r);hd.after(mt);if(r==='perf')app.querySelectorAll('.hof').forEach(function(x){x.remove()})}
    var nb=app.querySelector('.bnav');if(nb)nb.replaceWith(nav(r));else app.append(nav(r));
    if(isMgr()&&r==='perf'&&!app.querySelector('.salestop')){var s1=app.querySelector('.score'),c1=(U.salesTop||salesTop)();if(s1)s1.before(c1);else app.append(c1)}
    viewBar(app)}catch(e){try{console.log('layout',e)}catch(_){}}};
var pt=U.tabOfX||{};['sell','approve','meet','hof'].forEach(function(k){pt[k]=k});U.tabOfX=pt;
try{if(S.ready)render()}catch(e){}
})();
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
  if(U.shareView)box.append(h('div',{class:'sharebar'},h('button',{onclick:function(){U.shareView('This month sales')}},'📸 Save / Share for WhatsApp'),h('button',{class:'alt',onclick:function(){U.shareView('This month sales')}},'⬇️ Download')));
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
/* Field Tracker – Review mail (manager, best on a laptop): the evening review laid out as an email,
   ready to copy or open in Outlook. Nothing is sent by the app itself. */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
function isMgr(){return S.mgr&&!S.viewAs}
var CSO=[['karamjitdas@gmail.com','Karamjit Das','Agartala'],['prashunbhowmick22@gmail.com','Prashun Bhowmick','Bongaigaon'],['rajibkundu.kundu@gmail.com','Bhubaneswar Kundu','Guwahati']];
var MGR='ratanroy98@gmail.com';

var st=document.createElement('style');st.textContent=`
.mailbox{display:grid;gap:10px}
.mailbox label{display:grid;gap:4px;font-size:12.5px;color:var(--muted);font-weight:600}
.mailbox input,.mailbox select{font-size:15px}
.mailbox textarea{width:100%;min-height:360px;font:14px/1.5 ui-monospace,Menlo,Consolas,monospace;padding:12px;border-radius:12px;border:1px solid var(--line);background:var(--card);color:var(--ink);box-sizing:border-box;resize:vertical}
.mailbox .row2{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.mailbox .acts{display:flex;flex-wrap:wrap;gap:8px}
.mailbox .acts a,.mailbox .acts button{flex:1 1 160px;text-align:center;text-decoration:none;border-radius:12px;padding:12px;font-weight:700;min-height:auto;border:0}
.mailbox .acts .ol{background:#0F6CBD;color:#fff}.mailbox .acts .ol2{background:#E8F0FF;color:#0F6CBD}
.mailbox .opts{display:flex;flex-wrap:wrap;gap:14px;font-size:14px}
.mailbox .opts label{display:flex;flex-direction:row;align-items:center;gap:8px;color:var(--ink);font-weight:500;white-space:nowrap}
.mailbox .opts input{width:18px!important;height:18px;min-height:0!important;margin:0;padding:0;flex:none;accent-color:#0F6CBD}
.mailready{display:flex;align-items:center;gap:10px;border-radius:14px;padding:12px 14px;margin:0 0 12px;background:#E8F0FF;color:#0F3D7A;cursor:pointer}
.mailready b{display:block}.mailready .go{margin-left:auto}
@media(max-width:560px){.mailbox .row2{grid-template-columns:1fr}}
`;document.head.appendChild(st);

function dates(){var d={};(S.msgs||[]).forEach(function(m){if(m.slot==='8pm'&&m.date)d[m.date]=1});return Object.keys(d).sort().reverse().slice(0,10)}
// Mail must carry only Ventasys / company data – nothing from this app (the app is not mandatory).
var APPWORDS=/\b(app|apps|check-?ins?|checked in|selfie|lessons?|task shar\w*|shared the task|daily task|sync\w*|stock statement uploaded|uploaded)\b/i;
function cleanPart(x){if(!APPWORDS.test(x))return x;var sub=x.split(/,\s+/).filter(function(y){return !APPWORDS.test(y)});return sub.length&&sub.join(', ').length>12?sub.join(', '):''}
function cleanSentence(x){if(!APPWORDS.test(x))return x;return x.split(/;\s*/).map(cleanPart).filter(Boolean).join('; ')}
function noApp(t){var out=[],n=0;String(t||'').split('\n').forEach(function(line){var l=line;
    if(APPWORDS.test(l)){if(/^\s*\d+[.)]/.test(l))return;var end=/\.\s*$/.test(l);l=l.split(/\.\s+/).map(function(x){return cleanSentence(x.replace(/\.\s*$/,''))}).filter(function(x){return x&&x.trim()}).join('. ');if(!l.trim())return;if(end)l=l.replace(/\s*$/,'')+'.'}
    var m=l.match(/^(\s*)\d+([.)])\s*(.*)$/);if(m){n++;l=m[1]+n+m[2]+' '+m[3]}else if(/explanation required/i.test(l))n=0;out.push(l)});
  return out.join('\n').replace(/Explanation required by 11 AM:\n(?!\s*\d)/i,'').replace(/\n{3,}/g,'\n\n')}
function mailMsg(email,date){var m=(S.msgs||[]).filter(function(x){return x.slot==='mail'&&x.for===email&&x.date===date}).sort(function(a,b){return (b.ts||0)-(a.ts||0)})[0];if(m)return m.text;var r=msgFor(email,date);return r&&r.text?noApp(r.text):''}
function msgFor(email,date){return (S.msgs||[]).filter(function(m){return m.email===email&&m.date===date&&m.slot==='8pm'}).sort(function(a,b){return (b.ts||0)-(a.ts||0)})[0]}
function nice(date){return new Date(date+'T00:00:00').toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'})}
function dayName(date){return new Date(date+'T00:00:00').toLocaleDateString('en-GB',{weekday:'short'})}
function noEmoji(s){return String(s||'').replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu,'').replace(/[ \t]+\n/g,'\n').replace(/^[ \t]+/gm,'').replace(/[ ]{2,}/g,' ')}
function dropVerify(s){var i=String(s||'').search(/\n[^\n]*(verify|cross-check|random)/i);return i>0?s.slice(0,i):s}
var CC_DEF='sudipta.zydus@outlook.com',FROM='ratan.zydus@outlook.com';
var SIGN=['Regards,','Ratan Roy','CSM – Guwahati Area','Zydus GEO','Mob: 8811087925'];
// Each CSO gets his own review mail (To: the CSO, Cc: Sudipta). "Team" is an optional summary mail.
function mailFor(who,date,o){var L=[],subj,to='';
  if(who==='team'){subj='Daily Field Review – Guwahati Area – '+nice(date)+' ('+dayName(date)+')';
    L.push('Dear Sir,','','Please find below the daily field review of Guwahati Area for '+nice(date)+'.','');var b=mailMsg(MGR,date);if(b)L.push(o.verify?b:dropVerify(b),'');
    CSO.forEach(function(c,i){L.push((i+1)+'. '+c[1]+' – '+c[2]+' HQ',mailMsg(c[0],date)||'Review not available.','')});L.push('Dhubri HQ – vacant.','');to=CC_DEF}
  else{var c=CSO.filter(function(x){return x[0]===who})[0],first=c[1].split(' ')[0],t=mailMsg(who,date)||'Review not available.',leave=/on leave/i.test(t);to=c[0];
    subj='Day Review – '+c[1]+' – '+c[2]+' HQ – '+nice(date)+' ('+dayName(date)+')';
    L.push('Dear '+first+',','','Please find your day review for '+nice(date)+'.','',t,'');
    if(!leave&&/explanation/i.test(t))L.push('Please reply to this mail with your explanation for each point by 11 AM tomorrow.','');
    L.push('Please keep all reporting in Ventasys up to date every day.','')}
  var body=L.concat(SIGN).join('\n');return{to:to,subject:subj,body:o.emoji?body:noEmoji(body)}}
function copy(text,ta){var ok=false;try{if(ta){ta.focus();ta.select();ok=document.execCommand('copy')}}catch(e){}
  if(!ok)try{navigator.clipboard.writeText(text).then(function(){toast('Copied')},function(){toast('Select the text and press Ctrl+C')});return}catch(e){}
  toast(ok?'Copied – paste it in Outlook':'Select the text and press Ctrl+C')}

U.routes.mail=function(app){if(!isMgr()){app.append(h('div',{class:'note'},'Only Ratan Roy can open this.'));return}
  var D=dates();if(!D.length){app.append(h('div',{class:'note'},'No evening review yet. It appears here after the 8 PM review runs.'));return}
  var date=S.tab.mailDate&&D.indexOf(S.tab.mailDate)>=0?S.tab.mailDate:D[0],who=S.tab.mailWho||CSO[0][0],o={verify:U.lsGet('ft_mail_verify','0')==='1',emoji:U.lsGet('ft_mail_emoji','0')==='1'};
  var sentKey='ft_mail_sent_'+date,sent={};try{sent=JSON.parse(U.lsGet(sentKey,'{}'))}catch(e){}
  var M=mailFor(who,date,o);
  var to=h('input',{value:M.to}),cc=h('input',{value:U.lsGet('ft_mail_cc2',CC_DEF)}),sj=h('input',{value:M.subject}),ta=h('textarea',{spellcheck:'false'});ta.value=M.body;
  cc.oninput=function(){U.lsSet('ft_mail_cc2',cc.value.trim())};
  var sel=h('select',{},D.map(function(d){var x=h('option',{value:d},nice(d)+' ('+dayName(d)+')');if(d===date)x.selected=true;return x}));sel.onchange=function(){S.tab.mailDate=sel.value;render()};
  var picks=CSO.map(function(c){return[c[0],c[1].split(' ')[0]]}).concat([['team','Team summary']]);
  var who_=h('div',{class:'subtabs',style:'margin:0'},picks.map(function(x){return h('button',{class:x[0]===who?'on':'',onclick:function(){S.tab.mailWho=x[0];render()}},(sent[x[0]]?'✅ ':'')+x[1])}));
  function opt(k,key,lab){var c=h('input',{type:'checkbox'});c.checked=o[k];c.onchange=function(){o[k]=c.checked;U.lsSet(key,c.checked?'1':'0');var n=mailFor(who,date,o);ta.value=n.body};return h('label',{},c,lab)}
  function q(){return 'to='+encodeURIComponent(to.value.trim())+(cc.value.trim()?'&cc='+encodeURIComponent(cc.value.trim()):'')+'&subject='+encodeURIComponent(sj.value)+'&body='+encodeURIComponent(ta.value)}
  function owa(){return 'https://outlook.live.com/mail/0/deeplink/compose?'+q()}
  function mto(){return 'mailto:'+to.value.trim()+'?'+(cc.value.trim()?'cc='+encodeURIComponent(cc.value.trim())+'&':'')+'subject='+encodeURIComponent(sj.value)+'&body='+encodeURIComponent(ta.value)}
  function mark(){sent[who]=1;U.lsSet(sentKey,JSON.stringify(sent))}
  var aW=h('a',{class:'ol',target:'_blank',rel:'noopener'},'Open in Outlook.com'),aD=h('a',{class:'ol2',target:'_top'},'Open in Outlook app');
  aW.onmouseenter=aW.onfocus=aW.ontouchstart=function(){aW.href=owa()};aW.onclick=function(){aW.href=owa();mark();setTimeout(render,400)};
  aD.onmouseenter=aD.onfocus=aD.ontouchstart=function(){aD.href=mto()};aD.onclick=function(){aD.href=mto();mark();setTimeout(render,400)};
  var nxt=picks.filter(function(x){return x[0]!=='team'&&!sent[x[0]]&&x[0]!==who})[0];
  app.append(h('div',{class:'phase mailbox'},
    h('div',{class:'ph'},h('b',{},'📧 Day review mails'),h('small',{},'Send from '+FROM+' – the app does not send by itself')),
    h('div',{class:'row2'},h('label',{},'Review of',sel),h('label',{},'Mail for',who_)),
    h('div',{class:'row2'},h('label',{},'To',to),h('label',{},'Cc',cc)),
    h('label',{},'Subject',sj),
    h('div',{class:'opts'},who==='team'?opt('verify','ft_mail_verify','Include "lines to verify"'):'',opt('emoji','ft_mail_emoji','Keep emojis')),
    h('label',{},'Mail body (you can edit before sending)',ta),
    h('div',{class:'acts'},aW,aD,h('button',{onclick:function(){copy(sj.value)}},'Copy subject'),h('button',{onclick:function(){copy(ta.value,ta);mark()}},'Copy body')),
    nxt?h('button',{class:'ghost',style:'width:100%',onclick:function(){S.tab.mailWho=nxt[0];render()}},'Next: '+nxt[1]+' ›'):h('div',{class:'note'},'✅ All CSO mails done for '+nice(date)+'.'),
    h('small',{style:'color:var(--muted)'},'Sign in to Outlook.com as '+FROM+' once on this laptop. "Open in Outlook.com" opens a new mail with To, Cc, subject and body filled – check it and press Send. If it is blocked, use Copy subject and Copy body.')))};

/* Reports tab gets two sub-tabs for the manager; Team screen shows a "review mail ready" line. */
function repTabs(r){return h('div',{class:'subtabs'},[['geo','Performance'],['perf','This month'],['mail','Review mail']].map(function(x){return h('button',{class:x[0]===r?'on':'',onclick:function(){go(x[0])}},x[1])}))}
var pt=U.tabOfX||{};pt.mail='mail';U.tabOfX=pt;
var prevAfter=U.after;U.after=function(app,r){prevAfter&&prevAfter(app,r);if(!isMgr()||document.getElementById('ftlogin'))return;
  try{var hd=app.querySelector('.fthead');
    if(r==='geo'||r==='perf'||r==='mail'){if(hd&&!app.querySelector('.subtabs.rep')){var t=repTabs(r);t.classList.add('rep');hd.after(t)}
      var nb=app.querySelector('.bnav');if(nb)[].forEach.call(nb.children,function(b){b.classList.toggle('on',/Reports/.test(b.textContent))})}
    if(r==='home'){var D=dates();if(D.length&&!app.querySelector('.mailready')){var c=h('div',{class:'mailready',onclick:function(){go('mail')}},'📧',h('div',{},h('b',{},'Day review mails ready – '+nice(D[0])),h('small',{},'One mail per CSO, Cc Sudipta – send from Outlook')),h('span',{class:'go'},'›'));var tp=app.querySelector('.phase');if(tp)tp.before(c);else if(hd)hd.after(c)}}}catch(e){}};
try{if(S.ready)render()}catch(e){}
})();
