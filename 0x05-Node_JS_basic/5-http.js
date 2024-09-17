const http = require('http');
const fs = require('fs');
const path = require('path');

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

const app = http.createServer(async (req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello Holberton School!');
    } else if (req.url.startsWith('/students')) {
      const filePath = path.join(__dirname, 'database.csv');
      try {
        const studentData = await countStudents(filePath);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`This is the list of our students\n${studentData}`);
      } catch (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Cannot load the database');
      }
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not Found');
    }
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Method Not Allowed');
  }
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the server as a module
module.exports = app;
