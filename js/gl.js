function getGLContext(canvas){
  var glContext = null;

  var contextNames     = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'];
  var contextNameCount = contextNames.length;

  for(var i = 0; i < contextNameCount; ++i){
    try {
      glContext = canvas[0].getContext(contextNames[i],
                                       {alpha                 : false,
                                        depth                 : false,
                                        antialias             : false});
    }
    catch(e){
      glContext = null;
    }

    if(glContext)
      break;
  }

  return glContext;
}

function setupCanvas(canvas){
  canvas.wrap('<center></center>');
  canvas.css('border', 'none');
}

function initGL(){
  $('canvas').each(function(index){
    var canvas = $(this);

    getGLContext(canvas);
    setupCanvas(canvas);
  });
}