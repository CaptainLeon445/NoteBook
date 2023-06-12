const express = require("express");
const { createNote, getNotes, updateNote, deleteNote, getNote } = require("../Controllers/notesController");
const Router = express.Router();

Router
    .route("/")
    .get(getNotes)
    .post(createNote);
Router
    .route("/:id")
    .get(getNote)
    .patch(updateNote)
    .delete(deleteNote);

module.exports=Router
