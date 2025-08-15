import React from "react";

const PartnerCard = (props) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative mt-10 mb-4">
        <img
          src={props.image}
          alt={`${props.name} profile`}
          className="w-80 h-48 sm:h-56 md:h-64 object-cover rounded-2xl group-hover:scale-[1.05]
                     transform transition-all duration-500 ease-in-out group-hover:shadow-lg shadow-gray-700 mb-3"
        />
        
      </div>
      <h3 className="font-black text-red-400 group-hover:text-gray-200 text-center p-5 border-2 rounded-2xl group-hover:bg-red-400 transition-colors ease-in-out duration-500 text-xl mb-5 sm:mb-20">
          <a href={`${props.hyperlink}`}>{props.company}</a>
        </h3>
    </div>
  );
};

export default PartnerCard;
