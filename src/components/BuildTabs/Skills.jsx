// SkillsComponent.js
import { useState } from "react";
import { useRecoilState } from "recoil";
import { dataState } from "../../atoms/ResumeAtom";
import { FaTimes } from "react-icons/fa";

const SkillsComponent = () => {
  const [newSkill, setNewSkill] = useState("");

  const [data, setData] = useRecoilState(dataState);

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      const newData = { ...data, skills: [...data.skills, newSkill] };
      setData(newData);
      localStorage.setItem("data", JSON.stringify(newData));
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (index) => {
    const newUpdatedData = {
      ...data,
      skills: [...data.skills.slice(0, index), ...data.skills.slice(index + 1)],
    };
    localStorage.setItem("data", JSON.stringify(newUpdatedData));
    setData(newUpdatedData);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {data?.skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-700 text-white px-4 py-2 flex items-center gap-2 cursor-pointer"
          >
            {skill}
            <FaTimes
              onClick={() => handleRemoveSkill(index)}
              className="text-red-500"
            />
          </div>
        ))}
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Enter a new skill"
          className="border border-gray-400 px-3 py-2 mr-2"
        />
        <button
          onClick={handleAddSkill}
          className="bg-blue-500 text-white px-3 py-2 rounded"
        >
          Add Skill
        </button>
      </div>
    </div>
  );
};

export default SkillsComponent;
