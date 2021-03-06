const router = require('express').Router();
const { Student, Project, Task } = require("../../models");

// CREATE a Task
router.post("/", async (req, res) => {
  try {
    const taskData = await Task.create(req.body);
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all tasks
router.get('/', async (req, res) => {
  try {
    const taskData = await Task.findAll({});
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