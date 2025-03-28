import React from "react";

const TestimonialCard = ({ text, name, role, image }) => {
  return (
    <div className="bg-gradient-to-b  from-purple-400 via-violet-400 to-violet-600 p-6 rounded-2xl shadow-md flex flex-col items-center lg:items-start ">
      <span className="text-emerald-500 text-5xl mb-2 lg:text-8xl">❝</span>
      <p className="text-white text-center mb-4 lg:text-left lg:text-xl">{text}</p>
      <div className="flex items-center gap-3">
        <img src={image} alt={name} className="w-10 h-10 rounded-full " />
        <div>
          <h4 className="font-semibold lg:text-lg text-white">{name}</h4>
          <p className="text-sm text-white lg:text-md">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
