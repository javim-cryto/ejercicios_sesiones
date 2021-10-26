const express = require('express');
const router = express.Router();

// GET /
router.get('/', (req, res) => {
  return res.json({
    message: 'Payments from API V2',
    data: [],
  });
});

module.exports = router;
