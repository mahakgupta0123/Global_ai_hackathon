import React from "react";
import { Linkedin } from "lucide-react";

const MentorCard = ({
  name = "John Doe",
  company = "Tech Corp",
  role = "Senior Developer",
  image = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  linkedinUrl = "#",
}) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm lg:max-w-none mx-auto lg:mx-0 m-5">
      <div
        className="flex flex-col rounded-xl p-3 sm:p-4 md:p-6 h-full
                   border-2 border-red-300 hover:border-gray-400
                   transition-all duration-300 ease-in-out
                   hover:scale-105 hover:shadow-xl
                   bg-white backdrop-blur-sm
                   group cursor-pointer text-red-300"
        style={{
          backdropFilter: "saturate(180%) blur(14px)",
        }}
      >
        {/* Profile Image */}
        <div className="relative mb-4">
          <img
            src={image}
            alt={`${name} profile`}
            className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl
                     border-2 border-red-200 group-hover:border-gray-300
                     transition-colors duration-300"
          />
          {/* Overlay effect on hover */}
          <div
            className="absolute inset-0 bg-gray-500/20 rounded-xl opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>

        {/* Card Content */}
        <div className="flex flex-col space-y-3 sm:space-y-4 flex-grow">
          {/* Name and LinkedIn */}
          <div className="flex justify-between items-start">
            <div className="flex-1 min-w-0">
              <h1
                className="font-bold text-lg sm:text-xl md:text-2xl text-red-500 
                           truncate group-hover:text-gray-600 transition-colors duration-300"
              >
                {name}
              </h1>
            </div>

            {/* LinkedIn Icon */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 ml-3 p-2 rounded-full 
                       bg-red-500 hover:bg-gray-600 text-white
                       transition-all duration-300 hover:scale-110
                       shadow-lg hover:shadow-gray-500/25"
              aria-label={`Visit ${name}'s LinkedIn profile`}
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          <div className="flex justify-between items-start gap-4">
            <p
              className="text-sm sm:text-base md:text-lg text-red-500 font-semibold 
                        truncate flex-1 group-hover:text-gray-600 transition-colors duration-300"
            >
              {company}
            </p>
            <p
              className="text-sm sm:text-base md:text-lg text-red-500 font-semibold 
                        text-right flex-1 group-hover:text-gray-600 transition-colors duration-300"
            >
              {role}
            </p>
          </div>

          {/* Decorative line */}
          <div
            className="w-full h-px bg-gradient-to-r from-red-300 via-red-500 to-red-300 
                        opacity-50 group-hover:opacity-100 transition-opacity duration-300 mt-auto"
          ></div>
        </div>
      </div>
    </div>
  );
};
export default MentorCard;