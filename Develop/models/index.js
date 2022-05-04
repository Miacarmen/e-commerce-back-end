// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// category can have multiple products but a product can only belong to one category

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "product_tags",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: "ProductTag",
    unique: false,
  },
  as: "product_tags",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
