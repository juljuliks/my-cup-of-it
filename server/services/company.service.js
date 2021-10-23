const db = require('../db/models');

async function findCompanyById(companyId) {
  let company;

  if (companyId) {
    try {
      company = await db.Company.findOne({
        attributes: ['title'],
        where: { id: companyId },
        raw: true,
      });
    } catch (e) {
      console.log(e);
    }
    return company.title;
  }
  return '';
}

module.exports = { findCompanyById };
