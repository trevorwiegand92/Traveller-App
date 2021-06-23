const router = require('express').Router();
const { Trip } = require('../../models');


// CREATE a trip.//
router.post('/', async (req, res) => {
  try {
    const tripData = await Trip.create(req.body);
    res.status(200).json(tripData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a trip.//

module.exports = router;