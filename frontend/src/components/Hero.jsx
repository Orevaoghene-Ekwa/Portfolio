import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero.webp"

const Hero = () => {
  const name = "Orevaoghene"
  
  return (
    <div className="hero">
      <div className="intro">
        <h1 className="greet">
          Hi, I am{" "}
          <motion.span className="">
            {Array.from(name).map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </h1>
        <h2>Full-Stack Developer</h2>
        <p>
          I love turning ideas into reality by building dynamic and user-friendly
          applications.
        </p>

        <Link to="/contact" className="">
          <motion.div
            className="btn transition"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            Contact Me
            <div className="arrow-container">
              <ArrowRight className="text-green-500 bg-white rounded-full ml-2" size={15} />
            </div>
          </motion.div>
        </Link>
      </div>
      
      <div className=" items-center flex flex-col">
        <div className="">
          <img src={HeroImg} className="HeroImg" loading="lazy" />
        </div>
        
        <div className="icons">
          <a href="https://github.com/Orevaoghene-Ekwa"><Github className="icon" /></a>
          <a href="https://www.linkedin.com/in/orevaoghene-ekwa-06210219a"><Linkedin className="icon" /></a>
          <a href="https://x.com/Reva_Baba"><Twitter className="icon" /></a>
          <a href="https://www.instagram.com/orevaoghene_ekwa/"><Instagram className="icon" /></a>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
