import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ml-[5%] mx-auto absolute top-0 left-0 right-0 pt-8 pb-8 z-50 lg:flex items-center justify-between">
      <a className="flex" href="/">
        <img alt="太光設備株式会社" fetchpriority="high" width="60" height="75" decoding="async" data-nimg="1" className="w-auto" style={{color: "transparent"}} 
        srcSet="/_next/image?url=%2Fimages%2Flogo2.webp&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fimages%2Flogo2.webp&amp;w=128&amp;q=75 2x" 
        src="/_next/image?url=%2Fimages%2Flogo2.webp&amp;w=128&amp;q=75" />
      </a>
        
      
      <ul className="hidden lg:flex items-center">
        <li className="-mt-3 cursor-pointer hover:underline inline-block ml-8">メッセージ</li>
        <li className="-mt-3 cursor-pointer hover:underline inline-block ml-8">社員インタビュー</li>
        <li className="-mt-3 cursor-pointer hover:underline inline-block ml-8">数字で見る</li>
        <li className="-mt-3 cursor-pointer hover:underline inline-block ml-8">募集職種</li>
        <li className="-mt-3 cursor-pointer hover:underline inline-block ml-8">お知らせ</li>
        <button className="hover:opacity-80 font-cinzel ml-8 px-16 text-lg pt-12 pb-8 -mt-12 top-0 bg-[#28C7E4]">ENTRY</button>
      </ul>
      <div className="lg:hidden">
        <button
          className="flex flex-col items-center z-50 absolute top-5 right-5 justify-center w-10 h-10"
          onClick={toggleMenu}
        >
          <div className={`h-1 w-8 bg-black mb-1 transition-transform ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`h-1 w-8 bg-black mb-1 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`h-1 w-8 bg-black mb-1 transition-transform ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-gray-200 z-[30]">
          <ul className="flex flex-col mt-10 items-center justify-center">
            <li className="mt-5 cursor-pointer hover:underline inline-block ml-4">メッセージ</li>
            <li className="mt-5 cursor-pointer hover:underline inline-block ml-4">社員インタビュー</li>
            <li className="mt-5 cursor-pointer hover:underline inline-block ml-4">数字で見る</li>
            <li className="mt-5 cursor-pointer hover:underline inline-block ml-4">募集職種</li>
            <li className="mt-5 cursor-pointer hover:underline inline-block ml-4">お知らせ</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;