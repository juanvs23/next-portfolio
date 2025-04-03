import {useLocale} from 'next-intl';
import { JobItem } from "@/types";
import React from "react";
import "./jobComponent.scss";

export default function JobComponent({ job }: { job: JobItem }) {
  const locale = useLocale();
  const {
    title,
    date: { startDate, endDate },
    company,
    description,
  } = job;
  const months =  locale === "en" ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] : [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const present = locale === "en" ? "Present" : "Presente";
  const showStartDate = `${
    months[startDate.getMonth()]
  }/${startDate.getFullYear()}`;
  const showEndDate = endDate
    ? `${months[endDate.getMonth()]}/${endDate.getFullYear()}`
    : present;
  const defineColor = (id: number) => {
    if (id % 2 === 0) {
      return "bg-blue-600";
    }
    return "bg-blue-800";
  };
  return (
    <article
      className={`transform transition  hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 ${defineColor(
        job.id
      )} text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0`}
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

      <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg">{company}</h2>
        <h2 className="text-xl font-bold">{title}</h2>
        <h3>
          {" "}
          {showStartDate} - {showEndDate}{" "}
        </h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
