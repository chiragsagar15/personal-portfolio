import { motion } from "framer-motion"
import { useState } from "react"

export default function CardItem({cardItemObj}){
  const [isOpen, setIsOpen] = useState(false);
  function toggleOverlay(){
    setIsOpen((prev) => !prev);
  }
    return(
    <motion.div className="relative w-[330px] h-[350px] overflow-hidden rounded-xl shadow-lg group"
    whileHover={{scale: 1.05, boxShadow: "10px 5px 15px rgb(0, 0, 0, 0.3)"}}
    transition={{duration: 0.5, ease: "easeOut"}}
    onClick={toggleOverlay}
    >
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src={cardItemObj.image}
        alt=""
      />

      {/* Hover Overlay */}
      <div className={`
          absolute inset-0 bg-black/20 backdrop-blur-sm text-white 
          flex flex-col justify-end p-6 cursor-pointer
          transition-opacity duration-200
          ${isOpen ? "opacity-100" : "opacity-0"} 
          group-hover:opacity-100
        `}
      >
        <h2 className="text-2xl font-bold mb-2">{cardItemObj.title}</h2>
        <p className="text-sm tracking-tightest">{cardItemObj.description}</p>
        <motion.button className="border-[#FF9E00] text-start mt-4 p-3 rounded-lg border w-fit"
        whileHover={{ scale: 1.05, backgroundColor: "#FF9E00", cursor: "pointer", boxShadow: "5px 5px 10px rgb(0, 0, 0, 0.3)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut"}}
        >View Project</motion.button>
      </div>
    </motion.div>
    )
}