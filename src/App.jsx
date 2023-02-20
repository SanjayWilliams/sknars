import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Members from "./pages/Members"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import ArticlePage from "./pages/ArticlePage"
import { Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article/:articleId" element={<ArticlePage />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
