/* eslint-disable no-restricted-syntax */
const { nanoid } = require('nanoid');
const db = require('../db/models');

async function findTecnnologiesByUserId(userId) {
  try {
    const stack = await db.Stack.findAll({
      attributes: [
        [db.sequelize.literal('"Technology"."id"'), 'id'],
        [db.sequelize.literal('"Technology"."category"'), 'category'],
        [db.sequelize.literal('"Technology"."title"'), 'title'],
      ],
      raw: true,
      where: {
        userId,
      },
      include: {
        model: db.Technology,
        attributes: [],
      },
    });
    return stack;
  } catch (e) {
    throw new Error(e.message);
  }
}

async function addStackToUser(technologies, userId) {
  if (!technologies.length) return;
  const technologiesArr = technologies.split(',');
  try {
    for await (const tech of technologiesArr) {
      await db.Stack.create({ id: nanoid(8), userId, technologyId: tech });
    }
  } catch (e) {
    console.log(e);
  }
}

async function clearUserStack(userId) {
  try {
    await db.Stack.destroy({ where: { userId } });
  } catch (e) {
    console.log(e);
  }
}

module.exports = { findTecnnologiesByUserId, addStackToUser, clearUserStack };
