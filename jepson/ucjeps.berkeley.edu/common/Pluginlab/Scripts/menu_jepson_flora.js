//Copyright 2002-2005 PluginLab, Inc. All rights reserved.
//www.pluginlab.com
//Registered to:StaciM

var PLVFO_VERSION='1.4'
var PLVFO_WIDTH=150
var PLVFO_LAYER=false
var PLVFO_X=0
var PLVFO_Y=0
var PLVFO_VALIGN=0
var PLVFO_IS_FLOATING=false
var PLVFO_MAIN_SET_HEIGHT=false
var PLVFO_FLYOUT_SET_HEIGHT=false
var PLVFO_MAIN_ITEM_HEIGHT=17
var PLVFO_FLYOUT_ITEM_HEIGHT=17
var PLVFO_ROLLOVER_HAS_BORDER=false
var PLVFO_SHOW_SELECTED=false
var PLVFO_STYLE=2
var PLVFO_V_INTERVAL=0
var PLVFO_CROSSFADE=0
var PLVFO_FLYOUT_HEIGHT=0
var PLVFO_FLYOUT_WIDTH=10
var PLVFO_OVERLAP=false
var PLVFO_PARENT_MO=false
var PLVFO_HAS_SHADOW=true
var PLVFO_OPEN_ANIMATION=0
var PLVFO_CLOSE_ANIMATION=0
var PLVFO_OPEN_SPEED=10
var PLVFO_CLOSE_SPEED=10
var PLVFO_SHOW_DELAY=400
var PLVFO_BACKGROUND_COLOR='#c0dffd'
var PLVFO_SEPARATOR_COLOR='#003355'
var PLVFO_NORMAL_COLOR='#c0dffd'
var PLVFO_MOUSEOVER_COLOR='#0066BB'
var PLVFO_MOUSEDOWN_COLOR='#335588'
var PLVFO_SELECTED_COLOR='#B0C4FF'
var PLVFO_NORMAL_BORDER_COLOR='#c0dffd'
var PLVFO_MOUSEOVER_BORDER_COLOR='#000000'
var PLVFO_MOUSEDOWN_BORDER_COLOR='#000000'
var PLVFO_SELECTED_BORDER_COLOR='#000000'
var PLVFO_TEXT_COLOR='#003366'
var PLVFO_TEXT_MOUSEOVER_COLOR='#FFFFFF'
var PLVFO_TEXT_MOUSEDOWN_COLOR='#FFFFFF'
var PLVFO_TEXT_SELECTED_COLOR='#000000'
var PLVFO_BORDER_COLOR='#c0dffd'
var PLVFO_FLYOUT_BORDER_COLOR='#000000'
var PLVFO_MAIN_FONT='Verdana,Arial,Helvetica,sans-serif'
var PLVFO_FLYOUT_FONT='Verdana,Arial,Helvetica,sans-serif'
var PLVFO_MAIN_FONT_SIZE=11
var PLVFO_FLYOUT_FONT_SIZE=11
var PLVFO_MAIN_BOLD=false
var PLVFO_FLYOUT_BOLD=false
var PLVFO_MAIN_ITALIC=false
var PLVFO_FLYOUT_ITALIC=false
var PLVFO_MAIN_UNDERLINE=false
var PLVFO_FLYOUT_UNDERLINE=false
var PLVFO_CENTER_HEADINGS=true
var PLVFO_CENTER_MAIN=false
var PLVFO_CENTER_FLYOUTS=false
var PLVFO_SUB_ARROW='/common/Pluginlab/Images/fo_arrow.gif'
var PLVFO_SUB_ARROW_ROLLOVER='/common/Pluginlab/Images/fo_arrow_mouseover.gif'
var PLVFO_UP_ARROW='/common/Pluginlab/Images/up.gif'
var PLVFO_UP_ARROW_DISABLED='/common/Pluginlab/Images/up_disabled.gif'
var PLVFO_DOWN_ARROW='/common/Pluginlab/Images/down.gif'
var PLVFO_DOWN_ARROW_DISABLED='/common/Pluginlab/Images/down_disabled.gif'
var PLVFO_SCROLL_DELAY=35
var PLVFO_STREAM=new Array(0,8,'#c0dffd','#003355','#c0dffd','#0066BB','#335588','#B0C4FF','#c0dffd','#000000','#000000','#000000','#003366','#FFFFFF','#FFFFFF','#000000',0,1,"The&nbsp;Jepson&nbsp;Manual",'http://ucjeps.berkeley.edu/jepsonmanual/','','','',0,0,0,2,"Second&nbsp;Edition",'http://ucjeps.berkeley.edu/jepman.html','','','',0,0,0,3,"Databases",'http://ucjeps.berkeley.edu/consortium/','','','',0,0,0,0,"Vegetation&nbsp;Types",'/jepsonflora/vegetation/','','','',0,0,0,4,"Publications",'http://ucjeps.berkeley.edu/Herb_Pubs.html','','','',0,0,0,5,"Maps",'http://ucjeps.berkeley.edu/cguide.html#Map%20with%20Unit%20Boundaries','','','',0,0,0,6,"Donor&nbsp;Opportunities",'http://ucjeps.berkeley.edu/jeps/friends/floristic.html','','','',0,0,0,0,"Editors&nbsp;and&nbsp;Staff",'http://ucjeps.berkeley.edu/jepsonflora/staff.html','','','',0,0,1,4,'#c0dffd','#003355','#c0dffd','#0066BB','#335588','#B0C4FF','#c0dffd','#000000','#000000','#000000','#003366','#FFFFFF','#FFFFFF','#000000',0,0,"About",'http://ucjeps.berkeley.edu/jepsonmanual/','','','',0,0,0,0,"Purchase&nbsp;the&nbsp;Manual",'http://www.ucpress.edu/books/pages/2817.html','','','',0,0,0,0,"Corrections",'http://ucjeps.berkeley.edu/all_corr2.html','','','',0,0,0,0,"Jepson&nbsp;Manual&nbsp;Online",'http://ucjeps.berkeley.edu/interchange/I_treat_indexes.html','','','',0,0,2,6,'#c0dffd','#003355','#c0dffd','#0066BB','#335588','#B0C4FF','#c0dffd','#000000','#000000','#000000','#003366','#FFFFFF','#FFFFFF','#000000',0,0,"List&nbsp;of&nbsp;Contributing&nbsp;Authors",'/jepsonmanual/contributors.html','','','',0,0,0,0,"Information&nbsp;for&nbsp;Contributing&nbsp;Authors",'http://ucjeps.berkeley.edu/tjm_resources.html','','','',0,0,0,0,"Contributors'&nbsp;Guide",'http://ucjeps.berkeley.edu/cguide.html','','','',0,0,0,0,"2nd&nbsp;Edition&nbsp;Timeline",'http://ucjeps.berkeley.edu/tjm2/timeline.html','','','',0,0,0,0,"New&nbsp;2nd&nbsp;Edition&nbsp;Treatments",'http://ucjeps.berkeley.edu/jepsonmanual/review/','','','',0,0,0,0,"Donor&nbsp;Opportunities",'http://ucjeps.berkeley.edu/jeps/friends/floristic.html','','','',0,0,3,10,'#c0dffd','#003355','#c0dffd','#0066BB','#335588','#B0C4FF','#c0dffd','#000000','#000000','#000000','#003366','#FFFFFF','#FFFFFF','#000000',0,0,"Consortium&nbsp;of&nbsp;California&nbsp;Herbaria",'http://ucjeps.berkeley.edu/consortium/','','','',0,0,0,0,"Jepson&nbsp;Manual&nbsp;Online",'http://ucjeps.berkeley.edu/interchange/I_treat_indexes.html','','','',0,0,0,0,"Jepson&nbsp;Online&nbsp;Interchange",'http://ucjeps.berkeley.edu/interchange/','','','',0,0,0,0,"Ecological&nbsp;Flora&nbsp;of&nbsp;California",'http://ucjeps.berkeley.edu/efc/','','','',0,0,0,0,"Jepson&nbsp;Horticultural&nbsp;Database",'http://ucjeps.berkeley.edu/db/horticulture/','','','',0,0,0,0,"Jepson&nbsp;Place&nbsp;Name&nbsp;Index",'http://www.mip.berkeley.edu/query_forms/browse_jpn.html','','','',0,0,0,0,"A&nbsp;Flora&nbsp;of&nbsp;California",'http://ucjeps.berkeley.edu/db/flora/','','','',0,0,0,0,"Index&nbsp;to&nbsp;California&nbsp;Plant&nbsp;Names",'http://ucjeps.berkeley.edu/db/icpn/','','','',0,0,0,0,"Digital&nbsp;Identification&nbsp;Keys&nbsp;(MEKA)",'http://ucjeps.berkeley.edu/keys/','','','',0,0,0,0,"Hrusa's&nbsp;Crosswalk",'http://ucjeps.berkeley.edu/db/crosswalk/','','','',0,0,4,3,'#c0dffd','#003355','#c0dffd','#0066BB','#335588','#B0C4FF','#c0dffd','#000000','#000000','#000000','#003366','#FFFFFF','#FFFFFF','#000000',0,0,"The&nbsp;Jepson&nbsp;Manual",'http://ucjeps.berkeley.edu/jepsonmanual/','','','',0,0,0,0,"Desert&nbsp;Manual",'http://www.ucpress.edu/books/pages/9321.html','','','',0,0,0,0,"Flora&nbsp;of&nbsp;California",'http://ucjeps.berkeley.edu/jepson-project3.html','','','',0,0,5,2,'#c0dffd','#003355','#c0dffd','#0066BB','#335588','#B0C4FF','#c0dffd','#000000','#000000','#000000','#003366','#FFFFFF','#FFFFFF','#000000',0,0,"Jepson&nbsp;Bioregions",'http://ucjeps.berkeley.edu/cguide.html#Map%20with%20Unit%20Boundaries','','','',0,0,0,0,"BNHM&nbsp;Mapping&nbsp;Site",'http://berkeleymapper.berkeley.edu/','','','',0,0,6,4,'#c0dffd','#003355','#c0dffd','#0066BB','#335588','#B0C4FF','#c0dffd','#000000','#000000','#000000','#003366','#FFFFFF','#FFFFFF','#000000',0,0,"Our&nbsp;Goal",'http://ucjeps.berkeley.edu/jeps/friends/floristic.html','','','',0,0,0,0,"Support&nbsp;the&nbsp;2nd&nbsp;Edition",'http://ucjeps.berkeley.edu/jeps/friends/donor.html','','','',0,0,0,0,"Sponsor&nbsp;a&nbsp;Genus",'http://ucjeps.berkeley.edu/jeps/friends/sponsored.html','','','',0,0,0,0,"Membership",'http://ucjeps.berkeley.edu/jeps/friends/','','','',0,0)
var PLVFO_br
var PLVFO_menu
var PLVFO_flyouts=new Array
var PLVFO_shownFoids=Array('0')
var PLVFO_currentFoid=null
var PLVFO_nextFoid=null
var PLVFO_currentItem
var PLVFO_timeout=null
var PLVFO_interval=null
var PLVFO_scroll_start=0
var PLVFO_scroll_time=0
var PLVFO_scroll_delta=0
var PLVFO_mt=0
var PLVFO_preloads=new Array
var PLVFO_plIndex=0
function PLVFO_br(){var ua=navigator.userAgent.toLowerCase()
this.opera=ua.indexOf('opera')>=0
this.safari=ua.indexOf('safari')>=0
this.ie=document.all&&!this.opera
this.ieCanvas=(this.ie&&document.compatMode=="CSS1Compat")?document.documentElement:document.body
return this}function PLVFO_onload(){setTimeout('PLVFO_start()',0)}function PLVFO_start(){PLVFO_SUB_ARROW=PL_adjustPath(PLVFO_SUB_ARROW)
PLVFO_SUB_ARROW_ROLLOVER=PL_adjustPath(PLVFO_SUB_ARROW_ROLLOVER)
PLVFO_UP_ARROW=PL_adjustPath(PLVFO_UP_ARROW)
PLVFO_UP_ARROW_DISABLED=PL_adjustPath(PLVFO_UP_ARROW_DISABLED)
PLVFO_DOWN_ARROW=PL_adjustPath(PLVFO_DOWN_ARROW)
PLVFO_DOWN_ARROW_DISABLED=PL_adjustPath(PLVFO_DOWN_ARROW_DISABLED)
PLVFO_br=new PLVFO_br()
PLVFO_preload(PLVFO_SUB_ARROW_ROLLOVER)
PLVFO_preload(PLVFO_UP_ARROW)
PLVFO_preload(PLVFO_DOWN_ARROW_DISABLED)
PLVFO_menu=document.getElementById('PLVFOMenu')
PLVFO_flyouts[0]=PLVFO_menu
var i=0, st=PLVFO_STREAM
while(i<st.length){var index=st[i++]
var n=st[i++]
var curSecColor=st[i++]
var curColor=st[++i]
var curMOColor=st[++i]
var curMDColor=st[++i]
var curSelColor=st[++i]
var curBColor=st[++i]?st[i]:curSecColor
var curBMOColor=st[++i]?st[i]:curSecColor
var curBMDColor=st[++i]?st[i]:curSecColor
var curBSelColor=st[++i]?st[i]:curSecColor
i++
var curTxtColor=st[i++]
var curTMOColor=st[i++]
var curTMDColor=st[i++]
var curTSelColor=st[i++]
var fo=PLVFO_flyouts[index]
fo.obj='PLVFO_'+index
eval(fo.obj+'=fo')
fo.onmouseover=PLVFO_onmouseover
fo.onmouseout=PLVFO_onmouseout
if(fo.foid=index){var tbl=document.createElement('table')
fo.appendChild(tbl)
fo.style.position='absolute'
tbl.cellPadding=0
tbl.cellSpacing=0
tbl.style.border='solid 1px #000000'
tbl.bgColor=curSecColor
var cell=PLVFO_insertCell(tbl)
var upScr=document.createElement('table')
var td=PLVFO_insertCell(upScr)
upScr.foid=index
upScr.cellPadding=0
upScr.cellSpacing=0
upScr.width='100%'
upScr.style.margin='2px'
upScr.bgColor=curColor
td.style.padding='2px 0px'
upScr.style.cursor='hand'
td.innerHTML="<center><img src='"+PLVFO_UP_ARROW_DISABLED+"' width=7 height=9></center>"
upScr.id='PLVFO_UPSCROLLER'
upScr.ncolor=curColor
upScr.mocolor=curMOColor
upScr.brdcolor=curBColor
upScr.bmocolor=curBMOColor
cell.appendChild(upScr)
fo.upScr=upScr
var items =upScr.getElementsByTagName('IMG')
fo.upArrow=items.item(0)
var upScBorder=document.createElement('table')
upScBorder.border=0
upScBorder.cellPadding=0
upScBorder.cellSpacing=0
td=PLVFO_insertCell(upScBorder)
upScBorder.width='100%'
td.bgColor=PLVFO_FLYOUT_BORDER_COLOR
td.height=1
cell.appendChild(upScBorder)
fo.upScBorder=upScBorder
scrollArea=document.createElement('div')
cell.appendChild(scrollArea)
var dnScBorder=document.createElement('table')
dnScBorder.border=0
dnScBorder.cellPadding=0
dnScBorder.cellSpacing=0
td=PLVFO_insertCell(dnScBorder)
dnScBorder.width='100%'
td.bgColor=PLVFO_FLYOUT_BORDER_COLOR
td.height=1
cell.appendChild(dnScBorder)
fo.dnScBorder=dnScBorder
var dwnScr=document.createElement('table')
td=PLVFO_insertCell(dwnScr)
dwnScr.foid=index
dwnScr.cellPadding=0
dwnScr.cellSpacing=0
dwnScr.width='100%'
dwnScr.style.margin='2px'
dwnScr.bgColor=curColor
td.style.padding='2px 0px'
dwnScr.style.cursor='hand'
td.innerHTML="<center><img src='"+PLVFO_DOWN_ARROW+"' width=7 height=9></center>"
dwnScr.id='PLVFO_DOWNSCROLLER'
dwnScr.ncolor=curColor
dwnScr.mocolor=curMOColor
dwnScr.brdcolor=curBColor
dwnScr.bmocolor=curBMOColor
cell.appendChild(dwnScr)
fo.dwnScr=dwnScr
var items =dwnScr.getElementsByTagName('IMG')
fo.downArrow=items.item(0)
var wraper=document.createElement('TABLE')
wraper.border=0
wraper.cellPadding=2
wraper.cellSpacing=0
wraper.bgColor=curSecColor
var wraper_td=PLVFO_insertCell(wraper)
scrollArea.appendChild(wraper)}else{var ttags=fo.getElementsByTagName('TABLE')
var k=0}for(var j=0;j<n;j++){var type=st[i++]
var fi, tbody, row, td
if(index||type==0){if(index){fi=document.createElement('table')
fi.style.width='10px'
fi.border=0
fi.cellPadding=0
fi.cellSpacing=0
tbody=document.createElement('TBODY')
fi.appendChild(tbody)
row=document.createElement('TR')
tbody.appendChild(row)}else{while((fi=ttags[k++]).id!='PLVFOLink');
tbody=fi.getElementsByTagName('TBODY')[0]
row=tbody.getElementsByTagName('TR')[0]
while(row.childNodes.length)row.removeChild(row.childNodes[0])}td=document.createElement('TD')
td.noWrap=true}if(type==0){fi.name='fi'
fi.style.margin='0px 0px'
fi.id='PLVFOLink'
td.width='100%'
td.style.padding=index?'1px 6px 3px 6px':'1px 6px 3px 6px'
if((index&&PLVFO_CENTER_FLYOUTS)||(!index&&PLVFO_CENTER_MAIN))td.align='center'
td.style.fontFamily=index?PLVFO_FLYOUT_FONT:PLVFO_MAIN_FONT
td.style.fontSize=index?'11px':'11px'
if((index&&PLVFO_FLYOUT_BOLD)||(!index&&PLVFO_MAIN_BOLD))td.style.fontWeight='bold'
if((index&&PLVFO_FLYOUT_ITALIC)||(!index&&PLVFO_MAIN_ITALIC))td.style.fontStyle='italic'
fi.foid=index
fi.cfoid=st[i++]
if(fi.cfoid>0){var cf=PLVFO_flyouts[fi.cfoid]=document.createElement('DIV')
cf.style.display='none'
cf.pfi=fi}fi.ncolor=curColor
fi.mocolor=curMOColor
fi.mdcolor=curMDColor
fi.brdcolor=curBColor
fi.bmocolor=curBMOColor
fi.bmdcolor=curBMDColor
fi.bselcolor=curBSelColor
fi.txtcolor=curTxtColor
fi.tmocolor=curTMOColor
fi.tmdcolor=curTMDColor
fi.bgColor=curColor
fi.style.cursor=PLVFO_br.ie?'hand':'pointer'
var anc=document.createElement('font')
anc.style.color=curTxtColor
anc.style.textDecorationUnderline=index?false:false
var txt=st[i++]
fi.href=PL_adjustPath(st[i++])
var t=st[i++]
fi.target=t
if(t.substr(0,3)=='_PL'){fi.func=st[i++]
fi.params=st[i++]}anc.innerHTML=txt
td.appendChild(anc)
fi.imgn=PL_adjustPath(st[i++])
fi.imgo=PL_adjustPath(st[i++])
fi.imgh=st[i++]
fi.imgw=st[i++]
PLVFO_preload(fi.imgo)
if(fi.imgn||fi.imgo){var icn_td=document.createElement('TD')
var img=document.createElement('IMG')
img.id='PLVFOIcon'
img.src=fi.imgn?fi.imgn:fi.imgo
if(!fi.imgn)img.style.visibility='hidden'
img.height=fi.imgh
img.width=fi.imgw
icn_td.appendChild(img)
row.appendChild(icn_td)}row.appendChild(td)
if(fi.cfoid>0){var arw_td=document.createElement('TD')
var arw_img=document.createElement('IMG')
arw_img.id='PLVFOArrow'
arw_img.src=PLVFO_SUB_ARROW
arw_img.height=7
arw_img.width=7
arw_td.appendChild(arw_img)
row.appendChild(arw_td)}if(index)wraper_td.appendChild(fi)
fi.a=anc
fi.onmousedown=PLVFO_onmousedown
fi.onmouseup=PLVFO_onmouseup
fi.co=0}else if(type==1){if(index){fi.name='fi'
fi.style.margin='0px 0px'
td.align='center'
td.style.fontFamily=PLVFO_FLYOUT_FONT
td.style.fontSize='11px'
td.style.padding='1px 4px 3px 4px'
fi.style.cursor='default'
td.innerHTML=st[i++]
td.style.color=st[i++]
td.style.fontWeight='bold'
row.appendChild(td)
wraper_td.appendChild(fi)}else i+=2}else if(type==2){curSecColor=st[i++]
var sepColor=st[i]
curColor=st[++i]
curMOColor=st[++i]
curMDColor=st[++i]
curSelColor=st[++i]
curBColor=st[++i]?st[i]:curSecColor
curBMOColor=st[++i]?st[i]:curSecColor
curBMDColor=st[++i]?st[i]:curSecColor
curBSelColor=st[++i]?st[i]:curSecColor
i++
curTxtColor=st[i++]
curTMOColor=st[i++]
curTMDColor=st[i++]
curTSelColor=st[i++]
if(index){if(sepColor){fi.width='100%'
td.bgColor=sepColor
td.height=1
td.id='PLVFOSeparator'
row.appendChild(td)
scrollArea.appendChild(fi)}wraper=document.createElement('table')
wraper.border=0
wraper.cellPadding=2
wraper.cellSpacing=0
wraper.bgColor=curSecColor
wraper_td=PLVFO_insertCell(wraper)
scrollArea.appendChild(wraper)}}}if(index){document.body.appendChild(fo)
fo.style.display=''
scrollArea.baseHeight=scrollArea.offsetHeight
fo.scrollArea=scrollArea
fo.style.zIndex=5
var max_width=10
var items=scrollArea.getElementsByTagName('Table')
for(var k=0;k<items.length;k++){if(items[k].name=='fi'&&items[k].offsetWidth>max_width)max_width=items[k].offsetWidth}fo.style.display='none'
fo.open=fo.intr=false
for(var k=0;k<items.length;k++){if(items[k].name=='fi')items[k].style.width=max_width+'px'}fo.upScr.style.width=max_width+'px'
fo.dwnScr.style.width=max_width+'px'
fo.shadows=new Array
for(var s=1;s<=4;s++){fo.shadows[s]=document.createElement('div')
document.body.appendChild(fo.shadows[s])}}}var items=document.getElementsByTagName('TABLE')
var v=PLVFO_menu.width=Math.max(PLVFO_menu.offsetWidth,PLVFO_WIDTH)
v-=(6)
for(var i=0;i<items.length;i++){var e=items[i]
if(e.id=='PLVFOLink'||e.id=='PLVFOHeading'){e.width=v
var imgs=e.getElementsByTagName('IMG')
for(var j=0;j<imgs.length;j++){if(imgs[j].id=='PLVFOIcon')e.img=imgs[j]
if(imgs[j].id=='PLVFOArrow')e.fo_arrow=imgs[j]}}}}function PLVFO_onmouseover(evt){var e=PLVFO_getSource(evt)
PLVFO_currentFoid=PLVFO_getFoid(this)
PLVFO_nextFoid=null
if(e){PLVFO_currentItem=e
PLVFO_nextFoid=e.cfoid
if(e.id=='PLVFO_UPSCROLLER'||e.id=='PLVFO_DOWNSCROLLER'){PLVFO_showMO(e)
PLVFO_scroll_start=PLVFO_flyouts[e.foid].scrollArea.scrollTop
PLVFO_scroll_time=PLVFO_getTime()
PLVFO_scroll_delta=e.id=='PLVFO_UPSCROLLER'?-0.15:0.15
PLVFO_interval=window.setInterval('PLVFO_scroll()',PLVFO_SCROLL_DELAY)}else if(e.id=='PLVFOLink'&&!e.sel)PLVFO_showMO(e)}window.clearTimeout(PLVFO_timeout)
PLVFO_timeout=window.setTimeout('PLVFO_updateFlyouts()',PLVFO_SHOW_DELAY)}function PLVFO_onmouseout(evt){var e=PLVFO_getSource(evt)
PLVFO_currentFoid=0
PLVFO_nextFoid=null
if(e&&((e.id=='PLVFO_UPSCROLLER')||(e.id=='PLVFO_DOWNSCROLLER')||(e.id=='PLVFOLink'&&!e.co)))PLVFO_hideMO(e)
window.clearInterval(PLVFO_interval)
window.clearTimeout(PLVFO_timeout)
PLVFO_timeout=window.setTimeout('PLVFO_updateFlyouts()',PLVFO_SHOW_DELAY)}function PLVFO_onmousedown(evt){var e=PLVFO_getSource(evt)
e.bgColor=e.mdcolor
e.a.style.color=e.tmdcolor}function PLVFO_onmouseup(evt){var e=PLVFO_getSource(evt)
PLVFO_showMO(e)
if(e.func)eval(e.func+'("'+e.href+'",'+e.params+')')
else if(e.target)window.open(e.href,e.target)
else location=e.href}function PLVFO_showMO(e){if(e.fo_arrow)e.fo_arrow.src=PLVFO_SUB_ARROW_ROLLOVER
if(e.sel)return
e.bgColor=e.mocolor
if(e.id=='PLVFOLink'){e.a.style.color=e.tmocolor
if(e.imgo){e.img.src=e.imgo
e.img.style.visibility=''}}}function PLVFO_hideMO(e){if(e.fo_arrow)e.fo_arrow.src=PLVFO_SUB_ARROW
if(e.sel)return
e.bgColor=e.ncolor
if(e.id=='PLVFOLink'){e.a.style.color=e.txtcolor
if(e.imgn)e.img.src=e.imgn
else if(e.imgo)e.img.style.visibility='hidden'}}function PLVFO_updateFlyouts(){var i
i=0
while((PLVFO_currentFoid!=PLVFO_shownFoids[i])&&(i<PLVFO_shownFoids.length))i++
if(i>=PLVFO_shownFoids.length)i=1
else{i++
if(PLVFO_nextFoid){if(PLVFO_shownFoids[i]!=PLVFO_nextFoid){if(PLVFO_shownFoids[i])PLVFO_removeFlyout(PLVFO_shownFoids[i])
PLVFO_shownFoids[i]=PLVFO_nextFoid
PLVFO_showFlyout()}i++}}for(var j=i;j<PLVFO_shownFoids.length;j++){PLVFO_removeFlyout(PLVFO_shownFoids[j])}PLVFO_shownFoids.length=i}function PLVFO_showFlyout(){var e=PLVFO_currentItem
var fo=PLVFO_flyouts[e.cfoid]
if(!fo)return
fo.open=true
if(fo.intr)return
fo.pfoid=e.foid
var docTop=PLVFO_br.ie?PLVFO_br.ieCanvas.scrollTop:window.pageYOffset
var docLeft=PLVFO_br.ie?PLVFO_br.ieCanvas.scrollLeft:window.pageXOffset
var docHeight=PLVFO_br.ie?PLVFO_br.ieCanvas.clientHeight:window.innerHeight
var docWidth=PLVFO_br.ie?PLVFO_br.ieCanvas.offsetWidth:window.innerWidth
var topLimit=docTop+2
var bottomLimit=docTop+docHeight-6
var foHeight=bottomLimit-topLimit
var show_scrollers='none'
if(PLVFO_br.ie&&fo.scrollArea.baseHeight>foHeight){show_scrollers=''
fo.scrollArea.style.overflow='hidden'
if(foHeight<40)foHeight=40
fo.scrollArea.style.height=foHeight-36}else{fo.scrollArea.style.height=foHeight=fo.scrollArea.baseHeight}fo.baseTop=PLVFO_getTop(e)-(PLVFO_br.ie?1:0)-2
if(e.foid>0&&PLVFO_br.ie)fo.baseTop-=PLVFO_flyouts[e.foid].scrollArea.scrollTop
fo.baseLeft=PLVFO_getLeft(e)+parseInt(e.offsetWidth)+(PLVFO_br.ie?2:2)
fo.style.left=fo.baseLeft+'px'
if(fo.baseTop<topLimit)fo.baseTop=topLimit
if(foHeight+fo.baseTop>bottomLimit){var t=bottomLimit-foHeight
fo.baseTop=t<topLimit?topLimit:t}fo.upScr.style.display=show_scrollers
fo.dwnScr.style.display=show_scrollers
fo.upScBorder.style.display=show_scrollers
fo.dnScBorder.style.display=show_scrollers
fo.style.top=fo.baseTop+'px'
fo.style.display=''
if(fo.baseLeft+fo.offsetWidth+22-docLeft>docWidth)fo.style.left=(fo.baseLeft=(e.foid==0?docWidth-22+docLeft:PLVFO_flyouts[e.foid].baseLeft+1)-fo.offsetWidth)+'px'
for(var i=1;i<=4;i++){var ss=fo.shadows[i].style
ss.position='absolute'
ss.left=fo.baseLeft+i+'px'
ss.top=fo.baseTop+i+'px'
ss.width=fo.offsetWidth+'px'
ss.height=fo.offsetHeight+'px'
ss.backgroundColor=PLVFO_br.opera||PLVFO_br.safari?'#B0B0B0':'#000000'
ss.zIndex=5-i
var opacity=5*(6-i)
ss.filter='alpha(opacity='+opacity+')'
ss.MozOpacity=opacity/100
ss.display=''}}function PLVFO_removeFlyout(foid){var fo=PLVFO_flyouts[foid]
fo.open=false
if(fo.intr)return
fo.intr=true
PLVFO_hideFlyout(fo)}function PLVFO_hideFlyout(fo){fo.style.display='none'
fo.scrollArea.scrollTop=0
fo.upArrow.src=PLVFO_UP_ARROW_DISABLED
fo.downArrow.src=PLVFO_DOWN_ARROW
for(var i=1;i<=4;i++){fo.shadows[i].style.display='none'}fo.intr=false
if(fo.open)PLVFO_showFlyout()}function PLVFO_scroll(){var offset=PLVFO_scroll_start+(PLVFO_getTime()-PLVFO_scroll_time)*PLVFO_scroll_delta
var fo=PLVFO_flyouts[PLVFO_currentItem.foid]
fo.scrollArea.scrollTop=offset
fo.upArrow.src=offset<=0? PLVFO_UP_ARROW_DISABLED:PLVFO_UP_ARROW
fo.downArrow.src=offset>=fo.scrollArea.scrollHeight-fo.scrollArea.offsetHeight? PLVFO_DOWN_ARROW_DISABLED:PLVFO_DOWN_ARROW}function PLVFO_preload(img){PLVFO_preloads[PLVFO_plIndex]=new Image
PLVFO_preloads[PLVFO_plIndex++].src=img}function PLVFO_insertCell(t){var tbody=document.createElement('tbody')
var row=document.createElement('TR')
var cell=document.createElement('TD')
t.appendChild(tbody)
tbody.appendChild(row)
row.appendChild(cell)
return cell}function PLVFO_getSource(evt){var e=PLVFO_br.ie?event.srcElement:evt.target
while(e&&(e.tagName!='TABLE'))
e=e.parentNode
return e}function PLVFO_getFoid(e){while(e&&(!e.foid)){e=e.parentNode}return e?e.foid:0}function PLVFO_getTop(e){var top=0
var abs=false
while(e&&(e.tagName!='BODY'||!abs)){if(e.style.position=='absolute')abs=true
top+=e.offsetTop
e=e.offsetParent}return top}function PLVFO_getLeft(e){var left=0
var abs=false
while(e&&(e.tagName!='BODY'||!abs)){if(e.style.position=='absolute')abs=true
left+=e.offsetLeft
e=e.offsetParent}return left}function PLVFO_getTime(){var time=new Date()
return time.valueOf()}function PLVFO_refreshNS(e){if(PLVFO_br.ie)return
with(e.style){var l=parseInt(left)
left=(l-0.1)+'px'
left=l+'px'}}
