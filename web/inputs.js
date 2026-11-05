/* Field Tracker — Inputs tab: the doctor approval list.
   One flat table: Serial · Doctor · Brick · Yes/No.
   • A doctor already given/approved (found in Ratan's Outlook inbox/sent, fed in as drlist_<HQ>) shows ✅ Yes and stays for tracking.
   • A doctor not yet approved is left blank — the CSO picks him here and Save sends the approval to Ratan automatically.
   Approval re-uses the save→pending→manager pattern (entry type 'dr_approval'). Nothing is typed into Ventasys here. */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
function isMgr(){return S.mgr&&!S.viewAs}
var HQL={A:'Agartala',B:'Bongaigaon',D:'Dhubri',G:'Guwahati'};
function hqName(v){v=String(v==null?'':v);return HQL[v]||v}
function myHQ3(){try{return (typeof csoHQ==='function'&&csoHQ())||((S.viewAs||S.me||{}).HQ)||'';}catch(e){return''}}
function bricksHQ(){try{return (typeof bricksOf==='function'?bricksOf(myHQ3()):[])||[];}catch(e){return[];}}

var st=document.createElement('style');st.id='ftinpcss';st.textContent=`
.inpc{background:var(--card,#fff);border:1px solid var(--line,#e5ece9);border-radius:16px;padding:0;margin:0 0 12px;overflow:hidden}
.inpc .ih{display:flex;align-items:center;gap:8px;padding:11px 14px;background:linear-gradient(135deg,var(--h1,#0F5257),var(--h3,#1B7F79));color:#fff;font-weight:800;font-size:14px}
.inpc .ih .n{margin-left:auto;background:rgba(255,255,255,.2);border-radius:999px;padding:3px 10px;font-size:12px}
.inptbl{width:100%;border-collapse:collapse}
.inptbl th{font-size:10.5px;letter-spacing:.3px;text-transform:uppercase;color:var(--muted,#5B716E);text-align:left;padding:8px 10px;border-bottom:1px solid var(--line,#eef2f1);background:var(--soft,#F7FAF9)}
.inptbl td{padding:9px 10px;border-bottom:1px solid var(--line,#eef2f1);font-size:13px;vertical-align:middle}
.inptbl td.sl{width:34px;color:var(--muted);font-weight:700;text-align:center}
.inptbl td.br{color:var(--muted);font-size:11.5px;white-space:nowrap}
.inptbl tr:last-child td{border-bottom:0}
.inpst{display:inline-block;font-size:11.5px;font-weight:800;border-radius:999px;padding:4px 10px;white-space:nowrap}
.inpst.yes{background:#D6F0E0;color:#13684A}
.inpst.wait{background:#FBE6C4;color:#8A5A00}
.inpst.no{background:#F3E7E7;color:#9A3B3B}
.inpst.no button{all:unset;cursor:pointer;color:#0F5257;font-weight:800}
.inpadd{padding:12px 14px;background:var(--soft,#F7FAF9);border-top:1px solid var(--line,#eef2f1)}
.inpadd select{width:100%;padding:9px;border:1px solid var(--line,#ddd);border-radius:10px;margin-bottom:7px;background:var(--card,#fff);color:var(--ink)}
.inpadd button.go{width:100%}
`;document.head.appendChild(st);

/* approved / known list from the feed (populated from Ratan's Outlook inbox+sent) */
function feedRows(){try{var hq=myHQ3();var f=(S.feeds||{})['drlist_'+hq];if(!f||!f.rows)return[];
  return f.rows.map(function(r){return {dr:r.dr||r.name||'',brick:r.brick||r.beat||'',ok:!!r.ok,src:'feed'};}).filter(function(r){return r.dr;});}catch(e){return[];}}
