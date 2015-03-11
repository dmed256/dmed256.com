function checkBodyScroll(){
  var bodyWrapper = $('#id_bodyContainer2');
  var body        = $('#id_bodyContainer');

  if(bodyWrapper[0].scrollHeight < body[0].scrollHeight){
    var bodyScrollTop    = body.scrollTop();
    var bodyScrollBottom = body[0].scrollHeight - (bodyScrollTop + body.height());

    var uShadowColor = '#5186AE';
    var dShadowColor = '#F19D5C';

    if(0 < bodyScrollTop){
      if(20 < bodyScrollBottom)
        bodyWrapper.css('box-shadow', 'inset 0 10px 10px -10px' + uShadowColor + ', inset 0 -10px 10px -10px' + dShadowColor);
      else
        bodyWrapper.css('box-shadow', 'inset 0 10px 10px -10px' + uShadowColor);
    }
    else{
      if(20 < bodyScrollBottom)
        bodyWrapper.css('box-shadow', 'inset 0 -10px 10px -10px' + dShadowColor);
      else
        bodyWrapper.css('box-shadow', 'none');
    }
  }
}

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
    var feedData = $(this).attr('date');
    $(this).before('<div class="ui horizontal divider feedDivider">' + feedData + '</div>');
  });

  var body = $('#id_bodyContainer');

  body.scroll(checkBodyScroll)
});