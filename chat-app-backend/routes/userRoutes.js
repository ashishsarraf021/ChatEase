const express = require('express');
const { createUser } = require('../controllers/userController');
const {sendReq} =require('../controllers/sendReqController');
const authenticateUser = require('../middleware/auth');
const { reqList } = require('../controllers/requestsList');
const { acceptReq } = require('../controllers/acceptRequests');
const { createChatRoom} = require('../controllers/createChatRoom');
const router = express.Router();

router.post('/users', createUser);
router.post('/send-req',authenticateUser, sendReq);
router.get('/requests',authenticateUser, reqList);
router.post('/accept-request',authenticateUser, acceptReq,createChatRoom);

module.exports = router;
