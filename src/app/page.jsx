"use client";

import Image from "next/image";
import Loading from "./loading";
import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import Link from "next/link";
import { YMaps, Map, Placemark } from "react-yandex-maps";
export default function Home() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [value, setValue] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // Sample course data
  const courses = [
    {
      link: "/course/154",
      duration: "1",
      unit: "year",
      title: "Олимпиада",
      bgColor: "rgba(255, 45, 133, 0.1)",
      textColor: "rgb(255, 45, 133)",
      image:
        "https://webadminapi.softclub.tj/Images/aec39a3e-dd9b-40b6-aec3-c235d185ba67.png",
    },
    {
      link: "/course/153",
      duration: "2",
      unit: "months",
      title: "React",
      bgColor: "rgba(89, 167, 188, 0.1)",
      textColor: "rgb(89, 167, 188)",
      image:
        "https://webadminapi.softclub.tj/Images/b4a39e69-db28-47d9-918a-630a42896f97.png",
    },
    {
      link: "/course/152",
      duration: "2",
      unit: "months",
      title: "JavaScript",
      bgColor: "rgba(209, 163, 19, 0.1)",
      textColor: "rgb(209, 163, 19)",
      image:
        "https://webadminapi.softclub.tj/Images/f1e50a62-7646-4d6c-b678-6ff499cde98d.png",
    },
    // Additional sample courses
    {
      link: "/course/151",
      duration: "2",
      unit: "months",
      title: "UX/UI дизайн",
      bgColor: "#182727",
      textColor: "rgb(30, 136, 229)",
      image:
        "https://webadminapi.softclub.tj/Images/14a0261a-261a-4842-85d5-30ad3ed21fd8.png",
    },
    {
      link: "/course/153",
      duration: "3",
      unit: "months",
      title: "Python",
      bgColor: "rgba(89, 167, 188, 0.1)",
      textColor: "rgb(89, 167, 188)",
      image:
        "https://webadminapi.softclub.tj/Images/885fa34a-abf9-4278-9eba-750753a08e8a.png",
    },
    {
      link: "/course/150",
      duration: "6",
      unit: "months",
      title: ".Net (dotNet)",
      bgColor: "rgba(124, 77, 255, 0.1)",
      textColor: "rgb(124, 77, 255)",
      image:
        "https://webadminapi.softclub.tj/Images/05dc7efc-34a8-4b1e-8646-e3fe4ac662d3.png",
    },
    {
      link: "/course/149",
      duration: "1",
      unit: "month",
      title: "HTML & CSS",
      bgColor: "#241D2A",
      textColor: "#E44D26",
      image:
        "https://webadminapi.softclub.tj/Images/ff9462fc-bbd9-4f69-bdc5-5cabcbd3524e.png",
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  // Set number of courses to display initially
  const displayedCourses = showAll ? courses : courses.slice(0, 6);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div>
      <br />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://www.softclub.tj/static/media/Dev%20banner%204%20(1).1ce18ea72bbc6e051fa0.webp"
            alt="Development Banner"
            className="w-full h-full object-cover object-center"
          />
          <div className="text-white md:w-[640px] lg:w-[658px] text-start absolute top-[60px] lg:left-[60px] left-[24px]">
            <h1 className="lg:text-[48px] xs2:text-[32px] text-[28px] font-[700] font-main">
              Касби серталаби ТИ-ро, омӯзед
            </h1>
            <p className="lg:text-[28px] xs2:text-[20px] text-[18px] font-[400] font-main">
              ва ояндаи дурахшонро бо мо созед.
            </p>
            <Link href="#21">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0098f3", // Custom blue color
                  color: "#ffffff", // White text
                  padding: "15px 24px",
                  mt: "20px",
                  borderRadius: "12px", // Rounded corners
                  fontSize: "16px",
                  fontWeight: "bold",
                  boxShadow: "none", // Remove default shadow
                  "&:hover": {
                    backgroundColor: "#007acc", // Slightly darker blue on hover
                    boxShadow: "none",
                  },
                }}
              >
                Номнавис шавед
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.softclub.tj/static/media/Property%201=2%20(1).17a2926aa659dd2c8569.webp"
            alt="Development Banner"
            className="w-full h-full object-cover object-center"
          />
          <div className="text-white md:w-[640px] lg:w-[658px] text-start absolute top-[60px] lg:left-[60px] left-[24px]">
            <h1 className="lg:text-[48px] xs2:text-[32px] text-[28px] font-[700] font-main">
              Касби серталаби ТИ-ро, омӯзед
            </h1>
            <p className="lg:text-[28px] xs2:text-[20px] text-[18px] font-[400] font-main">
              ва ояндаи дурахшонро бо мо созед.
            </p>
            <Link href="#21">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0098f3", // Custom blue color
                  color: "#ffffff", // White text
                  padding: "15px 24px",
                  mt: "20px",
                  borderRadius: "12px", // Rounded corners
                  fontSize: "16px",
                  fontWeight: "bold",
                  boxShadow: "none", // Remove default shadow
                  "&:hover": {
                    backgroundColor: "#007acc", // Slightly darker blue on hover
                    boxShadow: "none",
                  },
                }}
              >
                Номнавис шавед
              </Button>
            </Link>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="https://www.softclub.tj/static/media/Property%201=4%20(1).06e382cb1ab0fc8bf146.webp"
            alt="Development Banner"
            className="w-full h-full object-cover object-center"
          />
          <div className="text-white md:w-[640px] lg:w-[658px] text-start absolute top-[60px] lg:left-[60px] left-[24px]">
            <h1 className="lg:text-[48px] xs2:text-[32px] text-[28px] font-[700] font-main">
              Касби серталаби ТИ-ро, омӯзед
            </h1>
            <p className="lg:text-[28px] xs2:text-[20px] text-[18px] font-[400] font-main">
              ва ояндаи дурахшонро бо мо созед.
            </p>
            <Link href="#21">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0098f3", // Custom blue color
                  color: "#ffffff", // White text
                  padding: "15px 24px",
                  mt: "20px",
                  borderRadius: "12px", // Rounded corners
                  fontSize: "16px",
                  fontWeight: "bold",
                  boxShadow: "none", // Remove default shadow
                  "&:hover": {
                    backgroundColor: "#007acc", // Slightly darker blue on hover
                    boxShadow: "none",
                  },
                }}
              >
                Номнавис шавед
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <br />
      <br />
      {/* section 2 */}
      <ul className="grid grid-cols-1 text-center mt-[-20px] lg:grid-cols-3 gap-5 items-center">
        <li
          className="flex flex-col py-[28px] px-5 gap-[10px] items-center bg-[#F8FAFC]  backdrop-blur-sm  bg-opacity-20 rounded-[16px]"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.04) 0px 14px 24px 0px",
            background:
              "linear-gradient(rgba(255, 255, 255, 0.24) 0%, rgb(255, 255, 255) 100%)",
          }}
        >
          <figure className="flex flex-col items-center">
            <img
              src="https://www.softclub.tj/static/media/Advantage1.a084acc44710d37125850f4184f3d7f5.svg"
              loading="lazy"
              width="100%"
              height="auto"
              alt="first"
            />
            <figcaption className="sr-only">Муаллимони ботаҷриба</figcaption>
          </figure>
          <div>
            <h2 className="mb-0.5 font-[700] leading-6 tablet:leading-5 text-[16px] text-neutral-800 ">
              Муаллимони ботаҷриба
            </h2>
            <p className="font-medium text-[12px] text-neutral-500">
              <span>
                Омӯзгорони мо дар лоиҳаҳои воқеӣ таҷрибаи корӣ доранд.
              </span>
            </p>
          </div>
        </li>

        <li
          className="flex flex-col py-[28px] px-5 gap-[10px] items-center bg-[#F8FAFC]  backdrop-blur-sm  bg-opacity-20 rounded-[16px]"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.04) 0px 14px 24px 0px",
            background:
              "linear-gradient(rgba(255, 255, 255, 0.24) 0%, rgb(255, 255, 255) 100%)",
          }}
        >
          <figure className="flex flex-col items-center">
            <img
              src="https://www.softclub.tj/static/media/Advantage2.3ce0dac6adf4e8eb8bef646c9c9d2865.svg"
              loading="lazy"
              width="100%"
              height="auto"
              alt="second"
            />
            <figcaption className="sr-only">Беҳтарин усули дарсдиҳӣ</figcaption>
          </figure>
          <div>
            <h2 className="mb-0.5 font-[700] leading-6 tablet:leading-5 text-[16px] text-neutral-800 ">
              Беҳтарин усули дарсдиҳӣ
            </h2>
            <p className="font-medium text-[12px] text-neutral-500">
              <span>
                Асосҳои барномасозиро омӯзед ва роҳи худро интихоб кунед.
              </span>
            </p>
          </div>
        </li>

        <li
          className="flex flex-col py-[28px] px-5 gap-[10px] items-center bg-[#F8FAFC]  backdrop-blur-sm  bg-opacity-20 rounded-[16px]"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.04) 0px 14px 24px 0px",
            background:
              "linear-gradient(rgba(255, 255, 255, 0.24) 0%, rgb(255, 255, 255) 100%)",
          }}
        >
          <figure className="flex flex-col items-center">
            <img
              src="https://www.softclub.tj/static/media/Advantage3.2979b7c9d74bd18ca983fce7baaae64c.svg"
              loading="lazy"
              width="100%"
              height="auto"
              alt="third"
            />
            <figcaption className="sr-only">Курси интенсивӣ</figcaption>
          </figure>
          <div>
            <h2 className="mb-0.5 font-[700] leading-6 tablet:leading-5 text-[16px] text-neutral-800 ">
              Курси интенсивӣ
            </h2>
            <p className="font-medium text-[12px] text-neutral-500">
              <span>Дар як ҳафта 6 маротиба дарс. Дастгирии 24/7</span>
            </p>
          </div>
        </li>
      </ul>
      <br />
      <br />
      {/* section 3 */}
      <section>
        <h2 className="sm:text-[28px] text-[20px] font-[700] text-[#262626]  text-start mb-8">
          Барои чӣ курсҳои барномасозии Softclub-ро бояд интихоб кунед
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <li className="flex items-center mt-5">
            <figure className="flex-shrink-0">
              <img
                src="https://www.softclub.tj/static/media/Group%20210.7ad936365d0175bccd37f4dd0ed2a21a.svg"
                alt="Reason 1"
              />
              <figcaption className="sr-only">
                Омӯзиш бо забони англисӣ, русӣ ё тоҷикӣ мегузарад
              </figcaption>
            </figure>
            <p className="ml-5 text-[16px] leading-6 font-[400] text-[#262626] ">
              Омӯзиш бо забони англисӣ, русӣ ё тоҷикӣ мегузарад.
            </p>
          </li>

          <li className="flex items-center mt-5">
            <figure className="flex-shrink-0">
              <img
                src="https://www.softclub.tj/static/media/Group%20210.7ad936365d0175bccd37f4dd0ed2a21a.svg"
                alt="Reason 2"
              />
              <figcaption className="sr-only">
                Дар давоми курс бо лоиҳаҳои воқеӣ кор мекунед
              </figcaption>
            </figure>
            <p className="ml-5 text-[16px] leading-6 font-[400] text-[#262626] ">
              Дар давоми курс бо лоиҳаҳои воқеӣ кор мекунед.
            </p>
          </li>

          <li className="flex items-center mt-5">
            <figure className="flex-shrink-0">
              <img
                src="https://www.softclub.tj/static/media/Group%20210.7ad936365d0175bccd37f4dd0ed2a21a.svg"
                alt="Reason 3"
              />
              <figcaption className="sr-only">
                Пас аз хатми курс бо намунаи корҳои амалиятон метавонед ба осонӣ
                соҳиби кор шавед
              </figcaption>
            </figure>
            <p className="ml-5 text-[16px] leading-6 font-[400] text-[#262626] ">
              Пас аз хатми курс шумо бо намунаи корҳои амалиятон метавонед ба
              осонӣ соҳиби кор шавед.
            </p>
          </li>

          <li className="flex items-center mt-5">
            <figure className="flex-shrink-0">
              <img
                src="https://www.softclub.tj/static/media/Group%20210.7ad936365d0175bccd37f4dd0ed2a21a.svg"
                alt="Reason 4"
              />
              <figcaption className="sr-only">
                Омӯзгорони мо – мутахассисони таҷрибадоранд
              </figcaption>
            </figure>
            <p className="ml-5 text-[16px] leading-6 font-[400] text-[#262626] ">
              Омӯзгорони мо – мутахассисони таҷрибадоранд.
            </p>
          </li>

          <li className="flex items-center mt-5">
            <figure className="flex-shrink-0">
              <img
                src="https://www.softclub.tj/static/media/Group%20210.7ad936365d0175bccd37f4dd0ed2a21a.svg"
                alt="Reason 5"
              />
              <figcaption className="sr-only">
                Пешравиро худатон мебинед – дар як ҳафта 5 рӯз дарс ва ҳар рӯзи
                шанбе имтиҳон аст
              </figcaption>
            </figure>
            <p className="ml-5 text-[16px] leading-6 font-[400] text-[#262626] ">
              Пешравиро худатон мебинед – дар як ҳафта 5 рӯз дарс ва ҳар рӯзи
              шанбе имтиҳон аст.
            </p>
          </li>

          <li className="flex items-center mt-5">
            <figure className="flex-shrink-0">
              <img
                src="https://www.softclub.tj/static/media/Group%20210.7ad936365d0175bccd37f4dd0ed2a21a.svg"
                alt="Reason 6"
              />
              <figcaption className="sr-only">
                Забонҳои барномасозие, ки дар Тоҷикистон ва хориҷ аз кишвар
                талабот доранд, меомӯзонем
              </figcaption>
            </figure>
            <p className="ml-5 text-[16px] leading-6 font-[400] text-[#262626] ">
              Забонҳои барномасозие, ки дар Тоҷикистон ва хориҷ аз кишвар
              талабот доранд, меомӯзонем.
            </p>
          </li>
        </ul>
      </section>
      <br />
      <br />
      <br />

      {/* section 4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center xl:grid-cols-4 gap-8 text-start">
        <article className="bg-white container rounded-[16px] p-6 h-[325px]">
          <h3 className="text-[40px] font-[700] text-[#0284C7]">4 сол</h3>
          <p className="mt-2 text-[18px] pr-5  leading-6 font-medium text-[#262626]">
            Таҷрибаи дарсдиҳӣ
          </p>
          <figure className="w-[200px] h-[200px] mx-auto">
            <img
              src="https://www.softclub.tj/static/media/image%20152.7ceb4daddef698b46d143d3584ef7e33.svg"
              alt="4 сол"
              className="w-full p-4 h-full"
            />
            <figcaption className="sr-only">Таҷрибаи дарсдиҳӣ</figcaption>
          </figure>
        </article>
        <article className="bg-white container rounded-[16px] p-6 h-[325px]">
          <h3 className="text-[40px] font-[700] text-[#0284C7]">280+</h3>
          <p className="mt-2 text-[18px] pr-5  leading-6 font-medium text-[#262626]">
            Миқдори хатмкунандагонамон
          </p>
          <figure className="w-[200px] h-[200px] mx-auto">
            <img
              src="https://www.softclub.tj/static/media/image%20151.0b8138ff9ab0974e2d3bb25fc41b5e0a.svg"
              alt="280+"
              className="w-full p-4 h-full"
            />
            <figcaption className="sr-only">
              Миқдори хатмкунандагонамон
            </figcaption>
          </figure>
        </article>
        <article className="bg-white container rounded-[16px] p-6 h-[325px]">
          <h3 className="text-[40px] font-[700] text-[#0284C7]">68%</h3>
          <p className="mt-2 text-[18px] pr-5  leading-6 font-medium text-[#262626]">
            Дар ТИ-ширкатҳо ба кор даромаданд
          </p>
          <figure className="w-[200px] h-[200px] mx-auto">
            <img
              src="https://www.softclub.tj/static/media/image%20146.5fed71a5b75b2f83b648416d905e8eab.svg"
              alt="68%"
              className="w-full p-4 h-full"
            />
            <figcaption className="sr-only">
              Дар ТИ-ширкатҳо ба кор даромаданд
            </figcaption>
          </figure>
        </article>
        <article className="bg-white container rounded-[16px] p-6 h-[325px]">
          <h3 className="text-[40px] font-[700] text-[#0284C7]">98%</h3>
          <p className="mt-2 text-[18px] pr-5  leading-6 font-medium text-[#262626]">
            Тайёранд моро тавсия диҳанд
          </p>
          <figure className="w-[200px] h-[200px] mx-auto">
            <img
              src="https://www.softclub.tj/static/media/image%20148.26409f42be3fd4484a6cfc76b687c4e6.svg"
              alt="98%"
              className="w-full p-4 h-full"
            />
            <figcaption className="sr-only">
              Тайёранд моро тавсия диҳанд
            </figcaption>
          </figure>
        </article>
      </div>
      <br />
      <br />
      <br />
      {/* works students */}
      <section className="container">
        <p className="header-text text-[28px] px-5 mb-7 font-[700] md:mb-10 text-trueGray900 ">
          Хатмкунандагони мо дар ин ҷо кор мекунанд
        </p>
        <div>
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul
              x-ref="logos"
              className="flex items-center justify-center md:justify-start [&_li]:mx-3 [&_img]:max-w-none animate-infinite-scroll"
            >
              <li>
                <img
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://www.softclub.tj/static/media/amonat.22f500d6d74596c4d6f0919f8302889d.svg"
                  alt="work"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://www.softclub.tj/static/media/oriyon.d08f676a82e8f370f01b0cc83e5a01de.svg"
                  alt="work"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://www.softclub.tj/static/media/ALIF.53b494c670981f20aabb5b60b29c51ad.svg"
                  alt="work"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://www.softclub.tj/static/media/HUMO.844873a53aceffdfb09a91263ba89046.svg"
                  alt="work"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://www.softclub.tj/static/media/payvand.5c8fd474b3e7a5b17fad8d7196b7a089.svg"
                  alt="work"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://www.softclub.tj/static/media/rowtech.36d4583b29fd49119e38e0218ba689ff.svg"
                  alt="work"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://www.softclub.tj/static/media/DCITY.f9c0953116c9ae144c1071d7b8713fd1.svg"
                  alt="work"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://www.softclub.tj/static/media/VATANICT.91ffc124755ee747e89823d74751b9fc.svg"
                  alt="work"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://www.softclub.tj/static/media/vazorat.6c178b07af6ea0d01d816b390c6b9c7f.svg"
                  alt="work"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://www.softclub.tj/static/media/LIVO.561eb88203c216bc8b86ae65ede7f8c6.svg"
                  alt="work"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://www.softclub.tj/static/media/rebus.6884436e1aaaf12a25db96985731f19e.svg"
                  alt="work"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://www.softclub.tj/static/media/tecnohub.dfd835dba12c33ff146d24d5acdf6ece.svg"
                  alt="work"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://www.softclub.tj/static/media/ESKHATA.080b9ecf6a92c05ac194580de6a3a953.svg"
                  alt="work"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://www.softclub.tj/static/media/esPay.bcb60ec9f3049fc97bb337e745314ebb.svg"
                  alt="work"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      {/* section 5 */}
      <div>
        <h2 className="text-[28px] font-[700] font-main mb-4">Самтҳои мо</h2>
        <div className="grid lg:grid-cols-6 gap-4">
          <div className="bg-white hover:scale-105 hover:duration-700 hover:transition-all rounded-[16px] font-main lg:col-span-3 p-3 xs2:p-6 flex flex-row items-center justify-between">
            <div>
              <h3 className="lg:text-[28px] text-[20px] font-semibold break-all ">
                Фронтенд
              </h3>
              <p className="text-[#F8FAFC] lg:text-[72px] text-[40px] ">
                Frontend
              </p>
            </div>
            <img
              src="https://www.softclub.tj/static/media/image 159.1968a8af8d7a0bd7f69e6e740f6f2093.svg"
              alt="Фронтенд"
              className="lg:w-auto max-w-[60px] xs2:max-w-[200px]"
            />
          </div>
          <div className="bg-white hover:scale-105 hover:duration-700 hover:transition-all rounded-[16px] font-main lg:col-span-3 p-3 xs2:p-6 flex flex-row items-center justify-between">
            <div>
              <h3 className="lg:text-[28px] text-[20px] font-semibold break-all ">
                Бэкенд
              </h3>
              <p className="text-[#F8FAFC] lg:text-[72px] text-[40px] ">
                Backend
              </p>
            </div>
            <img
              src="https://www.softclub.tj/static/media/image 174.b3c0463fcea1abd8db923c5a5ef356c1.svg"
              alt="Бэкенд"
              className="lg:w-auto max-w-[60px] xs2:max-w-[200px]"
            />
          </div>
          <div className="bg-white hover:scale-105 hover:duration-700 hover:transition-all rounded-[16px] font-main lg:col-span-2 p-3 xs2:p-6 flex flex-row items-center justify-between">
            <div>
              <h3 className="text-[20px] font-semibold break-all ">Дизайн</h3>
              <p className="text-[#F8FAFC] lg:text-[60px] text-[40px] ">
                Design
              </p>
            </div>
            <img
              src="https://www.softclub.tj/static/media/Icon (2).fb18dd6968288aae9d90f7a143d31a08.svg"
              alt="Дизайн"
              className="lg:w-auto max-w-[60px] xs2:max-w-[200px]"
            />
          </div>
          <div className="bg-white hover:scale-105 hover:duration-700 hover:transition-all rounded-[16px] font-main lg:col-span-2 p-3 xs2:p-6 flex flex-row items-center justify-between">
            <div>
              <h3 className="text-[20px] font-semibold break-all ">
                Коркарди мобилӣ
              </h3>
              <p className="text-[#F8FAFC] lg:text-[60px] text-[40px] ">
                Mobile
              </p>
            </div>
            <img
              src="https://www.softclub.tj/static/media/image 164.b243868cccdb87526124fd8c7ced8e63.svg"
              alt="Коркарди мобилӣ"
              className="lg:w-auto max-w-[60px] xs2:max-w-[200px]"
            />
          </div>
          <div className="bg-white hover:scale-105 hover:duration-700 hover:transition-all rounded-[16px] font-main lg:col-span-2 p-3 xs2:p-6 flex flex-row items-center justify-between">
            <div>
              <h3 className="text-[20px] font-semibold break-all ">
                Барномасозӣ барои хурдсолон
              </h3>
              <p className="text-[#F8FAFC] lg:text-[60px] text-[40px] ">Kids</p>
            </div>
            <img
              src="https://www.softclub.tj/static/media/image 166.26c14e5f0a167ce0e1d20e007c8c24de.svg"
              alt="Барномасозӣ барои хурдсолон"
              className="lg:w-auto max-w-[60px] xs2:max-w-[200px]"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      {/* section sertifcat */}
      <div className="p-1 sm:p-4">
        <div className="bg-[#E2E8F0]  p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between">
          <div>
            <h2 className="text-[40px] font-bold text-[#0284C7] mb-2">
              {" "}
              Шаҳодатномаи Softclub
            </h2>
            <p className="text-gray-700  text-[16px] font-medium  mb-4">
              Тасдиқ мекунад, ки шумо курсро хатм кардаед ва ба шумо дар ёфтани
              кор кӯмак мекунад
            </p>
            <a
              href="https://www.softclub.tj/static/media/Certificete.744529ae130c66c8c1b2.744529ae130c66c8c1b2.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="mt-10">
                <button className="sample-button py-2 px-4 flex items-center border-2 border-[#0284C7] text-[#0284C7] rounded-full">
                  <span className="mr-2">Намунаи Сертификат</span>
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16.5 12H3.5M10.5 5.5L16.5 12l-6 6.5" />
                  </svg>
                </button>
              </div>
            </a>
          </div>
          <div>
            <img
              src="https://www.softclub.tj//static/media/certification.d0cf7da0cf0ab446b8d5.png"
              alt="certificate"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      {/*  cours  */}
      <Box id='courses' className=" md:py-6 px-5 bg-[#0D1425] rounded-[20px]">
        <Container maxWidth="lg" sx={{ py: 10, px: { xs: 5, md: 0 } }}>
          <Typography variant="h4" fontWeight="bold" color="white" mb={2}>
            Курсҳои академия
          </Typography>

          {/* Tabs */}
          <Tabs value={value} onChange={handleChange} aria-label="course tabs">
            <Tab label="Ҳама курсҳо" />
          </Tabs>

          {/* Course Cards */}
          <Grid container spacing={5} sx={{ pt: 2 }}>
            {displayedCourses.map((course, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <Button
                  href={course.link}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    bgcolor: course.bgColor,
                    backdropFilter: "blur(4px)",
                    borderRadius: 2,
                    p: 2,
                    width: "100%",
                    height: 160,
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      gap={1}
                      color={course.textColor}
                    >
                      <Typography variant="h5" fontWeight="bold">
                        {course.duration}
                      </Typography>
                      <Typography variant="subtitle2" fontWeight="600">
                        {course.unit}
                      </Typography>
                    </Box>
                    <Typography variant="h6" fontWeight="bold" color="white">
                      {course.title}
                    </Typography>
                  </Box>
                  <Box
                    component="img"
                    src={course.image}
                    alt="course img"
                    sx={{
                      height: { xs: 100, md: 120 },
                      width: { xs: 100, md: 120 },
                    }}
                  />
                </Button>
              </Grid>
            ))}
          </Grid>

          {/* View More / View Less Button */}
          <Box display="flex" justifyContent="center" mt={5}>
            <Button
              variant="contained"
              color="primary"
              onClick={toggleShowAll}
              endIcon={
                showAll ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />
              }
            >
              {showAll ? "Пинҳон кардан" : "Намоиши бештар"}
            </Button>
          </Box>
        </Container>
      </Box>
      <br />
      <br />
      <br />

      {/* teachers */}
      <p className="header-text text-[28px] px-5 mb-7 font-[700] md:mb-10 text-trueGray900 ">
        Муаллимони мо мутахассисони амалкунанда мебошанд
      </p>

      <div className="flex flex-wrap gap-[30px] justify-between">
        <div className="bg-white max-w-[310px]  overflow-hidden flex flex-wrap flex-col justify-between items-start font-main h-[430px] sm:h-[391px] sm:max-h-[391px] p-6 rounded-2xl">
          <div className="flex items-center justify-between gap-4 mb-4">
            <img
              className="w-[80px] h-[80px] rounded-full"
              src="https://webadminapi.softclub.tj/Images/ee863cd8-0720-482a-91e0-3b32418409b9.png"
              alt="Манонзода Алиҷон"
            />
            <div>
              <h2 className="xs2:text-[16px] md:text-xl font-bold  text-gray-900">
                Манонзода Алиҷон
              </h2>
            </div>
          </div>
          <div>
            <h1 className="text-trueGray700 text-start   text-[14px] font-[500] mb-[5px]">
              <p>
                Дорои 2 сола таҷрибаи Software Engineering. Ҳамчун таҳиягари
                .NET дар RIO кор мекунад. Ментори курси C# дар академияи
                Softclub.
              </p>
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>
            </h1>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <img
              src="https://webadminapi.softclub.tj/Images/1d267aab-6238-4b80-ba93-a345c811acee.svg"
              alt="name0"
              className="h-10 container"
            />
            <img
              src="https://webadminapi.softclub.tj/Images/dc31c0b2-1567-4924-bf54-588dac5533a3.svg"
              alt="name1"
              className="h-10 container"
            />
            <img
              src="https://webadminapi.softclub.tj/Images/a26f96c9-3a29-4b12-b50d-dad5371f4336.svg"
              alt="name2"
              className="h-10 container"
            />
            <img
              src="https://webadminapi.softclub.tj/Images/89090219-f4a6-4740-9925-17351fb16996.png"
              alt="name3"
              className="h-10 container"
            />
          </div>
        </div>

        <div className="bg-white max-w-[310px]  overflow-hidden flex flex-col justify-between items-start font-main h-[430px] sm:h-[391px] sm:max-h-[391px] p-6 rounded-2xl">
          <div className="flex items-center justify-between gap-4 mb-4">
            <img
              className="w-[80px] h-[80px] rounded-full"
              src="https://webadminapi.softclub.tj/Images/52bc5e18-61e0-4dc1-9461-6054f24c86fa.png"
              alt="Наҷибуллоҳ Шамсудинов"
            />
            <div>
              <h2 className="xs2:text-[16px] md:text-xl font-bold  text-gray-900">
                Наҷибуллоҳ Шамсудинов
              </h2>
            </div>
          </div>
          <div>
            <h1 className="text-trueGray700 text-start  text-[14px] font-[500] mb-[5px]">
              <p>
                Ду сол таҷрибаи таълимии барномасозӣ. Таҳиягари front-end дар
                RIO ва Softclub. Таҷрибаи 2 сол дар лоиҳаҳои воқеӣ ва муаллими
                курси React дар Academy Softclub.
              </p>
              <p>
                <br />
              </p>
            </h1>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <img
              src="https://webadminapi.softclub.tj/Images/4d5ef30d-948b-4a43-ba09-791fa78f7feb.svg"
              alt="name0"
              className="h-10 container"
            />
            <img
              src="https://webadminapi.softclub.tj/Images/b9ff7038-879b-4550-8ec5-5ab1815bf5b1.svg"
              alt="name1"
              className="h-10 container"
            />
            <img
              src="https://webadminapi.softclub.tj/Images/a2ab4fae-62be-4548-82a6-a430fded2dc4.svg"
              alt="name2"
              className="h-10 container"
            />
            <img
              src="https://webadminapi.softclub.tj/Images/5d016e05-6236-4e6e-9439-1a74c69e60bb.png"
              alt="name3"
              className="h-10 container"
            />
          </div>
        </div>

        <div className="bg-white max-w-[310px]  overflow-hidden flex flex-col justify-between items-start font-main h-[430px] sm:h-[391px] sm:max-h-[391px] p-6 rounded-2xl">
          <div className="flex items-center justify-between gap-4 mb-4">
            <img
              className="w-[80px] h-[80px] rounded-full"
              src="https://webadminapi.softclub.tj/Images/4a6b0bdc-494c-41f2-89ee-55eb30b92dba.png"
              alt="Сахиев Хайриддин"
            />
            <div>
              <h2 className="xs2:text-[16px] md:text-xl font-bold text-gray-900">
                Сахиев Хайриддин
              </h2>
            </div>
          </div>
          <div>
            <h1 className="text-trueGray700 text-start text-[14px] font-[500] mb-[5px]">
              <p>Таҷрибаи таълими HTML ва CSS зиёда аз 1 сол.</p>
              <p>
                Таҷрибаи таълими забонҳои барномасозии C++ ва C# на камтар аз 6
                моҳ.
              </p>
              <p>Python - барномасоз дар ширкати Livo</p>
            </h1>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <img
              src="https://webadminapi.softclub.tj/Images/2f1a9653-7a2b-47d3-b941-d7852d79ffa9.svg"
              alt="name0"
              className="h-10 container"
            />
            <img
              src="https://webadminapi.softclub.tj/Images/79c77512-1135-49e4-bd34-9ca894464aaf.svg"
              alt="name1"
              className="h-10 container"
            />
            <img
              src="https://webadminapi.softclub.tj/Images/de65ac3f-e1ad-4d98-8ba8-80284deb9dfb.svg"
              alt="name2"
              className="h-10 container"
            />
            <img
              src="https://webadminapi.softclub.tj/Images/249ad020-5942-44da-9bbd-051e670458d4.png"
              alt="name3"
              className="h-10 container"
            />
          </div>
        </div>
      </div>

      {/*  sing up in cours  */}
      <br />
      <br />
      <Box
        className="flex flex-col lg:flex-row px-5 items-start gap-6"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          px: 5,
          gap: 6,
        }}
        id="21"
      >
        <Box
          sx={{
            mx: "auto",
            p: 3,
            width: { xs: "100%", lg: 580 },
            backgroundColor: "white",
            borderRadius: 2,
            typography: "fontFamily",
            bgcolor: "background.default",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: "20px", lineHeight: "28px", fontWeight: "700" }}
          >
            Машварати ройгон
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              color: "rgb(212, 212, 212)",
              lineHeight: "23px",
              mb: "5px",
            }}
          >
            Рақамҳои худро гузоред. Бо шумо тамос гирифта, кӯшиш мекунем ба
            саволҳоятон ҷавоб гардонем.
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 1,
              }}
            >
              <TextField
                fullWidth
                required
                name="firstName"
                placeholder="Ном"
                variant="outlined"
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: "10px",
                }}
              />
              <TextField
                fullWidth
                required
                name="lastName"
                placeholder="Насаб"
                variant="outlined"
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
              />
            </Box>
            <TextField
              fullWidth
              required
              name="phoneNumber"
              placeholder="Телефон"
              type="tel"
              variant="outlined"
              sx={{
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
            />
            <TextField
              fullWidth
              required
              name="email"
              placeholder="Почтаи электронӣ"
              type="email"
              variant="outlined"
              sx={{
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
            />
            <Typography variant="caption" sx={{ mt: "5px" }}>
              <span>Бо пахш кардани тугма шумо ба шартҳо розӣ мешавед </span>
            </Typography>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                mt: 1,
                maxWidth: { sm: 368 },
                alignSelf: "center",
              }}
            >
              Равон кардан
            </Button>
          </Box>
        </Box>
        <Box className="container mx-auto">
          <Box>
            <img
              src="https://www.softclub.tj/static/media/image%2089%20(1).5936b060506380bbf8b9073644d97291.svg"
              alt="Slide 1"
              className="rounded-2xl w-full h-[404px] lg:object-cover lg:h-[404px]"
              style={{
                borderRadius: "16px",
                width: "100%",
                objectFit: "cover",
                height: "auto",
              }}
            />
          </Box>
        </Box>
      </Box>
      <br />
      <br />
      <br />
      {/* novosti  */}
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
      </div>
      <br />
      <br />
      <br />
      {/* map */}
      <div className="container mx-auto flex gap-[20px] flex-col xl:flex-row pb-6 xl:items-start">
        <div className="overflow-hidden max-w-[728px]  shadow-xl rounded-2xl w-[100%] container mx-auto h-[400px] lg:h-[444px]">
          <YMaps>
            <Map
              defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
              width="100%"
              height="100%"
            >
              <Placemark geometry={[55.751574, 37.573856]} />
            </Map>
          </YMaps>
        </div>
        <div className="w-full">
          <div>
            <p className="text-[28px] font-[700]  text-[#262626]">Контакты</p>
          </div>
          <div>
            {/* Phone */}
            <div className="mt-[20px] w-full container gap-[10px] flex items-start p-[18px] sm:p-[24px] rounded-[20px] bg-white  sm:h-[120px]">
              <img
                className="w-[60px] h-[60px] rounded-full"
                src="https://www.softclub.tj/static/media/630cb940c5c4fa57353cf11f_feature-icon-06.svg.e56f99f28e151fa6cf61.png"
                alt="rec"
              />
              <div>
                <p className="text-[20px] font-[600]  text-[#262626]">
                  Телефон
                </p>
                <p className="text-[16px] font-[500]  text-[#525252]">
                  +992 558 700 900
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="mt-[20px] gap-[10px] flex items-start p-[18px] sm:p-[24px] rounded-[20px] bg-white  sm:h-[120px]">
              <img
                className="w-[60px] h-[60px] rounded-full"
                src="https://www.softclub.tj/static/media/bb.07ba8203d4ccceae6fd0.png"
                alt="rec1"
              />
              <div>
                <p className="text-[20px] font-[600]  text-[#262626]">Адрес</p>
                <p className="sm:w-[260px] xs2:text-[16px] text-[13px]  font-[500] text-[#525252]">
                  кӯч. Раҳимӣ, 12. Нишона: профсоюз
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="mt-[20px] gap-[10px] flex items-start p-[18px] sm:p-[24px] rounded-[20px] bg-white  sm:h-[120px]">
              <img
                className="w-[60px] h-[60px] rounded-full"
                src="https://www.softclub.tj/static/media/cc.4fb87fbfadb084966e02.png"
                alt="pol"
              />
              <div>
                <p className="text-[20px]  font-[600] text-[#262626]">E-mail</p>
                <p className="xs2:text-[16px]  text-[13px] break-words font-[500] text-[#525252]">
                  Info@softclub.tj
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}
