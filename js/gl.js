var glEnabled = false;

if(glEnabled){
  window.requestAnimFrame = (function(){
    return (window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function(callback){
              window.setTimeout(callback, 1000/60);
            });
  })();
}

//---[ Shaders ]------------------------
var shader = null;

function getGLContext(canvas){
  var glc = null;

  var contextNames     = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'];
  var contextNameCount = contextNames.length;

  for(var i = 0; i < contextNameCount; ++i){
    try {
      glc = canvas[0].getContext(contextNames[i],
                                 {alpha                 : false,
                                  depth                 : false,
                                  antialias             : false});

      glc.viewport(0, 0, canvas.attr('width'), canvas.attr('height'));
    }
    catch(e){
      glc = null;
    }

    if(glc)
      break;
  }

  return glc;
}

function createShader(glc, shaderType, shaderSource){
  var shader = glc.createShader(shaderType);
  glc.shaderSource(shader, shaderSource);
  glc.compileShader(shader);

  if(glc.getShaderParameter(shader, glc.COMPILE_STATUS) != 0){
    var log = glc.getShaderInfoLog(shader);

    if(2 < log.length)
      console.log("Shader Build Log:\n" + log);
  }

  return shader;
}

function createVertexShader(glc, shaderSource){
  return createShader(glc, glc.VERTEX_SHADER, shaderSource);
}

function createFragmentShader(glc, shaderSource){
  return createShader(glc, glc.FRAGMENT_SHADER, shaderSource);
}

function setupProgram(glc, vs, fs){
  var program = glc.createProgram();

  glc.attachShader(program, vs);
  glc.attachShader(program, fs);

  glc.deleteShader(vs);
  glc.deleteShader(fs);

  glc.linkProgram(program);

  if(glc.getProgramParameter(program, glc.LINK_STATUS) != 0){
    var log = glc.getProgramInfoLog(program);

    if(2 < log.length)
      console.log("Shader Linking Log:\n" + log);

    glc.deleteProgram(program);
  }
}

function setupScreen(glc){
  var vertices = new Float32Array([-1.0, -1.0, 1.0,
                                   -1.0, -1.0, 1.0,
                                   1.0 , -1.0, 1.0,
                                   1.0,  -1.0, 1.0]);

  var vbo = glc.createBuffer();

  glc.bindBuffer(glc.ARRAY_BUFFER, vbo);
  glc.bufferData(glc.ARRAY_BUFFER, vertices, glc.STATIC_DRAW);
  glc.bindBuffer(glc.ARRAY_BUFFER, null);
}

function setupCanvas(canvas, glc){
  var fsFilename = canvas.attr('shader');
  canvas.removeAttr('shader');

  canvas.wrap('<center></center>');
  canvas.css('border', 'none');

  var vsSource = 'attribute vec2 p; void main(){ gl_Position = vec4(p.xy, 0.0, 1.0); }';
  var fsSource = $('.text').load('/shaders/' + fsFilename + '.glsl');

  var vs = createVertexShader(glc, vsSource);
  var fs = createFragmentShader(glc, fsSource);

  setupProgram(glc, vs, fs);
  setupScreen(glc);
}

function setupWebGLFeeds(tab){
  if(!glEnabled)
    return;

  tab.find('canvas').each(function(index){
    var canvas = $(this);
    var glc    = getGLContext(canvas);

    setupCanvas(canvas, glc);
  });
}