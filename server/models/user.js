const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'register'  // reference to your auth collection
  },
  name: { type: String, required: true },
  location: { type: String, default: '' },
  skillsOffered: [{ type: String }],
  skillsWanted: [{ type: String }],
  availability: {
    type: String,
    enum: ['weekends', 'evenings', 'weekdays', 'flexible'],
    default: 'weekends'
  },
  profileVisibility: {
    type: String,
    enum: ['Public', 'Private'],
    default: 'Public'
  },
  profilePhoto: { type: String } // base64 or URL
}, {
  timestamps: true
});

module.exports = mongoose.model('UserProfile', userSchema);
