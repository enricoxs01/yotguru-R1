const express = require('express');
const router = express.Router();
const vesselsCtrl = require('../controllers/vessels');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const accountVerification = require('../config/accountVerification');

// you are in /vessels ! REMEMBER	
// Provide a list of vessels
router.get('/',ensureLoggedIn, accountVerification,vesselsCtrl.index);
// create a new vessel entry
router.get('/new', ensureLoggedIn, accountVerification, vesselsCtrl.new);
router.post('/', ensureLoggedIn, accountVerification,vesselsCtrl.create);


router.get('/:id/edit', ensureLoggedIn, accountVerification,vesselsCtrl.edit);
router.put('/:id/edit', ensureLoggedIn, accountVerification,vesselsCtrl.update);
router.get('/:id/delete', ensureLoggedIn, accountVerification,vesselsCtrl.confirm);
router.delete('/:id', ensureLoggedIn, accountVerification,vesselsCtrl.delete)

// show a selected vessel
router.get('/:id', ensureLoggedIn, accountVerification,vesselsCtrl.show);


	
module.exports = router;
