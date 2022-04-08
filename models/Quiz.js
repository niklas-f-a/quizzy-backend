const db = require('../database/connection')
const {DataTypes, Model} = require('sequelize')

class Quiz extends Model{}

Quiz.init({
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  imgFile: {
    type: DataTypes.STRING,
    allowNull: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{
  sequelize: db,
  modelName: 'Quiz',
  timestamps: false
})

module.exports = Quiz