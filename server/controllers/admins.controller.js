const bcrypt = require('bcrypt');

const db = require('../db/models');

async function loginAdmin(req, res) {
  const { admin, password } = req.body;

  let foundedAdmin;
  try {
    foundedAdmin = await db.Admin.findOne({
      raw: true,
      where: { admin },
    });
  } catch (e) {
    console.error(e.message);
    return res.status(500).send('Что-то пошло не так, проверьте подключение к интернету');
  }

  if (foundedAdmin) {
    const isSame = await bcrypt.compare(password, foundedAdmin.password);
    if (isSame) {
      delete foundedAdmin.password;

      req.session.user = foundedAdmin;

      return res.json(foundedAdmin);
    }
  }
  return res.status(404).send('Имя или пароль не совпадают');
}

async function getLoggedAdmin(req, res) {
  if (!req.session.user?.isAdmin) {
    return res.json({});
  }
  const { user } = req.session;

  return res.json(user);
}

async function logoutAdmin(req, res) {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Что-то пошло не так, проверьте подключение к интернету');
    }
    return res
      .clearCookie('user_sid')
      .sendStatus(200);
  });
}

module.exports = { loginAdmin, getLoggedAdmin, logoutAdmin };
