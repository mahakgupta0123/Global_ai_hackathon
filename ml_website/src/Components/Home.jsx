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
      <section className="bg-red-400">
        <div className="relative mt-45">
          <svg
            viewBox="0 0 1200 20"
            className="w-full h-5"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0,0 C20,20 40,20 60,0 C80,20 100,20 120,0 C140,20 160,20 180,0 C200,20 220,20 240,0 C260,20 280,20 300,0 C320,20 340,20 360,0 C380,20 400,20 420,0 C440,20 460,20 480,0 C500,20 520,20 540,0 C560,20 580,20 600,0 C620,20 640,20 660,0 C680,20 700,20 720,0 C740,20 760,20 780,0 C800,20 820,20 840,0 C860,20 880,20 900,0 C920,20 940,20 960,0 C980,20 1000,20 1020,0 C1040,20 1060,20 1080,0 C1100,20 1120,20 1140,0 C1160,20 1180,20 1200,0 L1200,20 L0,20 Z"
              fill="#f5f5dc"
              className="drop-shadow-sm"
            />
          </svg>
        </div>
        <img
          src="./public/landingPage.png"
          alt="banner"
          className="w-full h-[50vh] sm:h-[10%]"

        />
        <div className="relative">
          <svg
            viewBox="0 0 1200 20"
            className="w-full h-5"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0,20 C20,0 40,0 60,20 C80,0 100,0 120,20 C140,0 160,0 180,20 C200,0 220,0 240,20 C260,0 280,0 300,20 C320,0 340,0 360,20 C380,0 400,0 420,20 C440,0 460,0 480,20 C500,0 520,0 540,20 C560,0 580,0 600,20 C620,0 640,0 660,20 C680,0 700,0 720,20 C740,0 760,0 780,20 C800,0 820,0 840,20 C860,0 880,0 900,20 C920,0 940,0 960,20 C980,0 1000,0 1020,20 C1040,0 1060,0 1080,20 C1100,0 1120,0 1140,20 C1160,0 1180,0 1200,20 L1200,0 L0,0 Z"
              fill="#f5f5dc"
              className="drop-shadow-sm"
            />
          </svg>
        </div>
      </section>

      <div className="flex justify-center items-center mt-20">
        <div className="font-extrabold text-xl sm:text-2xl md:text-3xl text-gray-700 text-center bg-red-400 p-6 rounded-4xl border-r-9 border-b-9 border-gray-500  hover:border-0 hover:transition-all ease-in-out duration-75">
          <h2 className="relative z-10"><a href="https://unstop.com/hackathons/global-ai-buildathon-chandigarh-group-of-colleges-landran-1531869/" target="_blank">Register Now on Unstop</a></h2>
        </div>
      </div>

      <div className="relative h-80 mt-5 mb-5 overflow-hidden">
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

      <div className="mt-20">
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
