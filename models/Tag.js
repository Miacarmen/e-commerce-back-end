const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

// Product can have multiple tags AND tags have many products
class Tag extends Model {}

Tag.init(
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
    tag_name: {
      // string
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
