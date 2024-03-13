import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const InfiniteScrollText = () => {
  const scrollTextRef = useRef(null);
  const scrollTextRefReverse = useRef(null);

  useEffect(() => {
    const element = scrollTextRef.current;
    const elementReverse = scrollTextRefReverse.current;
    const scrollContainer = element.parentNode;
    const scrollContainerReverse = elementReverse.parentNode;

    // 通常のアニメーション（右から左）
    gsap.to(element, {
      x: () => `-${element.scrollWidth - scrollContainer.offsetWidth}px`,
      //これも実はいらないのかもな。単純にpxで目的地を示してあげればそれでいい気がする
      ease: "none",
      repeat: -1,
      duration: 15,
    });

    // 反対方向のアニメーション（左から右）の初期位置を中央に設定
    const initialXReverse = -(elementReverse.scrollWidth / 2) + (scrollContainerReverse.offsetWidth / 2);
    //これだけ謎だな まあこれはそういうもんだと思っていいのかな
    gsap.set(elementReverse, { x: `${initialXReverse}px` });

    const tl = gsap.timeline({
      repeat: -1, // 無限に繰り返す
      defaults: { ease: "none" },
      onRepeat: () => {
        // アニメーションがリピートするたびに初期位置に戻す
        //gsap.set(elementReverse, { x: `${initialXReverse}px` });
        //これいらないかも
      },
    });

    tl.fromTo(
      elementReverse,
      { x: `${initialXReverse}px` },
      {
        x: `${scrollContainerReverse.offsetWidth}px`,
        //単純にpxで目的地を示してあげればそれでいい気がする
        //いや、謎に不具合が起きた。
        duration: 15,
        //immediateRender: false,
        onUpdate: () => {
          // アニメーションが進行中に毎回この関数が呼ばれる
          const currentX = gsap.getProperty(elementReverse, "x");
          if (currentX > 1) {
            // 最後のspan要素の先頭が画面の左端に達したらリセット
            //要素全体を一塊として捉え、その末尾が特定のx座標（px)に達したらリセット
            //testが適切なタイミングでリセットされない原因
          
            tl.restart();
          }
        },//これがあるおかげで要素が画面の右端に達したらリセットされる
      }
    );
  }, []);

  return (
    <>
      <div className="scroll-container" style={{ overflow: 'hidden', display: 'flex' }}>
        <div ref={scrollTextRef} className="scroll-text font-bold mx-5 text-gray-300 uppercase text-8xl flex whitespace-nowrap">
          <span>Move World </span>
          <span>Move World </span>
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
          <span>Move World </span>
          <span>Move World </span>

        </div>
      </div>
    </>
  );
};

export default InfiniteScrollText;