import React from "react";
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
    <div className="">
      {/* Hero Section */}
      <div
        className="bg-cover mt-20 bg-center h-[300px] flex items-center justify-center text-white text-center shadow-lg"
        style={{
          backgroundImage: "url('deal10.jpg')",
        }}
      >
        <div className=" bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">About Us</h1>
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
      <div className="flex flex-col  lg:flex-row justify-between items-center py-16 px-2 sm:px-12 lg:px-20 gap-12 sm:gap-20">
        {/* Left Section */}
        <div className="lg:w-[60%] text-center  lg:text-left">
          <h1 className="font-bold flex gap-2 flex-col mt-2 items-center sm:items-end sm:flex-row  py-4 text-6xl md:text-5xl text-blue-400"></h1>

          <p className="text-xl ml-1.5 text-[#F54900] font-semibold">
            About Himalayan Trekking
          </p>
          <div className=" sm:mt-5  text-gray-600 space-y-8 sm:border-t-1">
            {/* Paragraph 1 */}
            <div className="p-2  rounded-lg ">
              <p className="text-base  sm:text-[16px] sm:block ">
                At Himalayan Trekking, we are passionate about exploring the
                grandeur of the Himalayas and bringing unforgettable trekking
                experiences to adventurers across the world. Our journey is
                driven by the love for nature, adventure, and the thrill of
                discovering remote and breathtaking landscapes. With a deep
                understanding of the Himalayan terrain, we specialize in
                curating treks that cater to beginners, seasoned trekkers, and
                extreme adventurers. Whether you seek a serene walk through lush
                valleys or a challenging ascent to snow-covered peaks, we ensure
                that every expedition is safe, memorable, and enriching. When
                humans set their feet and eyes on the Himalaya, it is a romantic
                meeting between the Earth´s youngest species and the earth´s
                youngest mountain. As the Himalayan mountains have developed on
                Earth, the evolution of humans has also been accompanied by the
                making of an inner Himalaya. Every human has a Himalaya within
                himself or herself. It is the peak of human potential and
                challenge as well as a place of silence and peace. Our Journey
                started in the humble roots & persistent efforts of an authentic
                mountain trek leader, Bachan Rana, who founded Himalaya Shelter
                in 2013.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full pt-16 lg:w-[49%] flex justify-center lg:justify-end">
          <Image
            src="/deal12.jpg"
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
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
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
                <p className="text-gray-700 mt-2 ml-14">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
