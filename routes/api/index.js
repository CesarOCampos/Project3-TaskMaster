const router = require('express').Router();
const readerRoutes = require('./readerRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/readers', readerRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
