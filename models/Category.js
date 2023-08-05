// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
//Import database connection
const sequelize = require('../config/connection.js');

//Initialize the Category Model by extending off Sequlize's Model class
class Category extends Model {}

//sets up fields and rules for the Category model
Category.init(
  {
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
