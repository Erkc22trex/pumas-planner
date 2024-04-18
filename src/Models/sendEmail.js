
const sendgrid = require ('@sendgrid/mail');
require('dotenv').config();

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

 const sendEmail = ({ to, from, templateId }) => {
    const msg = { to, from, templateId };
    return sendgrid.send(msg);
};

module.exports = sendEmail;