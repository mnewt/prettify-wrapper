google-code-prettify wrapper
=======================

This repository provides a quick and clean way to add code syntax highlighting to any web page. You do not need to host any files to do so. It has no external dependencies and is written in pure javascript. It should work on any blog platform, such as WordPress, Tumblr, or Blogger.

# Problem

What problem are we trying to fix exactly? 

We want to color highlight the syntax of any text in a code block without modifying our html. Google Code Prettify does a great job of highlighting any syntax enclosed in a block with the "prettyprint"
 class (i.e. `<pre class="prettyprint">`). However, we want it to highlight syntax in ANY `<pre>` block. That way you don't have to mess with updating your html every time you make a new code block.

 Furthermore, since this needs to drop into an html document that presumably already has CSS defined for `<pre>` and/or `<code>` elements, we need to take special care to override such code, lest we do all this work for naught or--worse--use some CSS styles from the parent document and some defined here. To be honest though, I'm sure you will still have that problem on some sites. If you encounter such issues and manage to solve them, please send me a pull request and I'll add your new or modified theme.

# Solution

While we could modify Google Code Prettify, this is not a clean and maintainable solution. So instead, we have a small wrapper javascript that you can include in your html (probably in your blog's template) that automatically adds the "prettyprint" class to all `<pre>` and `<code>` tags.

# Directions

###STEP ONE:
Copy the code in below into your web page, at the end of the file right before `</body>`.
The end of your html template should look like this:


    <!-- ======================= Begin Prettify ============================-->
      <link rel="stylesheet" type="text/css"
        href="http://github.mnewton.com/prettify-wrapper/themes/prettify.css">
      <script type="text/javascript"
        src="http://github.mnewton.com/prettify-wrapper/wrapper.min.js"></script>
    <!-- ======================== End Prettify =============================-->
    </body>
    </html>

###STEP TWO (optional:)
Customize the theme by pointing the first line to a different CSS file, such as this one:
[http://github.mnewton.com/prettify-wrapper/themes/prettify.css](http://github.mnewton.com/prettify-wrapper/themes/prettify.css)


# Themes

There are a few themes included in the google-code-prettify package itself:

 * [http://google-code-prettify.googlecode.com/svn/trunk/styles/index.html](http://google-code-prettify.googlecode.com/svn/trunk/styles/index.html)

[jmblog](https://github.com/jmblog) maintains some nice themes:

 * [http://jmblog.github.com/color-themes-for-google-code-prettify/](http://jmblog.github.com/color-themes-for-google-code-prettify/)

Lastly, there are some themes hosted here. They are mostly slightly modified versions of the ones found above. Check them out at:

 * [https://github.com/mnewt/prettify-wrapper/tree/master/themes](https://github.com/mnewt/prettify-wrapper/tree/master/themes)