import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import qs from 'qs';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState('');

  useEffect(() => {
    if (registered) {
      console.log(registered);
      window.location.href = '/login';
    }
  }, [registered]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = qs.stringify({username, email,role:"normal" ,password });
  
    axios.post('http://localhost:3000/auth/register', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        setRegistered(true)
        // Handle successful registeration
      })
      .catch((error) => {
        console.error(error);
        // Handle login error
      });
  };

  return (
    <div className="login-form">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Full Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
