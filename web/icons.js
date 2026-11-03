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
