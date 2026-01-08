const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());

app.use(cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*",
}));

// DB
const db = require("./config/database");
db.connect();

// test route
app.get("/", (req, res) => {
  res.send("API Working ");
});

// routes
const userRoute = require("./routers/userRoute");
app.use("/yogi/v1/user", userRoute);

const noteRoutes = require("./routers/noteRoute");
app.use("/yogi/v1/notes", noteRoutes);

// server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
