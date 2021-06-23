const router = require('express').Router();
const { Traveller } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const travellerData = await Traveller.findAll();
        res.status(200).json(travellerData);
    } catch (err) {
        res.status(400).json(err);
      }
});

module.exports = router;
