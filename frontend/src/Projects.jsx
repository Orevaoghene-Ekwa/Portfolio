import { Link } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";
import JobDasher from "./assets/job-dasher.png";
import QuizApp from "./assets/quiz-app.png";

const projects = [
  {
    title: "Job Dasher",
    description: "A Job Management Board for job seekers looking to looking to find a job according to their skills and preferences.",
    techStack: ["React", "Flask", "Sqlite", "Bootstrap"],
    image: JobDasher,
    github: "https://github.com/Orevaoghene-Ekwa/Job-Dasher",
    liveDemo: "https://job-dasher.onrender.com/",
  },
  {
    title: "Quiz App",
    description: "An interactive quiz app built for JBQ, with dynamic displays, real-time score tracking, and a dedicated database.",
    techStack: ["React", "Express.js", "SQLite", "Tailwind Css"],
    image: QuizApp,
    github: "https://github.com/Orevaoghene-Ekwa/Quiz-App",
    liveDemo: "https://quizmaster.com",
  },
  {
    title: "QR Code Generator",
    description: "A simple web app to generate QR codes for links, text, and contact details using Python.",
    techStack: ["Flask", "Bootstrap", "qrcode Module"],
    image: "/images/qr-code.png",
    github: "https://github.com/yourusername/qr-code-generator",
    liveDemo: "https://qrgenerator.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800  mb-10">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-200 rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img src={project.image} alt={project.title} className="w-full h-50 object-cover" />
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-600  mt-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-4">
                  <Link to={project.github} target="_blank" className="flex items-center gap-2 text-gray-500 hover:text-green-500">
                    <Github size={20} />
                    GitHub
                  </Link>
                  
                  <Link to={project.liveDemo} target="_blank" className="flex items-center gap-2 text-gray-500 hover:text-green-500">
                    <ExternalLink size={20} />
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
