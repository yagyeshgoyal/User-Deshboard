const Note = require("../models/noteModal");


const createNote = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res
        .status(400)
        .json({ success: false, message: "Note content required" });
    }

    console.log("Creating note for User ID:", req.userId); // Debugging line

    const note = await Note.create({
      userId: req.userId,
      content,
    });

    res.status(201).json({ success: true, note });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


const getUserNotes = async (req, res) => {
    console.log("User ID:", req.userId); // Debugging line
  try {
    const notes = await Note.find({ userId: req.userId }).sort({
      createdAt: -1,
    });

    res.status(200).json({ success: true, notes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res
        .status(404)
        .json({ success: false, message: "Note not found" });
    }

    if (note.userId.toString() !== req.userId) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized" });
    }

    await Note.findByIdAndDelete(req.params.id);

    res.status(200).json({ success: true, message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createNote,
  getUserNotes,
  deleteNote,
};
