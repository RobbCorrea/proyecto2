const express = require("express");
const router = express.Router();
const { isAuth } = require("../config/middlewareAuth");
const { toProfile } = require("../config/middlewareAuth");
const authcontrollers = require("../controllers/authcontrollers");

router.get("/", isAuth, (req, res ) => {
    const { user } = req;
  
    res.render("tecnologiasHeyWero", {mensaje: 'Usando PUG jS en Express' });
  });



module.exports = router;