

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>University and Jepson Herbaria Archives, University of California, Berkeley</title>
      <link rel="stylesheet" type="text/css" href="themes/herbaria/style.css" />
      <link rel="stylesheet" type="text/css" href="themes/herbaria/js/cluetip/jquery.cluetip.css" />

      <link rel="icon" type="image/ico" href="themes/herbaria/images/archon.ico"/>
      <!--[if lte IE 7]>
        <link rel="stylesheet" type="text/css" href="themes/herbaria/ie.css" />
        <link rel="stylesheet" type="text/css" href="themes/themes/herbaria/js/cluetip/jquery.cluetip.ie.css" />
      <![endif]-->
      <script type='text/javascript' src='packages/core/js/jquery.min.js'></script>
      <script type='text/javascript' src='packages/core/js/jquery-ui.custom.min.js'></script>
      <script type='text/javascript' src='packages/core/js/jquery-expander.js'></script>
      <script type="text/javascript" src="themes/herbaria/js/jquery.hoverIntent.js"></script>
      <script type="text/javascript" src="themes/herbaria/js/cluetip/jquery.cluetip.js"></script>
      <script type="text/javascript" src="themes/herbaria/js/jquery.corner.js"></script>
      <script type="text/javascript" src="themes/herbaria/js/jquery.scrollTo-min.js"></script>
      <script type='text/javascript' src='packages/core/js/archon.js'></script><script type='text/javascript' src='packages/digitallibrary/js/archon.js'></script>
      <script type="text/javascript">
         /* <![CDATA[ */
         imagePath = 'themes/herbaria/images';
         $(document).ready(function() {
            $('div.bground').corner('20px');
            $('div.mdround').corner('10px');
            $('div.smround').corner('5px');
            $('#dlsearchblock').corner('bottom 10px');
            $('div.listitem:nth-child(even)').addClass('evenlistitem');
            $('div.listitem:last-child').addClass('lastlistitem');
            $('#locationtable tr:nth-child(odd)').addClass('oddtablerow');
            $('.expandable').expander({
               slicePoint:       600,              // make expandable if over this x chars
               widow:            100,              // do not make expandable unless total length > slicePoint + widow
               expandPrefix:     '. . . ',         // text to come before the expand link
               expandText:         '[read more]',  //text to use for expand link
               expandEffect:     'fadeIn',         // or slideDown
               expandSpeed:      700,              // in milliseconds
               collapseTimer:    0,                // milliseconds before auto collapse; default is 0 (don't re-collape)
               userCollapseText: '[collapse]'      // text for collaspe link
            });
         });

         function js_highlighttoplink(selectedSpan)
         {
            $('.currentBrowseLink').toggleClass('browseLink').toggleClass('currentBrowseLink');
            $(selectedSpan).toggleClass('currentBrowseLink');
            $(selectedSpan).effect('highlight', {}, 300);
         }

         $(document).ready(function() {externalLinks();});
         $(window).unload(function() {});
         /* ]]> */
      </script>
      
   </head>
   <body>
      
      
<!-- Beginning of banner -->
<table class="banner" width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td colspan="5" align="center" valign="middle">&nbsp;</td>
  </tr>
  <tr>
    <td rowspan="5" width="12" align="center" valign="middle"></td>
    <td rowspan="3" width="120" align="center" valign="middle">
      <a href="http://ucjeps.berkeley.edu/uc/"><img src="http://ucjeps.berkeley.edu/common/images/uclogo_250.png" alt="University Herbarium (UC)" width="100" height="100" border="0" /></a></td>
    <td align="center">&nbsp;</td>
    <td rowspan="3" width="120" align="center" valign="middle">
      <a href="http://ucjeps.berkeley.edu/jeps/"><img src="http://ucjeps.berkeley.edu/common/images/JepsonLogoSmall.png" alt="Jepson Herbarium (JEPS)" width="100" height="100" border="0" /></a></td>
    <td rowspan="5" width="12" align="center" valign="middle"></td>
  </tr>

  <tr>
    <td align="center" valign="middle"><span class="bannerTitle">The University and Jepson Herbaria</span><br /></td>
  </tr>

  <tr>
     <td align="center" valign="top"><a href="http://www.berkeley.edu" class="bannerTagLine">University of California, Berkeley</a></td>
  </tr>

  <tr>
    <td align="center"><a href="http://ucjeps.berkeley.edu/uc/" class="logoText">University&nbsp;Herbarium</a></td>
    <td height="14" align="center"></td>
    <td align="center"><a href="http://ucjeps.berkeley.edu/jeps/" class="logoText">Jepson&nbsp;Herbarium</a></td>
  </tr>

  <tr>
    <td colspan="3" align="center"></td>
  </tr>
  
  <tr>
    <td height="8" colspan="5" align="center">&nbsp;</td>
  </tr>

  <tr class="bannerBottomBorder">
  	<td colspan="6" height="3"></td>
  </tr>

  <tr>
    <td colspan="6"><img src="/common/images/common_spacer.gif" alt="" width="1" height="1" border="0" /></td>
  </tr>
