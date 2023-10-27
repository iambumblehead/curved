// Filename: curved.spec.js  
// Timestamp: 2013.12.22-16:11:16 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

import test from 'node:test'
import assert from 'node:assert/strict'
import curved from './curved.js'

test("should return bgn value given 0 (0%)", () => {  
  var curve = curved(0, 100, 'ease-end');
  assert.strictEqual( curve(0), 0);
});

test("should return end value given 1 (100%)", () => {  
  var curve = curved(0, 100, 'ease-end');
  assert.strictEqual( curve(1),  100 );
});

test("should ease-end", () => {  
  var curve = curved(0, 100, 'ease-end'),
      curveArr = [],
      steps = 20, i, per, loopsteps = 19;

  for (i = 0; i < steps; i++) {
    per = i / loopsteps;    
    curveArr.push(curve(per));
  }

  assert.strictEqual(curveArr[18], 85);
});

test("should ease-out", () => {  
  var curve = curved(0, 100, 'ease-bgn'),
      curveArr = [],
      steps = 20, i, per, loopsteps = 19;

  for (i = 0; i < steps; i++) {
    per = i / loopsteps;    
    curveArr.push(curve(per));
  }

  assert.strictEqual( curveArr[1],  0 );    
});

test("should curve with a negative value", () => {  
  var curve = curved(-100, 100, 'ease-bgn'),
      curveArr = [],
      steps = 20, i, per, loopsteps = 19;
  
  for (i = 0; i < steps; i++) {
    per = i / loopsteps;    
    curveArr.push(curve(per));
  }

  assert.strictEqual( 
    curveArr[0] === -100 &&
      curveArr[19] === 100 &&
      curveArr[10] > -100 &&
      curveArr[10] < 100,  true );
});

test("should curve with two negative values", () => {  
  var curve = curved(-200, -100, 'ease-bgn'),
      curveArr = [],
      steps = 20, i, per, loopsteps = 19;
  
  for (i = 0; i < steps; i++) {
    per = i / loopsteps;    
    curveArr.push(curve(per));
  }

  assert.strictEqual( 
    curveArr[0] === -200 &&
      curveArr[19] === -100 &&
      curveArr[10] > -200 &&
      curveArr[10] < -100,  true );
});
