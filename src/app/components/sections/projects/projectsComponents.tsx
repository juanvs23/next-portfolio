"use client";
import { projects } from "@/app/constants";
import "./index.scss";
import ProjectContainer from "./projectContainer";
import { useEffect } from "react";
import Aos from "aos";
export default function ProjectsComponent() {
  const { title, projectsItems } = projects;
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div
        className="container p-3 projects-wrapper w-full z-10 flex md:justify-end"
        data-aos="fade-down"
        data-aos-anchor-placement="top-center"
      >
        <div className="container">
          <div className="w-full md:flex gap-3">
            <div className="flex justify-center w-full md:w-4/12 lg:w-6/12 xl:w-2/6">
              <h2 className="glitch text-titleMobile lg:text-titledesktop xl:text-xtratitle 2xl:text-maxtitle font-bold">
                <span aria-hidden="true">{title}</span>
                {title}
                <span aria-hidden="true">{title}</span>
              </h2>
            </div>
            <div className="container flex justify-center overflow-hidden md:w-8/12 lg:w-6/12 xl:w-4/6">
              <div className="w-full  container">
                <ProjectContainer projects={projectsItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
