import { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");

  const { user, token, setUser, setToken, navigate, backendUrl } =
    useContext(ShopContext);

  /* LOGOUT */
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    navigate("/");
  };

  /* FETCH NOTES */
  const fetchNotes = async () => {
    if (!token) return;
    try {
      const res = await axios.get(`${backendUrl}/yogi/v1/notes`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotes(res.data.notes);
    } catch {
      toast.error("Failed to load notes");
    }
  };

  /* ADD NOTE */
  const addNote = async () => {
    if (!content.trim()) return;

    try {
      const res = await axios.post(
        `${backendUrl}/yogi/v1/notes`,
        { content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNotes([res.data.note, ...notes]);
      setContent("");
      toast.success("Note added");
    } catch {
      toast.error("Failed to add note");
    }
  };

  /* DELETE NOTE */
  const deleteNote = async (id) => {
    try {
      await axios.delete(`${backendUrl}/yogi/v1/notes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotes(notes.filter((n) => n._id !== id));
      toast.success("Note deleted");
    } catch {
      toast.error("Delete failed");
    }
  };

  /* AUTH CHECK */
  useEffect(() => {
    if (!token) navigate("/");
    fetchNotes();
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome, <span className="text-blue-600">{user}</span>
          </h1>
          <button
            onClick={handleLogout}
            className="text-sm text-red-600 hover:underline"
          >
            Logout
          </button>
        </div>

        {/* NOTEPAD */}
        <div className="mb-6">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your note..."
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <button
            onClick={addNote}
            className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            Save Note
          </button>
        </div>

        {/* NOTES LIST */}
        <div className="space-y-3">
          {notes.length === 0 && (
            <p className="text-center text-gray-500 text-sm">
              No notes yet. Start writing ✍️
            </p>
          )}

          {notes.map((note) => (
            <div
              key={note._id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-start shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-700 whitespace-pre-wrap">
                {note.content}
              </p>
              <button
                onClick={() => deleteNote(note._id)}
                className="text-sm text-red-500 hover:text-red-700 ml-4"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
