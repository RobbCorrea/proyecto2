const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const puestoSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    required:true,
    ref: "User"
  },

  title: {
    type: String,
    required:true
  },

  price:{
    type:Number,
    required:true
  },

  location: {
    type: {
      type: String,
      default:"Point"
    },

    address: {
      type: String
    },

    coordinates: {
      type: Number
    }
  },

  description: {
    type: String
  },

  images: {
    type: String,
    required:true
  }
},

{ timestamps: true}
);

puestoSchema.index({
  location: "2dsphere"
});

module.exports = mongoose.model("Puesto", puestoSchema)