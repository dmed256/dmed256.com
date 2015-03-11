var compressed    = false;
var compressWidth = 600;

function compressBody(){
  $(".bodyContainer2").css('width', '210px')
}

function decompressBody(){
  $(".bodyContainer2").css('width', '610px');
}

function compressFeeds(){
  $(".decompressed.feed").addClass('hidden');
  $(".compressed.feed").removeClass('hidden');
}

function decompressFeeds(){
  $(".decompressed.feed").removeClass('hidden');
  $(".compressed.feed").addClass('hidden');
}

function compressFooter(){
  var bigFooter   = $('#id_bigFooter');
  var smallFooter = $('#id_smallFooter');

  bigFooter.css('display', 'none');
  smallFooter.css('display', 'inline-block');
}

function decompressFooter(){
  var bigFooter   = $('#id_bigFooter');
  var smallFooter = $('#id_smallFooter');

  bigFooter.css('display', 'inline-block');
  smallFooter.css('display', 'none');
}

function updateResize(){
  var compressing = ($(window).width() < compressWidth);

  if(compressing){
    if(!compressed){
      compressBody();
      compressFeeds();
      compressFooter();

      compressed = true;
    }
  }
  else{
    if(compressed){
      decompressBody();
      decompressFeeds();
      decompressFooter();

      compressed = false;
    }
  }
}

$(document).ready(function(){

  $('.ui.api.accordion').accordion({
    collapsible : false,
    active      : true,
    exclusive   : false
  });

  // Remove [active] on dropdown menus
  $('.top.menu .right.menu .topMenu.item .menu a.item')
    .off('click');

  //---[ Highlight ]---
  $('.code.block').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  // Force update
  compressed = !($(window).width() < compressWidth);
  updateResize();
});

$(window).on('resize', function(){
  updateResize();
});
