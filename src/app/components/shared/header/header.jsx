import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav
      className="w-full backdrop-blur-lg font-main"
      style={{ position: "sticky", top: "0px", zIndex: 20 }}
    >
      <div className="justify-between max-w-[1140px] w-full gap-[70px] md:items-center md:flex mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center justify-between pb-[20px] md:h-[73px] md:block">
          <Link href="/">
            <img
              width="78px"
              height="36px"
              src="https://www.softclub.tj/static/media/logo.5519ba2675d1f39eba9852c198fd6fa2.svg"
              className="w-[78px] h-[36px] lg:w-[106px] lg:h-[48px] relative top-3"
              alt="Softclub"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex lg:flex-row flex-col items-center gap-2">
          <li>
            <Link
              href="/"
              className="text-[#262626] hover:text-[#075985] px-4 py-2 rounded-lg duration-300 hover:bg-sky-200 active:bg-sky-300 text-[16px] font-[500]"
            >
              Курсы
            </Link>
          </li>
          <li>
            <Link
              href="/pages/blogs"
              className="text-[#262626] hover:text-[#075985] px-4 py-2 rounded-lg duration-300 hover:bg-sky-200 active:bg-sky-300 text-[16px] font-[500]"
            >
              Новости
            </Link>
          </li>
          <li>
            <Link
              href="/pages/about"
              className="text-[#262626] hover:text-[#075985] px-4 py-2 rounded-lg duration-300 hover:bg-sky-200 active:bg-sky-300 text-[16px] font-[500]"
            >
              О нас
            </Link>
          </li>
        </ul>

        {/* Right Section with Icons and Button */}
        <div className="flex items-center gap-7">
          {/* Icon */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="currentColor"
              style={{ cursor: "pointer", transform: "rotate(90deg)" }}
            >
              <circle cx="12" cy="12" r="5" fill="#0284C7" />
              <g stroke="currentColor">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </g>
            </svg>
          </div>

          {/* Login Button */}
          <Button
            variant="outlined"
            color="primary"
            href="https://quiz.softclub.tj/"
            target="_blank"
          >
            Войти
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
