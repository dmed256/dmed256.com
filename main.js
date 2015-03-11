$(document).ready( function(){

  $('.ui.api.accordion').accordion({
    collapsible : false,
    active      : true,
    exclusive   : false
  });

  // Remove [active] on dropdown menus
  $('.top.menu .right.menu .topMenu.item .menu a.item')
    .off('click');

  //---[ Highlight ]---
  $('.code.block').each( function(i, block){
    hljs.highlightBlock(block);
  });

  $('.feed').each( function(){
    var $feedData = $(this).attr('date');
    $(this).before('<div class="ui horizontal divider feedDivider">' + $feedData + '</div>');
  });
});