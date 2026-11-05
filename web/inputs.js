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
.chgb{all:unset;cursor:pointer;display:inline-block;margin-left:8px;font-size:11px;font-weight:800;color:var(--accent,#0F5257);border-bottom:1px dotted var(--accent,#0F5257)}
.inpadd{padding:12px 14px;background:var(--soft,#F7FAF9);border-top:1px solid var(--line,#eef2f1)}
.inpadd select{width:100%;padding:9px;border:1px solid var(--line,#ddd);border-radius:10px;margin-bottom:7px;background:var(--card,#fff);color:var(--ink)}
.inpadd button.go{width:100%}
`;document.head.appendChild(st);

function nameKey(s){return String(s||'').toLowerCase().replace(/^(dr|prof|mr|mrs|ms|smt|sri|shri)\.?\s*/,'').replace(/[^a-z0-9]/g,'').slice(0,16);}
/* tolerant name match: share any significant token (surname-first / first-name-first both match) */
var TITLE=/^(dr|prof|mr|mrs|ms|md|smt|sri|shri)\.?$/;
function toks(s){return String(s||'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(function(w){return w.length>=3&&!TITLE.test(w);});}
function nameEq(a,b){var ta=toks(a),tb=toks(b);if(!ta.length||!tb.length)return false;return ta.some(function(w){return tb.indexOf(w)>=0;});}

/* classify a customer: 'D' doctor, 'R' retailer/chemist, '' wholesaler/stockist/unknown-not-a-doctor.
   Uses type AND the name (the master often leaves type blank, and chemist names are obvious). */
function kindOf(c){
  var ty=String(c.type||c.ty||'').toUpperCase();
  var nm=String(c.name||'').toLowerCase();
  var sp=String(c.spec||'').toLowerCase();
  if(/^W$|WHOLE|DISTRIB|STOCKIST/.test(ty)||/wholesale|distributor|stockist/.test(nm))return '';
  if(/^R$|RETAIL|CHEMIST|PHARMAC|STORE/.test(ty)||/medico|pharmac|chemist|\bmedical|\bdrug|\bstore|agenc|enterprise|\btraders?\b|surgical|\bhall\b|\bsales\b|medi\s?care|distributor/.test(nm))return 'R';
  if(/HCP|DOCTOR|^DR|GP|RMP|PHYS/.test(ty)||/physician|mbbs|\bmd\b|bams|bhms|\bdgo\b|\bms\b|\bbds\b|clinic/.test(sp)||/^dr\.?\s/.test(nm))return 'D';
  /* no clear signal: a person-looking name with no shop words is taken as a doctor; otherwise skip */
  return (/^dr\.?\s/.test(nm)||sp)?'D':'D';
}
/* doctor roster (already approved) for this HQ — the doctors the CSO covers for inputs */
function roster(){try{if(typeof CUST==='undefined'||!CUST)return[];var hq=myHQ3(),out=[];
  Object.keys(CUST).forEach(function(code){var c=CUST[code];if(!c)return;if(hq&&hqName(c.hq)&&hqName(c.hq)!==hq)return;if(kindOf(c)!=='D')return;out.push({dr:c.name||String(code),brick:c.brick||'',kind:'D'});});
  return out;}catch(e){return[];}}
/* doctors already GIVEN inputs/samples (from the synced inputs_<HQ> feed) — these are approved · Yes */
function givenNames(){try{var hq=myHQ3();var f=(S.feeds||{})['inputs_'+hq];if(!f||!f.brands)return[];var out={};
  Object.keys(f.brands).forEach(function(b){var x=f.brands[b];(x.gi||[]).concat(x.gs||[]).forEach(function(g){if(g.to&&g.to!=='Not recorded')out[nameKey(g.to)]=1;});});
  return out;}catch(e){return{};}}
/* approved list fed from Ratan's Outlook MCR / Customer-Addition mails (optional top-up) */
function feedOk(){try{var hq=myHQ3();var f=(S.feeds||{})['drlist_'+hq];if(!f||!f.rows)return{};var out={};f.rows.forEach(function(r){if(r.ok!==false)out[nameKey(r.dr||r.name||'')]=1;});return out;}catch(e){return{};}}
/* the CSO's own add-and-send entries (pending/approved/returned) */
function myDrEntries(){try{return (S.entries||[]).filter(function(e){return e.type==='dr_approval'&&(!e.email||e.email===myEmail());});}catch(e){return[];}}

/* one flat, de-duplicated list: roster + any sent/approved not in roster; status = yes/wait/no.
   A pending entry keyed by its target (new add -> dr; a change -> orig) locks that row as 'wait'. */
function allRows(){
  var given=givenNames(),fok=feedOk();
  var pend={},appr={};
  myDrEntries().forEach(function(e){var tgt=nameKey(e.orig||e.dr);if(e.status==='approved')appr[nameKey(e.dr)]=e;else if(e.status!=='returned')pend[tgt]=e;});
  var map={},order=[];
  function put(dr,brick,kind){var k=nameKey(dr);if(!k)return;if(!map[k]){order.push(k);map[k]={dr:dr,brick:brick||'',kind:kind||'D'};}else{if(brick&&!map[k].brick)map[k].brick=brick;if(kind&&map[k].kind!=='R')map[k].kind=kind;}}
  roster().forEach(function(r){put(r.dr,r.brick,r.kind);});
  myDrEntries().forEach(function(e){if(!e.orig)put(e.dr,e.brick,e.kind||'D');});
  return order.map(function(k){var r=map[k];var status=pend[k]?'wait':(given[k]||fok[k]||appr[k])?'yes':'no';return {dr:r.dr,brick:r.brick,kind:r.kind||'D',status:status,pend:pend[k]||null};})
    .sort(function(a,b){var o={no:0,wait:1,yes:2};return (o[a.status]-o[b.status])||a.dr.localeCompare(b.dr);});
}

function sendForApproval(dr,brick,kind){
  if(typeof save!=='function'){toast&&toast('Cannot save here.');return;}
  save('dr_approval',{dr:dr,brick:brick||'',kind:kind||'D',status:'pending'}).then(function(ok){if(ok){toast&&toast('Sent to Ratan Roy for approval');try{render();}catch(e){}}});
}
/* change an already-approved doctor/retailer — explanation required; locks until approved */
function openChange(r){
  var body=h('div'),bricks=bricksHQ();
  var nm=h('input',{type:'text',value:r.dr,style:'width:100%;padding:9px;border:1px solid var(--line,#ddd);border-radius:10px;box-sizing:border-box'});
  var bsel=h('select',{style:'width:100%;padding:9px;border:1px solid var(--line,#ddd);border-radius:10px;margin-top:8px'},[h('option',{value:''},'— brick —')].concat(bricks.map(function(b){return h('option',{value:b,selected:b===r.brick?'selected':null},b);})));
  if(r.brick&&bricks.indexOf(r.brick)<0)bsel.insertBefore(h('option',{value:r.brick,selected:'selected'},r.brick),bsel.children[1]);
  var ks=h('select',{style:'width:100%;padding:9px;border:1px solid var(--line,#ddd);border-radius:10px;margin-top:8px'},[['D','👨‍⚕️ Doctor'],['R','🏪 Retailer']].map(function(x){return h('option',{value:x[0],selected:x[0]===(r.kind||'D')?'selected':null},x[1]);}));
  var ex=h('textarea',{placeholder:'Explain the change (required) — why is this being changed?',style:'width:100%;min-height:80px;padding:9px;border:1px solid var(--line,#ddd);border-radius:10px;margin-top:8px;box-sizing:border-box;font:inherit'});
  body.append(h('p',{style:'font-size:12.5px;color:var(--muted);margin:0 0 8px'},'Edit the details and give a reason. Once saved it is locked and shows “Waiting for approval” until Ratan Roy approves.'),
    h('label',{style:'font-size:12px;color:var(--muted);font-weight:700'},'Name'),nm,
    h('label',{style:'font-size:12px;color:var(--muted);font-weight:700;display:block;margin-top:8px'},'Brick'),bsel,
    h('label',{style:'font-size:12px;color:var(--muted);font-weight:700;display:block;margin-top:8px'},'Type'),ks,
    h('label',{style:'font-size:12px;color:var(--muted);font-weight:700;display:block;margin-top:8px'},'Explanation'),ex,
    h('button',{style:'width:100%;margin-top:12px',onclick:function(){
      var reason=(ex.value||'').trim();if(reason.length<4){toast&&toast('Please write the reason for the change');return;}
      var newName=(nm.value||'').trim()||r.dr;
      save('dr_approval',{change:true,orig:r.dr,dr:newName,brick:bsel.value||r.brick||'',kind:ks.value||r.kind||'D',reason:reason,status:'pending'}).then(function(ok){if(ok){close();toast&&toast('Change sent to Ratan Roy — waiting for approval');try{render();}catch(e){}}});
    }},'📤 Save change & send for approval'));
  var ov=h('div',{class:'ftsheet'},h('div',{class:'pn'},h('div',{class:'grab'}),h('div',{class:'hd'},h('b',{},'✏️ Change '+(r.kind==='R'?'retailer':'doctor')),h('button',{class:'ghost',onclick:function(){close();}},'✕')),body));
  function close(){ov.remove();}ov.addEventListener('click',function(e){if(e.target===ov)close();});document.body.append(ov);
}

function inputsScreen(app){try{
  if(isMgr()){app.append(h('div',{class:'note'},'The Inputs doctor list is the CSO\'s screen. Approvals are on your Approvals tab.'));return;}
  app.append(h('div',{class:'coachc'},h('div',{class:'k'},'👨‍⚕️ Inputs — doctor approval list'),h('p',{},'Every doctor you give inputs to. ✅ Yes means already given / approved — keep tracking him. For a doctor not yet approved, tap Send ▸ (or add a new one below) and it goes to Ratan Roy for approval automatically.')));
  var rows=allRows();
  var yes=rows.filter(function(r){return r.status==='yes';}).length;
  S.tab=S.tab||{};var flt=S.tab.inpFlt||'todo';
  app.append(h('div',{class:'seg',style:'margin:0 0 10px'},[['todo','To approve'],['all','All ('+rows.length+')']].map(function(x){return h('button',{class:flt===x[0]?'on':'',onclick:function(){S.tab.inpFlt=x[0];render();}},x[1]);})));
  var show=flt==='todo'?rows.filter(function(r){return r.status!=='yes';}):rows;
  var card=h('div',{class:'inpc'},h('div',{class:'ih'},'👨‍⚕️ Doctors',h('span',{class:'n'},yes+' / '+rows.length+' approved')));
  var tbl=h('table',{class:'inptbl'},h('tr',{},h('th',{},'#'),h('th',{},'Doctor'),h('th',{},'Brick'),h('th',{},'Approved')));
  if(!show.length)tbl.append(h('tr',{},h('td',{class:'sl'},'—'),h('td',{colspan:'3',style:'color:var(--muted)'},flt==='todo'?(rows.length?'🎉 All doctors approved — nothing to send.':'No doctors synced yet. Add one below, or Sync.'):'No doctors yet. Add one below and send for approval.')));
  show.forEach(function(r,i){
    var cell;
    if(r.status==='yes')cell=h('div',{},h('span',{class:'inpst yes'},'✅ Yes'),h('button',{class:'chgb',onclick:function(){openChange(r);}},'Change'));
    else if(r.status==='wait')cell=h('span',{class:'inpst wait'},'⏳ Waiting for approval');
    else cell=h('span',{class:'inpst no'},h('button',{onclick:function(){sendForApproval(r.dr,r.brick,r.kind);}},'Send ▸'));
    var nm=(r.kind==='R'?'🏪 ':'')+r.dr;
    tbl.append(h('tr',{},h('td',{class:'sl'},String(i+1)),h('td',{},nm),h('td',{class:'br'},r.brick||'—'),h('td',{},cell)));
  });
  card.append(tbl);
  /* add a brand-new doctor (not in the register) -> send for approval */
  var bsel=h('select',[h('option',{value:''},'— brick —')].concat(bricksHQ().map(function(b){return h('option',{value:b},b);})));
  var kadd=h('select',[['D','👨‍⚕️ Doctor'],['R','🏪 Retailer']].map(function(x){return h('option',{value:x[0]},x[1]);}));
  var dname=h('input',{type:'text',placeholder:'New name',style:'width:100%;padding:9px;border:1px solid var(--line,#ddd);border-radius:10px;margin-bottom:7px;box-sizing:border-box'});
  var add=h('div',{class:'inpadd'},h('div',{style:'font-weight:800;font-size:12.5px;margin-bottom:7px'},'➕ Add a new doctor / retailer for approval'),kadd,bsel,dname,
    h('button',{class:'go',onclick:function(){if(!bsel.value){toast&&toast('Choose a brick');return;}var nm=(dname.value||'').trim();if(nm.length<3){toast&&toast('Type the name');return;}sendForApproval(nm,bsel.value,kadd.value);}},'📤 Save & send to Ratan Roy'));
  card.append(add);
  app.append(card);
}catch(e){app.append(h('div',{class:'note'},'Could not open Inputs: '+e.message));}}
U.inputsScreen=inputsScreen;U.routes.inputs=function(app){inputsScreen(app);};

/* manager: approve the doctors CSOs sent (adds to the Approvals tab) */
U.drApprovals=function(){try{var L=(S.entries||[]).filter(function(e){return e.type==='dr_approval'&&e.status==='pending';});if(!L.length)return null;
  var box=h('div',{class:'phase'},h('div',{class:'ph'},h('b',{},'👨‍⚕️ Doctors to approve'),h('small',{},String(L.length))));
  L.forEach(function(e){var kindLbl=e.kind==='R'?'🏪 retailer':'👨‍⚕️ doctor';
    var title=e.change?('✏️ Change: '+(e.orig||'')+' → '+(e.dr||'')):('➕ New '+kindLbl+': '+(e.dr||''));
    box.append(h('div',{class:'lrow',style:'cursor:default;align-items:flex-start'},
    h('div',{class:'tx'},h('b',{},(e.name||'CSO')+' · '+title),h('small',{},(e.brick||'—')+(e.hq?' · '+e.hq:'')+(e.reason?' · “'+e.reason+'”':''))),
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
