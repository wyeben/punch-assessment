import React from "react";
import Group1 from "../assets/group1.svg";
import Group2 from "../assets/group2.svg";
import Group3 from "../assets/group3.svg";
import One from "../assets/one.svg";
import Two from "../assets/two.svg";
import Three from "../assets/three.svg";
import DarkLogo from "../assets/dark-logo.svg";

const Lists = [
  {
    image: One,
    title: "Find your next star performer.",
    description:
      "Explore the vast Zwilt marketplace to find the candidate that meets your needs.",
    text: "Join Now",
    color: "#EDEFFF",
    group: Group1,
  },
  {
    image: Two,
    title: "Evaluate to your heart's content.",
    description:
      "Assess the candidate through work history, transparent tests and video interviews.",
    text: "Browse More",
    color: "#FFF7E0",
    group: Group2,
  },
  {
    image: Three,
    title: "Start building your team.",
    description:
      "Onboard your candidate right away and start creating the next big thing.",
    text: "Join Now",
    color: "#F2F2F3",
    group: Group3,
  },
];

const Journey = () => {
  return (
    <div className="md:py-20">
      <h1 className="md:text-5xl text-3xl font-bold mb-8 text-center">
        Start your journey today.
      </h1>

      {Lists.map((list, index) => (
        <div
          key={index}
          className={`slanted-border py-5 md:py-0 px-3 md:pl-7 md:pr-0 flex justify-between mb-2 cursor-pointer`}
          style={{ backgroundColor: list.color }}
        >
          <div className="flex gap-5 px-3 py-5 md:mt-4 md:py-16">

            <img
              src={list.image}
              alt={list.title}
              className="h-14 md:h-[83px]"
            />
            <div className="max-w-sm flex flex-col gap-6">

              <h1 className="md:text-4xl text-xl font-bold">
                {list.title}
              </h1>{" "}

              <p className="text-base text-[#959595]">{list.description}</p>
              <div className="flex space-x-4 hover:bg-black hover:rounded-xl hover:text-white cursor-pointer">
                <div className="bg-black p-4 rounded-xl hover:w-20">
                  <img src={DarkLogo} alt="Dark Logo" className="invert" />
                </div>
                <button className="font-semibold text-base z-10 hover:text-white">
                  {list.text}
                </button>
              </div>
            </div>
          </div>

          <div className="h-full hidden md:block">

            <img src={list.group} alt={list.title} className="h-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Journey;
