const router = require('express').Router();
const { Project, Student, Task  } = require('../../models');

// /api/projects    POST: CREATE NEW PROJECT
router.post('/', async (req, res) => {
  try {
    const projectData = await Project.create(req.body);
      res.status(200).json(projectData);
  } catch (err) {
    res.status(400).json(err);
  }
});


// /api/projects    GET: GET ALL PROJECTS
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


module.exports = router;
