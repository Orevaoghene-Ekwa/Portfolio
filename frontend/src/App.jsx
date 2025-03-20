import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './LandingPage'
import Projects from './Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main >
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </main>
  )
}

export default App
