function isValid(v){
  return ((typeof(v) !== typeof(undefined)) &&
          (v         !== false));
}

function eventSource(event){
  if(isValid(event.target))
    return event.target

  if(isValid(event.srcElement))
    return event.srcElement

  return null;
}