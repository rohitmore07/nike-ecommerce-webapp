import React from "react";

const Highlight = ({ endpoint: { heading, title, text, btn, url, img } }) => {
  return (
    <>
      <div className=" w-full h-auto  p-24 flex sm:flex-col-reverse justify-around gap-8 ">
        <div className="w-[45vw] flex  items-center ">
          <img className="rotate-[15deg]" src={img} alt="" />
        </div>
        <div className="w-[40vw]">
          <h1 className="text-6xl md:text-3xl lg:text-5xl font-bold text-violet-600">
            {heading}
          </h1>
          <h1 className="mt-4 text-3xl lg:text-2xl sm:text-xl  font-semibold">
            {title}
          </h1>
          <p className="text-md mt-6 text-gray-800">{text}</p>
          <div
            className="mt-8 ml-16 sm:ml-0 md:ml-0
          "
          >
            <a
              className="mt-4 border border-violet-500 px-3 py-2 hover:bg-violet-500 bg-white hover:text-white  text-violet-500 rounded-lg font-medium text-base"
              href={url}
              target="_blank"
            >
              {btn}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlight;
