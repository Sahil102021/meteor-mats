import React from "react";
import { NavLink } from "react-router-dom";

const Index = (props) => {
  return (
    <div className="flex items-center justify-center z-[10]">
        {/* Gradient Border Container */}
        <div className="relative rounded-2xl lg:rounded-[20px] border border-[#ffffff54]">
          {/* Inner Content with Blur & Shadow */}
          <div className=" min-w-[32px] w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] rounded-2xl lg:rounded-[19px] p-1 flex items-center justify-center bg-gradient-to-r from-white/10 to-white/30 backdrop-blur-xl shadow-[inset_0_0px_4px_#FFFFFF4D]">
            {/* Button Content */}
            <button className=" w-[38px] h-[38px] lg:w-[48px] lg:h-[48px]  bg-white  rounded-xl flex items-center justify-center hover:bg-indigo-700 icon-color-primary cursor-pointer">
              {props.icon}
            </button>
          </div>
        </div>
    </div>
  );
};

export default Index;
