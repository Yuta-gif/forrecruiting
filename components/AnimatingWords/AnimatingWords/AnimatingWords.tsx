import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
  const textRef1 = useRef(null);
  const textContainerRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textContainerRef2 = useRef(null);
  const timelineRef1 = useRef(null);
  const timelineRef2 = useRef(null);

  useEffect(() => {
    const text1 = textRef1.current;
    const textContainer1 = textContainerRef1.current;
    const textWidth1 = text1.offsetWidth;
    const containerWidth1 = textContainer1.offsetWidth;

    const text2 = textRef2.current;
    const textContainer2 = textContainerRef2.current;
    const textWidth2 = text2.offsetWidth;
    const containerWidth2 = textContainer2.offsetWidth;

    const timeline1 = gsap.timeline({
      repeat: -1,
    });

    const timeline2 = gsap.timeline({
      repeat: -1,
    });

    timeline1.set(text1, { x: 0 }).to(text1, {
      x: -textWidth1 + containerWidth1,
      duration: 15,
      ease: 'none',
    });

    timeline2.set(text2, { x: -textWidth2 + containerWidth2 }).to(text2, {
      x: 0,
      duration: 15,
      ease: 'none',
    });

    ScrollTrigger.create({
      trigger: textContainer1,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        if (self.direction === -1) {
          gsap.delayedCall(1, () => timeline1.reverse());
          console.log('timeline1がreverse') // 1秒遅延してからreverseを実行
        } else {
          gsap.delayedCall(1, () => timeline1.play());
          console.log('timeline1がplay')  // 1秒遅延してからplayを実行
        }
      },
    });

    ScrollTrigger.create({
      trigger: textContainer2,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        if (self.direction === -1) {
          gsap.delayedCall(1, () => timeline2.reverse()); // 同様に2番目のタイムラインに対しても適用
        } else {
          gsap.delayedCall(1, () => timeline2.play());
        }
      },
    });

    timelineRef1.current = timeline1;
    timelineRef2.current = timeline2;

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <div  >
      <div ref={textContainerRef1} className="overflow-hidden ">
        <div ref={textRef1} className="inline-block">
          {/* Text spans */}
          <span className="text-8xl font-bold mx-5 text-gray-300 whitespace-nowrap">Animated Text</span>
          <span className="text-8xl font-bold mx-5 text-gray-300 whitespace-nowrap">Animated Text</span>
          <span className="text-8xl font-bold mx-5 text-gray-300 whitespace-nowrap">Animated Text</span>
          <span className="text-8xl font-bold mx-5 text-gray-300 whitespace-nowrap">Animated Text</span>
        </div>
      </div>
      <div ref={textContainerRef2} className="overflow-hidden whitespace-nowrap">
        <div ref={textRef2} className="inline-block">
          {/* Text spans */}
          <span className="text-8xl font-bold mx-5 text-gray-300 whitespace-nowrap">Animated Text</span>
          <span className="text-8xl font-bold mx-5 text-gray-300 whitespace-nowrap">Animated Text</span>
          <span className="text-8xl font-bold mx-5 text-gray-300 whitespace-nowrap">Animated Text</span>
          <span className="text-8xl font-bold mx-5 text-gray-300 whitespace-nowrap">Animated Text</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;