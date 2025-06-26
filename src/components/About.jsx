import { useState, useRef } from "react";
import { FaReact, FaHtml5, FaCss3, FaPython, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import coding1 from "../assets/coding1.jpg";
import coding2 from "../assets/coding2.jpg";
import coding3 from "../assets/coding3.jpg";
import coding4 from "../assets/coding4.jpg";
import React from "react";
import CardItem from "./CardItem.jsx";
import HorizontalLine from "./HorizontalLine.jsx";

const cardDetails = [
  {
    image: coding1,
    title: "Weather App",
    description: "A real-time weather forecasting app built using HTML, CSS, and JavaScript with OpenWeather API integration."
  },
  {
    image: coding2,
    title: "E-commerce Website",
    description: "An online shopping platform developed with Flask and MongoDB, featuring user login, cart, and product listings."
  },
  {
    image: coding3,
    title: "Portfolio Website",
    description: "A personal portfolio site designed with React and Tailwind CSS to showcase my projects and skills."
  },
  {
    image: coding4,
    title: "Logistics Dashboard",
    description: "A logistics data dashboard built during my WIL project using React and Chart.js to visualize delivery metrics."
  }
];


export default function About() {
  const refProjects = useRef();
  const refCards = useRef();
  const refTech = useRef();

  const inViewProjects = useInView(refProjects, { once: true });
  const inViewCards = useInView(refCards, { once: true });
  const inViewTech = useInView(refTech, { once: true });

  return (
    <>
      {/* Projects Heading */}
      <motion.div
        ref={refProjects}
        className="flex justify-center text-6xl font-bold my-10"
        initial={{ opacity: 0, y: 100 }}
        animate={inViewProjects ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1>Personal Projects</h1>
      </motion.div>

      {/* Cards */}
      <motion.div
        ref={refCards}
        className="flex flex-wrap justify-start items-start gap-10 px-10"
        initial={{ opacity: 0, y: 100 }}
        animate={inViewCards ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {cardDetails.map((card, index) => (
          <CardItem key={index} cardItemObj={card} />
        ))}
      </motion.div>

      {/* Tech Heading */}
      <motion.div
        ref={refTech}
        className="flex justify-center text-6xl font-bold my-10"
        initial={{ opacity: 0, y: 100 }}
        animate={inViewTech ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h1>Technologies</h1>
      </motion.div>

      {/* Tech Icons */}
      <motion.div
        className="flex justify-center gap-10 text-6xl"
        initial={{ opacity: 0 }}
        animate={inViewTech ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
      >
        {[
          { icon: <FaReact />, color: "#61DAFB" },
          { icon: <FaHtml5 />, color: "#E34F26" },
          { icon: <FaCss3 />, color: "#1572B6" },
          { icon: <FaPython />, color: "#3776AB" },
          { icon: <FaJava />, color: "#007396" },
          { icon: <IoLogoJavascript />, color: "#F7DF1E" },
          { icon: <SiMongodb />, color: "#47A248" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`text-[${item.color}]`}
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: i * 0.1,
            }}
            style={{ color: item.color }}
          >
            {item.icon}
          </motion.div>
        ))}
      </motion.div>

      {/* Line Divider */}
      <HorizontalLine />
    </>
  );
}
