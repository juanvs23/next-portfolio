"use client";
import { useJobs } from "@/app/constants";
import "./index.scss";
import JobContainer from "./jobs/jobContainer";
import { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";
import WebJob from "../../../../../public/web-desing-job.svg";

export default function WorksComponent() {
  const { title, jobsItems } = useJobs();
  const newJob = jobsItems.toSorted(
    (a, b) => b.date.startDate.getFullYear() - a.date.startDate.getFullYear()
  );
  useEffect(() => {
    Aos.init();
  }, []);
  return (
   
      <div className="container p-3  w-full z-10 flex md:justify-end" data-aos="zoom-in">
        <div className="container">
          <div className="w-full flex flex-col md:flex-row">
            <div className="flex flex-col gap-3 justify-center md:justify-start p-1 md:p-4 md:w-5/12  lg:w-6/12">
              <h2 className=" glitch text-titleMobile lg:text-titledesktop xl:text-xtratitle 2xl:text-maxtitle font-bold">
                <span aria-hidden="true">{title}</span>
                {title}
                <span aria-hidden="true">{title}</span>
              </h2>
              <div className="image-container hidden md:block">
                <Image
                  src={WebJob.src}
                  alt="Web job"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="container flex justify-center">
              <div className="w-full">
                <JobContainer jobs={newJob} />
              </div>
            </div>
            <div className="image-container  md:hidden block">
              <Image src={WebJob.src} alt="Web job" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
   
  );
}
