import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';

const Home = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/profiles");
        if (!response.ok) throw new Error("Failed to load profiles");
        const data = await response.json();
        setProfiles(data);
      } catch (err) {
        console.log("Error loading profile", err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ padding: '24px' }}>
        {profiles.map((profile) => (
          <ProfileCard
            key={profile._id}
            name={profile.name}
            profilePhoto={profile.profilePhoto}
            skillsOffered={profile.skillsOffered}
            skillsWanted={profile.skillsWanted}
            rating={profile.rating || "N/A"} // assuming you might add rating later
            onRequestClick={() => alert(`Request sent to ${profile.name}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
