import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex justify-center space-x-8">
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              ニュース
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              メンバー
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              採用情報
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              お問い合わせ
            </a>
          </li>
        </ul>
      </nav>
      <p className="mt-8 text-center text-gray-400">&copy; SIMPLE. All Rights Reserved 2023</p>
    </footer>
  );
};

export default Footer;