/* Field Tracker — doctor/retailer approval engine, used INSIDE Brand Inputs (no separate tab).
   Each doctor you give inputs to shows ✅ Yes (already given/approved) with a Change option; a change needs an
   explanation and locks as “⏳ Waiting for approval” until Ratan approves. New doctors are added+sent from the
   brand screen. Manager approvals land on the Approvals tab. Entry type: dr_approval (change:true for edits). */
(function(){
'use strict';
var U=window.FTUI;if(!U||!U.t)return;
function isMgr(){return S.mgr&&!S.viewAs;}
var HQL={A:'Agartala',B:'Bongaigaon',D:'Dhubri',G:'Guwahati'};
function hqName(v){v=String(v==null?'':v);return HQL[v]||v;}
function myHQ3(){try{return (typeof csoHQ==='function'&&csoHQ())||((S.viewAs||S.me||{}).HQ)||'';}catch(e){return'';}}
function bricksHQ(){try{return (typeof bricksOf==='function'?bricksOf(myHQ3()):[])||[];}catch(e){return[];}}

var st=document.createElement('style');st.id='ftinpcss';st.textContent=`
.inpst{display:inline-block;font-size:11.5px;font-weight:800;border-radius:999px;padding:4px 10px;white-space:nowrap}
.inpst.yes{background:#D6F0E0;color:#13684A}
.inpst.wait{background:#FBE6C4;color:#8A5A00}
.inpst.no{background:#F3E7E7;color:#9A3B3B}
.inpst.no button{all:unset;cursor:pointer;color:#0F5257;font-weight:800}
.chgb{all:unset;cursor:pointer;display:inline-block;margin-left:8px;font-size:11px;font-weight:800;color:var(--accent,#0F5257);border-bottom:1px dotted var(--accent,#0F5257)}
`;document.head.appendChild(st);

function nameKey(s){return String(s||'').toLowerCase().replace(/^(dr|prof|mr|mrs|ms|smt|sri|shri)\.?\s*/,'').replace(/[^a-z0-9]/g,'').slice(0,16);}
var TITLE=/^(dr|prof|mr|mrs|ms|md|smt|sri|shri)\.?$/;
function toks(s){return String(s||'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(function(w){return w.length>=3&&!TITLE.test(w);});}
function nameEq(a,b){var ta=toks(a),tb=toks(b);if(!ta.length||!tb.length)return false;return ta.some(function(w){return tb.indexOf(w)>=0;});}
U.inpNameEq=nameEq;

/* classify a customer: 'D' doctor, 'R' retailer/chemist, '' wholesaler/stockist. Uses name + type. */
function kindOf(c){
  var ty=String(c.type||c.ty||'').toUpperCase(),nm=String(c.name||'').toLowerCase(),sp=String(c.spec||'').toLowerCase();
  if(/^W$|WHOLE|DISTRIB|STOCKIST/.test(ty)||/wholesale|distributor|stockist/.test(nm))return '';
  if(/^R$|RETAIL|CHEMIST|PHARMAC|STORE/.test(ty)||/medico|pharmac|chemist|\bmedical|\bdrug|\bstore|agenc|enterprise|\btraders?\b|surgical|\bhall\b|\bsales\b|medi\s?care/.test(nm))return 'R';
  if(/HCP|DOCTOR|^DR|GP|RMP|PHYS/.test(ty)||/physician|mbbs|\bmd\b|bams|bhms|\bdgo\b|\bms\b|\bbds\b|clinic/.test(sp)||/^dr\.?\s/.test(nm))return 'D';
  return 'D';
}
U.inpKindOf=kindOf;

/* doctors already GIVEN inputs/samples (from the synced inputs_<HQ> feed) — approved · Yes */
function givenNames(){try{var hq=myHQ3();var f=(S.feeds||{})['inputs_'+hq];if(!f||!f.brands)return{};var out={};
  Object.keys(f.brands).forEach(function(b){var x=f.brands[b];(x.gi||[]).concat(x.gs||[]).forEach(function(g){if(g.to&&g.to!=='Not recorded')out[nameKey(g.to)]=1;});});
  return out;}catch(e){return{};}}
/* approved list fed from Outlook MCR/Customer-Addition mails (optional top-up) */
function feedOk(){try{var hq=myHQ3();var f=(S.feeds||{})['drlist_'+hq];if(!f||!f.rows)return{};var out={};f.rows.forEach(function(r){if(r.ok!==false)out[nameKey(r.dr||r.name||'')]=1;});return out;}catch(e){return{};}}
function myDrEntries(){try{return (S.entries||[]).filter(function(e){return e.type==='dr_approval'&&(!e.email||e.email===myEmail());});}catch(e){return[];}}

/* status of one doctor/retailer: 'yes' | 'wait' | 'no' */
function drStatus(name){var k=nameKey(name),pend=false,appr=false;
  myDrEntries().forEach(function(e){var tgt=nameKey(e.orig||e.dr);if(e.status==='approved'&&nameKey(e.dr)===k)appr=true;else if(e.status!=='returned'&&e.status!=='approved'&&tgt===k)pend=true;});
  if(pend)return 'wait';
  if(givenNames()[k]||feedOk()[k]||appr)return 'yes';
  return 'no';}
U.drStatus=drStatus;

function sendForApproval(dr,brick,kind){
  if(typeof save!=='function'){toast&&toast('Cannot save here.');return;}
  save('dr_approval',{dr:dr,brick:brick||'',kind:kind||'D',status:'pending'}).then(function(ok){if(ok){toast&&toast('Sent to Ratan Roy for approval');try{render();}catch(e){}}});
}
U.drSend=sendForApproval;

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
U.drChange=function(name,brick,kind){openChange({dr:name,brick:brick||'',kind:kind||'D'});};

/* the approval chip (+ Change) shown next to a doctor/retailer row in Brand Inputs */
U.drChip=function(name,brick,kind){try{var s=drStatus(name);
  if(s==='wait')return h('span',{class:'inpst wait'},'⏳ Waiting for approval');
  if(s==='yes')return h('span',{},h('span',{class:'inpst yes'},'✅ Yes'),h('button',{class:'chgb',onclick:function(){U.drChange(name,brick,kind);}},'Change'));
  return h('span',{class:'inpst no'},h('button',{onclick:function(){sendForApproval(name,brick,kind);}},'Send for approval ▸'));
}catch(e){return h('span',{});}};

/* manager: approve the doctors/retailers CSOs sent (adds to the Approvals tab) */
U.drApprovals=function(){try{var L=(S.entries||[]).filter(function(e){return e.type==='dr_approval'&&e.status==='pending';});if(!L.length)return null;
  var box=h('div',{class:'phase'},h('div',{class:'ph'},h('b',{},'👨‍⚕️ Doctors / retailers to approve'),h('small',{},String(L.length))));
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
})();
