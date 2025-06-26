import heroPhoto from "../assets/LinkedIn.png";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import HorizontalLine from "./HorizontalLine";

export default function Main() {
  return (
    <>
      <motion.main
        className="flex flex-2 justify-center m-24 gap-4"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity:1, x: 0 }}
        transition={{ type: "spring", duration: 1, ease: "easeInOut" }}
      >
        <div className="flex flex-col justify-start-safe w-1/3 h-full">
          <h1 className="text-6xl fony-bold text-white ">Chirag Sagar</h1>
          <p className="mt-4 text-white text-xl tracking-tight">
            Hi, I’m Chirag Sagar A Full Stack Developer skilled in React, Flask
            & MongoDB — building clean, responsive, and real-world web apps.
          </p>
          <span className="text-4xl mt-5 bg-gradient-to-r from-[#FF9E00] via-[#FFC300] to-[#FFD60A] bg-clip-text text-transparent">
            Software Developer
          </span>
          <div className="mt-4 flex flex-row gap-10">
            <motion.button
              className="relative overflow-hidden px-6 py-2 text-lg font-semibold border border-[#FF9E00] rounded"
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
                  "_black", "noopener noreferrer"
                )
              }
            >
              Resume
            </motion.button>
            <div className="flex flex-row justify-center items-center gap-6 text-3xl">
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
        <div className="flex justify-center-safe items-center w-1/3 h-[60vh]">
          <motion.img
            className="h-full rounded-xl drop-shadow-[0px_0px_5px_rgb(0,0,0)]"
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
