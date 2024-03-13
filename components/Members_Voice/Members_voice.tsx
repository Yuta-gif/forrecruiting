import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { motion, useAnimation } from 'framer-motion';

const MembersVoice = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // アニメーションの現れる期間をゆっくりとするために、durationを1秒に設定
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.on('slideChange', () => {
        setCurrentSlide(swiperRef.current.swiper.realIndex);
      });
    }
  }, []);

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const members = [
    { name: 'Eriko Anzai', image: 'images/iloveimg-converted/eriko.jpg' },
    { name: 'Akiyoshi Takahashi', image: 'images/iloveimg-converted/akiyoshi.jpg' },
    { name: 'Yuki Kato', image: 'images/iloveimg-converted/yuki.jpg' },
    { name: 'Shogo Sato', image: 'images/iloveimg-converted/shogo.jpg' },
    { name: 'Yuri Shimizu', image: 'images/iloveimg-converted/yuri.jpg' },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative lg:my-40 mt-10 md:mt-20"
    >
      <div className="bg-gray-100 mx-auto md:max-w-[80%] max-w-[95%] h-full absolute inset-y-0 left-0 right-0 z-0"></div>
      <div className="relative z-10">
        <div className="md:px-20 px-5 pt-10 pc:pt-20 pb-2 md:pb-10 ml-[10%]">
          <h2 className="pc:text-[70px] font-cinzel text-xl">Member's Voice</h2>
          <div className="md:flex justify-between">
            <div className="flex items-center font-cinzel">
              <div className="w-10 border-t-2 border-gray-500 mr-3"></div>
              <p>社員インタビュー</p>
            </div>
            <div className="flex items-center mr-[10%] hover:underline mt-5 md:mt-0 ml-5">
              一覧を見る
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M210.7 147.6c7.5-7.5 19.8-7.5 27.3 0l95.4 95.7c7.3 7.3 7.5 19.1.6 26.6l-94 94.3c-3.8 3.8-8.7 5.7-13.7 5.7-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.6-19.7 0-27.3l79.9-81.1-81.9-81.1c-7.6-7.4-7.6-19.6 0-27.2z"></path>
                <path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm32 0c0-47 18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="ml-[13%] pb-10 md:ml-[20%] md:items-end md:flex">
          <div className="mr-5">
            <div
              className={`hover:bg-gray-300 border-2 p-3 border-gray-400 rounded-full ${
                currentSlide === 0 ? 'swiper-button-disabled' : ''
              }`}
              onClick={handlePrevSlide}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 256"
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"></path>
              </svg>
            </div>
            <div
              className="mt-3 hover:bg-gray-300 border-2 p-3 border-gray-400 rounded-full"
              onClick={handleNextSlide}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 256"
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"></path>
              </svg>
            </div>
          </div>
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="swiper md:mt-10"
          >
            {members.map((member, index) => (
              <SwiperSlide key={index}>
                <a href="/">
                  <div className="h-auto w-[415px] bg-white border-2">
                    <img src={member.image} alt={member.name} width={415} height={519} />
                    <p className="py-3 pl-3 font-cinzel text-left">{member.name}</p>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default MembersVoice;