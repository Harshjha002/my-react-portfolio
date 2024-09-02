import { Link } from "react-router-dom";
import { ImNewTab } from "react-icons/im";

const ProjectPageCards = ({ id, imgId, title, smallDesc, techStack, gitLink }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img 
          src={imgId} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
      </div>
      <div className="p-5">
        <h1 className="text-xl font-semibold text-white mb-2">{title}</h1>
        <p className="text-gray-400 text-sm mb-4">{smallDesc}</p>
        <p className="text-gray-500 text-xs mb-4">
          <span className="text-indigo-400 font-semibold">Tech Stack:</span>
          <span className="block text-gray-300 mt-1">{techStack.join(", ")}</span>
        </p>
        <div className="flex justify-between items-center">
          <Link 
            to={`/projects/${id}`} 
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            View Details
          </Link>
          <a 
            href={gitLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-indigo-400 hover:text-indigo-500 transition duration-300 flex items-center"
          >
            Code <ImNewTab className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageCards;
