"use client";
import { useState } from "react";
import "./index.scss";
import Link from "next/link";
import Networks from "@/app/components/networks/networks";
import { useTranslations } from "next-intl";

export default function HeaderComponent() {
  const menuName =  useTranslations("menu");
  const [activeMenu, setactiveMenu] = useState<boolean>(false);
  const handleMenu = () => {
    setactiveMenu((activeMenu) => !activeMenu);
  };
  const activeClass = activeMenu ? "active" : "";
  const openMenu = !activeMenu ? menuName("open") : menuName("close");
  return (
    <nav className={activeClass}>
      <div
        title={menuName('home')}
        className="pie pie1"
        role="button"
        tabIndex={0}
        onClick={() => handleMenu()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleMenu();
        }}
      >
        <Link href="/#home">
          <div className="pie-color pie-color1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              color="white"
              fill="white"
              className="home icon"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
            </svg>
          </div>
        </Link>
      </div>
      <div title={menuName('about')} className="pie pie2" onClick={() => handleMenu()}>
        <Link href="/#about">
          <div className="pie-color pie-color2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              color="white"
              fill="white"
              className="about icon"
              viewBox="0 0 16 16"
            >
              <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" />
            </svg>
          </div>
        </Link>
      </div>
      <div title={menuName('skills')} className="pie pie3" onClick={() => handleMenu()}>
        <Link href="/#skills">
          <div className="pie-color pie-color3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="skills  icon"
            viewBox="0 0 24 24" width="16" height="16" color="#ffffff" fill="none">
    <path d="M12 19V5C12 3.34315 10.6569 2 9 2C7.34315 2 6 3.34315 6 5C6 5.55228 5.55228 6 5 6C3.34315 6 2 7.34315 2 9C2 10.6569 3.34315 12 5 12C3.34315 12 2 13.3431 2 15C2 16.6569 3.34315 18 5 18C5.55228 18 6 18.4477 6 19C6 20.6569 7.34315 22 9 22C10.6569 22 12 20.6569 12 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M12 19V5C12 3.34315 13.3431 2 15 2C16.6569 2 18 3.34315 18 5C18 5.55228 18.4477 6 19 6C20.6569 6 22 7.34315 22 9C22 10.6569 20.6569 12 19 12C20.6569 12 22 13.3431 22 15C22 16.6569 20.6569 18 19 18C18.4477 18 18 18.4477 18 19C18 20.6569 16.6569 22 15 22C13.3431 22 12 20.6569 12 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg>
          </div>
        </Link>
      </div>
      <div title={menuName('works')} className="pie pie4" onClick={() => handleMenu()}>
        <Link href="/#works">
          <div className="pie-color pie-color4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              color="white"
              fill="white"
              className="works  icon"
              viewBox="0 0 16 16"
            >
              <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
            </svg>
          </div>
        </Link>
      </div>
      <div title={menuName('projects')} className="pie pie5" onClick={() => handleMenu()}>
        <Link href="/#projects">
          <div className="pie-color pie-color5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              color="white"
              fill="white"
              className="projects icon"
              viewBox="0 0 16 16"
            >
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
            </svg>
          </div>
        </Link>
      </div>
      <div title={menuName('contact')} className="pie  pie6" onClick={() => handleMenu()}>
        <Link href="/#contact">
          <div className="pie-color pie-color6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              color="white"
              fill="white"
              className="contact icon"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
          </div>
        </Link>
      </div>
      <div title={openMenu} className="menu" onClick={() => handleMenu()}>
        <svg
          className="hamburger"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <g
            fill="none"
            stroke="#000"
            strokeWidth="7.999"
            strokeLinecap="round"
          >
            <path d="M 55,26.000284 L 24.056276,25.999716" />
            <path d="M 24.056276,49.999716 L 75.943724,50.000284" />
            <path d="M 45,73.999716 L 75.943724,74.000284" />
            <path d="M 75.943724,26.000284 L 45,25.999716" />
            <path d="M 24.056276,73.999716 L 55,74.000284" />
          </g>
        </svg>
      </div>
      <Networks />
    </nav>
  );
}
