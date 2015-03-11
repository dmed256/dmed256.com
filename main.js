function checkBodyScroll(){
  var bodyWrapper = $('#id_bodyContainer2');
  var body        = $('#id_bodyContainer');

  var topShadow    = $('#id_bodyTopShadow');
  var bottomShadow = $('#id_bodyBottomShadow');

  if(bodyWrapper[0].scrollHeight < body[0].scrollHeight){
    var bodyScrollTop    = body.scrollTop();
    var bodyScrollBottom = body[0].scrollHeight - (bodyScrollTop + body.height());

    var uShadow = 'inset 0   8px  8px  -8px #F19D5C';
    var dShadow = 'inset 0 -10px 10px -10px #5186AE';

    if(0 < bodyScrollTop)
      topShadow.css('box-shadow', uShadow);
    else
      topShadow.css('box-shadow', 'none');

    if(bodyScrollBottom <= 20)
      bottomShadow.css('box-shadow', 'none');
    else
      bottomShadow.css('box-shadow', dShadow);
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

  checkBodyScroll();
  body.scroll(checkBodyScroll)

  // From [davidsimpson.me]
  $('iframe[src^="//www.youtube.com/embed"]').each(function(){
    var url = $(this).attr("src");
    var separator = (url.indexOf('?') > 0) ? '&' : '?';
    $(this).attr('src', url + separator + 'rel=0&wmode=transparent');
  });
});