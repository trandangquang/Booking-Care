'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_Clinic_Specialty extends Model {

    static associate(models) {

    }
  };
  Doctor_Clinic_Specialty.init({
    doctorId: DataTypes.INTEGER,
    clinicId: DataTypes.INTEGER,
    specialId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Doctor_Clinic_Specialty',
  });
  return Doctor_Clinic_Specialty;
};