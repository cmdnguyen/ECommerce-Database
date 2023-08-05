// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
//Import database connection
const sequelize = require('../config/connection');

//Initialize the ProductTag Model by extending off Sequlize's Model class
class ProductTag extends Model {}

//sets up fields and rules for the ProductTag model
ProductTag.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
