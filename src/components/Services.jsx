import React from "react";

const Services = () => {
  return (
    <section className="pt-20" id="services">
      <div className="container px-4 mx-auto flex flex-col justify-evenly items-center text-center">
        <p className="text-2xl  font-bold pb-5 font-sans bg-gradient-to-r  from-purple-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text ">
          Basic Pack
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold  bg-gradient-to-r  from-emerald-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text ">
          Services Included has{" "}
          <span
            className="
          bg-gradient-to-r  from-purple-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text "
          >
            Every Plan
          </span>{" "}
        </h1>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-90 gap-10 pt-20
       "
      >
        <div
          className="container border-1 border-gray-300 rounded-lg bg-gradient-to-b  from-purple-400 via-violet-400 to-violet-600 h-80 w-[340px] 
        flex flex-col pl-5 ml-8 mr-20 lg:w-[400px] md:w-[300px] md:ml-16 lg:-mr-80"
        >
          <img src="p1.png" alt="p11" width={60} height={60} className="pt-5" />

          <h1 className="text-2xl font-bold text-white  pt-10">
            Product Launch
          </h1>
          <p className="text-white pt-4">
            Our Team Ensures a smooth product launch, driving immediate results
          </p>
          <h4 className="text-white pt-10 font-bold">Learn More</h4>
        </div>

        <div
          className="container border-1 border-gray-300 bg-gradient-to-b  from-purple-400 via-violet-400 to-violet-600  rounded-lg  h-80 w-[340px]
         flex flex-col pl-5 ml-8 mr-20 lg:w-[400px] md:w-[300px] md:mr-40  "
        >
          <img src="p2.png" alt="p11" width={60} height={60} className="pt-5" />
          <h1 className="text-2xl font-bold text-white pt-10">
            Revenue Generation
          </h1>
          <p className="text-white pt-4">
            Our Strategies help you to generate more revenue, driving long-term
            success
          </p>
          <h4 className="text-white pt-10 font-bold">Learn More</h4>
        </div>

        <div
          className="container hidden lg:block  border-1 border-gray-300 rounded-lg bg-gradient-to-b  from-purple-400 via-violet-400 to-violet-600 
        h-80 w-[340px] pl-5 ml-8 mr-20 lg:w-[400px] md:w-[300px] md:ml-16 lg:-ml-[460px]"
        >
          <img src="p3.png" alt="p11" width={60} height={60} className="pt-5" />
          <h1 className="text-2xl font-bold text-white pt-10">
            Quick Solutions
          </h1>
          <p className="text-white pt-4">
            We offer quick and effective solutions to address your challenges,
            ensuring a swift resolution
          </p>
          <h4 className="text-white pt-10 font-bold">Learn More</h4>
        </div>

        <div
          className="container block md:hidden border-1 border-gray-300 rounded-lg bg-gradient-to-b  from-purple-400 via-violet-400 to-violet-600 h-80
         w-[340px] pl-5 ml-8 mr-20 lg:w-[400px] md:w-[300px] md:ml-16"
        >
          <img src="p3.png" alt="p11" width={60} height={60} className="pt-5" />
          <h1 className="text-2xl font-bold text-white pt-10">
            Quick Solutions
          </h1>
          <p className="text-white pt-4">
            We offer quick and effective solutions to address your challenges,
            ensuring a swift resolution
          </p>
          <h4 className="text-white pt-10 font-bold">Learn More</h4>
        </div>
      </div>
      {/* 4th Section */}
      <div className="flex flex-col lg:flex-row items-center justify-evenly px-6 py-16 max-w-7xl mx-auto mt-16">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
          <p className="bg-gradient-to-b  from-purple-400 via-violet-400 to-violet-600 text-gray-100 rounded-2xl py-1
           px-4 mb-6 lg:px-2">
            Product Launch Tool
          </p>

          <h2 className="text-4xl  font-bold bg-gradient-to-r  from-emerald-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text lg:text-4xl ">
            Streamline Your Product
          </h2>

          <h2 className="text-4xl lg:text-4xl font-bold  mt-4 bg-gradient-to-r  from-emerald-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text ">
            Launch With Our{" "}
            <span className="bg-gradient-to-r  from-purple-400 via-emerald-500 to-fuchsia-500 text-transparent bg-clip-text mt-2 lg:mt-4">
              Powerful
            </span>
          </h2>

          <h2 className="text-4xl lg:text-4xl font-bold mt-4 bg-gradient-to-r  from-emerald-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text ">
            All-In-One Tool
          </h2>

          <p className=" mt-6 bg-gradient-to-r  from-purple-500 via-emerald-400 to-emerald-500 text-transparent bg-clip-text lg:text-xl leading-relaxed text-lg">
            Ready to experience the future of work? Sign up for a free trial and
            see how our SaaS solution can transform your business. We offer a
            wide range of tools.
          </p>
        </div>

        {/* Right Image */}
        <div className="mt-10 lg:mt-0">
          <img
            src="P4.jpg"
            alt="Product"
            width={500}
            height={1000}
            className="bg-gray-100 rounded-2xl"
          />
        </div>
      </div>

      {/* 5th Section */}
      <div className="flex flex-col lg:flex-row items-center justify-evenly px-6 py-16 max-w-7xl mx-auto">
        {/* Left Image */}
        <div className="mb-10 lg:mb-0">
          <img
            src="P5.jpg"
            alt="Revenue"
            width={500}
            height={1000}
            className="bg-gray-100 rounded-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
          <p className="bg-gradient-to-b  from-purple-400 via-violet-400 to-violet-600 text-white rounded-2xl py-1
           px-4 mb-6 lg:px-2">
            Revenue Generation
          </p>

          <h2 className="text-4xl lg:text-4xl font-bold bg-gradient-to-b  from-emerald-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text">
            Accelerate Revenue
          </h2>

          <h2 className="text-4xl lg:text-4xl font-bold bg-gradient-to-b  from-emerald-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text mt-4">
            Generation With Proven
          </h2>

          <h2 className="text-4xl lg:text-4xl font-bold bg-gradient-to-b  from-emerald-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text mt-4">
            <span className="bg-gradient-to-r  from-purple-400 via-emerald-500 to-fuchsia-500 text-transparent bg-clip-text">
              Strategies
            </span>{" "}
            And Tools
          </h2>

          <p className="bg-gradient-to-b  from-purple-500 via-emerald-400 to-emerald-500 text-transparent bg-clip-text mt-6 text-base lg:text-xl leading-relaxed">
            Ready to experience the future of work? Sign up for a free trial and
            see how our SaaS solution can transform your business, no
            commitments, just results.
          </p>
        </div>
      </div>

      <button className="bg-gradient-to-r  from-purple-400 via-violet-400 to-violet-600 text-white px-9 mx-auto py-4 mt-14 relative flex justify-center  items-center  rounded-full hover:bg-violet-500 after:ml-2 transition-all duration-300 text-2xl">
        Get Started →
      </button>
    </section>
  );
};

export default Services;
