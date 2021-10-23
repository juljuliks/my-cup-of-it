const router = require('express').Router();
const usersController = require('../controllers/users.controller');
const uploadPhoto = require('../middlewares/uploadFile.middleware');

router.get('/', usersController.getAllUsers);

router.patch('/:userId', usersController.patchUserProfile);

router.put('/:userId', uploadPhoto.single('userPhoto'), usersController.editUserProfile);

module.exports = router;
