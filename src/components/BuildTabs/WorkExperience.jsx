// ProjectsComponent.js
import { useState } from "react";
import { useRecoilState } from "recoil";
import { dataState } from "../../atoms/ResumeAtom";
import { FaEdit, FaPlus, FaTimes } from "react-icons/fa";

const WorkExperience = () => {
  const [data, setData] = useRecoilState(dataState);

  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    description: [],
    dateJoining: "",
    dateLeaving: "",
    location: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleAddExperience = () => {
    if (
      newExperience.title.trim() !== "" &&
      newExperience.company.trim() !== "" &&
      newExperience.description.length !== 0 &&
      newExperience.dateJoining.trim() !== "" &&
      newExperience.dateLeaving.trim() !== "" &&
      newExperience.location.trim() !== ""
    ) {
      const updatedExperience =
        editIndex !== null
          ? data.experience.map((exp, index) =>
              index === editIndex ? newExperience : exp
            )
          : [...data.experience, newExperience];

      const newData = { ...data, experience: updatedExperience };
      setData(newData);
      localStorage.setItem("data", JSON.stringify(newData));
      setNewExperience({
        title: "",
        company: "",
        description: [],
        dateJoining: "",
        dateLeaving: "",
        location: "",
      });
      setEditIndex(null);
    }
  };

  const handleRemoveExperience = (index) => {
    const newUpdatedExperience = [
      ...data.experience.slice(0, index),
      ...data.experience.slice(index + 1),
    ];
    const newUpdatedData = { ...data, experience: newUpdatedExperience };
    localStorage.setItem("data", JSON.stringify(newUpdatedData));
    setData(newUpdatedData);
  };

  const handleEditExperience = (index) => {
    const experienceToEdit = data.experience[index];
    setNewExperience({ ...experienceToEdit });
    setEditIndex(index);
  };

  return (
    <div className=" ">
      <h2 className="text-xl font-bold mb-4 font font-poppins tracking-wide">
        Experience
      </h2>

      {data?.experience.map((exp, index) => (
        <div
          key={index}
          className="mb-4 border p-4 flex flex-col items-start  "
        >
          <p className="text-lg font-medium tracking-wide font-poppins">
            {exp.title}
          </p>
          <p className="text-base italic">{exp.company}</p>
          {exp.description?.map((desc, index) => (
            <div key={index} className="flex">
              <p className="mr-1">{`▪`}</p>
              <p key={index} className="text-gray-900 text-justify">
                {`${desc}`}
              </p>
            </div>
          ))}
          <p className="text-sm italic font-mono">
            {exp.dateJoining}-{exp.dateLeaving}
          </p>
          <p className="text-sm italic font-mono">{exp.location}</p>
          <div className="flex mt-2">
            <FaEdit
              onClick={() => handleEditExperience(index)}
              className="text-blue-500 cursor-pointer mr-2"
            />
            <FaTimes
              onClick={() => handleRemoveExperience(index)}
              className="text-red-500 cursor-pointer"
            />
          </div>
        </div>
      ))}

      <div className="mb-4 border p-4 flex flex-col items-start">
        <label className="block text-sm font-medium text-gray-600">Title</label>
        <input
          type="text"
          value={newExperience.title}
          onChange={(e) =>
            setNewExperience({ ...newExperience, title: e.target.value })
          }
          className="border border-gray-400 px-3 py-2 w-full mb-2"
        />

        <label className="block text-sm font-medium text-gray-600">
          Company
        </label>
        <input
          type="text"
          value={newExperience.company}
          onChange={(e) =>
            setNewExperience({
              ...newExperience,
              company: e.target.value,
            })
          }
          className="border border-gray-400 px-3 py-2 w-full mb-2"
        />

        <label className="block text-sm font-medium text-gray-600">
          Description
        </label>
        <textarea
          value={newExperience.description.join("\n")}
          onChange={(e) =>
            setNewExperience({
              ...newExperience,
              description: e.target.value.split("\n"),
            })
          }
          className="border border-gray-400 px-3 py-2 w-full mb-2"
        />

        <label className="block text-sm font-medium text-gray-600">
          Date Of Joining
        </label>
        <input
          type="text"
          value={newExperience.dateJoining}
          onChange={(e) =>
            setNewExperience({
              ...newExperience,
              dateJoining: e.target.value,
            })
          }
          className="border border-gray-400 px-3 py-2 w-full mb-2"
        />

        <label className="block text-sm font-medium text-gray-600">
          Date Of Leaving
        </label>
        <input
          type="text"
          value={newExperience.dateLeaving}
          onChange={(e) =>
            setNewExperience({
              ...newExperience,
              dateLeaving: e.target.value,
            })
          }
          className="border border-gray-400 px-3 py-2 w-full mb-2"
        />

        <label className="block text-sm font-medium text-gray-600">
          location
        </label>
        <input
          type="text"
          value={newExperience.location}
          onChange={(e) =>
            setNewExperience({
              ...newExperience,
              location: e.target.value,
            })
          }
          className="border border-gray-400 px-3 py-2 w-full mb-2"
        />

        <button
          onClick={handleAddExperience}
          className="bg-blue-500 text-white px-3 py-2 rounded mt-2 flex items-center"
        >
          <FaPlus className="mr-2" />
          {editIndex !== null ? "Update" : "Add New"}
        </button>
      </div>
      <div className="mt-4">
        <button
          onClick={() => {
            setNewExperience({
              title: "",
              company: "",
              description: [],
              dateJoining: "",
              dateLeaving: "",
              location: "",
            });
            setEditIndex(null);
          }}
          className="bg-red-500 text-white px-3 py-2 rounded"
        >
          Cancel
        </button>
        <button
          onClick={handleAddExperience}
          className="bg-green-500 text-white px-3 py-2 rounded ml-2"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default WorkExperience;
