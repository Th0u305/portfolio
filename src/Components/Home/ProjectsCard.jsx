import { HoverEffect } from "../Utility/Card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    image: "https://i.ibb.co.com/8XY8wwn/service.jpg",
    title: "TrustWise",
    description: "A Service company that provides various services",
    link: "https://simple-service-three.vercel.app/",
    data : "fade-up"
  },
  {
    image: "https://i.ibb.co.com/997Lccy/gadget.jpg",
    title: "Gadget Heaven",
    description:"An online store specializing in the latest and most reliable technology products.",
    link: "https://gadgets-heaven-kohl.vercel.app/",
    data : "fade-down"
  },
  {
    image: "https://i.ibb.co.com/GtSx8kB/flower-Shop.jpg",
    title: "Flower Shop",
    description: "Buy your favorite flower with great discount",
    link: "https://th0u305.github.io/flower-shop-page/",
    data : "fade-right"
  },
  {
    image: "https://i.ibb.co.com/6g4JCFj/influencer-Gear.jpg",
    title: "Influencer Gears",
    description:"Are you an influencer? . View our website to see if you have the necessary gears",
    link: "https://th0u305.github.io/influencer-gears/",
    data : "fade-up"
  },
  {
    image: "https://i.ibb.co.com/BgjkPbv/pet.jpg",
    title: "Furry-Friends",
    description:"Welcome to Paws Kingdom, your trusted destination for finding the perfect pet! We specialize in offering a variety of healthy, well-cared-for pets, including dogs, cats, birds, reptiles, fish, and small animals. ",
    link: "https://paws-kingdom.vercel.app/",
    data : "fade-right"
  },
  {
    image: "https://i.ibb.co.com/ZKXngNm/penguin-Fashion-Back.jpg",
    title: "PenguinFashion",
    description:"In need of backpack visit our shop to buy premium quality backpacks",
    link:"https://th0u305.github.io/shopping-landing-pages/Option-3-Backpack-Moon/",
    data : "fade-down"
  },
];
