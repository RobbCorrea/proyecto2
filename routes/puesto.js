const express = require("express");
const router = express.Router();
const { isAuth } = require("../config/middlewareAuth");
const Puesto = require("../models/Puesto");

router.get("/new", isAuth, (req, res) => {
  const { user } =req;

  res.render("newPuesto", { title: "New Puesto", create: true, user});
});

