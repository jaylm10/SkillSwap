import React, { useState } from 'react';
import './Profile.css';
import Header from '../components/Header';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    skillsOffered: ['Graphic Design', 'Video Editing', 'Photoshop'],
    skillsWanted: ['Python', 'Java Script', 'Manager'],
    availability: 'weekends',
    profileVisibility: 'Public'
  });

  const [newSkillOffered, setNewSkillOffered] = useState('');
  const [newSkillWanted, setNewSkillWanted] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddSkillOffered = () => {
    if (newSkillOffered.trim() && !formData.skillsOffered.includes(newSkillOffered.trim())) {
      setFormData(prev => ({
        ...prev,
        skillsOffered: [...prev.skillsOffered, newSkillOffered.trim()]
      }));
      setNewSkillOffered('');
    }
  };

  const handleAddSkillWanted = () => {
    if (newSkillWanted.trim() && !formData.skillsWanted.includes(newSkillWanted.trim())) {
      setFormData(prev => ({
        ...prev,
        skillsWanted: [...prev.skillsWanted, newSkillWanted.trim()]
      }));
      setNewSkillWanted('');
    }
  };

  const handleRemoveSkillOffered = (skillToRemove) => {
    setFormData(prev => ({
      ...prev,
      skillsOffered: prev.skillsOffered.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleRemoveSkillWanted = (skillToRemove) => {
    setFormData(prev => ({
      ...prev,
      skillsWanted: prev.skillsWanted.filter(skill => skill !== skillToRemove)
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePhoto(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log('Saving profile:', formData);
    alert('Profile saved successfully!');
  };

  const handleDiscard = () => {
    setFormData({
      name: '',
      location: '',
      skillsOffered: [],
      skillsWanted: [],
      availability: 'weekends',
      profileVisibility: 'Public'
    });
    setProfilePhoto(null);
    alert('Changes discarded!');
  };

  return (
    <div className="profile-container">
     {/* <Header/> */}
     <Header/>

      {/* Main Content */}
      <div className="main-content">
        <div className="profile-card">
          <div className="form-section">
            <div className="left-column">
              {/* Name Field */}
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your name"
                />
              </div>

              {/* Location Field */}
              <div className="form-group">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your location"
                />
              </div>

              {/* Skills Offered */}
              <div className="form-group">
                <label className="form-label">Skills Offered</label>
                <div className="skills-container">
                  {formData.skillsOffered.map((skill, index) => (
                    <div key={index} className="skill-tag">
                      {skill}
                      <button
                        className="remove-skill"
                        onClick={() => handleRemoveSkillOffered(skill)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <div className="add-skill-container">
                  <input
                    type="text"
                    value={newSkillOffered}
                    onChange={(e) => setNewSkillOffered(e.target.value)}
                    className="add-skill-input"
                    placeholder="Add a skill"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddSkillOffered();
                      }
                    }}
                  />
                  <button
                    className="add-skill-btn"
                    onClick={handleAddSkillOffered}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Availability */}
              <div className="form-group">
                <label className="form-label">Availability</label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="weekends">weekends</option>
                  <option value="evenings">evenings</option>
                  <option value="weekdays">weekdays</option>
                  <option value="flexible">flexible</option>
                </select>
              </div>

              {/* Profile Visibility */}
              <div className="form-group">
                <label className="form-label">Profile</label>
                <select
                  name="profileVisibility"
                  value={formData.profileVisibility}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </select>
              </div>
            </div>

            <div className="right-column">
              {/* Profile Photo */}
              <div className="profile-photo-section">
                <div className="profile-photo-container">
                  {profilePhoto ? (
                    <img src={profilePhoto} alt="Profile" className="profile-photo" />
                  ) : (
                    <div className="profile-photo-placeholder">
                      <span>Profile Photo</span>
                    </div>
                  )}
                  <div className="photo-actions">
                    <label className="photo-upload-label">
                      Add/Edit Remove
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="photo-upload-input"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Skills Wanted */}
              <div className="form-group skills-wanted-section">
                <label className="form-label">Skills wanted</label>
                <div className="skills-container">
                  {formData.skillsWanted.map((skill, index) => (
                    <div key={index} className="skill-tag skill-wanted">
                      {skill}
                      <button
                        className="remove-skill"
                        onClick={() => handleRemoveSkillWanted(skill)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <div className="add-skill-container">
                  <input
                    type="text"
                    value={newSkillWanted}
                    onChange={(e) => setNewSkillWanted(e.target.value)}
                    className="add-skill-input"
                    placeholder="Add a skill"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddSkillWanted();
                      }
                    }}
                  />
                  <button
                    className="add-skill-btn"
                    onClick={handleAddSkillWanted}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;