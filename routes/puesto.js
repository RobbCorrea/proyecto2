const express = require("express");
const router = express.Router();
const { isAuth } = require("../config/middlewareAuth");
const  uploader = require("../config/cloudinary");
const Puesto = require("../models/Puesto");

router.get("/new", isAuth, (req, res ) => {
  const { user } = req;
  res.render("newPuesto", { title: "New Puesto", create: true, user });
});


router.post('/new', (req,res,next) => {
  const { name, mainDish, openingTime, closingTime, averagePrice, diaBox1, diaBox2,
  diaBox3, diaBox4, diaBox5, diaBox6, diaBox7, address,
  description, lat, lng, image } = req.body;
  console.log(req.body);

  Puesto.create(req.body)
  .then(puesto => {
    console.log('se creo el puesto');
      res.json(puesto);
  });
 
});

module.exports = router;

