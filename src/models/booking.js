'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {

    static associate(models) {

    }
  };
  Booking.init({
    statusId: DataTypes.STRING,
    doctorId: DataTypes.INTEGER,
    patinedId: DataTypes.STRING,
    date: DataTypes.DATE,
    typeTime: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};