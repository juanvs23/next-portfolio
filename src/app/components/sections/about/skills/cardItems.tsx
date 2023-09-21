"use client";
import { hexToRgbA } from "@/app/helper";
import { CardSkill } from "@/types";
import { useState } from "react";
import { GrFormNextLink } from "@react-icons/all-files/gr/GrFormNextLink";

function CardItems({ title, icon, points, color }: CardSkill) {
  const frontColor = ` linear-gradient(90deg, rgba(${hexToRgbA(
    "#000000",
    1
  )}) 0%, rgba(${hexToRgbA(color)}) 100%)`;
  const backColor = ` linear-gradient(90deg,rgba(${hexToRgbA(
    color
  )}) 0%,  rgba(${hexToRgbA("#000000", 1)}) 100%)`;
  const [addClass, setAddClass] = useState<boolean>(false);
  const activeClass = addClass ? "active" : "";
  return (
    <div className={`card-container ${activeClass}`}>
      <div
        className="back-card"
        style={{
          backgroundImage: backColor,
          backgroundColor: `rgba(${hexToRgbA(color)})`,
        }}
      >
        <button className="changeClass" onClick={() => setAddClass(!addClass)}>
          Click me! <GrFormNextLink size={16} color="white" />
        </button>
        <div className="card-points">
          <ul>
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="front-card"
        style={{ backgroundImage: frontColor, backgroundColor: color }}
      >
        <button className="changeClass" onClick={() => setAddClass(!addClass)}>
          Click me! <GrFormNextLink size={16} color="white" />
        </button>
        <div className="card-icon">{icon}</div>
        <div className="card-title">{title}</div>
      </div>
    </div>
  );
}

export default CardItems;
