const express = require('express');
const router = express.Router();
const accountCtrl = require('../controllers/account');

router.get ('/',accountCtrl.show)
router.put('/', accountCtrl.update);



module.exports = router;
