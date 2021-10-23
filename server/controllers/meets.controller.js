const db = require('../db/models');

async function editMeets(req, res) {
  const { meetId } = req.params;
  const { status } = req.body;

  try {
    const [result] = await db.Meet.update({ status }, { where: { id: meetId } });
    if (!result) throw new Error();
    return res.sendStatus(201);
  } catch (e) {
    console.log(e);
    return res.status(500).send('Что-то пошло не так, проверьте подключение к интернету');
  }
}

async function editMeetDate(req, res) {
  const {
    id,
    comment = '',
    date = '',
  } = req.body;
  try {
    if (comment) await db.Meet.update({ comment }, { where: { id } });
    if (date) await db.Meet.update({ date }, { where: { id } });
    return res.sendStatus(201);
  } catch (e) {
    console.log(e);
    return res.status(500).send('Что-то пошло не так, проверьте подключение к интернету');
  }
}

module.exports = { editMeets, editMeetDate };
