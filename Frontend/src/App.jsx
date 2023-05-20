import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from './AppContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Home from './components/home.jsx';
import Explore from './components/explore.jsx';
import Messages from './components/messages.jsx';
import Notifications from './components/notifications.jsx';
import Bookmarks from './components/bookmark.jsx';
import Profile from './components/profile.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';

import './App.css';

export default function App() {
  const { globalData, setGlobalData } = useContext(AppContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    // Check if globalData?.loggedin is true and update the isLoggedIn state accordingly
    setIsLoggedIn(globalData?.loggedin || false);
  }, [globalData]);

  return (
    <BrowserRouter>
      {isLoggedIn && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/profile" element={<Profile />} />
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        {!isLoggedIn && <Route path="/register" element={<Register />} />}
      </Routes>
    </BrowserRouter>
  );
}

// store global data
// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { AppContext } from './AppContext';

// function Login() {
//   const { setResponseData } = useContext(AppContext);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('/login', { email, password })
//       .then((response) => {
//         setResponseData(response.data); // Store the response data in global state
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   // Rest of the component code
// }

// retrieve globaldata
// import React, { useContext } from 'react';
// import { AppContext } from './AppContext';

// function UserProfile() {
//   const { responseData } = useContext(AppContext);

//   if (responseData) {
//     const { email, username, accessToken } = responseData;

//     // Use the extracted data in your component
//     console.log('Email:', email);
//     console.log('Username:', username);
//     console.log('Access Token:', accessToken);
//   }

//   return (
//     // Component JSX
//   );
// }