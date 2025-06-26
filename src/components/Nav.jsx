import portfolioLogo from "../assets/portfolioLogo.png";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      className="flex justify-around items-center mt-4 h-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <a href="#">
        <img src={portfolioLogo} className="h-full font-bold text-white" />
      </a>
      <div className="flex gap-6">
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
          className=" py-1 text-lg"
          whileHover={{ scale: 1.1, cursor: "pointer", color: "#FF9E00" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileTap={{ scale: 0.9 }}
        >
          Contact
        </motion.a>
      </div>
    </motion.nav>
  );
}
