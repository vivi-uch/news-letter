export default function Footcard() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:justify-evenly">
      {cardList.map((card) => (
        <Card
          key={card.num}
          src={card.src}
          num={card.num}
          heading={card.heading}
          para={card.para}
          href={card.href}
        />
      ))}
    </div>
  );
}

function Card({ src, num, heading, para, href }) {
  return (
    <div className="flex gap-3">
      <div>
        <img src={src} alt={num} />
      </div>
      <div className="flex flex-col gap-3 lg:gap-1">
        <h1 className="text-red-600 font-bold lg:text-4xl">{num}</h1>
        <a href={href}>
          <h2 className="font-bold lg:font-extrabold lg:text-lg">{heading}</h2>
        </a>
        <p className="text-gray-400 text-sm lg:text-lg">{para}</p>
      </div>
    </div>
  );
}

const cardList = [
  {
    src: "images/image-retro-pcs.jpg",
    num: "01",
    heading: "Reviving Retro PCs",
    para: "What happens when old PCs are given modern upgrades?",
    href: "https://itfix.org.uk/reviving-old-pcs/",
  },
  {
    src: "images/image-top-laptops.jpg",
    num: "02",
    heading: "Top 10 Laptops of 2024",
    para: "Our best picks for various needs and budgets.",
    href: "https://www.laptopmag.com/reviews/best-laptops-1",
  },
  {
    src: "images/image-gaming-growth.jpg",
    num: "03",
    heading: "The Growth of Gaming",
    para: "How the pandemic has sparked fresh oppurtunities",
    href: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/01/09/gaming-is-growing-and-web3-is-coming-with-it/#:~:text=Gaming%20has%20had%20a%20meteoric,in%20search%20of%20an%20escape.",
  },
];
