import { useState } from "react";
import portfolioLogo from "../assets/portfolioLogo.png";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // install: npm install lucide-react

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="flex justify-between items-center px-6 mt-4 h-14 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Logo */}
      <a href="#">
        <img src={portfolioLogo} className="h-full" alt="logo" />
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6">
        <motion.a
          className="py-1 text-lg"
          href="#projects"
          whileHover={{ scale: 1.1, cursor: "pointer", color: "#FF9E00" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileTap={{ scale: 0.9 }}
        >
          Projects
        </motion.a>
        <motion.a
          href="#contact"
          className="py-1 text-lg"
          whileHover={{ scale: 1.1, cursor: "pointer", color: "#FF9E00" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileTap={{ scale: 0.9 }}
        >
          Contact
        </motion.a>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <button
        className="block md:hidden z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-2/3 h-full bg-white/10 backdrop-blur-md flex flex-col items-center justify-center gap-6 shadow-lg z-10"
          >
            <motion.a
              href="#projects"
              whileTap={{ color: "#FF9E00", scale: [0.9, 1.0] }}
              className="text-xl font-semibold hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileTap={{ color: "#FF9E00", scale: [0.9, 1.0] }}
              className="text-xl font-semibold hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
