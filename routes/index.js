const express = require('express');
const router = express.Router();

const Url = require('../models/Url');

// GET /:code   : Redirect to original URL
router.get('/:code', async (req, res) => {

    try {
        const url = await Url.findOne({ urlCode: req.params.code });

        if (url) {

            return res.redirect(url.longUrl);

        } else {
            return res.status(404).json('No Url found')
        }
    } catch (error) {

        console.error(error);
        res.status(500).json('Server Error')
    }
})

module.exports = router;