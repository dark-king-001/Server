import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';
import {Link} from 'react-router-dom'
import axios from 'axios';
import qs from 'qs';

export default function Login() {
  const { globalData, setGlobalData } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (globalData) {
      console.log(globalData);
    }
  }, [globalData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = qs.stringify({ email, password });
  
    axios.post('http://localhost:3000/auth/login', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        localStorage.setItem('appData', JSON.stringify(response.data));
        setGlobalData(response.data); // Store the response data in global state
        // Update storage whenever global data changes
      })
      .catch((error) => {
        console.error(error);
        // Handle login error
      });
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Login" />
      </form>
      <Link to="/register">
        <div className="option">
          Register
        </div>
      </Link>
    </div>
  );
}