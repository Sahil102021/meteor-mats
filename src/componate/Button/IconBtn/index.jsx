import React from "react";
import { NavLink } from "react-router-dom";

const border = {
  boxSizing: "border-box",
  background:
    "linear-gradient(95.69deg, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0.3) 100%)",
  boxShadow:
    "inset -2px 0px 4px rgba(255, 255, 255, 0.3), inset 0px -2px 8px rgba(255, 255, 255, 0.3)",
  backdropFilter: "blur(35px)",
};

const Index = (props) => {
  return (
    <>
      <NavLink to={props.link_name || ""} className="cursor-pointer">
        <div style={border} className="relative rounded-xl  lg:rounded-[20px] z-20">
          <div className=" min-w-[32px] w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] rounded-xl lg:rounded-[19px] p-1 flex items-center justify-center bg-gradient-to-r from-white/10 to-white/30 backdrop-blur-xl shadow-[inset_0_0px_4px_#FFFFFF4D] cursor-pointer">
            <button className="w-[38px] h-[38px]  lg:w-[48px] lg:h-[48px]  bg-white rounded-lg lg:rounded-xl flex items-center justify-center hover:bg-indigo-700 icon-color-primary cursor-pointer ">
              {props.icon}
            </button>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Index;


