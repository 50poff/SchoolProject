const express = require('express');
const router = express.Router();
const passport = require('passport');

const msgAPIController = require('../controllers/msg-api');

const userAPIController = require('../controllers/user-api.js');

router.route('/msgs')
   .get(msgAPIController.getAllMessagesOrderedByLastPosted)
   .post(passport.authenticate('basic', { session: false }),
      msgAPIController.addNewMessage);

router.post('/users', userAPIController.registerNewUser);
router.get('/users/login',
   passport.authenticate('basic', { session: false }),
   userAPIController.loginUser);

module.exports = router;