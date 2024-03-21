import { motion } from "framer-motion";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact h-[100vh]">
      <div className="pb-20">
        <div className="pl-10 pt-10">
          <motion.h1
            className="text-5xl font-bold"
            initial={{ opacity: 0, scale: 0.8, x: -150 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 5 }}
          >
            Contact
          </motion.h1>
          <motion.h4
            className="text-gray-400 pt-1 text-2xl dancing-script"
            initial={{ opacity: 0, scale: 0.8, x: -150 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 5 }}
          >
            Let&apos;s Connect and Communicate
          </motion.h4>
        </div>
        <div className="">
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
