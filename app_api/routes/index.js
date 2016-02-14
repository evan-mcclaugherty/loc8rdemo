"use strict";
let express = require('express');
let router = express.Router();
let ctrlLocations = require('../controllers/locations');
let ctrlReviews = require('../controllers/reviews');
let ctrlUsers = require('../controllers/users');


//CREATE new location
router.post('/locations', ctrlLocations.locationsCreate);
//READ list of locations
router.get('/locations', ctrlLocations.locationsListByDistance);
//READ specific location
router.get('/locations/:locationID', ctrlLocations.locationsReadOne);
//UPDATE specific location
router.put('/locations/:locationID', ctrlLocations.locationsUpdateOne);
//DELETE a specific location
router.delete('/locations/:locationID', ctrlLocations.locationsDeleteOne);

//CREATE a new reviewText
router.post('/locations/:locationID/reviews', ctrlReviews.reviewsCreate);
//READ a specific review
router.get('/locations/:locationID/reviews/:reviewID', ctrlReviews.reviewsReadOne);
//UPDATE a specific review
router.put('/locations/:locationID/reviews/:reviewID', ctrlReviews.reviewsUpdateOne);
//DELETE a specific review
router.delete('/locations/:locationID/reviews/:reviewID', ctrlReviews.reviewsDeleteOne);

module.exports = router;
