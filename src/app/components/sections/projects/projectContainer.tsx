"use client";
import { ProjectItem } from "@/types";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const projectList = projects.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  const navigationOptions = {
    nextEl,
    prevEl,
  };
  return (
    <div className="projectSlider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: 10,
          depth: 10,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop={true}
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
      <div className="section-button-prev" ref={(node) => setPrevEl(node)} />
      <div className="section-button-next" ref={(node) => setNextEl(node)} />
    </div>
  );
}

export default ProjectContainer;
