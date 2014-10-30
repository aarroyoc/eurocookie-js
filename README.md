eurocookie-js
=============

eurocookie-js is a fork from Google CookieChoices with async loading of cookies. Allowing users to not install cookies if they don't want it.

# Usage with npm + browserify

Install with _npm_

```
npm install eurocookie-js --save
```

If you need to install the cookies import the module and call _initCookie_

```js
var eurocookie=require("eurocookie-js");
eurocookie.initCookie();
```

It will load all script tags with the class cookielike this
```html
<script type="text/plain" class="cookie">
 //CALLING GOOGLE ANALYTICS
 ga.push(); ....
</script>
```

Remember that you must set the script type to "text/plain" to prevent the execution

# Manual usage

You can also use the manual method for Jekyll or basic HTML pages. Just look the code.
