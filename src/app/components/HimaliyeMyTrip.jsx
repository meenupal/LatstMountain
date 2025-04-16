// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { MdOutlineLocalPhone, MdFavoriteBorder } from "react-icons/md";

// const tourPackages = [
//   {
//     title: "Coorg Tour Package from Bangalore",
//     nights: 2,
//     days: 3,
//     price: "22,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal27.jpg",
//   },
  // {
  //   title: "Uttarakhand Trail | Mussoorie",
  //   nights: 4,
  //   days: 5,
  //   price: "16,000",
  //   discount: "15%",
  //   tag: "Monsoon Sale!",
  //   image: "/deal5.jpg",
  // },
  // {
  //   title: "Auli Rishikesh Tour From Delhi Jaipur",
  //   nights: 5,
  //   days: 6,
  //   price: "18,000",
  //   discount: "15%",
  //   tag: "Monsoon Sale!",
  //   image: "/deal23.jpg",
  // },
  // {
  //   title: "Auli Rishikesh Tour From Delhi Jaipur",
  //   nights: 5,
  //   days: 6,
  //   price: "20,000",
  //   discount: "15%",
  //   tag: "Monsoon Sale!",
  //   image: "/deal23.jpg",
  // },
  // {
  //   title: "Coorg Tour Package from Bangalore",
  //   nights: 2,
  //   days: 3,
  //   price: "23,000",
  //   discount: "15%",
  //   tag: "Monsoon Sale!",
  //   image: "/deal24.jpg",
  // },
  // {
  //   title: "Uttarakhand Trail | Mussoorie",
  //   nights: 4,
  //   days: 5,
  //   price: "16,000",
  //   discount: "15%",
  //   tag: "Monsoon Sale!",
  //   image: "/deal21.jpg",
  // },
  // {
  //   title: "Auli Rishikesh Tour From Delhi Jaipur",
  //   nights: 5,
  //   days: 6,
  //   price: "18,000",
  //   discount: "15%",
  //   tag: "Monsoon Sale!",
  //   image: "/deal22.jpg",
  // },
//   {
//     title: "Uttarakhand Trail | Mussoorie",
//     nights: 4,
//     days: 5,
//     price: "16,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal6.jpg",
//   },
//   {
//     title: "Auli Rishikesh Tour From Delhi Jaipur",
//     nights: 5,
//     days: 6,
//     price: "18,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal14.jpg",
//   },
//   {
//     title: "Coorg Tour Package from Bangalore",
//     nights: 2,
//     days: 3,
//     price: "25,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal24.jpg",
//   },
//   {
//     title: "Uttarakhand Trail | Mussoorie",
//     nights: 4,
//     days: 5,
//     price: "16,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal27.jpg",
//   },
//   {
//     title: "Auli Rishikesh Tour From Delhi Jaipur",
//     nights: 5,
//     days: 6,
//     price: "18,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal28.jpg",
//   },
//   {
//     title: "Uttarakhand Trail | Mussoorie",
//     nights: 4,
//     days: 5,
//     price: "16,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal29.jpg",
//   },
//   // ... add more packages as needed
// ];

// export default function HimaliyeMyTripCarousel() {
//   return (
//     <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 bg-white md:mx-24">
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
//         Check our Upcoming Treks
//       </h2>

//       <Swiper
//         modules={[Navigation]}
//         navigation
//         spaceBetween={20}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//           1280: { slidesPerView: 3 },
//         }}
//       >
//         {tourPackages.map((tour, index) => (
//           <SwiperSlide key={index}>
//             <div className="rounded-xl  shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
//               <img
//                 src={tour.image}
//                 alt={tour.title}
//                 className="w-full h-56 sm:h-64 md:h-72 object-cover"
//               />
//               <div className="p-4 flex flex-col justify-between h-full">
//                 {/* Tour details */}
//                 <div className="mb-2 flex items-center justify-between text-sm text-gray-500">
//                   <span>
//                     {tour.nights} Nights – {tour.days} Days
//                   </span>
//                   <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
//                     {tour.tag}
//                   </span>
//                 </div>

