curved
======
**(c)[Daniel Pupius][0]** [MIT](#license), edited by [Bumblehead][0]
    
### Preface:

This is an edited version of [a script][2] created by [Daniel Pupius][0]. Daniel gives me permission publish this with my own changes -visit Dan's [web site][0].


[0]: http://pupius.co.uk/                              "daniel pupius"
[1]: http://www.bumblehead.com                            "bumblehead"
[2]: http://13thparallel.com/archive/bezier-curves/      "bezier-demo"

---------------------------------------------------------
#### <a id="install"></a>Overview:

provides values from a 'curved' set. See the examples:


```javscript
var curve, curveArr,
    steps = 20, 
    loopsteps = 19;
    
// build values from -100 to 100, 'slow' at the beginning
curve = curved(-100, 100, 'ease-bgn');
curveArr = [];
for (var i = 0, percent; i < steps; i++) {
    curveArr.push(curve(i / loopsteps));
}
console.log(curveArr.join(','));
// -100,-100,-100,-99,-98,-96,-94,-90,-85,-79,-71,-61,-50,-36,-20,-2,19,43,70,100
  
// build values from -100 to 100, 'slow' at the end
curve = curved(-100, 100, 'ease-end');
curveArr = [];
for (var i = 0, percent; i < steps; i++) {
    curveArr.push(curve(i / loopsteps));
}
console.log(curveArr.join(','));
// -100,-70,-43,-19,2,20,36,50,61,71,79,85,90,94,96,98,99,100,100,100
```

There is *no* error handling. The first two parameters to `curved` must be numbers or the script will break.

---------------------------------------------------------
#### <a id="install"></a>Install:

curved may be downloaded directly or installed through `npm`.

 * **npm**

 ```bash
 $ npm install curved
 ```

 * **Direct Download**
 
 ```bash
 $ git clone https://github.com/iambumblehead/curved.git
 ```

---------------------------------------------------------
#### <a id="test"></a>Test:

to run tests, use `npm test` from a shell.

```bash
$ npm test
```

---------------------------------------------------------
#### <a id="license">License:

 ![scrounge](http://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2013 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