</table>
<!-- End of banner -->

<!-- Beginning of horizontal menu -->
<table class=horizMenu width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td>
<nav>
	<ul>
    	<li><a href="http://ucjeps.berkeley.edu/">Home</a></li>
        <li><a href="http://ucjeps.berkeley.edu/main/collections.html">About &#x25BE;</a>
        	<ul>
            	<!--<li><a href="#">University Herbarium</a></li>
                <li><a href="#">Jepson Herbarium</a></li></li>-->
                <li><a href="http://ucjeps.berkeley.edu/main/collections.html#UC">About the Collections</a></li>
                <li><a href="http://ucjeps.berkeley.edu/main/directory.html">People</a></li>
                <li><a href="http://ucjeps.berkeley.edu/main/guidelines.html">Visiting the Herbaria</a></li>
                <li><a href="http://ucjeps.berkeley.edu/main/volunteer.html">Volunteering</a></li>
                <li><a href="http://ucjeps.berkeley.edu/main/policies.html">Policies</a></li>
               <!-- <li><a href="http://ucjeps.berkeley.edu/main/questions.html">Herbaria FAQs</a></li>-->
                <li><a href="http://ucjeps.berkeley.edu/history/">History</a></li>
            </ul>
        </li>
        <li><a href="http://ucjeps.berkeley.edu/main/research/">Research &#x25BE;</a>
        	<ul>
            	<li><a href="http://ucjeps.berkeley.edu/main/research/faculty.html">Faculty Research Programs</a></li>
                <li><a href="http://ucjeps.berkeley.edu/Herb_Pubs.html">Herbarium Publications</a></li>
                <li><a href="http://ucjeps.berkeley.edu/jepsonflora/index.html">Jepson Flora Project</a></li>
                <li><a href="http://ucjeps.berkeley.edu/CPD/algal_research.html">Silva Center for Phycological <br />Documentation</a></li>
                <li><a href="http://ucjeps.berkeley.edu/bryolab/CPPP/">California Plant Phylodiversity Project</a></li>
                <!--<li><a href="http://ucjeps.berkeley.edu/bryolab/Bryolab.html">Mishler Lab</a></li>-->
                <!--<li><a href="http://ucjeps.berkeley.edu/Baldwin-Lab.html">Baldwin Lab</a></li>-->
                <!--<li><a href="#">American-Iranian<br /> Botanical Program</a></li>-->
            </ul>
        </li>
        <li><a href="http://ucjeps.berkeley.edu/main/databases.html">Databases &#x25BE;</a>
        	<ul>
            	<li><a href="http://ucjeps.berkeley.edu/specimens/">UC/JEPS Specimen Portal</a></li>
            	<li><a href="http://ucjeps.berkeley.edu/images/">UC/JEPS Image Collection</a></li>
                <li><a href="http://ucjeps.berkeley.edu/consortium/">Consortium of California Herbaria</a></li>
                <li><a href="http://ucjeps.berkeley.edu/bryolab/UC_bryophytes.html">Bryophyte Specimen Database</a></li>
                <li><a href="http://ucjeps.berkeley.edu/interchange/">Jepson Online Interchange</a></li>
                <li><a href="http://ucjeps.berkeley.edu/db/icpn/">Index of California Plant Names</a></li>
		
                <li><a href="http://ucjeps.berkeley.edu/INA.html">Index Nominum Algarum</a></li>
                <li><a href="http://ucjeps.berkeley.edu/db/JPNI.html">Jepson Place Name Index</a></li>
            </ul>
        </li>
        <li><a href="http://ucjeps.berkeley.edu/efloras.html">eFloras &#x25BE;</a>
        	<ul>
            	<li><a href="http://ucjeps.berkeley.edu/IJM.html">Jepson eFlora</a></li>
                <li><a href="http://ucjeps.berkeley.edu/CA_moss_eflora/">California Moss eFlora</a></li>
				<li><a href="http://ucjeps.berkeley.edu/seaweedflora.html">Seaweed Flora of California<br />(Upcoming)</a></li>
              <li><a href="http://ucjeps.berkeley.edu/efc/">Ecological Flora of California</a></li>
            </ul>
        </li>
        <li><a href="http://ucjeps.berkeley.edu/main/education.html">Education &amp; Outreach &#x25BE;</a>
        	<ul>
            	<li><a href="http://ucjeps.berkeley.edu/workshops/">Public Workshops</a></li>
                <li><a href="http://ucjeps.berkeley.edu/main/opportunities.html">Academic Opportunities</a></li>
                <li><a href="http://ucjeps.berkeley.edu/news/botanylunch/">Botany Lunch Seminar</a></li>
                <li><a href="http://ucjeps.berkeley.edu/jeps/globe/"><i>The Jepson Globe</i></a></li>
            </ul>
        </li>
        <li><a href="http://ucjeps.berkeley.edu/main/archives/index.html">Archives &#x25BE;</a>
        	<ul>
            	<li><a href="http://ucjeps.berkeley.edu/main/archives/archives_overview.html">Collections Overview</a></li>
                <li><a href="http://ucjeps.berkeley.edu/archon/">Archives Database</a></li>
                <li><a href="http://ucjeps.berkeley.edu/main/archives/images.html">Images</a></li>
                <li><a href="http://ucjeps.berkeley.edu/images/fieldbooks/jepson_fieldbooks.html">Jepson Field Books</a></li>
