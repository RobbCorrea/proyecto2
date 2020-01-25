const {model, Schema} = require('mongoose')

const profileSchema = new Schema(
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
