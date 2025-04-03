import React from "react";

import { Cards } from "./skills";
import { UseAbout } from "@/app/constants";

const SkillsAbout = () => {
  const {skills} = UseAbout();
  return (
    <div className="min-w-full min-h-screen p-3  w-full z-10 flex justify-center items-center">
      <div className="">
        <div className="container flex flex-col justify-center items-center">
          <h2 className="glitch text-titleMobile text lg:text-titledesktop xl:text-xtratitle 2xl:text-maxtitle font-bold mb-6 z-20">
            <span aria-hidden="true">{skills}</span>
            {skills}
            <span aria-hidden="true">{skills}</span>
          </h2>
          <div className="card-slider block z-20" style={{ maxWidth: "350px" }}>
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAbout;
