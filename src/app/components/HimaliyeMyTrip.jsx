"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { MdOutlineLocalPhone } from "react-icons/md";
import { useRouter } from "next/navigation";

const tourPackages = [
  {
    title: "Gulabi Kantha Trek Package",
    nights: 5,
    days: 6,
    price: "17,500",
    discount: "15%",
    tag: "Seasonal Monsoon Trek",
    image: "/deal47.webp",
    link: "/GulabiKantha",
  },
  {
    title: "Brahmatal Winter Trek",
    nights: 4,
    days: 5,
    price: "13,500",
    discount: "15%",
    tag: "Winter Special Trek",
    image: "/deal6.webp",
    link: "/Bramtal",
  },
  {
    title: "Valley of Flowers Trek Package",
    nights: 5,
    days: 6,
    price: "14,000",
    discount: "15%",
    tag: "Summer Bloom Trek",
    image: "/deal48.webp",
    link: "/Valleyflowers",
  },
  {
    title: "Nag Tibba Weekend Trek",
    nights: 2,
    days: 3,
    price: "7,500",
    discount: "15%",
    tag: "All Season Weekend Trek",
    image: "/deal50.webp",
    link: "/NagTibba",
  },
];

const HimaliyeMyTripCarousel = () => {
  const router = useRouter();

  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 bg-white max-w-[1440px] mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        Check our Seasonal Treks
      </h2>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {tourPackages.map((tour, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-2xl bg-white overflow-hidden shadow-md flex flex-col h-full">
              <Link href={tour.link}>
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover"
                />
              </Link>

              <div className="p-4 flex flex-col justify-between flex-grow">
                <div className="mb-2 flex items-center justify-between text-sm text-gray-500">
                  <span>
                    {tour.nights} Nights – {tour.days} Days
                  </span>
                  <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    {tour.tag}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {tour.title}
                </h3>

                <div className="flex items-center justify-between mb-4">
                  <p className="text-orange-600 font-bold text-base">
                    Starting From ₹ {tour.price}
                  </p>
                  <span className="inline-block text-[10px] font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">
                    SAVE UPTO {tour.discount}
                  </span>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row gap-2 sm:items-center">
                  <button
                    type="button"
                    className="border border-orange-500 text-orange-500 p-2 rounded-full flex items-center justify-center w-full sm:w-auto"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "tel:+911234567890";
                    }}
                  >
                    <MdOutlineLocalPhone className="text-xl" />
                  </button>
                  <button
                    onClick={() => router.push(tour.link)}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full w-full sm:w-auto"
                  >
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HimaliyeMyTripCarousel;
