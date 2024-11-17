import React from "react";

const About = () => {
  return (
    <div>
      <br />
      <br />
      <div className="mb-6">
        <h1 className="text-[#0284C7] text-[28px] sm:text-[52px] font-bold">
          Академия Softclub
        </h1>
        <p className="text-[#262626]text-[16px] sm:text-[24px] font-medium">
          Здесь мечты становятся реальностью через программирование
        </p>
      </div>
      <div className="video-container">
        <iframe
          className="youtube-iframe"
          src="https://www.youtube.com/embed/T7PfcNQoV5o"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <br />
      <br />
      <h1 className="text-[20px] sm:text-[28px] font-bold text-[#262626] mb-4">
      Дастовардҳо
      </h1>

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
        Бо ширкатҳои бонуфузи Тоҷикистон ҳамкорӣ мекунем.
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
      <section className="container mx-auto mt-[60px] px-2">
      <div>
        <h1 className="text-[20px]  sm:text-[28px] font-bold text-[#262626] mb-4">
          Дастаи мо
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-[28px]">
        <div
          className="flex flex-col gap-6 bg-[#FFFFFF66] backdrop-blur-sm  bg-opacity-10 px-10 py-7 rounded-[16px]"
          style={{ background: 'linear-gradient(rgba(255, 255, 255, 0.2) 0%, rgb(255, 255, 255) 100%)' }}
        >
          <div className="flex flex-col sm:flex-row justify-self-start sm:items-center gap-[28px]">
            <img
              src="https://www.softclub.tj/static/media/NS.1f185a4595e9b60ee5fa.png"
              alt="Nurullah"
              loading="lazy"
              width="100px"
              height="100px"
              className="w-[140px] h-[140px] rounded-[50%]"
            />
            <div>
              <h3 className="font-bold text-[20px]  leading-7 text-start text-teritary mb-[6px]">
                Сулаймонов Нурулло
              </h3>
              <div className="w-[35%] border-b-[3px] border-[#94A3B8]"></div>
              <p className="text-[#737373] font-normal text-[12px] mt-[6px] leading-4">
                Муассис ва роҳбари Softclub
              </p>
            </div>
          </div>
          <div>
            <p className="font-normal text-[14px] leading-[20px] text-trueGray800">
              Тӯли чанд сол, мо кӯшиш мекунем, ки курсҳои муфиду дастрасро фароҳам созем. Омодаем
              таҷрибаву донишҳои худро ба нафароне, ки хоҳиши дар соҳаи IT рушд карданро доранд, диҳем!
            </p>
            <p className="font-semibold text-[14px] italic my-3">
              «Дар SoftClub мо як гурӯҳи муаллимони ботаҷрибаро ҷамъ овардем, ки ба шумо дар омӯхтану
              фаҳмидани ҳама масъалаҳои барномасозӣ кумак мекунанд»
            </p>
            <p className="font-normal text-[14px] mb-3 leading-[20px] text-trueGray800">
              Барои мо хеле муҳим аст, ки ҳангоми омӯзиши курс корҳои амалӣ низ бисёр бошанд. Бинобар
              ин ҳама муаллимон лоиҳаҳои худро месозанд, ки ба шумо имкон медиҳад, ки на танҳо асосҳои
              назариявиро омӯзед, балки ҳолатҳои воқеиро дар амал бинед.
            </p>
            <p className="font-semibold text-[14px] italic">
              «Донишҷӯёнамонро то дами кор ёфтанашон дастгирӣ мекунем.»
            </p>
          </div>
        </div>
        <div
          className="flex flex-col gap-6 bg-[#FFFFFF66] backdrop-blur-sm bg-opacity-10 px-10 py-7 rounded-[16px]"
          style={{ background: 'linear-gradient(rgba(255, 255, 255, 0.2) 0%, rgb(255, 255, 255) 100%)' }}
        >
          <div className="flex flex-col sm:flex-row justify-self-start sm:items-center gap-[28px]">
            <img
              src="https://www.softclub.tj/static/media/ZK.f5a0c2ee3bae105d4563.png"
              alt="Nurullah"
              loading="lazy"
              width="100px"
              height="100px"
              className="w-[140px] h-[140px] rounded-[50%]"
            />
            <div>
              <h3 className="font-bold text-[20px] leading-7 text-start text-teritary mb-[6px]">
                Кабиров Зоирчон
              </h3>
              <div className="w-[35%] border-b-[3px] border-[#94A3B8]"></div>
              <p className="text-[#737373] font-normal text-[12px] mt-[6px] leading-4">
                Ҳаммуассиси Softclub, RIO
              </p>
            </div>
          </div>
          <div>
            <p className="font-normal text-[14px] leading-[20px] text-trueGray800">
              Дар манзараи бошукӯҳи Тоҷикистон, ки анъана бо сарҳадҳои фардо мувофиқат мекунад, академияи
              мо барои шахсони кунҷков ва навоварон ҳамчун чароғак аст.
            </p>
            <p className="font-semibold text-[14px] italic my-3">
              «Мо худро ба ҳар як барномасози хоҳишманд ва ба ҳар орзуе, ки то ҳол амалӣ нагардидааст,
              мебахшем»
            </p>
            <p className="font-normal text-[14px] mb-3 leading-[20px] text-trueGray800">
              Мо ба қудрати технология боварӣ дорем ва кӯшиш мекунем, ки байни орзуҳо ва воқеият
              масофаи дур набошад. Ҷаҳонбинии мо аз чорчӯба берун аст: мо ҳаваси амалкуниро бедор мекунем,
              мушкилиҳои воқеиро ҳал карда, дарҳоро ба имкониятҳои беохир мекушоем.
            </p>
            <p className="font-semibold text-[14px] italic">
              «Якҷоя мо на танҳо ҳамқадами замону навовариҳо ҳастем, балки онро барои Тоҷикистон ва
              берун аз он муайян мекунем»
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="pt-[100px]">
          <div className="container mx-auto overflow-hidden">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="header-text font-bold mb-[12px]">
                  Муаллимони мо мутахассисони амалкунанда мебошанд
                </h3>
              </div>
              <div className="hidden md:flex gap-4">
                <button
                  type="button"
                  className="ant-btn ant-btn-default w-[48px] h-[48px] rounded-[10px]  bg-white text-red-300"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="#0284C7"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                  >
                    <path d="M19.6134 21.1733L14.4401 16L19.6134 10.8267C20.1334 10.3067 20.1334 9.46667 19.6134 8.94667C19.0934 8.42667 18.2534 8.42667 17.7334 8.94667L11.6134 15.0667C11.0934 15.5867 11.0934 16.4267 11.6134 16.9467L17.7334 23.0667C18.2534 23.5867 19.0934 23.5867 19.6134 23.0667C20.1201 22.5467 20.1334 21.6933 19.6134 21.1733Z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="ant-btn ant-btn-default w-[48px] h-[48px] rounded-[10px]  bg-white"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="#0284C7"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                  >
                    <path d="M12.3866 21.1733L17.5599 16L12.3866 10.8267C11.8666 10.3067 11.8666 9.46667 12.3866 8.94667C12.9066 8.42667 13.7466 8.42667 14.2666 8.94667L20.3866 15.0667C20.9066 15.5867 20.9066 16.4267 20.3866 16.9467L14.2666 23.0667C13.7466 23.5867 12.9066 23.5867 12.3866 23.0667C11.8799 22.5467 11.8666 21.6933 12.3866 21.1733Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="teamSwiper swiper">
              {/* Add swiper items here */}
            </div>
          </div>
        </div>
      </div>
    </section>
    <br /><br /><br />
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
       <br /><br /><br />
    </div>
  );
};

export default About;
