import Hero from './components/Hero'
import Skills from './components/Skills'
import Cv from './components/Cv'

const LandingPage = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="cv">
        <Cv />
      </section>
      
    </div>
  )
}

export default LandingPage;
