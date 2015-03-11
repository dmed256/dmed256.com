<?php include($_SERVER['DOCUMENT_ROOT'] . '/main.php'); ?>
<?php addHeader('David S Medina') ?>

<div id="id_body" class="fixed body">
  <h2 class="ui dividing header"> David Medina </h2>

  <div class="sidebar">
    <img src="/images/profile/david.jpg" class="ui rounded image" style="width: 200px; border-radius: 20px; margin: auto">

    <h4 class="ui dividing header"> About me </h4>

    I'm really passionate about coding and like to get out of my comfort zone to learn and produce neat stuff

    </br>
    </br>
    Most of my research work deals with HPC / heterogeneous-computing with a focus on numerical methods

    <h4 class="ui dividing header"> Projects </h4>

    I'm currently mostly working on <a href="http://libocca.org" class="link">OCCA</a>
    </br>
    </br>
    I've been lucky to work with an awesome team led by <a href="http://tcew.github.io/" class="link">Professor Warburton</a> and have collaborated with cool folks at the Argonne Labs

    <h4 class="ui dividing header"> Contact Info </h4>

    If anything I do is interesting to you, it would make my day to chat about it!

    <div style="width: 200px; margin: auto; padding: 20px 0 20px 0; text-align: center">
      <a href="mailto:<?php email() ?>"                           tooltip="Email"    class="f_os light tooltip"> <i class="large mail outline link icon"></i> </a>
      <a href="https://github.com/dmed256"                        tooltip="Github"   class="f_os light tooltip"> <i class="large github square link icon"></i> </a>
      <a href="https://twitter.com/dmed256?>"                     tooltip="Twitter"  class="f_os light tooltip"> <i class="large twitter outline link icon"></i> </a>
      <a href="http://www.linkedin.com/pub/david-medina/50/3/17a" tooltip="LinkedIn" class="f_os light tooltip"> <i class="large linkedin square sign link icon"></i> </a>
    </div>
  </div> <!--[ Sidebar ]-->

  <div class="container">
    <!-- <div id="id_bodyHeader"></div> -->
    <div id="id_bodyTopShadow"></div>
    <div id="id_bodyContainer2">
      <div id="id_bodyContainer">
        <div class="feed" date="March 04-05, 2015">
          <h4 class="ui dividing header"> Rice Oil & Gas 2015: OCCA Tutorial + Talk </h4>
          Links to the: <a href="http://libocca.org/talks/riceOG15.pdf" class="link">Slides</a>, <a href="https://github.com/tcew/OG15" class="link">Source Code</a>
        </div>
        <div class="feed" date="March 03, 2015">
          <h4 class="ui dividing header"> OCCA Tutorials 02: Unified Virtual Address + Managed Memory + Shared Memory </h4>
          <iframe class="youtube" width="560" height="315" src="https://www.youtube.com/embed/9uiw3hzGCl4" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="feed" date="February 28, 2015">
          <h4 class="ui dividing header"> OCCA Tutorials 01: Installation + Introduction </h4>
          <iframe class="youtube" width="560" height="315" src="https://www.youtube.com/embed/XYf73mqQBLE" frameborder="0" allowfullscreen></iframe>
        </div>
        <!-- <div class="feed" date="March 03, 2015"></div> -->
        <!-- <div class="feed" date="March 03, 2015"></div> -->
        <!-- <div class="feed" date="March 03, 2015"></div> -->
        <!-- <div class="feed" date="March 03, 2015"></div> -->
      </div>
    </div>
    <div id="id_bodyBottomShadow"></div>
    <!-- <div id="id_bodyFooter"></div> -->
  </div>
</div>

<?php addFooter(); ?>
