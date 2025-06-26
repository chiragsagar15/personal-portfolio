import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Footer from "./Footer.jsx";

export default function Contact() {
  const refContact = useRef();

  const inViewContact = useInView(refContact, { once: true });

    function handleSubmit(e){
        e.preventDefault();
        alert("Message Sent!");
    }

    return (
      <>
        <motion.div className="flex flex-row justify-around items-start gap-10 px-10 py-10"
        ref={refContact}
        initial={{ opacity: 0, y: 100 }}
        animate={inViewContact ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
          {/* Left Text Section */}
          <div className="w-1/3 flex flex-col justify-start items-start gap-4 ">
            <h2 className="text-3xl font-bold text-gray-800">Let's Get In Touch</h2>
            <p className="text-lg tracking-tight">
            I'm always open to discussing exciting projects, collaboration opportunities, or just chatting about tech and development.
            <br/><br/> 
            Whether you have a question, want to work together, or simply want to say hi, feel free to reach out — I’d love to hear from you!
            </p>
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
          {/* Form Section */}
          <form className="w-1/3 h-[600px] bg-white/10 backdrop-blur-md p-6 rounded-sm space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="name..."
                className="w-full px-2 py-2 border-b-1 border-gray-300 focus:outline-none focus:border-orange-400 "
              />
            </div>
  
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-2 py-2 border-b-1 border-gray-300 focus:outline-none focus:border-orange-400"
              />
            </div>
  
            {/* Message */}
            <div>
              <textarea
                rows="5"
                placeholder="write your message..."
                className="w-full mt-4 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400 resize-none"
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <motion.button onSubmit={handleSubmit}
              type="submit"
              className="w-1/3 bg-[#FF9E00] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300 font-semibold cursor-pointer"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#FF9E00",
                cursor: "pointer",
                boxShadow: "5px 5px 10px rgb(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
        <Footer />
      </>
    );
  }
  
