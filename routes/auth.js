const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");
const nodemailer = require("nodemailer");

router.get("/login", (req, res) => {
  res.render("auth-login", { action: "Login"});
});

router.get("/register", (req, res) => {
  res.render("auth-login");
});

router.post("/login", (req, res) => {
  passport.authenticate("local", (err, user) => {
    if(err) {
      return res.render("auth-login", { err });
    }

    if(!user) {
      return res.render("auth-login", { err});
    }
    req.logIn(user, err => {
      if(err) {
        return res.render("auth-login", { err });
      }
      if(user.status === "pending") {
        return res.render("auth-login", {
          pending: "Please verify your email",
          action: "Login" 
        });
      }
      return res.redirect("/profile");
    });
  })(req, res, next);
});

router.post("/register", (req, res) => {
  const { password } = req.body;
  const characters = 
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ*+&$";
  let token = "";
  for (let i=0; i< 25; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }
  const confirmationCode = token;

  const user = { ...req.body, confirmationCode };

  User.register(user, password)
    .then(data => {
      transporter.sendMail({
        from: "HEYWERO<noreply@heywero.com>",
        to: data.email,
        subject: "Confirm your account werito at HEYWERO",

        text: `Hello ${data.username}
        Please wero dale click to confirm your HEYWERO account:
        ${req.headers.origin}/auth/confirm/${data.confirmationCode}
        Thanks!!.`
      });
        res.render("email-confirm", { data });
      })
      .catch(err => {
        res.render("auth-login", { err });
      });
  });

router.get("/confirm/:confirmCode", (req, res) => {
  User.find({ confirmationCode: req.params.confirmationCode })
  .then(user => {
    let id = user[0]._id;

    User.findByIdAndUpdate(id, { status: "confirmed" }, () => {
      let userEmail = user[0].email;
      let userId = user[0]._id;
      res.render("confirm", { userEmail, userId });
    });
  });
});

router.get("/loguot", (req, res) => {
  reg.logout();
  res.redirect("/");
});

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS
  }
});

module.exports = router;