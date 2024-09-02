import techSkills from "../utils/skills-data";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section id="tech-stack" className="bg-gray-900 py-16 px-6">
      <div className="container mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-indigo-400 text-center">
          My Technologies
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {techSkills.map((item) => (
            <SkillsCard key={item.id} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
