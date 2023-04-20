import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx"
import Explore from "./components/explore.jsx"
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
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App