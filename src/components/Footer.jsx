import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const refFooter = useRef();

  const inViewFooter = useInView(refFooter, { once: true });
  return (
    <motion.div
      className="w-full h-[50px] bg-[#353535] flex justify-center items-center"
      style={{ boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.3)" }}
      ref={refFooter}
      initial={{ opacity: 0 }}
      animate={inViewFooter ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 className="text-lg font-bold">
        {" "}
        &copy; 2025 Chirag Sagar. All rights reserved.{" "}
      </h1>
    </motion.div>
  );
}
