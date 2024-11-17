import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-transparent font-main py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Logo and Slogan */}
            <div className="text-center md:text-left">
              <img
                src="https://www.softclub.tj//static/media/logo.5519ba2675d1f39eba9852c198fd6fa2.svg"
                alt="SoftClub logo"
                className="h-12 w-auto mx-auto md:mx-0 mb-4"
              />
              <h3 className="text-base md:text-lg lg:text-xl">
                Соҳаи IT-ро аз худ карда, даромад гирифтанро сар кунед
              </h3>
            </div>

            {/* Navigation Links */}
            <div className="text-center md:text-left">
              <h4 className="mb-3 text-base md:text-lg font-semibold">Роҳнамо</h4>
              <ul className="list-none text-[#262626] space-y-2 md:space-y-3">
                <li>
                  <Link href="#21" className="cursor-pointer hover:underline">Номнавис шавед</Link>
                </li>
                <li>
                  <Link href="#courses" className="cursor-pointer hover:underline">Курсҳо</Link>
                </li>
                <li>
                  <Link href="/pages/blogs" className="cursor-pointer hover:underline">Хабарҳо</Link>
                </li>
                <li>
                  <Link href="/about" className="cursor-pointer hover:underline">Дар бораи мо</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="mb-3 text-base md:text-lg font-semibold">Контакты</h4>
              <p>info@softclub.tj</p>
              <p>+992 558 700 900</p>
              <p>кӯч. Раҳимӣ, 12. Нишона: профсоюз</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a href="https://www.facebook.com/infosoftclub.tj/" className="text-blue-500" aria-label="Facebook">
                  Facebook
                </a>
                <a href="https://t.me/softclubtj" className="text-blue-400" aria-label="Telegram">
                  Telegram
                </a>
                <a href="https://www.instagram.com/softclub.tj/" className="text-pink-500" aria-label="Instagram">
                  Instagram
                </a>
                <a href="https://softclub.tj" className="text-red-500" aria-label="Website">
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="bg-white fixed bottom-0 w-full py-2 shadow-sm md:hidden">
          <ul className="flex justify-around">
            <Link href="/" className="text-[#0284C7]" aria-label="Главная">
              <div className="flex flex-col items-center">
                <span role="img" aria-label="home">🏠</span>
                <span className="text-xs">Главная</span>
              </div>
            </Link>
            <Link href="#courses" className="text-gray-500 hover:text-[#0284C7]" aria-label="Курсы">
              <div className="flex flex-col items-center">
                <span role="img" aria-label="courses">📚</span>
                <span className="text-xs">Курсы</span>
              </div>
            </Link>
            <Link href="/pages/blogs" className="text-gray-500 hover:text-[#0284C7]" aria-label="Новости">
              <div className="flex flex-col items-center">
                <span role="img" aria-label="news">📰</span>
                <span className="text-xs">Новости</span>
              </div>
            </Link>
            <a href="/about" className="text-gray-500 hover:text-[#0284C7]" aria-label="О нас">
              <div className="flex flex-col items-center">
                <span role="img" aria-label="about us">ℹ️</span>
                <span className="text-xs">О нас</span>
              </div>
            </a>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
