"use client";
 import React from "react";
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
 
 const hotels = [
   {
     name: "Hotel Opera, New Delhi",
     image: "/hotel1.jpg",
   },
   {
     name: "Hotel Amar Yatri Niwas, Agra",
     image: "/hotel2.jpg",
   },
   {
     name: "Wall Street Beacon, Jaipur",
     image: "/hotel3.jpg",
   },
 ];
 
 export default function HotelsCarousel() {
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 1,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 2,
         },
       },
       {
         breakpoint: 640,
         settings: {
           slidesToShow: 1,
         },
       },
     ],
   };
 
   return (
     <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
       <h2 className="text-2xl font-bold text-gray-900 mb-2">Hotels</h2>
       <p className="text-gray-600 mb-4">
         Stays will be allocated based on availability or similar category
       </p>
       <Slider {...settings}>
         {hotels.map((hotel, index) => (
           <div key={index} className="p-2">
             <div className="rounded-lg overflow-hidden shadow-md">
               <img
                 src={hotel.image}
                 alt={hotel.name}
                 className="w-full h-48 object-cover"
               />
               <div className="p-3 bg-white text-center">
                 <p className="font-semibold text-gray-800">{hotel.name}</p>
               </div>
             </div>
           </div>
         ))}
       </Slider>
     </div>
   );
 }