<!--                <li><a href="#">Inventory Report</a></li>
                <li><a href="#">Archives Policies</a></li>
                <li><a href="#">Library Collection</a></li> -->
            </ul>
        </li>
        <li><a href="http://ucjeps.berkeley.edu/main/directory.html">Contact</a></li>
        <li><a href="http://ucjeps.berkeley.edu/jeps/friends/index.html">Donate</a></li>
    </ul>
</nav>
</td>
</tr>
</table>
<!-- End of horizontal menu -->
<!--archives page menu-->
<table width="100%" border="0" cellpadding="0" cellspacing="0">
<tr><td width=100%  colspan=3> <p align="center"> 
  <span class="style2"><a href="index.html" class="style1">Archives Main Page</a>   |  
  <a href="archives_overview.html" class="style1">Overview of the Collections</a>  |  
  <a href="archives_policies.html" class="style1">Archives Policies</a> |  
  <a href="http://ucjeps.berkeley.edu/archon" class="style1">Searchable Database</a></span> 

 </p> </td></tr>

 
</table>


<!--end archives page menu-->
<!-- end Herbarium Banners and Menus here-->
      <div id="top">

         <div id="logosearchwrapper">
            <div id="logo"><a href="index.php" ><img src="themes/herbaria/images/logo.png" alt="logo" /></a> </div>
            <div id="searchblock">
               <form action="index.php" accept-charset="UTF-8" method="get" onsubmit="if(!this.q.value) { alert('Please enter search terms.'); return false; } else { return true; }">
                  <div>
                     <input type="hidden" name="p" value="core/search" />
                     <label for='qfa'></label><input type="text" size="25" maxlength="150" name="q" id="qfa" value="" tabindex="100" />
                     <input type="submit" value="Search" tabindex="300" class='button' title="Search" />
                     
                     <input type="hidden" name="content" value="1" />
                        
                  </div>
               </form>
            </div>
         </div>


         <div id="researchblock">
            <a href='#' onclick='$(window).scrollTo("#archoninfo"); if($("#userlogin").is(":visible")) $("#loginlink").html("Log In"); else $("#loginlink").html("Hide"); $("#userlogin").slideToggle("normal"); $("#ArchonLoginField").focus(); return false;'>Log In</a> | <a href='?p=collections/research&amp;f=email&amp;referer=ucjeps.berkeley.edu%2Farchon%2Findex.php'>Contact Us</a> | <a href='?p=collections/research&amp;f=cart&amp;referer=ucjeps.berkeley.edu%2Farchon%2Findex.php'>View Cart (0 items)</a>
         </div>


         
         <div id="browsebyblock">
            <span id="browsebyspan">
               Browse:
            </span>
            <span class="browseLink">
               <a href="?p=collections/collections" onclick="js_highlighttoplink(this.parentNode); return true;">Collections</a>
            </span>
            <span class="browseLink">
               <a href="?p=digitallibrary/digitallibrary" onclick="js_highlighttoplink(this.parentNode); return true;">Digital Content</a>
            </span>
            <span class="browseLink">
               <a href="?p=subjects/subjects" onclick="js_highlighttoplink(this.parentNode); return true;">Subjects</a>
            </span>
            <span class="browseLink">
               <a href="?p=creators/creators" onclick="js_highlighttoplink(this.parentNode); return true;">Creators</a>
            </span>
            <!--
            <span class="browseLink">
               <a href="?p=collections/classifications" onclick="js_highlighttoplink(this.parentNode); return true;">Record Groups</a>
            </span>-->
         </div>
      </div>
      <div id="breadcrumbblock"><span class='bold'>Location: </span>Archon</div>
      <div id="breadcrumbclearblock">.</div>
      <script type="text/javascript">
         /* <![CDATA[ */
         $('#searchblock').corner('5px');
         $('#browsebyblock').corner('tl 10px');
         /* ]]> */
      </script>
      <div id="main"><h1 id='titleheader'>University and Jepson Herbaria Archives, University of California, Berkeley</h1>
