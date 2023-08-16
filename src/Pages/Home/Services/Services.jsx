import { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
//  import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";

const Services = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  let n = 3;

  // Update screen size when the window is resized
  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    // Add a listener for window resize events
    window.addEventListener("resize", updateScreenSize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);
  console.log(screenWidth);

  if (screenWidth < 450) {
    n = 2;
  }

  return (
    <div className=" font-nunito text-center pt-5 px-10">
      <h1 className=" py-2 font-semibold text-2xl">Our Services</h1>
      <h1 className=" text-[#209E2E] font-extrabold text-4xl ">
        What We Offer for You
      </h1>
      <p className=" text-[#808080] pt-2">
        Our team is dedicated to creating beautiful landscapes and meticulously
        caring for them with unmatched services.
      </p>

      <Swiper
        slidesPerView={n}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        className="mySwiper mt-10"
      >
        <SwiperSlide>
          <div className="card w-96 bg-base-100 shadow-xl mb-4 cursor-pointer">
            <figure>
              <img
                src="/service-hme-1-5.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <h2 className=" font-bold ">
              Stone & Hardscaping
              </h2>
              <p className=" text-[#808080]">Prevents our being able to do what like enjoy every…</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide> */}
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>j
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Services;
