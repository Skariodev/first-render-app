import express from "express";

const PORT = process.env.PORT || 3000; // Cheeky trick to avoid port being undefined in listen

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hallo lolebibi</h1>");
});

// Port is already defined.
app.listen(process.env.PORT, () => {
  console.log("Server running on port: " + PORT);
});
