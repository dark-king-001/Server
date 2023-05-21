import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function profile() {
  const [profileData, setProfileData ] = useState('')
  useEffect(() => {
    fetchProfile();
  }, []);
  const fetchProfile = () => {
    axios.get(`http://localhost:3000/profile?email=${JSON.parse(localStorage.getItem('appData')).email}`)
      .then((response) => {
        setProfileData(response.data.user)
      })
      .catch((error) => {
        console.error(error);
        // Handle login error
      });
  };
  const handleLogout = () => {
    // Delete the global data from local storage
    setGlobalData({});
    localStorage.setItem('appData', JSON.stringify({}));
    // Redirect to the login screen
    window.location.href = '/login'; // Replace '/login' with the actual login screen URL
  }
  if (!profileData) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      <div className="profile">
        <div className="profile-header">
          <img src="profile-picture.jpg" alt="Profile Picture" className="profile-picture" />
          <h1 className="profile-name">{profileData?.fullName}</h1>
          <p className="profile-status">{profileData?.status}</p>
        </div>
        <div className="profile-details">
          <h2>Bio</h2>
          <p>{profileData?.aboutMe}</p>
          <h2>Contact Information</h2>
          <ul>
            <li>{profileData?.email}</li>
          </ul>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </main>
  );
}
