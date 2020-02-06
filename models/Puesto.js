const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const puestoSchema = new Schema({
  
  locatario: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

  stallName: {
    type: String,
    required:true
  },

  price:{
    type: String,
    required:false
  },

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
