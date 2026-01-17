require("dotenv").config();
const express = require("express");
const downloadRoute = require("./routes/download");

const app = express();
app.use(express.json());

// API route
app.use("/api/download", downloadRoute);

// Root test
app.get("/", (req, res) => {
  res.send("api is running ✅");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