//                 {/* Tour title */}
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                   {tour.title}
//                 </h3>

//                 {/* Price + Save Row */}
//                 <div className="flex items-center justify-between mb-2 px-[2px]">
//                   <p className="text-orange-600 font-bold text-base pr-[18px]">
//                     Starting From ₹ {tour.price}
//                   </p>
//                   <button
//                     className="text-sm flex items-center gap-1 text-orange-500 hover:text-orange-600 transition pl-[18px]"
//                     title="Save this tour"
//                   >
//                     {/* <MdFavoriteBorder className="text-lg" /> */}
//                     <span className="inline-block text-[9px] font-semibold bg-green-100 text-green-700 px-1 py-1 rounded mb-2 mx-[18px]">
//                       SAVE UPTO {tour.discount}
//                     </span>
//                   </button>
//                 </div>

//                 {/* Discount Badge */}
//                 {/* <span className="inline-block text-xs bg-green-100 text-green-700 px-3 py-1 rounded mb-3 mx-[18px]">
//                   SAVE UPTO {tour.discount}
//                 </span> */}

//                 {/* Call and Explore Buttons */}
//                 <div className="mt-auto flex flex-col sm:flex-row gap-2 sm:items-center">
//                   <button className="border border-orange-500 text-orange-500 p-2 rounded-full flex items-center justify-center w-full sm:w-auto">
//                     <MdOutlineLocalPhone />
//                   </button>
//                   <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-2 py-2 rounded-full w-full sm:w-auto">
//                     Explore Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }


// "use client";

// import React from "react";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import { MdOutlineLocalPhone } from "react-icons/md";

// const tourPackages = [

//   {
//     title: "Coorg Tour Package from Bangalore",
//     nights: 2,
//     days: 3,
//     price: "22,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal27.jpg",
//     link: "/GulabiKantha",
//   },
//   {
//     title: "Uttarakhand Trail | Mussoorie",
//     nights: 4,
//     days: 5,
//     price: "16,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal12.jpg",
//     link: "/CharDham",
//   },
//   {
//     title: "Auli Rishikesh Tour From Delhi Jaipur",
//     nights: 5,
//     days: 6,
//     price: "18,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal23.jpg",
//     link: "/GulabiKantha",
//   },
//   {
//     title: "Coorg Tour Package from Bangalore",
//     nights: 2,
//     days: 3,
//     price: "22,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal27.jpg",
//     link: "/CharDham",
//   },
//   {
//     title: "Uttarakhand Trail | Mussoorie",
//     nights: 4,
//     days: 5,
//     price: "16,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal12.jpg",
//     link: "/GulabiKantha",
//   },
//   {
//     title: "Auli Rishikesh Tour From Delhi Jaipur",
//     nights: 5,
//     days: 6,
//     price: "18,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal23.jpg",
//     link: "/CharDham",
//   },
//   // Repeat or add more with appropriate links
// ];

// const HimaliyeMyTripCarousel = () => {
//   return (
//     <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 bg-white md:mx-24">
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
//         Check our Upcoming Treks
//       </h2>

//       <Swiper
//         modules={[Autoplay]}
//         loop={true}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         spaceBetween={20}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {tourPackages.map((tour, index) => (
//           <SwiperSlide key={index}>
//             <Link href={tour.link}>
//               <div className="group rounded-2xl bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer h-full flex flex-col">
//                 <img
//                   src={tour.image}
//                   alt={tour.title}
//                   className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="p-4 flex flex-col justify-between flex-grow">
//                   <div className="mb-2 flex items-center justify-between text-sm text-gray-500">
//                     <span>
//                       {tour.nights} Nights – {tour.days} Days
//                     </span>
//                     <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
//                       {tour.tag}
//                     </span>
//                   </div>

//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                     {tour.title}
//                   </h3>

//                   <div className="flex items-center justify-between mb-4">
//                     <p className="text-orange-600 font-bold text-base">
//                       Starting From ₹ {tour.price}
//                     </p>
//                     <span className="inline-block text-[10px] font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">
//                       SAVE UPTO {tour.discount}
//                     </span>
//                   </div>

