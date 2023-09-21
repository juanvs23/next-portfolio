import { JobItem } from "@/types";
import React from "react";
import "./jobComponent.scss";

export default function JobComponent({ job }: { job: JobItem }) {
  const {
    title,
    date: { startDate, endDate },
    company,
    description,
    tools,
  } = job;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const showStartDate = `${
    months[startDate.getMonth()]
  }/${startDate.getFullYear()}`;
  const showEndDate = endDate
    ? `${months[endDate.getMonth()]}/${endDate.getFullYear()}`
    : "Present";
  return (
    <article className="job-container m-3 p-3 rounded-xl bg-gray-800 shadow-lg shadow-indigo-500/40">
      <div className="job-data pb-3 flex">
        <div className="w-1/6 flex justify-center items-center">
          <i className="fa-solid fa-building" style={{ fontSize: "3rem" }}></i>
        </div>
        <div className="w-5/6">
          <h3 className="job-title text-xl md:text-3xl font-bold uppercase">
            {title}
          </h3>
          <h4 className="job-company text-xl md:text-2xl text-gray-300">
            {company}
          </h4>
          <div className="job-date">
            {showStartDate} - {showEndDate}
          </div>
        </div>
      </div>
      <hr className="mb-3 mt-3" />
      <div className="job-content">
        <div className="job-description">{description}</div>

        <div className="job-tools bg-blue-600">
          <h4 className="job-tools-title">
            <i className="fa-solid fa-screwdriver-wrench"></i> Technics Tools
          </h4>
          <ol className="job-tools-list">
            {tools.map((tool) => (
              <li key={tool.id}>
                <i className={`fa-brands ${tool.icon}`}></i> {tool.title}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}
