const UserProfile = require("../models/user");
const jwt = require("jsonwebtoken");

exports.saveProfile = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const {
      name,
      location,
      skillsOffered,
      skillsWanted,
      availability,
      profileVisibility,
      profilePhoto
    } = req.body;

    if (!name || !availability || !profileVisibility) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if profile already exists (edit mode)
    const existingProfile = await UserProfile.findOne({ userId });

    if (existingProfile) {
      // Update
      existingProfile.name = name;
      existingProfile.location = location;
      existingProfile.skillsOffered = skillsOffered;
      existingProfile.skillsWanted = skillsWanted;
      existingProfile.availability = availability;
      existingProfile.profileVisibility = profileVisibility;
      existingProfile.profilePhoto = profilePhoto;

      await existingProfile.save();
      return res.status(200).json({ message: "Profile updated successfully" });
    } else {
      // Create new
      const newProfile = new UserProfile({
        userId,
        name,
        location,
        skillsOffered,
        skillsWanted,
        availability,
        profileVisibility,
        profilePhoto
      });

      await newProfile.save();
      return res.status(201).json({ message: "Profile created successfully" });
    }
  } catch (error) {
    console.error("Error saving profile:", error);
    return res.status(500).json({ message: "Server error while saving profile" });
  }
};

exports.getAllProfiles = async(req,res)=>{
    try {
    const profiles = await UserProfile.find({ profileVisibility: 'Public' });
    res.status(200).json(profiles);
  } catch (error) {
    console.error("Error fetching all profiles:", error);
    res.status(500).json({ message: "Server error" });
  }
}
