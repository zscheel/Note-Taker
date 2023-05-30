const express = require('express');
const router = express.Router();
const notes = require('../../db/db.json');
const newNote = require('../../lib/notes');

router.use(noteRoutes);

router.get('/notes', (req, res) => {
    res.json(notes);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    newNote(req.body, notes);
    res.json(notes);
});

module.exports = router;