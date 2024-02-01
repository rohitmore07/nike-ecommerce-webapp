import React from "react";

const SocialLinks = ({ icon }) => {
  return (
    <>
      <img
        className="w-8 h-8  cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110"
        src={icon}
        alt=""
      />
    </>
  );
};

export default SocialLinks;
