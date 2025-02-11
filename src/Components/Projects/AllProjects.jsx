import { Button, Card, CardBody, CardFooter, Chip, Image } from "@heroui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Pagination from "./Pagination";
import { useContext } from "react";
import { ContextData } from "../Context/ContextProvider";
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

export default function AllProjects() {
  const { service, setService } = useContext(ContextData);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const buttonData = [
    { name: "css" },
    { name: "react" },
    { name: "nextjS" },
    { name: "redux" },
  ];

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/allProjects`)
      .then((response) => {
        // setService(response.data.sort(() => Math.random() - 0.5).slice(0, 6));
        setService(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleData = (data) => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/allProjects/${data}`)
      .then((response) => {
        // setService(response.data.sort(() => Math.random() - 0.5).slice(0, 6));
        setService(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    if (data === "nextjS" || data === "redux") {
      setLoading(false);
      setMsg("Work on progress");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-1 sm:grid-cols-4 mb-12 mt-12 gap-5 sm:gap-0 xl:w-1/2 mx-auto">
        {buttonData.map((item, index) => (
          <button
            onClick={() => handleData(item.name)}
            key={index}
            className="uppercase relative mx-auto h-[3rem] w-[8rem] md:w-[10rem] inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#34e5eb_0%,#ffff_50%,#81d3e3_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              {item.name}
            </span>
          </button>
        ))}
      </div>
      <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-20">
        {service.length > 0 ? (
          service.map((item, index) => (
            <Card key={index} shadow="sm">
              <CardBody className="overflow-visible p-0">
                <Image
                  alt={item.title}
                  className="w-full object-cover h-[220px]"
                  radius="lg"
                  shadow="sm"
                  src={item.image}
                  width="100%"
                />
              </CardBody>
              <CardBody className="flex flex-col justify-between items-start gap-3 h-full">
                <h1 className="text-2xl">{item.title}</h1>
                <p className="w-fit text-start text-gray-800">
                  {item.description}
                </p>
                <div className="flex flex-wrap justify-start items-start gap-1">
                  {item?.technology?.map((tech, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 border border-cyan-600 text-black rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex justify-start gap-2 w-full">
                  <Link
                    to={item.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center gap-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 bg-gray-700 text-white text-sm w-[8rem] h-[2.5rem]"
                  >
                    <FaGithub className="text-lg" /> Git Hub
                  </Link>
                  <Link
                    to={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center gap-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 bg-gray-700 text-white text-sm w-[8rem] h-[2.5rem]"
                  >
                    <TfiWorld className="text-lg" />
                    Live Link
                  </Link>
                </div>
              </CardBody>
            </Card>
          ))
        ) : (
          <div className="col-span-full mx-auto mt-24">
            {loading && (
              // <div className="w-16 h-16 border-5 border-t-indigo-500 border-gray-300 rounded-full animate-spin"></div>
              <h1 className="text-white text-3xl">No Data available</h1>
            )}
            <h1 className="text-3xl text-white">{msg}</h1>
          </div>
        )}
      </div>
      <Pagination></Pagination>
    </div>
  );
}
