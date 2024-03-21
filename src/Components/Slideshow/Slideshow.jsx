import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import './Slideshow.scss'
import pr1 from '../../assets/Images/pr1.png'
import pr2 from '../../assets/Images/pr2.png'
import pr3 from '../../assets/Images/pr3.png'
import pr4 from '../../assets/Images/pr4.png'
import pr5 from '../../assets/Images/pr5.png'
import pr6 from '../../assets/Images/pr6.jpg'

const Slideshow = () => {
  const [width,setWidth] = useState(0);
  const carousel = useRef();

  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[])

  const Card = (img,name) => {
    return (
      <div className="card rounded-2xl min-w-[300px] m-5 ">
        <div className="h-[180px] w-[260px] mt-[20px] mb-[20px] m-auto rounded-2xl bg-white">
          <img src={img} alt="" className="rounded-2xl w-full h-full grayscale " />
        </div>
        <div className="pt-[40px] pr-[20px] pb-[40px]">
            <h1 className="font-bold m-auto text-center">{name}</h1>
        </div>
      </div>
    )
  }

  return (
    <div>
      <motion.div className="carousel overflow-hidden"
      ref={carousel}>
        <motion.div className="inner-carousel flex"
        drag="x"
        dragConstraints={{right:0,left:-width}}
        >
        {Card(pr6,"GenRio")}
        {Card(pr1,"Portfolio 3.0")}
        {Card(pr2,"Portfolio 2.0")}
        {Card(pr3,"Portfolio 1.0")}
        {Card(pr4,"Weather Predictor")}
        {Card(pr5,"Crop Care Rover")}
        

        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slideshow;
