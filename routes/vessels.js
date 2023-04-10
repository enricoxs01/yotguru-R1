const express = require('express');
const router = express.Router();
const vesselsCtrl = require('../controllers/vessels');
//const ensureLoggedIn = require('../config/ensureLoggedIn');

// you are in /vessels ! REMEMBER	
// Provide a list of vessels
router.get('/',vesselsCtrl.index);
// create a new vessel entry
router.get('/new', vesselsCtrl.new);
router.post('/', vesselsCtrl.create);
// show a selected vessel
//router.get('/:id', vesselsCtrl.show);
// Remove vessel*/

	
module.exports = router;