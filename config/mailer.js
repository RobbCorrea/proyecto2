const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS
  }
});

exports.transporter = transporter;

exports.sendEmailView = (req, res) => {
  res.render("sendmail");
};

exports.sendEmail = async (req, res) => {
  const { email, subject, message } = req.body;

  await transporter.sendMail({
    from: "Mi changarro Cdmx <edieveg316@gmail.com>",
    to: email,
    subject,
    text: message,
    html: `<b>${message}<b>`
  });

  res.render("message", { email, subject, message });
};