import React from "react";
import Team from "../components/Team"; // if you're in /pages/about.js

import {
  MapPin,
  Compass,
  Hiking,
  Mountain,
  Flag,
  Footprints,
  Users,
  Compass as Route,
  Calendar,
  Globe,
} from "lucide-react";
import Image from "next/image";

const historyData = [
  {
    year: "2023",
    title: "Founded in the Himalayas",
    description: `Himalayan Trekking was born with a passion to bring people closer to nature.
      We started our journey in the heart of Dehradun, crafting personalized trekking adventures
      that immerse travelers in the breathtaking landscapes of the Himalayas.`,
    icon: Flag,
  },
  {
    year: "2024",
    title: "Expanded Trekking Routes",
    description: `As demand grew, we expanded our trekking routes, adding unique trails across Uttarakhand,
      Himachal Pradesh, and Nepal. Our commitment to sustainable tourism ensured an eco-friendly trekking experience.`,
    icon: Route,
  },
  {
    year: "2025",
    title: "Launched Expert-Led Expeditions",
    description: `Recognizing the need for expertise, we introduced guided expeditions led by
      seasoned mountaineers. Our treks now included high-altitude training, safety workshops, and immersive cultural experiences.`,
    icon: Globe,
  },
  {
    year: "2026",
    title: "Future Growth & Global Adventures",
    description: `Our vision is to take Himalayan Trekking beyond borders—introducing expeditions in the Alps,
      Andes, and beyond. We aim to integrate AI-based trek planning, advanced safety measures, and real-time tracking for all adventurers.`,
    icon: Calendar,
  },
];

export default function About() {
  return (
    <>
      <div className="">
        {/* Hero Section */}
        <div
          className="bg-cover mt-12 bg-center h-[300px] flex items-center justify-center text-white text-center shadow-lg"
          style={{
            backgroundImage: "url('deal73.webp')",
          }}
        >
          <div className=" bg-opacity-50 p-12 rounded-xl">
            <h1 className="text-5xl  font-extrabold drop-shadow-lg">
              About Us
            </h1>
            <h3 className="text-lg mt-4 font-light">
              Discover the Himalayas like never before—one step at a time.
            </h3>
          </div>
        </div>

        {/*     
      <div className="flex flex-col-reverse lg:flex-row items-center mt-20 gap-24 lg:gap-20 px-6 lg:px-20">
    
        <img
          src="/deal10.jpg"
          width={500}
          height={500}
          alt="Trekking Team"
          loading="lazy"
          className="w-64 h-64 sm:w-80 sm:h-80 rounded-xl border-4 border-gray-300 shadow-lg"
        />

    
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-3xl font-bold text-gray-900">
            About Himalayan Trekking
          </h1>
        </div>
      </div> */}
        <div className="flex flex-col md:py-12 lg:flex-row justify-between items-center py-16 px-2 sm:px-12 lg:px-20 gap-4 sm:gap-20">
          {/* Left Section */}
          <div className="lg:w-[50%] text-center  lg:text-left">
            <h1 className="font-bold flex gap-2 flex-col mt-2 items-center sm:items-end sm:flex-row  py-4 text-6xl md:text-5xl text-blue-400"></h1>

            <p className="text-xl ml-1.5 text-[#F54900] font-semibold">
              Plan Your Adventure with MountainMyTrip
            </p>
            <div className=" sm:mt-5  text-gray-600 space-y-8 sm:border-t-1">
              {/* Paragraph 1 */}
              <div className="p-2  rounded-lg ">
                <p className="text-base  sm:text-[16px] sm:block ">
                  Get ready for an unforgettable adventure with MountainMyTrip,
                  your go-to partner for mountain trekking in India! We
                  specialize in expertly guided treks through Uttarakhand,
                  making sure you have a safe, smooth, and thrilling experience
                  surrounded by the stunning Himalayas. Expert-Guided Treks –
                  Our experienced guides prioritize your safety while sharing
                  their local knowledge. Customized Itineraries – We create
                  personalized plans that cater to both beginners and seasoned
                  trekkers. Scenic Trails – Discover breathtaking landscapes,
                  from lush alpine meadows to majestic snow-capped peaks.
                  Hassle-Free Experience – We take care of everything, from
                  permits to accommodations, so you can focus on enjoying your
                  trek. Safety First – We’re equipped with all the essential
                  gear and emergency support to keep you safe. Let
                  MountainMyTrip be your ticket to an incredible trekking
                  adventure in Uttarakhand!
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full pt-16 lg:w-[49%] flex justify-center lg:justify-end">
            <Image
              src="/deal12.webp"
              alt="company logo"
              width={900}
              height={500}
              className="rounded-lg  sm:r-12 "
            />
          </div>
        </div>

        {/* Our Mission & Values */}
        <div className="py-20 from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              Exploring responsibly, empowering communities, and embracing the
              adventure within.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-10 bg-white rounded-xl shadow-lg flex flex-col items-center text-center">
                <Mountain size={60} className="text-[#F54900] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
                <p className="text-gray-700 mt-4">
                  To inspire and guide trekkers in their quest for adventure,
                  while fostering environmental conservation and cultural
                  appreciation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-xl shadow-md flex items-center gap-4">
                  <Compass size={50} className="text-[#F54900]" />
                  <div>
                    <h3 className="text-xl font-semibold">Exploration</h3>
                    <p className="text-gray-700 text-sm">
                      We constantly seek new trails and adventures.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-xl shadow-md flex items-center gap-4">
                  <Footprints size={50} className="text-[#F54900]" />
                  <div>
                    <h3 className="text-xl font-semibold">Sustainability</h3>
                    <p className="text-gray-700 text-sm">
                      Leave no trace, protect nature.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our History */}
        <div className="py-20 bg-gradient-to-b from-white to-gray-100">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Our History
            </h2>
            <div className="relative border-l-4 border-[#F54900] pl-6 text-left">
              {historyData.map((event, index) => (
                <div key={index} className="mb-10">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#F54900] p-3 rounded-full text-white shadow-lg">
                      <event.icon size={30} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {event.year}
                      </h3>
                      <h4 className="text-xl text-[#F54900]">{event.title}</h4>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-2 ml-14">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Team />
    </>
  );
}
