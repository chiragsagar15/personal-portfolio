import heroPhoto from "../assets/LinkedIn.png";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import HorizontalLine from "./HorizontalLine";

export default function Main() {
  return (
    <>
      <motion.main
        className="flex flex-col xl:flex-row justify-center items-center xl:items-start m-8 xl:m-24 gap-10"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 1, ease: "easeInOut" }}
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col w-full xl:w-1/3 text-center xl:text-left">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white">
            Chirag Sagar
          </h1>
          <p className="mt-4 text-white text-base md:text-lg xl:text-xl tracking-tight">
            Hi, I’m Chirag Sagar — a Full Stack Developer skilled in React,
            Flask & MongoDB — building clean, responsive, and real-world web
            apps.
          </p>
          <span className="text-2xl md:text-3xl xl:text-4xl mt-5 bg-gradient-to-r from-[#FF9E00] via-[#FFC300] to-[#FFD60A] bg-clip-text text-transparent">
            Software Developer
          </span>
          <div className="mt-6 flex justify-center xl:justify-start flex-wrap gap-6">
            <motion.button
              className="relative overflow-hidden px-6 py-2 text-base md:text-lg font-semibold border border-[#FF9E00] rounded"
              whileHover={{
                scale: 1.15,
                backgroundColor: "#FF9E00",
                cursor: "pointer",
                boxShadow: "3px 3px 10px rgb(0, 0, 0, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1iQgZNW-EnxG9aNk0DYwgVgRvT2FCREeF/view?usp=sharing",
                  "_blank",
                  "noopener noreferrer"
                )
              }
            >
              Resume
            </motion.button>

            <div className="flex gap-6 text-2xl md:text-3xl items-center">
              <motion.a
                href="https://github.com/chiragsagar15?tab=repositories"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.15,
                  color: "#FF9E00",
                  cursor: "pointer",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/chirag-sagar-01145a24a/"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.15,
                  color: "#FF9E00",
                  cursor: "pointer",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center items-center w-full xl:w-1/3 h-[40vh] md:h-[50vh] xl:h-[60vh]">
          <motion.img
            className="h-full max-w-full rounded-xl drop-shadow-[0px_0px_5px_rgb(0,0,0)]"
            src={heroPhoto}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 10px rgb(0, 0, 0, 0.5)",
              cursor: "pointer",
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </motion.main>
      <HorizontalLine />
    </>
  );
}
