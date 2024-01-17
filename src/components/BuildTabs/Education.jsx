// EducationComponent.js
import { useState } from "react";
import { useRecoilState } from "recoil";
import { dataState } from "../../atoms/ResumeAtom";
import { FaPlus, FaTimes, FaEdit } from "react-icons/fa";

const EducationComponent = () => {
  const [data, setData] = useRecoilState(dataState);

  const [newEducation, setNewEducation] = useState({
    degree: "",
    institution: "",
    joiningDate: "",
    graduationDate: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleAddEducation = () => {
    if (
      newEducation.degree.trim() !== "" &&
      newEducation.institution.trim() !== "" &&
      newEducation.joiningDate.trim() !== "" &&
      newEducation.graduationDate.trim() !== ""
    ) {
      const updatedEducation =
        editIndex !== null
          ? data.education.map((edu, index) =>
              index === editIndex ? newEducation : edu
            )
          : [...data.education, newEducation];

      const newData = { ...data, education: updatedEducation };
      setData(newData);
      localStorage.setItem("data", JSON.stringify(newData));
      setNewEducation({
        degree: "",
        institution: "",
        joiningDate: "",
        graduationDate: "",
      });
      setEditIndex(null);
    }
  };

  const handleRemoveEducation = (index) => {
    const newUpdatedEducation = [
      ...data.education.slice(0, index),
      ...data.education.slice(index + 1),
    ];
    const newUpdatedData = { ...data, education: newUpdatedEducation };
    localStorage.setItem("data", JSON.stringify(newUpdatedData));
    setData(newUpdatedData);
  };

  const handleEditEducation = (index) => {
    const educationToEdit = data.education[index];
    setNewEducation({ ...educationToEdit });
    setEditIndex(index);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 font font-poppins tracking-wide">
        Education
      </h2>
      {data?.education.map((edu, index) => (
        <div
          key={index}
          className="mb-4 border p-4 flex flex-col items-start  "
        >
          <p className="text-lg font-medium tracking-wide font-poppins">
            {edu.degree}
          </p>
          <p className="text-base italic">{edu.institution}</p>
          <p className="text-sm italic font-mono">
            {edu.joiningDate} - {edu.graduationDate}
          </p>
          <div className="flex mt-2">
            <FaEdit
              onClick={() => handleEditEducation(index)}
              className="text-blue-500 cursor-pointer mr-2"
            />
            <FaTimes
              onClick={() => handleRemoveEducation(index)}
              className="text-red-500 cursor-pointer"
            />
          </div>
        </div>
      ))}
      <div className="mb-4 border p-4 flex flex-col items-start">
        <label className="block text-sm font-medium text-gray-600">
          Degree
        </label>
        <input
          type="text"
          value={newEducation.degree}
          onChange={(e) =>
            setNewEducation({ ...newEducation, degree: e.target.value })
          }
          className="border border-gray-400 px-3 py-2 w-full mb-2"
        />

        <label className="block text-sm font-medium text-gray-600">
          Institution
        </label>
        <input
          type="text"
          value={newEducation.institution}
          onChange={(e) =>
            setNewEducation({
              ...newEducation,
              institution: e.target.value,
            })
          }
          className="border border-gray-400 px-3 py-2 w-full mb-2"
        />

        <label className="block text-sm font-medium text-gray-600">
          Joining Date
        </label>
        <input
          type="text"
          value={newEducation.joiningDate}
          onChange={(e) =>
            setNewEducation({
              ...newEducation,
              joiningDate: e.target.value,
            })
          }
          className="border border-gray-400 px-3 py-2 w-full mb-2"
        />

        <label className="block text-sm font-medium text-gray-600">
          Graduation Date
        </label>
        <input
          type="text"
          value={newEducation.graduationDate}
          onChange={(e) =>
            setNewEducation({
              ...newEducation,
              graduationDate: e.target.value,
            })
          }
          className="border border-gray-400 px-3 py-2 w-full mb-2"
        />

        <button
          onClick={handleAddEducation}
          className="bg-blue-500 text-white px-3 py-2 rounded mt-2 flex items-center"
        >
          <FaPlus className="mr-2" />
          {editIndex !== null ? "Update" : "Add New"}
        </button>
      </div>
      <div className="mt-4">
        <button
          onClick={() => {
            setNewEducation({
              degree: "",
              institution: "",
              joiningDate: "",
              graduationDate: "",
            });
            setEditIndex(null);
          }}
          className="bg-red-500 text-white px-3 py-2 rounded"
        >
          Cancel
        </button>
        <button
          onClick={handleAddEducation}
          className="bg-green-500 text-white px-3 py-2 rounded ml-2"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EducationComponent;
