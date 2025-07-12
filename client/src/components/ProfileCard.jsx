import React from 'react';
import defaultPhoto from '../images/img.jpg'; // Replace with your image path

const ProfileCard = ({
  profilePhoto = defaultPhoto,
  name = "Marc Demo",
  skillsOffered = ["JavaScript", "Python"],
  skillsWanted = ["Photoshop", "Graphic Design"],
  rating = 4.5,
  onRequestClick = () => alert("Request Sent!"),
}) => {
  const styles = {
    card: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      backgroundColor: '#1e1e1e',
      color: 'white',
      border: '2px solid white',
      borderRadius: '20px',
      padding: '20px',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '10px'
    },
    photoSection: {
      flex: '0 0 auto',
    },
    profilePhoto: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      border: '2px solid white',
      objectFit: 'cover',
    },
    infoSection: {
      flexGrow: 1,
      minWidth: '200px',
    },
    name: {
      margin: '0 0 10px 0',
      fontSize: '20px',
    },
    skills: {
      margin: '5px 0',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '5px',
    },
    label: {
      color: '#00ffb3',
      marginRight: '10px',
      fontWeight: 'bold',
    },
    skillBadge: {
      backgroundColor: '#333',
      border: '1px solid white',
      borderRadius: '10px',
      padding: '4px 10px',
      fontSize: '14px',
    },
    rating: {
      fontStyle: 'italic',
      fontSize: '14px',
      marginTop: '5px',
    },
    buttonSection: {
      alignSelf: 'center',
    },
    requestButton: {
      backgroundColor: '#006d77',
      border: 'none',
      borderRadius: '10px',
      padding: '10px 20px',
      color: 'white',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.photoSection}>
        <img src={profilePhoto} alt="Profile" style={styles.profilePhoto} />
      </div>

      <div style={styles.infoSection}>
        <h3 style={styles.name}>{name}</h3>

        <div style={styles.skills}>
          <span style={styles.label}>Skills Offered:</span>
          {skillsOffered.map((skill, idx) => (
            <span key={idx} style={styles.skillBadge}>{skill}</span>
          ))}
        </div>

        <div style={styles.skills}>
          <span style={styles.label}>Skills Wanted:</span>
          {skillsWanted.map((skill, idx) => (
            <span key={idx} style={styles.skillBadge}>{skill}</span>
          ))}
        </div>

        <p style={styles.rating}>Rating: {rating}/5</p>
      </div>

      <div style={styles.buttonSection}>
        <button onClick={onRequestClick} style={styles.requestButton}>Request</button>
      </div>
    </div>
  );
};

export default ProfileCard;