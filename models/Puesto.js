const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const puestoSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    required:true,
    ref: "User"
  },
  stallName: {
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

  images: {
    type: String,
  }
},

{ timestamps: true}
);

puestoSchema.index({
  location: "2dsphere"
});

module.exports = mongoose.model("Puesto", puestoSchema)