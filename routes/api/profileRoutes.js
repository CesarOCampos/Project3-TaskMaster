const router = require('express').Router();
const { Project, Student, Task } = require('../../models');

// GET all projects
// /api/profile

router.get('/', async (req, res) => {
  try {
        const projectData = await Project.findAll({
          //group: 'projectname', include: [{model:Student}, {model:Task}]
        });
        //const project = projectData.get({ plain: true });
    //console.log(project)
    res.json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
       // Find the logged in user based on the session ID
        const studentData = await Student.findByPk(req.session.student_id, {
        // attributes: { exclude: ['password'] },
        include: [{ model: Task, through: Project, as: 'user_experience' }],
      });
  
    const user = userData.get({ plain: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/', async (req, res) => {
//   try {
//     const projectData = await Project.findAll({
//       // Add Student as a second model to JOIN with
//       include: [{ model: Student }],
//     });
//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;