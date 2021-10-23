const router = require('express').Router();
const technologiesController = require('../controllers/technologies.controller');

router.get('/', technologiesController.getAllTechnologies);
router.post('/', technologiesController.createNewTechnology);
router.put('/:technologyId', technologiesController.editTechnology);
router.delete('/:technologyId', technologiesController.deleteTechnology);

module.exports = router;
