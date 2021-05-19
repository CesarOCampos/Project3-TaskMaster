const router = require('express').Router();
// Include the Book model with the other imports
// const { Reader, Book, LibraryCard } = require('../../models');
const { Student, Project, Task } = require("../../models");

// GET all readers

router.get('/', async (req, res) => {
  try {
    const taskData = await Task.create(req.body);
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
})

// router.get('/', async (req, res) => {
//   try {
//     const Task = await Student.findAll({
//       // Add Book as a second model to JOIN with
//       include: [{ model: LibraryCard }, { model: Book }],
//     });
//     res.status(200).json(Task);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // GET a single reader
// router.get('/:id', async (req, res) => {
//   try {
//     const Task = await Student.findByPk(req.params.id, {
//       // Add Book as a second model to JOIN with
//       include: [{ model: Task }, { model: Project }],
//     });

//     if (!Task) {
//       res.status(404).json({ message: 'No reader found with that id!' });
//       return;
//     }

//     res.status(200).json(readerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// CREATE a Task
router.post("/", async (req, res) => {
  try {
    const taskData = await Task.create(req.body);
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

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