//                   <div className="mt-auto flex flex-col sm:flex-row gap-2 sm:items-center">
//                     <button
//                       type="button"
//                       className="border border-orange-500 text-orange-500 p-2 rounded-full flex items-center justify-center w-full sm:w-auto"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         window.location.href = "tel:+911234567890"; // update phone number
//                       }}
//                     >
//                       <MdOutlineLocalPhone className="text-xl" />
//                     </button>
//                     <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full w-full sm:w-auto">
//                       Explore Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default HimaliyeMyTripCarousel;


// "use client";

// import Image from "next/image";
// import React from "react";

// const galleryImages = [
//   { src: "/eco-park.jpg", alt: "Eco Park Dhanaulti" },
//   { src: "/kanatal-view.jpg", alt: "Kanatal Hill View" },
//   { src: "/river-valley.jpg", alt: "River Valley" },
//   { src: "/snow-forest.jpg", alt: "Snow Forest" },
// ];

// const KanatalGallery = () => {
//   return (
//     <div className="relative">
//       {/* Sticky Book Now Button */}
//       <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
//         <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold rounded-l-md rotate-90 origin-bottom-right">
//           Book Now
//         </button>
//       </div>

//       {/* Image Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
//         {galleryImages.map((img, index) => (
//           <div key={index} className="relative w-full h-64 sm:h-72 md:h-80">
//             <Image
//               src={img.src}
//               alt={img.alt}
//               layout="fill"
//               objectFit="cover"
//               className="rounded-none"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Gradient Title Section */}
//       <div className="bg-gradient-to-r from-gray-700 to-gray-300 py-10 px-4 text-center">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
//           Kanatal and Dhanaulti Day Tour
//         </h1>
//       </div>

