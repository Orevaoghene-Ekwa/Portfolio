import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './LandingPage'
import Projects from './Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main flex flex-col min-h-screen>
      <div className="flex-grow">
        <Navbar />
        <Routes className="">
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </main>
  )
}

export default App
