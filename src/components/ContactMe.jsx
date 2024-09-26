import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import my_resume from  '../utils/Harshjha.pdf'

const ContactMe = () => {
  return (
    <section id='contact-me' className="bg-gray-900 py-16 px-6 flex justify-center">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg max-w-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-4xl font-bold text-indigo-400 mb-6">
          Contact Me
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          I'm open to opportunities and collaborations. Feel free to reach out to me!
        </p>
        <div className="flex justify-center space-x-8 mb-8">
          <a 
            href="https://www.linkedin.com/in/harsh-jha-85722b254/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-indigo-400 hover:text-indigo-500 text-3xl transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/Harshjha002" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-indigo-400 hover:text-indigo-500 text-3xl transition duration-300"
          >
            <FaGithub />
          </a>
        </div>
        <a 
          href={my_resume}
          download="HarshJha_Resume.pdf" 
          className="inline-flex items-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 mb-6"
        >
          <HiDownload className="mr-2" />
          Download Resume
        </a>
        <div className="mt-4">
          <a 
            href="mailto:harshjha75788120@gmail.com" 
            className="text-indigo-400 hover:text-indigo-500 text-lg transition duration-300"
          >
            harshjha75788120@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
