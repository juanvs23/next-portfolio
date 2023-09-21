"use client";
import { useRef, useState, useEffect } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Aos from "aos";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/virtual";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import "./index.scss";
import { ItemView } from "@/types";
import ViewAbout from "./viewAbout";
import SkillsAbout from "./skillsAbout";

export default function AboutComponent() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  SwiperCore.use([Navigation]);
  const views: ItemView[] = [
    {
      title: "About Me",
      class: "about-me-pag-button",
      icon: "/public/img/icons8-left-94.png",
    },
    {
      title: "Skills",
      class: "skills-pag-button",
      icon: "/public/img/icons8-right-94.png",
    },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<button class="views-about-buttons ${className} ${views[index].class}">
       ${views[index].title}
       </button>`;
    },
  };
  const navigationOptions = {
    nextEl,
    prevEl,
  };
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        id="swiper-about"
        className="w-full min-h-screen z-10 relative"
        data-aos="fade-up"
      >
        <Swiper
          slidesPerView={1}
          pagination={pagination}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          navigation={navigationOptions}
          allowTouchMove={false}
          speed={1500}
        >
          <SwiperSlide className="views-about about-item">
            <ViewAbout />
          </SwiperSlide>
          <SwiperSlide className="views-about skills-item">
            <SkillsAbout />
          </SwiperSlide>
        </Swiper>
        <div className="section-button-prev" ref={(node) => setPrevEl(node)} />
        <div className="section-button-next" ref={(node) => setNextEl(node)} />
      </div>
    </>
  );
}
