"use client";
import { jobs } from "@/app/constants";
import "./index.scss";
import JobContainer from "./jobs/jobContainer";
import { useEffect } from "react";
import Aos from "aos";

export default function WorksComponent() {
  const { title, jobsItems } = jobs;
  const newJob = jobsItems.sort(
    (a, b) => b.date.startDate.getFullYear() - a.date.startDate.getFullYear()
  );
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div
        className="container p-3  w-full z-10 flex md:justify-end"
        data-aos="zoom-in"
      >
        <div className="container">
          <div className="w-full">
            <div className="flex justify-center">
              <h2 className="glitch text-titleMobile lg:text-titledesktop xl:text-xtratitle 2xl:text-maxtitle font-bold">
                <span aria-hidden="true">{title}</span>
                {title}
                <span aria-hidden="true">{title}</span>
              </h2>
            </div>
            <div className="container flex justify-center">
              <div className="md:w-4/5 lg:w-3/5">
                <JobContainer jobs={newJob} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
