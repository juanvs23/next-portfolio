"use client";
import React, { useRef, useState } from "react";
import { JobItem } from "@/types";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.scss";

// import required modules
import { Grid, Navigation } from "swiper/modules";
import JobComponent from "./jobItem";
import Atropos from "atropos/react";

const JobContainer = ({ jobs }: { jobs: JobItem[] }) => {
  const nextButton = useRef<HTMLDivElement>(null);
  const prevButton = useRef<HTMLDivElement>(null);
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <div className="carousel-jobs">
      <Swiper
        slidesPerView={1}
        grid={{
          rows: 2,
          fill: "row",
        }}
        breakpoints={{
          0: {
            grid: {
              rows: 1,
              fill: "column",
            },
          },
          1024: {
            grid: {
              rows: 2,
              fill: "row",
            },
          },
        }}
        navigation={{
          nextEl,
          prevEl,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Navigation]}
        className="jobs-container"
      >
        {jobs.map((job) => (
          <SwiperSlide key={job.id}>
            <Atropos
              activeOffset={10}
              shadowScale={0}
              shadowOffset={10}
              highlight={false}
              shadow={true}
              rotate={false}
            >
              <JobComponent job={job} />
            </Atropos>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="section-button-prev" ref={(node) => setPrevEl(node)} />
      <div className="section-button-next" ref={(node) => setNextEl(node)} />
    </div>
  );
};

export default JobContainer;
