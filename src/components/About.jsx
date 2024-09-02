import { Link } from "react-router-dom";
import { ImNewTab } from "react-icons/im";

const About = () => {
  return (
    <section id="about-me" className="bg-gray-900 py-16 px-6">
      <div className="container mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-indigo-400">About Me</h1>
        <p className="text-lg leading-relaxed text-gray-300">
          Hello! I'm Harsh Jha, a passionate front-end web developer from Guwahati, Assam. 
          I hold a Bachelor's degree in Computer Applications from Girijananda Chowdhury Institute 
          of Management and Technology, Guwahati. Currently, I am pursuing my Master’s in Computer Applications 
          from Jain University , Bengaluru.
        </p>
        <p className="text-lg leading-relaxed text-gray-300 mt-4">
          Although I may not have formal industry experience, I have honed my skills through various 
          <Link to="/projects" className="text-indigo-400 hover:underline flex items-center">
            Projects <ImNewTab className="ml-1"/>
          </Link> 
          where I have demonstrated my abilities as a front-end developer. I am eager to take on opportunities 
          in front-end development while also expanding my knowledge in back-end technologies to become a 
          well-rounded full-stack developer.
        </p>
      </div>
    </section>
  );
};

export default About;
