import React from 'react'
import {Link} from 'react-router-dom'

export default function header() {
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
            <Link to="/"> <p className="icon">#</p><p>HOME</p></Link>
            <Link to="/explore"><p className="icon">#</p><p>EXPLORE</p></Link>
            <Link to="/messages"><p className="icon">#</p><p>MESSAGES</p></Link>
            <Link to="/notifications"><p className="icon">#</p><p>NOTIFICATIONS</p></Link>
            <Link to="/bookmarks"><p className="icon">#</p><p>BOOKMARKS</p></Link>
            <Link to="/profile"><p className="icon">#</p><p>PROFILE</p></Link>
            <Link to="/more"><p className="icon">#</p><p>MORE</p></Link>
        </section>
        <div className="newpost">
            <button><p>New Thought</p></button>
        </div>
        <div className="user">
        </div>
    </header>
  )
}
