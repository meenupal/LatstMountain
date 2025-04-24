"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsOpen((prev) => !prev);
    setActiveDropdown(null);
  };

  const navItems = [
    { name: "Home", link: "/" },
    {
      name: "Destination",
      link: "#",
      dropdown: [{ name: "Top Places", link: "/MountainMyTripGallery" }],
    },
    {
      name: "Treks",
      link: "#",
      dropdown: [
        { name: "GulabiKanthaTrek", link: "/GulabiKantha" },
        { name: "BalipassTrek", link: "/Balipass" },
        { name: "Dayara Bugyal Trek", link: "/DayaraBugyal" },
        { name: "Brahmatal Winter Trek", link: "/Bramtal" },
        { name: "Kuari Pass Trek", link: "/Kuaripass" },
        { name: "Kedarkantha Trek ", link: "/Kedarkantha" },
        { name: "Vinayak Top Trek", link: "/VinayakTrek" },
        { name: "Char Dham Yatra Trek", link: "/CharDham" },
        { name: "DoditalTrek", link: "/Dodital" },
        { name: "HarKiDunTrek", link: "/Hariki" },
        { name: "Valley of Flowers Trek", link: "/Valleyflowers" },
        { name: "Chopta Tungnath  Trek", link: "/Chopta" },
        { name: "Chandrashila Trek", link: "/Chandrashila" },
      ],
    },
    {
      name: "Stays with us",
      link: "/",
      // dropdown: [
      //   { name: "GulabiKantha", link: "/GulabiKanthaTrek" },
      //   { name: "Balipass", link: "/BalipassTrek" },
      // ],
    },
    { name: "Blog", link: "/Blog" },
    { name: "Contact Us", link: "/Contact" },
  ];

  return (
    <nav className="bg-white px-4 fixed top-0 left-0 w-full z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-[60px]">
        <Link href="/">
          <Image
            src="/deal19.png"
            width={120}
            height={60}
            alt="Logo"
            className="cursor-pointer"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/*       
        <ul className="hidden md:flex space-x-8 items-center text-gray-800 font-medium text-[16px]">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.link}
                className="flex items-center gap-1 hover:text-orange-500 transition"
              >
                {item.name}
                {item.dropdown && <FaChevronDown className="text-sm mt-0.5" />}
              </Link>

              {item.dropdown && activeDropdown === item.name && (
                <div
                  className={`absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-30 ${
                    item.name === "Treks" ? "w-[600px]" : "w-56"
                  }`}
                >
                  <ul
                    className={`py-2  ${
                      item.name === "Treks"
                        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 px-4"
                        : ""
                    }`}
                  >
                    {item.dropdown.map((drop, i) => (
                      <li key={i}>
                        <Link
                          href={drop.link}
                          className="block px-4 py-2 hover:bg-gray-100 text-sm rounded transition"
                        >
                          {drop.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}

          <li>
            <Link
              href="/Bookyourstay"
              className="bg-[#F54900] text-white px-5 py-2 rounded-full hover:bg-[#f54a00a1] transition"
            >
              Book Your Stay
            </Link>
          </li>
        </ul> */}
        {/* {item.dropdown && activeDropdown === item.name && (
          <div
            className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-30 ${
              item.name === "Treks" ? "w-[600px]" : "w-56"
            }`}
          >
            <ul
              className={`py-2 ${
                item.name === "Treks"
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 px-4"
                  : ""
              }`}
            >
              {item.dropdown.map((drop, i) => (
                <li key={i}>
                  <Link
                    href={drop.link}
                    className="block px-3 py-2 hover:bg-gray-100 text-sm rounded transition"
                  >
                    {drop.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )} */}
        <ul className="hidden md:flex space-x-8 items-center text-gray-800 font-medium text-[16px]">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.link}
                className="flex items-center gap-1 hover:text-orange-500 transition"
              >
                {item.name}
                {item.dropdown && <FaChevronDown className="text-sm mt-0.5" />}
              </Link>

              {/* Dropdown menu */}
              {item.dropdown && activeDropdown === item.name && (
                <div
                  className={`absolute top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-30 ${
                    item.name === "Treks"
                      ? "w-[600px] left-1/2 transform -translate-x-1/2"
                      : "w-56 left-0"
                  }`}
                >
                  <ul
                    className={`py-2 ${
                      item.name === "Treks"
                        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 px-4"
                        : ""
                    }`}
                  >
                    {item.dropdown.map((drop, i) => (
                      <li key={i}>
                        <Link
                          href={drop.link}
                          className="block px-3 py-2 hover:bg-gray-100 text-sm rounded transition"
                        >
                          {drop.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}

          <li>
            <Link
              href="/Bookyourstay"
              className="bg-[#F54900] text-white px-5 py-2 rounded-full hover:bg-[#f54a00a1] transition"
            >
              Book Your Stay
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full bg-white shadow-lg absolute left-0 top-[60px] z-40">
          <ul className="flex flex-col px-4 py-6 space-y-4 text-gray-700">
            {navItems.map((item, idx) => (
              <li key={idx} className="relative">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setActiveDropdown((prev) =>
                      prev === item.name ? null : item.name
                    )
                  }
                >
                  <Link href={item.link} onClick={toggleMobileMenu}>
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <FaChevronDown
                      className={`ml-2 transform transition ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {item.dropdown && activeDropdown === item.name && (
                  <ul className="mt-2 ml-4 space-y-2 text-sm">
                    {item.dropdown.map((drop, i) => (
                      <li key={i}>
                        <Link
                          href={drop.link}
                          className="block py-1"
                          onClick={toggleMobileMenu}
                        >
                          {drop.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li>
              <Link
                href="/Bookyourstay"
                className="block bg-[#F54900] text-white text-center py-2 rounded-full hover:bg-[#f54a00a1] transition"
                onClick={toggleMobileMenu}
              >
                Book Your Stay
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

