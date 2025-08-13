import React from "react";
import MentorCard from "./MentorCard";

const Human = [
  {
    name: "Alice Johnson",
    company: "Google",
    role: "Senior Engineer",
    image: "#",
    linkedinUrl: "#",
  },
  {
    name: "Alice Johnson",
    company: "Google",
    role: "Senior Engineer",
    image: "#",
    linkedinUrl: "#",
  },
  {
    name: "Alice Johnson",
    company: "Google",
    role: "Senior Engineer",
    image: "#",
    linkedinUrl: "#",
  },
  {
    name: "Alice Johnson",
    company: "Google",
    role: "Senior Engineer",
    image: "#",
    linkedinUrl: "#",
  },
  {
    name: "Alice Johnson",
    company: "Google",
    role: "Senior Engineer",
    image: "#",
    linkedinUrl: "#",
  },
  {
    name: "Alice Johnson",
    company: "Google",
    role: "Senior Engineer",
    image: "#",
    linkedinUrl: "#",
  },
];

const Humans = () => {
  return (
    <div>
      <div class="flex justify-center items-center mt-40 mb-10">
        <div class="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-4 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 class="relative z-10">Humans Behind It</h2>

          <span class="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 m-5 xl:ml-55 xl:mr-55">
        {Human.map((Human, index) => (
          <MentorCard
            key={index}
            name={Human.name}
            company={Human.company}
            role={Human.role}
            image={Human.image}
            linkedinUrl={Human.linkedinUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Humans;
