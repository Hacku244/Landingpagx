import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    name: "Basic",
    monthly: "FREE",
    annually: "$0/yr",
    features: [
      "1 Project",
      "Basic Support",
      "Access to Community",
      "Basic Tools",
      "Basic Analytics",
    ],
  },
  {
    name: "Pro",
    monthly: "$20/mo",
    annually: "$200/yr",
    features: [
      "10 Projects",
      "Priority Support",
      "Advanced Tools",
      "Advanced Analytics",
      "Team Collaboration",
    ],
  },
  {
    name: "Enterprise",
    monthly: "$50/mo",
    annually: "$500/yr",
    features: [
      "Unlimited Projects",
      "Dedicated Manager",
      "Custom Solutions",
      "Advanced Tools",
      "Advanced Analytics",
    ],
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen    p-8"
      id="pricing"
    >
      {/* Toggle Switch */}
      <div className="flex items-center mb-8 cursor-pointer">
        <span className="mr-4 font-medium text-violet-500">Monthly</span>
        <input
          type="checkbox"
          checked={billingCycle === "annually"}
          onChange={() =>
            setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly")
          }
          className="hidden"
        />
        <div
          className="relative w-12 h-6  bg-gray-300  rounded-full"
          onClick={() =>
            setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly")
          }
        >
          <div
            className={`absolute w-6 h-6  bg-violet-400 rounded-2xl shadow transition-transform duration-300  ${
              billingCycle === "annually" ? "translate-x-6" : ""
            }`}
          ></div>
        </div>
        <span className="ml-4 font-medium text-violet-500">Annually</span>
      </div>

      {/* Pricing Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-full max-w-screen-xl md:mx-auto  lg:gap-10 lg:mx-24
      lg:max-w-screen-xl "
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            className="w-full max-w-sm px-6 py-8 bg-gradient-to-b  from-purple-400 via-violet-400 to-violet-600 text-white ro
          
            shadow-lg rounded-2xl border border-gray-200" >
            <div className="p-6 flex flex-col items-start text-start">
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>

              {/* Animate Price */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={billingCycle}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl font-semibold mb-4"
                >
                  {billingCycle === "monthly" ? plan.monthly : plan.annually}
                </motion.p>
              </AnimatePresence>

              {/* Features */}
              <ul className="mb-6 space-y-2 text-left" >
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-md text-white">
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Animated Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.3 }}
                className="bg-violet-700 text-white py-2 px-12 text-xl rounded-4xl hover:bg-indigo-900 transition-colors
                lg:pt-2 lg:px-18 lg:rounded-4xl  "
              >
                Upgrade Now
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
