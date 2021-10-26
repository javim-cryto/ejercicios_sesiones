const express = require('express');
const router = express.Router();

// Getting sequelize config
const db = require('../../db');

// GET /
router.get('/', async (req, res) => {
  const users = await db.models.Users.findAll();

  return res.json({
    message: 'Users from API V1',
    data: users,
  });
});

// POST /
router.post('/', (req, res) => {
  return res.json({});
});

module.exports = router;
