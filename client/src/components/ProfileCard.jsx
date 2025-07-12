import React from 'react';
import '../components/ProfileCard.css';
import defaultPhoto from '../images/img.jpg'; // fallback image

const ProfileCard = ({
  profilePhoto = defaultPhoto,
  name = "Unknown",
  skillsOffered = [],
  skillsWanted = [],
  rating = "N/A",
  onRequestClick = () => alert("Request Sent!"),
}) => {
  return (
    <div className="profile-card">
      <div className="photo-section">
        <img src={profilePhoto || defaultPhoto} alt="Profile" className="profile-photo" />
      </div>

      <div className="info-section">
        <h3 className="name">{name}</h3>

        <div className="skills">
          <span className="label">Skills Offered:</span>
          {skillsOffered.map((skill, idx) => (
            <span key={idx} className="skill-badge">{skill}</span>
          ))}
        </div>

        <div className="skills">
          <span className="label">Skills Wanted:</span>
          {skillsWanted.map((skill, idx) => (
            <span key={idx} className="skill-badge">{skill}</span>
          ))}
        </div>

        <p className="rating">Rating: {rating}/5</p>
      </div>

      <div className="button-section">
        <button onClick={onRequestClick} className="request-button">Request</button>
      </div>
    </div>
  );
};

export default ProfileCard;
