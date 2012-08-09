google-code-prettify wrapper
=======================

This repository serves up google prettify. It allows you to add code highlighting to any page without hosting any files. It has no external dependencies--just pure javascript.


# Directions

**ONE**: copy the code in `reference.html` into your web page, at the end of the file right before `</body>`
The end of your html template should look like this:

```html
<!-- ======================= Begin Prettify ============================-->
  <link rel="stylesheet" type="text/css" rel="stylesheet"
    href="http://mnewt.github.com/prettify-wrapper/themes/prettify.css">
  <script type="text/javascript"
    src="http://mnewt.github.com/prettify-wrapper/google-code-prettify/src/prettify.js">
    </script>
  <script type="text/javascript"
    src="http://mnewt.github.com/prettify-wrapper/styleCode.js"></script>
<!-- ======================== End Prettify =============================-->
</body>
</html>
```
**TWO**: (optional): customize the theme by pointing the first line to a different CSS file, such as this one:
https://raw.github.com/mnewt/prettify-wrapper/master/tomorrow-night-mnewt.css


# Themes

There are a few themes included in the package itself:
http://google-code-prettify.googlecode.com/svn/trunk/styles/index.html

[jmblog](https://github.com/jmblog) maintains some nice themes:
http://jmblog.github.com/color-themes-for-google-code-prettify/

Lastly, here are some themes hosted here. They are slightly modified versions of the ones found above.
 * http://mnewt.github.com/prettify-wrapper/themes/prettify.css
 * http://mnewt.github.com/prettify-wrapper/themes/tomorrow-mnewt.css
 * http://mnewt.github.com/prettify-wrapper/themes/tomorrow-night-mnewt.css
 * http://mnewt.github.com/prettify-wrapper/themes/tomorrow-night-eighties-mnewt.css