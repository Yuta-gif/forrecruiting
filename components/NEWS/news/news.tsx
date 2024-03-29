import Image from 'next/image';

function News() {
  return (
    <div className="mt-10 pb-10 lg:mt-40 lg:h-[800px] relative bg-gray-700">
      <div className="absolute hidden lg:block -top-20 right-10">
        <Image
          alt="太光設備株式会社"
          priority
          width={600}
          height={300}
          className="w-auto"
          style={{ color: 'transparent' }}
          src="/images/news1.webp"
          sizes="(max-width: 600px) 100vw, 600px"
        />
      </div>
      <div className="absolute top-60 hidden lg:block left-0">
        <Image
          alt="太光設備株式会社"
          priority
          width={300}
          height={100}
          className="w-auto"
          style={{ color: 'transparent' }}
          src="/images/news2.webp"
          sizes="(max-width: 300px) 100vw, 300px"
        />
      </div>
      <div className="lg:ml-[30%] lg:flex max-w-[90%] mx-auto lg:w-full pt-10 lg:pt-80 lg:mt-10">
        <div className="mr-5">
          <h2 className="text-2xl font-cinzel lg:text-[70px] text-left text-white">News</h2>
          <div className="flex items-center font-cinzel">
            <div className="w-10 border-t-2 border-gray-500 mr-3"></div>
            <h3 className="font-cinzel lg:text-lg text-white">お知らせ</h3>
          </div>
        </div>
        <div className="mt-5 lg:mt-32 text-white lg:w-[500px]">
          <div className="border-t py-5">
            <p>2023/01/01</p>
            <p>20XX年度 新卒採用エントリー受付開始しました</p>
          </div>
          <div className="border-y py-5">
            <p>2023/01/01</p>
            <p>20XX年度 新卒採用エントリー受付開始しました</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;