"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("reports", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      location: {
        type: DataTypes.STRING
      },
      type: {
        type: DataTypes.STRING
      },
      title: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("reports").done(done);
  }
};
