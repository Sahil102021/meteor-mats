import React from "react";
import { NavLink } from "react-router-dom";

const Index = (props) => {
  return (
    <NavLink to={props.link || "/"}>
      <div className="w-44 h-[50px] md:w-50 md:h-[60px] lg:w-56 lg:h-[69px]  lg:hover:h-[64px] bg-[#0A0ACC] rounded-xl shadow-xl transition-all z-[10]">
        <button className="w-44 h-12 md:w-50 md:h-14 lg:w-56 lg:h-16 hover:mt-[5px] flex justify-center items-center font-primary font-size-xl font-semibold text-blue-900 bg-gradient-to-b from-white to-white/50 rounded-xl transition-all cursor-pointer">
          {props.name}
        </button>
      </div>
    </NavLink>
  );
};

export default Index;
