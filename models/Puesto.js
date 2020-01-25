const {model, Schema} = require('mongoose')

const puestoSchema = new Schema(
  {
    name: String,
    price: Number,
    description: String,
    Aaveragerating: Number,
    photo: {
      type: String,
      default:
        ""
    },
    owner: {
      ref: 'User',
      type: Schema.Types.ObjectId
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
)

module.exports = model('Puesto', puestoSchema)
