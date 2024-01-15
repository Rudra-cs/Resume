/* eslint-disable react/prop-types */
const SkillsChips = ({ skills }) => (
  <div className={` flex flex-wrap gap-2 mt-2 text-justify`}>
    {skills.map((skill, index) => (
      <span
        key={index}
        className="bg-gray-500 text-white py-1 px-2 rounded-md text-xs font-poppins"
      >
        {skill}
      </span>
    ))}
  </div>
);

export default SkillsChips;
