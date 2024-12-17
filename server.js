const express = require("express");
const app = express();
const port = 3000; // Change port if needed

// Middleware to parse JSON requests
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello, World! Welcome to my Node.js app.");
});

// Sample route with query parameters
app.get("/greet", (req, res) => {
  const name = req.query.name || "Guest";
  res.send(`Hello, ${name}!`);
});

// Sample POST route
app.post("/data", (req, res) => {
  const data = req.body;
  res.json({
    message: "Data received successfully",
    receivedData: data,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
