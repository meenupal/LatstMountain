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
            src="/deal35.png" // Replace with your actual image path
            alt="Eiffel Tower"
            width={600}
            height={500}
            className="rounded-lg "
          />
          {/* Discount Badge */}
          <div className="absolute top-12 left-12 bg-[#F54900] text-white px-4 py-2 rounded-md text-xl font-bold">
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
        <h2 className="text-xl font-bold text-gray-900 mt-2">
          Plan Your Adventure with 
          <span className="text-[#F54900]">MountainMyTrip</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Get ready for an unforgettable adventure with MountainMyTrip, your
          go-to partner for mountain trekking in India! We specialize in
          expertly guided treks through Uttarakhand, making sure you have a
          safe, smooth, and thrilling experience surrounded by the stunning
          Himalayas.
        </p>
        <ul className="mt-6 space-y-3 text-left">
          <li className="flex items-center text-gray-800">
            <LiaHandPointRightSolid className="text-[#F54900] mr-2 h-[20px] w-[20px]" />
            Expert-Guided Treks – Our experienced guides prioritize your safety
            while sharing their local knowledge.
          </li>

          <li className="flex items-center text-gray-800">
            <LiaHandPointRightSolid className="text-[#F54900] mr-2 h-[20px] w-[20px]" />
            Customized Itineraries – We create personalized plans that cater to
            both beginners and seasoned trekkers.
          </li>
          <li className="flex items-center text-gray-800">
            <LiaHandPointRightSolid className="text-[#F54900] mr-2  h-[20px] w-[20px]" /> Scenic
            Trails – Discover breathtaking landscapes, from lush alpine meadows
            to majestic snow-capped peaks
          </li>

          <li className="flex items-center text-gray-800">
            <LiaHandPointRightSolid className="text-[#F54900] mr-2  h-[23px] w-[23px]" />
            Hassle-Free Experience – We take care of everything, from permits to
            accommodations, so you can focus on enjoying your trek.
          </li>
          <li className="flex items-center text-gray-800">
            <LiaHandPointRightSolid className="text-[#F54900] mr-2  h-[20px] w-[20px]" /> Safety
            First – We’re equipped with all the essential gear and emergency
            support to keep you safe.
          </li>
          <li className="flex items-center text-gray-800">
            <LiaHandPointRightSolid className="text-[#F54900] mr-2  h-[20px] w-[20px]" />
            Let MountainMyTrip be your ticket to an incredible trekking
            adventure in Uttarakhand!
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
