"use client";
import { ProjectItem } from "@/types";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiperSlide, useSwiper } from "swiper/react";
import { Icons } from "@/app/components";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import ProyectItem from "./projectItem/proyectItem";
import ProyectItemComponent from "./projectItem/proyectItem";

function ProjectContainer({ projects }: { projects: ProjectItem[] }) {
  const nextButton = useRef<HTMLDivElement>(null);
  const prevButton = useRef<HTMLDivElement>(null);
  const swiperSlide = useSwiperSlide();
  const useswiper = useSwiper();
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

 const projectList = projects.sort((a, b) => b.id - a.id);
  const navigationOptions = {
    nextEl,
    prevEl,
  };
  console.log(useswiper);
  return (
    <div className="projectSlider relative">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 1,
          },
          1023: {
            slidesPerView: 1,
          },
          1279: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        navigation={navigationOptions}
        //pagination={true}

        modules={[EffectCoverflow, Navigation]}
        className="projects-container"
      >
        {projectList.map((project) => (
          <SwiperSlide key={project.id}>
            <ProyectItemComponent data={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="project-button-prev absolute top-1/2 cursor-pointer z-50 rotate-180 hover:opacity-70"
        ref={(node) => {
          setPrevEl(node);
        }}
      >
        <Icons.IconPlay color="#007aff" size={"40"} />
      </div>
      <div
        className="project-button-next absolute top-1/2 cursor-pointer z-50 right-0 hover:opacity-70"
        ref={(node) => {
          setNextEl(node);
        }}
      >
        <Icons.IconPlay color="#007aff" size={"40"} />
      </div>
    </div>
  );
}

export default ProjectContainer;
