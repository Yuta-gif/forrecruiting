import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, } from 'framer-motion';
import styles from './AnimatingWords.module.css';

const text = "WORLD MOVE ";
const texts = text.repeat(1);

const AnimatingWords = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting);
      },
      { rootMargin: '-1px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isOnScreen)  {
      
      
        controls.start({ x: '200%', transition: { duration: 10, repeat: Infinity, ease: 'linear' } });
      ;
    }
  }, [isOnScreen, controls]);

  return (
    <div className={styles.container} ref={ref}>
      <motion.div
        initial={{ x: '-10%' }}
        animate={controls}
        className={styles.textstyle}
      >
        {texts}
      </motion.div>
    </div>
  );
};

export default AnimatingWords;