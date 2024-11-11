const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send email
const sendEmail = async (req, res) => {
  const { to, subject, text, html } = req.body; 

  // Create the email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: subject,
    text: text,
    html: html,
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully', info: info.response });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
};

module.exports = { sendEmail };
