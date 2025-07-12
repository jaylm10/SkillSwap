const express = require("express");
const { saveProfile, getAllProfiles } = require("../controller/profileController");

const router = express.Router();

router.post("/profile", saveProfile); // token must be passed in headers
router.get("/profiles", getAllProfiles); // token must be passed in headers

module.exports = router;
