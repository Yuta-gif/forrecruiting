import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Counter {
  id: number;
  count: number;
  maxCount: number;
}

// CounterDisplayコンポーネント
const CounterDisplay = ({ counter, style = {} }: { counter: Counter; style?: React.CSSProperties }) => (
  <motion.div
    style={{
      fontFamily: "'Garamond', 'Times New Roman', serif",
      fontSize: '60px',
      color: 'white',
      ...style,
    }}
  >
    <p style={{ fontSize: 'inherit', fontWeight: 'bold' }}>{counter.count}</p>
  </motion.div>
);

// InformationBlockコンポーネント
const Animating_nums = () => {
  const initialCounters: Counter[] = [
    { id: 1, count: 0, maxCount: 29 }, // 平均年齢
    { id: 2, count: 0, maxCount: 5 }, // 離職率
    { id: 3, count: 0, maxCount: 50 }, // 男性比率
    { id: 4, count: 0, maxCount: 50 }, // 女性比率
    { id: 5, count: 0, maxCount: 90 }, // 育休取得率
    { id: 6, count: 0, maxCount: 85 }, // 復職率
    { id: 7, count: 0, maxCount: 20 }, // 年間平均残業時間
    { id: 8, count: 0, maxCount: 95 }, // 研修受講率
    { id: 9, count: 0, maxCount: 15 }, // 社員の国際性
    { id: 10, count: 0, maxCount: 30 }, // 成功率
  ];

  const [counters, setCounters] = useState<Counter[]>(initialCounters);
  const [ref, isInView] = useInView();

  useEffect(() => {
    if (isInView) {
      const timerId = setInterval(() => {
        setCounters((currentCounters) =>
          currentCounters.map((counter) => {
            if (counter.count < counter.maxCount) {
              return { ...counter, count: counter.count + 1 };
            } else {
              return counter;
            }
          })
        );
      }, 40);
      return () => clearInterval(timerId);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="w-full mt-20 bg-[#32727C] lg:h-[1250px] h-[1550px] bg-opacity-80 relative text-white">
      <div className="w-full absolute h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('images/pexels-jopwell-2422294.jpg')" }}>
        <div className="mt-10 lg:mt-20 lg:max-w-[80%] mx-auto">
          <div className="mx-auto border-t pt-10 flex-wrap border-white flex justify-center">
            <div className="lg:w-60 w-1/2 text-center">
              <p>平均年齢</p>
              <motion.div ref={ref}>
                {counters.filter((counter) => counter.id === 1).map((counter) => (
                  <CounterDisplay counter={counter} key={counter.id} />
                ))}
              </motion.div>
            </div>
            <div className="lg:w-60 w-1/2 text-center">
              <p>離職率</p>
              <motion.div ref={ref}>
                {counters.filter((counter) => counter.id === 2).map((counter) => (
                  <CounterDisplay counter={counter} key={counter.id} />
                ))}
              </motion.div>
            </div>
            <div className="lg:w-80 mb-10 lg:mb-10">
              <p className="text-center">男女比率</p>
              <div className="flex mt-10">
                <div className="relative">
                  <img alt="graph" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" style={{ color: 'transparent' }} srcSet="/images/graph-1.png 1x, /images/graph-1.png 2x" src="/images/graph-1.png" />
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    <p className="mr-2">男性</p>
                    <motion.div ref={ref}>
                      {counters.filter((counter) => counter.id === 3).map((counter) => (
                        <CounterDisplay counter={counter} style={{ fontSize: '48px', lineHeight: '1' }} key={counter.id} />
                      ))}
                    </motion.div>
                    <p className="ml-2">%</p>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-2">女性</p>
                    <motion.div ref={ref}>
                      {counters.filter((counter) => counter.id === 4).map((counter) => (
                        <CounterDisplay counter={counter} style={{ fontSize: '48px', lineHeight: '1' }} key={counter.id} />
                      ))}
                    </motion.div>
                    <p className="ml-2">%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t pt-10 border-white flex flex-wrap justify-center">
            <div className="lg:w-60 w-1/2 text-center">
              <p>育休取得率</p>
              <motion.div ref={ref}>
                {counters.filter((counter) => counter.id === 5).map((counter) => (
                  <CounterDisplay counter={counter} key={counter.id} />
                ))}
              </motion.div>
            </div>
            <div className="lg:w-60 w-1/2 text-center">
              <p>復職率</p>
              <motion.div ref={ref}>
                {counters.filter((counter) => counter.id === 6).map((counter) => (
                  <CounterDisplay counter={counter} key={counter.id} />
                ))}
              </motion.div>
            </div>
            <div className="lg:w-60 w-1/2 text-center">
              <p>年間平均残業時間</p>
              <motion.div ref={ref}>
                {counters.filter((counter) => counter.id === 7).map((counter) => (
                  <CounterDisplay counter={counter} key={counter.id} />
                ))}
              </motion.div>
            </div>
            <div className="lg:w-60 w-1/2 text-center">
              <p>研修受講率</p>
              <motion.div ref={ref}>
                {counters.filter((counter) => counter.id === 8).map((counter) => (
                  <CounterDisplay counter={counter} key={counter.id} />
                ))}
              </motion.div>
            </div>
          </div>
          <div className="border-t pt-10 border-white lg:flex justify-center items-center lg:px-20">
            <div className="w-80 text-center">
              <div>
                <p className="relative z-10 text-center">社員の国際性</p>
              </div>
              <div className="flex justify-center relative items-center">
                <div className="absolute">
                  <img alt="graph" loading="lazy" width="373" height="195" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/images/world-map-146505_1920.png" />
                </div>
                <motion.div className="z-10 " ref={ref}>
                  {counters.filter((counter) => counter.id === 9).map((counter) => (
                    <CounterDisplay counter={counter} key={counter.id} />
                  ))}
                </motion.div>
                <p className="relative z-10">
                  カ国以上の国籍を
                  <br />
                  持つ社員が在籍
                </p>
              </div>
            </div>
            <div className="w-80 text-center">
              <div>
                <p>
                  社員の社内起業・
                  <br />
                  新規プロジェクト提案成功率
                </p>
              </div>
              <motion.div ref={ref}>
                {counters.filter((counter) => counter.id === 10).map((counter) => (
                  <CounterDisplay counter={counter} key={counter.id} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animating_nums;