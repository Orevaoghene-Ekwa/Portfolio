import React from "react";
import { Link } from "react-router-dom";
import { University, GraduationCap } from "lucide-react";

const EducationPage = () => {
  const education = [
    {
      id: 1,
      institution: "University of Benin",
      icon: <University size={24}/>,
      degree: "Bachelor’s Degree in Marine Engineering(B.Eng)",
      year: "2019 - 2024",
      link: "https://uniben.edu/",
      details:
        "Developed a strong foundation in marine engineering, including ship design, fluid mechanics, marine propulsion systems, and offshore structures."
    },
    {
      id: 2,
      institution: "ALX Software Engineering Program",
      icon: <GraduationCap size={24}/>,
      degree: "Advanced Software Engineering Certificate",
      year: "2023 - 2025",
      link: "https://intranet.alxswe.com/certificates/5XTNc98P6r",
      details:
        "Completed an intensive full-stack program, mastering backend development, databases, and scalable architectures.",
    },
  ];

  return (
    <div className="py-16">
      <section className="mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Title */}
        <h2 className="text-3xl text-gray-800 md:text-4xl font-bold text-center">
          Education & Certifications
        </h2>
        <p className="md:text-lg text-gray-700 text-center mt-3">
          My journey of learning and growth.
        </p>

        {/* Education Timeline */}
        <div className="mt-12 space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="relative flex items-start md:items-center flex-row"
            >
              {/* Icon */}
              <div className="bg-green-500 text-white p-3 rounded-full">
                {edu.icon}
              </div>

              {/* Content */}
              <div className="ml-6 md:w-2/3 w-[100vw]">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {edu.institution}
                </h3>
                <Link to={edu.link}><p className="text-green-500 font-medium">{edu.degree}</p></Link>
                <p className="text-gray-500">{edu.year}</p>
                <p className="mt-2 text-gray-700">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg 
              shadow-md hover:bg-green-600 transition-all duration-300"
          >
            Connect with Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;
