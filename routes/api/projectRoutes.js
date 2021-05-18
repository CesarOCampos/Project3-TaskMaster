const router = require('express').Router();
const { Project } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const projectData = await Project.create(req.body);

      res.status(200).json(projectData);

  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
