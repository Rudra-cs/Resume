// ProjectsComponent.js
import { useState } from "react";
import { useRecoilState } from "recoil";
import { dataState } from "../../atoms/ResumeAtom";
import { FaEdit, FaPlus, FaTimes } from "react-icons/fa";

const ProjectsComponent = () => {
  const [data, setData] = useRecoilState(dataState);

  const [newProjects, setNewProjects] = useState({
    title: "",
    link: "",
    description: [],
    skills: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleAddProject = () => {
    if (
      newProjects.title.trim() !== "" &&
      newProjects.link.trim() !== "" &&
      newProjects.description.length !== 0 &&
      newProjects.skills.trim() !== ""
    ) {
      const updatedProjects =
        editIndex !== null
          ? data.projects.map((project, index) =>
              index === editIndex ? newProjects : project
            )
          : [...data.projects, newProjects];

      const newData = { ...data, projects: updatedProjects };
      setData(newData);
      localStorage.setItem("data", JSON.stringify(newData));
      setNewProjects({
        title: "",
        link: "",
        description: [],
        skills: "",
      });
      setEditIndex(null);
    }
  };

  const handleRemoveProject = (index) => {
    const newUpdatedProject = [
      ...data.projects.slice(0, index),
      ...data.projects.slice(index + 1),
    ];
    const newUpdatedData = { ...data, projects: newUpdatedProject };
    localStorage.setItem("data", JSON.stringify(newUpdatedData));
    setData(newUpdatedData);
  };

  const handleEditProject = (index) => {
    const projectToEdit = data.projects[index];
    setNewProjects({ ...projectToEdit });
    setEditIndex(index);
  };

  // const [formData, setFormData] = useState([...data.projects]);

  // useEffect(() => {
  //   // Update formData when projects change
  //   setFormData([...data.projects]);
  // }, [data.projects]);

  // const handleChange = (field, index, value) => {
  //   const updatedProjects = [...formData];
  //   updatedProjects[index][field] = value;
  //   setFormData(updatedProjects);
  // };

  // const handleAddProject = () => {
  //   setFormData([
  //     ...formData,
  //     { title: "", link: "", description: [""], skills: "", date: "" },
  //   ]);
  // };

  // const handleRemoveProject = (index) => {
  //   const updatedProjects = [...formData];
  //   updatedProjects.splice(index, 1);
  //   setFormData(updatedProjects);
  // };

  // const handleSaveChanges = () => {
  //   setData({ ...data, projects: formData });
  //   localStorage.setItem(
  //     "data",
  //     JSON.stringify({ ...data, projects: formData })
  //   );
  // };

  return (
    <div className=" ">
      <h2 className="text-xl font-bold mb-4 font font-poppins tracking-wide">
        Projects
      </h2>

      {data?.projects.map((project, index) => (
        <div
          key={index}
          className="mb-4 border p-4 flex flex-col items-start  "
        >
          <p className="text-lg font-medium tracking-wide font-poppins">
            {project.title}
          </p>
          <p className="text-base italic">{project.link}</p>
          {project.description?.map((desc, index) => (
            <div key={index} className="flex">
              <p className="mr-1">{`▪`}</p>
              <p key={index} className="text-gray-900 text-justify">
                {`${desc}`}
              </p>
            </div>
          ))}
          <p className="text-sm italic font-mono">
            Tech Used: {project.skills}
          </p>
          <div className="flex mt-2">
            <FaEdit
              onClick={() => handleEditProject(index)}
              className="text-blue-500 cursor-pointer mr-2"
            />
            <FaTimes
              onClick={() => handleRemoveProject(index)}
              className="text-red-500 cursor-pointer"
            />
          </div>
        </div>
      ))}

      <div className="mb-4 border p-4 flex flex-col items-start">
        <label className="block text-sm font-medium text-gray-600">Title</label>
        <input
          type="text"
          value={newProjects.title}
          onChange={(e) =>
            setNewProjects({ ...newProjects, title: e.target.value })
          }
          className="border border-gray-400 px-3 py-2 w-full mb-2"
        />

        <label className="block text-sm font-medium text-gray-600">link</label>
        <input
          type="text"
          value={newProjects.link}
          onChange={(e) =>
            setNewProjects({
              ...newProjects,
              link: e.target.value,
            })
          }
          className="border border-gray-400 px-3 py-2 w-full mb-2"
        />

        <label className="block text-sm font-medium text-gray-600">
          Joining Date
        </label>
        <textarea
          value={newProjects.description.join("\n")}
          onChange={(e) =>
            setNewProjects({
              ...newProjects,
              description: e.target.value.split("\n"),
            })
          }
          className="border border-gray-400 px-3 py-2 w-full mb-2"
        />

        <label className="block text-sm font-medium text-gray-600">
          Tech Used
        </label>
        <input
          type="text"
          value={newProjects.skills}
          onChange={(e) =>
            setNewProjects({
              ...newProjects,
              skills: e.target.value,
            })
          }
          className="border border-gray-400 px-3 py-2 w-full mb-2"
        />

        <button
          onClick={handleAddProject}
          className="bg-blue-500 text-white px-3 py-2 rounded mt-2 flex items-center"
        >
          <FaPlus className="mr-2" />
          {editIndex !== null ? "Update" : "Add New"}
        </button>
      </div>
      <div className="mt-4">
        <button
          onClick={() => {
            setNewProjects({
              title: "",
              link: "",
              description: [],
              skills: "",
            });
            setEditIndex(null);
          }}
          className="bg-red-500 text-white px-3 py-2 rounded"
        >
          Cancel
        </button>
        <button
          onClick={handleAddProject}
          className="bg-green-500 text-white px-3 py-2 rounded ml-2"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProjectsComponent;
