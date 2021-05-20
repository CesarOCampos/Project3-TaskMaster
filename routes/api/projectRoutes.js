const router = require('express').Router();
const { Project, Student, Task  } = require('../../models');

<<<<<<< HEAD
router.post('/', async (req, res) => {
  try {
    const projectData = await Project.create(req.body);

      res.status(200).json(projectData);

=======
// /api/projects    POST: CREATE NEW PROJECT
router.post('/', async (req, res) => {
  try {
    const projectData = await Project.create(req.body);
      res.status(200).json(projectData);
>>>>>>> 88e470ded3c0ff630efd707e5df75675dda151f9
  } catch (err) {
    res.status(400).json(err);
  }
});

<<<<<<< HEAD
=======

// /api/projects    GET: GET ALL PROJECTS
>>>>>>> 88e470ded3c0ff630efd707e5df75675dda151f9
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

<<<<<<< HEAD
=======
// /api/projects/:id  GET: GET PROJECT FOR SPECIFIC STUDENT BASED ON STUDENT ID
router.get('/:id', async (req, res) => {
  try {
      console.log("\n\nHELLO I HIT THE ROUTE");
      console.log("Req.params.id: ", req.params.id);

      const projectData = await Student.findAll({
        include: [{ model:Project }],
        // include: [{ model: Task, through: Project, as: 'project_tasks' }], 
        where: { id: req.params.id },
        // group: 'id' 
      });

    // const user = userData.get({ plain: true });
    res.json(projectData);
    console.log("ProjectData: ", projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

>>>>>>> 88e470ded3c0ff630efd707e5df75675dda151f9

module.exports = router;
