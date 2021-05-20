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


// Tutorial.belongsToMany(Tag, {
//   through: "tutorial_tag",
//   as: "tags",
//   foreignKey: "tutorial_id",
// });

// Tag.belongsToMany(Tutorial, {
//   through: "tutorial_tag",
//   as: "tutorials",
//   foreignKey: "tag_id",
// });


// Task.belongsToMany(Student, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: Project,
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   as: 'task_studentdata'
// });

// Student.belongsToMany(Task, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: Project,
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   as: 'student_tasks'
// });

module.exports = { Student, Project, Task };
