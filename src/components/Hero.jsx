import React from "react";
import Clips from "./Clips";
import SocialLinks from "./SocialLinks";

const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  return (
    <div className="relative pt-8  w-auto pb-4 ">
      <div
        className="bg-violet-500 clip_path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto
      absolute top-0 right-0 left-0 z-10 opacity-100"></div>
      <div className="relative opacity-100 z-20 flex flex-col   items-center pt-24">
        <div className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold  text-slate-100  ">
          <h1>{title}</h1>
          <h1 className="ml-6 mt-1">{subtitle}</h1>
        </div>
        <button className="mt-4 border border-white px-3 py-2 hover:bg-white hover:text-violet-500  text-white rounded-lg font-medium text-base">
          {btntext}
        </button>

        <div className="flex flex-col  gap-5 md:gap-3 absolute top-[36vh] lg:top-[30vh] left-[7%] sm:top-[28vh] md:left-[4%] lg:left-[3%] xl:left-[4%] w-auto h-auto">
          {videos.map((val, i) => (
            <Clips key={i} imgsrc={val.imgsrc} clip={val.clip} />
          ))}
        </div>
        <div className="">
          <img
            className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] rotate-[-10deg] transition-all ease-in-out hover:rotate-0 cursor-pointer mt-6"
            src={img}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 absolute right-[10vh] top-[42vh] lg:right-4 lg:top-[34vh] sm:right-2 sm:top-[28vh] md:right-8 md:top-[28vh]">
          {sociallinks.map((val, i) => (
            <SocialLinks key={i} icon={val.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
