import { FaLongArrowAltRight } from "react-icons/fa";
import logo from '../assets/logo.webp';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-900 py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Name Is <span className="text-indigo-400">Harsh Jha</span></h1>
          <p className="text-xl md:text-2xl font-medium text-gray-300">
            I Am A <span className="text-indigo-400">Front-End Web Developer</span>
          </p>
          <button className="mt-6 bg-indigo-500 text-white py-2 px-6 rounded-lg flex items-center hover:bg-indigo-600 hover:shadow-lg transition duration-300 ease-in-out">
            <Link to="/projects" className="flex items-center">
              Explore My Works <FaLongArrowAltRight className="ml-2"/>
            </Link>
          </button>
        </div>
        <div>
          <img src={logo} alt="Harsh Jha Logo" className="w-72 md:w-96 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
