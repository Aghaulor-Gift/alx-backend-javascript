// count student function that reads a file
const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  // Ensure path is absolute or resolve it relative to the current file
  const absolutePath = path.resolve(filePath);

  try {
    // Read the file synchronously
    const data = fs.readFileSync(absolutePath, 'utf8');
    
    // Split the file into lines
    const lines = data.trim().split('\n');
    
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Remove the header row and filter out empty lines
    const students = lines.slice(1).filter((line) => line.trim() !== '');

    console.log(`Number of students: ${students.length}`);

    // Initialize a map to store students by their field of study
    const fieldCounts = {};

    students.forEach((student) => {
      const [firstname, lastname, age, field] = student.split(',');

      if (fieldCounts[field]) {
        fieldCounts[field].push(firstname);
      } else {
        fieldCounts[field] = [firstname];
      }
    });

    // Log the number of students per field and their names
    for (const [field, firstnames] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Export the function
module.exports = countStudents;

