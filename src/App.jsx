import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Article from "./components/Article"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav/>
      <Hero/>
      <Article/>
      <Footer/>
    </div>
  )
}

export default App
