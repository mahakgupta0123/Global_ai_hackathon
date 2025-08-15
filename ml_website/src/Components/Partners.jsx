import React from "react";
import PartnerCard from "./PartnerCard";

const Partners = (props) => {
  const partner = [
    {
      name: "unstop",
      image: "/unstop.png",
      company:"UNSTOP",
      hyperlink:"https://unstop.com/"
    },
      {
      name: "unstop",
      image: "/unstop.png",
      company:"UNSTOP",
      hyperlink:"https://unstop.com/"
    },
  ];
  return (
    <div>
      <div class="flex justify-center items-center mt-40 mb-10">
        <div class="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 class="relative z-10">Our Partners</h2>

          <span class="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>
      <div className="gap-8 px-4 flex-wrap flex sm:flex justify-center items-center">
        {partner.map((partnerItem, index) => (
          <PartnerCard 
            key={index}
            name={partnerItem.name}
            image={partnerItem.image}
            company={partnerItem.company}
            hyperlink={partnerItem.hyperlink}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
