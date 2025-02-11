import { Card, CardBody, CardFooter, Image, Spinner } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function AllProjects() {
  const [service, setService] = useState([]);
  const [allService, setAllService] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  const buttonData = [{ name: "css" }, { name: "react" }, { name: "random" }];

  useEffect(() => {
    axios
      .get("https://portfolio-server-psi-three.vercel.app/allProjects")
      .then((response) => {
        setService(response.data.sort(() => Math.random() - 0.5).slice(0, 6));
        setAllService(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleData = (data) => {
    const filterData = allService.filter((item) => item.type === data);
    setService(filterData);
    if (data === "random") {
      setLoading(false)
      setMsg("No Data available")
    }
  };

  return (
    <div>
      <div className="flex gap-2 mb-12 mt-12 xl:w-1/2 mx-auto">
        {buttonData.map((item, index) => (
          <button
            onClick={() => handleData(item.name)}
            key={index}
            className="uppercase relative mx-auto h-[3rem] w-[10rem] inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#34e5eb_0%,#ffff_50%,#81d3e3_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              {item.name}
            </span>
          </button>
        ))}
      </div>
      <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-28">
        {service.length > 0 ? (
          service.map((item, index) => (
            <Card key={index} isPressable shadow="sm">
              <CardBody className="overflow-visible p-0">
                <Image
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  radius="lg"
                  shadow="sm"
                  src={item.image}
                  width="100%"
                />
              </CardBody>
              <CardFooter className="flex flex-col justify-between items-center gap-5">
                <h1 className="text-xl">{item.title}</h1>
                <div className="flex justify-evenly w-full">
                  <NavLink
                    to={item.git}
                    className="relative mx-auto h-[3rem] w-[9rem] inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#34e5eb_0%,#ffff_50%,#81d3e3_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      Git hub
                    </span>
                  </NavLink>
                  <NavLink
                    to={item.link}
                    className="relative mx-auto h-[3rem] w-[9rem] inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#34e5eb_0%,#ffff_50%,#81d3e3_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      Live Link
                    </span>
                  </NavLink>
                </div>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full mx-auto mt-28">
            {loading && (
              <div class="w-16 h-16 border-5 border-t-indigo-500 border-gray-300 rounded-full animate-spin"></div>
            )}
            <h1 className="text-3xl text-white">{msg}</h1>
          </div>
        )}
      </div>
    </div>
  );
}
