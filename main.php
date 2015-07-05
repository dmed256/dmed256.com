<?php

function addHeader($pageTitle){
  ob_start();

  include($_SERVER['DOCUMENT_ROOT'] . '/header.php');

  $headerContents = ob_get_contents();

  ob_end_clean();

  echo str_replace('<!--TITLE-->', $pageTitle, $headerContents);
}

function addFooter(){
  include($_SERVER['DOCUMENT_ROOT'] . '/footer.php');
}

function absInclude($path){
  include($_SERVER['DOCUMENT_ROOT'] . $path);
}

function wrapCode($content, $lang = 'cpp'){
  echo '<pre class="' . $lang . ' api inline code block" style="overflow: auto">' . $content . '</pre>';
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

function addCodeFromFile($filename, $language = 'c_cpp'){
  echo '<pre class="code block" language="' . $language . '">' . file_get_contents($_SERVER['DOCUMENT_ROOT'] . $filename) . '</pre>';
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
  include($_SERVER['DOCUMENT_ROOT'] . '/' . $tab . '.php');
}

?>
