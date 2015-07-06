function windowResize(){
  var window = $(this);

  applyMini(window);

  var bodyHeight = (window.height() - 90).toString();
  var body       = $('#id_bodyContainer');

  $(body).css('height'    , bodyHeight);
  $(body).css('min-height', bodyHeight);
  $(body).css('max-height', bodyHeight);

  checkBodyScroll();
}

function loadMenuTab(tabName){
  if(!isValid(tabName))
    tabName = $('.tabular.menu .item.active').attr('data-tab');

  checkBodyScroll();

  var tab = $('div.tab[data-tab="' + tabName + '"]');

  if(isValid(tab.attr('loaded')))
    return;
  else
    tab.attr('loaded', '');

  setupFeedHeaders(tab);
  setupWebGLFeeds(tab);
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

function setupFeedHeaders(tab){
  tab.find('.feed').each(function(){
    var this_ = $(this);

    if(this_.hasClass('updated'))
      return true;

    this_.addClass('updated');

    var headerWidth = '0';

    var container = this_.find('.container');
    var ribbon    = $(container).find('.ribbon');
    var header    = $(container).find('.header');

    if(isValid(ribbon))
      headerWidth = (ribbon.outerWidth() - 20).toString();

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

    body.removeClass('noScroll');
  }
  else{
    topShadow.css('display', 'none');
    bottomShadow.css('display', 'none');

    body.addClass('noScroll');
  }
}

$(document).ready( function(){
  windowResize();
  loadMenuTab();

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
    onTabLoad: function(tabName){ loadMenuTab(tabName) }
  });

  //---[ Highlight ]----------
  $('.code.block').each( function(i, block){
    hljs.highlightBlock(block);
  });

  $('.tabBodyContainer').scroll(checkBodyScroll);
});