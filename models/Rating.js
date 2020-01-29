const {model, Schema} = require('mongoose')

const ratingSchema = new Schema(
  {
    name: String,
    img: {
      type: String,
      default: ''
    }
  },
  {}
)

module.exports = model('Profile', profileSchema)
