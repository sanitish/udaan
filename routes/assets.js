const express = require('express');
const router = express.Router();

const assets = require('../controllers/assets');

router.post('/add-asset',assets.addAsset);
 router.get('/getAssets', assets.getAssets);

module.exports = router;
