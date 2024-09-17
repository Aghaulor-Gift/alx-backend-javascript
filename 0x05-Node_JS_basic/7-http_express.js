const express = require('express');
const fs = require('fs');
const path = require('path');

// Create an Express application
const app = express();

// Function to read and parse the CSV file asynchronously
function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').slice(1).filter((line) => line);
      const fields = {};
      lines.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      let result = `Number of students: ${lines.length}\n`;
      for (const [field, names] of Object.entries(fields)) {
        result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
}

// Define a route for the root path
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

// Define a route for the /students path
app.get('/students', async (req, res) => {
  const filePath = req.query.file; // Get file path from query parameter
  if (!filePath) {
    res.status(400).send('File path is required');
    return;
  }

  try {
    const studentData = await countStudents(filePath);
    res.status(200).send(`This is the list of our students\n${studentData}`);
  } catch (err) {
    res.status(500).send('Cannot load the database');
  }
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the app variable
module.exports = app;
