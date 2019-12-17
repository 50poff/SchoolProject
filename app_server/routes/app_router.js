const express = require('express');
const router = express.Router();
const msgController = require('../controllers/msg');

/* msg home page. */
router.get('/', msgController.getMessages);

module.exports = router;