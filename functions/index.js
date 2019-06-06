const functions = require('firebase-functions');

const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
const user = functions.config().sendgrid.user;
const psword = functions.config().sendgrid.psword;

let transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: user,
    pass: psword
  }
});

exports.contact = functions.firestore
  .document('contact-submissions/{contact}')
  .onCreate((snap, context) => {
    const newContact = snap.data();
    const name = newContact.name;
    const email = newContact.email;
    const message = newContact.message;
    const date = newContact.dateSubmitted;

    try {
      transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: `"Megan Bailey" <megan@rockstarcreativestudio.com>`,
        subject: 'New Contact Form Submission from Portfolio Website',
        html: `New contact submission from the portfolio website.<br>\
      Name: ${name}<br>\
      Email: ${email}<br>\
      Message: ${message}<br>\
      Submitted on ${date}`
      });
    } catch (error) {
      console.error('Something has went terribly wrong!', error);
    }
    return null;
  });
