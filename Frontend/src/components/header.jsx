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
            <Link to="/"># HOME</Link>
            <Link to="/explore"># EXPLORE</Link>
            <Link to="/messages"># MESSAGES</Link>
            <Link to="/notifications"># NOTIFICATIONS</Link>
            <Link to="/bookmarks"># BOOKMARK</Link>
            <Link to="/profile"># PROFILE</Link>
            <Link to="/more"># MORE</Link>
        </section>
        <div className="newpost">
            <button>New Thought</button>
        </div>
        <div className="user">
        </div>
    </header>
  )
}
