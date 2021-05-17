const Student = require('./Student');
const Project = require('./Project');
const Task = require('./Task');

Task.belongsToMany(Student, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Project,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'task_studentdata'
});

Student.belongsToMany(Task, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Project,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'student_tasks'
});

module.exports = { Student, Project, Task };
