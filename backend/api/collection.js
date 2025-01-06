// backend/api/collection.js
const express = require('express');
const router = express.Router();

// Example data store for collections
const collections = [];

// POST route to add an album to the collection
router.post('/add', (req, res) => {
  const { album } = req.body;
  
  if (!album) {
    return res.status(400).json({ message: "Album data is required" });
  }

  collections.push(album); // This is just a simple array; replace with actual database logic
  
  return res.status(201).json({ message: "Album added to collection", album });
});

module.exports = router;
