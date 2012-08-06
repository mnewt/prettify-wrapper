google-prettify-wrapper
=======================

Wraps Google Prettify into a nice little bow for easy inclusion into any website or blog


# Directions

1. copy the code in `reference.html` into your web page, at the end of the file right before `</body>`
The end of your file should look like this:
```html
<!--
===================================================
    Begin Google Prettify
=================================================== 
-->
  <link rel="stylesheet" 
    href="http://jmblog.github.com/color-themes-for-google-code-prettify/css/themes/tomorrow-night.css">

  <script src="http://google-code-prettify.googlecode.com/svn/trunk/src/prettify.js"
    type="text/javascript"></script>

  <script src="https://raw.github.com/mnewt/google-prettify-wrapper/master/styleCode.js"
    type="text/javascript"></script>
<!--
===================================================
    End Google Prettify
=================================================== 
-->
```
2. enjoy
3. if you like, you can customize the theme by pointing the first line to a different CSS file