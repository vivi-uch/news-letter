import Headcard from "./Headcard";

export default function Body() {
  return (
    <div className="flex flex-col lg:flex-row  my-6 lg:my-12 gap-6">
      <div className="flex flex-col gap-4">
        {/* {mobile design} */}
        <img
          src="images/image-web-3-mobile.jpg"
          alt="Mobile-image"
          className="block md:hidden"
        />
        {/* Laptop Image */}
        <img
          src="images/image-web-3-Desktop.jpg"
          alt="Laptop-image"
          className="hidden md:block"
        />

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-24">
          <h1 className="font-bold text-4xl lg:text-5xl">
            The Bright Future of Web 3.0?
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-gray-500  text-sm leading-6 lg:text-lg">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fufilling its promise?
            </p>
            <button className="uppercase bg-red-500 font-bold py-2 px-7 flex self-start">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="p-3 bg-blue-950">
        <h2 className="font-bold text-orange-400 text-xl lg:text-3xl">New</h2>
        <div className="flex flex-col gap-4 my-4 lg:gap-6">
          {headCardList.map((card) => (
            <Headcard heading={card.heading} para={card.para} hr={card.hr} />
          ))}
        </div>
      </div>
    </div>
  );
}

const headCardList = [
  {
    heading: "Hydrogen VS Electric Cars",
    para: "Will hydrogen fueled cars ever catch up to EVs?",
    hr: "block",
  },
  {
    heading: "The Downsides of AI Artistry",
    para: "What are the possible adverse effects of on-demand AI image generation?",
    hr: "block",
  },
  {
    heading: "Is VC Funding Drying Up?",
    para: "Private funding by VC firms is down 50% YOY. We take a look at what that means",
    hr: "hidden",
  },
];
