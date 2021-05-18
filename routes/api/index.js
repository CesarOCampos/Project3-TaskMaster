const router = require('express').Router();
const TaskRoutes = require('./TaskRoutes');
const libraryCardRoutes = require('./libraryCardRoutes');

router.use('/Tasks', TaskRoutes);
router.use('/cards', libraryCardRoutes);

module.exports = router;
