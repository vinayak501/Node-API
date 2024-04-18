const Note = require("../models/note");
// const connectdb = require("../db/connect");

const getAllNotes = async (req, res) => {
  const data = await Note.find({});
  res.status(200).json({ data });
};

const createNote = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    res.status(400);
    throw new Error("PLEASE FILL ALL FIELDS");
  } else {
    const note = new Note({ title, description });
    const createdNote = await note.save();
    res.status(201).json(createdNote);
  }
};

const updateNote = async (req, res) => {
  const { title, description } = req.body;
  const note = await Note.findById(req.params.id);
  if (note) {
    note.title = title;
    note.description = description;

    const updatedNote = await note.save();
    res.json(updateNote);
  } else {
    res.status(404);
    throw new Error("NOTE NOT FOUND");
  }
};

const deleteNote = async (req, res) => {
  const note = Note.findById(req.params.id);

  if (note) {
    await note.deleteOne();
    res.json({ message: "NOTE REMOVED" });
  } else {
    res.status(401);
    throw new Error("NOTE NOT FOUND");
  }
};

module.exports = { getAllNotes, createNote, updateNote, deleteNote };
