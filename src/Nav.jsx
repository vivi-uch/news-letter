import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "New", href: "#new" },
    { label: "Popular", href: "#popular" },
    { label: "Trending", href: "#trending" },
    { label: "Categories", href: "#categories" },
  ];

  return (
    <div className="flex justify-between items-center">
      <img src="images/logo.svg" alt="logo" className="w-12" />

      {/* {mobile screens} */}
      <button onClick={() => setIsOpen(!isOpen)} className="w-12 lg:hidden">
        <img src="images/icon-menu.svg" alt="menu-button" />
      </button>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex gap-10 text-lg text-gray-500 font-semibold">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`${
              activeTab === item.label.toLowerCase()
                ? "border-b-2 border-gray-500"
                : ""
            } hover:text-gray-900`}
            onClick={() => setActiveTab(item.label.toLowerCase())}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* {mobile section} */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 w-3/4 absolute left-1/3 h-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute top-4 right-[4.5rem]"
            >
              <img
                src="images/icon-menu-close.svg"
                alt="close-button"
                className="w-6"
              />
            </button>

            <nav className="flex flex-col gap-2 mt-24 text-lg text-gray-800 hover:text-gray-600 font-semibold">
              <a href="#home">Home</a>
              <a href="#new">New</a>
              <a href="#popular">Popular</a>
              <a href="#trending">Trending</a>
              <a href="#categories">Categories</a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
