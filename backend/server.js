// backend/server.js (or app.js)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Add this import
const collectionRoute = require('./api/collection'); // Import the collection route

const app = express();

app.use(cors());  // Enable CORS for all routes

app.use(bodyParser.json()); // Middleware to parse JSON bodies

// Use the collection route
app.use('/api/collection', collectionRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
