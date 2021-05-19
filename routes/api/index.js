const router = require('express').Router();
const readerRoutes = require('./readerRoutes');

const projectRoutes = require('./projectRoutes');
const profileRoutes = require('./profileRoutes');

router.use('/readers', readerRoutes);

router.use('/projects', projectRoutes);
router.use('/profile', profileRoutes);

module.exports = router;
