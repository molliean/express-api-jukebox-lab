// routes/tracks.js

const express = require('express');
const router = express.Router();
const tracksCtrl = require('../controllers/tracks');

// post request to '/tracks/' endpoint
router.post('/', tracksCtrl.create);
// get request to '/tracks/' endpoint
router.get('/', tracksCtrl.index);
// get request to '/tracks/:id' endpoint
router.get('/:trackId', tracksCtrl.show);
// put request to '/tracks/:id' endpoint
router.put('/:trackId', tracksCtrl.update)
// delete request to '/tracks/:id' endpoint
router.delete('/:trackId', tracksCtrl.deleteTrack)

module.exports = router;


