const { Op } = require('sequelize');
const db = require('../db/models');

async function findUserMeets(user) {
  const configMeets = {
    targetTable: user.isMentor ? 'Interviewer' : 'Mentor',
    targetPerson: user.isMentor ? 'mentorId' : 'interviewerId',
  };
  try {
    const userMeets = await db.Meet.findAll({
      attributes: [
        'id',
        'comment',
        'date',
        'status',
        [db.sequelize.literal(`"${configMeets.targetTable}"."id"`), 'userId'],
        [db.sequelize.literal(`"${configMeets.targetTable}"."firstname"`), 'firstname'],
        [db.sequelize.literal(`"${configMeets.targetTable}"."lastname"`), 'lastname'],
      ],
      raw: true,
      where: {
        [configMeets.targetPerson]: user.id,
      },
      include: { model: db.User, as: configMeets.targetTable, attributes: [] },
    });
    return userMeets;
  } catch (e) {
    throw new Error(e.message);
  }
}

async function findUpcomingMeets(interviewerId, mentorId) {
  let upcomingMeets;
  try {
    upcomingMeets = await db.Meet.findAll({
      where: {
        interviewerId,
        mentorId,
        status: {
          [Op.or]: ['pending', 'accepted'],
        },
      },
      raw: true,
    });
    return upcomingMeets;
  } catch (e) {
    throw new Error(e.message);
  }
}

module.exports = { findUserMeets, findUpcomingMeets };
