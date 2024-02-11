"use client";
import FormComponent from "./form/formComponent";
import "./index.scss";
import { useEffect } from "react";
import AOS from "aos";
import { contactUs } from "@/app/constants";
import Sending from "./sending/sending";
// Add in new releases
import { ToastContainer } from "react-toastify";
import { EmailMe } from "@/types/index";

export default function ContactComponent() {
  const contact = contactUs;
  const { title, hoverTitle, clickedTitle, icons, email } = contact.emailData;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <ToastContainer />
      <div
        className="container p-3  w-full z-10 flex justify-center"
        data-aos="fade-up"
      >
        <div className="w-full md:flex iform md:p-4">
          <div className="w-full flex items-center justify-center md:w-6/12">
            <div className="email pb-6 md:pb-0">
              <h2 className="glitch text-titleMobile lg:text-titledesktop xl:text-xtratitle 2xl:text-maxtitle font-bold">
                <span aria-hidden="true">{contact.title}</span>
                {contact.title}
                <span aria-hidden="true">{contact.title}</span>
              </h2>
              <h3>{contact.subtitle}</h3>
            </div>
          </div>
          <div className="w-full md:w-6/12">
            <div className="form-container   rounded-xl bg-gray-800 shadow-lg shadow-indigo-500/40 py-10 px-4">
              <div className="w-full flex flex-col items-center justify-center">
                <h2 className="text-2xl">{contact.formTitle}</h2>
              </div>
              <hr className="mb-6 mt-6" />
              <FormComponent />

              <hr className="mb-6 mt-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
