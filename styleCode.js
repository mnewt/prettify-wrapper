function addClass( classname, element ) {
    var cn = element.className;
    //test for existance
    if( cn == "undefined" ) {
        return;
    }
    //add a space if the element already has class
    if( cn != '' ) {
        classname = ' ' + classname;
    }
    element.className = cn + classname;
}


function styleCode()
{
  if (typeof disableStyleCode != "undefined") 
  {
    return;
  }
  var a = false;
  // iterate through all <pre> tags and add "prettyprint" class
  var matches = document.body.getElementsByTagName("pre");
  for (var i = 0; i < matches.length; ++i)
  {
    addClass("prettyprint", matches[i]);
    a = true;
  }
  if (a) { prettyPrint() } 
}



window.onload = function() { styleCode(); };