//       {/* Optional Social Media Buttons */}
//       <div className="fixed left-0 top-1/3 z-50 flex flex-col gap-2">
//         <a
//           href="https://facebook.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-600 p-2"
//         >
//           <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
//         </a>
//         <a
//           href="https://instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-pink-600 p-2"
//         >
//           <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
//         </a>
//         <a
//           href="https://wa.me/your-number"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-green-500 p-2"
//         >
//           <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default KanatalGallery;





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
      tag: "Monsoon Sale!",
      image: "/deal47.jpg",
      link: "/GulabiKantha",
    },
    {
      title: "Vinayak Top Adventure Tour",
      nights: 4,
      days: 5,
      price: "14,000",
      discount: "15%",
      tag: "Monsoon Sale!",
      image: "/deal15.jpg",
      link: "/VinayakTrek",
    },
    {
      title: "Kedarkantha Trek from Sankri",
      nights: 5,
      days: 6,
      price: "15,500",
      discount: "15%",
      tag: "Monsoon Sale!",
      image: "/deal36.jpg",
      link: "/Kedarkantha",
    },
    {
      title: "Har Ki Dun Valley Expedition",
      nights: 6,
      days: 7,
      price: "16,000",
      discount: "15%",
      tag: "Monsoon Sale!",
      image: "/deal46.jpg",
      link: "/Hariki",
    },
    {
      title: "Bali Pass Trek Adventure",
      nights: 7,
      days: 8,
      price: "19,000",
      discount: "15%",
      tag: "Monsoon Sale!",
      image: "/deal64.jpg",
      link: "/Balipass",
    },
    {
      title: "Brahmatal Winter Trek",
      nights: 4,
      days: 5,
      price: "13,500",
      discount: "15%",
      tag: "Monsoon Sale!",
      image: "/deal6.jpg",
      link: "/Bramtal",
    },
    {
      title: "Kuari Pass Trek Journey",
      nights: 5,
      days: 6,
      price: "14,800",
      discount: "15%",
      tag: "Monsoon Sale!",
      image: "/deal43.jpg",
      link: "/Kuaripass",
    },
    {
      title: "Char Dham Yatra 2025",
      nights: 9,
      days: 10,
      price: "25,000",
      discount: "15%",
      tag: "Monsoon Sale!",
      image: "/deal40.jpg",
      link: "/CharDham",
    },
    {
      title: "Chopta Tungnath Chandrashila Trek",
      nights: 3,
      days: 4,
      price: "10,500",
      discount: "15%",
      tag: "Monsoon Sale!",
      image: "/deal44.jpg",
      link: "/Chopta",
    },
    {
      title: "Valley of Flowers Trek Package",
      nights: 5,
      days: 6,
      price: "14,000",
      discount: "15%",
      tag: "Monsoon Sale!",
      image: "/deal48.jpg",
      link: "/Valleyflowers",
    },
    {
      title: "Dodital Lake Winter Trek",
      nights: 4,
      days: 5,
      price: "13,000",
      discount: "15%",
      tag: "Monsoon Sale!",
      image: "/deal49.jpg",
      link: "/Dodital",
    },
    {
      title: "Chandrashila Peak Trek Package",
      nights: 3,
      days: 4,
      price: "11,000",
      discount: "15%",
      tag: "Monsoon Sale!",
      image: "/deal12.jpg",
      link: "/Chandrashila",
    },
    {
      title: "Pindari Glacier Trek",
      nights: 6,
      days: 7,
      price: "18,500",
      discount: "15%",
      tag: "Monsoon Sale!",
      image: "/deal41.jpg",
      link: "/Pindari",
    },
    {
      title: "Nag Tibba Weekend Trek",
      nights: 2,
      days: 3,
      price: "7,500",
      discount: "15%",
      tag: "Monsoon Sale!",
      image: "/deal50.jpg",
      link: "/NagTibba",
    },
  
  
  // {
  //   title: "Coorg Tour Package from Bangalore",
  //   nights: 2,
  //   days: 3,
  //   price: "22,000",
  //   discount: "15%",
  //   tag: "Monsoon Sale!",
  //   image: "/deal27.jpg",
  //   link: "/GulabiKantha",
  // },
  // {
  //   title: "Uttarakhand Trail | Mussoorie",
  //   nights: 4,
  //   days: 5,
  //   price: "16,000",
  //   discount: "15%",
  //   tag: "Monsoon Sale!",
  //   image: "/deal12.jpg",
  //   link: "/CharDham",
  // },
  // {
  //   title: "Auli Rishikesh Tour From Delhi Jaipur",
  //   nights: 5,
  //   days: 6,
  //   price: "18,000",
  //   discount: "15%",
  //   tag: "Monsoon Sale!",
  //   image: "/deal23.jpg",
  //   link: "/GulabiKantha",
  // },
  // {
  //   title: "Coorg Tour Package from Bangalore",
  //   nights: 2,
  //   days: 3,
  //   price: "10,000",
  //   discount: "15%",
  //   tag: "Monsoon Sale!",
  //   image: "/deal27.jpg",
  //   link: "/Bramtal",
  // },
  // {
  //   title: "Uttarakhand Trail | Mussoorie",
  //   nights: 4,
  //   days: 5,
  //   price: "8,000",
  //   discount: "15%",
  //   tag: "Monsoon Sale!",
  //   image: "/deal12.jpg",
  //   link: "/Chopta",
  // },
  // {
  //   title: "Auli Rishikesh Tour From Delhi Jaipur",
  //   nights: 5,
  //   days: 6,
  //   price: "18,000",
  //   discount: "15%",
  //   tag: "Monsoon Sale!",
  //   image: "/deal23.jpg",
  //   link:  "/choptatungnath",
  // },
];

const HimaliyeMyTripCarousel = () => {
  const router = useRouter();

  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 bg-white md:mx-24">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        Check our Upcoming Treks
      </h2>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {tourPackages.map((tour, index) => (
          <SwiperSlide key={index}>
            <div className="group rounded-2xl bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer h-full flex flex-col">
              <Link href={tour.link}>
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>

              <div className="p-4 flex flex-col justify-between flex-grow">
                <div className="mb-2 flex items-center justify-between text-sm text-gray-500">
                  <span>
                    {tour.nights} Nights – {tour.days} Days
                  </span>
                  <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
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





