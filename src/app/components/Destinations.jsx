"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const destinations = [
  {
    title: "Alpine Retreat",
    description: "Escape to the serene Alpine Retreat.",
    image: "/deal5.jpg",
  },
  {
    title: "Azure Heights Haven",
    description: "Discover Azure Heights Haven, a perfect escape.",
    image: "/deal6.jpg",
  },
  {
    title: "Serene Riviera Retreat",
    description: "Serene Riviera Retreat offers tranquility & coastal beauty.",
    image: "/deal7.jpg",
  },
  {
    title: "Tranquil Haven",
    description: "Tranquil Haven for a serene escape.",
    image: "/deal8.jpg",
  },
];

export default function Destinations() {
  return (
    <section className="px-6 md:px-20 py-12 text-center ">
      {/* Header */}
      <p className="text-3xl text-orange-500 font-semibold uppercase tracking-wide">
        Best Destinations
      </p>
      <h2 className="text-2xl md:text-5xl font-bold mt-2">
        Discover Luxury with Push
      </h2>
      <p className="text-gray-600 mt-4 leading-relaxed max-w-2xl mx-auto">
        Explore a world where luxury and accessibility converge with Push.
        Curated destinations promise unforgettable experiences for every traveler.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            {/* Background Image */}
            <div className="relative w-full h-60 md:h-72">
              <Image
                src={destination.image}
                alt={destination.title}
                layout="fill"
                objectFit="cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-30 hover:opacity-40 transition duration-300"></div>
            </div>

            {/* Content */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg md:text-xl font-semibold">{destination.title}</h3>
              <p className="text-sm md:text-base">{destination.description}</p>
            </div>

            {/* Arrow Button */}
            <div className="absolute bottom-4 right-4 bg-orange-500 p-2 rounded-full text-white flex items-center justify-center hover:bg-orange-600 transition duration-300">
              <FaArrowRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


