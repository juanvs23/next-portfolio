"use client";
import React, { useEffect, useRef, useState } from "react";
import { HCaptchaInput } from "../../../../helper";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.scss";
import { FormInterface, Status } from "@/types";
import type HCaptcha from "@hcaptcha/react-hcaptcha/types/index.d.ts";

import {  initialForm, useFormMessage } from "@/app/constants";

export default function FormComponent() {
  const formMessage = useFormMessage();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [formData, setFormData] = useState(initialForm);
  const [phone, setPhone] = useState<string>("");
  const [token, setToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  /**
   * Handles the change event for input and textarea elements.
   *
   * @param {React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>} e - The event object.
   */
  const handlerChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      inputs: prev.inputs.map((input) => {
        if (input.name === name) {
          if (input.inputError !== null) {
            input.inputError = null;
          }
          return {
            ...input,
            inputValue: value,
            active: true,
          };
        }
        return input;
      }),
    }));
  };

  useEffect(() => {
    const { status, message, inputs } = formData;
    const newsInputs = inputs.map((input) => {
      if (input.name === "phone") {
        input.active = true;

        input.inputError = null;
        input.inputValue = phone;
      }

      return input;
    });
    const newFormData = {
      status,
      message,
      inputs: newsInputs,
    };
    setFormData(newFormData);
    //   console.log(formData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phone]);
  /**
   * Functions
   */
  const handlerToken = (token: string) => {
    setToken(token);
  };

  /*  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    captchaRef.current?.execute();
  }; */

  /**
   * Handles the form submission event.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { status, message, inputs } = formData;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let newStatus: Status = Status.idle;
    let newMessage: string = "";
    if (status === Status.idle) {
      if (!token) {
        captchaRef.current?.execute();
      }
      const newInputs = inputs.map((input) => {
        if (input.inputValue.length === 0) {
          input.inputError = formMessage.errors.field;
        }
        if (input.name == "phone" && phone.length < 8) {
          // console.log(input.inputValue);
          input.inputError = formMessage.errors.phone;
        }
        if (input.name == "email" && !regexEmail.test(input.inputValue)) {
          input.inputError = formMessage.errors.email;
        }
        return input;
      });
      const checkError = newInputs.filter((input) => input.inputError !== null);
      if (checkError.length > 0) {
        checkError.forEach((input) => {
          toast.error(input.inputError, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
        setFormData({
          status: newStatus,
          message: newMessage,
          inputs: newInputs,
        });
      } else {
        if (token) {
          newStatus = Status.loading;
          newMessage = "Sending...";
          //  console.log("object");
          setFormData({
            inputs: newInputs,
            status: newStatus,
            message: newMessage,
          });
          const sendformData = new FormData();
          formData.inputs.forEach((input) => {
            sendformData.append(input.name, input.inputValue);
          });

          fetch("/api/nodemail", {
            method: "POST",
            body: sendformData,
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast.success(formMessage.success, {
                position: "top-center",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
              });
              setFormData({
                status: data.status,
                message: data.message,
                inputs: initialForm.inputs,
              });
              setPhone("");
              const el = e.target as HTMLFormElement;
              el.reset();
            })
            .catch((error) => {
              toast.error(formMessage.error, {
                position: "top-center",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
              });
              setFormData({
                status: error.status,
                message: error.message,
                inputs: initialForm.inputs,
              });
            });
        }
      }
    }
  };

  //jsx
  return (
    <form className="form" onSubmit={handlerSubmit}>
      <div className="container lg:flex">
        <div className="lg:w-1/2 pb-6 pl-2 pr-2">
          <div
            className={`input-group ${
              formData.inputs[0].inputError !== null ? "alert" : ""
            }`}
          >
            <input
              name="name"
              onChange={(e) => handlerChange(e)}
              type="text"
              id="name"
              ref={nameRef}
              className="input form-input w-full bg-transparent"
            />
            <label
              className={`placeholder ${formData.inputs[0].active && "active"}`}
              htmlFor="name"
            >
              {formData.inputs[0].inputTitle}
            </label>
          </div>
        </div>
        <div className="lg:w-1/2 pb-6 pl-2 pr-2">
          <div
            className={`input-group ${
              formData.inputs[1].inputError !== null ? "alert" : ""
            }`}
          >
            <PhoneInput
              className="input form-input block w-full bg-transparent"
              defaultCountry="ve"
              value={phone}
              onChange={(phone) => setPhone(phone)}
            />
          </div>
        </div>
      </div>
      <div className="container lg:flex">
        <div className="lg:w-1/2 pb-6 pl-2 pr-2">
          <div
            className={`input-group ${
              formData.inputs[2].inputError !== null && "alert"
            }`}
          >
            <input
              type="text"
              id="email"
              ref={emailRef}
              name="email"
              onChange={(e) => handlerChange(e)}
              className="input form-input w-full bg-transparent"
            />
            <label
              className={`placeholder ${formData.inputs[2].active && "active"}`}
              htmlFor="email"
            >
              {formData.inputs[2].inputTitle}
            </label>
          </div>
        </div>
        <div className="lg:w-1/2 pb-6 pl-2 pr-2">
          <div
            className={`input-group ${
              formData.inputs[3].inputError !== null && "alert"
            }`}
          >
            <input
              type="text"
              id="subject"
              name="subject"
              onChange={(e) => handlerChange(e)}
              className="input form-input block w-full bg-transparent"
              ref={subjectRef}
            />
            <label
              className={`placeholder ${formData.inputs[3].active && "active"}`}
              htmlFor="subject"
            >
              {formData.inputs[3].inputTitle}
            </label>
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" pb-6 pl-2 pr-2">
          <div
            className={`input-group ${
              formData.inputs[4].inputError !== null && "alert"
            }`}
          >
            <textarea
              id="message"
              ref={messageRef}
              name="message"
              onChange={(e) => handlerChange(e)}
              className="input form-input w-full bg-transparent"
            ></textarea>
            <label
              className={`placeholder ${formData.inputs[4].active && "active"}`}
              htmlFor="message"
            >
              {formData.inputs[4].inputTitle}
            </label>
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" pb-6 pl-2 pr-2 w-full flex flex-col items-center gap-3 justify-center">
          <HCaptchaInput
            sitekey="0b2fcab0-167d-488b-84a7-1da2b7354d1e"
            ref={captchaRef}
            onVerify={handlerToken}
          />
          <button
            disabled={
              formData.inputs.filter((input) => input.inputError !== null)
                .length > 0
                ? true
                : false
            }
            type="submit"
            className={`rounded-full pt-2 pb-2 pl-10 pr-10 w-full md:w-2/4 xl:w-1/4 duration-300 text-white transition-all ${
              formData.inputs.filter((input) => input.inputError !== null)
                .length > 0
                ? "bg-red-700 cursor-not-allowed hover:bg-red-700"
                : " bg-blue-600 hover:bg-blue-400"
            }`}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}
