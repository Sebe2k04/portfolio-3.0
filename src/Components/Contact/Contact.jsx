import { motion } from "framer-motion";
import "./Contact.scss";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <div className="contact ">
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
        <div className="flex justify-center mt-5">
          <form
            action="https://formsubmit.co/sebe2k04@gmail.com"
            className="p-5 bg-white rounded-3xl shadow-xl"
            method="POST"
          >
            <div className="flex justify-center ">
              <div className="">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="input w-[200px] md:w-[500px]"
                />
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="input w-[200px] md:w-[500px]"
                />
                <br />
              </div>
            </div>
            <div className="flex justify-center">
              <textarea
                name="message"
                id="name"
                cols="25"
                rows="5"
                className="textarea input w-[220px] md:w-[550px]"
              ></textarea>
            </div>
            <div className="flex justify-center pt-5 ">
              <input
                type="submit"
                value="Send"
                className="pl-5 pr-5 pt-2 pb-2 rounded-2xl border-2 bg-zinc-300 text-white hover:bg-zinc-600 duration-500 hover:rotate-2"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-center pt-10">
          <div className="flex justify-evenly">
            <a className="" href="mailto:sebe2k04@gmail.com">
              <motion.div
                className="p-5 text-sm m-5 rounded-full bg-zinc-300 hover:bg-zinc-200 hover:text-zinc-400 text-white"
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 5 }}
              >
                <EmailIcon />
              </motion.div>
              <p className="text-center m-2 text-zinc-400 hover:text-black duration-200">
                Email
              </p>
            </a>
            <a className="" href="https://www.linkedin.com/in/sebe2k04/">
              <motion.div
                className="p-5 text-sm m-5 rounded-full bg-zinc-300 hover:bg-zinc-200 hover:text-zinc-400 text-white"
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 5 }}
              >
                <LinkedInIcon />
              </motion.div>
              <p className="text-center m-2 text-zinc-400 hover:text-black duration-200">
                LinkedIn
              </p>
            </a>
            <a className="" href="https://github.com/Sebe2k04">
              <motion.div
                className="p-5 text-sm m-5 rounded-full bg-zinc-300 hover:bg-zinc-200 hover:text-zinc-400 text-white"
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 5 }}
              >
                <GitHubIcon />
              </motion.div>
              <p className="text-center m-2 text-zinc-400 hover:text-black duration-200">
                GitHub
              </p>
            </a>
            <a className="" href="https://www.instagram.com/itz_.cb/?igsh=eTQwaDB1bzhtYXVs">
              <motion.div
                className="p-5 text-sm m-5 rounded-full bg-zinc-300 hover:bg-zinc-200 hover:text-zinc-400 text-white"
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 5 }}
              >
                <InstagramIcon />
              </motion.div>
              <p className="text-center m-2 text-zinc-400 hover:text-black duration-200">
                Instagram
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
