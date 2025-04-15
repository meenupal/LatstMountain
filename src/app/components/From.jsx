// "use client";

// import { useState, useEffect } from "react";
// import {
//   FaSearch,
//   FaCalendarAlt,
//   FaMapMarkerAlt,
//   FaWhatsapp,
// } from "react-icons/fa";

// export default function Form() {
//   const [location, setLocation] = useState("");
//   const [date, setDate] = useState("");
//   const [checkout, setCheckout] = useState("");
//   const [currentImage, setCurrentImage] = useState(0);

//   // Background images for carousel
//   const images = ["/deal2.jpg", "/deal4.jpg", "/deal5.jpg"];

//   // Change background image every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className="relative w-full h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
//       style={{ backgroundImage: `url(${images[currentImage]})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       {/* Content */}
//       <div className="relative flex flex-col justify-center items-center text-center text-white h-full px-6 mt-12">
//         <h1 className="text-3xl md:text-5xl font-bold py-2">
//           ADVENTUROUS TREK
//         </h1>
//         <p className="text-base md:text-lg py-2 ">
//           Explore Stunning Hiking Trails in India
//         </p>

//         {/* Search Form */}
//         <div className="bg-white text-gray-700  p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center w-full max-w-lg md:max-w-3xl">
//           {/* Location Input */}
//           <div className="flex items-center border-b md:border-b-0 md:border-r px-4 py-3 w-full">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               placeholder="Where are you going?"
//               className="w-full outline-none bg-transparent text-sm md:text-base px-2 py-2 border border-gray-300 rounded-md"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//             />
//           </div>

//           {/* Date Input */}
//           <div className="flex items-center border-b md:border-b-0 md:border-r px-4 py-3 w-full">
//             <FaCalendarAlt className="text-gray-500 mr-2" />
//             <input
//               type="date"
//               className="w-full outline-none bg-transparent text-sm md:text-base px-2 py-2 border border-gray-300 rounded-md"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>

//           {/* Check-out Input */}
//           <div className="flex items-center px-4 py-3 w-full">
//             <FaCalendarAlt className="text-gray-500 mr-2" />
//             <input
//               type="date"
//               className="w-full outline-none bg-transparent text-sm md:text-base px-2 py-2 border border-gray-300 rounded-md"
//               value={checkout}
//               onChange={(e) => setCheckout(e.target.value)}
//             />
//           </div>

//           {/* Search Button */}
//           <a href="https://wa.me/8868857038" target="_blank">
//             <button className="bg-orange-500 text-white px-8 py-3 rounded-md mt-4 md:mt-0 md:ml-4 flex items-center justify-center w-full md:w-auto text-sm md:text-base font-medium hover:bg-orange-600 transition duration-200">
//               <p className="mr-2" /> Send
//             </button>
//           </a>
//         </div>
//       </div>

//       {/* Floating WhatsApp Button */}
//       <a
//         href="https://wa.me/yourwhatsapplink"
//         target="_blank"
//         className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center hover:bg-green-600 transition duration-200 z-50"
//       >
//         <FaWhatsapp size={24} />
//         <span className="ml-2 hidden md:block">Need Help?</span>
//       </a>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import {
//   FaCalendarAlt,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// export default function Form() {
//   const [location, setLocation] = useState("");
//   const [date, setDate] = useState("");
//   const [checkout, setCheckout] = useState("");
//   const [currentImage, setCurrentImage] = useState(0);

