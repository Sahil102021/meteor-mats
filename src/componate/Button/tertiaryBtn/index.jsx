import React from "react";
import { NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const index = (props) => {
  return (
    <div>
      <NavLink to="/">
        <button className="w-[256px] h-[64] flex items-center justify-center text-white capitalize bg-primary">
          {props.name} 
          <GoArrowRight className="text-white" />
        </button>
      </NavLink>
    </div>
  );
};

export default index;
