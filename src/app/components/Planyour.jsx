
"use client";

import Image from "next/image";
import { FaPhoneAlt, FaCheck } from "react-icons/fa";
import { LiaHandPointRightSolid } from "react-icons/lia";

export default function DiscountSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto py-12 px-6 md:px-12">
      {/* Left Side - Image & Discount */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <div className="relative">
          {/* Background Image */}
          <Image
            src="/deal13.jpg" // Replace with your actual image path
            alt="Eiffel Tower"
            width={600}
            height={500}
            className="rounded-lg "
          />
          {/* Discount Badge */}
          <div className="absolute top-6 left-6 bg-[#F54900] text-white px-4 py-2 rounded-md text-xl font-bold">
            30% Discount
          </div>
          {/* Call Button */}
          <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
            <FaPhoneAlt className="text-[#F54900]" />
            <span className="font-semibold">666-888-0000</span>
          </div>
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
        <h3 className="text-[#F54900] italic text-lg">Get to know us</h3>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Plan Your Trip with <span className="text-[#F54900]">MountainMyTrip</span>
        </h2>
        <p className="text-gray-600 mt-4">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form, by injected hum randomized
          words which don’t look even slightly.MountainMyTrip offers curated travel
          adventures designed to bring you closer to nature and culture.
        </p>
        <ul className="mt-6 space-y-3 text-left">
          <li className="flex items-center text-gray-800">
            <LiaHandPointRightSolid className="text-[#F54900] mr-2" /> In the
            digital age, travel content is widely available, but not always
            authentic.
          </li>

          <li className="flex items-center text-gray-800">
            <LiaHandPointRightSolid className="text-[#F54900] mr-2" /> At
            MountainMyTrip, we believe in providing genuine and informative travel
            guidance
          </li>
          <li className="flex items-center text-gray-800">
            <LiaHandPointRightSolid className="text-[#F54900] mr-2" /> A
            well-informed traveler is an empowered traveler, and that’s what we
            aim to build.
          </li>

          <li className="flex items-center text-gray-800">
            <LiaHandPointRightSolid className="text-[#F54900] mr-2" /> Invest in
            your simply neighborhood
          </li>
          <li className="flex items-center text-gray-800">
            <LiaHandPointRightSolid className="text-[#F54900] mr-2" /> Support
            people in free text extreme need
          </li>
          <li className="flex items-center text-gray-800">
            <LiaHandPointRightSolid className="text-[#F54900] mr-2" /> Largest
            global industrial business community
          </li>
        </ul>
        {/* Button */}
        {/* <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-red-600 transition duration-300">
          BOOK WITH US NOW
        </button> */}
      </div>
    </section>
  );
}