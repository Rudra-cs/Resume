/* eslint-disable react/prop-types */
import React from "react";
const ContactInfo = ({ contacts }) => (
  <div className="flex items-center justify-evenly flex-wrap gap-3">
    {contacts.map(({ icon, label, link }, index) => (
      <div key={index} className="text-sm flex justify-center items-center">
        {icon && React.cloneElement(icon, { className: "inline-block mr-2" })}
        {link ? (
          <a href={link} className="text-blue-500 hover:underline">
            {label}
          </a>
        ) : (
          <span>{label}</span>
        )}
      </div>
    ))}
  </div>
);

export default ContactInfo;
