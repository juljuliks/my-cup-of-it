const db = require('./models');

async function testConnect() {
  try {
    await db.sequelize.authenticate();
    console.log('Connected to DB');
  } catch (e) {
    console.error('!!!!!!!!!!!!!', e.message);
  }
}

module.exports = testConnect;
