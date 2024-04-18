require("dotenv").config();
const express = require("express");
const connectdb = require("./db/connect");
const notes_router = require("./router/notes");
const app = express();
connectdb();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is live");
});

app.use("/api/notes", notes_router);

const PORT = process.env.PORT;
app.listen(PORT, console.log(`server is live on port ${PORT}`));
