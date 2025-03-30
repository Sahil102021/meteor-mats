import React from "react";
import Header from "../../componate/Header";
import { hero, aiIcon, dot, maskGroup } from "../../assets/images";
import SecondaryBtnI from "../../componate/Button/SecondaryBtnI";
import AiBtn from "../../componate/Button/AiBtn";
import ImageSlider from "../../componate/ImageSlider";

const index = () => {
  return (
    <div>
      {/* hero */}
      <section>
        <div className="w-full bg-primary pt-[70px] lg:pt-[136px] xl:pt-[166px] overflow-hidden ">
          <div className="max-w-[1920px] mx-auto relative">
            <div className="container mx-auto px-2.5">
              <div className=" w-full lg:w-4/6 flex flex-col py-[40px] xl:py-[68px]">
                <h1 className=" max-w-full xl:max-w-4xl font font-size-4xl uppercase font-tertiary tracking-[0px] leading-[50px] md:leading-[90px] lg:leading-[110px] xl:leading-[144px] bg-gradient-to-b from-white from-50% to-white/30 bg-clip-text text-5xl text-transparent z-[10]">
                  alive your desk with unique mats
                </h1>
                <div className="relative w-full xl:max-w-2xl py-2 ">
                  <p className="font-size-2xl font-primary text-white leading-6 md:leading-8 lg:leading-10 z-[10]">
                    Premium desk mats starting at just $25 Available in multiple
                    sizes..! Choose from stunning prints or create your own with
                    AI{" "}
                  </p>
                  <div className="rounded-lg shadow w-32 h-8 md:w-40 md:h-10 bg-gradient-to-r from-white/0 to-white/50 absolute top-[5%] right-0 md:top-[10%] lg:right-10"></div>
                </div>
                <div className="flex flex-row flex-wrap gap-4 md:gap-8 lg:gap-12 items-center py-5 lg:py-[40px] xl:pt-[76px] z-[20]">
                  <SecondaryBtnI name="Explore Collection" link="/" />
                  <AiBtn name="Generate with AI" link="/" icon={aiIcon} />
                </div>
              </div>
            </div>
            <div className="heroImg hidden lg:block  lg:w-[800px] xl:w-[1000px] 2xl:w-[1400px] 2xl:h-[1080px] absolute lg:top-[20%] xl:top-[10%] 2xl:-top-30 right-0 z-10">
              <img src={hero} width="100%" height="100%" alt="" />
            </div>
            <div className="absolute -top-[40%] left-[37%] z-[3]">
              <div className="relative">
                <div className="dotImag w-[1200px]">
                  <img src={maskGroup} width="100%" alt="dot" className="" />
                </div>
              </div>
            </div>
            <div className=" w-[1530px] h-[1058px] rotate-full rotate-[-14deg] absolute bottom-[50%] left-[50%] bg-[#409FFF] blur-[300px] z-[2]"></div>
            <div className=" w-[2870px] h-[1984px] rotate-full rotate-[-14deg] absolute bottom-[20%] left-[20%] bg-[#182750] blur-[600px] z-[1]"></div>
          </div>
        </div>
      </section>

      {/* slider  */}
      <section>
        <div className="w-full">
          <ImageSlider />
        </div>
      </section>
    </div>
  );
};

export default index;
