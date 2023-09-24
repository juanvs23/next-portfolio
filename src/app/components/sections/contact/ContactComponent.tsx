"use client";
import Atropos from "atropos/react";
import FormComponent from "./form/formComponent";
import "./index.scss";
import { useEffect } from "react";
import AOS from "aos";
import { contactUs } from "@/app/constants";
import Sending from "./sending/sending";
// Add in new releases
// import { ToastContainer } from "react-toastify";
import { EmailMe } from "@/types/index";

export default function ContactComponent() {
  const contact = contactUs;
  const { title, hoverTitle, clickedTitle, icons, email } = contact.emailData;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* <ToastContainer /> */}
      <div
        className="container p-3  w-full z-10 flex justify-center"
        data-aos="fade-up"
      >
        <Atropos
          activeOffset={2}
          shadowScale={0}
          shadowOffset={1}
          highlight={false}
          shadow={true}
          rotate={true}
          className="container flex-col flex align-center justify-center w-11/12 md:w-w-9/12 xl:w-8/12"
        >
          <div
            data-atropos-offset="3"
            className="w-full  p-3 rounded-xl bg-gray-800 shadow-lg shadow-indigo-500/40 iform"
          >
            <div className="w-full flex flex-col items-center justify-center">
              <h2
                data-atropos-offset="-3"
                data-atropos-scale="1.5"
                className="glitch text-titleMobile lg:text-titledesktop xl:text-xtratitle 2xl:text-maxtitle font-bold"
              >
                <span aria-hidden="true">{contact.title}</span>
                {contact.title}
                <span aria-hidden="true">{contact.title}</span>
              </h2>
              <h3>{contact.subtitle}</h3>
            </div>
            <hr className="mb-6 mt-6" />
            {/* <FormComponent /> */}
            <Sending
              data-atropos-offset="3"
              data-atropos-scale="5"
              email={email || ""}
              emailTitle={title}
              clickedTitle={clickedTitle}
              hoverTitle={hoverTitle}
              icons={icons}
            />
            <hr />
          </div>
        </Atropos>
      </div>
    </>
  );
}
