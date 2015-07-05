<?php include($_SERVER['DOCUMENT_ROOT'] . '/main.php'); ?>
<?php addHeader('David S Medina') ?>

<div id="id_body" class="fixed body">
  <h2 class="ui dividing header">
    <img src="/images/profile/david.jpg" class="ui rounded image avatar"></img>
    David Medina

    <div class="contact info">
      <a href="mailto:<?php email() ?>"            tooltip="Email"    class="f_os light tooltip"> <i class="large mail outline link icon"></i> </a>
      <a href="https://github.com/dmed256"         tooltip="Github"   class="f_os light tooltip"> <i class="large github square link icon"></i> </a>
      <a href="https://twitter.com/dmed256?>"      tooltip="Twitter"  class="f_os light tooltip"> <i class="large twitter outline link icon"></i> </a>
      <a href="http://www.linkedin.com/in/dmed256" tooltip="LinkedIn" class="f_os light tooltip"> <i class="large linkedin square sign link icon"></i> </a>
    </div>
  </h2>

  <div class="sidebar">
    <img src="/images/profile/david.jpg" class="ui rounded image" style="width: 200px; border-radius: 20px; margin: auto">

    <h4 class="ui dividing header" style="margin-bottom: 10px"> About me </h4>
    I'm really passionate about <?php highlight('coding') ?> and like to get out of my comfort zone for learning and producing neat stuff
    </br>
    </br>
    I've been lucky to work with an awesome advisor, <a href="http://tcew.github.io/" class="link">Professor Warburton</a>, and folks from national labs (LLNL, ANL)

    <h4 class="ui dividing header" style="margin-bottom: 10px"> Projects </h4>

    I'm currently focusing on <a href="http://libocca.org" class="link">OCCA</a>

    <h4 class="ui dividing header" style="margin-bottom: 10px"> Contact Info </h4>

    If anything I do is interesting to you, it would make my day to chat about it!

    <div style="width: 200px; margin: auto; padding: 20px 0 20px 0; text-align: center">
      <a href="mailto:<?php email() ?>"            tooltip="Email"    class="f_os light tooltip"> <i class="large mail outline link icon"></i> </a>
      <a href="https://github.com/dmed256"         tooltip="Github"   class="f_os light tooltip"> <i class="large github square link icon"></i> </a>
      <a href="https://twitter.com/dmed256?>"      tooltip="Twitter"  class="f_os light tooltip"> <i class="large twitter outline link icon"></i> </a>
      <a href="http://www.linkedin.com/in/dmed256" tooltip="LinkedIn" class="f_os light tooltip"> <i class="large linkedin square sign link icon"></i> </a>
    </div>
  </div> <!--[ Sidebar ]-->

  <div id="id_bodyContainer" class="container">
    <div id="id_bodyHeader">
      <div class="ui tabular menu">
        <!-- <a class="item "       data-tab="blog"    > Blog     </a> -->
        <a class="item active" data-tab="events"  > Events   </a>
        <a class="item"        data-tab="upcoming"> Upcoming </a>
        <a class="item"        data-tab="projects"> Projects </a>
        <!-- <a class="item "       data-tab="webGL">    WebGL    </a> -->
      </div>
    </div>
    <div id="id_bodyTopShadow"></div>
    <div id="id_bodyTLShadowCorner"></div>
    <!-- <div class="ui tab" data-tab="blog"> -->
    <!--   <div class="tabBodyContainer2"> -->
    <!--     <div class="tabBodyContainer"> -->
    <!--       <?php addTabContent('blog') ?> -->
    <!--     </div> -->
    <!--   </div> -->
    <!-- </div> -->
    <div class="ui active tab" data-tab="events">
      <div class="tabBodyContainer2">
        <div class="tabBodyContainer">
          <?php addTabContent('events') ?>
        </div>
      </div>
    </div>
    <div class="ui tab" data-tab="upcoming">
      <div class="tabBodyContainer2">
        <div class="tabBodyContainer">
          <?php addTabContent('upcoming') ?>
        </div>
      </div>
    </div>
    <div class="ui tab" data-tab="projects">
      <div class="tabBodyContainer2">
        <div class="tabBodyContainer">
          <?php addTabContent('projects') ?>
        </div>
      </div>
    </div>
    <!-- <div class="ui tab" data-tab="webGL"> -->
    <!--   <div class="tabBodyContainer2"> -->
    <!--     <div class="tabBodyContainer"> -->
    <!--       <?php addTabContent('webGL') ?> -->
    <!--     </div> -->
    <!--   </div> -->
    <!-- </div> -->
    <div id="id_bodyBLShadowCorner"></div>
    <div id="id_bodyBottomShadow"></div>
    <!-- <div id="id_bodyFooter"></div> -->
  </div>
</div>

<?php addFooter(); ?>