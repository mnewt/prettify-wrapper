function hasClass(el, name) {
   return new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className);
}

function addClass(el, name)
{
   if (!hasClass(el, name)) { el.className += (el.className ? ' ' : '') +name; }
}

function styleCode()
{
  if (typeof disableStyleCode != "undefined") 
  {
    return;
  }
  var a = false;
  //var matches = document.body.getElementsByTagName("pre", "code");
  var matches = document.querySelectorAll("pre, code");
  for (var i = 0; i < matches.length; ++i)
  {
    addClass(matches[i], "prettyprint");
    a = true;
  }
  if (a) { prettyPrint() } 
}


window.onload = function() { styleCode(); };