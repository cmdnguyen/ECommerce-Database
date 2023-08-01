// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
})
// Categories have many Products
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
