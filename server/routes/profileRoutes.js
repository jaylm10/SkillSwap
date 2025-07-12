const express = require("express");
const { saveProfile } = require("../controller/profileController");

const router = express.Router();

router.post("/profile", saveProfile); // token must be passed in headers

module.exports = router;
