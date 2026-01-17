require('dotenv').config();
const express = require("express");
const downloadRoute = require("./routes/download");

const app = express();
app.use(express.json());

// Routes
app.use("/api/download", downloadRoute);

// Health check
app.get("/", (req, res) => res.send("Social Downloader API is running ✅"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
