const router = require('express').Router();
<<<<<<< HEAD
const readerRoutes = require('./readerRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/readers', readerRoutes);
=======
const taskRoutes = require('./taskRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/tasks', taskRoutes);
>>>>>>> 88e470ded3c0ff630efd707e5df75675dda151f9
router.use('/projects', projectRoutes);

module.exports = router;