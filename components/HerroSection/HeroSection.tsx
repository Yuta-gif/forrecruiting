import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Herosection = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 400], [0.6,1]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const bgOpacity = useTransform(scrollY, [0, 500], [0, 1]);
//public/images/pexels-turgay-koca-15309362.jpg
  return (
    <div className="flex relative lg:h-[1200px] lg:pt-72 lg:pt-72 pt-52 justify-center h-[500px] w-full absolute h-screen bg-cover bg-no-repeat bg-center">
     <div  className="absolute top-0 left-0 w-full h-full bg-[url('/images/pexels-digital-buggu-395161.jpg')] bg-cover bg-center opacity-0.5">
      <motion.div 
        style={{ scale, opacity }}
        className="flex justify-center items-center h-screen"
      >
        <div className="absolute text-white z-10">
         <h2 className=" px-2 lg:text-[110px] text-2xl leading-tight " >
        Driving the World <br></br>with Technology.
          </h2>
          </div>
      </motion.div>
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute top-0 left-0 w-full h-full bg-[url('/images/pexels-marc-mueller-380769.jpg')] bg-cover bg-center"
      >
        
      </motion.div>
     </div>
    </div>
  );
};

export default Herosection;