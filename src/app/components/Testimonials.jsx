
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah L',
    role: 'Traveler',
    quote:
      'A terrific piece of praise”.',
    image: '/deal9.jpg',
  },
  {
    name: 'Emily K',
    role: 'Traveler',
    quote:
      'A terrific piece of praise”.',
    image: '/deal9.jpg',
  },
  {
    name: 'James M',
    role: 'Traveler',
    quote:
      "A genuinely glowing review.",
    image: '/deal9.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 md:px-20 py-12 text-center bg-gray-50">
      {/* Header */}
      {/* <p className="text-3xl text-[#FF6900] font-semibold uppercase tracking-wide">
        Testimonial
      </p> */}
      <h2 className="text-2xl md:text-5xl font-bold mt-2 text-gray-900">
      Trekkers Review - Real Mountain Treking experience
      </h2>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 text-center max-w-sm mx-auto">
              {/* Quote Icon */}
              <FaQuoteLeft className="text-[#F54900] text-4xl mb-3 mx-auto" />
              {/* Quote Text */}
              <p className="text-gray-700 italic">{testimonial.quote}</p>

              {/* Profile Section */}
              <div className="mt-4 flex flex-col items-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#F54900]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-1 text-gray-900">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

