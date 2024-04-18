import React from "react";
import "./Projects.scss";
import data from "./project.json";
import { FaArrowRight } from "react-icons/fa";
import { PiGlobe } from "react-icons/pi";


const Projects = () => {
  return (
    <div className=" flex justify-center ">
      <div className="">
        {/* <div className="h-[70vh] flex justify-center">
          <div className="loader ">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div> */}
        {data.map((data) => (
          <div className="" key={data.id}>
            <div className="md:grid md:grid-cols-2 mt-20 mb-20">
              <a href={data.link} target="_blank" className="p-2">
                <img src={data.url[0]} alt="" className="shadow-md rounded-2xl"/>
              </a>
              <div className="text-zinc-600 m-10">
                <h1 className="text-4xl text-black lato-regular">{data.title}</h1>
                <h2 className="text-2xl mt-2  dancing-script">{data.type}</h2>
                <div className="">
                  <a href={data.link} target="_blank" className="hover:underline flex hover:underline-offset-4 text-black font-bold"><PiGlobe className="mt-[5px] mr-2" /> Live Preview <FaArrowRight className="mt-[5px] ml-2" /></a>
                </div>
                <p className="mt-2">{data.at}</p>
                <p className="mt-2">{data.tech}</p>
                <p className="text-zinc-400  text-justify mt-5" >{data.description}</p>
              </div>

            </div>
            <div className="flex justify-center">
            <div className="md:grid md:grid-cols-2 lg:flex mb-20">
              <img src={data.url[1]} alt="" className="shadow-md w-[200px] m-5 rounded-xl" />
              <img src={data.url[2]} alt="" className="shadow-md w-[200px] m-5 rounded-xl" />
              <img src={data.url[3]} alt="" className="shadow-md w-[200px] m-5 rounded-xl" />
              <img src={data.url[4]} alt="" className="shadow-md w-[200px] m-5 rounded-xl" />
            </div>
            </div>
            <hr className=" border-1 border-black" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
