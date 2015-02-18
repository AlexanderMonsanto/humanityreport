"use strict";
module.exports = function(sequelize, DataTypes) {
  var report = sequelize.define("report", {
    location: DataTypes.STRING,
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return report;
};
