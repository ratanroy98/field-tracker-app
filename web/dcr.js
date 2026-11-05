/* Field Tracker — Daily Call Report (DCR).
   The CSO logs the day's calls in the app, in the same fields Ventasys 'Enter DCR' uses,
   so it can later be pushed 1:1 to Ventasys. Report Type OS/Leave/WO, Beat/Brick,
   Joint Work with, Activity + Activity Type, the doctor & chemist call lists (List Dr / List Ch),
   and Remarks. */
(function(){
var U=window.FTUI;if(!U||!U.t)return;
function isMgr(){return S.mgr&&!S.viewAs}
function today(){try{return TODAY}catch(e){return new Date().toISOString().slice(0,10)}}
function mail(){try{return myEmail()}catch(e){return''}}
function todaysDCR(){try{return (todays('dcr')||[]).filter(function(e){return !e.email||e.email===mail()}).slice(-1)[0]||null}catch(e){return null}}
function brickNow(){try{return (typeof brickToday==='function'&&brickToday())||''}catch(e){return''}}
function custs(brick){try{return (typeof brickCust==='function')?brickCust(brick):[]}catch(e){return[]}}
function docOf(c){try{return (typeof isDoctor==='function')?isDoctor(c):/HCP|DR|GP|RMP/.test(c.ty||'')}catch(e){return true}}
function teammates(){try{return (D.users||[]).filter(function(u){return (u.Role==='CSO'||u.Role==='CSM')&&u.Status==='Active'&&u.Email!==mail()}).map(function(u){return u.Name})}catch(e){return[]}}

var RT=[['OS','On Station (field work)'],['Leave','Leave'],['WO','Weekly Off']];
var ACTT=['Field Work','Joint Work','CME / Camp','Group Meeting','Admin / Office','Tour'];

/* draft lives in S so toggles survive re-render; seeded from today's saved DCR, else from today's logged calls */
function draft(){
  if(S.dcrDraft&&S.dcrDraft.date===today())return S.dcrDraft;
  var ex=todaysDCR();var d={date:today(),rt:(ex&&ex.rt)||'OS',brick:(ex&&ex.brick)||brickNow(),joint:(ex&&ex.joint)||'',
    actt:(ex&&ex.actt)||'Field Work',remarks:(ex&&ex.remarks)||'',docs:{},chems:{}};
  if(ex&&ex.docs)ex.docs.forEach(function(c){d.docs[c]=1});
  if(ex&&ex.chems)ex.chems.forEach(function(c){d.chems[c]=1});
  if(!ex){ // pre-tick doctors already worked today (dr_input)
    try{(todays('dr_input')||[]).filter(function(e){return !e.email||e.email===mail()}).forEach(function(e){
      var code=(typeof codeForName==='function')&&codeForName(e.dr);if(code)d.docs[code]=1;});}catch(_){}
  }
  S.dcrDraft=d;return d;
}
function redraw(){try{render()}catch(e){}}

var st=document.createElement('style');st.textContent=`
.dcrseg{display:flex;gap:8px;margin:2px 0 12px}
.dcrseg button{flex:1;border:1px solid var(--line,#e5ece9);background:var(--card,#fff);border-radius:12px;padding:11px 6px;font-weight:800;font-size:13px;color:var(--fg,#14302E);min-height:auto}
.dcrseg button.on{background:linear-gradient(135deg,#0F5257,#1B7F79);color:#fff;border-color:transparent}
.dcrcnt{display:flex;gap:10px;margin:2px 0 10px}
.dcrcnt .cc{flex:1;background:var(--soft,#F2F5F4);border-radius:14px;padding:12px;text-align:center}
.dcrcnt .cc b{display:block;font-size:24px;color:var(--accent,#0F5257)}
.dcrcnt .cc small{color:var(--muted);font-size:12px}
.dcrlist{display:flex;flex-direction:column;gap:6px;max-height:44vh;overflow:auto;margin:6px 0 4px}
.dcrrow{display:flex;align-items:center;gap:10px;padding:9px 11px;border:1px solid var(--line,#e5ece9);border-radius:12px;background:var(--card,#fff);cursor:pointer}
.dcrrow.on{background:#E7F8EE;border-color:#9fe0bc}
.dcrrow .bx{width:22px;height:22px;border-radius:7px;border:2px solid #c7d4d0;flex:0 0 auto;display:flex;align-items:center;justify-content:center;font-size:14px;color:#13684A}
.dcrrow.on .bx{background:#13684A;border-color:#13684A;color:#fff}
.dcrrow .nm{font-size:14px;font-weight:600}.dcrrow .sp{font-size:11.5px;color:var(--muted)}
.dcrfield{margin:10px 0}.dcrfield>label{font-weight:700;font-size:13px;display:block;margin-bottom:5px}
.dcrfield select,.dcrfield textarea{width:100%;border:1px solid var(--line,#e5ece9);border-radius:12px;padding:11px;font-size:14px;background:var(--card,#fff);font-family:inherit}
.dcrsave{width:100%;border:0;border-radius:14px;padding:15px;font-weight:800;font-size:16px;background:#0F5257;color:#fff;min-height:auto;margin-top:6px}
.dcrdone{display:flex;gap:10px;align-items:center;border-radius:14px;padding:12px 14px;margin:0 0 12px;background:#E7F8EE;color:#0B6B4F;font-size:14px;font-weight:700}
.dcrnag{border-radius:16px;padding:13px 15px;margin:4px 0 12px;color:#fff;background:linear-gradient(135deg,#0F5257,#1B7F79);box-shadow:0 8px 20px rgba(18,140,126,.3);cursor:pointer;display:flex;align-items:center;gap:11px}
.dcrnag b{font-size:15px}.dcrnag small{display:block;opacity:.85}
`;document.head.appendChild(st);

function section(app,d,kind){
  var isDoc=kind==='doc';
  var list=custs(d.brick).filter(function(c){return isDoc?docOf(c):!docOf(c)});
  var sel=isDoc?d.docs:d.chems;
  var wrap=h('div',{});
  wrap.append(h('div',{style:'font-weight:800;margin:10px 0 2px'},(isDoc?'👨‍⚕️ Doctors called':'🏪 Chemists called')+' — '+d.brick));
  if(!list.length){wrap.append(h('div',{style:'color:var(--muted);font-size:13px;padding:6px 2px'},'No '+(isDoc?'doctors':'chemists')+' mapped to this brick. Change the brick above.'));return wrap}
  var box=h('div',{class:'dcrlist'});
  list.forEach(function(c){var on=!!sel[c.code];
    var row=h('div',{class:'dcrrow'+(on?' on':''),onclick:function(){if(sel[c.code])delete sel[c.code];else sel[c.code]=1;redraw()}},
      h('span',{class:'bx'},on?'✓':''),h('div',{},h('div',{class:'nm'},c.name),c.spec?h('div',{class:'sp'},c.spec+(c.ty?(' · '+c.ty):'')):h('div',{class:'sp'},c.ty||'')));
    box.append(row)});
  wrap.append(box);
  return wrap;
}

U.routes.dcr=function(app){
  if(isMgr()){app.append(h('div',{class:'coachc'},h('div',{class:'k'},'🗒️ DCR'),h('p',{},'The Daily Call Report is the CSO\'s screen. You see each CSO\'s submitted DCR in Daily review.')));return}
  var d=draft(),ex=todaysDCR();
  app.append(h('div',{class:'coachc'},h('div',{class:'k'},'🗒️ Daily Call Report'),h('p',{},'Log today\'s calls the way Ventasys needs them. Submit by evening — this is what gets reported as your DCR.')));
  if(ex)app.append(h('div',{class:'dcrdone'},'✅ DCR submitted for today ('+(ex.listDr||0)+' Dr · '+(ex.listCh||0)+' Ch). You can update it below until it\'s locked.'));

  var card=h('div',{class:'selc'});
  card.append(h('div',{style:'font-weight:800;margin-bottom:2px'},'Date: '+d.date));
  // Report type
  var seg=h('div',{class:'dcrseg'});
  RT.forEach(function(r){seg.append(h('button',{class:(d.rt===r[0]?'on':''),onclick:function(){d.rt=r[0];redraw()}},r[1].split(' (')[0]))});
  card.append(h('div',{class:'dcrfield'},h('label',{},'Report type'),seg));
  app.append(card);

  if(d.rt==='OS'){
    var c2=h('div',{class:'selc'});
    // brick
    var bricks=[];try{var all=(typeof CUST!=='undefined'&&CUST)?Object.keys(CUST).map(function(k){return CUST[k].brick}).filter(Boolean):[];bricks=all.filter(function(v,i){return all.indexOf(v)===i}).sort()}catch(e){}
    var bsel=h('select',{onchange:function(){d.brick=bsel.value;redraw()}});
    if(bricks.indexOf(d.brick)<0&&d.brick)bsel.append(h('option',{value:d.brick},d.brick));
    bricks.forEach(function(b){bsel.append(h('option',{value:b,selected:b===d.brick?'selected':null},b))});
    c2.append(h('div',{class:'dcrfield'},h('label',{},'Beat / Brick'),bsel));
    // joint work
    var jsel=h('select',{onchange:function(){d.joint=jsel.value;redraw()}});
    jsel.append(h('option',{value:''},'— none —'));
    teammates().forEach(function(n){jsel.append(h('option',{value:n,selected:n===d.joint?'selected':null},n))});
    c2.append(h('div',{class:'dcrfield'},h('label',{},'Joint work with (optional)'),jsel));
    // activity type
    var asel=h('select',{onchange:function(){d.actt=asel.value}});
    ACTT.forEach(function(a){asel.append(h('option',{value:a,selected:a===d.actt?'selected':null},a))});
    c2.append(h('div',{class:'dcrfield'},h('label',{},'Activity'),asel));
    app.append(c2);

    // live counts
    var nd=Object.keys(d.docs).length,nc=Object.keys(d.chems).length;
    app.append(h('div',{class:'dcrcnt'},h('div',{class:'cc'},h('b',{},String(nd)),h('small',{},'List Dr')),h('div',{class:'cc'},h('b',{},String(nc)),h('small',{},'List Ch'))));

    var c3=h('div',{class:'selc'});
    c3.append(section(app,d,'doc'));
    c3.append(section(app,d,'chem'));
    app.append(c3);
  }

  var c4=h('div',{class:'selc'});
  var ta=h('textarea',{rows:'2',placeholder:d.rt==='OS'?'Remarks (optional)':'Reason',oninput:function(){d.remarks=ta.value}});ta.value=d.remarks||'';
  c4.append(h('div',{class:'dcrfield'},h('label',{},d.rt==='OS'?'Remarks':'Reason'),ta));
  var btn=h('button',{class:'dcrsave',onclick:function(){submit(d,btn)}},ex?'Update DCR':'Submit DCR');
  c4.append(btn);
  app.append(c4);
};

function submit(d,btn){
  var nd=Object.keys(d.docs),nc=Object.keys(d.chems);
  if(d.rt==='OS'&&!nd.length&&!nc.length){toast&&toast('Tick at least one doctor or chemist you called.');return}
  if(btn){btn.disabled=true;btn.textContent='Saving…'}
  var rec={date:d.date,rt:d.rt,brick:d.rt==='OS'?d.brick:'',joint:d.joint||'',activity:'Field Work',actt:d.rt==='OS'?d.actt:'',
    docs:nd,chems:nc,listDr:nd.length,listCh:nc.length,remarks:d.remarks||''};
  (typeof save==='function'?save('dcr',rec):Promise.resolve(true)).then(function(ok){
    if(ok){S.dcrDraft=null;toast&&toast('✅ DCR submitted');try{render()}catch(e){}}
    else if(btn){btn.disabled=false;btn.textContent='Submit DCR'}
  });
}

/* due today? (CSO, a field day, not yet submitted) */
U.dcrDue=function(){try{return !isMgr()&&(!U.leaveToday||!U.leaveToday())&&!todaysDCR()}catch(e){return false}}
U.dcrDone=function(){return !!todaysDCR()};

/* Work-tab entry strip */
var prevToday=U.today;U.today=function(app,tk,rest){prevToday&&prevToday(app,tk,rest);if(isMgr())return;
  var c;
  if(U.dcrDue()) c=h('div',{class:'dcrnag',onclick:function(){go('dcr')}},h('span',{style:'font-size:20px'},'🗒️'),h('div',{style:'flex:1'},h('b',{},'Submit today\'s DCR'),h('small',{},'Log the doctors & chemists you called today')),h('span',{style:'font-weight:800'},'›'));
  else if(U.dcrDone()){var e=todaysDCR();c=h('div',{class:'dcrdone',onclick:function(){go('dcr')},style:'cursor:pointer'},'✅ DCR done — '+((e&&e.listDr)||0)+' Dr · '+((e&&e.listCh)||0)+' Ch · tap to edit');}
  if(c){var top=app.querySelector('.tasknag')||app.querySelector('.syncnote')||tk;if(top&&top.parentNode)top.before(c);else app.prepend(c)}
};
})();
