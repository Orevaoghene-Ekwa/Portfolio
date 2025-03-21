import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import python from "../assets/python.svg";
import css from "../assets/css.svg";
import express from "../assets/express.svg";
import flask from "../assets/flask.svg";
import html from "../assets/html.svg";
import javaScript from "../assets/javaScript.svg";
import node from "../assets/node.svg";
import react from "../assets/react.svg";
import sql from "../assets/sql.svg";

const Skills = () => {
  const images = [python, css, express, flask, html, javaScript, node, react, sql];
  const totalImages = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:gap-35 justify-center items-center w-[90vw] mb-15">
      <h3 className="text-2xl md:text-3xl mt-15 md:mt-0 font-bold mb-10 md:mb-0">
        Skills
      </h3>

      <div className="mb-30 mt-15 md:mt-0">
        {images.map((image, index) => {
          const angle = (index / totalImages) * 360;
          const isCenter = index === currentIndex;

          return (
            <motion.img
              key={index}
              src={image}
              alt={`Skill icon ${index}`}
              className="absolute p-1 transition-all"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: `${Math.cos((angle * Math.PI) / 180) * 80}px`,
                y: `${Math.sin((angle * Math.PI) / 180) * 80}px`,
                scale: isCenter ? 1.5 : 0.8,
                zIndex: isCenter ? 5 : 1,
              }}
              transition={{ duration: 0.3 }}
              style={{
                width: isCenter ? "80px" : "45px",
                height: isCenter ? "80px" : "45px",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
