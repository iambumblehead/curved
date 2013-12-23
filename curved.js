// Filename: curved.js
// Timestamp: 2013.12.22-20:26:59 (last modified)  
// Author(s): Dan Pupius (www.pupius.co.uk), Bumblehead (www.bumblehead.com)
//
// thanks to Daniel Pupius
// http://13thparallel.com/archive/bezier-curves/
//
// Bernstein Basis Function
// 1 = t + (1 - t)
//
// Bernstein Basis Function, cubed
// 1^3 = (t + (1 - t))^3
//
// Above Function, represented in terms of 1.
// » 1 = (t + (1 - t)) . (t^2 + 2t(1 - t) + (1 - t)^2)
// » 1 = t^3 + 3t^2(1 - t) + 3t(1 - t)^2 + (1 - t)^3
//
// each function
// B[1](t) = t^3
// B[2](t) = 3t^2(1 - t)
// B[3](t) = 3t(1 - t)^2
// B[4](t) = (1 - t)^3
//
// Where C is the control, and '[ ]' indicates subscript
// point = C[1]B[1](d) + C[2]B[2](d) + C[3]B[3](d) + C[4]B[4](d)
//
// Some changes to the scripting given at the link above:
// - given values are 'shifted' into a positive axis so that curves may be
//   generated when negative values are given.
// - xy values are stored in an array rather than an object

var curved = ((typeof module === 'object') ? module : {}).exports = (function () {

  function B1(t) { return t * t * t; }
  function B2(t) { return 3 * t * t * (1 - t); }
  function B3(t) { return 3 * t * (1 - t) * (1 - t); }
  function B4(t) { return (1 - t) * (1 - t) * (1 - t); }

  function getShift(x1, x2) {
    var min = Math.min(x1, x2);
    return min && -min;
  }

  // easeStr should be a string 'ease-end' or 'ease-bgn'
  return function (bgnCoord, endCoord, easeStr) {
    var shiftval = getShift(bgnCoord, endCoord),
        C1 = endCoord + shiftval,
        C4 = bgnCoord + shiftval,
        C2_3 = easeStr === 'ease-end' ? C1 : C4;

    return function (per) {
      return Math.round(
        C1 * B1(per) +
        C2_3 * B2(per) +
        C2_3 * B3(per) +
        C4 * B4(per)
      ) - shiftval;
    };
  };

}());





/*
Daniel,

I'd like your permission to put a modified-version of the script you 
demonstrate here on github and npmjs:
 - http://13thparallel.com/archive/bezier-curves/

Please let me know if this is OK and any other conditions or licensing terms 
you would choose.

my github profile is here: https://github.com/iambumblehead

I would like to use this as part of an animation engine I've made for a web 
browser. Fading the visibility of an element out or growing the height of an 
element.

Thank you for the terrific explanation and demonstration,

Chris


The full source of the modified version is here:

```
var curved = ((typeof module === 'object') ? module : {}).exports = (function () {

  function B1(t) { return t * t * t; }
  function B2(t) { return 3 * t * t * (1 - t); }
  function B3(t) { return 3 * t * (1 - t) * (1 - t); }
  function B4(t) { return (1 - t) * (1 - t) * (1 - t); }

  function getShift(x1, x2) {
    var min = Math.min(x1, x2);
    return min && -min;
  }

  // easeStr should be a string 'ease-end' or 'ease-bgn'
  return function (bgnCoord, endCoord, easeStr) {
    var shiftval = getShift(bgnCoord, endCoord),
        C1 = endCoord + shiftval,
        C4 = bgnCoord + shiftval,
        C2_3 = easeStr === 'ease-end' ? C1 : C4;

    return function (per) {
      return Math.round(
        C1 * B1(per) +
        C2_3 * B2(per) +
        C2_3 * B3(per) +
        C4 * B4(per)
      ) - shiftval;
    };
  };

}());
```
*/

