const express = require("express");
const router = express.Router();
const { toProfile } = require("../config/middlewareAuth");
const authcontrollers = require("../controllers/authcontrollers");

router.get("/signup", toProfile, (req, res) => {
  res.render("register", { title: "SignUp" });
});

  router.post("/signup", toProfile, authcontrollers.signup);

router.get("/login", toProfile, (req, res ) => {
  res.render("login", { title: "Login" });
});

router.post("/login", toProfile ,authcontrollers.login);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = router;