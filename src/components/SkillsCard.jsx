const SkillsCard = ({ title, image }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:bg-indigo-600">
      <div className="bg-gray-900 p-4 rounded-full mb-4 transform hover:rotate-6 transition-transform duration-500">
        <img src={image} alt={title} className="w-16 h-16 object-cover" />
      </div>
      <h3 className="text-xl font-semibold text-indigo-300 mt-2 hover:text-white transition-colors duration-300">{title}</h3>
    </div>
  );
};

export default SkillsCard;