//   const slides = [
//     {
//       image: "/deal2.jpg",
//       title: "ADVENTUROUS TREK",
//       subtitle: "Explore Stunning Hiking Trails in India",
//     },
//     {
//       image: "/deal4.jpg",
//       title: "MOUNTAIN ESCAPE",
//       subtitle: "Breathe the fresh mountain air",
//     },
//     {
//       image: "/deal5.jpg",
//       title: "WILDERNESS RETREAT",
//       subtitle: "Reconnect with nature on a thrilling trek",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className="relative w-full h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
//       style={{ backgroundImage: `url(${slides[currentImage].image})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       {/* Content */}
//       <div
//         className="relative flex flex-col justify-start items-center text-center text-white h-full px-6"
//         style={{ paddingTop: "26rem" }}
//       >
//         {/* Title & Subtitle */}
//         <div className="mb-6">
//           <h1 className="text-3xl md:text-5xl font-bold py-2">
//             {slides[currentImage].title}
//           </h1>
//           <p className="text-base md:text-lg py-2">
//             {slides[currentImage].subtitle}
//           </p>
//         </div>

//         {/* Search Form */}
//         <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center w-full max-w-lg md:max-w-3xl">
//           {/* Location Input */}
//           <div className="flex items-center border-b md:border-b-0 md:border-r px-4 py-3 w-full">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               placeholder="Where are you going?"
//               className="w-full outline-none bg-transparent text-sm md:text-base px-2 py-2 border border-gray-300 rounded-md"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//             />
//           </div>

//           {/* Date Input */}
//           <div className="flex items-center border-b md:border-b-0 md:border-r px-4 py-3 w-full">
//             <FaCalendarAlt className="text-gray-500 mr-2" />
//             <input
//               type="date"
//               className="w-full outline-none bg-transparent text-sm md:text-base px-2 py-2 border border-gray-300 rounded-md"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>

//           {/* Check-out Input */}
//           <div className="flex items-center px-4 py-3 w-full">
//             <FaCalendarAlt className="text-gray-500 mr-2" />
//             <input
//               type="date"
//               className="w-full outline-none bg-transparent text-sm md:text-base px-2 py-2 border border-gray-300 rounded-md"
//               value={checkout}
//               onChange={(e) => setCheckout(e.target.value)}
//             />
//           </div>

