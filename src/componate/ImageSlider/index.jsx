import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { imgList } from "../../const";
import { GoArrowRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full py-20">
      <div className="container mx-auto px-2.5">
        <div className="w-full flex justify-center items-center">
          <div className="max-w-[1200px]">
          <h2 className="font-size-3xl text-primary font-semibold text-center">
            Trending Designs
          </h2>
          <p
            className="font-size-xl text-primary text-center leading-10"
          >
            Discover the latest creations inspiring desk spaces everywhere! From
            bold patterns to serene landscapes, these trending designs showcase
            the power of AI and creativity combined.
          </p>
          </div>
        </div>
        <div className="w-full h-[400px] flex flex-col items-center justify-center">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            // breakpoints='{
            //     "320": { "slidesPerView": 1 },
            //     "575": { "slidesPerView": 2 },
            //     "768": { "slidesPerView": 2 },
            //     "992": { "slidesPerView": 3 },
            //     "1024": { "slidesPerView": 3 },
            //     "1200": { "slidesPerView": 3 }
            //   }'
            className="w-full h-full flex items-center justify-center"
          >
            {imgList.map((el, index) => (
              <SwiperSlide
                key={index}
                className="w-full h-full flex justify-center items-center relative z-[2] pt-10"
              >
                {console.log(index) ||
                  (index === activeIndex && (
                    <div className="absolute top-[30%] left-[10%] blur-2xl w-[calce(100% - 100px)] h-[200px] z-[0]">
                      <img
                        src={el.img}
                        className="w-full h-full object-cover"
                        alt="blurred duplicate"
                      />
                    </div>
                  ))}
                <div
                  className={`w-full h-[250px] rounded-[40px] border-4 border-black overflow-hidden transition-transform duration-500 z-[2] ${
                    index === activeIndex
                      ? "scale-115 border-2"
                      : "scale-75 opacity-100"
                  }`}
                >
                  <img
                    src={el.img}
                    className="w-full h-full object-cover"
                    alt="slide image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full flex items-center justify-center">
          <NavLink>
            <button className="w-[256px] h-[64px] flex items-center justify-center text-white font-semibold capitalize bg-primary rounded-2xl font-size-xl font-primary hover:scale-[1.1] duration-300 cursor-pointer  ">
              Explore Collection
              <GoArrowRight className="text-white" />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
