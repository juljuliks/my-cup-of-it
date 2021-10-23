const router = require('express').Router();
const { nanoid } = require('nanoid');
const sendEmailToUser = require('./emailingLogic');

const meetsService = require('../services/meets.service');
const meetsController = require('../controllers/meets.controller');
const { Meet, User, sequelize } = require('../db/models');

router.post('/', async (req, res) => {
  try {
    const {
      userEmail, mentorId, interviewerId, date, comment,
    } = await req.body.payload;
    const whoIswriting = await User.findByPk(mentorId);
    const interviewee = whoIswriting.firstname;
    const usertoInterview = await User.findByPk(interviewerId);
    const interviewer = `${usertoInterview.firstname} ${usertoInterview.lastname}`;

    sendEmailToUser(userEmail, interviewee, interviewer, comment, date);
    const existingMeets = await meetsService.findUpcomingMeets(
      req.body.payload.interviewerId,
      req.body.payload.mentorId,
    );
    if (existingMeets.length) {
      return res.status(400).send('У вас уже запланирована встреча с этим пользователем');
    }
    const newMeeting = await Meet.create({ id: nanoid(6), ...req.body.payload });
    const intervieweeId = newMeeting.mentorId;
    const newUserMeeting = await Meet.findOne({
      where: { id: newMeeting.id },
      attributes: [
        'id',
        'comment',
        'date',
        'status',
        [sequelize.literal('"Mentor"."firstname"'), 'firstname'],
        [sequelize.literal('"Mentor"."lastname"'), 'lastname'],
      ],
      raw: true,
      include: {
        model: User,
        as: 'Mentor',
        where: { id: intervieweeId },
        attributes: [],
      },
    });
    return res.json(newUserMeeting);
  } catch (err) {
    console.log(err);
    return res.status(500).send('Что-то пошло не так');
  }
});

router.patch('/:meetId', meetsController.editMeets);
router.put('/:meetId', meetsController.editMeetDate);

module.exports = router;
