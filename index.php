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

  <div id="id_bodyContainer" class="container">
    <div id="id_bodyHeader">
      <div class="ui tabular menu">
        <a class="item active" data-tab="feed"    > Feed   </a>
        <a class="item"        data-tab="upcoming"> Upcoming </a>
        <a class="item"        data-tab="projects"> Projects </a>
      </div>
    </div>
    <div id="id_bodyTopShadow"></div>
    <div id="id_feedTab" class="ui active tab" data-tab="feed">
      <div class="tabBodyContainer2">
        <div class="tabBodyContainer">
          <?php addTabContent('feed') ?>
        </div>
      </div>
    </div>
    <div id="id_upcomingTab" class="ui tab" data-tab="upcoming">
      <div class="tabBodyContainer2">
        <div class="tabBodyContainer">
          <?php addTabContent('upcoming') ?>
        </div>
      </div>
    </div>
    <div id="id_projectsTab" class="ui tab" data-tab="projects">
      <div class="tabBodyContainer2">
        <div class="tabBodyContainer">
          <?php addTabContent('projects') ?>
        </div>
      </div>
    </div>
    <div id="id_bodyBottomShadow"></div>
    <!-- <div id="id_bodyFooter"></div> -->
  </div>
</div>

<?php addFooter(); ?>