<div id="content_wrapper">
<div id="content">

<hr style="margin: 1em auto; width: 70%;"/>

<p>This database (ARCHON) provides access to finding aids for materials held by the University and Jepson Herbaria Archives. 
The finding aids represented in this searchable database range from the late 19th century to the present and
describe a wide variety of materials including correspondence, manuscripts and typescripts of botanical publications, research files, 
photographs, and field notes. These finding aids represent only a portion of the Archive's materials as new collections are added to the database on a 
continuing basis. For more information about our holdings, please visit the Herbaria Archives website. </p>
<!--rewrite this sections, copied from Southern Illinois University Carbondale Special Collections Research Center Archives Online 
Finding aids in Archon generally consist of a biographical or historical creator's note, a general contents note, 
an outline of the collection's sections or "series", relevant administrative information about copyright and restrictions, 
and a detailed container list of numbered boxes and folders along with a description of their contents.
-->
<p>
Researchers may view an alphabetical list of all collections by using the "Browse" tabs at the upper right of this page. 
To search finding aids by keyword, use the search box below.   </p>
<table width="100%" cellspacing="4" cellpadding="0" border="0">
<tbody>
<tr>
<td>
<div id='themeindex' class='bground'>
<table width="100%" cellpadding="0" cellspacing="4" border="0">
<tr>


<td valign="top">
    
    
    <div class="midcontainer">
    <span id="searchbox" class="title">Search all Finding Aids:</span>
    <div style="text-align: left; padding: 20px;">
    
    <form name="search" action="index.php" accept-charset="UTF-8" method="get" onsubmit="if(!$(this.q).getValue()) { alert('Please enter search terms.'); return false; } else { return true; }">
    	<fieldset>
			<input type="hidden" name="p" value="core/search" />

			<input type="text" class="textbox" maxlength="150" name="q" value="" style="width: 32em;" tabindex="1" /><br />
						<input id="BoxListField" type="checkbox" name="content" value="1"  tabindex="2" /><label for="BoxListField">Include Box Lists</label><p>Check "Include Box Lists" if you would like to search within box and folder lists in addition to the collection descriptions.</p>

						<input type="image" class="button rollover" src="themes/herbaria/searchbutton.png" alt="Search" tabindex="3" />
		</fieldset>
	</form>

</div>
<div style="text-align: left;">

	  <h3>Using Search:</h3>
		<dl>
		  <dt>Default Behaviors</dt>
		  <dd>
			<ul>
			  <li>The search engine looks for records containing every term you submit.</li>
			</ul>

		  </dd>
		 <dt>Search By Phrase</dt>
		  <dd>
			<ul>
			  <li>Use double quotes around your search query.  (e.g "Baja California")</li>
			</ul>
		  </dd>
		  <dt>Narrow Your Search Results</dt>

		  <dd>
			<ul>
			  <li>Use a minus sign before a term you want to omit from your results.  (e.g. 'bass -fish' finds bass guitars but not bass fishing.)</li>
			  <li>Browse by collection title, subject, name, or classification.</li>
			</ul>
		  </dd>

	  </dl>

     </div>
      </div>
	</td>




