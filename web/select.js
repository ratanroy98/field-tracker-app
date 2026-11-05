/* Field Tracker — campaign doctor selection, done brick-by-brick.
   As the CSO covers a brick, he tags that brick's doctors into campaigns (Deca injection, Deca core, R-Loc, Raft),
   accruing toward monthly targets. Seeded from the Ventasys register (already-given customers). One entry holds the
   whole picks map; a change goes pending for Ratan's approval (same pattern as brick_plan). Pulse & Skinlite are
   assigned lists (not picked) and are not shown here. */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
function isMgr(){return S.mgr&&!S.viewAs}
var HQL={A:'Agartala',B:'Bongaigaon',D:'Dhubri',G:'Guwahati'};
function hqName(v){v=String(v==null?'':v);return HQL[v]||v}
function myHQ2(){try{return (typeof csoHQ==='function'&&csoHQ())||((S.viewAs||S.me||{}).HQ)||''}catch(e){return''}}
/* pick-campaigns only (assigned ones excluded) */
function PICKC(){try{return (((window.FT_ROSTERS||{}).campaigns)||[]).filter(function(c){return c.src==='pick'})}catch(e){return[]}}
function seedMap(){try{var hq=myHQ2();return (((window.FT_ROSTERS||{}).seeds||{})[hq])||{}}catch(e){return{}}}

/* customers in a brick, from the shell customer master */
function brickCust(brick){try{if(typeof CUST==='undefined'||!CUST||!brick)return[];var hq=myHQ2(),out=[];
  Object.keys(CUST).forEach(function(code){var c=CUST[code];if(!c||c.brick!==brick)return;if(hq&&hqName(c.hq)&&hqName(c.hq)!==hq)return;
    out.push({code:String(code),name:c.name||String(code),spec:c.spec||'',brick:c.brick||'',ty:String(c.type||c.ty||'').toUpperCase()})});
  out.sort(function(a,b){return a.name.localeCompare(b.name)});return out}catch(e){return[]}}
function isDoctor(c){return /HCP|DOCTOR|DR|GP|RMP|PHYS/.test(c.ty)||/physician|mbbs|md\b/i.test(c.spec)|| !c.ty}

/* current picks: latest campaign_pick entry (approved or pending) -> {camp:[codes]} ; else seed */
function myEntry(){try{var mine=(S.entries||[]).filter(function(e){return e.type==='campaign_pick'&&(!e.email||e.email===myEmail())});
  mine.sort(function(a,b){return (b.ts||0)-(a.ts||0)});return mine[0]||null}catch(e){return null}}
