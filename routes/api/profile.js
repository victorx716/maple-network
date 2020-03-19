const express = require('express');
const router = express.Router();

// @route   GET api/profile
// @desc    test route
// @access  Public
router.get('/', (req, res) => {
  res.send('testing profile route');
});

module.exports = router;
