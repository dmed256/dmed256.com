<?php

function _addHeader($pageTitle){
  ob_start();

  include($_SERVER['DOCUMENT_ROOT'] . '/header.php');
  $headerContents = ob_get_contents();

  ob_end_clean();

  echo str_replace('<!--TITLE-->', $pageTitle, $headerContents);
}

function addHeader($pageTitle){
  _addHeader($pageTitle);
  startBody();
  startBodyWrapper();
}

function startBody(){
  echo ('<body>');
}

function startBodyWrapper(){
  echo ('<div id="id_bodyWrapper">' .
        '  <div id="id_bodyWrapper2">');
}

function endBody(){
  echo ('</body>');
}

function endBodyWrapper(){
  echo ('  </div>' .
        '</div>');
}

function addFooter(){
  endBodyWrapper();
  endBody();

  include($_SERVER['DOCUMENT_ROOT'] . '/footer.php');
}

function absInclude($path){
  include($_SERVER['DOCUMENT_ROOT'] . $path);
}

function addSelected($tag){
  if(basename($_SERVER['PHP_SELF'], '.php') == $tag){
    echo 'selected';
  }
  else {
    $path     = dirname($_SERVER['PHP_SELF'] . '.php');
    $pathDirs = explode('/', $path);

    // ~/[documentation]
    if($pathDirs[1] == $tag)
      echo 'selected';

    echo ' ' . $pathDirs[3] . ' ';
  }
}

function addSubSelected($tag){
  if(basename($_SERVER['PHP_SELF'], '.php') == $tag){
    echo 'selected';
  }
  else {
    $path     = dirname($_SERVER['PHP_SELF'] . '.php');
    $pathDirs = explode('/', $path);

    // ~/documentation/API/[CPP]
    if($pathDirs[3] == $tag)
      echo 'selected';
  }
}

function apiPath(){
  $path     = dirname($_SERVER['PHP_SELF']) . '/' . basename($_SERVER['PHP_SELF'], '.php');
  $pathDirs = explode('/', $path);
  $pathDirs = array_slice($pathDirs, 0, 4);

  return implode('/', $pathDirs);
}

function sideLink($content, $link = ''){
  echo '<a href="#' . $link . '">' . $content . '</a>';
}

function sideAPILink($content, $link = ''){
  $link = apiPath() . '/#' . $link;

  echo '<a href="' . $link . '">' . $content . '</a>';
}

function wrapCode($content, $lang = 'cpp'){
  echo '<pre class="' . $lang . ' api inline code block" style="overflow: auto">' . $content . '</pre>';
}

function wrapCodeL($content, $lang = 'cpp'){
  $path = basename($_SERVER['PHP_SELF'], '.php');
  echo '<a href="' . $path . '/' . $content . '" class="link"><code class="' . $lang . ' api inline code block" style="color: rgb(81, 134, 174)">' . $content . '</code></a>';
}

function wrapAPICode($content, $link, $lang = 'cpp'){
  // Append link to API path
  $link = apiPath() . '/' . $link;

  echo '<a href="' . $link . '" class="link"><code class="' . $lang . ' api inline code block" style="color: rgb(81, 134, 174)">' . $content . '</code></a>';
}

function wrapCodeH($content, $lang = 'cpp'){
  echo '<code class="' . $lang . ' api inline code block boxed">' . $content . '</code>';
}

function highlight($content, $color = '#2BB399', $tag = 'span'){
  if($color[0] != '#'){
    $tag   = $color;
    $color = '#2BB399';
  }

  echo '<' . $tag . ' class="highlight" style="color: ' . $color . '">' . $content . '</' . $tag . '>';
}

function highlight2($content, $tag = 'span'){
  highlight($content, '#CF8BC7', $tag);
}

function warning($content){
  echo '<span class="warning">' . $content . '</span>';
}

function ready($color){
  switch($color){
  case 'g': echo '<i class="c ready g check square icon"></i>'; break;
  case 'y': echo '<i class="c ready y check square icon"></i>'; break;
  case 'r': echo '<i class="c ready r check square icon"></i>'; break;
  }
}

function emptyReady(){
  echo '<div style="width: 20px; height: 1px; display: inline-block"></div>';
}

function addCodeFromFile($filename, $language = 'c_cpp'){
  echo '<pre class="code block" language="' . $language . '">' . file_get_contents($_SERVER['DOCUMENT_ROOT'] . $filename) . '</pre>';
}

function startFunctionAPI($title, $isDone = 'done'){
  echo
    '<div class="ui fluid styled api accordion">';

  addFunctionTitleAPI($title, $isDone);
}

function nextFunctionAPI($title, $isDone = 'done'){
  echo
    '  </div>';

  addFunctionTitleAPI($title, $isDone);
}

function addFunctionTitleAPI($title, $isDone = 'done'){
  echo
    '  <div class="api title ' . $isDone . '">' .
    '    <pre class="cpp api code block">' . $title . '</pre>' .
    '  </div>' .
    '  <div class="api content">';
}

function endFunctionAPI(){
  echo
    '  </div>' .
    '</div>'   .
    '<div class="dSpacing2"></div>';
}

function addCopyright($startYear){
  if(intval($startYear) == @date('Y'))
    echo '&copy ' . intval($startYear);
  else
    echo '&copy ' . intval($startYear) . ' - ' . @date('Y');
}

function email(){
  echo 'dmed256@gmail.com?Subject=Hi';
}

function addTabContent($tab){
  include($_SERVER['DOCUMENT_ROOT'] . '/' . $tab . 'Content.php');
}

?>
