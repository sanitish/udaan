const express = require('express');
const router = express.Router();

const assets = require('../controllers/assets');

router.post('',assets.addAsset);
 router.get('/all', assets.getAssets);

module.exports = router;
