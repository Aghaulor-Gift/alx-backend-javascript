const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the app variable
module.exports = app;
