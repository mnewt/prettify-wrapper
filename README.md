google-code-prettify wrapper
=======================

Wraps Google Code Prettify into a nice little bow for easy inclusion into any website or blog. Nothing new has been created here, it is packaged up nicely.


# Directions

1. copy the code in `reference.html` into your web page, at the end of the file right before `</body>`
The end of your html template should look like this:
```html
<!-- ======================= Begin Prettify ============================-->
  <link rel="stylesheet" href="google-code-prettify/src/prettify.css">
  <script src="google-code-prettify-min/prettify.js" type="text/javascript"></script>
  <script src="styleCode.js" type="text/javascript"></script>
<!-- ======================== End Prettify =============================-->
</body>
</html>
```
2. enjoy
3. if you like, you can customize the theme by pointing the first line to a different CSS file

# Themes

There are a few themes included in the package itself:
http://google-code-prettify.googlecode.com/svn/trunk/styles/index.html

(https://github.com/jmblog)[jmblog] maintains some nice themes:
http://jmblog.github.com/color-themes-for-google-code-prettify/