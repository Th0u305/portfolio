import React, { useState } from "react";
import "./button.css";
import { BackgroundBeamsWithCollision } from "../ui/Bg-ani";
import emailjs from "@emailjs/browser";
import { Bounce, toast } from "react-toastify";

const Contact = () => {
  const [errorMSG, setErrorMsg] = useState("");
  const [errorMSG2, setErrorMsg2] = useState("");
  const sendFeedBack = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    if (message.length === 0 || message.length < 10) {
      return setErrorMsg("Please write more than 10 words");
    } else {
      setErrorMsg("");
    }
    if (subject.length === 0 || subject.length < 5) {
      return setErrorMsg2("Please write more than 5 words");
    } else {
      setErrorMsg2("");
    }

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const pubKey = import.meta.env.VITE_PUB_KEY;

    const templateParams = {
      to_name: "Ahnaf",
      from_subject: subject,
      from_email: email,
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, pubKey).then(
      () => {
        e.target.reset()
        return toast.success("Message Sent successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      },
      () => {
        return toast.error("Something went wrong", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    );
  };
  return (
    <BackgroundBeamsWithCollision>
      <section className="bg-white mt-48 mb-16 z-30 rounded-2xl w-[90%] sm:w-[70%] md:w-[60%] p-5 xl:p-16">
        <div className="py-8 lg:py-16 px-4 mx-auto">
          <h2 className="text-gray-800 mb-4 text-4xl tracking-tight font-semibold text-center">
            Get in Touch
          </h2>
          <form action="#" className="space-y-8" onSubmit={sendFeedBack}>
            <div>
              <label
                for="email"
                className="block mb-2 text-lg font-medium text-gray-800"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                className="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                placeholder="example@gmail.com"
                required
              ></input>
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-lg font-medium text-gray-800"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block p-3 w-full text-sm  rounded-lg border shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              ></input>
              <p className="text-red-600">{errorMSG2}</p>
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-lg font-medium text-gray-800"
              >
                Your message
              </label>
              <textarea
                required
                id="message"
                rows="6"
                name="message"
                className="block p-2.5 w-full text-sm text-gray-800 bg-gray-50 rounded-lg shadow-sm border border-gray-600 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
              <p className="text-red-600">{errorMSG}</p>
            </div>

            <button type="submit">
              <div className="svg-wrapper-1 button justify-center">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
                <span className="">Send</span>
              </div>
            </button>
          </form>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default Contact;
