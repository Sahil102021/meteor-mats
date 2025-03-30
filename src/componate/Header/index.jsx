import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Primary_btn from "../Button/PrimaryBtn";
import Iocn_btn from "../Button/IconBtn";
import { svgIcon, manuList, iconList } from "../../const";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import IocnBtnSecond from "../Button/IocnBtnSecond";
import { X } from "lucide-react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerState, setHeaderState] = useState("header");

  const listenScrollEvent = () => {
    if (window.scrollY < 20) {
      setHeaderState("header");
    } else {
      setHeaderState("bg-primary");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div>
      <header>
        <div className={` ${headerState} w-full fixed top-0 z-[50]`}>
          <div className="container mx-auto px-2.5">
            <div className="py-3 md:py-8 lg:py-10 2xl:py-16">
              <div className="w-full flex justify-between items-center">
                <p className="font-secondary text-white z-[50]">Meteor Mats</p>

                {/* Desktop Menu */}
                <div className="hidden md:block">
                  <ul className="w-[350px] lg:w-[400px] xl:w-[464px] flex justify-between">
                    {manuList.map((el) => (
                      <NavLink key={el.link} to={el.link}>
                        <li className="capitalize font-primary text-lg font-normal hover:text-white text-[#FFFFFFA6]">
                          {el.title}
                        </li>
                      </NavLink>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="hidden md:flex items-center gap-3">
                  <Primary_btn name="Login in" link_name="/" />
                  <Iocn_btn icon={svgIcon.person} link_name="/" />
                </div>

                {/* Mobile Menu */}
                <div className="block md:hidden">
                  <button onClick={() => setIsOpen(true)}>
                    <IocnBtnSecond icon={iconList.manuList} />
                  </button>

                  {/* Overlay */}
                  {isOpen && (
                    <div
                      className="fixed inset-0 bg-black/50 z-40"
                      onClick={() => setIsOpen(false)}
                    ></div>
                  )}

                  {/* Off-canvas Menu */}
                  <div
                    className={`fixed top-0 right-0 h-full w-3/4 sm:w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 rounded-l-2xl
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                  >
                    <div className="p-4 border-b flex justify-between items-center">
                      <h2 className="text-xs font-semibold">Meteor Mats</h2>
                      <button onClick={() => setIsOpen(false)} className="text-gray-600">
                        <X size={24} />
                      </button>
                    </div>
                    <ul className="p-4 space-y-3">
                      {manuList.map((el) => (
                        <NavLink key={el.link} to={el.link} onClick={() => setIsOpen(false)}>
                          <li className="block p-2 hover:bg-gray-100 rounded">{el.title}</li>
                        </NavLink>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Index;
