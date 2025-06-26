import { motion } from "framer-motion"

export default function HorizontalLine(){
    return (
        <motion.div
        className=" mx-10 w-auto h-[2px] bg-[#FF9E00] my-4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        style={{ originX: 0 }}
      />
    )
}