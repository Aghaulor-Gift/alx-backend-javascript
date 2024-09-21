const expect = require('chai').expect;
const calculateNumber = require('./1-calcul');


describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should correctly sum two rounded positive numbers', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('should correctly sum when rounding up both numbers', () => {
            expect(calculateNumber('SUM', 2.5, 3.5)).to.equal(7);
        });

        it('should handle cases where one or both numbers are already integers', () => {
            expect(calculateNumber('SUM', 5, 6)).to.equal(11);
        });
    });

    describe('SUBTRACT', () => {
        it('should correctly subtract two rounded positive numbers', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('should correctly subtract when rounding up/down', () => {
            expect(calculateNumber('SUBTRACT', 2.5, 1.3)).to.equal(2); // rounded to 3 - 1
        });

        it('should handle cases where one or both numbers are already integers', () => {
            expect(calculateNumber('SUBTRACT', 8, 6)).to.equal(2);
        });
    });

    describe('DIVIDE', () => {
        it('should correctly divide two rounded positive numbers', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return Error when dividing by 0', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });

        it('should handle cases where one or both numbers are already integers', () => {
            expect(calculateNumber('DIVIDE', 8, 2)).to.equal(4);
        });

        it('should handle division by negative numbers', () => {
            expect(calculateNumber('DIVIDE', 9, -3)).to.equal(-3);
        });
    });

    describe('Invalid operation type', () => {
        it('should throw an error for invalid operation type', () => {
            expect(() => calculateNumber('MULTIPLY', 2.5, 2.5)).to.throw(Error);
        });
    });
});
