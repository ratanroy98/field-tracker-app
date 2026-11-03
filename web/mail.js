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
function subject(date){return 'Daily Field Review – Guwahati Area – '+nice(date)+' ('+dayName(date)+')'}
function body(date,o){var L=[];L.push(o.greet||'Dear Sir,','','Please find below the daily field review of Guwahati Area for '+nice(date)+'.','');
  var b=msgFor(MGR,date);if(o.brief&&b&&b.text){L.push('TEAM SUMMARY','------------',o.verify?b.text:dropVerify(b.text),'')}
  if(o.cso){L.push('CSO-WISE REVIEW','---------------');CSO.forEach(function(c,i){var m=msgFor(c[0],date);L.push((i+1)+'. '+c[1]+' – '+c[2]+' HQ',m&&m.text?m.text:'Review not available.','')});L.push('Dhubri HQ – vacant.','')}
  L.push('Regards,','Ratan Roy','CSM – Guwahati Area','Zydus GEO','Mob: 8811087925');var t=L.join('\n');return o.emoji?t:noEmoji(t)}

function copy(text,ta){var ok=false;try{if(ta){ta.focus();ta.select();ok=document.execCommand('copy')}}catch(e){}
  if(!ok)try{navigator.clipboard.writeText(text).then(function(){toast('Copied')},function(){toast('Select the text and press Ctrl+C')});return}catch(e){}
  toast(ok?'Copied – paste it in Outlook':'Select the text and press Ctrl+C')}

U.routes.mail=function(app){if(!isMgr()){app.append(h('div',{class:'note'},'Only Ratan Roy can open this.'));return}
  var D=dates();if(!D.length){app.append(h('div',{class:'note'},'No evening review yet. It appears here after the 8 PM review runs.'));return}
  var o={date:S.tab.mailDate&&D.indexOf(S.tab.mailDate)>=0?S.tab.mailDate:D[0],brief:U.lsGet('ft_mail_brief','1')==='1',cso:U.lsGet('ft_mail_cso','1')==='1',verify:U.lsGet('ft_mail_verify','0')==='1',emoji:U.lsGet('ft_mail_emoji','0')==='1',greet:U.lsGet('ft_mail_greet','Dear Sir,')};
  var to=h('input',{value:U.lsGet('ft_mail_to',''),placeholder:'e.g. zsm.guwahati@zyduslife.com'}),cc=h('input',{value:U.lsGet('ft_mail_cc',''),placeholder:'optional'});
  var sj=h('input',{value:subject(o.date)}),gr=h('input',{value:o.greet}),ta=h('textarea',{spellcheck:'false'});ta.value=body(o.date,o);
  var sel=h('select',{},D.map(function(d){var x=h('option',{value:d},nice(d)+' ('+dayName(d)+')');if(d===o.date)x.selected=true;return x}));
  sel.onchange=function(){S.tab.mailDate=sel.value;render()};
  to.oninput=function(){U.lsSet('ft_mail_to',to.value.trim())};cc.oninput=function(){U.lsSet('ft_mail_cc',cc.value.trim())};
  gr.oninput=function(){o.greet=gr.value;U.lsSet('ft_mail_greet',gr.value);ta.value=body(o.date,o)};
  function opt(k,key,lab){var c=h('input',{type:'checkbox'});c.checked=o[k];c.onchange=function(){o[k]=c.checked;U.lsSet(key,c.checked?'1':'0');ta.value=body(o.date,o)};return h('label',{},c,lab)}
  function owa(){return 'https://outlook.office.com/mail/deeplink/compose?to='+encodeURIComponent(to.value.trim())+(cc.value.trim()?'&cc='+encodeURIComponent(cc.value.trim()):'')+'&subject='+encodeURIComponent(sj.value)+'&body='+encodeURIComponent(ta.value)}
  function mto(){return 'mailto:'+encodeURIComponent(to.value.trim()).replace(/%40/g,'@').replace(/%2C/g,',')+'?'+(cc.value.trim()?'cc='+encodeURIComponent(cc.value.trim())+'&':'')+'subject='+encodeURIComponent(sj.value)+'&body='+encodeURIComponent(ta.value)}
  var aW=h('a',{class:'ol',target:'_blank',rel:'noopener'},'Open in Outlook (web)'),aD=h('a',{class:'ol2',target:'_top'},'Open in Outlook app');
  aW.onmouseenter=aW.onfocus=aW.ontouchstart=function(){aW.href=owa()};aW.onclick=function(){aW.href=owa()};
  aD.onmouseenter=aD.onfocus=aD.ontouchstart=function(){aD.href=mto()};aD.onclick=function(){aD.href=mto();if(aD.href.length>1900)toast('Long review: if Outlook cuts it, use Copy body and paste.')};
  app.append(h('div',{class:'phase mailbox'},
    h('div',{class:'ph'},h('b',{},'📧 Review mail'),h('small',{},'Nothing is sent by the app – you send it from Outlook')),
    h('div',{class:'row2'},h('label',{},'Review of',sel),h('label',{},'Greeting',gr)),
    h('div',{class:'row2'},h('label',{},'To',to),h('label',{},'Cc',cc)),
    h('label',{},'Subject',sj),
    h('div',{class:'opts'},opt('brief','ft_mail_brief','Team summary'),opt('cso','ft_mail_cso','CSO-wise review'),opt('verify','ft_mail_verify','Include "lines to verify"'),opt('emoji','ft_mail_emoji','Keep emojis')),
    h('label',{},'Mail body (you can edit before copying)',ta),
    h('div',{class:'acts'},h('button',{onclick:function(){copy(sj.value)}},'Copy subject'),h('button',{onclick:function(){copy(ta.value,ta)}},'Copy body'),aW,aD),
    h('small',{style:'color:var(--muted)'},'Office laptop: use "Open in Outlook (web)" if you use Outlook in the browser, or "Open in Outlook app" for desktop Outlook. If either is blocked by office settings, use Copy subject and Copy body and paste into a new mail.')))};

/* Reports tab gets two sub-tabs for the manager; Team screen shows a "review mail ready" line. */
function repTabs(r){return h('div',{class:'subtabs'},[['perf','Numbers'],['mail','Review mail']].map(function(x){return h('button',{class:x[0]===r?'on':'',onclick:function(){go(x[0])}},x[1])}))}
var pt=U.tabOfX||{};pt.mail='mail';U.tabOfX=pt;
var prevAfter=U.after;U.after=function(app,r){prevAfter&&prevAfter(app,r);if(!isMgr()||document.getElementById('ftlogin'))return;
  try{var hd=app.querySelector('.fthead');
    if(r==='perf'||r==='mail'){if(hd&&!app.querySelector('.subtabs.rep')){var t=repTabs(r);t.classList.add('rep');hd.after(t)}
      var nb=app.querySelector('.bnav');if(nb)[].forEach.call(nb.children,function(b){b.classList.toggle('on',/Reports/.test(b.textContent))})}
    if(r==='home'){var D=dates();if(D.length&&!app.querySelector('.mailready')){var c=h('div',{class:'mailready',onclick:function(){go('mail')}},'📧',h('div',{},h('b',{},'Review mail ready – '+nice(D[0])),h('small',{},'Open, copy or send from Outlook')),h('span',{class:'go'},'›'));var tp=app.querySelector('.phase');if(tp)tp.before(c);else if(hd)hd.after(c)}}}catch(e){}};
try{if(S.ready)render()}catch(e){}
})();
