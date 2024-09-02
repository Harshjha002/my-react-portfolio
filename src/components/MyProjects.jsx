import myProjects from "../utils/projects-data";
import ProjectsCards from "./ProjectsCards";

const MyProjects = () => {
  return (
    <section id="projects" className="bg-gray-900 py-16 px-6">
      <div className="container mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-indigo-400 text-center">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((item) => (
            <ProjectsCards 
              key={item.id}
              id={item.id}
              imgId={item.imgId}
              title={item.title}
              smallDesc={item.smallDesc}
              techStack={item.techStack}
              gitLink={item.gitLink}
              liveLink={item.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
