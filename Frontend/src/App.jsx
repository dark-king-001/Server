import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx"
import Home from "./components/home.jsx"
import Explore from "./components/explore.jsx"
import Messages from "./components/messages.jsx"
import Notifications from "./components/notifications.jsx"
import Bookmarks from "./components/bookmark.jsx"
import Profile from "./components/profile.jsx"


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    /* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App