const { nanoid } = require('nanoid');
const db = require('../db/models');

async function getAllCompanies(req, res) {
  let companies;
  try {
    companies = await db.Company.findAll({ raw: true, order: [['title', 'ASC']] });

    return res.json(companies);
  } catch (e) {
    console.log(e);
    return res.status(500).send('Что-то пошло не так, проверьте подключение к интернету');
  }
}

async function createNewCompany(req, res) {
  if (!req.session.user?.isAdmin) return res.status(401).send('У вас недостаточно полномочий');

  try {
    const newCompany = await db.Company.create({ ...req.body, id: nanoid(6) });

    return res.status(201).json(newCompany);
  } catch (e) {
    console.log(e);
    return res.status(500).send('Что-то пошло не так, проверьте подключение к интернету');
  }
}

async function editCompany(req, res) {
  if (!req.session.user?.isAdmin) return res.status(401).send('У вас недостаточно полномочий');
  const { companyId } = req.params;

  try {
    const [, [company]] = await db.Company.update(
      { title: req.body.title },
      { raw: true, where: { id: companyId }, returning: true },
    );

    return res.json(company);
  } catch (e) {
    console.log(e);
    return res.status(500).send('Что-то пошло не так, проверьте подключение к интернету');
  }
}

async function deleteCompany(req, res) {
  if (!req.session.user?.isAdmin) return res.status(401).send('У вас недостаточно полномочий');
  const { companyId } = req.params;
  try {
    await db.Company.destroy({ where: { id: companyId } });

    return res.status(200).send('Успешное удаление');
  } catch (e) {
    console.log(e);
    return res.status(500).send('Что-то пошло не так, проверьте подключение к интернету');
  }
}

module.exports = {
  getAllCompanies, createNewCompany, editCompany, deleteCompany,
};
