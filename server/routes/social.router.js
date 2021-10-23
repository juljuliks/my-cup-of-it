const router = require('express').Router();
const socialsController = require('../controllers/social.controllers');

router.post('/', socialsController.addSocials);
router.put('/:userId', socialsController.editSocials);

module.exports = router;
