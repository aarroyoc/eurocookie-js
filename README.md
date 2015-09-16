eurocookie-js
=============

eurocookie-js is a full, yet simple to use, library to request consent for cookies. It doesn't allow cookies until consent is granted. It also comes with the translated messages prepared to be shown to the users.

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

# Using Bower

```sh
bower install eurocookie-js --save
```

And remember to put the correct path destination

```html
<script src="bower_components/eurocookie-js/index.js"></script>
```
