function isValid(v){
  return ((typeof(v) !== typeof(undefined)) &&
          (v         !== false));
}

function windowResize(){
  var window = $(this);

  applyMini(window);

  var bodyHeight = (window.height() - 90).toString();
  var body       = $('#id_bodyContainer');

  $(body).css('height'    , bodyHeight);
  $(body).css('min-height', bodyHeight);
  $(body).css('max-height', bodyHeight);
}

function loadMenuTab(tab){
  if(tab == "webGL")
    initGL();

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
  $(".ui.active.tab div.feed").each(function(){
    var this_ = $(this);

    if(this_.hasClass('updated'))
      return true;

    var date  = this_.attr('date');
    var title = this_.attr('title');

    this_.removeAttr('date');
    this_.removeAttr('title');

    this_.addClass("ui raised updated segment");

    if(!isValid(date) &&
       !isValid(title)){

      return true;
    }

    this_.prepend('<div class="container">');
    this_.append('<div class="corner">');

    var container   = this_.find('.container');
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
  var tabContent = $('div[data-tab="' + activeTab.attr('data-tab') + '"]');

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
    onTabLoad: function(tab){ loadMenuTab(tab) }
  });

  //---[ Highlight ]----------
  $('.code.block').each( function(i, block){
    hljs.highlightBlock(block);
  });

  $('.tabBodyContainer').scroll(checkBodyScroll);

  //---[ Youtube ]------------
  $('iframe[class="youtube"]').each(function(){
    var iframe = $(this);

    iframe.wrap('<div class="youtubeContainer2"></div>');
    iframe.wrap('<div class="youtubeContainer" ></div>');

    iframe.attr('allowfullscreen', '');
    iframe.attr('frameborder'    , '0');

    var src = iframe.attr('src') + '?autohide=1&controls=0&showinfo=0';
    iframe.attr('src', src);
  });
});