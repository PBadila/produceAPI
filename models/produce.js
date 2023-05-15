'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produce extends Model {
    static associate(models) {
      // define association here
      Produce.hasMany(models.Recipe, {
        foreignKey: 'produceID',
      });
      Produce.hasMany(models.HealthFact, {
        foreignKey: 'produceID',
      });
    }
  }
  Produce.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Produce',
  });
  return Produce;
};