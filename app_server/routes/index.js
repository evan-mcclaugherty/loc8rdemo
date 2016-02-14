"use strict";
let express = require('express');
let router = express.Router();
let ctrlLocations = require('../controllers/locations');
let ctrlOthers = require('../controllers/others');

/* GET home page. */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
router.get('/about', ctrlOthers.about);

module.exports = router;
