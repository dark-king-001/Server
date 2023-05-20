import React, { useEffect, useState } from 'react';

export default function profile() {
  const [aboutMe, setAboutMe] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    // fetchEmail();
    // fetchUsername();
  }, []);

  // const fetchEmail = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3000/profile/getemail',{ withCredentials: true });
  //     const responseData = await response.text();
  //     console.log(responseData)
  //     setEmail(responseData.value);
  //   } catch (error) {
  //     console.log('Error fetching email:', error);
  //   }
  // };

  // const fetchUsername = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3000/profile/getusername',{ withCredentials: true });
  //     const responseData = await response.json();
  //     setUsername(responseData.value);
  //   } catch (error) {
  //     console.log('Error fetching username:', error);
  //   }
  // };

  return (
    <main>
      <div className="profile">
        <div className="profile-header">
          <img src="profile-picture.jpg" alt="Profile Picture" className="profile-picture" />
          <h1 className="profile-name">John Doe</h1>
          <p className="profile-status">Online</p>
        </div>
        <div className="profile-details">
          <h2>About Me</h2>
          <p>{aboutMe}</p>
          <h2>Contact Information</h2>
          <ul>
            <li>Email: {email}</li>
            <li>Username: {username}</li>
          </ul>
        </div>
        <div className="profile-actions">
          <button className="action-button">Send Message</button>
          <button className="action-button">Add Friend</button>
        </div>
      </div>
    </main>
  );
}
