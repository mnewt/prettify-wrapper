google-code-prettify wrapper
=======================

Wraps Google Code Prettify into a nice little bow for easy inclusion into any website or blog. Nothing new has been created here, it is packaged up nicely.


# Directions

**ONE**: copy the code in `reference.html` into your web page, at the end of the file right before `</body>`
The end of your html template should look like this:

```html
<!-- ======================= Begin Prettify ============================-->
  <link rel="stylesheet" 
    href="https://raw.github.com/mnewt/prettify-wrapper/master/google-code-prettify/src/prettify.css">
  <script 
    src="https://raw.github.com/mnewt/prettify-wrapper/master/google-code-prettify/src/prettify.js" 
    type="text/javascript"></script>
  <script src="https://raw.github.com/mnewt/prettify-wrapper/master/styleCode.js" 
    type="text/javascript"></script>
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