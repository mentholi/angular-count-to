# Angular Count-To

This project is an animated counter for Angularjs. The directive counts from one number to another over a configured duration.
[Demo](http://sparkalow.github.io/angular-count-to/)

## How to use angular count-to


Include the javascript file.

```
<script src="angular.count-to.min.js"></script>
```

Inject the `count-to` directive in your app.

```
var myApp = angular.module('myApp', ['count-to']);
```

Apply the directive to a dom element.
```
 <span count-to="{{countTo}}" value="{{countFrom}}" duration="4"></span>
```


### Attributes

The following attributes can be set as numbers on the directive element.

- ```count-to```  The number to count to.
- ```value```  The number to start counting from.
- ```duration```  How long the count should take in milliseconds (Default: 500).
- ```precision``` Number of decimals if count-to is a floating number.
- ```format``` Whether seperate a large number with comma. Valid values are "comma" or "".