//           {/* Send Button */}
//           <a href="https://wa.me/8868857038" target="_blank">
//             <button className="bg-orange-500 text-white px-8 py-3 rounded-md mt-4 md:mt-0 md:ml-4 flex items-center justify-center w-full md:w-auto text-sm md:text-base font-medium hover:bg-orange-600 transition duration-200">
//               Send
//             </button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Form() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [checkout, setCheckout] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  const slides = [
    {
      image: "/deal2.jpg",
      title: "ADVENTUROUS TREK",
      subtitle: "Explore Stunning Hiking Trails in India",
    },
    {
      image: "/deal4.jpg",
      title: "MOUNTAIN ESCAPE",
      subtitle: "Breathe the fresh mountain air",
    },
    {
      image: "/deal5.jpg",
      title: "WILDERNESS RETREAT",
      subtitle: "Reconnect with nature on a thrilling trek",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${slides[currentImage].image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div
        className="relative flex flex-col justify-start items-center text-center text-white h-full px-6"
        style={{ paddingTop: "24rem" }}
      >
        {/* Title & Subtitle */}
        <div className="mb-4">
          <h1 className="text-3xl md:text-5xl font-bold py-1">
            {slides[currentImage].title}
          </h1>
          <p className="text-base md:text-lg py-1">
            {slides[currentImage].subtitle}
          </p>
        </div>

        {/* Search Form */}
        {/* Search Form */}
          <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center w-full max-w-lg md:max-w-4xl">
            {/* <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center w-full max-w-lg md:max-w-3xl"> */}
            {/* Location Input */}
            <div className="flex items-center border-b md:border-b-0 md:border-r px-4 py-3 w-full">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full outline-none bg-transparent text-sm md:text-base px-2 py-2 border border-gray-300 rounded-md"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Date Input */}
            <div className="flex items-center border-b md:border-b-0 md:border-r px-4 py-3 w-full">
              <FaCalendarAlt className="text-gray-700 mr-2" />
              <input
                type="date"
                className="w-full outline-none bg-transparent text-sm md:text-base px-2 py-2 border border-gray-300 rounded-md"
                placeholder="Check IN"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* Check-out Input */}
            <div className="relative flex items-center px-4 py-3 w-full">
  <FaCalendarAlt className="text-gray-500 mr-2" />
  <div className="relative w-full">
    {/* Fake Placeholder */}
    {!checkout && (
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
        Check OUT
      </span>
    )}
    <input
      type="date"
      className="w-full outline-none bg-transparent text-sm md:text-base px-3 py-2 border border-gray-300 rounded-md relative z-10"
      value={checkout}
      onChange={(e) => setCheckout(e.target.value)}
    />
  </div>
</div>

          {/* Send Button */}
          <a href="https://wa.me/1234567891" target="_blank">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-md mt-4 md:mt-0 md:ml-4 flex items-center justify-center w-full md:w-auto text-sm md:text-base font-medium hover:bg-orange-600 transition duration-200">
              Send
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

// export default function Form() {
//   const [location, setLocation] = useState("");
//   const [date, setDate] = useState("");
//   const [checkout, setCheckout] = useState("");
//   const [currentImage, setCurrentImage] = useState(0);

//   const slides = [
//     {
//       image: "/deal2.jpg",
//       title: "ADVENTUROUS TREK",
//       subtitle: "Explore Stunning Hiking Trails in India",
//     },
//     {
//       image: "/deal4.jpg",
//       title: "MOUNTAIN ESCAPE",
//       subtitle: "Breathe the fresh mountain air",
//     },
//     {
//       image: "/deal5.jpg",
//       title: "WILDERNESS RETREAT",
//       subtitle: "Reconnect with nature on a thrilling trek",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className="relative w-full h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
//       style={{ backgroundImage: `url(${slides[currentImage].image})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       {/* Content */}
//       <div
//         className="relative flex flex-col justify-start items-center text-center text-white h-full px-6"
//         style={{ paddingTop: "22rem" }}
//       >
//         {/* Title & Subtitle */}
//         <div className="mb-4">
//           <h1 className="text-3xl md:text-5xl font-bold py-1">
//             {slides[currentImage].title}
//           </h1>
//           <p className="text-base md:text-lg py-1">
//             {slides[currentImage].subtitle}
//           </p>
//         </div>

//         {/* Search Form */}
//         <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center w-full max-w-lg md:max-w-3xl space-y-3 md:space-y-0 md:space-x-4">
//           {/* Location Input */}
//           <div className="flex items-center w-full space-x-2">
//             <FaMapMarkerAlt className="text-gray-500" />
//             <input
//               type="text"
//               placeholder="Where are you going?"
//               className="w-full outline-none bg-transparent text-sm md:text-base px-3 py-2 border border-gray-300 rounded-md"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//             />
//           </div>

//           {/* Check-in Input */}
//           <div className="flex items-center w-full space-x-2">
//             <FaCalendarAlt className="text-gray-500" />
//             <input
//               type="date"
//               placeholder="Check-in"
//               className="w-full outline-none bg-transparent text-sm md:text-base px-3 py-2 border border-gray-300 rounded-md"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>

//           {/* Check-out Input */}
//           <div className="flex items-center w-full space-x-2">
//             <FaCalendarAlt className="text-gray-500" />
//             <input
//               type="date"
//               placeholder="Check-out"
//               className="w-full outline-none bg-transparent text-sm md:text-base px-3 py-2 border border-gray-300 rounded-md"
//               value={checkout}
//               onChange={(e) => setCheckout(e.target.value)}
//             />
//           </div>

//           {/* Send Button */}
//           <a href="https://wa.me/8868857038" target="_blank" className="w-full md:w-auto">
//             <button className="bg-orange-500 text-white w-full md:w-auto px-6 py-3 rounded-md text-sm md:text-base font-medium hover:bg-orange-600 transition duration-200">
//               Send
//             </button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
