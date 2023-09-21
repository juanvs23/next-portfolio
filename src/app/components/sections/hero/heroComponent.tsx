"use client";
import { useState } from "react";
import { useEffectOnce } from "usehooks-ts";
import Typewriter from "react-ts-typewriter";
import anime from "animejs/lib/anime.es.js";

import "./index.scss";

export default function HeroComponent() {
  const words = ["Frontend", "React", "Wordpress", "Developer and Designer"];
  const textColors = ["#14c7df", "#d8e436", "#00fffc", "#ff002b"];
  const [colorPosition, changeColorPosition] = useState<number>(0);
  const randomColor = () => {
    changeColorPosition(Math.floor(Math.random() * textColors.length));
  };
  useEffectOnce(() => {
    anime({
      targets: ".type-text",
      opacity: [0, 1],
      easing: "spring(1, 80, 10, 0)",
      duration: 3000,
      delay: 2000,
    });
    anime({
      targets: ".right-side",
      opacity: [0, 1, 0.5, 1],
      easing: "spring(1, 80, 10, 0)",
      duration: 3000,
      delay: 600,
      keyframes: [
        { filter: "blur(5px)" },
        { filter: "blur(0px)" },
        { filter: "blur(10px)" },
        { filter: "blur(0px)" },
        { filter: "blur(5px)" },
        { filter: "blur(0px)" },
      ],
    });
  });

  return (
    <>
      <div className="container p-3  w-full z-10 flex justify-center">
        <div className=" ">
          <div className="container right-side">
            <h1 className="glitch  text-displayMobile lg:text-displaydesktop xl:text-xtraHeight 2xl:text-maxHeight leading-tight">
              <span aria-hidden="true">Juan Carlos AVila</span>
              Juan Carlos AVila
              <span aria-hidden="true">Juan Carlos Avila</span>
            </h1>
          </div>
          <h2
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl heading-2 type-text"
            style={{
              height: "60px",
              color: textColors[colorPosition],
            }}
          >
            <Typewriter
              text={words}
              speed={250}
              delay={1000}
              loop={true}
              cursor={false}
              onStart={randomColor}
            />
          </h2>
        </div>
      </div>
    </>
  );
}
