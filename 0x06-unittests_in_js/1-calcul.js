// Upgrade the function you created in the previous task (0-calcul.js)
// Add a new argument named type at first argument of the function.
// type can be SUM, SUBTRACT, or DIVIDE (string)
function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB; // Standard summation
    case 'SUBTRACT':
      return roundedA - roundedB; // Standard subtraction
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error'; // Handle division by zero
      }
      return roundedA / roundedB; // Standard division
    default:
      throw new Error('Invalid operation type');
  }
}

module.exports = calculateNumber;
