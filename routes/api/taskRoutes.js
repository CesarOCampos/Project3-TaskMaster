const router = require('express').Router();
const { Student, Project, Task } = require("../../models");

// GET all tasks
router.get('/', async (req, res) => {
  try {
    const taskData = await Task.findAll({});
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
})

// CREATE a task
router.post('/', async (req, res) => {
  try {
    console.log("In Server Create Task: ", req.body);
    const taskData = await Task.create(req.body);
    res.status(200).json(taskData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// /api/tasks/:id  GET: GET TASKS FOR SPECIFIC STUDENT BASED ON STUDENT ID
router.get('/:id', async (req, res) => {
  try {
      console.log("TASKS ROUTE");
      console.log("Req.params.id: ", req.params.id);
    const taskData = await Task.findAll({
      // include: [{ model:Task }],
      // include: [{ model: Task, through: Project, as: 'project_tasks' }],
      where: { student_id: req.params.id },
      // group: 'id'
    });
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
})

// // DELETE a Task
// router.delete('/:id', async (req, res) => {
//   try {
//     const Task = await Student.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (!Task) {
//       res.status(404).json({ message: 'No Task found!' });
//       return;
//     }

//     res.status(200).json(Task);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;