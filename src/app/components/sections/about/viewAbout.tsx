import Image from "next/image";
import React from "react";
import Atropos from "atropos/react";
import "atropos/atropos.css";
const ViewAbout = () => {
  return (
    <div className="min-w-full min-h-screen p-3  w-full z-10 flex justify-center items-center">
      <div className="">
        <div className="container flex-col-reverse flex md:flex-row">
          <div className="w-full md:w-6/12">
            <h2 className="glitch text-titleMobile lg:text-titledesktop xl:text-xtratitle 2xl:text-maxtitle font-bold">
              <span aria-hidden="true">ABOUT ME</span>
              ABOUT ME
              <span aria-hidden="true">ABOUT ME</span>
            </h2>
            <article
              className="text-leading-7 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl "
              style={{
                lineHeight: "1.5",
                maxWidth: "600px",
                position: "relative",
                zIndex: "10",
              }}
            >
              Hello my name is Juan Carlos Avila I am a university technician,
              graduated in 2010 and web developer since 2018 by vocation. I like
              new technologies and I like to be constantly learning something
              new. I like stability and I can work both in a team and alone. I
              have worked in development companies, implementing and maintaining
              E-commerce, institutional pages, travel agencies, portfolios, and
              web applications. I have worked with WordPress, React and Nodejs,
              HTML5, CSS3 and prepoccessors such as SASS, Babel and typescript.
              My programming languages are JavaScript (front-end and back-end)
              and PHP.
            </article>
          </div>
          <div className="w-full md:w-6/12 flex align-center justify-center items-center">
            <Atropos highlight={true}>
              <div data-atropos-offset="1" className="img-content">
                <Image
                  src="/img/aboutme.jpg"
                  alt="about"
                  width={480}
                  height={480}
                />
              </div>
            </Atropos>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAbout;
