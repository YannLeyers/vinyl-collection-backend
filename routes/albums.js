const express = require('express');
const Album = require('../models/Album');

const router = express.Router();

// Get all albums
router.get('/', async (req, res) => {
  const albums = await Album.find();
  res.json(albums);
});

// Add a new album
router.post('/', async (req, res) => {
  const newAlbum = new Album(req.body);
  const savedAlbum = await newAlbum.save();
  res.json(savedAlbum);
});

// Update an album
router.put('/:id', async (req, res) => {
  const updatedAlbum = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedAlbum);
});

// Delete an album
router.delete('/:id', async (req, res) => {
  await Album.findByIdAndDelete(req.params.id);
  res.json({ message: 'Album deleted' });
});

module.exports = router;
