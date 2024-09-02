import ProjectPageCards from "./ProjectPageCards";
import myProjects from "../utils/projects-data";
import ProjectNavbar from "./ProjectNavbar";
const ProjectsPage = () => {
  return (
    <section className="bg-gray-900 py-16 px-6 min-h-screen">
      <div className="container mx-auto">
        <ProjectNavbar/>
        <h1 className="text-4xl font-bold text-indigo-400 mb-12 text-center">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((item) => (
            <ProjectPageCards 
              key={item.id}
              id={item.id}
              imgId={item.imgId}
              title={item.title}
              smallDesc={item.smallDesc}
              techStack={item.techStack}
              gitLink={item.gitLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
