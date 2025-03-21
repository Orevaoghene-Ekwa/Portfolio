import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [blur, setBlur] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navBar">
        <Link className="logo" to="/">
          Oreva<span>oghene</span>
        </Link>

        <div className="md:hidden">
          {isOpen ? (
            <X onClick={() => {toggleMenu(), setBlur(!blur)}} className="cursor-pointer" size={28} />
          ) : (
            <Menu onClick={() => {toggleMenu(), setBlur(!blur)}} className="cursor-pointer" size={28} />
          )}
        </div>

        <div className={`menuDrop ${isOpen ? (blur ? 'top-16 backdrop-blur-md': 'top-16') : 'top-[-100%]'}`}>
          <ul className="menu">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/education" onClick={toggleMenu}>Education</Link></li>
            <li><Link to="/experience" onClick={toggleMenu}>Experience</Link></li>
            <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
