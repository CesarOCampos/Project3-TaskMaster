const router = require('express').Router();
const taskRoutes = require('./taskRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/tasks', taskRoutes);
router.use('/projects', projectRoutes);

module.exports = router;