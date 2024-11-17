import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div>
        <div>
            <img className='w-[100%] rounded-[20px] h-[500px] mb-[50px]' src="https://webadminapi.softclub.tj/Images/ef569004-35d4-4800-9109-1c6f7e6cb041.png" alt="" />
        </div>
        <div className="flex gap-[30px] justify-between flex-wrap">
        <header className=" max-w-[330px] card-wrapper bg-white  text-start flex flex-col justify-between items-baseline p-4 rounded-2xl container min-w-[320px] h-[426px]">
          <main>
            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                width="304px"
                alt="example"
                className="rounded-[10px] h-[220px]"
                src="https://webadminapi.softclub.tj/Images/ef569004-35d4-4800-9109-1c6f7e6cb041.png"
              />
            </div>

            {/* Date and Actions */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <p className="text-sm text-gray-500">21.08.2024</p>
              <div className="py-1 flex rounded-[6px] items-center text-[#64748B] space-x-2">
                {/* Like Button */}
                <button
                  className="flex items-center gap-1 text-[#64748B] text-[14px] font-[500]"
                  type="button"
                  aria-label="Like"
                >
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z" />
                  </svg>
                  <span>14</span>
                </button>

                {/* Divider */}
                <div className="h-3 w-[1px] bg-[#CBD5E1]" />

                {/* Comment Button */}
                <Link href="/pages/blogs/134">
                  <button
                    className="flex items-center gap-1 text-[#64748B] text-[14px] font-[500]"
                    type="button"
                    aria-label="Comments"
                  >
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z" />
                    </svg>
                    <span>0</span>
                  </button>
                </Link>
              </div>
            </div>
          </main>

          {/* Card Content */}
          <div className="p-2 text-start  text-[#262626]">
            <h3 className="text-[16px] font-bold leading-6">
              Тақрибан 67% аз хатмкунандагони мо соҳиби ҷои кор шудаанд.
            </h3>
            <p className="text-sm font-normal">
              Ба хатмкунандагонамон, дар фаолияти минбаъдаашон муваффақия. . .
            </p>
          </div>

          {/* Read More Button */}
          <Link href="/pages/blogs/134">
            <button
              className="flex items-center text-[#0284C7] text-sm font-medium"
              type="button"
              aria-label="Read more"
            >
              Подробнее
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall ml-1"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
              </svg>
            </button>
          </Link>
        </header>
        <header className=" max-w-[330px] card-wrapper bg-white  text-start flex flex-col justify-between items-baseline p-4 rounded-2xl container min-w-[320px] h-[426px]">
          <main>
            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                width="304px"
                alt="example"
                className="rounded-[10px] h-[220px]"
                src="https://webadminapi.softclub.tj/Images/ef569004-35d4-4800-9109-1c6f7e6cb041.png"
              />
            </div>

            {/* Date and Actions */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <p className="text-sm text-gray-500">21.08.2024</p>
              <div className="py-1 flex rounded-[6px] items-center text-[#64748B] space-x-2">
                {/* Like Button */}
                <button
                  className="flex items-center gap-1 text-[#64748B] text-[14px] font-[500]"
                  type="button"
                  aria-label="Like"
                >
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z" />
                  </svg>
                  <span>14</span>
                </button>

                {/* Divider */}
                <div className="h-3 w-[1px] bg-[#CBD5E1]" />

                {/* Comment Button */}
                <Link href="/pages/blogs/134">
                  <button
                    className="flex items-center gap-1 text-[#64748B] text-[14px] font-[500]"
                    type="button"
                    aria-label="Comments"
                  >
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z" />
                    </svg>
                    <span>0</span>
                  </button>
                </Link>
              </div>
            </div>
          </main>

          {/* Card Content */}
          <div className="p-2 text-start  text-[#262626]">
            <h3 className="text-[16px] font-bold leading-6">
              Тақрибан 67% аз хатмкунандагони мо соҳиби ҷои кор шудаанд.
            </h3>
            <p className="text-sm font-normal">
              Ба хатмкунандагонамон, дар фаолияти минбаъдаашон муваффақия. . .
            </p>
          </div>

          {/* Read More Button */}
          <Link href="/pages/blogs/134">
            <button
              className="flex items-center text-[#0284C7] text-sm font-medium"
              type="button"
              aria-label="Read more"
            >
              Подробнее
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall ml-1"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
              </svg>
            </button>
          </Link>
        </header>
        <header className=" max-w-[330px] card-wrapper bg-white  text-start flex flex-col justify-between items-baseline p-4 rounded-2xl container min-w-[320px] h-[426px]">
          <main>
            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                width="304px"
                alt="example"
                className="rounded-[10px] h-[220px]"
                src="https://webadminapi.softclub.tj/Images/ef569004-35d4-4800-9109-1c6f7e6cb041.png"
              />
            </div>

            {/* Date and Actions */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <p className="text-sm text-gray-500">21.08.2024</p>
              <div className="py-1 flex rounded-[6px] items-center text-[#64748B] space-x-2">
                {/* Like Button */}
                <button
                  className="flex items-center gap-1 text-[#64748B] text-[14px] font-[500]"
                  type="button"
                  aria-label="Like"
                >
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z" />
                  </svg>
                  <span>14</span>
                </button>

                {/* Divider */}
                <div className="h-3 w-[1px] bg-[#CBD5E1]" />

                {/* Comment Button */}
                <Link href="/pages/blogs/134">
                  <button
                    className="flex items-center gap-1 text-[#64748B] text-[14px] font-[500]"
                    type="button"
                    aria-label="Comments"
                  >
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z" />
                    </svg>
                    <span>0</span>
                  </button>
                </Link>
              </div>
            </div>
          </main>

          {/* Card Content */}
          <div className="p-2 text-start  text-[#262626]">
            <h3 className="text-[16px] font-bold leading-6">
              Тақрибан 67% аз хатмкунандагони мо соҳиби ҷои кор шудаанд.
            </h3>
            <p className="text-sm font-normal">
              Ба хатмкунандагонамон, дар фаолияти минбаъдаашон муваффақия. . .
            </p>
          </div>

          {/* Read More Button */}
          <Link href="/pages/blogs/134">
            <button
              className="flex items-center text-[#0284C7] text-sm font-medium"
              type="button"
              aria-label="Read more"
            >
              Подробнее
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall ml-1"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
              </svg>
            </button>
          </Link>
        </header>
      </div><br /><br />
    </div>
  )
}

export default Blog