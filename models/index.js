const Student = require('./Student');
const Project = require('./Project');
const Task = require('./Task');

// ONE-TO-MANY RELATIONSHIP BETWEEN STUDENTS AND TASKS
// A student can have/be assigned to many tasks
Student.hasMany(Task, {
  foreignKey: 'student_id',
});

// A task only belongs to one student
Task.belongsTo(Student, {
  foreignKey: 'student_id',
});



// ONE-TO-MANY RELATIONSHIP BETWEEN PROJECTS AND STUDENTS
// Projects have many students
Project.hasMany(Student, {
  foreignKey: 'project_id',
})

// Student belongs to one project
Student.belongsTo(Project, {
  foreignKey: 'project_id',
})



// ONE-TO-MANY RELATIONSHIP BETWEEN PROJECTS AND TASKS
// Projects have many tasks
Project.hasMany(Task, {
  foreignKey: 'project_id',
})

// Task belongs to one project
Task.belongsTo(Project, {
  foreignKey: 'project_id',
})

module.exports = { Student, Project, Task };
