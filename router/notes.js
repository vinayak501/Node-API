const express = require("express");
const router = express.Router();
const {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/notes");

router.route("/").get(getAllNotes);
router.route("/create").post(createNote);
router.route("/:id").put(updateNote);
router.route("/:id").delete(deleteNote);

module.exports = router;
