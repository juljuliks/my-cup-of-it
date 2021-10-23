const nodemailer = require('nodemailer');
const dayjs = require('dayjs');
require('dayjs/locale/ru');

async function sendEmailToUser(emailAddress, interviewee, interviewer, comment, date) {
  const newDate = dayjs(date);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mycupofit@gmail.com',
      pass: 'elbrus1111',
    },
  });
  const mailUser = {
    from: 'mycupofit@gmail.com',
    to: emailAddress,
    subject: 'Новый запрос на встречу',
    html: `
    <div>
    <h4>Приветствуем вас, ${interviewee}!</h4>
    <p style="width:500px; text-align: justify">Вы получили это сообщение, потому что пользователь ${interviewer}
    пожелал с вами встретиться. Ниже мы приводим его сообщение 
    и предложенное время встречи. Принять или отклонить это предложение вы
    можете в своем кабинете в mycupofit. <p> 
    <div>
    <div>сообщение от ${interviewer}: <u>${comment}</u></div>
    <div>предложенное время: <u>${newDate.locale('ru').format('dddd, MMMM D')} в ${newDate.format('HH:mm')}</u></div>
    </div>
    </div>`,
  };
  await transporter.sendMail(mailUser);
}

module.exports = sendEmailToUser;
