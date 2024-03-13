import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const InfiniteScrollText = () => {
  const scrollTextRef = useRef(null);
  const scrollTextRefReverse = useRef(null);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  let lastScrollTop = 0;

  useEffect(() => {
    const element = scrollTextRef.current;
    const elementReverse = scrollTextRefReverse.current;
    const scrollContainer = element.parentNode;
    const scrollContainerReverse = elementReverse.parentNode;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop) {
        setIsScrollingDown(true);
        console.log('スクロール下');
      } else {
        setIsScrollingDown(false);
        console.log('スクロール上');
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    const tl = gsap.timeline({
      repeat: -1, // 無限に繰り返す
      defaults: { ease: "none" },
      onRepeat: () => {
        // アニメーションがリピートするたびに初期位置に戻す
        gsap.set(element, { x: `-${element.scrollWidth - scrollContainer.offsetWidth}px` });
        gsap.set(elementReverse, { x: `-${elementReverse.scrollWidth}px` });
      }
    });

    tl.to(element, {
      x: () => isScrollingDown ? `-${element.scrollWidth - scrollContainer.offsetWidth}px` : `${scrollContainer.offsetWidth}px`,
      duration: 15,
    }).to(elementReverse, {
      x: () => isScrollingDown ? `${scrollContainerReverse.offsetWidth}px` : `-${elementReverse.scrollWidth}px`,
      duration: 15,
      onUpdate: () => {
        const currentX = gsap.getProperty(elementReverse, "x");
        const thirdSpan = elementReverse.children[2]; // 3番目のspan要素を取得
        const thirdSpanRightEdge = currentX + thirdSpan.offsetLeft + thirdSpan.offsetWidth; // 3番目のspan要素の右端の位置

        if (isScrollingDown) {
          if (currentX > 1) {
            tl.restart();
          }
        } else {
          if (thirdSpanRightEdge >= 0 && thirdSpanRightEdge <= scrollContainerReverse.offsetWidth) {
            // 3番目のspan要素がビューポート内に入ったらリスタート
            tl.restart();
          }
        }
      }
    }, "<");

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrollingDown]);

  return (
    <>
      <div style={{ height: '200vh' }}> {/* スクロールできるように全体の高さを指定 */}
        <div className="scroll-container" style={{ overflow: 'hidden', display: 'flex' }}>
          <div ref={scrollTextRef} className="scroll-text font-bold mx-5 text-gray-300 uppercase text-8xl flex whitespace-nowrap">
            <span>Move World </span>
            <span>Move World </span>
            <span>Move World </span>
            <span>Move World </span>
          </div>
        </div>
        <div className="scroll-container" style={{ overflow: 'hidden', display: 'flex' }}>
          <div ref={scrollTextRefReverse} className="scroll-text font-bold mx-5 text-gray-300 uppercase text-8xl flex whitespace-nowrap">
            <span>Move World </span>
            <span>Move World </span>
            <span>Move World </span>
            <span>Move World </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfiniteScrollText;
