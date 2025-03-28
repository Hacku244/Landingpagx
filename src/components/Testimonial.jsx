import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const testimonials = [
    {
      text: "I've been using this platform for a few months now and it's been a game-changer for my business.",   
        name: "Wade Warren",
      role: "Marketing Coordinator",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "We've seen a huge improvement in team collaboration and productivity with this platform and it's so easy to use too, it's a must-have for any business.",
      
      name: "Esther Howard",
      role: "Software Tester",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "I can't imagine my business without this platform. It's a game-changer for our team.",
      name: "Cameron Williamson",
      role: "Project Manager",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
  ];

  return (
    <section className="py-14 px-4 " id="testimonials">
      <div className="text-center mb-10 lg:mb-16 ">
        <h2 className="text-xl  bg-gradient-to-b  from-emerald-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text font-bold lg:text-2xl">Testimonial</h2>
        <h1 className="text-4xl font-bold lg:text-5xl mt-2 bg-gradient-to-b  from-emerald-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text">
          Customer <span className="  bg-gradient-to-r  from-purple-400 via-emerald-500 to-fuchsia-500 text-transparent bg-clip-text">Experiences</span> With Our Platform
        </h1>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto lg:max-w-4xl lg:text-lg ">
          See how our platform has helped businesses improve efficiency and achieve success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-6 lg:mx-auto
      lg:max-w-6xl">
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
