import ProjectNavbar from "./ProjectNavbar";
import myProjects from "../utils/projects-data";
import ProjectdetailBody from "./ProjectdetailBody";
import { useParams } from "react-router-dom";

const ProjectsDetails = () => {
  const {id: keyId} = useParams()
  const details = myProjects.filter((val) => val.id == keyId)
  

  console.log("=====",details)
  const { id, imgId, title, smallDesc, techStack, gitLink, liveLink, largeDesc} = details[0]
  return (

    <section className="bg-gray-900 py-16 px-6">
      <ProjectNavbar/>
      <div className="container mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-indigo-400 text-center">
          Project Details
        </h1>
        <div className="text-gray-300 text-center p-8">
          <ProjectdetailBody 
          id={id}
          imgId={imgId}
          title={title} 
          smallDesc={smallDesc}
          techStack={techStack}
          gitLink={gitLink}
          liveLink={liveLink}
          largeDesc={largeDesc} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsDetails;
