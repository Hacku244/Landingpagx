import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-minty4 w-full p-10 md:p-16 sm:pt-1 text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2  md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold lg:text-3xl bg-gradient-to-r  from-emerald-500 via-purple-200 to-emerald-600 text-transparent bg-clip-text">iNeuron</h2>
          <p className="text-white mt-2 lg:text-md">Elevate your business with our SaaS solution.</p>
          <div className="flex space-x-4 mt-4">
            {[FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter].map((Icon, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-minty1 hover:text-emerald-500 transition-transform duration-300"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-white lg:text-md">
            {["Home", "Features", "Privacy Policy", "Terms & Conditions"].map((item, index) => (
              <li key={index} className="hover:text-emerald-400 transition duration-200 cursor-pointer">{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* Customers */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-white">Customers</h3>
          <ul className="mt-2 space-y-2 text-white lg:text-md">
            {["Pricing", "Blog", "Features", "Support"].map((item, index) => (
              <li key={index} className="hover:text-emerald-400 transition duration-200 cursor-pointer">{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Us */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <ul className="mt-2 space-y-2 text-white lg:text-md cursor-pointer text-sm ">
            <li>📞 002-828-232</li>
            <li>📧  iNeuron@
              gmail.com</li>
            <li>📍 Rawalpindi, Pakistan</li>
          </ul>
        </motion.div>

      </div>

      {/* Bottom Copyright */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center  bg-white bg-clip-text lg:text-xl text-lg mt-10 border-t border-white pt-5"
      >
          Made with ❤️ by Raja Suleman
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
