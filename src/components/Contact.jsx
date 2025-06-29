import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const refContact = useRef();
  const inViewContact = useInView(refContact, { once: true });

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  }

  return (
    <>
      <motion.div
        className="min-h-screen flex flex-col xl:flex-row justify-around items-start gap-10 px-4 py-8"
        ref={refContact}
        initial={{ opacity: 0, y: 100 }}
        animate={inViewContact ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Left Section */}
        <div className="w-full xl:w-1/3 flex flex-col xl:justify-start xl:items-start justify-center items-center gap-4 text-center xl:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Let's Get In Touch
          </h2>
          <p className="text-base md:text-lg tracking-tight">
            I'm always open to discussing exciting projects, collaboration
            opportunities, or just chatting about tech and development.
            <br />
            <br />
            Whether you have a question, want to work together, or simply want
            to say hi, feel free to reach out — I’d love to hear from you!
          </p>
          <div className="flex justify-center xl:justify-start items-center gap-6 text-2xl md:text-3xl text-[#FF9E00] md:text-[#D9D9D9]">
            <motion.a
              href="https://github.com/chiragsagar15?tab=repositories"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.15,
                color: "#FF9E00",
                cursor: "pointer",
              }}
              whileTap={{ scale: 0.85 }}
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
              whileTap={{ scale: 0.85 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full xl:w-1/3 min-h-[60vh] bg-white/10 backdrop-blur-md p-6 rounded-sm space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              required
              name="from_name"
              type="text"
              placeholder="name..."
              className="w-full px-2 py-2 border-b border-gray-300 focus:outline-none focus:border-orange-400"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              required
              name="from_email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-2 py-2 border-b border-gray-300 focus:outline-none focus:border-orange-400"
            />
          </div>
          {/* Message */}
          <div>
            <textarea
              required
              name="message"
              rows="5"
              placeholder="write your message..."
              className="w-full mt-4 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400 resize-none"
            ></textarea>
          </div>
          {/* Submit */}
          <motion.button
            type="submit"
            className="w-full xl:w-1/3 bg-[#FF9E00] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300 font-semibold cursor-pointer"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#FF9E00",
              boxShadow: "5px 5px 10px rgb(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </>
  );
}