/* all HQ customers (any brick) for resolving register-seed names -> codes */
function allHQCust(){try{if(typeof CUST==='undefined'||!CUST)return[];var hq=myHQ2(),out=[];Object.keys(CUST).forEach(function(code){var c=CUST[code];if(!c)return;if(hq&&hqName(c.hq)&&hqName(c.hq)!==hq)return;out.push({code:String(code),name:c.name||String(code)})});return out}catch(e){return[]}}
var TITLE=/^(dr|prof|mr|mrs|ms|md|smt|sri|shri)\.?$/;
function toks(s){return String(s||'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(function(w){return w.length>=3&&!TITLE.test(w)})}
/* tolerant name match: shares any significant token, so surname-first / first-name-first both match */
function nameEq(a,b){var ta=toks(a),tb=toks(b);if(!ta.length||!tb.length)return false;return ta.some(function(w){return tb.indexOf(w)>=0})}
function seededPicks(){var sm=seedMap(),cust=allHQCust(),p={};PICKC().forEach(function(c){var names=sm[c.id]||[],codes=[];
  cust.forEach(function(cu){if(names.some(function(nm){return nameEq(cu.name,nm)}))codes.push(cu.code)});p[c.id]=codes});return p}
function curPicks(){var e=myEntry();if(e&&e.picks)return JSON.parse(JSON.stringify(e.picks));return seededPicks()}
function picksStatus(){var e=myEntry();return e?e.status:'draft'}

/* seed codes: seeds are register customer-name strings; map to brick customer codes by name match */
function seedCodesFor(id,allCust){var names=(seedMap()[id]||[]);var out=[];
  allCust.forEach(function(c){names.forEach(function(nm){var a=(c.name||'').toLowerCase(),b=String(nm).toLowerCase().split(',')[0].trim();if(a&&b&&(a.indexOf(b)>=0||b.indexOf(a)>=0))out.push(c.code)})});return out}

function st(){ if(document.getElementById('ftselcss'))return; var s=document.createElement('style');s.id='ftselcss';s.textContent=`
.selc{background:var(--card,#fff);border:1px solid var(--line,#e5ece9);border-radius:16px;padding:12px 14px;margin:0 0 12px}
.selc .tot{display:flex;gap:6px;flex-wrap:wrap;margin:2px 0 4px}
.selc .tot b{font-size:12px;font-weight:800;border-radius:999px;padding:5px 10px;background:var(--soft2,#eef2f1);color:var(--muted,#5B716E)}
.selc .tot b.ok{background:#D6F0E0;color:#13684A}
.selrow{display:flex;align-items:flex-start;gap:8px;padding:9px 0;border-top:1px solid var(--line,#eef2f1)}
.selrow .nm{flex:1;min-width:0;font-size:13.5px}.selrow .nm small{display:block;color:var(--muted,#5B716E);font-size:11px}
.selrow .cg{display:flex;gap:5px;flex-wrap:wrap;justify-content:flex-end}
.selrow .cg button{border:0;border-radius:999px;padding:6px 9px;font-size:11.5px;font-weight:800;min-height:auto;background:var(--soft2,#eef2f1);color:var(--muted,#5B716E)}
.selrow .cg button.on{background:linear-gradient(120deg,#0F5257,#1B7F79);color:#fff}
.inprow{display:grid;grid-template-columns:22px 52px 1fr 64px auto;gap:6px;align-items:center;padding:7px 2px;border-top:1px solid var(--line,#eef2f1);font-size:12.5px}
.inprow.hd{font-size:9.5px;letter-spacing:.3px;text-transform:uppercase;color:var(--muted,#5B716E);font-weight:800;border-top:0}
.inprow .c0{text-align:center;color:var(--muted);font-weight:700}
.inprow .c1{font-size:11px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.inprow .c3{font-size:11px;color:var(--muted)}
.inprow .c4{text-align:right;white-space:nowrap}
.inprow.slot{grid-template-columns:22px 1fr;background:var(--soft,#F7FAF9);border-radius:10px;margin-top:4px;padding:8px}
.inprow .slotf{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.inprow .slotf select{flex:1 1 44%;min-width:0;padding:7px;border:1px solid var(--line,#ddd);border-radius:9px;font-size:12px;background:var(--card,#fff);color:var(--ink)}
.inprow .slotcode{font-size:11px;color:var(--accent,#0F5257);font-weight:800;min-width:56px}
.inprow .slotsave{all:unset;cursor:pointer;background:var(--accent,#0F5257);color:#fff;border-radius:9px;padding:7px 13px;font-weight:800;font-size:12px}
`;document.head.appendChild(s)}

function campShort(id){return {deca_inj:'Inj',deca_core:'Core',rloc:'R-Loc',raft:'Raft',shakti:'Shakti'}[id]||id}

/* the selection screen */
function pickScreen(app){try{if(isMgr()){app.append(h('div',{class:'note'},'Doctor selection is the CSO\'s screen.'));return}
  st();
  var brick=(typeof brickToday==='function'&&brickToday())||'';
  S.tab=S.tab||{}; if(S.tab.pickBrick==null)S.tab.pickBrick=brick;
  var hq=myHQ2(),bricks=(typeof bricksOf==='function'?bricksOf(hq):[])||[];
  if(brick&&bricks.indexOf(brick)<0)bricks=[brick].concat(bricks);
  var picks=curPicks(),status=picksStatus(),locked=(status==='approved');
  var only=(S.tab&&S.tab.pickOnly)||'';
  var CAMPS=only?PICKC().filter(function(c){return c.id===only}):PICKC();
  // header + status
  var hdr=only==='shakti'?'💉 Shakti Campaign doctors':'👨‍⚕️ Your campaign doctors';
  var intro=only==='shakti'?'Pick 8 doctors (2 per week) for the Shakti prescription camps. ':'Tag each doctor as you cover the brick. Targets build up across the month. ';
  app.append(h('div',{class:'coachc'},h('div',{class:'k'},hdr),
    h('p',{},intro+(status==='pending'?'⏳ Sent to Ratan Roy for approval.':status==='approved'?'✅ Approved — tap “Request change” to edit.':status==='returned'?'↩️ Returned by Ratan — adjust and resend.':'Draft — save when ready.'))));
  // totals vs targets
  var tot=h('div',{class:'tot'});CAMPS.forEach(function(c){var n=(picks[c.id]||[]).length,tg=c.count||0;tot.append(h('b',{class:n>=tg?'ok':''},campShort(c.id)+' '+n+'/'+tg))});
  // brick selector
  var sel=h('select',{onchange:function(){S.tab.pickBrick=sel.value;render()}},bricks.map(function(b){return h('option',{value:b,selected:b===S.tab.pickBrick?'selected':null},b+(b===brick?' (today)':''))}));
  var box=h('div',{class:'selc'},h('div',{style:'display:flex;align-items:center;gap:8px;margin-bottom:4px'},h('b',{style:'font-size:13px'},'Brick:'),sel),tot);
  var cur=S.tab.pickBrick, all=brickCust(cur), docs=all.filter(isDoctor);
  if(!docs.length)box.append(h('div',{class:'selrow',style:'border:0;color:var(--muted)'},h('div',{},'No doctors found in this brick'+(typeof CUST==='undefined'?' (customer list still loading — Sync).':'.'))));
  docs.forEach(function(d){
    var cg=h('div',{class:'cg'});
    CAMPS.forEach(function(c){var on=(picks[c.id]||[]).indexOf(d.code)>=0;
      cg.append(h('button',{class:on?'on':'',disabled:locked?'':null,onclick:function(){
        var arr=picks[c.id]||(picks[c.id]=[]);var i=arr.indexOf(d.code);if(i>=0)arr.splice(i,1);else arr.push(d.code);
        S.tab._pdirty=picks;render()}},campShort(c.id)))});
    box.append(h('div',{class:'selrow'},h('div',{class:'nm'},d.name,d.spec?h('small',{},d.spec):''),cg))});
  app.append(box);
  // save / request-change
  var bar=h('div',{style:'display:flex;gap:8px'});
  if(locked){bar.append(h('button',{class:'ghost',style:'flex:1',onclick:function(){var e=myEntry();if(e){e.status='draft';}toast('You can edit now — save to resend.');render()}},'✏️ Request change'));}
  else{bar.append(h('button',{style:'flex:1',onclick:function(){
    if(typeof save!=='function'){toast('Cannot save here.');return}
    save('campaign_pick',{picks:picks,status:'pending'}).then(function(ok){if(ok){toast('Sent to Ratan Roy for approval');try{delete S.tab._pdirty}catch(e){}render()}})}},'📤 Save & send for approval'));}
  app.append(bar);
}catch(e){app.append(h('div',{class:'note'},'Could not load selection: '+e.message))}}

U.pickScreen=pickScreen;U.routes.pick=function(app){if(S.tab)S.tab.pickOnly=null;pickScreen(app)};
/* Shakti Campaign: the same picker, focused on the Shakti camp list (CSO fills → save → Ratan approves → reflects) */
U.routes.shakti=function(app){S.tab=S.tab||{};S.tab.pickOnly='shakti';pickScreen(app)};

/* a small card for the Today/Work screens linking into selection */
U.pickCard=function(){try{if(isMgr())return'';var picks=curPicks(),status=picksStatus(),miss=[];
  PICKC().forEach(function(c){var n=(picks[c.id]||[]).length,tg=c.count||0;if(n<tg)miss.push(campShort(c.id)+' '+n+'/'+tg)});
  if(status==='pending')return h('div',{class:'coachc',onclick:function(){go('pick')},style:'cursor:pointer'},h('div',{class:'k'},'👨‍⚕️ Campaign doctors — ⏳ waiting for approval'),h('p',{},'Ratan Roy will approve your list. Tap to view.'));
  if(!miss.length)return h('div',{class:'coachc',style:'background:linear-gradient(135deg,#E8F6EE,#D6F0E0);border-color:#9FD9B6;cursor:pointer',onclick:function(){go('pick')}},h('div',{class:'k',style:'color:#13684A'},'✅ Campaign doctors complete'),h('p',{style:'color:#1b6b4a'},'All targets filled. Tap to review.'));
  return h('div',{class:'coachc',onclick:function(){go('pick')},style:'cursor:pointer'},h('div',{class:'k'},'👨‍⚕️ Pick your campaign doctors'),h('p',{},'Still to fill: '+miss.join(' · ')+'. Tap to tag doctors in today\'s brick.'));
}catch(e){return''}};

/* manager: approve pending campaign_pick (augments the Approvals screen) */
U.campaignApprovals=function(){try{var L=(S.entries||[]).filter(function(e){return e.type==='campaign_pick'&&e.status==='pending'});if(!L.length)return null;
  var box=h('div',{class:'phase'},h('div',{class:'ph'},h('b',{},'👨‍⚕️ Doctor lists to approve'),h('small',{},String(L.length))));
  L.forEach(function(e){var sum=PICKC().map(function(c){return campShort(c.id)+' '+((e.picks&&e.picks[c.id]||[]).length)}).join(' · ');
    box.append(h('div',{class:'lrow',style:'cursor:default'},h('div',{class:'tx'},h('b',{},(e.name||'CSO')),h('small',{},sum)),
      h('div',{style:'display:flex;gap:6px'},
        h('button',{style:'min-height:auto;padding:8px 12px',onclick:function(){S.db.collection('entries').doc(e._id).update({status:'approved',approvedTs:Date.now()}).then(function(){toast('Approved');render()})}},'✅'),
        h('button',{class:'ghost',style:'min-height:auto;padding:8px 12px',onclick:function(){var n=prompt('What to correct?')||'';S.db.collection('entries').doc(e._id).update({status:'returned',note:n}).then(function(){toast('Returned');render()})}},'↩️'))))});
  return box}catch(e){return null}};

/* ---------- daily carry-per-brick list ---------- */
function inputsPendBrand(brand){try{var f=(typeof ff==='function')?ff():null;if(!f){var k=Object.keys(S.feeds||{}).filter(function(z){return z.indexOf('inputs_')===0})[0];f=k?S.feeds[k]:null}if(!f||!f.brands||!f.brands[brand])return[];return (f.brands[brand].li||[]).map(function(x){return x.it})}catch(e){return[]}}
function skinRoster(){try{var hq=myHQ2();return (((window.FT_ROSTERS||{}).skin||{})[hq])||[]}catch(e){return[]}}
function custName(code){try{return (CUST&&CUST[code]&&CUST[code].name)||code}catch(e){return code}}
/* tolerant brick/beat match: exact, contains, or shared significant token (TP brick names vs chemist beat names differ) */
function brickEq(a,b){a=(''+(a||'')).toLowerCase().trim();b=(''+(b||'')).toLowerCase().trim();if(!a||!b)return false;if(a===b)return true;if(a.indexOf(b)>=0||b.indexOf(a)>=0)return true;var ta=a.split(/[^a-z0-9]+/).filter(function(w){return w.length>=4}),tb=b.split(/[^a-z0-9]+/).filter(function(w){return w.length>=4});return ta.some(function(w){return tb.indexOf(w)>=0})}
function inBrickCode(code,brick){try{return CUST&&CUST[code]&&brickEq(CUST[code].brick,brick)}catch(e){return false}}
function carryList(app){try{if(isMgr()){app.append(h('div',{class:'note'},'Carry list is the CSO\'s screen.'));return}
  st();var brick=(typeof brickToday==='function'&&brickToday())||'';
  if(!brick){app.append(h('div',{class:'coachc'},h('div',{class:'k'},'📍 Pick today\'s brick first'),h('p',{},'Confirm your brick in “Start my day”, then your carry list appears here.')));return}
  app.append(h('div',{class:'coachc'},h('div',{class:'k'},'🎒 Carry today · '+brick),h('p',{},'Hand these to each listed customer in '+brick+', then report in Ventasys. Nothing to fill here.')));
  var picks=curPicks(),any=false;
  PICKC().forEach(function(c){var codes=(picks[c.id]||[]).filter(function(code){return inBrickCode(code,brick)});if(!codes.length)return;any=true;
    var pend=inputsPendBrand(c.brand),items=(c.carry||[]).filter(function(it){return !pend.length||pend.some(function(p){return nameEq(p,it)})});if(!items.length)items=c.carry||[];
    var box=h('div',{class:'selc'},h('div',{style:'font-weight:800;font-size:13px;margin-bottom:4px'},campShort(c.id)+' — carry: '+(items.join(', ')||'—')));
    codes.forEach(function(code){box.append(h('div',{class:'selrow'},h('div',{class:'nm'},custName(code))))});app.append(box)});
  var sk=skinRoster().filter(function(o){return brickEq(o.beat,brick)});
  if(sk.length){any=true;var pendS=inputsPendBrand('Skinlite'),itemsS=(pendS.length?pendS.slice(0,4):['Skinlite range']).concat(['📄 Poster']);
    var box=h('div',{class:'selc'},h('div',{style:'font-weight:800;font-size:13px;margin-bottom:4px'},'Skinlite · '+sk.length+' outlets — carry: '+itemsS.join(', ')));
    sk.slice(0,40).forEach(function(o){box.append(h('div',{class:'selrow'},h('div',{class:'nm'},o.n)))});
    if(sk.length>40)box.append(h('div',{class:'selrow',style:'color:var(--muted)'},h('div',{},'+'+(sk.length-40)+' more outlets')));app.append(box)}
  if(!any)app.append(h('div',{class:'coachc',style:'background:linear-gradient(135deg,#E8F6EE,#D6F0E0);border-color:#9FD9B6'},h('p',{style:'color:#1b6b4a'},'No tagged doctors or Skinlite outlets in '+brick+' yet. Tag doctors in “Pick Drs”.')));
}catch(e){app.append(h('div',{class:'note'},'Could not build carry list: '+e.message))}}
U.carryList=carryList;U.routes.carry=function(app){carryList(app)};
U.carryCard=function(){try{if(isMgr())return'';var brick=(typeof brickToday==='function'&&brickToday())||'';if(!brick)return'';
  var picks=curPicks(),n=0;PICKC().forEach(function(c){n+=(picks[c.id]||[]).filter(function(code){return inBrickCode(code,brick)}).length});
  n+=skinRoster().filter(function(o){return brickEq(o.beat,brick)}).length;if(!n)return'';
  return h('div',{class:'coachc',style:'cursor:pointer',onclick:function(){go('carry')}},h('div',{class:'k'},'🎒 Carry today · '+brick),h('p',{},n+' customer'+(n>1?'s':'')+' in this brick — tap to see what to carry to each.'));
}catch(e){return''}};

/* ---------- stock statement upload (photo or PDF) ---------- */
function stmtEntries(){try{return (S.entries||[]).filter(function(e){return e.type==='stock_statement'&&(!e.email||e.email===myEmail())}).sort(function(a,b){return (b.ts||0)-(a.ts||0)})}catch(e){return[]}}
/* ---- in-app statement reader: the app calculates closing stock itself (ML Kit OCR in the APK fills it; manual confirm otherwise) ---- */
var STMTBRANDS=[['R-Loc Raft',/raft/i],['Skinlite Facewash',/face\s*wash/i],['Skinlite Day Care',/day\s*care/i],['Deca Durabolin',/deca\s*dur/i],['Dexona',/dexona/i],['R-Loc',/r[\s\-]*loc/i],['Skinlite',/skin\s*lite/i],['Ciprobid',/ciprobid/i],['Oflin',/oflin/i],['Oriprim',/oriprim/i],['Zipcet',/zipcet/i],['Tiniba',/tiniba/i],['Itchcam',/itchcam/i],['Cadiphylate',/cadiphylate/i],['Falcigo',/falcigo/i]];
var STMT_ALL=['Deca Durabolin','Dexona','R-Loc','Skinlite','R-Loc Raft','Skinlite Facewash','Skinlite Day Care','Ciprobid','Oflin','Oriprim','Zipcet','Tiniba','Itchcam','Cadiphylate','Falcigo'];
function guessStockist(lines){for(var i=0;i<Math.min(lines.length,25);i++){var l=(lines[i]||'').trim();if(l.length>4&&l.length<60&&/DRUG|PHARMA|MEDICAL|AGENC|ENTERPRIS|DISTRIBUT|TRADER|STORES?|MEDICOS?/i.test(l))return l}return''}
function parseStatement(text){var out={stockist:'',b:{}};if(!text)return out;var lines=text.split(/[\n\r]+/);out.stockist=guessStockist(lines);
  var taken={};STMTBRANDS.forEach(function(br){for(var i=0;i<lines.length;i++){if(taken[i])continue;if(br[1].test(lines[i])){var nums=(lines[i].match(/[\d,]+\.\d{2}/g)||lines[i].match(/[\d,]{3,}/g)||[]);if(nums.length){var v=parseFloat(String(nums[nums.length-1]).replace(/,/g,''));if(!isNaN(v)&&v>0){out.b[br[0]]=(out.b[br[0]]||0)+v;taken[i]=1}}break}}});
  return out}
window.ftOcrResult=function(id,text){try{var cb=(window.__ocrCbs||{})[id];if(cb){delete window.__ocrCbs[id];cb(text||'')}}catch(e){}};
function ocrFile(f){return new Promise(function(res){try{
  if(!(window.AndroidApp&&AndroidApp.ocrStart)){res('');return}
  var isPdf=/pdf/i.test(f.type||'')||/\.pdf$/i.test(f.name||'');
  function send(b64,mime){var id='o'+Date.now()+Math.floor(Math.random()*9999);window.__ocrCbs=window.__ocrCbs||{};window.__ocrCbs[id]=res;try{AndroidApp.ocrStart(b64,mime,id)}catch(e){delete window.__ocrCbs[id];res('')}setTimeout(function(){if(window.__ocrCbs[id]){delete window.__ocrCbs[id];res('')}},90000)}
  var r=new FileReader();
  if(isPdf){r.onload=function(){send(String(r.result).split(',')[1]||'','application/pdf')};r.onerror=function(){res('')};r.readAsDataURL(f)}
  else{r.onload=function(){var img=new Image();img.onload=function(){try{var mx=1800,sc=Math.min(1,mx/Math.max(img.width,img.height)),cv=document.createElement('canvas');cv.width=Math.round(img.width*sc);cv.height=Math.round(img.height*sc);cv.getContext('2d').drawImage(img,0,0,cv.width,cv.height);send(cv.toDataURL('image/jpeg',0.85).split(',')[1]||'','image/jpeg')}catch(e){res('')}};img.onerror=function(){res('')};img.src=r.result};r.onerror=function(){res('')};r.readAsDataURL(f)}
}catch(e){res('')}})}
/* the app's own closing: newest statement per stockist, summed by brand (no backend) */
U.localClosing=function(){try{var es=(S.entries||[]).filter(function(e){return e.type==='stock_statement'&&e.b});var byStk={};es.forEach(function(e){var k=e.stockist||e.fileId||e._id||Math.random();var p=byStk[k];if(!p||(e.ts||0)>(p.ts||0))byStk[k]=e});var out={};Object.keys(byStk).forEach(function(k){var b=byStk[k].b||{};Object.keys(b).forEach(function(br){out[br]=(out[br]||0)+(+b[br]||0)})});return out}catch(e){return{}}};

function stmtScreen(app){try{if(isMgr()){app.append(h('div',{class:'note'},'Stock statements are uploaded by the CSO.'));return}
  st();
  app.append(h('div',{class:'coachc'},h('div',{class:'k'},'📄 Stock statement'),h('p',{},'Upload your stockist\'s statement — photo or PDF, any software\'s format. The app reads it and fills in the closing stock brand-wise. Check the figures and Save; it goes into your Progress and falls as POB is booked.')));
  if(!(window.AndroidApp&&AndroidApp.ocrStart))app.append(h('div',{style:'font-size:12px;color:var(--muted);margin:-4px 0 10px;text-align:center'},'📲 Update the app to auto-read the figures from the photo/PDF. Until then, enter the closing below.'));
  var inp=h('input',{type:'file',accept:'image/*,application/pdf',style:'display:none'});
  var stx=h('div',{style:'text-align:center;color:var(--muted);font-size:13px;min-height:18px;margin-top:6px'});
  var btn=h('button',{style:'width:100%',onclick:function(){inp.click()}},'📄 Read a statement (photo or PDF)');
  app.append(h('div',{class:'selc'},btn,inp,stx));
  var formWrap=h('div');app.append(formWrap);
  function showForm(guess,fileInfo){formWrap.innerHTML='';
    var stk=h('input',{type:'text',placeholder:'Stockist name',value:(guess&&guess.stockist)||'',style:'width:100%;margin-bottom:8px'});
    var rows={},box=h('div',{class:'selc'},h('div',{style:'font-weight:800;margin-bottom:4px'},'Closing stock — ₹ value per brand'),h('p',{style:'font-size:12px;color:var(--muted);margin:0 0 8px'},'The app filled these from the statement. Fix any that look wrong; leave blank to skip.'),stk);
    [['IMPACT',['Deca Durabolin','Dexona','R-Loc','Skinlite']],['NPD',['R-Loc Raft','Skinlite Facewash','Skinlite Day Care']],['OTHERS',['Ciprobid','Oflin','Oriprim','Zipcet','Tiniba','Itchcam','Cadiphylate','Falcigo']]].forEach(function(g){
      box.append(h('div',{style:'font-size:11px;font-weight:800;color:var(--accent,#0F5257);margin:8px 0 2px;letter-spacing:.4px'},g[0]));
      g[1].forEach(function(b){var val=(guess&&guess.b&&guess.b[b]!=null)?Math.round(guess.b[b]):'';var ip=h('input',{type:'number',inputmode:'decimal',placeholder:'₹',style:'width:130px;text-align:right'});if(val!=='')ip.value=String(val);rows[b]=ip;
        box.append(h('div',{style:'display:flex;align-items:center;justify-content:space-between;margin:4px 0;gap:8px'},h('span',{style:'font-size:13px'},b),ip))})});
    var sv=h('button',{style:'width:100%;margin-top:10px',onclick:function(){var bval={};Object.keys(rows).forEach(function(b){var v=parseFloat(rows[b].value);if(!isNaN(v)&&v>0)bval[b]=Math.round(v)});
      var rec={url:(fileInfo&&fileInfo.url)||'',fileId:(fileInfo&&fileInfo.id)||'',name:(fileInfo&&fileInfo.name)||'statement',mime:(fileInfo&&fileInfo.mime)||'',month:(typeof TODAY!=='undefined'?TODAY:'').slice(0,7),stmtDate:TODAY,stockist:stk.value||'',b:bval};
      (typeof save==='function'?save('stock_statement',rec):Promise.resolve(true)).then(function(){stx.textContent='✅ Saved — closing added to your Progress';formWrap.innerHTML='';try{render()}catch(e){}})}},'✅ Save closing to Progress');
    box.append(sv);formWrap.append(box)}
  inp.addEventListener('change',function(){var f=inp.files&&inp.files[0];if(!f)return;btn.disabled=true;stx.textContent='Uploading…';
    var up=(typeof uploadPhoto==='function')?uploadPhoto(f):Promise.resolve({});
    up.then(function(p){var fileInfo={url:p&&p.url,id:p&&p.id,name:f.name,mime:f.type};btn.disabled=false;stx.textContent='📖 Reading your statement…';
      ocrFile(f).then(function(text){var guess=parseStatement(text);showForm(guess,fileInfo);stx.textContent=text?'✅ Read — check the figures below':'Enter the closing below';})},
      function(){btn.disabled=false;showForm({},{name:f.name,mime:f.type});stx.textContent='Upload failed — you can still enter the closing below.'})});
  var prev=stmtEntries();
  if(prev.length){var box2=h('div',{class:'coachc'},h('div',{class:'k'},'Saved statements'));prev.slice(0,10).forEach(function(e){var bs=e.b?Object.keys(e.b).length:0;box2.append(h('p',{style:'margin:3px 0'},'📄 '+(e.stockist||e.name||'statement')+(e.date?' · '+e.date:'')+(bs?' · '+bs+' brands':'')))});app.append(box2)}
}catch(e){app.append(h('div',{class:'note'},'Could not open statement reader: '+e.message))}}
U.stmtScreen=stmtScreen;U.routes.stock=function(app){stmtScreen(app)};

/* ---------- field photo: take, tag the dr/retailer, submit (reaches Ratan to share) ---------- */
function photoScreen(app){try{if(isMgr()){app.append(h('div',{class:'note'},'Photos are uploaded by the CSO.'));return}
  st();var brick=(typeof brickToday==='function'&&brickToday())||'';
  app.append(h('div',{class:'coachc'},h('div',{class:'k'},'📷 Photo of a visit / input given'),h('p',{},'Take a photo, tag the doctor or retailer it\'s for, and submit. It goes straight to Ratan Roy to share in the group.')));
  var cust=brickCust(brick),file=null;
  var sel=h('select',{style:'width:100%;padding:9px;border:1px solid var(--line,#ddd);border-radius:10px'},[h('option',{value:''},cust.length?'— pick who it\'s for —':'— none in brick; type below —')].concat(cust.map(function(c){return h('option',{value:c.code},c.name)})));
  var other=h('input',{type:'text',placeholder:'or type doctor/retailer name',style:'width:100%;margin-top:6px;padding:9px;border:1px solid var(--line,#ddd);border-radius:10px'});
  var note=h('input',{type:'text',placeholder:'what was given (optional)',style:'width:100%;margin-top:6px;padding:9px;border:1px solid var(--line,#ddd);border-radius:10px'});
  var inp=h('input',{type:'file',accept:'image/*',style:'display:none'});
  var stx=h('div',{style:'text-align:center;color:var(--muted);font-size:13px;min-height:18px;margin-top:6px'});
  var take=h('button',{style:'width:100%;margin-top:8px',onclick:function(){inp.click()}},'📷 Take / choose photo');
  var submit=h('button',{style:'width:100%;margin-top:8px',disabled:true,onclick:function(){
    var c=cust.filter(function(x){return x.code===sel.value})[0],toName=c?c.name:(other.value||'').trim();
    if(!file){stx.textContent='Take a photo first.';return} if(!toName){stx.textContent='Tag the doctor/retailer first.';return}
    submit.disabled=true;stx.textContent='Uploading…';
    uploadPhoto(file).then(function(p){(typeof save==='function'?save('field_photo',{url:p.url,fileId:p.id,toName:toName,toCode:sel.value||'',brick:brick,note:(note.value||'').trim()}):Promise.resolve(true)).then(function(){stx.textContent='✅ Sent to Ratan Roy';file=null;submit.disabled=true;take.textContent='📷 Take / choose photo';try{render()}catch(e){}})},
      function(e){submit.disabled=false;stx.textContent=(e&&e.message)||'Upload failed. Try again.'})}},'📤 Submit to Ratan Roy');
  inp.addEventListener('change',function(){var f=inp.files&&inp.files[0];if(!f)return;if(typeof uploadPhoto!=='function'){stx.textContent='Upload not ready — Sync.';return}file=f;take.textContent='📷 Photo chosen — retake';submit.disabled=false;stx.textContent='Now tag who it\'s for, then submit.'});
  app.append(h('div',{class:'selc'},h('div',{style:'font-weight:700;margin-bottom:6px'},'Who is it for?'),sel,other,note,inp,take,submit,stx));
  var mine=(S.entries||[]).filter(function(e){return e.type==='field_photo'&&e.date===(typeof TODAY!=='undefined'?TODAY:'')&&(!e.email||e.email===myEmail())});
  if(mine.length){var box=h('div',{class:'coachc'},h('div',{class:'k'},'Sent today ('+mine.length+')'));mine.forEach(function(e){box.append(h('p',{style:'margin:3px 0'},'📷 '+(e.toName||'visit')+(e.note?' — '+e.note:'')))});app.append(box)}
}catch(e){app.append(h('div',{class:'note'},'Could not open photo upload: '+e.message))}}
U.photoScreen=photoScreen;U.routes.photo=function(app){photoScreen(app)};

/* separate geo-selfie (its own 10–10:30 step) */
function selfieToday(){try{return (S.entries||[]).some(function(e){return (e.type==='selfie')&&e.date===(typeof TODAY!=='undefined'?TODAY:'')&&(!e.email||e.email===myEmail())})}catch(e){return false}}
U.selfieToday=selfieToday;
function doSelfie(){try{if(isMgr())return;
  try{if(window.AndroidApp&&AndroidApp.requestLocation)AndroidApp.requestLocation()}catch(e){}
  if(typeof U.selfie!=='function'){toast&&toast('Update the app to take a selfie.');return}
  U.selfie(function(r){var url=r&&r.selfie;if(!url)return;var f={url:url,time:new Date().toTimeString().slice(0,5)};
    try{if(window.AndroidApp&&AndroidApp.getLocation){var L=AndroidApp.getLocation();if(L&&L!=='null'){var j=JSON.parse(L);f.lat=j.lat;f.lng=j.lng;f.acc=j.acc}}}catch(e){}
    (typeof save==='function'?save('selfie',f):Promise.resolve(true)).then(function(){toast&&toast('Selfie sent to Ratan Roy');try{render()}catch(e){}})})}catch(e){}}
U.doSelfie=doSelfie;

/* Today cards: photo (always) + no-brick nudge */
U.photoCard=function(){try{if(isMgr())return'';return h('div',{class:'coachc',style:'cursor:pointer',onclick:function(){go('photo')}},h('div',{class:'k'},'📷 Add a visit / input photo'),h('p',{},'Tag the doctor or retailer and submit — it reaches Ratan Roy to share in the group.'))}catch(e){return''}};
U.noBrickCard=function(){try{if(isMgr())return'';var ci=!!(U.checkinToday&&U.checkinToday());if(ci)return'';if(U.leaveToday&&U.leaveToday())return'';
  return h('div',{class:'coachc',style:'cursor:pointer;background:linear-gradient(135deg,#FFF4D6,#FDE8B8);border-color:#F0D18A',onclick:function(){go('photo')}},h('div',{class:'k',style:'color:#5A4300'},'📷 No brick selected yet'),h('p',{style:'color:#6a5320'},'If you are on leave, ignore this. If you are working, keep uploading photos of the doctors/retailers you give inputs to.'))}catch(e){return''}};

/* compact home quick-access row */
U.quickRow=function(){try{if(isMgr())return'';var items=[['🎒','Carry',function(){go('carry')}],['👨‍⚕️','Pick Drs',function(){go('pick')}],['📷','Photo',function(){go('photo')}],['📊','Reports',function(){try{S.tab=S.tab||{};S.tab.perf='brands'}catch(e){}go('perf')}]];
  return h('div',{class:'qrow'},items.map(function(it){return h('button',{onclick:it[2]},h('span',{class:'qi'},it[0]),it[1])}))}catch(e){return''}};

/* CSO home card → full own-HQ reports (month / quarter / YTD, brand / Impact / NPD) */
U.reportsCard=function(){try{if(isMgr())return'';return h('div',{class:'coachc',style:'cursor:pointer',onclick:function(){try{S.tab=S.tab||{};S.tab.perf='brands'}catch(e){}go('perf')}},h('div',{class:'k'},'📊 My reports — month · quarter · YTD'),h('p',{},'Your HQ\'s performance brand-wise, Impact brands and NPDs — monthly, quarterly and year-to-date. Tap to open.'))}catch(e){return''}};

/* ---------- manager: photos & statements to forward to WhatsApp ---------- */
function relayList(){try{return (S.entries||[]).filter(function(e){return (e.type==='field_photo'||e.type==='stock_statement'||(e.type==='selfie'&&e.url))&&!e.shared}).sort(function(a,b){return (b.ts||0)-(a.ts||0)})}catch(e){return[]}}
function relayMsg(e){var who=e.name||'CSO',what=e.type==='field_photo'?('the picture of '+(e.toName||'a doctor/retailer')+(e.note?' ('+e.note+')':'')):e.type==='stock_statement'?('the stock statement'+(/\.pdf$/i.test(e.name||'')?' (PDF)':'')):'the selfie';
  return who+' has shared '+what+'. Please share the same in the respective group.'+(e.url?'\n'+e.url:'')}
U.relayPanel=function(){try{if(!isMgr())return null;var E=relayList();if(!E.length)return null;
  var box=h('div',{class:'phase'},h('div',{class:'ph'},h('b',{},'📸 Photos & statements to share'),h('small',{},String(E.length))));
  E.forEach(function(e){var msg=relayMsg(e),kind=e.type==='field_photo'?(e.toName||'visit'):e.type==='stock_statement'?'stock statement':'selfie';
    box.append(h('div',{class:'lrow',style:'cursor:default;align-items:flex-start'},
      h('div',{class:'tx'},h('b',{},(e.name||'CSO')+' · '+kind),h('small',{style:'word-break:break-all'},e.url||'')),
      h('div',{style:'display:flex;gap:6px'},
        e.url?h('button',{class:'ghost',style:'min-height:auto;padding:8px 10px',onclick:function(){try{if(window.AndroidApp&&AndroidApp.open)AndroidApp.open(e.url);else window.open(e.url,'_blank')}catch(x){}}},'👁'):'',
        h('button',{style:'min-height:auto;padding:8px 10px',onclick:function(){try{if(window.AndroidApp&&AndroidApp.shareWhatsApp)AndroidApp.shareWhatsApp(msg);else if(window.AndroidApp&&AndroidApp.share)AndroidApp.share(msg);else{toast&&toast('Update the app to share')}}catch(x){}}},'↗ Share'),
        h('button',{class:'ghost',style:'min-height:auto;padding:8px 10px',onclick:function(){try{S.db.collection('entries').doc(e._id).update({shared:true}).then(function(){toast&&toast('Marked shared');render()})}catch(x){}}},'✓'))))});
  return box}catch(e){return null}};

/* ================= Brand drill-down: brand → input → quantity + doctor/retailer list (pick/approve/photo) ================= */
var ROUTEB={raft:'R-Loc Raft',deca:'Deca Durabolin',rloc:'R-Loc',skin:'Skinlite',dexona:'Dexona',gifts:'Gifts & General'};
function ff(){try{var hq=myHQ2();if(window.FT_INPUTS){var key='inputs_'+hq;if(hq&&FT_INPUTS[key])return FT_INPUTS[key]}var k=Object.keys(S.feeds||{}).filter(function(z){return z.indexOf('inputs_')===0})[0];return k?S.feeds[k]:null}catch(e){return null}}
function normItem(s){return String(s||'').toUpperCase().replace(/\s+/g,' ').trim()}
/* inputs under a brand, de-duplicated by normalized name (so "R Loc RAFT Pen" and "R LOC RAFT PEN" are one) */
function brandItems(brand){var f=ff();if(!f||!f.brands||!f.brands[brand])return[];var b=f.brands[brand],set={},ord=[];['gi','gs','li','ls'].forEach(function(k){(b[k]||[]).forEach(function(x){var key=normItem(x.it);if(!set[key]){set[key]=1;ord.push(x.it)}})});return ord}
function itemQty(brand,item){var f=ff(),b=(f&&f.brands&&f.brands[brand])||{},used=0,bal=0,key=normItem(item);(b.gi||[]).concat(b.gs||[]).forEach(function(x){if(normItem(x.it)===key)used+=(+x.q||0)});(b.li||[]).concat(b.ls||[]).forEach(function(x){if(normItem(x.it)===key)bal+=(+x.q||0)});return{used:used,bal:bal,alloc:used+bal}}
function givenFor(brand,item){var f=ff(),b=(f&&f.brands&&f.brands[brand])||{},out=[],key=normItem(item);(b.gi||[]).concat(b.gs||[]).forEach(function(x){if(normItem(x.it)===key&&x.to&&x.to!=='Not recorded')out.push({to:x.to,q:x.q,chk:x.chk})});return out}
/* Ventasys code for a name (reverse lookup in the customer master) */
function codeForName(nm){try{var hq=myHQ2();for(var code in CUST){var c=CUST[code];if(!c)continue;if(hq&&hqName(c.hq)&&hqName(c.hq)!==hq)continue;if(nameEq(c.name,nm))return code}}catch(e){}return''}
/* doctors / retailers in a brick (value = Ventasys code) */
function slotCands(brick,retail){try{var all=brickCust(brick)||[];return all.filter(function(c){var doc=isDoctor(c);return retail?!doc:doc})}catch(e){return[]}}
/* this input's slots waiting for approval (CSO filled, not yet approved) */
function inputPending(brand,item){var key=normItem(item);try{return (S.entries||[]).filter(function(e){return e.type==='dr_approval'&&e.status==='pending'&&(!e.email||e.email===myEmail())&&e.brand===brand&&normItem(e.item||'')===key})}catch(e){return[]}}
var BRANDW=/^(deca|durabolin|rloc|loc|raft|skinlite|dexona|oflin|zipcet|tab|tablet|inj|susp|the|and|set|ps|ind|zhl|india)$/;
function toksB(s){return toks(s).filter(function(w){return !BRANDW.test(w)})}
function matchCarry(carry,item){var ta=toksB(carry),tb=toksB(item);if(ta.length&&tb.length&&ta.some(function(w){return tb.indexOf(w)>=0}))return true;var c=(''+carry).toLowerCase().replace(/\(.*\)/,'').trim();return c.length>3&&(''+item).toLowerCase().indexOf(c)>=0}
function itemCamp(brand,item){var cs=(((window.FT_ROSTERS||{}).campaigns)||[]).filter(function(c){return c.brand===brand});return cs.filter(function(c){return (c.carry||[]).some(function(ci){return matchCarry(ci,item)})})[0]||null}
function assignedRoster(camp){try{var hq=myHQ2(),R=(window.FT_ROSTERS||{});if(camp&&camp.feed==='pulse_')return (R.pulse&&R.pulse[hq]||[]).map(function(d){return d.n});if(camp&&camp.feed==='skin_')return (R.skin&&R.skin[hq]||[]).map(function(o){return o.n});return[]}catch(e){return[]}}
function pickedAnywhere(code){var p=curPicks();return Object.keys(p).some(function(k){return (p[k]||[]).indexOf(code)>=0})}
function pickCands(brand){var brick=(typeof brickToday==='function'&&brickToday())||'',all=brickCust(brick),retail=(brand==='Skinlite');return all.filter(function(c){var doc=isDoctor(c);return retail?!doc:doc})}
function shortItem(it){return (''+it).replace(/^(Deca-?|R-?Loc Raft|R-?Loc|Skinlite)\s*/i,'').replace(/\s*\(.*\)$/,'').slice(0,18)||it}
function drow(name,stat){return h('div',{class:'selrow'},h('div',{class:'nm'},name),h('span',{style:'font-size:11.5px;color:var(--muted);white-space:nowrap'},stat))}
/* doctor/retailer row with the approval chip: ✅ Yes + Change (given/approved), ⏳ Waiting (pending change), else the plain note */
function drowA(name,note,brick,kind){var s=(U.drStatus?U.drStatus(name):'no');var right=(s==='yes'||s==='wait')&&U.drChip?U.drChip(name,brick,kind):h('span',{style:'font-size:11.5px;color:var(--muted);white-space:nowrap'},note||'');return h('div',{class:'selrow'},h('div',{class:'nm'},name),right)}
/* add a doctor/retailer not in the list and send it to Ratan for approval */
function addApprovalRow(box,brick,kind){try{if(!U.drSend)return;var wrap=h('div',{style:'margin-top:10px;padding-top:9px;border-top:1px dashed var(--line,#e5ece9)'});var nm=h('input',{type:'text',placeholder:'➕ Add a '+(kind==='R'?'retailer':'doctor')+' for approval',style:'width:100%;padding:8px;border:1px solid var(--line,#ddd);border-radius:10px;box-sizing:border-box'});wrap.append(nm,h('button',{style:'width:100%;margin-top:6px',onclick:function(){var v=(nm.value||'').trim();if(v.length<3){toast&&toast('Type the name');return}U.drSend(v,brick,kind)}},'📤 Send for approval'));box.append(wrap)}catch(e){}}
function inprow(n,code,name,brick,statusNode,red){return h('div',{class:'inprow'+(red?' redrow':'')},h('span',{class:'c0'},String(n)),h('span',{class:'c1'},code||'—'),h('span',{class:'c2'+(red?' redname':'')},name),h('span',{class:'c3'},brick||'—'),h('span',{class:'c4'},statusNode))}
/* an empty slot: pick brick → that brick's doctors/retailers list → Ventasys code auto-fills → Save → waiting for approval */
function emptySlot(n,brand,item,retail){
  var hq=myHQ2(),bricks=(typeof bricksOf==='function'?bricksOf(hq):[])||[];
  var bsel=h('select',{},[h('option',{value:''},'— brick —')].concat(bricks.map(function(b){return h('option',{value:b},b)})));
  var dsel=h('select',{disabled:'disabled'},[h('option',{value:''},'— brick first —')]);
  var codeBox=h('span',{class:'slotcode'},'');
  bsel.onchange=function(){dsel.innerHTML='';dsel.disabled=!bsel.value;dsel.append(h('option',{value:''},bsel.value?('— '+(retail?'retailer':'doctor')+' —'):'— brick first —'));if(bsel.value){slotCands(bsel.value,retail).forEach(function(c){dsel.append(h('option',{value:c.code},c.name))})}codeBox.textContent='';};
  dsel.onchange=function(){codeBox.textContent=dsel.value?('code '+dsel.value):'';};
  var sv=h('button',{class:'slotsave',onclick:function(){if(!bsel.value){toast&&toast('Pick a brick');return}if(!dsel.value){toast&&toast('Pick a '+(retail?'retailer':'doctor'));return}var nm=(CUST[dsel.value]&&CUST[dsel.value].name)||dsel.value;(typeof save==='function'?save('dr_approval',{brand:brand,item:item,dr:nm,code:dsel.value,brick:bsel.value,kind:retail?'R':'D',status:'pending'}):Promise.resolve(true)).then(function(ok){if(ok){toast&&toast('Saved — waiting for approval');try{render()}catch(e){}}})}},'Save');
  return h('div',{class:'inprow slot'},h('span',{class:'c0'},String(n)),h('div',{class:'slotf'},bsel,dsel,codeBox,sv));
}
function renderInput(app,brand,item,route){
  var q=itemQty(brand,item),retail=(brand==='Skinlite'),who2=retail?'Retailers':'Doctors';
  app.append(h('div',{class:'selc'},h('div',{style:'font-weight:800;margin-bottom:6px'},item),
    h('div',{class:'tot'},h('b',{},'Allocated '+q.alloc),h('b',{},'Used '+q.used),h('b',{class:q.bal>0?'':'ok'},'Balance '+q.bal))));
  var given=givenFor(brand,item),pend=inputPending(brand,item);
  var total=q.alloc||0,givenQty=q.used||0,waiting=pend.length,empty=Math.max(0,(q.bal||0)-waiting);
  var box=h('div',{class:'selc'});
  box.append(h('div',{style:'font-weight:700;margin-bottom:6px'},who2+' · '+givenQty+' given'+(total?(' of '+total):'')+(empty?(' · '+empty+' open'):'')+(waiting?(' · '+waiting+' waiting'):'')));
  box.append(h('div',{class:'inprow hd'},h('span',{class:'c0'},'#'),h('span',{class:'c1'},'Code'),h('span',{class:'c2'},who2.slice(0,-1)),h('span',{class:'c3'},'Brick'),h('span',{class:'c4'},'Status')));
  var sl=0;var GCAP=15;var gshow=given.slice(0,GCAP);
  gshow.forEach(function(g){sl++;var code=codeForName(g.to),br=(code&&CUST[code]&&CUST[code].brick)||'';var red=g.chk==='red';
    box.append(inprow(sl,code,g.to,br,h('span',{},h('span',{class:'inpst '+(red?'red':'yes')},red?'⚠ Not in approved list':'✅ Approved'),h('button',{class:'chgb',onclick:function(){U.drChange&&U.drChange(g.to,br,retail?'R':'D')}},'Change')),red))});
  if(given.length>GCAP)box.append(h('div',{style:'font-size:12px;color:var(--muted);padding:6px 2px'},'+'+(given.length-GCAP)+' more '+who2.toLowerCase()+' given (per Ventasys)'));
  var extra=Math.max(0,givenQty-given.length);
  if(extra>0)box.append(h('div',{class:'inprow'},h('span',{class:'c0'},'✓'),h('span',{class:'c1'},'—'),h('span',{class:'c2'},extra+' given (as per Ventasys)'),h('span',{class:'c3'},'—'),h('span',{class:'c4'},h('span',{class:'inpst yes'},'✅ Done'))));
  pend.forEach(function(e){sl++;box.append(inprow(sl,e.code||'',e.dr,e.brick||'',h('span',{class:'inpst wait'},'⏳ Waiting')))});
  var cap=Math.min(empty,25);
  for(var i=0;i<cap;i++){sl++;box.append(emptySlot(sl,brand,item,retail))}
  if(empty>cap)box.append(h('div',{style:'font-size:12px;color:var(--muted);padding:6px 2px'},'+'+(empty-cap)+' more open slots'));
  if(!total&&!givenQty&&!waiting)box.append(h('div',{style:'color:var(--muted);font-size:12.5px;padding:6px 2px'},'No dispatch quantity yet for this input — it appears after Sync.'));
  app.append(box);
  var pinp=h('input',{type:'file',accept:'image/*',style:'display:none'});
  pinp.addEventListener('change',function(){var fl=pinp.files&&pinp.files[0];if(!fl)return;if(typeof uploadPhoto!=='function'){toast&&toast('Upload not ready — Sync.');return}toast&&toast('Uploading…');
    uploadPhoto(fl).then(function(p){(typeof save==='function'?save('field_photo',{url:p.url,fileId:p.id,brand:brand,item:item,toName:brand+' / '+item}):Promise.resolve(true)).then(function(){try{alert('Please report the same on Ventasys too.')}catch(e){toast&&toast('Please report the same on Ventasys too.')}try{render()}catch(e){}})},function(e){toast&&toast((e&&e.message)||'Upload failed')})});
  app.append(h('div',{class:'selc'},h('button',{style:'width:100%',onclick:function(){pinp.click()}},'📷 Upload picture'),pinp));
}
function brandView(app,route){try{if(isMgr()){app.append(h('div',{class:'note'},'This is the CSO\'s screen.'));return}
  st();var brand=ROUTEB[route]||route;
  app.append(h('div',{class:'coachc'},h('div',{class:'k'},'📦 '+brand),h('p',{},'Tap an input below — only that input\'s quantity and '+(brand==='Skinlite'?'retailers':'doctors')+' show.')));
  var items=brandItems(brand);
  if(!items.length){app.append(h('div',{class:'coachc'},h('p',{},'No '+brand+' inputs tracked yet — they appear after a Sync.')));return}
  S.tab=S.tab||{};var key='binput_'+route;if(!S.tab[key]||items.indexOf(S.tab[key])<0)S.tab[key]=items[0];
  // The input you tap stays open and highlighted — switching is done in place (no full redraw), so the row never jumps back to the first input.
  var detail=h('div');
  var btns=items.map(function(it){var btn=h('button',{class:it===S.tab[key]?'on':'',onclick:function(){S.tab[key]=it;btns.forEach(function(bb,ii){bb.classList.toggle('on',items[ii]===it)});detail.innerHTML='';renderInput(detail,brand,it,route);try{btn.scrollIntoView({inline:'center',block:'nearest'})}catch(e){}}},shortItem(it));return btn});
  app.append(h('div',{class:'subtabs l2'},btns));
  app.append(detail);
  renderInput(detail,brand,S.tab[key],route);
}catch(e){app.append(h('div',{class:'note'},'Could not open brand: '+e.message))}}
U.brandView=brandView;U._itemCamp=itemCamp;U._pickCands=pickCands;
['raft','deca','rloc','skin','dexona','gifts'].forEach(function(k){U.routes[k]=function(app){brandView(app,k)}});

/* Pulse as an input drill-down: Deca Module allocated/used/balance + assigned doctor list, given Yes/No */
function pulseView(app){try{if(isMgr()){app.append(h('div',{class:'note'},'Pulse is the CSO\'s list.'));return}
  st();var hq=myHQ2(),R=((window.FT_ROSTERS||{}).pulse||{})[hq]||[],brand='Deca Durabolin';
  var items=brandItems(brand),item=items.filter(function(it){return /module/i.test(it)})[0]||'Deca Module',q=itemQty(brand,item);
  app.append(h('div',{class:'coachc'},h('div',{class:'k'},'💉 Pulse · Deca Module'),h('p',{},'Carry a Deca Module to each assigned doctor and report the Rx in Ventasys. “Given” turns to Yes once it is reported.')));
  app.append(h('div',{class:'selc'},h('div',{style:'font-weight:800;margin-bottom:6px'},item),
    h('div',{class:'tot'},h('b',{},'Allocated '+q.alloc),h('b',{},'Used '+q.used),h('b',{class:q.bal>0?'':'ok'},'Balance '+q.bal))));
  var given=givenFor(brand,item),givenNames=given.map(function(g){return g.to});
  function isGiven(nm){return givenNames.some(function(gn){return nameEq(gn,nm)})}
  if(!R.length){app.append(h('div',{class:'coachc',style:'background:linear-gradient(135deg,#E8F6EE,#D6F0E0);border-color:#9FD9B6'},h('p',{style:'color:#1b6b4a'},'No Pulse doctors assigned to your HQ.')));return}
  var byc={};R.forEach(function(d){(byc[d.ct||'—']=byc[d.ct||'—']||[]).push(d)});
  Object.keys(byc).forEach(function(ct){var box=h('div',{class:'selc'},h('div',{style:'font-weight:700;margin-bottom:4px'},'📍 '+ct+' ('+byc[ct].length+')'));
    byc[ct].forEach(function(d){box.append(drow(d.n+(d.sp?' · '+d.sp:''),isGiven(d.n)?'✅ Yes':'• No'))});app.append(box)});
}catch(e){app.append(h('div',{class:'note'},'Could not open Pulse: '+e.message))}}
U.routes.pulse=function(app){pulseView(app)};
})();
