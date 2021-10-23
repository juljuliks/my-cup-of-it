/* eslint-disable no-restricted-syntax */
const socialsService = require('../services/socials.service');

async function addSocials(req, res) {
  const { id } = req.body;
  let { socials } = req.body;
  socials = Object.entries(socials);
  try {
    for await (const social of socials) {
      const [socialTitle, url] = social;
      await socialsService.addSocialToUser({ userId: id, socialTitle, url });
    }
    const usersSocials = await socialsService.findSocialsByUserId(id);

    res.status(201).json(usersSocials);
  } catch (e) {
    console.log(e.message);
    res.status(500).send('Что-то пошло не так');
  }
}

async function editSocials(req, res) {
  const { id } = req.body;
  let { socials } = req.body;
  socials = Object.entries(socials);
  try {
    for await (const social of socials) {
      const [socialTitle, url] = social;
      await socialsService.editSocial({ userId: id, socialTitle, url });
    }
    const usersSocials = await socialsService.findSocialsByUserId(id);

    res.status(201).json(usersSocials);
  } catch (e) {
    console.log(e.message);
    res.status(500).send('Что-то пошло не так');
  }
}

module.exports = { addSocials, editSocials };
