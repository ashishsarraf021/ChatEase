const express = require('express');
const { createMessageRoom } = require('../controllers/createChatRoom');
const router = express.Router();

router.post('/messages', createMessageRoom);

module.exports = router;
