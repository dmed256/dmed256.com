var glEnabled = true;

var glHandles  = {};
var glHandleID = 0;
var glActiveID = -1;

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

function glHandle(){
  this.canvas  = null;
  this.id      = -1;

  this.context = null;
  this.program = null;
  this.vbo     = null;
}

glHandle.prototype.setupContext = function(canvas){
  var contextNames     = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'];
  var contextNameCount = contextNames.length;

  for(var i = 0; i < contextNameCount; ++i){
    try {
      this.context = canvas[0].getContext(contextNames[i],
                                          {alpha                 : false,
                                           depth                 : false,
                                           antialias             : false});

      this.context.viewport(0, 0,
                            canvas.attr('width'),
                            canvas.attr('height'));
    }
    catch(e){
      this.context = null;
    }

    if(this.context)
      break;
  }
}

glHandle.prototype.createShader = function(shaderType, shaderSource){
  var context = this.context;
  var shader  = context.createShader(shaderType);

  context.shaderSource(shader, shaderSource);
  context.compileShader(shader);

  if(context.getShaderParameter(shader, context.COMPILE_STATUS) != 0){
    var log = context.getShaderInfoLog(shader);

    if(2 < log.length)
      console.log("Shader Build Log:\n" + log);
  }

  return shader;
}

glHandle.prototype.createVertexShader = function(shaderSource){
  return this.createShader(this.context.VERTEX_SHADER,
                           shaderSource);
}

glHandle.prototype.createFragmentShader = function(shaderSource){
  return this.createShader(this.context.FRAGMENT_SHADER,
                           shaderSource);
}

glHandle.prototype.setupProgram = function(vs, fs){
  this.program = this.context.createProgram();

  var context = this.context;
  var program = this.program;

  context.attachShader(program, vs);
  context.attachShader(program, fs);

  context.deleteShader(vs);
  context.deleteShader(fs);

  context.linkProgram(program);

  if(context.getProgramParameter(program, context.LINK_STATUS) != 0){
    var log = context.getProgramInfoLog(program);

    if(2 < log.length)
      console.log("Shader Linking Log:\n" + log);

    context.deleteProgram(program);
  }
}

glHandle.prototype.setupView = function(){
  var context = this.context;

  var vertices = new Float32Array([-1.0, -1.0, 1.0,
                                   -1.0, -1.0, 1.0,
                                   1.0 , -1.0, 1.0,
                                   1.0,  -1.0, 1.0]);

  this.vbo = context.createBuffer();

  context.bindBuffer(context.ARRAY_BUFFER, this.vbo);
  context.bufferData(context.ARRAY_BUFFER, vertices, context.STATIC_DRAW);
  context.bindBuffer(context.ARRAY_BUFFER, null);
}

glHandle.prototype.draw = function(){
}

function startDrawing(){
  if(glActiveID < 0)
    return;

  var handle = glHandles[glActiveID];
  handle.draw();

  requestAnimFrame(function(){ startDrawing() });
}

function setupCanvas(canvas){
  var handle = new glHandle();

  // Setup the GL handle ID
  handle.canvas        = canvas;
  handle.id            = glHandleID++;
  glHandles[handle.id] = handle;

  canvas.attr('glHandleID', handle.id);

  // Create GL context
  handle.setupContext(canvas);

  // Setup canvas elements
  var fsFilename = canvas.attr('shader');
  canvas.removeAttr('shader');

  canvas.wrap('<center></center>');
  canvas.css('border', 'none');

  // Setup shaders
  var vsSource = 'attribute vec2 p; void main(){ gl_Position = vec4(p.xy, 0.0, 1.0); }';
  var fsSource = $('.text').load('/shaders/' + fsFilename + '.glsl');

  var vs = handle.createVertexShader(vsSource);
  var fs = handle.createFragmentShader(fsSource);

  handle.setupProgram(vs, fs);
  handle.setupView();

  // Add events
  canvas[0].onmouseover = function(event){
    var e = eventSource(event);

    if(!isValid(e))
      return;

    glActiveID = e.getAttribute('glHandleID');

    startDrawing();
  }

  canvas[0].onmouseout = function(event){
    glActiveID = -1;
  }
}

function setupWebGLFeeds(tab){
  if(!glEnabled)
    return;

  tab.find('canvas').each(function(index){
    setupCanvas($(this));
  });
}