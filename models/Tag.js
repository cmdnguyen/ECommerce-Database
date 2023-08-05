// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
//Import database connection
const sequelize = require('../config/connection.js');

//Initialize the Tag Model by extending off Sequlize's Model class
class Tag extends Model {}

//sets up fields and rules for the Tag model
Tag.init(
  {
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
