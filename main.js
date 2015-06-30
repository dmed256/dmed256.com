function isValid(v){
  return ((typeof(v) !== typeof(undefined)) &&
          (v         !== false));
}

function windowResize(){
  var window = $(this);

  applyMini(window);

  var bodyHeight = window.height().toString();
  var body       = $('#id_bodyContainer');

  $(body).css('height'    , bodyHeight);
  $(body).css('min-height', bodyHeight);
  $(body).css('max-height', bodyHeight);
}

function loadMenuTab(){
  checkBodyScroll();
  setupFeedHeaders();
}

function applyMini(window){
  var tags = ['html',

              'body',
              '#id_body.fixed.body',
              '#id_bodyContainer',

              '#id_body .header',

              '.body .sidebar',

              '#id_bodyHeader',
              '#id_bodyFooter',

              '#id_footerWrapper',
              '#id_footerName',
              '#id_footerInfo'];

  var tagCount = tags.length;

  if(window.width() < 1024){
    for(var i = 0; i < tagCount; ++i){
      $(tags[i]).addClass('mini');
    }
  }
  else {
    for(var i = 0; i < tagCount; ++i){
      $(tags[i]).removeClass('mini');
    }
  }
}

function setupFeedHeaders(){
  $(".ui.tab.active div.feed").each(function(index){
    if($(this).hasClass('updated'))
      return true;

    var date  = $(this).attr('date');
    var title = $(this).attr('title');

    $(this).addClass("ui raised updated segment");

    if(!isValid(date) &&
       !isValid(title)){

      return true;
    }

    $(this).prepend('<div class="container">');

    var container   = $(this).find('.container');
    var headerWidth = '0';

    if(isValid(date)){
      $(container).append('<div class="ui right ribbon label">' + date + '</div>');

      var ribbon  = $(container).find('.ribbon');
      headerWidth = (ribbon.outerWidth() - 20).toString();
    }

    $(container).append('<h4 class="ui dividing header">' + title + '</h4>');

    var header = $(container).find('.header');

    header.css('width'      , 'calc(100% - ' + headerWidth + 'px)');
    header.css('margin-left', headerWidth + 'px');
  });
}

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

    var showingTop    = (0 < bodyScrollTop);
    var showingBottom = (bodyScrollBottom <= 20);

    if(showingTop)
      topShadow.css('display', 'block');
    else
      topShadow.css('display', 'none');

    if(showingBottom)
      bottomShadow.css('display', 'none');
    else
      bottomShadow.css('display', 'block');

    tabContent.removeClass('noScroll');
  }
  else{
    topShadow.css('display', 'none');
    bottomShadow.css('display', 'none');

    body.addClass('noScroll');
  }
}

$(document).ready( function(){
  windowResize();
  checkBodyScroll();

  $(window).on('resize', function(){ windowResize() });

  $('.ui.api.accordion').accordion({
    collapsible : false,
    active      : true,
    exclusive   : false
  });

  $('#id_bodyHeader .menu .item').tab({
    context: '#id_bodyContainer',
    history: true,
    path   : '/',
    onTabLoad: function(){ loadMenuTab() }
  });

  //---[ Highlight ]---
  $('.code.block').each( function(i, block){
    hljs.highlightBlock(block);
  });

  $('.tabBodyContainer').scroll(checkBodyScroll);

  // From [davidsimpson.me]
  $('iframe[src^="//www.youtube.com/embed"]').each(function(){
    var url = $(this).attr("src");
    var separator = (url.indexOf('?') > 0) ? '&' : '?';
    $(this).attr('src', url + separator + 'rel=0&wmode=transparent');
  });

});