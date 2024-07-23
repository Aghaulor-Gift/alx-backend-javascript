export default function iterateThroughObject(reportWithIterator) {
  const employees = [];
  
  // Collect all employees into the array
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  // Join the array into a string with ' | ' separator
  return employees.join(' | ');
}
