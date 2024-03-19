import "./Home.scss";
import { motion } from "framer-motion";
import backgroundvideo from "../../assets/Videos/bg2.mp4";
import pic from "../../assets/Images/picc.png";
import AnimatedText from "../../Components/Animations/AnimatedText/AnimatedText";
import Marquee from "../../Components/Animations/Marquee/Marquee";
import FrontEnd from "../../Components/Skills/FrontEnd/FrontEnd";
import { useState } from "react";
import BackEnd from "../../Components/Skills/BackEnd/BackEnd";
import Others from "../../Components/Skills/Others/Others";
const Home = () => {

  const [skill,setSkill] = useState (1)

  const handleSkill = () => {
    if(skill===1){
      return <FrontEnd />
    }
    else if(skill===2){
      return <BackEnd />
    }
    else{
      return <Others />
    }
  }

  return (
    <div className="">
      <div className="h-[90vh] md:h-[100vh] flex justify-center">
        <video autoPlay loop muted id="video" className="video">
          <source src={backgroundvideo} type="video/mp4" />
        </video>
        <div className="pt-60 md:pt-40 text-gray-400 duration-500 ">
          <motion.h4
            className="dancing-script text-2xl md:text-3xl"
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 5 }}
          >
            Hi There
          </motion.h4>
          <motion.h1
            className="ubuntu-bold text-7xl md:text-9xl text-center "
            initial={{ opacity: 0, scale: 0.8, x: -150 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 5 }}
          >
            Sebe S
          </motion.h1>
          <motion.h3
            className="dancing-script text-right text-3xl md:text-5xl"
            initial={{ opacity: 0, rotate: 180, scale: 0.8, y: 250 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
          >
            Web Developer
          </motion.h3>
          <motion.div
            className="btn flex justify-center pt-20"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 5 }}
          >
            <a
              href=""
              className="flex gap-3 pl-5 pr-5 pt-3 pb-3 btnlink "
              onClick={(e) => e.preventDefault()}
            >
              <p className="pt-2 dancing-script text-xl md:text-2xl md:pt-1">
                Download CV
              </p>
              <svg
                className=""
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>Download-2</title>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g id="Download-2">
                    <rect
                      id="Rectangle"
                      fillRule="nonzero"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    ></rect>
                    <line
                      x1="12"
                      y1="14"
                      x2="12"
                      y2="20"
                      id="Path"
                      stroke="#808080"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></line>
                    <path
                      d="M15,19 L12.7071,21.2929 C12.3166,21.6834 11.6834,21.6834 11.2929,21.2929 L9,19"
                      id="Path"
                      stroke="#808080"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M19.9495,16 C20.5978,15.3647 21,14.4793 21,13.5 C21,11.567 19.433,10 17.5,10 C17.3078,10 17.1192,10.0155 16.9354,10.0453 C16.4698,6.63095 13.5422,4 10,4 C6.13401,4 3,7.13401 3,11 C3,12.9587 3.80447,14.7295 5.10102,16"
                      id="Path"
                      stroke="#808080"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </g>
                </g>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      <div id="about" className="about">
        <div className=" md:pl-[100px] md:pr-[100px] p-[40px]">
          <div className=" md:grid grid-cols-2 gap-10">
            <motion.div
              className="flex justify-center"
              whileInView={{
                scale: [1, 0.8, 0.8, 1, 1],
                rotate: [0, 0, 20, 20, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <img
                src={pic}
                alt=""
                className="rounded-xl sh shadow-white shadow-2xl h-[400px] "
              />
            </motion.div>

            <div className="pt-20">
              <AnimatedText
                text="Welcome to my digital space! I am Sebe S, a passionate web
              developer with a love for turning ideas into interactive and
              visually appealing experiences. This portfolio is a reflection of
              my journey, featuring a collection of projects that highlight my
              skills in web development, design, etc.. From crafting elegant and
              responsive websites to solving complex problems through innovative
              solutions, I'm dedicated to creating meaningful and impactful
              digital experiences. Explore my work, and let's connect to discuss
              how we can collaborate and bring your ideas to life. Thank you for
              visiting!"
              />
            </div>
          </div>
        </div>
        <div className=" text-zinc-500">
          <Marquee
            text={["Developer", "Designer", "Software Engineer", "Programmer"]}
          />
        </div>
      </div>
      <div className="skills" id="skills">
        <div className="pt-20 pl-10 pr-10 md:pl-20 md:pr-20">
          <div className="">
            <motion.h1
              className="text-5xl font-bold"
              initial={{ opacity: 0, scale: 0.8, x: -150 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 5 }}
            >
              Skills
            </motion.h1>
            <motion.h4 className="text-gray-200 pt-1 text-2xl dancing-script"
              initial={{ opacity: 0, scale: 0.8, x: -150 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 5 }}>
              About what skills I know
            </motion.h4>
          </div>
          <div className="text-justify pt-3">
            <AnimatedText text="I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a good team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines." />
          </div>
          <p className="pt-7 text-white">Click to show my skills</p>
          <div className="pt-2 flex gap-5">
            <p className="cursor-pointer hover:text-white" onClick={()=>setSkill(1)}>FrontEnd</p>
            <p className="cursor-pointer hover:text-white" onClick={()=>setSkill(2)}>BackEnd</p>
            <p className="cursor-pointer hover:text-white" onClick={()=>setSkill(3)}>Tools etc..</p>
          </div>
              
          {handleSkill()}
          
          
        </div>
        <div className="text-white">
          <Marquee text={["FrontEnd", "BackEnd", "FrameWorks", "Libraries"]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
