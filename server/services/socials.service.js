const { nanoid } = require('nanoid');
const db = require('../db/models');

async function findSocialsByUserId(userId) {
  let socials;

  try {
    socials = await db.Social.findAll({
      where: { userId },
      raw: true,
    });
  } catch (e) {
    console.log(e);
  }

  socials = socials.map((el) => ({ [el.socialTitle]: el.url }));
  return socials;
}

async function addSocialToUser({ userId, socialTitle, url }) {
  try {
    if (url === '') return;
    await db.Social.create({
      id: nanoid(8), userId, socialTitle, url,
    });
  } catch (e) {
    console.log(e.message);
  }
}

async function editSocial({ userId, socialTitle, url }) {
  try {
    const existingSocials = await findSocialsByUserId(userId);
    const existingSocialsTitles = existingSocials.map((el) => Object.entries(el)[0][0]);
    if (url === '') {
      await db.Social.destroy({ where: { userId, socialTitle } });
      return;
    }
    if (existingSocialsTitles.indexOf(socialTitle) < 0) {
      await addSocialToUser({ userId, socialTitle, url });
      return;
    }
    await db.Social.update({ url }, { where: { userId, socialTitle } });
    return;
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = { findSocialsByUserId, addSocialToUser, editSocial };
