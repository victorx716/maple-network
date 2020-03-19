const express = require('express');
const router = express.Router();

// @route   GET api/users
// @desc    test route
// @access  Public
router.get('/', (req, res) => {
  res.send('testing user route');
});

module.exports = router;
