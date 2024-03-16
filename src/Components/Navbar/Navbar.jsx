import "./Navbar.scss";
import sebe from '../../assets/Images/favicon.png'
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div className="navbar  w-full md:w-full  text-xl text-gray-500 lato-regular">
      <nav className="flex justify-between">
        <div className="pl-10 pt-7 md:pt-4">
          <img src={sebe} className="w-[60px] grayscale" alt="" />
        </div>
        <div className="links pt-10 gap-5 md:gap-8 tracking-wide hidden md:flex">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Skills</a>
          <a href="">Projects</a>
        </div>
        <div className="links  pt-10 pr-10 hidden md:flex">
          <a href="" className="links">
            Contact
          </a>
        </div>
        <div className="ham-menu flex md:hidden mt-7 mr-5">
            <button onClick={toggleDrawer(true)} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 14 14"
              >
                <path
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 2H.5m13 5H.5m13 5H.5"
                />
              </svg>
            </button>
          </div>
      </nav>
      <Drawer open={open} onClose={toggleDrawer(false)}>
          <div className="drawer">
          <svg width="800px" height="800px" onClick={toggleDrawer(false)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="closeIcon"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#000000"/></svg>
          <li>
          <a href="">Home</a>
          </li>
          <li>
          <a href="">About</a>
          </li>
          <li>
          <a href="">Skills</a>
          </li>
          <li>
          <a href="">Projects</a>
          </li>
          <li>
          <a href="">Contact</a>
          </li>
          </div>
        </Drawer>
    </div>
    
  );
};

export default Navbar;
