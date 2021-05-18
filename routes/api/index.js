const router = require('express').Router();
const projectRoutes = require('./projectRoutes');
const taskRoutes = require('./taskRoutes');

router.use('/tasks', taskRoutes);
router.use('/projects', projectRoutes);

module.exports = router;