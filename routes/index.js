const express = require("express");
const router = express.Router();
const { isAuth } = require("../config/middlewareAuth");
const Puesto = require("../models/Puesto");

/* GET home page */
router.get("/", isAuth, (req, res, next) => {
  const { user } = req;
  res.render("index", { user });
});

router.get("/home", isAuth, (req, res, next) => {
  const { user } = req;
  res.render("home", { title: "Home", user });
});

router.get("/profile", isAuth, (req, res, next) => {
  const { user } = req;
 
  Tatoo.find({ owner: user._id }).then(tatoos => {
    console.log(tatoos);
    res.render("profile", { title: "Profile", user, tatoos, help });
  });


  router.get("/card", isAuth, (req, res, next) => {
    const { user } = req;
    res.render("pruebaCard", { user });
  });
});

module.exports = router;
