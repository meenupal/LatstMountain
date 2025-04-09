"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen((prev) => !prev);
    setDropdownOpen(false);
  };

  const stays = [
    { name: "Himtrek Bir", link: "/Himtrek/Home" },
    { name: "Himtrek Kasol", link: "/Himtrek/Home" },
    { name: "Himtrek Jibi", link: "/Himtrek/Home" },
    { name: "Himtrek Tosh", link: "/Himtrek/Home" },
    { name: "Himtrek Snthan", link: "/Himtrek/Home" },
    { name: "Himtrek Stays Kasol", link: "/Himtrek/Home" },
    { name: "Himtrek Manali", link: "/Himtrek/Home" },
  ];

  return (
    <nav className="bg-white shadow-md px-4 fixed top-0 left-0 w-full h-[90px] z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 text-sm">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/deal19.png"
            width={120}
            height={90}
            alt="Logo"
            className="cursor-pointer mr-12"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl focus:outline-none"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-gray-700 items-center font-medium">
          {[
            { name: "Home", link: "/Home" },
            { name: "Destination", link: "/MountainMyTripGallery" },
            { name: "Treks", link: "/home" },
            { name: "Blog", link: "/Home" },
          ].map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}

          {/* Dropdown */}
          <li
            className="relative px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center space-x-1 focus:outline-none">
              <span>Stays with us</span>
              <FaChevronDown className="text-gray-500" />
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 bg-white shadow-xl rounded-lg w-72">
                <ul className="p-2">
                  {stays.map((stay, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 transition"
                    >
                      <Link href={stay.link}>{stay.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          {/* CTA Button */}
          <li className="shadow-md hover:shadow-lg transition-shadow duration-200">
            <Link
              href="/Contact"
              className="bg-[#F54900] text-white px-4 py-2 rounded-lg"
            >
              Book Your Stay
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[100px] left-0 w-full h-screen bg-gray-900 bg-opacity-90 z-40 p-4 md:hidden">
          <ul className="text-white text-sm space-y-4">
            {[
              { name: "Home", link: "/Home" },
              { name: "Destination", link: "/MountainMyTripGallery" },
              { name: "Treks", link: "/home" },
              { name: "Stays with us", link: "/Stays with us" },
              { name: "Blog", link: "/" },
              { name: "Book Your Stay", link: "/Book Your Stay" },
            ].map((item, index) => (
              <li
                key={index}
                className="py-2 px-4 border-b border-gray-700 shadow-md rounded-md bg-gray-800 hover:bg-gray-700 transition"
              >
                <Link href={item.link} onClick={toggleMobileMenu}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
