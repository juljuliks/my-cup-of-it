const router = require('express').Router();
const companiesController = require('../controllers/companies.controller');

router.get('/', companiesController.getAllCompanies);
router.post('/', companiesController.createNewCompany);
router.put('/:companyId', companiesController.editCompany);
router.delete('/:companyId', companiesController.deleteCompany);

module.exports = router;
