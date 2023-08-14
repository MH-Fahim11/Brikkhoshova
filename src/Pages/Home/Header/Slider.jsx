// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
//  import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: "url(/slider/s1.jpg)" }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className=" max-w-3xl">
                <h1 className="mb-1 lg:text-5xl md:text-4xl text-2xl font-semibold font-raleway">
                  Welcome To Brikkhoshova
                </h1>

                <div className=" bg-white w-24 h-[1px] md:h-[2px] rounded-lg justify-items-center mx-auto mb-4"></div>

                <p className="mb-5 font-medium text-sm">
                  Most Beautiful Garden in this city.{" "}
                </p>

                <button className=" button "><span>LEARN MORE</span></button>
              </div>
            </div>
          </div>{" "}
        </SwiperSlide>

        {/* 2 */}
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: "url(/slider/s2.jpg)" }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className=" max-w-3xl">
                <h1 className="mb-1 lg:text-5xl md:text-4xl text-2xl font-semibold font-raleway">
                  Make Gardening Fun
                </h1>

                <div className=" bg-emerald-400 w-24 h-[1px] md:h-[2px] rounded-lg justify-items-center mx-auto mb-4"></div>

                <p className="mb-5 font-medium text-sm">
                 We Provide best help and support.{" "}
                </p>

                <button className=" button "><span>LEARN MORE</span></button>
              </div>
            </div>
          </div>{" "}
        </SwiperSlide>

        {/* 3 */}
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: "url(/slider/s3.jpg)" }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className=" max-w-3xl">
                <h1 className="mb-1 lg:text-5xl md:text-4xl text-2xl font-semibold font-raleway">
                  Make Gardening Fun
                </h1>

                <div className=" bg-emerald-400 w-24 h-[1px] md:h-[2px] rounded-lg justify-items-center mx-auto mb-4"></div>

                <p className="mb-5 font-medium text-sm">
                 We Provide best help and support.{" "}
                </p>

                <button className=" button "><span>LEARN MORE</span></button>
              </div>
            </div>
          </div>{" "}
        </SwiperSlide>
        {/* <SwiperSlide >Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default Slider;
