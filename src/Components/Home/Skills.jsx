import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  AOS.init({
    easing: "ease-in-out", // default easing for AOS animations
  });
  const list = [
    {
      title: "Html",
      img: "https://i.ibb.co.com/FVD3fKW/html.png",
      price: "$5.50",
    },
    {
      title: "CSS",
      img: "https://i.ibb.co.com/T2SLpx1/css.png",
      price: "$3.00",
    },
    {
      title: "Tail",
      img: "https://i.ibb.co.com/WBdgFzd/tailwind-css.png",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "https://i.ibb.co.com/M7gW7cH/javascript.png",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "https://i.ibb.co.com/Z2zkGdV/react.png",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "https://i.ibb.co.com/mzDxN0k/node-js.png",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "https://i.ibb.co.com/c1NZGWJ/mongodb.png",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "https://i.ibb.co.com/7bcL2f3/git.png",
      price: "$12.20",
    },
  ];

  return (
    <div
      className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-5 w-fit mx-auto mb-28"
      data-aos="fade-up"
    >
      {list.map((item, index) => (
        /* eslint-disable no-console */
        <Card
          key={index}
          isPressable
          shadow="sm"
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible">
            <Image alt={item.title} className="w-20" src={item.img} />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
