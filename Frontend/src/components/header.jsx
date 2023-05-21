import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';
import {Link} from 'react-router-dom'

export default function header() {
  const { globalData, setGlobalData } = useContext(AppContext);
  const [user , setUser] = useState('');
  useEffect(() => {
    // Check if globalData?.loggedin is true and update the isLoggedIn state accordingly
    setUser(globalData?.username);
  }, [globalData]);
  return (
    <header>
        <a href="/" id="logo" className="logo">
            <img
            src="/public/logo.png"
            alt="VichaarShala"
            height="100px"
            width="100px"
            />
        </a>
        <section id="navbar" className="navbar">
            <Link to="/"> <p>HOME</p></Link>
            <Link to="/explore"><p>EXPLORE</p></Link>
            <Link to="/messages"><p>MESSAGES</p></Link>
            <Link to="/notifications"><p>NOTIFICATIONS</p></Link>
            <Link to="/bookmarks"><p>BOOKMARKS</p></Link>
            <Link to="/profile"><p>PROFILE</p></Link>
        </section>
        <div className="user">
          {user}
        </div>
    </header>
  )
}
