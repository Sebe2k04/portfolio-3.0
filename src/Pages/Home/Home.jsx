import { useRef } from "react";
import "./Home.scss";
import { useInView } from "framer-motion";
//

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="">
      <div className="h-[100vh] flex justify-center">
        <div className="pt-40 text-gray-500 duration-500 hover:text-black">
          <h4
            className="dancing-script text-2xl md:text-3xl"
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Hi There
          </h4>
          <h1
            className="ubuntu-bold text-7xl md:text-9xl text-center "
            style={{
              transform: isInView ? "none" : "translateX(-400px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            ref={ref}
          >
            Sebe S
          </h1>
          <h3 className="dancing-script text-right text-3xl md:text-5xl" ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}>
            Web Developer
          </h3>
        </div>
      </div>
      <div id="about" className="about bg-gray-400 h-[100vh] text-white">
        <p>
          Welcome to my digital space! I am Sebe S, a passionate web developer
          with a love for turning ideas into interactive and visually appealing
          experiences. This portfolio is a reflection of my journey, featuring a
          collection of projects that highlight my skills in web development,
          design, etc.. From crafting elegant and responsive websites to solving
          complex problems through innovative solutions, I'm dedicated to
          creating meaningful and impactful digital experiences. Explore my
          work, and let's connect to discuss how we can collaborate and bring
          your ideas to life. Thank you for visiting!
        </p>
      </div>
    </div>
  );
};

export default Home;
