eurocookie-js
=============

eurocookie-js is a fork from Google CookieChoices with async loading of cookies. Allowing users to not install cookies if they don't want it.

# Features

* Block cookies before consent accept
* Multilanguage
* No dependencies
* Remembers consent

# Using npm + browserify

Install with _npm_

```
npm install eurocookie-js --save
```

If you need to install the cookies import the module and call _euroCookie_

```js
var ec=require("eurocookie-js");
ec.euroCookie("http://link-to-privacy-policy.com");
```

It will load all script tags with the class cookielike this
```html
<script type="text/plain" class="cookie">
 //CALLING GOOGLE ANALYTICS
 ga.push(); ....
</script>
```

Remember that you must set the script type to "text/plain" to prevent the execution

# Using script tag

__eurocookie-js__ can also be used with a simple script tag. Put it at the very end of the HTML file.

```html
  <script type="text/plain" class="cookie">
  console.log("We have cookie consent here");
  </script>
  <script src="eurocookie-js/index.js"></script>
  <script>
  euroCookie("http://link-to-privacy-policy.com");
  </script>
</body>
</html>
```
