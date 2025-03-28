


import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3782ff28-576c-4a1e-8db4-eda657617b62");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 z-0" id="contact">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-violet-400 text-white p-8 rounded-2xl text-center w-full max-md:mx-auto lg:max-w-5xl shadow-lg"
      >
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold lg:text-4xl mb-4 lg:pt-14"
        >
          "Unlock More With A Simple Subscription"
        </motion.h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-md mb-4 text-center lg:px-40"
        >
          Unlock endless possibilities with a simple subscription. Enjoy exclusive benefits, premium content, and more, all at your fingertips.
        </motion.p>
        <motion.form  
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            className="w-full p-3 text-white font-bold bg-violet-500/50 rounded-full outline-none shadow-md focus:ring-2 focus:ring-purple-700 placeholder-violet-200"
            required
          />
          <input
            type="email"
            placeholder="Enter Your Gmail Address"
            name="email"
            className="w-full p-3 text-white font-bold bg-violet-500/50 rounded-full outline-none shadow-md focus:ring-2 focus:ring-purple-700 placeholder-violet-200"
            required
          />
          <textarea
            placeholder="Enter Your Message"
            name="message"
            className="w-full p-3 text-white font-bold bg-violet-500/50 rounded-lg outline-none shadow-md focus:ring-2 focus:ring-purple-700 placeholder-violet-200"
            rows="3"
            required
          ></textarea>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-violet-600 text-white px-6 py-3 rounded-2xl lg:px-20 w-full shadow-md hover:bg-purple-800 transition-all lg:w-auto"
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;