import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Members from "./pages/Members"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
