const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// GET request
app.get("/", (req, res) => {
  res.json({ message: "Hello from GET request!" });
});

// POST request
app.post("/data", (req, res) => {
  const data = req.body; // get JSON body
  res.json({ message: "POST received!", data });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});