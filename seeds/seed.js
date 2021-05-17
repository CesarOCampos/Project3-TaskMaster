const sequelize = require('../config/connection');
const { Student, Project, Task } = require('../models');

const taskmasterData = require('./TaskMaster.json');
const studentData = require('./StudentData.json');
const projectData = require('./ProjectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const student = await Student.bulkCreate(studentData, {
    individualHooks: true,
    returning: true,
  });

  const task = await Task.bulkCreate(taskData, {
    individualHooks: true,
    returning: true,
  });

  // const reviews = await Review.bulkCreate(reviewData, {
  //   returning: true,
  // });

  const project = await Project.bulkCreate(projectData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();