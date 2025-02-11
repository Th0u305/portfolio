import React from "react";
import { LinkPreview } from "../ui/Card-hover-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

export function ProjectsCard() {
  useState(() => {
    AOS.init({
      easing: "ease-in-out", // default easing for AOS animations
    });
  }, []);
  const projects = [
    {
      id: 1,
      image: "https://i.ibb.co.com/xqGDRgbv/topic-Tree.jpg",
      title: "TopicTree",
      description: "Introducing TopicTree, a simple discussion platform",
      link: "https://forum-website-pi.vercel.app/",
      data: "fade-right",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/997Lccy/gadget.jpg",
      title: "Gadget Heaven",
      description:
        "An online store specializing in the latest and most reliable technology products.",
      link: "https://gadgets-heaven-kohl.vercel.app/",
      data: "fade-down",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/8XY8wwn/service.jpg",
      title: "TrustWise",
      description: "A Service company that provides various services",
      link: "https://simple-service-three.vercel.app/",
      data: "fade-up",
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/6g4JCFj/influencer-Gear.jpg",
      title: "Influencer Gears",
      description:
        "Are you an influencer? View our website to see if you have the necessary gears",
      link: "https://th0u305.github.io/influencer-gears/",
      data: "fade-up",
    },
    {
      id: 5,
      image: "https://i.ibb.co.com/BgjkPbv/pet.jpg",
      title: "Furry-Friends",
      description: "Welcome to Paws Kingdom ",
      link: "https://paws-kingdom.vercel.app/",
      data: "fade-right",
    },
    {
      id: 6,
      image: "https://i.ibb.co.com/cSQVKg5j/portfolio2.jpg",
      title: "Portfolio",
      description: "My portfolio website",
      link: "https://my-portfolio-nine-taupe-31.vercel.app/",
      data: "fade-down",
    },
  ];

  return (
    <div className="mb-56 mt-56 md:mt-60 md:mb-60 2xl:mt-72 2xl:mb-72">
      <h1
        className="text-4xl text-center lg:mb-14"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Projects
      </h1>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:gap-5 xl:grid-cols-1">
        {projects.map((item, index) => (
          <div
            className="text-xl md:text-3xl mb-10 space-y-12"
            key={index}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="justify-between items-center hidden xl:flex">
              <LinkPreview url={item?.link} imageSrc={item?.image}>
                <div className="flex flex-row gap-3">
                  <p className="text-gray-400 text-4 text-2xl h-16">
                    0{item?.id}
                  </p>
                  <p className="h-fit my-auto text-4xl">{item?.title}</p>
                </div>
              </LinkPreview>
              <LinkPreview
                className="text-gray-800 text-xl break-words break-all max-w-xl text-ellipsis"
                url={item?.link}
                imageSrc={item?.image}
              >
                {item?.description}
              </LinkPreview>
            </div>

            <div className="xl:hidden text-center">
              <div className="flex flex-col gap-5">
                <img
                  src={item?.image}
                  className="rounded-3xl mx-auto border-2 w-96"
                  alt=""
                />
                <a
                  href={item?.link}
                  className="mb-5 mx-auto h-12 text-4xl bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                >
                  {item?.title}
                </a>
              </div>

              <a className="text-gray-800 text-xl" href={item?.link}>
                {item?.description}
              </a>
            </div>
            {/* <hr className="border border-gray-500" /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