<td>
<div style="width:172 px; font-size:80%; text-align:center;"><img src="themes/herbaria/images/jepson.jpg" alt="Jepson with Cereus giganteus" width="width" height="height" 
style="padding-bottom:0.5em; padding-left:0.5em; padding-right:0.5em; " />
<br/><i>Cereus giganteus</i>, on the Colorado River. Photo: James Rennie, 1912. W. L. Jepson in foreground.</div>
<!--<img src="themes/herbaria/images/jepson.jpg"  width="172" height="300" />-->

</td>
</tr>
</tbody>
</table>

</div>
</div>
<!--default content for this page
<div id='themeindex' class='bground'>
<dl>
  <dt class='index'>Default Behaviors</dt>
  <dd class='index'>
    <ul>
      <li>The search engine looks for records containing every term you submit.</li>
    </ul>
  </dd>
  <dt class='index'>Search By Phrase</dt>
  <dd class='index'>
    <ul>
      <li>Use double quotes around your search query.  (e.g "Festival of Contemporary Arts")</li>
    </ul>
  </dd>
  <dt class='index'>Narrow Your Search Results</dt>
  <dd class='index'>
    <ul>
      <li>Use a minus sign before a term you want to omit from your results.  (e.g. 'bass -fish' finds bass guitars but not bass fishing.)</li>
      <li>Browse by collection title, subject, name, or classification.</li>
    </ul>
  </dd>
</dl>
</div>
-->

</div>
<div id="bottom">
    <br/>
    <hr id="footerhr" />
    <div id="userbox" class="smround">

<div id="userlogincontrols">
  <a id="loginlink" href="index.php?p=admin/core/login&amp;go=" onclick="if($('#userlogin').is(':visible')) {this.innerHTML = 'Log In';} else {this.innerHTML = 'Hide';} $('#userlogin').slideToggle('normal'); return false;">Log In</a>
  <a href="?p=core/register">Register</a>
</div>
<div id="userlogin" style="display:none">&nbsp;
    <form action="/archon/index.php" accept-charset="UTF-8" method="post">
    <div class='loginpair'>
    	<div class='loginlabel'><label for="ArchonLoginField">Login:</label></div>
      	<div class='logininput'><input id="ArchonLoginField" type="text" name="ArchonLogin" size="20" tabindex="400" /></div>
    </div>
    <div class='loginpair'>
      <div class='loginlabel'><label for="ArchonPasswordField">Password:</label></div>
      <div class='logininput'><input id="ArchonPasswordField" type="password" name="ArchonPassword" size="20" tabindex="500" /></div>
    </div>
      <div id='loginsubmit'>
	      <input type="submit" value="Log in" class="button" tabindex="700" />&nbsp;&nbsp;<label for="RememberMeField"><input id="RememberMeField" type="checkbox" name="RememberMe" value="1" tabindex="600" />Remember me?</label>
	  </div>
    </form>
</div>
  </div>
<div id='contactcontainer'><div id='repositorylink'><a href='http://ucjeps.berkeley.edu/'>University and Jepson Herbaria Archives, University of California, Berkeley</a></div>
<div id='emaillink'>Contact Us: <a href='?p=core/contact&amp;f=email&amp;referer=ucjeps.berkeley.edu%2Farchon%2Findex.php'>Email Form</a></div>
</div></div>
<!-- Begin footer -->
<table width="100%" border="0" cellpadding="0" cellspacing="0" id="footer">

  <tr>
    <td height="18" class="banner"><img src="http://ucjeps.berkeley.edu/common/images/common_spacer.gif" 
		  alt="" width="1" height="1" border="0" /></td>
  </tr>
  <tr>
    <td height="20"><span class="copyrightText">&nbsp;&nbsp;
		  <a href="http://ucjeps.berkeley.edu/main/copyright.html">Copyright</a> 
			&copy; 2010 Regents of the University of California &mdash; 
			Updated 
			<!-- #BeginDate format:Am1 -->March 8, 2010<!-- #EndDate -->

    </span></td>
  </tr>
</table>  
<!-- End footer -->

<div id="archoninfo">
   Page Generated in: 0.068 seconds (using 39 queries).<br/>

         Using 8.1MB of memory. (Peak of 8.25MB.)<br/>
            <br/>
   Powered by <a href='http://www.archon.org/'>Archon</a> Version 3.21 rev-2.1<br/>
      Copyright ©2012 <a href="http://www.uiuc.edu/" rel="external">The University of Illinois at Urbana-Champaign</a>   <br/>
      

</div>
</body>
</html>
   