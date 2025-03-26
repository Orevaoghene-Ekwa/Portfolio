import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './LandingPage'
import EducationPage from './EducationPage'
import Projects from './Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex flex-col">
      <div className="flex-grow">
        <Navbar />
        <Routes className="">
          <Route path="/" element={<LandingPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </main>
  )
}

export default App
