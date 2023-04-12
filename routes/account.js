const express = require('express');
const router = express.Router();
const accountCtrl = require('../controllers/account');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const accountVerification = require('../config/accountVerification');

router.get ('/',ensureLoggedIn, accountVerification,accountCtrl.index)
router.put ('/',ensureLoggedIn, accountVerification, accountCtrl.update);



module.exports = router;
