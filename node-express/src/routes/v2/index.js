const express = require('express');
const router = express.Router();

// Adding route handler from modules
router.use('/users', require('./users'));
router.use('/payments', require('./payments'));

module.exports = router;
