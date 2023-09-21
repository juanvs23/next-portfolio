"use client";
import Atropos from "atropos/react";
import FormComponent from "./form/formComponent";
import "./index.scss";
import { useEffect } from "react";
import AOS from "aos";
import { ToastContainer } from "react-toastify";

export default function ContactComponent() {
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
        <Atropos
          activeOffset={10}
          shadowScale={0.5}
          shadowOffset={10}
          highlight={false}
          shadow={true}
          rotate={false}
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
                <span aria-hidden="true">Contact us</span>
                Contact us
                <span aria-hidden="true">Contact us</span>
              </h2>
              <h3>Please send your message here</h3>
            </div>
            <hr className="mb-6 mt-6" />
            <FormComponent />
            <hr />
          </div>
        </Atropos>
      </div>
    </>
  );
}
