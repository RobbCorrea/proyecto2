const express = require("express");
const router = express.Router();
const { isAuth } = require("../config/middlewareAuth");
const  uploader = require("../config/cloudinary");
const Puesto = require("../models/Puesto");

router.get("/new", isAuth, (req, res ) => {
  const { user } = req;

  res.render("newPuesto", { title: "New Puesto ", create: true, user });
});

router.post("/new", isAuth, uploader.array("images"), (req, res) => {
  const { user } = req;
  const {
    user: { _id: owner }
  } = req;

  const { name, price, description } = req.body;
  let images = req.files;
  if(!name || !description || !images) {
    let error = "Some fields are empty";
    return res.render("newPuesto", {
      title: "New Puesto",
      create: true,
      user,
      error
    });
  } else {
    images = req.files.map(file => file.secure_url);

    const puesto = {
      owner,
      price,
      name,
      description,
      images
    };

    console.log(puesto);

    Puesto.create(puesto)
    .then(newpuesto => {
      res.redirect("/profile");
    })
    .catch(error => {
      res.render("newPuesto", {
        title: "New Puesto",
        create: true,
        user,
        error
      });
    });
  }
});

module.exports = router;