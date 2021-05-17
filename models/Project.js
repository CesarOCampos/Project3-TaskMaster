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
    task_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'task',
        key: 'id',
        unique: false
      },
    },
    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'student',
        key: 'id',
        unique: false
      },
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