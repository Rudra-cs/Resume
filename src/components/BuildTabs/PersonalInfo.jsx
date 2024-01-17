// PersonalInformationComponent.js
import { useState } from "react";
import { useRecoilState } from "recoil";
import { dataState } from "../../atoms/ResumeAtom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PersonalInfo = () => {
  const [data, setData] = useRecoilState(dataState);

  const [name, setName] = useState(data?.personalInformation.name || "");
  const [role, setRole] = useState(data?.personalInformation.role || "");
  const [summary, setSummary] = useState(
    data?.personalInformation.summary || ""
  );
  const [email, setEmail] = useState(data?.personalInformation.email || "");
  const [phoneNo, setPhoneNo] = useState(
    data?.personalInformation.phoneNo || ""
  );
  const [location, setLocation] = useState(
    data?.personalInformation.location || ""
  );
  const [linkedIn, setLinkedIn] = useState(
    data?.personalInformation.linkedIn || ""
  );

  const [validationErrors, setValidationErrors] = useState({});

  const validateInputs = () => {
    const errors = {};

    if (name.trim() === "") {
      errors.name = "Name cannot be blank or contain only spaces";
    }

    if (role.trim() === "") {
      errors.role = "Role cannot be blank or contain only spaces";
    }

    // Add similar validation for other fields

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSavePersonalInfo = () => {
    if (validateInputs()) {
      const updatedPersonalInfo = {
        name,
        role,
        summary,
        email,
        phoneNo,
        location,
        linkedIn,
      };

      localStorage.setItem(
        "data",
        JSON.stringify({ ...data, personalInformation: updatedPersonalInfo })
      );
      setData({ ...data, personalInformation: updatedPersonalInfo });

      toast.success("Personal information saved successfully!");
    } else {
      toast.error("Please fix validation errors before saving.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 font-poppins">
        Personal Information
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`border ${
            validationErrors.name ? "border-red-500" : "border-gray-400"
          } px-3 py-2 w-full`}
        />
        {validationErrors.name && (
          <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Role</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className={`border ${
            validationErrors.role ? "border-red-500" : "border-gray-400"
          } px-3 py-2 w-full`}
        />
        {validationErrors.role && (
          <p className="text-red-500 text-sm mt-1">{validationErrors.role}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Summary
        </label>
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="border border-gray-400 px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-400 px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Phone Number
        </label>
        <input
          type="tel"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          className="border border-gray-400 px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Location
        </label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-400 px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          LinkedIn
        </label>
        <input
          type="text"
          value={linkedIn}
          onChange={(e) => setLinkedIn(e.target.value)}
          className="border border-gray-400 px-3 py-2 w-full"
        />
      </div>
      <div className="mt-4">
        <button
          onClick={handleSavePersonalInfo}
          className="bg-blue-500 text-white px-10 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
    </div>
  );
};

export default PersonalInfo;
