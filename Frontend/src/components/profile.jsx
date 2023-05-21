import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';

export default function profile() {
  const { globalData, setGlobalData } = useContext(AppContext);
  const [aboutMe, setAboutMe] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check if globalData?.loggedin is true and update the isLoggedIn state accordingly
    setEmail(globalData?.email);
    setUsername(globalData?.username);
  }, [globalData]);
  let handleLogout = () => {
    // Delete the global data from local storage
    setGlobalData({});
    localStorage.setItem('appData', JSON.stringify({}));
    // Redirect to the login screen
    window.location.href = '/login'; // Replace '/login' with the actual login screen URL
  }
  return (
    <main>
      <div className="profile">
        <div className="profile-header">
          <img src="profile-picture.jpg" alt="Profile Picture" className="profile-picture" />
          <h1 className="profile-name">{username}</h1>
          <p className="profile-status">Online</p>
        </div>
        <div className="profile-details">
          <h2>Bio</h2>
          <p>{aboutMe}</p>
          <h2>Contact Information</h2>
          <ul>
            <li>Email: {email}</li>
          </ul>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </main>
  );
}
