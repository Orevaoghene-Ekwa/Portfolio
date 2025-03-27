import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [blur, setBlur] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="navBar">
        <Link className="logo" to="/">
          Oreva<span>oghene</span>
        </Link>

        <div className="md:hidden">
          {isOpen ? (
            <X onClick={() => {toggleMenu(), setBlur(false)}} className="cursor-pointer" size={28} />
          ) : (
            <Menu onClick={() => {setIsOpen(true), setBlur(true)}} className="cursor-pointer" size={28} />
          )}
        </div>

        <div className={`menuDrop ${isOpen ? (blur ? 'fixed z-50 top-16 backdrop-blur-md inset-0': 'top-16') : 'top-[-100%]'}`}>
          <ul className="menu">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
            <li><Link to="/education" onClick={toggleMenu}>Education</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
