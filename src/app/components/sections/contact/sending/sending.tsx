"use client";
import React, { useEffect, useState } from "react";

import "./sending.scss";
import { EmailMe } from "@/types";

const styleColors: string[] = ["#bfdbfe", "#fef9c3", "#22c55e"];
export default function Sending({
  emailTitle,
  hoverTitle,
  clickedTitle,
  icons: { initialIcon, hoverIcon, clickedIcon },
  email,
}: EmailMe) {
  const [hover, setHover] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const title = hover ? hoverTitle : emailTitle;
  const lastTitle = clicked ? clickedTitle : title;
  const iconClass = hover ? hoverIcon : initialIcon;
  const clickedIconClass = clicked ? clickedIcon : iconClass;
  const changeColor = (colors: string[]) => {
    if (hover && !clicked) return colors[1];
    if (clicked) return colors[2];
    return colors[0];
  };
  useEffect(() => {}, [hover, clicked]);
  return (
    <div
      className="Email-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3 style={{ color: changeColor(styleColors) }} className="Email-title">
        {lastTitle}
      </h3>
      <article className="sendEmail">
        {email &&
          (!clicked ? (
            <a
              target="_blank"
              rel="noreferrer"
              className="email-link"
              href={!clicked ? `mailto:${email}` : "javascript:void(0);"}
              onClick={() => {
                setHover(true);
                setClicked(true);
              }}
            >
              <i
                style={{
                  color: changeColor(styleColors),
                }}
                className={clickedIconClass}
              ></i>
            </a>
          ) : (
            <div className="email-link">
              <i
                style={{ color: changeColor(styleColors) }}
                className={clickedIconClass}
              ></i>
            </div>
          ))}
      </article>
    </div>
  );
}
