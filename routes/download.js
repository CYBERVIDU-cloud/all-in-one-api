const express = require("express");
const router = express.Router();
const { handleDownload } = require("../controllers/downloadController");

router.get("/", handleDownload);

module.exports = router;
