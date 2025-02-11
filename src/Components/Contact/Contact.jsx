import React from "react";
import "./button.css";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { BackgroundBeamsWithCollision } from "../Utility/Bg-ani";

const Contact = () => {
  //   const {myRef} = useContext(AuthContext)

  const sendFeedBack = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // console.log(email);

    // if (email) {
    //   Swal.fire({
    //     position: "top-middle",
    //     icon: "success",
    //     title: "Your details has been successfully submitted Thanks!",
    //     showConfirmButton: false,
    //     timer: 1700
    //   });
    // }
  };
  return (
    <BackgroundBeamsWithCollision>
      <section className="bg-[#37474F] dark:bg-gray-900 mt-48 mb-16 z-50 rounded-2xl w-11/12 p-5 md:w-1/2 xl:p-16">
        <div className="py-8 lg:py-16 px-4 mx-auto">
          <h2 className="text-white mb-4 text-3xl lg:text-5xl tracking-tight font-semibold text-center dark:text-white">
            Get in Touch
          </h2>
          <form action="#" className="space-y-8" onSubmit={sendFeedBack}>
            <div>
              <label
                for="email"
                className="block mb-2 text-lg font-medium dark:text-gray-300 text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="example@gmail.com"
                required
              ></input>
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-lg font-medium text-white dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              ></input>
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-lg font-medium text-white dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                name="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
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
