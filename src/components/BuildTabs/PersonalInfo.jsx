// // ContactInfoInput.js
// import { useRecoilState } from "recoil";
// import { personalInformationState } from "../../atoms/ResumeAtom";

// const ContactInfoInput = () => {
//   const [personalInformation, setPersonalInformation] = useRecoilState(
//     personalInformationState
//   );

//   const handleContactChange = (index, field, value) => {
//     const updatedContactInfo = [...personalInformation.contactInfo];
//     updatedContactInfo[index][field] = value;

//     setPersonalInformation((prevInfo) => ({
//       ...prevInfo,
//       contactInfo: updatedContactInfo,
//     }));
//   };

//   const handleAddContact = () => {
//     setPersonalInformation((prevInfo) => ({
//       ...prevInfo,
//       contactInfo: [...prevInfo.contactInfo, { icon: null, label: "" }],
//     }));
//   };

//   const handleRemoveContact = (index) => {
//     const updatedContactInfo = [...personalInformation.contactInfo];
//     updatedContactInfo.splice(index, 1);

//     setPersonalInformation((prevInfo) => ({
//       ...prevInfo,
//       contactInfo: updatedContactInfo,
//     }));
//   };

//   return (
//     <div className="mb-4">
//       <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
//       {personalInformation.contactInfo.map((contact, index) => (
//         <div key={index} className="mb-2">
//           <label className="mr-2">Label:</label>
//           <input
//             type="text"
//             value={contact.label}
//             onChange={(e) =>
//               handleContactChange(index, "label", e.target.value)
//             }
//             className="border border-gray-300 p-1 rounded"
//           />
//           {/* Add input fields for other properties like icon, link, etc. if needed */}
//           <button
//             onClick={() => handleRemoveContact(index)}
//             className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//       <button
//         onClick={handleAddContact}
//         className="bg-blue-500 text-white px-2 py-1 rounded"
//       >
//         Add Contact
//       </button>
//     </div>
//   );
// };

// export default ContactInfoInput;

const PersonalInfo = () => {
  return <div>PersonalInfo</div>;
};

export default PersonalInfo;
