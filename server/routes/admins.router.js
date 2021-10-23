const router = require('express').Router();
const adminsController = require('../controllers/admins.controller');

router.route('/')
  .post(adminsController.loginAdmin)
  .get(adminsController.getLoggedAdmin)
  .delete(adminsController.logoutAdmin);

module.exports = router;
