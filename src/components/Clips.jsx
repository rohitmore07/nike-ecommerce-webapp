import React from "react";

const Clips = ({ imgsrc, clip }) => {
  return (
    <>
      <div className=" relative h-28 w-32  lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14  rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 ">
        <img
          className="h-full w-full rounded-xl absolute top-0 right-0 left-0 object-cover z-10 transition-opacity duration-500 "
          src={imgsrc}
          alt=""
        />
        <video
          className="h-full w-full object-cover absolute top-0 right-0
          left-0
           group-hover:z-20"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
        >
          <source type="video/mp4" src={clip} />
        </video>
      </div>
    </>
  );
};

export default Clips;
