const express = require("express");
const auth = require("../middleware/auth");
const {
  createNote,
  getUserNotes,
  deleteNote,
} = require("../controllers/noteController");

const router = express.Router();

router.post("/", auth, createNote);
router.get("/", auth, getUserNotes);
router.delete("/:id", auth, deleteNote);

// export default router;
module.exports = router;
