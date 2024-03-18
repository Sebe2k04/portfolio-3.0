import "./Home.scss";
import { motion } from "framer-motion";
import backgroundvideo from "../../assets/Videos/bg2.mp4";
import pic from "../../assets/Images/picc.png";
import AnimatedText from "../../Components/Animations/AnimatedText/AnimatedText";

const Home = () => {

  return (
    <div className="">
      <div className="h-[90vh] md:h-[100vh] flex justify-center">
        <video autoPlay loop muted id="video" className="video">
          <source src={backgroundvideo} type="video/mp4" />
        </video>
        <div className="pt-40 text-gray-400 duration-500 ">
          <motion.h4
            className="dancing-script text-2xl md:text-3xl"
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200 , damping:5 }}
          >
            Hi There
          </motion.h4>
          <motion.h1
            className="ubuntu-bold text-7xl md:text-9xl text-center "
            initial={{ opacity: 0, scale: 0.8, x: -150 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200 ,damping:5 }}
          >
            Sebe S
          </motion.h1>
          <motion.h3
            className="dancing-script text-right text-3xl md:text-5xl"
            initial={{ opacity: 0, scale: 0.8, y: 250 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
          >
            Web Developer
          </motion.h3>
        </div>
      </div>
      <div id="about" className="about md:pl-[100px] md:pr-[100px]">
        <div className=" md:grid grid-cols-2 gap-10">
          <div className="flex justify-center">
            <img src={pic} alt="" className="rounded-xl shadow-xl h-[400px] " />
          </div>
          <div className="pt-20">
            <AnimatedText text="Welcome to my digital space! I am Sebe S, a passionate web
              developer with a love for turning ideas into interactive and
              visually appealing experiences. This portfolio is a reflection of
              my journey, featuring a collection of projects that highlight my
              skills in web development, design, etc.. From crafting elegant and
              responsive websites to solving complex problems through innovative
              solutions, I'm dedicated to creating meaningful and impactful
              digital experiences. Explore my work, and let's connect to discuss
              how we can collaborate and bring your ideas to life. Thank you for
              visiting!"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
