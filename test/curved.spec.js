// Filename: curved.spec.js  
// Timestamp: 2013.12.22-16:11:16 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

var curved = require('../curved');

describe("curved(bgn, end)(percent)", function () {

  it("should return bgn value given 0 (0%)", function () {  
    var curve = curved(0, 100, 'ease-end');
    expect( curve(0) ).toBe(0);
  });

  it("should return end value given 1 (100%)", function () {  
    var curve = curved(0, 100, 'ease-end');
    expect( curve(1) ).toBe( 100 );
  });

  it("should ease-end", function () {  
    var curve = curved(0, 100, 'ease-end'),
        curveArr = [],
        steps = 20, i, per, loopsteps = 19;

    for (i = 0; i < steps; i++) {
      per = i / loopsteps;    
      curveArr.push(curve(per));
    }

    expect( curveArr[18] ).toBe( 100 );    
  });

  it("should ease-out", function () {  
    var curve = curved(0, 100, 'ease-bgn'),
        curveArr = [],
        steps = 20, i, per, loopsteps = 19;

    for (i = 0; i < steps; i++) {
      per = i / loopsteps;    
      curveArr.push(curve(per));
    }

    expect( curveArr[1] ).toBe( 0 );    
  });

  it("should curve with a negative value", function () {  
    var curve = curved(-100, 100, 'ease-bgn'),
        curveArr = [],
        steps = 20, i, per, loopsteps = 19;
    
    for (i = 0; i < steps; i++) {
      per = i / loopsteps;    
      curveArr.push(curve(per));
    }

    expect( 
      curveArr[0] === -100 &&
      curveArr[19] === 100 &&
      curveArr[10] > -100 &&
      curveArr[10] < 100 
    ).toBe( true );    
  });

  it("should curve with two negative values", function () {  
    var curve = curved(-200, -100, 'ease-bgn'),
        curveArr = [],
        steps = 20, i, per, loopsteps = 19;
    
    for (i = 0; i < steps; i++) {
      per = i / loopsteps;    
      curveArr.push(curve(per));
    }

    expect( 
      curveArr[0] === -200 &&
      curveArr[19] === -100 &&
      curveArr[10] > -200 &&
      curveArr[10] < -100 
    ).toBe( true );    
  });

});
