
import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 shadow-md fixed top-0 w-full z-50 bg-minty2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold   bg-gradient-to-r  from-emerald-500 via-purple-200 to-emerald-600 text-transparent bg-clip-text "
        >
          iNeuron
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-violet-500 font-medium text-lg gap-5">
          {["blogs", "pricing", "testimonials", "services", "contact"].map(
            (item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={1500}
                  offset={-70}
                  className="cursor-pointer hover:text-indigo-600 transition-colors duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </motion.li>
            )
          )}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 font-medium">
          <motion.button whileHover={{ scale: 1.1 }} className="text-gray-500">
            Sign In
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-purple-500 text-white px-6 py-2 rounded-md shadow-lg"
          >
            Sign Up
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden z-[60] p-2 rounded-md bg-purple-500 text-white shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 bg-minty2/95 backdrop-blur-sm flex flex-col items-center justify-center gap-6 text-lg font-medium z-40 pt-20"
          >
            {["blogs", "pricing", "testimonials", "services", "contact"].map(
              (item) => (
                <motion.div key={item} whileHover={{ scale: 1.1 }}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-violet-500 text-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </motion.div>
              )
            )}

            <div className="mt-4 flex flex-col gap-3 w-2/3 max-w-xs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-violet-500 py-2 border border-violet-600 rounded-lg"
              >
                Sign In
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md"
              >
                Sign Up
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;