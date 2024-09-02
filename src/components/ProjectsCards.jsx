import { Link } from "react-router-dom";
import { ImNewTab } from "react-icons/im";

const ProjectsCards = ({ id, imgId, title, smallDesc, techStack, gitLink, liveLink }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
      <div className="relative">
        <img src={imgId} alt={title} className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>
      </div>
      <div className="p-6 bg-gray-900">
        <h1 className="text-2xl font-bold text-white mb-4">{title}</h1>
        <p className="text-gray-300 mb-4 text-lg">{smallDesc}</p>
        <p className="text-gray-400 mb-4">
          <span className="text-indigo-400 font-semibold">Technology Used:</span>
          <span className="block text-gray-300 font-medium">{techStack.join(", ")}</span>
        </p>
        <div className="flex justify-between items-center mt-4">
          <Link to={`/projects/${id}`} className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center">
            View Details
          </Link>
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-500 flex items-center transition duration-300">
              Live Demo <ImNewTab className="ml-2" />
            </a>
          )}
          <a href={gitLink} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-500 flex items-center transition duration-300">
            Code <ImNewTab className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
