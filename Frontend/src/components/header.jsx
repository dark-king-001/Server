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
            <Link to="/"> <pi className="icon">#</pi><p>HOME</p></Link>
            <Link to="/explore"><pi className="icon">#</pi><p>EXPLORE</p></Link>
            <Link to="/messages"><pi className="icon">#</pi><p>MESSAGES</p></Link>
            <Link to="/notifications"><pi className="icon">#</pi><p>NOTIFICATIONS</p></Link>
            <Link to="/bookmarks"><pi className="icon">#</pi><p>BOOKMARKS</p></Link>
            <Link to="/profile"><pi className="icon">#</pi><p>PROFILE</p></Link>
            <Link to="/more"><pi className="icon">#</pi><p>MORE</p></Link>
        </section>
        <div className="newpost">
            <button><p>New Thought</p></button>
        </div>
        <div className="user">
        </div>
    </header>
  )
}