/* the CSO's own add-and-send entries (pending/approved/returned) */
function myDrEntries(){try{return (S.entries||[]).filter(function(e){return e.type==='dr_approval'&&(!e.email||e.email===myEmail());});}catch(e){return[];}}
/* merge feed + own entries into one de-duplicated list, newest status wins */
function nameKey(s){return String(s||'').toLowerCase().replace(/^(dr|prof|mr|mrs|ms|smt|sri|shri)\.?\s*/,'').replace(/[^a-z0-9]/g,'').slice(0,16);}
function allRows(){
  var map={},order=[];
  feedRows().forEach(function(r){var k=nameKey(r.dr);if(!map[k]){order.push(k);map[k]={dr:r.dr,brick:r.brick,status:r.ok?'yes':'no'};}else if(r.ok)map[k].status='yes';});
  myDrEntries().forEach(function(e){var k=nameKey(e.dr);var stt=e.status==='approved'?'yes':e.status==='returned'?'no':'wait';
    if(!map[k]){order.push(k);map[k]={dr:e.dr,brick:e.brick||'',status:stt};}else{map[k].status=stt;if(e.brick)map[k].brick=e.brick;}});
  return order.map(function(k){return map[k];}).sort(function(a,b){var o={yes:0,wait:1,no:2};return (o[a.status]-o[b.status])||a.dr.localeCompare(b.dr);});
}

/* doctors in a brick, from the customer master, not already in the list */
function isDoc(c){var ty=String(c.type||c.ty||'').toUpperCase();return /HCP|DOCTOR|DR|GP|RMP|PHYS/.test(ty)||!ty;}
function brickDoctors(brick){try{if(typeof CUST==='undefined'||!CUST||!brick)return[];var hq=myHQ3(),out=[];
  Object.keys(CUST).forEach(function(code){var c=CUST[code];if(!c||c.brick!==brick)return;if(hq&&hqName(c.hq)&&hqName(c.hq)!==hq)return;if(!isDoc(c))return;out.push(c.name||String(code));});
  out.sort(function(a,b){return a.localeCompare(b);});return out;}catch(e){return[];}}

function sendForApproval(dr,brick){
  if(typeof save!=='function'){toast&&toast('Cannot save here.');return;}
  save('dr_approval',{dr:dr,brick:brick||'',status:'pending'}).then(function(ok){if(ok){toast&&toast('Sent to Ratan Roy for approval');try{render();}catch(e){}}});
}

function inputsScreen(app){try{
  if(isMgr()){app.append(h('div',{class:'note'},'The Inputs doctor list is the CSO\'s screen. Approvals are on your Approvals tab.'));return;}
  app.append(h('div',{class:'coachc'},h('div',{class:'k'},'👨‍⚕️ Inputs — doctor approval list'),h('p',{},'Every doctor you give inputs to. ✅ Yes means already approved — keep tracking him. For a new doctor, pick him below and Save — it goes to Ratan Roy for approval automatically.')));
  var rows=allRows();
  var yes=rows.filter(function(r){return r.status==='yes';}).length;
  var card=h('div',{class:'inpc'},h('div',{class:'ih'},'👨‍⚕️ Doctors',h('span',{class:'n'},yes+' / '+rows.length+' approved')));
  var tbl=h('table',{class:'inptbl'},h('tr',{},h('th',{},'#'),h('th',{},'Doctor'),h('th',{},'Brick'),h('th',{},'Approved')));
  if(!rows.length)tbl.append(h('tr',{},h('td',{class:'sl'},'—'),h('td',{colspan:'3',style:'color:var(--muted)'},'No doctors yet. Add one below and send for approval.')));
  rows.forEach(function(r,i){
    var cell;
    if(r.status==='yes')cell=h('span',{class:'inpst yes'},'✅ Yes');
    else if(r.status==='wait')cell=h('span',{class:'inpst wait'},'⏳ Sent');
    else cell=h('span',{class:'inpst no'},h('button',{onclick:function(){sendForApproval(r.dr,r.brick);}},'Send ▸'));
    tbl.append(h('tr',{},h('td',{class:'sl'},String(i+1)),h('td',{},r.dr),h('td',{class:'br'},r.brick||'—'),h('td',{},cell)));
  });
  card.append(tbl);
  /* add a new doctor -> send for approval */
  S.tab=S.tab||{};
  var bsel=h('select',[h('option',{value:''},'— brick —')].concat(bricksHQ().map(function(b){return h('option',{value:b},b);})));
  var dsel=h('select',[h('option',{value:''},'— pick a doctor —')]);
  function fillDocs(){var b=bsel.value;dsel.innerHTML='';dsel.append(h('option',{value:''},b?'— pick a doctor —':'— choose a brick first —'));
    if(b){var have={};allRows().forEach(function(r){have[nameKey(r.dr)]=1;});brickDoctors(b).forEach(function(nm){if(have[nameKey(nm)])return;dsel.append(h('option',{value:nm},nm));});}}
  bsel.onchange=fillDocs;
  var add=h('div',{class:'inpadd'},h('div',{style:'font-weight:800;font-size:12.5px;margin-bottom:7px'},'➕ Add a doctor for approval'),bsel,dsel,
    h('button',{class:'go',onclick:function(){if(!bsel.value){toast&&toast('Choose a brick');return;}if(!dsel.value){toast&&toast('Pick a doctor');return;}sendForApproval(dsel.value,bsel.value);}},'📤 Save & send to Ratan Roy'));
  card.append(add);
  app.append(card);
  fillDocs();
}catch(e){app.append(h('div',{class:'note'},'Could not open Inputs: '+e.message));}}
U.inputsScreen=inputsScreen;U.routes.inputs=function(app){inputsScreen(app);};

