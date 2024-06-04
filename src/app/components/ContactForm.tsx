"use client";

import React, { useState } from "react";
import Image from "next/image";

import InputField from "./InputField";
import { contact, emailRegex } from "../constants";

const ContactForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    subject: "",
    message: "",
  });

  const handleFormSubmit = () => {
    if (
      fullname === "" &&
      email === "" &&
      phonenumber === "" &&
      subject === "" &&
      message === ""
    ) {
      setError({
        fullname: "Required",
        email: "Required",
        phonenumber: "Required",
        subject: "Required",
        message: "Required",
      });
    } else if (fullname === "") {
      setError((prevError) => {
        return { ...prevError, fullname: "Required" };
      });
    } else if (email === "") {
      setError((prevError) => {
        return { ...prevError, email: "Required" };
      });
    } else if (phonenumber === "") {
      setError((prevError) => {
        return { ...prevError, phonenumber: "Required" };
      });
    } else if (subject === "") {
      setError((prevError) => {
        return { ...prevError, subject: "Required" };
      });
    } else if (message === "") {
      setError((prevError) => {
        return { ...prevError, message: "Required" };
      });
    } else if (!emailRegex.test(email)) {
      setError((prevError) => {
        return { ...prevError, email: "Invalid email" };
      });
    } else if (phonenumber.length > 10) {
      setError((prevError) => {
        return { ...prevError, phonenumber: "Invalid phone number" };
      });
    } else {
      window.open(
        `mailto:shrezatldr@gmail.com?subject=${subject}&body=${message}%0A%0ARegards,%0AName:%20${fullname}%0AEmail:%20${email}%0AContact:%20${phonenumber}`
      );
    }
  };

  return (
    <div>
      <div className="flex gap-2 text-2xl md:text-3xl 2xl:text-4xl">
        <span>Get in</span>

        <span className="bg-gradient-to-r from-cyan-500 to-cyan-700 inline-block text-transparent bg-clip-text">
          Touch
        </span>
      </div>

      <div className="flex flex-col lg:flex-row mt-5 lg:mt-10 gap-5 justify-between px-0 lg:px-10">
        <div className="flex flex-col gap-10">
          {contact.map((itm, index) => (
            <div key={index} className="flex flex-row gap-8 items-center">
              <div className=" bg-cyan-50 p-2 rounded-xl">
                <Image
                  src={`/portfolio${itm.icon}`}
                  width={30}
                  height={0}
                  priority
                  alt={itm.key}
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-neutral-300">{itm.title} </span>
                <span>{itm.value}</span>
              </div>
            </div>
          ))}
        </div>

        <form className="flex w-[100%] mt-2 md:w-[50%] flex-col justify-between gap-5">
          <div className="flex flex-row gap-5">
            <InputField
              value={fullname}
              onChangeText={(val) => {
                setFullname(val);
                setError((prevError) => {
                  return { ...prevError, fullname: "" };
                });
              }}
              error={error.fullname}
              id="fullname"
              placeholder="Full name"
            />

            <InputField
              id="email"
              placeholder="Your email"
              value={email}
              onChangeText={(val) => {
                setEmail(val);
                setError((prevError) => {
                  return { ...prevError, email: "" };
                });
              }}
              error={error.email}
            />
          </div>

          <div className="flex flex-row gap-5">
            <InputField
              id="phonenumber"
              placeholder="Phone number"
              value={phonenumber}
              onChangeText={(val) => {
                setPhonenumber(val);
                setError((prevError) => {
                  return { ...prevError, phonenumber: "" };
                });
              }}
              error={error.phonenumber}
              type="number"
            />

            <InputField
              id="subject"
              placeholder="Subject"
              value={subject}
              onChangeText={(val) => {
                setSubject(val);
                setError((prevError) => {
                  return { ...prevError, subject: "" };
                });
              }}
              error={error.subject}
            />
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              className="shadow appearance-none bg-cyan-50 border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setError((prevError) => {
                  return { ...prevError, message: "" };
                });
              }}
              rows={5}
            />
            <span className="h-5 text-red-400 self-end">{error.message}</span>
          </div>

          <div className="flex justify-end">
            <button
              className=" bg-cyan-800 hover:bg-cyan-900 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
