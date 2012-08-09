google-code-prettify wrapper
=======================

This repository provides a quick and clean way to add code syntax highlighting to any web page. You do not need to host any files to do so. It has no external dependencies and is written in pure javascript. It should work on any blog platform, such as WordPress, Tumblr, or Blogger.

# Problem

What problem are we trying to fix exactly? 

We want to color highlight the syntax of any text in a code block without modifying our html. Google Code Prettify does a great job of highlighting any syntax enclosed in a block with the "prettyprint"
 class (i.e. `<pre class="prettyprint">`). However, we want it to highlight syntax in ANY `<pre>` block. That way you don't have to mess with updating your html every time you make a new code block.

# Solution

While we could modify Google Code Prettify, this is not a clean and maintainable solution. So instead, we have a small wrapper javascript that you can include in your html (probably in your blog's template) that automatically adds the "prettyprint" class to all `<pre>` tags.

# Directions

###ONE:
Copy the code in below into your web page, at the end of the file right before `</body>`.
The end of your html template should look like this:

```html
<!-- ======================= Begin Prettify ============================-->
  <link rel="stylesheet" type="text/css" rel="stylesheet"
    href="http://github.mnewton.com/prettify-wrapper/themes/prettify.css">
  <script type="text/javascript"
    src="http://github.mnewton.com/prettify-wrapper/google-code-prettify/src/prettify.js">
    </script>
  <script type="text/javascript"
    src="http://github.mnewton.com/prettify-wrapper/styleCode.js"></script>
<!-- ======================== End Prettify =============================-->
</body>
</html>
```

###TWO (optional:)
Customize the theme by pointing the first line to a different CSS file, such as this one:
https://raw.github.com/mnewt/prettify-wrapper/master/tomorrow-night-mnewt.css


# Themes

There are a few themes included in the google-code-prettify package itself:
http://google-code-prettify.googlecode.com/svn/trunk/styles/index.html

[jmblog](https://github.com/jmblog) maintains some nice themes:
http://jmblog.github.com/color-themes-for-google-code-prettify/

Lastly, there are some themes hosted here. They are slightly modified versions of the ones found above.
 * http://mnewt.github.com/prettify-wrapper/themes/prettify.css
 * http://mnewt.github.com/prettify-wrapper/themes/tomorrow-mnewt.css
 * http://mnewt.github.com/prettify-wrapper/themes/tomorrow-night-mnewt.css
 * http://mnewt.github.com/prettify-wrapper/themes/tomorrow-night-eighties-mnewt.css