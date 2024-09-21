const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {

  describe('SUM', () => {
    it('should correctly sum two rounded positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.5), 4);
    });

    it('should correctly sum when one or both numbers are negative', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 2.5), 1);  // rounding -1 + 3
    });

    it('should correctly sum when rounding up both numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.5, 3.5), 7);  // rounded to 3 + 4
    });

    it('should handle cases where one or both numbers are already integers', () => {
      assert.strictEqual(calculateNumber('SUM', 5, 6), 11);
    });
  });

  describe('SUBTRACT', () => {
    it('should correctly subtract two rounded positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 2.3), 3);  // rounded to 6 - 3
    });

    it('should correctly subtract when rounding up/down', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 1.3), 2);  // rounded to 3 - 1
    });

    it('should correctly subtract when one or both numbers are negative', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.4, 2.5), -5);  // -2 - 3
    });

    it('should handle cases where one or both numbers are already integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 8, 6), 2);
    });
  });

  describe('DIVIDE', () => {
    it('should correctly divide two rounded positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.5, 2.3), 4);  // rounded to 9 / 2
    });

    it('should return Error when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.5, 0), 'Error');
    });

    it('should return Error when rounded b is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.5, 0.1), 'Error');  // rounded to 9 / 0
    });

    it('should correctly divide with negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8.5, 3.0), -3);  // rounded to -9 / 3
    });

    it('should handle cases where one or both numbers are already integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8, 2), 4);
    });

    it('should handle division by negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 9, -3), -3);
    });
  });

  describe('Invalid operation type', () => {
    it('should throw an error for invalid operation type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 2.5, 2.5), Error);
    });
  });
});
