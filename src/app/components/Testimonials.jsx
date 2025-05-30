"use client";

import { useState } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import {
  PiBackpackFill,
  PiMapPinFill,
  PiBootFill,
  PiMapTrifoldFill,
} from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

// Testimonial Data
const testimonials = [
  {
    name: "Lenny Dotson",
    role: "Hiker",
    image: "/deal9.webp", // Place in /public
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    name: "Emma Collins",
    role: "Backpacker",
    image: "/deal9.webp",
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    name: "Marcus Lee",
    role: "Trail Explorer",
    image: "/deal9.webp",
    quote:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    name: "mahi grover",
    role: "Backpacker",
    image: "/deal9.webp",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="bg-white px-6 py-4 md:py-8 lg:py-12 text-gray-800 overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wider relative inline-block">
          {/* <span className="absolute text-6xl md:text-5xl opacity-10 top-[-20px] left-1/2 transform -translate-x-1/2 z-0">
            Testimonials
          </span> */}
          <p className="text-3xl text-orange-500 font-semibold uppercase tracking-wide">
            Testimonials
          </p>
          <span className="text-[#393849] relative z-10">
            What They Say About MountainMyTrip
          </span>
          {/* <span className="absolute text-6xl md:text-5xl opacity-10 top-[-20px] left-1/2 transform -translate-x-1/2 z-0">
            Testimonials
          </span> */}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          See what our adventurers are saying about their experiences
        </p>
      </div>

      {/* Testimonial Slider */}
      <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-md p-6 md:p-10 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="relative">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={120}
                height={120}
                className="rounded-full object-cover"
              />
              <div className="absolute -top-2 -right-2 bg-orange-500 text-white p-2 rounded-full">
                <FaQuoteLeft />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="italic text-lg text-gray-700 mb-4">
                {testimonial.quote}
              </p>
              <div className="flex justify-center md:justify-start text-orange-400 mb-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
              <div>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 left-4 md:left-6 cursor-pointer text-gray-400 hover:text-orange-500 text-xl"
          onClick={prevSlide}
        >
          ‹
        </div>
        <div
          className="absolute top-1/2 transform -translate-y-1/2 right-4 md:right-6 cursor-pointer text-gray-400 hover:text-orange-500 text-xl"
          onClick={nextSlide}
        >
          ›
        </div>
      </div>

      {/* Achievements */}
      <div className="grid grid-cols-2 md:grid-cols-4 md:px-12 md:mt-[77px] text-center mt-12">
        <div>
          <PiBackpackFill className="text-orange-500 text-4xl mx-auto mb-2" />
          <h3 className="text-2xl font-bold">
            15<span className="text-orange-500">+</span>
          </h3>
          <p className="text-gray-500">Years Of Experiences</p>
        </div>
        <div>
          <PiMapPinFill className="text-orange-500 text-4xl mx-auto mb-2" />
          <h3 className="text-2xl font-bold">
            60<span className="text-orange-500">+</span>
          </h3>
          <p className="text-gray-500">Best Destinations</p>
        </div>
        <div>
          <PiBootFill className="text-orange-500 text-4xl mx-auto mb-2" />
          <h3 className="text-2xl font-bold">
            3,210<span className="text-orange-500">+</span>
          </h3>
          <p className="text-gray-500">Satisfied Hikers</p>
        </div>
        <div>
          <PiMapTrifoldFill className="text-orange-500 text-4xl mx-auto mb-2" />
          <h3 className="text-2xl font-bold">
            30<span className="text-orange-500">+</span>
          </h3>
          <p className="text-gray-500">Certified Guides</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
