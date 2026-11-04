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
    out.push({code:String(code),name:c.name||String(code),spec:c.spec||'',ty:String(c.type||c.ty||'').toUpperCase()})});
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
  // header + status
  app.append(h('div',{class:'coachc'},h('div',{class:'k'},'👨‍⚕️ Your campaign doctors'),
    h('p',{},'Tag each doctor as you cover the brick. Targets build up across the month. '+(status==='pending'?'⏳ Sent to Ratan Roy for approval.':status==='approved'?'✅ Approved — tap “Request change” to edit.':status==='returned'?'↩️ Returned by Ratan — adjust and resend.':'Draft — save when ready.'))));
  // totals vs targets
  var tot=h('div',{class:'tot'});PICKC().forEach(function(c){var n=(picks[c.id]||[]).length,tg=c.count||0;tot.append(h('b',{class:n>=tg?'ok':''},campShort(c.id)+' '+n+'/'+tg))});
  // brick selector
  var sel=h('select',{onchange:function(){S.tab.pickBrick=sel.value;render()}},bricks.map(function(b){return h('option',{value:b,selected:b===S.tab.pickBrick?'selected':null},b+(b===brick?' (today)':''))}));
  var box=h('div',{class:'selc'},h('div',{style:'display:flex;align-items:center;gap:8px;margin-bottom:4px'},h('b',{style:'font-size:13px'},'Brick:'),sel),tot);
  var cur=S.tab.pickBrick, all=brickCust(cur), docs=all.filter(isDoctor);
  if(!docs.length)box.append(h('div',{class:'selrow',style:'border:0;color:var(--muted)'},h('div',{},'No doctors found in this brick'+(typeof CUST==='undefined'?' (customer list still loading — Sync).':'.'))));
  docs.forEach(function(d){
    var cg=h('div',{class:'cg'});
    PICKC().forEach(function(c){var on=(picks[c.id]||[]).indexOf(d.code)>=0;
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

U.pickScreen=pickScreen;U.routes.pick=function(app){pickScreen(app)};

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
function inputsPendBrand(brand){try{var k=Object.keys(S.feeds||{}).filter(function(z){return z.indexOf('inputs_')===0})[0];var f=k?S.feeds[k]:null;if(!f||!f.brands||!f.brands[brand])return[];return (f.brands[brand].li||[]).map(function(x){return x.it})}catch(e){return[]}}
function skinRoster(){try{var hq=myHQ2();return (((window.FT_ROSTERS||{}).skin||{})[hq])||[]}catch(e){return[]}}
function custName(code){try{return (CUST&&CUST[code]&&CUST[code].name)||code}catch(e){return code}}
function inBrickCode(code,brick){try{return CUST&&CUST[code]&&CUST[code].brick===brick}catch(e){return false}}
function carryList(app){try{if(isMgr()){app.append(h('div',{class:'note'},'Carry list is the CSO\'s screen.'));return}
  st();var brick=(typeof brickToday==='function'&&brickToday())||'';
  if(!brick){app.append(h('div',{class:'coachc'},h('div',{class:'k'},'📍 Pick today\'s brick first'),h('p',{},'Confirm your brick in “Start my day”, then your carry list appears here.')));return}
  app.append(h('div',{class:'coachc'},h('div',{class:'k'},'🎒 Carry today · '+brick),h('p',{},'Hand these to each listed customer in '+brick+', then report in Ventasys. Nothing to fill here.')));
  var picks=curPicks(),any=false;
  PICKC().forEach(function(c){var codes=(picks[c.id]||[]).filter(function(code){return inBrickCode(code,brick)});if(!codes.length)return;any=true;
    var pend=inputsPendBrand(c.brand),items=(c.carry||[]).filter(function(it){return !pend.length||pend.some(function(p){return nameEq(p,it)})});if(!items.length)items=c.carry||[];
    var box=h('div',{class:'selc'},h('div',{style:'font-weight:800;font-size:13px;margin-bottom:4px'},campShort(c.id)+' — carry: '+(items.join(', ')||'—')));
    codes.forEach(function(code){box.append(h('div',{class:'selrow'},h('div',{class:'nm'},custName(code))))});app.append(box)});
  var sk=skinRoster().filter(function(o){return o.beat===brick});
  if(sk.length){any=true;var pendS=inputsPendBrand('Skinlite'),itemsS=(pendS.length?pendS.slice(0,4):['Skinlite range']).concat(['📄 Poster']);
    var box=h('div',{class:'selc'},h('div',{style:'font-weight:800;font-size:13px;margin-bottom:4px'},'Skinlite · '+sk.length+' outlets — carry: '+itemsS.join(', ')));
    sk.slice(0,40).forEach(function(o){box.append(h('div',{class:'selrow'},h('div',{class:'nm'},o.n)))});
    if(sk.length>40)box.append(h('div',{class:'selrow',style:'color:var(--muted)'},h('div',{},'+'+(sk.length-40)+' more outlets')));app.append(box)}
  if(!any)app.append(h('div',{class:'coachc',style:'background:linear-gradient(135deg,#E8F6EE,#D6F0E0);border-color:#9FD9B6'},h('p',{style:'color:#1b6b4a'},'No tagged doctors or Skinlite outlets in '+brick+' yet. Tag doctors in “Pick Drs”.')));
}catch(e){app.append(h('div',{class:'note'},'Could not build carry list: '+e.message))}}
U.carryList=carryList;U.routes.carry=function(app){carryList(app)};
U.carryCard=function(){try{if(isMgr())return'';var brick=(typeof brickToday==='function'&&brickToday())||'';if(!brick)return'';
  var picks=curPicks(),n=0;PICKC().forEach(function(c){n+=(picks[c.id]||[]).filter(function(code){return inBrickCode(code,brick)}).length});
  n+=skinRoster().filter(function(o){return o.beat===brick}).length;if(!n)return'';
  return h('div',{class:'coachc',style:'cursor:pointer',onclick:function(){go('carry')}},h('div',{class:'k'},'🎒 Carry today · '+brick),h('p',{},n+' customer'+(n>1?'s':'')+' in this brick — tap to see what to carry to each.'));
}catch(e){return''}};

/* ---------- stock statement upload (photo or PDF) ---------- */
function stmtEntries(){try{return (S.entries||[]).filter(function(e){return e.type==='stock_statement'&&(!e.email||e.email===myEmail())}).sort(function(a,b){return (b.ts||0)-(a.ts||0)})}catch(e){return[]}}
function stmtScreen(app){try{if(isMgr()){app.append(h('div',{class:'note'},'Stock statements are uploaded by the CSO.'));return}
  st();
  app.append(h('div',{class:'coachc'},h('div',{class:'k'},'📄 Stock statement'),h('p',{},'Upload your stock statement as a photo or a PDF. It goes straight to Ratan Roy — nothing to send on WhatsApp.')));
  var inp=h('input',{type:'file',accept:'image/*,application/pdf',style:'display:none'});
  var stx=h('div',{style:'text-align:center;color:var(--muted);font-size:13px;min-height:18px;margin-top:6px'});
  var btn=h('button',{style:'width:100%',onclick:function(){inp.click()}},'📄 Upload statement (photo or PDF)');
  inp.addEventListener('change',function(){var f=inp.files&&inp.files[0];if(!f)return;
    if(typeof uploadPhoto!=='function'){stx.textContent='Upload not ready — Sync and try again.';return}
    btn.disabled=true;stx.textContent='Uploading…';
    uploadPhoto(f).then(function(p){var done=(typeof save==='function')?save('stock_statement',{url:p.url,fileId:p.id,name:f.name||'statement',mime:f.type||'',month:(typeof TODAY!=='undefined'?TODAY:'').slice(0,7)}):Promise.resolve(true);
      Promise.resolve(done).then(function(){stx.textContent='✅ Sent to Ratan Roy';btn.disabled=false;try{render()}catch(e){}})},
      function(e){btn.disabled=false;stx.textContent=(e&&e.message)||'Upload failed. Try again.'})});
  app.append(h('div',{class:'selc'},btn,inp,stx));
  var prev=stmtEntries();
  if(prev.length){var box=h('div',{class:'coachc'},h('div',{class:'k'},'Uploaded'));prev.slice(0,10).forEach(function(e){box.append(h('p',{style:'margin:3px 0'},'📄 '+(e.name||'statement')+(e.date?' · '+e.date:'')))});app.append(box)}
}catch(e){app.append(h('div',{class:'note'},'Could not open statement upload: '+e.message))}}
U.stmtScreen=stmtScreen;U.routes.stockup=function(app){stmtScreen(app)};
})();
