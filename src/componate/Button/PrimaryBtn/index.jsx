import React from "react";
import { NavLink } from "react-router-dom";

const border = {
  boxSizing: "border-box",
  background:
    "linear-gradient(95.69deg, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0.3)100%)",
  boxShadow:
    "inset -2px 0px 4px rgba(255, 255, 255, 0.3), inset 0px -2px 8px rgba(255, 255, 255, 0.3)",
  backdropFilter: "blur(35px)",
};


const Index = (props) => {
  return (
    <div className="flex items-center justify-center z-[10]">
      <NavLink to={props.link_name} className="block">
        {/* Gradient Border Container */}
        <div style={border} className="relative rounded-xl lg:rounded-[20px] ">
          {/* Inner Content with Blur & Shadow */}
          <div className="min-w-[70px] min-h-[48px] h-[48px] lg:w-[144px] lg:h-[64px] rounded-xl lg:rounded-[19px] p-1 flex items-center justify-center bg-gradient-to-r from-white/10 to-white/30 backdrop-blur-xl shadow-[inset_0_0px_4px_#FFFFFF4D]">
            {/* Button Content */}
            <button className=" h-[38px] lg:w-[128px] lg:h-[48px] px-6 py-4 text-lg capitalize bg-white text-[#0A0ABF] font-semibold rounded-lg lg:rounded-xl flex items-center justify-center gap-2 hover:text-white  hover:bg-indigo-500 cursor-pointer ">
              {props.name}
            </button>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Index;
