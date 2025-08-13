import React from "react";

const Card = (props) => {
  return (
    <div className="flex justify-center align-middle">
      <div
        style={{ height: props.height, width: props.width}}
        className="h-80 w-80 sm:w-96 md:w-[300px] lg:w-[350px] xl:w-[400px]
                   sm:h-96 md:h-[300px] lg:h-[350px] xl:h-[400px]
                   bg-white border-2 border-red-300 rounded-2xl shadow-lg 
                   m-4 sm:m-6 md:m-8 lg:m-9 
                   p-4 sm:p-5 md:p-6 lg:p-7 hover:bg-gray-300 transition-all duration-300 ease-in-out hover:border-4 hover:border-gray-400 hover:shadow-2xl hover:-translate-y-3 hover:scale-105"
      >
        <h2 className="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center pb-2 sm:pb-3 md:pb-4">
          About
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          similique. Architecto porro sint dicta vel ratione unde nisi quae
          facilis iure, ad hic error atque ex quis, molestiae distinctio nemo?
        </p>
      </div>
    </div>
  );
};

export default Card;
