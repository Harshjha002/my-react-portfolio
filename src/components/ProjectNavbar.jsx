import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.webp';

const ProjectNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
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
            <li>
              <Link 
                to="/" 
                className="text-gray-300 hover:text-indigo-400 focus:text-white focus:outline-none transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className="text-gray-300 hover:text-indigo-400 focus:text-white focus:outline-none transition duration-300"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ProjectNavbar;
