const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    projectname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectdesc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectstatus: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "NOT STARTED"
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Project;
