"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Aarav Mehta",
    role: "Founder & CEO",
    bio: "Visionary trekker, passionate about creating unforgettable experiences in the Himalayas.",
    image: "/deal9.webp",
    linkedin: "https://linkedin.com/in/aaravmehta",
    twitter: "https://twitter.com/aaravmehta",
    instagram: "https://instagram.com/aaravmehta",
  },
  {
    name: "Priya Sharma",
    role: "Trek Lead",
    bio: "Certified mountaineer with a love for nature and guiding adventurers safely.",
    image: "/deal9.webp",
    linkedin: "https://linkedin.com/in/priyasharma",
    twitter: "https://twitter.com/priyasharma",
    instagram: "https://instagram.com/priyasharma",
  },
  {
    name: "Rohan Kapoor",
    role: "Operations Head",
    bio: "Manages logistics with precision and ensures every trek is smooth and safe.",
    image: "/deal9.webp",
    linkedin: "https://linkedin.com/in/rohankapoor",
    twitter: "https://twitter.com/rohankapoor",
    instagram: "https://instagram.com/rohankapoor",
  },
  {
    name: "Sneha Verma",
    role: "Marketing & Outreach",
    bio: "Crafts compelling campaigns to bring trekking adventures to the world.",
    image: "/deal9.webp",
    linkedin: "https://linkedin.com/in/snehaverma",
    twitter: "https://twitter.com/snehaverma",
    instagram: "https://instagram.com/snehaverma",
  },
];

const TeamCarousel = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-cover mt-12 bg-center h-[300px] flex items-center justify-center text-white text-center shadow-lg"
        style={{
          backgroundImage: "url('deal83.webp')",
        }}
      >
        <div className=" bg-opacity-50 p-12 rounded-xl">
          <h1 className="text-5xl text-gray-700 font-extrabold drop-shadow-lg">
            Meet Our Team
          </h1>
          {/* <h3 className="text-lg mt-4 font-light">
              Discover the Himalayas like never before—one step at a time.
            </h3> */}
          <h3 className="text-lg font-medium text-gray-700 mt-4 font-light">
            Meet the explorers who make every Himalayan step unforgettable.
          </h3>
        </div>
      </div>
      <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-white max-w-[1440px] mx-auto">
        {/* <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
        Meet Our Team
      </h2> */}

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl bg-white overflow-hidden shadow-lg flex flex-col h-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5 flex flex-col justify-between flex-grow text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-orange-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">{member.bio}</p>

                  <div className="flex justify-center gap-4 text-xl text-gray-500">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="hover:text-blue-600 transition" />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="hover:text-sky-500 transition" />
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="hover:text-pink-500 transition" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default TeamCarousel;
