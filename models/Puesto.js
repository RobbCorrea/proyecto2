const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const puestoSchema = new Schema({
  name: {type: String, required: true },
  mainDish: {type: String, required: true},
  openingTime: String,
  closingTime: String, 
  averagePrice: Number,
  openingDays: [{ type: String, enum: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'] }],
  address: {type: String,
    required: true,
  },
    description: String,
    lat: {type:Number, required: true},
    lng: {type:Number, required: true},
    image: {type: String, default:'g'}
  });
  
  const Puesto = mongoose.model('Puesto', puestoSchema);
  module.exports = Puesto;