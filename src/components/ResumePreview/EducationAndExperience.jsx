/* eslint-disable react/prop-types */

const EducationAndExperience = ({ experience, education }) => (
  <div className="md:flex flex-col w-1/2">
    <div className="md:w-full pr-4">
      <h2 className="text-xl font-medium mb-2 uppercase font-poppins">
        Work Experience
      </h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <p className="text-lg font-semibold text-justify ">{exp.title}</p>
          <p className="text-gray-900 font-medium text-justify">
            {exp.company}
          </p>
          <div className="flex justify-between">
            <p className="text-gray-600 text-xs text-justify font-poppins">
              {`${exp.dateJoining} - ${exp.dateLeaving}`}
            </p>
            <p className="text-gray-600 text-xs text-justify">{exp.location}</p>
          </div>
          <div className="leading-tight">
            {exp.description?.map((desc, index) => (
              <div key={index} className="flex">
                <p className="mr-1">{`▪`}</p>
                <p key={index} className="text-gray-900 text-justify">
                  {`${desc}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="md:w-full pr-4 mb-4 md:mb-0">
      <h2 className="text-xl font-medium mb-2 uppercase font-poppins">
        Education
      </h2>
      <div className="mb-4">
        {education.map((item, index) => (
          <div key={index}>
            <h3 className="text-base font-bold text-justify">{item.degree}</h3>
            <p className="text-gray-900 font-medium text-justify">
              {item.institution}
            </p>
            <p className="text-gray-600 text-xs text-justify font-poppins">{`${item.joiningDate} - ${item.graduationDate}`}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default EducationAndExperience;
