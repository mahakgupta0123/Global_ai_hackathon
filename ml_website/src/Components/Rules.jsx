import React from "react";
import Card from "./Card";

const Rules = () => {
  const rulesData = [
    {
      heading: "Team Formation",
      content: ` <ul class="list-disc pl-5">
        <li>Each team must consist of a maximum of 3 members and a minimum 1 member<b>(inclusion of atleast 1 female member is mandatory)</b></li>
        <li>All participants must register individually and join/create a team through Unstop before the deadline.</li>
      </ul>`,
    },
    {
      heading: "Eligibility",
      content: `<b>Only students</b> currently enrolled in an accredited school, college, or university are eligible to participate in this hackathon. Team members can be any course and university (no mandate on same college/institution team )`,
    },
    {
      heading: "Hackathon Duration",
      content: `The hackathon will run for 8 continuous hours on <b>23rd August 2025</b>.
The event will begin and end at the scheduled time. Late submissions will not be accepted.`,
    },
    {
      heading: "Theme and Project Scope",
      content: `
      <ul class="list-disc pl-5">
      <li>Projects must focus on solving real-world problems using AI/ML technologies.</li>
<li>The challenge <b>themes should incorporate 17 UN SDG's Goals.</b></li>
<li>Teams must build projects from scratch during the hackathon period, no pre-built code allowed, except public libraries or APIs.</li></ul>`,
    },
    {
      heading: "Tools and Technologies",
      content: `
      <ul class="list-disc pl-5"><li>Participants may use any programming languages, frameworks, or AI/ML tools of their choice.</li>
<li>Use of no-code or low-code AI platforms is permitted.</li>
<li>Open-source models and datasets are allowed, but must be credited appropriately.</li></ul>`,
    },
    {
      heading: "Submission Requirements",
      content: `<b>Each team must submit:</b>
<ul class="list-disc pl-5">
  <li>A GitHub or public repository link with a detailed ReadMe File.</li>
  <li>A brief write-up (max 500 words) explaining the problem, solution, tech stack, and model details.</li>
  <li>A demo video (max 3 minutes) explaining the working of the project.</li>
</ul>`,
    },
  ];

  return (
    <div>
      {/* Title */}
      <div className="flex justify-center items-center mt-40 mb-10">
        <div className="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
          <h2 className="relative z-10">Submission Rules</h2>
          <span className="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
        </div>
      </div>

      {/* Animated Cards */}
      <div className="overflow-hidden slide-container ml-40 mr-40 mb-20">
        <div className="flex animate-slide space-x-4">
          {/* Duplicate set for seamless loop */}
          <div className="flex justify-center">
            {rulesData.map((rule, index) => (
              <Card
                key={index}
                heading={rule.heading}
                content={rule.content}
                height={"390px"}
                width={"350px"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
