import "./Navbar.scss";
import sebe from "../../assets/Images/favicon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { motion } from "framer-motion";
import logo from '../../assets/Images/favicon.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div className="navbarfull bg-transparent pb-4">
      <div className="navbar  w-full md:w-full  text-xl text-gray-500 lato-regular">
        <nav className="flex justify-between">
          <div className="pl-10 pt-4 md:pt-4">
            <img src={sebe} className="w-[60px] grayscale" alt="" />
          </div>
          <div className="links h-fit pt-8 gap-5 md:gap-8 tracking-wide hidden md:flex">
            <Link to="/">Home</Link>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </div>
          <div className="links pt-8 pr-10 h-fit hidden md:flex">
            <a href="" className="links">
              Contact
            </a>
          </div>
          <div className="ham-menu flex md:hidden mt-7 mr-5">
            <button onClick={toggleDrawer(true)} className="">
              <svg
              className=""
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H14M4 18H9"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <motion.div
            className="drawer"
            initial={{ opacity: 0, scale: 0.7, x: -50 }}
            whileInView={{ opacity: 1, scale: 0.9, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              width="800px"
              height="800px"
              onClick={toggleDrawer(false)}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="closeIcon"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                fill="#000000"
              />
            </svg>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#about" onClick={toggleDrawer(false)}>About</a>
            </li>
            <li>
              <a href="#skills" onClick={toggleDrawer(false)}>Skills</a>
            </li>
            <li>
              <a href="#projects" onClick={toggleDrawer(false)}>Projects</a>
            </li>
            <li>
              <a href="" onClick={toggleDrawer(false)}>Contact</a>
            </li>
          </motion.div>
          <div className="flex justify-center pb-20 opacity-55">
          <img src={logo} alt="" className="w-[60px]" />
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
