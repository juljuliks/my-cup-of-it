const { nanoid } = require('nanoid');
const db = require('../db/models');

async function getAllTechnologies(req, res) {
  try {
    const technologies = await db.Technology.findAll({ raw: true, order: [['title', 'ASC']] });
    return res.status(200).json(technologies);
  } catch (e) {
    console.error(e.message);
    return res.status(500).send('Что-то пошло не так, проверьте подключение к интернету');
  }
}

async function createNewTechnology(req, res) {
  if (!req.session.user?.isAdmin) return res.status(401).send('У вас недостаточно полномочий');

  try {
    const newTechnology = await db.Technology.create({ ...req.body, id: nanoid(6) });

    return res.status(201).json(newTechnology);
  } catch (e) {
    console.log(e);
    return res.status(500).send('Что-то пошло не так, проверьте подключение к интернету');
  }
}

async function editTechnology(req, res) {
  if (!req.session.user?.isAdmin) return res.status(401).send('У вас недостаточно полномочий');
  const { technologyId } = req.params;

  try {
    const [, [technology]] = await db.Technology.update(
      { title: req.body.title },
      { raw: true, where: { id: technologyId }, returning: true },
    );

    return res.json(technology);
  } catch (e) {
    console.log(e);
    return res.status(500).send('Что-то пошло не так, проверьте подключение к интернету');
  }
}

async function deleteTechnology(req, res) {
  if (!req.session.user?.isAdmin) return res.status(401).send('У вас недостаточно полномочий');
  const { technologyId } = req.params;

  try {
    await db.Technology.destroy({ where: { id: technologyId } });

    return res.status(200).send('Успешное удаление');
  } catch (e) {
    console.log(e);
    return res.status(500).send('Что-то пошло не так, проверьте подключение к интернету');
  }
}

module.exports = {
  getAllTechnologies, createNewTechnology, editTechnology, deleteTechnology,
};
