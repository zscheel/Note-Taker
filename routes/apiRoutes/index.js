const express = require('express');
const router = express.Router();
const noteRoutes = require('./noteRoutes.js');

router.use(noteRoutes);

module.exports = router;