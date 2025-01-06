// controllers/collectionController.js

const addAlbumToCollection = async (req, res) => {
    try {
      const album = req.body;
      // Logic to add album to the collection (e.g., save to a database)
      // Example: await Collection.add(album);
  
      res.status(200).json({ message: 'Album added to collection!' });
    } catch (error) {
      console.error('Error adding album to collection:', error);
      res.status(500).json({ error: 'Failed to add album to collection' });
    }
  };
  
  module.exports = { addAlbumToCollection };
  