"use client";
import { useParams } from "next/navigation";
import React from "react";

const BlogId = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div><br/><br/>
      <header className="text-center mb-6">
        <h1 className="text-[28px] font-bold mb-6 leading-[36px]">
          Около 67% наших выпускников трудоустроены.
        </h1>
        <p className="text-[20px] font-semibold">
          Желаем нашим выпускникам успехов в дальнейшей карьере.
        </p>
      </header>

      <figure>
  <img
    className="w-full max-h-[600px] rounded-2xl mb-6"
    src="https://webadminapi.softclub.tj/Images/ef569004-35d4-4800-9109-1c6f7e6cb041.png"
    alt="Около 67% наших выпускников трудоустроены."
  />
  <figcaption className="text-[16px] flex items-center mb-6 justify-between text-[#A3A3A3] font-medium">
    <div className="flex items-center gap-4">
      <span className="flex items-center gap-4">
        21.08.2024
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
        >
          <circle cx="3" cy="3" r="3" fill="#94A3B8"></circle>
        </svg>
      </span>
      <span className="flex gap-[20px]">
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium cursor-pointer hover:text-gray-500 css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="ThumbUpRoundedIcon"
        >
          <path d="M13.12 2.06 7.58 7.6c-.37.37-.58.88-.58 1.41V19c0 1.1.9 2 2 2h9c.8 0 1.52-.48 1.84-1.21l3.26-7.61C23.94 10.2 22.49 8 20.34 8h-5.65l.95-4.58c.1-.5-.05-1.01-.41-1.37-.59-.58-1.53-.58-2.11.01zM3 21c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2z"></path>
        </svg>
        14
      </span>
    </div>
    <div className="flex">
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="RemoveRedEyeRoundedIcon"
      >
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
      </svg>
      <span className="hidden sm:inline">Просмотрено</span> 14
    </div>
  </figcaption>
  <div className="w-full container">
    <div className="paragraph">
      <div>
        <p>Нашим выпускникам в их дальнейшей работе желаем успехов.</p>
      </div>
    </div>
  </div>
</figure>
<br/><br/>
<div className="flex flex-col sm:flex-row items-start gap-3 sm:items-center justify-between">
  <h1 className="text-[24px] font-bold text-[#262626]">Комментарии</h1>
  <div>
  <button className="custom-button">
    <svg viewBox="0 0 24 24" className="icon" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
    </svg>
    <span>Добавить</span>
  </button>
</div>

</div>


    </div>
  );
};

export default BlogId;
