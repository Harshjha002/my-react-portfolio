import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 bg-gray-800 rounded-lg shadow-lg">
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="Harsh Jha Logo" className="h-10 w-auto mr-4" />
            <p className="text-xl font-semibold text-white">Harsh Jha</p>
          </div>
        </Link>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FaBars className="w-6 h-6" />
          </button>
        </div>
        <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0">
            <li><a href="#home" className="text-gray-300 hover:text-white focus:text-white focus:outline-none">Home</a></li>
            <li><a href="#about-me" className="text-gray-300 hover:text-white focus:text-white focus:outline-none">About Me</a></li>
            <li><a href="#projects" className="text-gray-300 hover:text-white focus:text-white focus:outline-none">Projects</a></li>
            <li><a href="#tech-stack" className="text-gray-300 hover:text-white focus:text-white focus:outline-none">My Technologies</a></li>
            <li><a href="#contact-me" className="text-gray-300 hover:text-white focus:text-white focus:outline-none">Contact Me</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
