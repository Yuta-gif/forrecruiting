import React from 'react';
import {motion,useScroll,useTransform} from 'framer-motion';
import styles from './HeroSection.module.css';

const Herosection=()=>{
  const {scrollY}=useScroll();
  
  const scale=useTransform(scrollY,[0,500],[1,2])
  const opacity=useTransform(scrollY,[0,500],[1,0])
  const bg0pacity=useTransform(scrollY,[0,500],[0,1])

  return(
    <div  className={styles.container}>
      <motion.div 
      style={{scale,opacity}}
      
      >
        <h2 className={styles.heading}>新時代へ！</h2>
      </motion.div>
      <motion.div
      style={{opacity:bg0pacity}}
      className={styles.backgroundImage}
      >
        <h2>よろしくお願いします</h2>
      </motion.div>
      

    </div>

  );

};

export default Herosection;

