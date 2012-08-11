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
  var  preMatches = document.body.getElementsByTagName("pre");
  var codeMatches = document.body.getElementsByTagName("code");
  if (preMatches.length || codeMatches.length) {
    for (var i = 0; i <  preMatches.length; ++i) { addClass( preMatches[i], "prettyprint"); }
    for (var i = 0; i < codeMatches.length; ++i) { addClass(codeMatches[i], "prettyprint"); }
    prettyPrint()
  }
}


window.onload = function() { styleCode(); };