import { Github, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";


const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-white pt-8 pb-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between px-6">
        <div className="flex space-x-4 mt-2 md:mt-0 mb-3">
          <a href="https://github.com/Orevaoghene-Ekwa"><Github className="icon" /></a>
          <a href="https://www.linkedin.com/in/orevaoghene-ekwa-06210219a"><Linkedin className="icon" /></a>
          <a href="https://x.com/Reva_Baba"><Twitter className="icon" /></a>
          <a href="https://www.instagram.com/orevaoghene_ekwa/"><Instagram className="icon" /></a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Orevaoghene Ekwa.</p>
      </div>
    </footer>
  )
}

export default Footer
