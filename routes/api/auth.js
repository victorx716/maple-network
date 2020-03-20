const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
// @route   GET api/auth
// @desc    test route
// @access  Public
router.get('/', auth, (req, res) => res.send('testing auth route'));

module.exports = router;
