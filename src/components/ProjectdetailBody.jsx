const ProjectDetailBody = ({ id, imgId, title, smallDesc, techStack, gitLink, liveLink, largeDesc }) => {
    return (
      <div className="bg-gray-900 min-h-screen py-16 px-6">
        <div className="container mx-auto space-y-8">
  
          {/* Title and Small Description Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h1 className="text-3xl font-bold text-indigo-400 mb-4">{title}</h1>
            <p className="text-gray-300 text-lg">{smallDesc}</p>
          </div>
  
          {/* Image and Large Description Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col lg:flex-row items-center">
            <img src={imgId} alt={title} className="w-full lg:w-1/2 rounded-lg mb-6 lg:mb-0 lg:mr-6" />
            <p className="text-gray-300 text-lg">{largeDesc}</p>
          </div>
  
          {/* Links Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 flex justify-around">
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                View Live
              </a>
            )}
            <a 
              href={gitLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              See Code
            </a>
          </div>
  
          {/* Tech Stack Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h4 className="text-2xl font-semibold text-indigo-400 mb-4">Tech Stack Used</h4>
            <ul className="space-y-2">
              {techStack.map((item) => (
                <li key={item} className="text-gray-300 text-lg">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectDetailBody;
  