/* manager: approve the doctors CSOs sent (adds to the Approvals tab) */
U.drApprovals=function(){try{var L=(S.entries||[]).filter(function(e){return e.type==='dr_approval'&&e.status==='pending';});if(!L.length)return null;
  var box=h('div',{class:'phase'},h('div',{class:'ph'},h('b',{},'👨‍⚕️ Doctors to approve'),h('small',{},String(L.length))));
  L.forEach(function(e){box.append(h('div',{class:'lrow',style:'cursor:default'},
    h('div',{class:'tx'},h('b',{},(e.name||'CSO')+' · '+(e.dr||'doctor')),h('small',{},(e.brick||'—')+' · '+(e.hq||''))),
    h('div',{style:'display:flex;gap:6px'},
      h('button',{style:'min-height:auto;padding:8px 12px',onclick:function(){S.db.collection('entries').doc(e._id).update({status:'approved',approvedTs:Date.now()}).then(function(){toast&&toast('Approved');render();});}},'✅'),
      h('button',{class:'ghost',style:'min-height:auto;padding:8px 12px',onclick:function(){var n=prompt('Reason to return (optional)')||'';S.db.collection('entries').doc(e._id).update({status:'returned',note:n}).then(function(){toast&&toast('Returned');render();});}},'↩️'))));});
  return box;}catch(e){return null;}};

/* splice dr approvals into the manager Approvals route */
var prevApprove=U.routes.approve;
U.routes.approve=function(app){prevApprove&&prevApprove(app);try{var dr=U.drApprovals&&U.drApprovals();if(dr){var note=app.querySelector('.note');if(note&&/Nothing waiting/.test(note.textContent)){note.remove();}app.append(dr);}}catch(e){}};

/* a Today/Work card nudging unfinished approvals */
U.inputsCard=function(){try{if(isMgr())return'';var rows=allRows();var pend=rows.filter(function(r){return r.status!=='yes';}).length;
  if(!rows.length)return h('div',{class:'coachc',style:'cursor:pointer',onclick:function(){go('inputs');}},h('div',{class:'k'},'👨‍⚕️ Set up your doctor list'),h('p',{},'Add the doctors you give inputs to and send them for approval. Tap to open.'));
  if(!pend)return h('div',{class:'coachc',style:'background:linear-gradient(135deg,#E8F6EE,#D6F0E0);border-color:#9FD9B6;cursor:pointer',onclick:function(){go('inputs');}},h('div',{class:'k',style:'color:#13684A'},'✅ All doctors approved'),h('p',{style:'color:#1b6b4a'},rows.length+' doctors approved and tracked. Tap to view.'));
  return h('div',{class:'coachc',style:'cursor:pointer',onclick:function(){go('inputs');}},h('div',{class:'k'},'👨‍⚕️ '+pend+' doctor'+(pend>1?'s':'')+' to approve'),h('p',{},'Pick and send them to Ratan Roy for approval. Tap to open your Inputs list.'));
}catch(e){return'';}};
})();
