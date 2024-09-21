// unittest for 0-calcul
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return correct sum when no rounding is needed', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
    assert.strictEqual(calculateNumber(2.0, 2.0), 4);
  });

  it('should round down fractional numbers and return correct sum', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);  // Rounds both down
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);  // Rounds only b down
  });

  it('should round up fractional numbers and return correct sum', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);  // Rounds b up
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);  // Rounds a up
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);  // Rounds both up
  });

  it('should handle edge case with trailing 9s in fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);  // Rounds both down
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1.6, -0.4), -2);  // Both round down
    assert.strictEqual(calculateNumber(-1.4, 1.4), 0);    
  });
});
