const router = require('express').Router();
// Include the Book model with the other imports
const { Student, Project, Task } = require('../../models');

// GET all tasks
router.get('/', async (req, res) => {
  try {
    const taskData = await Task.findAll({
      // Add Book as a second model to JOIN with
      include: [{ model: LibraryCard }, { model: Book }],
    });
    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
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
      // const taskData = await Task.findAll({ 
      //   include: [{ model: Project }], 
      //   where: { Project.student_id: req.params.id }
      //   // include: [{model:Student}]
      // });
    // const user = userData.get({ plain: true });
    res.json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// // GET a single reader
// router.get('/:id', async (req, res) => {
//   try {
//     const readerData = await Reader.findByPk(req.params.id, {
//       // Add Book as a second model to JOIN with
//       include: [{ model: LibraryCard }, { model: Book }],
//     });

//     if (!readerData) {
//       res.status(404).json({ message: 'No reader found with that id!' });
//       return;
//     }

//     res.status(200).json(readerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // CREATE a reader
// router.post('/', async (req, res) => {
//   try {
//     const readerData = await Reader.create(req.body);
//     res.status(200).json(readerData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // DELETE a reader
// router.delete('/:id', async (req, res) => {
//   try {
//     const readerData = await Reader.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (!readerData) {
//       res.status(404).json({ message: 'No reader found with that id!' });
//       return;
//     }

//     res.status(200).json(readerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
