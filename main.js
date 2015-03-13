function checkBodyScroll(){
  var activeTab  = $('.active.item', '#id_bodyHeader .menu');
  var tabContent = $('div[data-tab="' + activeTab.attr('data-tab') + '"');

  var bodyWrapper = $(tabContent).find('.tabBodyContainer2');
  var body        = $(bodyWrapper).find('.tabBodyContainer');

  var topShadow    = $('#id_bodyTopShadow');
  var bottomShadow = $('#id_bodyBottomShadow');

  if(bodyWrapper[0].scrollHeight < body[0].scrollHeight){
    var bodyScrollTop    = body.scrollTop();
    var bodyScrollBottom = body[0].scrollHeight - (bodyScrollTop + body.height());

    if(0 < bodyScrollTop)
      topShadow.css('display', 'block');
    else
      topShadow.css('display', 'none');

    if(bodyScrollBottom <= 20)
      bottomShadow.css('display', 'none');
    else
      bottomShadow.css('display', 'block');
  }
  else{
    topShadow.css('display', 'none');
    bottomShadow.css('display', 'none');
  }
}

$(document).ready( function(){

  $('.ui.api.accordion').accordion({
    collapsible : false,
    active      : true,
    exclusive   : false
  });

  $('#id_bodyHeader .menu .item').tab({
    context: '#id_bodyContainer',
    history: true,
    path   : '/'
  });

  //---[ Highlight ]---
  $('.code.block').each( function(i, block){
    hljs.highlightBlock(block);
  });

  $('.feed').each( function(){
    if( $(this).is('[dividerText]') ){
      var feedData = $(this).attr('dividerText');
      $(this).before('<div class="ui horizontal divider feedDivider">' + feedData + '</div>');
    }
  });

  checkBodyScroll();

  $('.tabBodyContainer').scroll(checkBodyScroll);

  $('#id_bodyHeader .menu .item').click( function(e) {
    checkBodyScroll()
  });

  // From [davidsimpson.me]
  $('iframe[src^="//www.youtube.com/embed"]').each(function(){
    var url = $(this).attr("src");
    var separator = (url.indexOf('?') > 0) ? '&' : '?';
    $(this).attr('src', url + separator + 'rel=0&wmode=transparent');
  });
});