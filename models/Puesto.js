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
<<<<<<< HEAD
    description: String,
    lat: {type:Number, required: true},
    lng: {type:Number, required: true},
    image: {type: String, default:'g'}
  });
  
  const Puesto = mongoose.model('Puesto', puestoSchema);
  module.exports = Puesto;
=======

  priceMath: {
    type:Number
  },

  location: {
    type: {
      type: String,
      default:"Point"
    },

    address: {
      type: String
    },

    references: {
      type: String
    },

    coordinates: {
      type: Number
    }
  },

  products : [{type: String}],

  description: {
    type: String
  },

  businessHours : {
    type: String
  },

  images: [{type: String}]

},

{ timestamps: true}
);


module.exports = mongoose.model("Puesto", puestoSchema);
>>>>>>> Nuevo index para home
