import { Github, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero.webp"

const Hero = () => {
  return (
    <div className="hero">
      <div className="intro">
        <h1 className="greet">Hi, I am Orevaoghene</h1>
        <h2>Full-Stack Developer</h2>
        <p>
          I love turning ideas into reality by building dynamic and user-friendly
          applications. From crafting seamless user interfaces to designing
          efficient backend systems, I focus on creating meaningful digital experiences.
        </p>

        <Link to="/contact" className="btn">
          Contact Me
          <div className="arrow-container">
            <ArrowRight className="text-green-500 bg-white rounded-full ml-2" size={15} />
          </div>
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
