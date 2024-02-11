"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/virtual";

import "./styles.scss";

// import required modules
import { EffectCards, Virtual } from "swiper/modules";
import CardItems from "./cardItems";
import { Icons } from "@/app/components";

function CardWrapper() {
  const slides = [
    {
      title: "JavasScript",
      icon: <Icons.JavaScriptIcon size={`150`} color="white" />,
      points: ["ES6", "ES7", "ASYNC AWAIT", "API REST", "MODULES"],
      color: "#F7DF1E",
    },
    {
      title: "React",
      icon: <Icons.ReactIcon size={`150`} color="white" />,
      points: ["Hooks", "Context", "Redux", "Router", "Redux Toolkit"],
      color: "#00D8FF",
    },
    {
      title: "WordPress",
      icon: <Icons.IconWordpress size="150" color="white" />,
      points: [
        "Themes",
        "Plugins",
        "Custom post types",
        "Custom fields",
        "Hooks",
        "API",
      ],
      color: "#28799E",
    },
    {
      title: "HTML5",
      icon: <Icons.HTML5Icon size={"150"} color="white" />,
      points: [
        "Semantic tags",
        "Front-end validations",
        "Responsive",
        "Forms",
        "Tables",
        "Lists",
      ],
      color: "#ED6737",
    },
    {
      title: "CSS3",
      icon: <Icons.CSS3Icon size={"150"} color="white" />,
      points: [
        "Flexbox",
        "Grid",
        "Animations",
        "Transitions",
        "Responsive",
        "Media queries",
      ],
      color: "#264DE4",
    },
    {
      title: "SASS",
      icon: <Icons.SassIcon size={"150"} color="white" />,
      points: [
        "Variables",
        "Mixins",
        "Functions",
        "Responsive",
        "Media queries",
      ],
      color: "#CD6799",
    },
    {
      title: "Docker",
      icon: <Icons.DockerIcon size={"150"} color="white" />,
      points: ["Containers", "Images", "Volumes", "Docker Compose"],
      color: "#00D8FF",
    },
    {
      title: "Linux",
      icon: <Icons.LinuxIcon size={"150"} color="white" />,
      points: ["Packages", "Services", "Users", "Groups"],
      color: "#28799E",
    },
    {
      title: "Git",
      icon: <Icons.IconGithub size={"150"} color="white" />,
      points: ["SSH", "HTTPS", "Github", "gitflow"],
      color: "#F15536",
    },
    {
      title: "PHP",
      icon: <Icons.PhpIcon size={"150"} color="white" />,
      points: ["Classes", "Composers", "Traits", "OOP"],
      color: "#4D508E",
    },
    {
      title: "Node.js",
      icon: <Icons.NodeIcon size={"150"} color="white" />,
      points: ["ES6", "ES7+", "Modules", "NPM", "Rest API"],
      color: "#428B40",
    },
    {
      title: "Typescript",
      icon: <Icons.TypeScriptIcon size={"150"} color="white" />,
      points: ["Declare", "Interfaces", "Classes", "Enums", "Generics"],
      color: "#087ECE",
    },
    {
      title: "Jquery",
      icon: <Icons.JQueryIcon size={"150"} color="white" />,
      points: ["Ajax", "Local Storage", "Session Storage"],
      color: "#2D53E5",
    },
    {
      title: "Figma",
      icon: <Icons.FigmaIcon size={"150"} color="white" />,
      points: ["Design systems", "Design tokens", "Design systems"],
      color: "#F7DF1E",
    },
    {
      title: "Next.js",
      icon: <Icons.NextjsSvg size={"150px"} color="white" />,
      points: ["SSR", "SSG", "ISR", "Static generation"],
      color: "#000",
    },
    {
      title: "Express",
      icon: <Icons.ExpressSvg size={"150px"} color="white" />,
      points: ["MVC", "REST", "API", "Middleware"],
      color: "#363636",
    },
  ];
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Virtual]}
        id="cards-items"
      >
        {
          /**<SwiperSlide>Slide 1</SwiperSlide> */
          slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <CardItems {...slide} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}

export default CardWrapper;
