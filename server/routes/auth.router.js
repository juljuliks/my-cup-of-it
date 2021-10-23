const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const uploadPhoto = require('../middlewares/uploadFile.middleware');

router.post('/register', uploadPhoto.single('userPhoto'), authController.registerUser);

router.post('/login', authController.loginUser);

router.get('/me', authController.getLoggedUser);

router.get('/logout', authController.logoutUser);

module.exports = router;
