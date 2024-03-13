import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function JobList() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // 一度だけアニメーションをトリガー
    threshold: 0.5, // 50%の要素が見えたらトリガー
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <div >
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="max-w-[90%] mx-auto mt-10"
      style={{ opacity: 1, transform: 'none'}}
    >
      <h2 className="text-2xl lg:text-[70px] text-left font-cinzel">Job List</h2>
      <div className="flex items-center font-cinzel">
        <div className="w-10 border-t-2 border-gray-500 mr-3"></div>
        <h3 className="font-cinzel lg:text-lg">募集職種</h3>
      </div>
      <div className="mt-10 lg:mt-20 lg:flex justify-center border-t pt-10 lg:max-w-[80%] mx-auto">
        <div className="lg:w-[40%] lg:pr-10 lg:border-r-2">
          <div className="flex items-center">
            <p className="mr-2 text-lg font-cinzel">ソフトウェアエンジニア</p>
            {/* SVG icon */}
          </div>
          <p className="lg:mt-5">最新のクラウド技術とAIを使用してビジネスソリューションを開発。チームと協力して、コードを書き、テストし、デプロイします。</p>
        </div>
        <div className="lg:w-[40%] mt-5 lg:mt-0 lg:pl-10">
          <div className="flex items-center">
            <p className="mr-2 text-lg font-cinzel">デジタルマーケター</p>
            {/* SVG icon */}
          </div>
          <p className="lg:mt-5">オンライン広告、SNSキャンペーン、SEO戦略を通じてブランドの認知度を向上。データ分析を基に効果的なマーケティング計画を立案・実施します。</p>
        </div>
      </div>
      <div className="flex justify-center mt-10 lg:mt-20">
        <button className="bg-[#28C7E4] hover:opacity-80 text-white font-cinzel py-5 px-20">ENTRY</button>
      </div>
    </motion.div>
    </div>
  );
}

export default JobList;