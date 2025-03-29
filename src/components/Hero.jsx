import React from "react";

const Hero = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center pt-32 mt-8 pb-16 px-4 text-center max-md:pt-16 max-md:pb-12">
      <div className="container mx-auto px-4">
        <p
          className="text-4xl font-bold leading-tight max-xl:text-5xl lg:text-6xl max-md:text-4xl  
          bg-gradient-to-r  from-emerald-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text"
        >
          Boost Your{" "}
          <span
            className=" bg-minty1  px-3.5 rounded-2xl
          bg-gradient-to-r  from-purple-400 via-emerald-500 to-fuchsia-500 text-transparent bg-clip-text"
          >
            Productivity
          </span>
          {"      "}
          With
        </p>
        <p
          className="text-6xl font-bold leading-tight mt-6  max-lg:text-5xl max-md:text-4xl
          bg-gradient-to-r  from-emerald-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text"
        >
          Our Smart SaaS Tools
        </p>
        <p
          className="text-center text-lg mt-6 max-md:text-base max-md:px-4
         bg-gradient-to-r  from-purple-500 via-emerald-400 to-emerald-500 text-transparent bg-clip-text lg:text-xl"
        >
          Ready to experience the future of work? Sign up for a free trial and
          see how our SaaS solution can transform your business.
          <br className="max-md:hidden" />
          No commitments, just results.
        </p>

        <div className="flex justify-center flex-wrap gap-4 pt-10">
          <button
            className="bg-emeraldcustom text-lightyellow px-9 py-4 rounded-full text-2xl hover:bg-emerald-500 
          bg-gradient-to-l  from-emerald-400 via-emerald-500 to-emerald-600 text-white after:ml-2 
          lg:text-2xl lg:px-6
          transition-all duration-300"
          >
            Get Started →
          </button>
          <button
            className="border-2 font-bold text-2xl
            border-emerald-400 text-emeraldcustom px-9 py-4 rounded-full hover:bg-emeraldcustom text-emerald-400 hover:bg-emerald-400 hover:text-white
              lg:text-2xl lg:px-6
             after:ml-2 transition-all duration-300"
          >
            Get Demo →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
