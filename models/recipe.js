'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recipe.belongsTo(models.Produce, {
        foreignKey: 'produceID',
      });
    }
  }
  Recipe.init({
    name: DataTypes.STRING,
    time: DataTypes.STRING,
    ingredients: DataTypes.TEXT,
    directions: DataTypes.TEXT,
    produceID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};