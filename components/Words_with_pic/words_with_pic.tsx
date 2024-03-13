import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Message = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="mt-10 mx-auto lg:max-w-[90%] max-w-[95%]"
    >
      <h2 className="text-xl lg:text-[70px] font-cinzel lg:text-right lg:mr-[5%]">Message</h2>
      <div className="lg:flex justify-end">
        <div className="lg:max-w-[30%] lg:mr-20 lg:mt-28">
          <h3 className="font-cinzel lg:text-lg">テクノロジーで世界を動かす</h3>
          <p className="leading-8 mt-10 lg:leading-[40px]">
            私たちテックイノベイト株式会社は、<br />
            イノベーションを核とした技術ソリューションを提供するIT企業です。<br />
            最先端のテクノロジーと創造的なアプローチを駆使して、ビジネスの課題に対する革新的な解決策を提供しています。<br />
            当社は、顧客の成功が私たちの成功であるという信念のもと、常に顧客第一を心がけています。また、持続可能で環境に優しいビジネスモデルを推進し、社会全体の利益に貢献することを目指しています。
          </p>
          <div className="lg:block hidden mt-10">
            <button className="bg-black text-white font-cinzel py-2 px-4 rounded">more &gt;&gt;</button>
          </div>
        </div>
        <div className="text-left mt-5 lg:mt-10 lg:w-[60%]">
          <Image
            src="/images/message.webp"
            alt="Message"
            width={1920}
            height={1080}
            layout="responsive"
          />
        </div>
        <div className="lg:hidden mt-10">
          <button className="bg-black text-white font-cinzel py-2 px-4 rounded">more &gt;&gt;</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Message;