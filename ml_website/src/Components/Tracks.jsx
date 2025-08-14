import React from "react";
import Card from "./Card";

const Tracks = () => {
  const customContent = [
    {
      heading: "Theme for the Hackathon: AI for a Sustainable Future",
      content: `
        <ul class="list-disc pl-5">
          <b>By aligning your project to an SDG, you ensure your work is:</b>
          <li>Impact-driven – Solving real, urgent problems.</li>
          <li>Globally relevant – Benefiting communities worldwide.</li>
          <li>Sustainable – Creating long-term positive change.</li>
        </ul>
      `,
    },
  ];

  return (
    <div className="px-4">
      {/* Section Heading */}
      <div className="flex justify-center items-center mt-40 mb-10">
        <div className="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 className="relative z-10">Buildathon's Theme</h2>
          <span className="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>

      {/* Content + Image */}
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5 lg:ml-30">
        {customContent.map((item, index) => (
          <Card
            key={index}
            heading={item.heading}
            content={item.content}
            height="auto"
            width="70%"
          />
        ))}
        <img
          src="/sdg.png"
          alt="sdg-pic"
          className="mb-8 w-90 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl transition-transform duration-500 ease-in-out hover:rotate-360"
        />
      </div>
    </div>
  );
};

export default Tracks;
