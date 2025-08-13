// Table.jsx
import React from "react";
import { Linkedin } from "lucide-react";

const Table = ({ participants, getTrophyEmoji, caption }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full mt-10 border-2 border-red-300">
        <caption className="text-center text-red-500 font-bold">{caption}</caption>
        <thead className="bg-red-50">
          <tr className="border-2 border-red-300">
            <th className="px-6 py-3 text-xl font-bold text-red-400 uppercase tracking-wider text-center border-2 border-red-300">
              Position
            </th>
            <th className="px-6 py-3 text-xl font-bold text-red-400 uppercase tracking-wider text-center border-2 border-red-300">
              Name
            </th>
            <th className="px-6 py-3 text-xl font-bold text-red-400 uppercase tracking-wider text-center border-2 border-red-300">
              Score
            </th>
            <th className="px-6 py-3 text-xl font-bold text-red-400 uppercase tracking-wider text-center border-2 border-red-300">
              LinkedIn
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 ">
          {participants.map((participant) => (
            <tr
              key={participant.position}
              className="hover:bg-red-50 transition-colors duration-200 border-2 border-red-300"
            >
              <td className="px-6 py-4 whitespace-nowrap border-2 border-red-300">
                <div className="flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-900">
                    {participant.position}
                  </span>
                  <span className="ml-2 text-xl">
                    {getTrophyEmoji(participant.position)}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-2 border-red-300">
                <div className="text-lg font-semibold text-gray-900 text-center">
                  {participant.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center border-2 border-red-300">
                <div className="text-xl font-bold text-red-600">
                  {participant.score}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <a
                  href={participant.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-red-600 hover:bg-gray-700 rounded-lg transition-colors duration-200 text-white"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
