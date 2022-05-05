const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

// Category has many products, but a product can only belong to one category

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      // integer
      type: DataTypes.INTEGER,
      // doesn't allow NULL
      allowNull: false,
      // set as primary key
      primaryKey: true,
      // use auto increment
      autoIncrement: true,
    },
    category_name: {
      // string
      type: DataTypes.STRING,
      // doesn't allow null values
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
