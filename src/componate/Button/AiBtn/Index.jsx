import React from "react";
import { NavLink } from "react-router-dom";

const style_I = {
  boxSizing: "border-box",
  border: "2px solid rgba(255, 255, 255, 0.4)",
  background: "linear-gradient(95.69deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 70%)",
  boxShadow: "inset -2px 0px 4px rgba(255, 255, 255, 0.3), inset 0px -2px 8px rgba(255, 255, 255, 0.3)",
  backdropFilter: "blur(10px)",
  transition: "all 0.3s ease-in-out",
};

const Index = (props) => {
  return (
    <NavLink to={props.link} style={{ textDecoration: "none" }}>
      <div
        style={style_I}
        className="min-w-24 min-h-10 w-[200px] h-[61px] md:w-[240px] md:h-[80px] lg:w-[264px] lg:h-[92px] flex items-center justify-center cursor-pointer rounded-[93px] overflow-hidden 
                   hover:scale-105 hover:shadow-lg hover:border-white focus:ring-4 focus:ring-indigo-300 transition-all z-[10]">
        <div className="relative w-full h-[264px] rotate-[30deg] bg-gradient-to-r from-[#4573de] from-10% via-[#ce7adc] via-30% to-transparent to-40% blur-sm rounded-[93px]"></div>
        <button
          className="absolute top-[10%] min-w-20 min-h-9 md:top-[12.5%] w-[185px] h-[47px]  md:w-[217.5px] md:h-[58px] lg:w-[240px] lg:h-[68px] rounded-full bg-white blur-none flex items-center justify-center gap-1 lg:gap-3 
                     transition-all hover:bg-opacity-90 focus:ring-4 focus:ring-purple-300 cursor-pointer">
          <div className="aiImg w-[20px] h-[20px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]">
            <img src={props.icon} width="100%" alt="ai icon" />
          </div>
          <p className="font-size-xl font-medium bg-gradient-to-r from-[#73E5E5] via-[#73AAFF] via-[#C673FF] via-[#FF73FF] to-[#FF7383] bg-clip-text text-transparent">
            {props.name}
          </p>
        </button>
      </div>
    </NavLink>
  );
};

export default Index;
