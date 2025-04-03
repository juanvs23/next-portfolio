"use client";
import Image from "next/image";
import React from "react";
import Atropos from "atropos/react";
import "atropos/atropos.css";
import { UseAbout } from "@/app/constants";


/**
 * Componente que muestra la informaci n sobre m .
 * Contiene un titulo y un p rrado con informacion adicional.
 * Adem s, incluye una imagen que se muestra en la parte derecha de la pantalla
 * en tama os de pantalla grandes.
 * La imagen se muestra con el efecto de "flip" utilizando la librer a Atropos.
 * @returns {React.ReactElement} Componente que muestra la informaci n sobre m .
 */
const ViewAbout = (): React.ReactElement => {
  const about = UseAbout();
  return (
    <div className="min-w-full min-h-screen p-3  w-full z-10 flex justify-center items-center">
      <div className="">
        <div className="container flex-col-reverse flex md:flex-row">
          <div className="w-full md:w-6/12">
            <h2 className="glitch text-titleMobile lg:text-titledesktop xl:text-xtratitle 2xl:text-maxtitle font-bold z-20">
              <span aria-hidden="true">{about.title}</span>
              <span>{about.title}</span>
              <span aria-hidden="true">{about.title}</span>
            </h2>
            <article
              className="text-leading-7 text-base md:text-md"
              style={{
                lineHeight: "1.5",
                maxWidth: "600px",
                position: "relative",
                zIndex: "10",
              }}
               dangerouslySetInnerHTML={{ __html: about.description }} />
          </div>
          <div className="w-full md:w-6/12 flex align-center justify-center items-center z-20">
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
