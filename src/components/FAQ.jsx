import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What Is Your Service About?",
      answer: "We offer a platform to help businesses grow effectively."
    },
    {
      question: "How Can I Get Started?",
      answer: "Simply sign up for our free trial or choose a plan."
    },
    {
      question: "Is Customer Support Available?",
      answer: "Yes! 24/7 customer support is available."
    },
    {
      question: "Can I Upgrade Or Downgrade My Plan?",
      answer: "Yes, you can switch plans anytime from your dashboard."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 ">
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-b  from-emerald-400 via-emerald-400 to-emerald-600 text-transparent bg-clip-text ">
        <span className="">Common Queries </span>
        <span className="bg-gradient-to-b  from-purple-400 via-violet-400 to-violet-600 text-transparent bg-clip-text">Solved</span>, Quick Answers For You
      </h2>
      <div className="w-full max-w-xl space-y-4 lg:max-w-3xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-md overflow-hidden transition-colors  duration-300 ${
              openIndex === index
                ? "bg-violet-500 text-gray-100"
                : "bg-violet-400 text-gray-100"
            }`}
          >
     
     <button
  onClick={() => toggleFAQ(index)}
  className="w-full flex justify-between items-center p-4 lg:p-8 focus:outline-none lg:text-left   "
>
  <span className="font-semibold text-lg lg:text-xl">{faq.question}</span>
  <div
    className={`transform transition-transform duration-300 lg:bg-purple-500 lg:rounded-full lg:p-2.5  bg-purple-500 rounded-full p-2  ${
      openIndex === index ? "rotate-180" : "rotate-0"
    }`}
  >
    {openIndex === index ? <ChevronUp /> : <ChevronDown  />}
  </div>
</button>


            <AnimatePresence>
  {openIndex === index && (
   <motion.div
   initial={{ scaleY: 0, opacity: 0 }}
   animate={{ scaleY: 1, opacity: 1 }}
   exit={{ scaleY: 0, opacity: 0 }}
   transition={{ duration: 0.4, ease: "easeInOut" }}
   className="px-4 pb-4 text-sm origin-top overflow-hidden lg:text-xl"
 >
      {faq.answer}
    </motion.div>
  )}
</AnimatePresence>


 
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
