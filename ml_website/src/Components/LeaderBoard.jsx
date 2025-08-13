import React from "react";
import Table from "./Table";

const LeaderBoard = () => {
  const leaderboardData = [
    {
      position: 1,
      name: "Varsha Dewangan",
      score: 72,
      linkedin: "https://www.linkedin.com/in/varsha-dewangan-197983256",
    },
    {
      position: 2,
      name: "Shreya H.S",
      score: 71,
      linkedin: "https://www.linkedin.com/in/shreya-h-s/",
    },
    {
      position: 3,
      name: "Neha Sabari Sree",
      score: 68,
      linkedin: "https://www.linkedin.com/in/neha-sabari-sree-375410296/",
    },
    {
      position: 4,
      name: "Manya BM",
      score: 65,
      linkedin: "https://www.linkedin.com/in/manya-bm-010955284/",
    },
    {
      position: 5,
      name: "Shreya Sharma",
      score: 61,
      linkedin: "https://www.linkedin.com/in/shreya-8970-",
    },
    {
      position: 6,
      name: "Meghali Dutta",
      score: 59,
      linkedin: "https://www.linkedin.com/in/meghali-dutta",
    },
    {
      position: 7,
      name: "Manasvi Sharma",
      score: 58,
      linkedin: "https://www.linkedin.com/in/manasvi-sharma-85133a314",
    },
    {
      position: 8,
      name: "Ankita Dass",
      score: 55,
      linkedin: "https://www.linkedin.com/in/ankita-dass-3377b1245/",
    },
    {
      position: 9,
      name: "Sheefanigar Syed",
      score: 55,
      linkedin: "https://www.linkedin.com/in/sheefanigar/",
    },
    {
      position: 10,
      name: "Astha Mishra",
      score: 52,
      linkedin: "http://www.linkedin.com/in/aastha-mishra-b5a171fbb",
    },
  ];

  const leaderboardData2 = [
    {
      position: 1,
      name: "Charitha Puralasetty",
      score: 84,
      contact: "22eg110b49@anurag.edu.in",
    },
    {
      position: 2,
      name: "Kodali Gnana Prasoona",
      score: 80,
      contact: "gnanaprasoona05@gmail.com",
    },
    {
      position: 3,
      name: "Asma Firdous Siddiqui",
      score: 80,
      contact: "asmasiddiqui511@gmail.com",
    },
    {
      position: 4,
      name: "Neha Sabari Sree",
      score: 79,
      contact: "https://www.linkedin.com/in/neha-sabari-sree-375410296/",
    },
    {
      position: 5,
      name: "Ruchika Kengal",
      score: 79,
      contact: "ruchikakengal@gmail.com",
    },
    {
      position: 6,
      name: "Divya Hari Kumar",
      score: 70,
      contact: "20h51a6677@cmrcet.ac.in",
    },
    {
      position: 7,
      name: "Varsha Dewangan",
      score: 64,
      contact: "https://www.linkedin.com/in/varsha-dewangan-197983256",
    },
    {
      position: 8,
      name: "Shreya H S",
      score: 59,
      contact: "https://www.linkedin.com/in/shreya-h-s/",
    },
    {
      position: 9,
      name: "Priya Gupta",
      score: 55,
      contact: "priya8757gupta@gmail.com",
    },
    {
      position: 10,
      name: "Prapti Devadhe",
      score: 52,
      contact: "praptidevadhe912@gmail.com",
    },
  ];

  const getTrophyEmoji = (position) => {
    if (position === 1) return "🥇";
    if (position === 2) return "🥈";
    if (position === 3) return "🥉";
    return "";
  };

  return (
    <div className="container mx-auto px-4 py-8">
       <div class="flex justify-center items-center mt-40 mb-10">
        <div class="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-4 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 class="relative z-10">Leaderboard: Week Wise</h2>

          <span class="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>

      <Table
        participants={leaderboardData}
        getTrophyEmoji={getTrophyEmoji}
        caption={"Week 1: ScoreBoard"}
      />
      <Table
        participants={leaderboardData2}
        getTrophyEmoji={getTrophyEmoji}
        caption={"Week 2: ScoreBoard"}
      />
    </div>
  );
};

export default LeaderBoard;
