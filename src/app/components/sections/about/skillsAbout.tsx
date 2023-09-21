import React from "react";

import { Cards } from "./skills";

const SkillsAbout = () => {
  return (
    <div className="min-w-full min-h-screen p-3  w-full z-10 flex justify-center items-center">
      <div className="">
        <div className="container flex flex-col justify-center items-center">
          <h2 className="glitch text-titleMobile text lg:text-titledesktop xl:text-xtratitle 2xl:text-maxtitle font-bold mb-6">
            <span aria-hidden="true">My Skills</span>
            My Skills
            <span aria-hidden="true">My Skills</span>
          </h2>
          <div className="card-slider block" style={{ maxWidth: "350px" }}>
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAbout;
