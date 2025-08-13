import React from "react";
import Card from "./Card";
import Tape from "./Tape";

const Home = () => {
  const words = [
    "REGISTER",
    "FOR",
    "GLOBAL",
    "AI",
    "BUILDATHON",
    "NOW",
    "ON",
    "UNSTOP",
    "REGISTER",
    "FOR",
    "GLOBAL",
    "AI",
    "BUILDATHON",
    "NOW",
    "ON",
    "UNSTOP",
  ];

  return (
    <div>
      <img
        src="./public/home.png"
        alt="banner"
        className="h-210 w-full -mt-15 mask-t-from-50%"
      />

      <div className="relative h-80 mt-10 mb-10 overflow-hidden">
        <Tape
          textList={words}
          rotation="-rotate-6"
          textDirection="right"
          moveDirection="move-diagonal-right"
        />

        <Tape
          textList={words}
          rotation="rotate-6"
          textDirection="left"
          moveDirection="move-diagonal-left"
        />
      </div>

      <div className="mt-30">
        <Card height={"200px"} width={"60%"} />
      </div>
      <div className="xl:flex justify-center sm:flex flex-wrap">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
