// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class

// Category has many products, but a product can only belong to one category

class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      // integer
      type: DataTypes.INTEGER,
      // doesn't allow null values
      allowNull: false,
      // set as primary key
      primaryKey: true,
      // use auto increment
      autoIncrement: true,
    },
    product_name: {
      // Decimal
      type: DataTypes.STRING,
      // doesn't allow null values
      allowNull: false,
      
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      // integer
      type: DataTypes.INTEGER,
      // doesn't allow null values
      allowNull: false,
      // set default of 10
      defaultValue: 10,
      // validate value as numeric
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      // integer
      type: DataTypes.INTEGER,
      // refrences 'Category model's id
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
