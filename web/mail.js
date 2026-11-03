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
    L.push('Dear Sir,','','Please find below the daily field review of Guwahati Area for '+nice(date)+'.','');var b=msgFor(MGR,date);if(b&&b.text)L.push(o.verify?b.text:dropVerify(b.text),'');
    CSO.forEach(function(c,i){var m=msgFor(c[0],date);L.push((i+1)+'. '+c[1]+' – '+c[2]+' HQ',m&&m.text?m.text:'Review not available.','')});L.push('Dhubri HQ – vacant.','');to=CC_DEF}
  else{var c=CSO.filter(function(x){return x[0]===who})[0],m=msgFor(who,date),first=c[1].split(' ')[0],t=m&&m.text?m.text:'Review not available.',leave=/on leave/i.test(t);to=c[0];
    subj='Day Review – '+c[1]+' – '+c[2]+' HQ – '+nice(date)+' ('+dayName(date)+')';
    L.push('Dear '+first+',','','Please find your day review for '+nice(date)+'.','',t,'');
    if(!leave&&/explanation/i.test(t))L.push('Please reply to this mail with your explanation for each point by 11 AM tomorrow.','');
    L.push('Keep entering everything in Ventasys and sync the app every day.','')}
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
function repTabs(r){return h('div',{class:'subtabs'},[['perf','Numbers'],['mail','Review mail']].map(function(x){return h('button',{class:x[0]===r?'on':'',onclick:function(){go(x[0])}},x[1])}))}
var pt=U.tabOfX||{};pt.mail='mail';U.tabOfX=pt;
var prevAfter=U.after;U.after=function(app,r){prevAfter&&prevAfter(app,r);if(!isMgr()||document.getElementById('ftlogin'))return;
  try{var hd=app.querySelector('.fthead');
    if(r==='perf'||r==='mail'){if(hd&&!app.querySelector('.subtabs.rep')){var t=repTabs(r);t.classList.add('rep');hd.after(t)}
      var nb=app.querySelector('.bnav');if(nb)[].forEach.call(nb.children,function(b){b.classList.toggle('on',/Reports/.test(b.textContent))})}
    if(r==='home'){var D=dates();if(D.length&&!app.querySelector('.mailready')){var c=h('div',{class:'mailready',onclick:function(){go('mail')}},'📧',h('div',{},h('b',{},'Day review mails ready – '+nice(D[0])),h('small',{},'One mail per CSO, Cc Sudipta – send from Outlook')),h('span',{class:'go'},'›'));var tp=app.querySelector('.phase');if(tp)tp.before(c);else if(hd)hd.after(c)}}}catch(e){}};
try{if(S.ready)render()}catch(e){}
})();
