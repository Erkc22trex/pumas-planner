
const sgMail = require('@sendgrid/mail')
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'moisacerrato@gmail.com', // Change to your recipient
  from: 'pumas.planner24@gmail.com', // Change to your verified sender
  templateId: process.env.TEMPLATE_ID,
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })