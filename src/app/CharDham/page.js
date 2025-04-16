

// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import {
//   FaRegClock,
//   FaUsers,
//   FaUndo,
//   FaChevronDown,
//   FaChevronUp,
// } from "react-icons/fa";
// import HimaliyeMyTripCarousel from "../components/HimaliyeMyTrip";

// // const destinations = [
// //   { name: "", src: "/deal26.jpg", gridClass: "lg:col-span-2" },
// //   { name: "", src: "/deal22.jpg" },
// //   { name: "", src: "/deal12.jpg" },
// //   { name: "", src: "/deal6.jpg", gridClass: "lg:row-span-2" },
// //   { name: "", src: "/deal14.jpg" },
// //   { name: "", src: "/deal23.jpg" },
// //   { name: "", src: "/deal15.jpg" },
// // ];
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";

// const galleryImages = [
//   { src: "/deal12.jpg", alt: "Eco Park Dhanaulti" },
//   { src: "/deal29.jpg", alt: "Kanatal Hill View" },
//   { src: "/deal32.jpg", alt: "River Valley" },
//   { src: "/deal14.jpg", alt: "Snow Forest" },
//   { src: "/deal12.jpg", alt: "Eco Park Dhanaulti" },
//   { src: "/deal29.jpg", alt: "Kanatal Hill View" },
//   { src: "/deal32.jpg", alt: "River Valley" },
//   { src: "/deal14.jpg", alt: "Snow Forest" },
//   { src: "/deal12.jpg", alt: "Eco Park Dhanaulti" },
//   { src: "/deal29.jpg", alt: "Kanatal Hill View" },
//   { src: "/deal32.jpg", alt: "River Valley" },
//   { src: "/deal14.jpg", alt: "Snow Forest" },
// ];

// const itinerary = [
//   {
//     title: "Day1: Gulabi Kantha Trek in Uttarakhand – A Hidden Gem",
//     content: `• Untouched Beauty: Still relatively unexplored\n• Location: Garhwal Himalayas, Uttarakhand\n• Breathtaking panoramic views\n• Lush green meadows, wildflowers, dense forests`,
//   },
//   {
//     title: "Day 2: Higher Elevation and Scenic Views",
//     content: `• Higher elevation climbs, forest trails, and local encounters.`,
//   },
//   {
//     title: "Day 3: Return and Final Day",
//     content: `• Trek back to basecamp. Farewell to the Himalayas.`,
//   },
//   {
//     title: "Day1: Gulabi Kantha Trek in Uttarakhand – A Hidden Gem",
//     content: `• Untouched Beauty: Still relatively unexplored\n• Location: Garhwal Himalayas, Uttarakhand\n• Breathtaking panoramic views\n• Lush green meadows, wildflowers, dense forests`,
//   },
//   {
//     title: "Day 2: Higher Elevation and Scenic Views",
//     content: `• Higher elevation climbs, forest trails, and local encounters.`,
//   },
//   {
//     title: "Day 3: Return and Final Day",
//     content: `• Trek back to basecamp. Farewell to the Himalayas.`,
//   },
// ];

// export default function SarPassTrek() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "Sar Pass Trek",
//     travellers: "",
//   });

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const message = `*New Trip Booking Request* 🚶‍♂️🌄

// *Name:* ${formData.name}
// *Phone:* ${formData.phone}
// *Email:* ${formData.email}
// *Trip:* ${formData.tripName}
// *No. of Travellers:* ${formData.travellers}

// 📌 Please reach out for confirmation and next steps.`;

//     const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <>
//     {/* <div className="relative">
//   <div className="bg-[url('/deal34.jpg')] mt-8 w-full h-80 sm:h-96 bg-center bg-no-repeat bg-cover">
//     <div className="relative px-8 py-24 text-center max-w-7xl mx-auto">
//       <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white">
//          MountainMyTrip
//       </h1>
//       <p className="mt-4 text-white text-base sm:text-sm lg:text-[20px]">
//         MountainMyTrip is your trusted companion for unforgettable travel experiences, specializing in curated trekking adventures and nature-filled getaways across India's most scenic trails.
//       </p>
//     </div>
//   </div>
// </div> */}

// {/* <div className="relative w-full mt-3">
    
//       <div className=" mt-4 fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
//         <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold rounded-l-md rotate-90 origin-bottom-right">
//           Book Now
//         </button>
//       </div>

      
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         navigation={true}
//         spaceBetween={10}
//         slidesPerView={1}
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 4 },
//         }}
//         className="my-2"
//       >
//         {galleryImages.map((img, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-64 sm:h-72 md:h-80">
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-none"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

    
//       <div className="mt-2 bg-gradient-to-r from-gray-700 to-gray-300 py-8 px-4 text-center">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
//           Kanatal and Dhanaulti Day Tour
//         </h1>
//       </div>
//     </div> */}

    
// <div className="relative w-full">
//       {/* Sticky Book Now Button */}
//       <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
//         <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold rounded-l-md rotate-90 origin-bottom-right">
//           Book Now
//         </button>
//       </div>

//       {/* Swiper Image Gallery */}
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         loop={true}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//         }}
//         navigation={true}
//         spaceBetween={10}
//         slidesPerView={1}
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 4 },
//         }}
//         className="my-4 mt-4"
//       >
//         {galleryImages.map((img, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-64 sm:h-72 md:h-80">
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-none"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Gradient Title Section */}
//       <div className="bg-gradient-to-r from-purple-500 to-pink-400 py-8 px-4 text-center">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
//           Gulabi Kantha Trek Experience
//         </h1>
//       </div>
//     </div>


  
//       {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-16">
//         <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10 underline">
//           Explore with <span className="text-[#F54900]">MountainMyTrip</span>
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[220px] md:auto-rows-[250px]">
//           {destinations.map((item, index) => (
//             <div
//               key={index}
//               className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${
//                 item.gridClass || ""
//               }`}
//             >
//               <div className="w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110">
//                 <Image
//                   src={item.src}
//                   alt={`MountainMyTrip image ${index + 1}`}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section> */}

//       {/* Main Content + Booking Form */}
//       <section className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
//         {/* Left Content */}
//         <div className="flex-1">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             SAR PASS TREK
//           </h1>

//           <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
//             <div className="flex items-center gap-2">
//               <FaRegClock className="text-orange-500" />
//               <span>4 Nights 5 Days</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUsers className="text-orange-500" />
//               <span>Group Size: Unique</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUndo className="text-orange-500" />
//               <span>Cancellation: Up to 7 Days</span>
//             </div>
//           </div>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             About this Activity
//           </h2>
//           <p className="text-gray-600 mb-4">
//             The Sar Pass Trek is a highly popular trekking route in the Parvati
//             Valley of Himachal Pradesh, India...
//           </p>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             Highlights
//           </h2>
//           <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
//             <li>Panoramic views of snow-capped peaks and lush valleys.</li>
//             <li>Moderate challenge suitable for fit individuals.</li>
//             <li>Immerse in Himalayan culture and local villages.</li>
//             <li>Capture stunning photos at every step.</li>
//             <li>Meet fellow trekkers and make unforgettable memories.</li>
//           </ul>

//           <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
//           <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
//             <ul className="list-disc list-inside space-y-2">
//               <li>Transportation from Kasol to Kasol.</li>
//               <li>Tented accommodation during trek.</li>
//               <li>All vegetarian meals during trek.</li>
//               <li>Qualified trek guides & support staff.</li>
//               <li>Sleeping bags and basic medical aid.</li>
//             </ul>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Personal expenses and items.</li>
//               <li>Medications and personal equipment.</li>
//               <li>Optional gear rentals not included.</li>
//             </ul>
//           </div>

//           {/* Itinerary Section */}
//           <div className="my-8">
//             <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
//               Itinerary
//             </h2>
//             <div className="flex flex-col gap-4">
//               {itinerary.map((item, index) => (
//                 <div
//                   key={index}
//                   className="w-full border border-gray-200 rounded-xl shadow-sm bg-white"
//                 >
//                   <button
//                     onClick={() => toggleAccordion(index)}
//                     className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-100"
//                   >
//                     <span className="text-base md:text-lg font-semibold text-gray-800">
//                       {item.title}
//                     </span>
//                     {openIndex === index ? (
//                       <FaChevronUp className="text-orange-500" />
//                     ) : (
//                       <FaChevronDown className="text-orange-500" />
//                     )}
//                   </button>
//                   {openIndex === index && (
//                     <div className="px-5 pb-4 text-gray-600 whitespace-pre-line text-sm md:text-base">
//                       {item.content}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Sticky Booking Form (Right) */}
//         <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
//           <div className="sticky top-24">
//             <div className="bg-white shadow-lg rounded-2xl p-6 border">
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">
//                 Book Your Slot Now!
//               </h3>
//               <div className="text-sm text-green-600 font-bold mb-2">
//                 Save 20%
//               </div>
//               <div className="text-xl font-bold text-red-600 mb-4">
//                 Starting From: <span className="text-gray-600">₹12,000</span>/
//                 Per Person
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-3">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="text"
//                   name="tripName"
//                   value={formData.tripName}
//                   readOnly
//                   className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
//                 />
//                 <input
//                   type="number"
//                   name="travellers"
//                   placeholder="No. of Travellers"
//                   value={formData.travellers}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
//                 >
//                   Send Booking via WhatsApp
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       <HimaliyeMyTripCarousel />
//     </>
//   );
// }

"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaRegClock,
  FaUsers,
  FaUndo,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import HimaliyeMyTripCarousel from "../components/HimaliyeMyTrip";
import HimTrek from "../components/HimTrek";

const destinations = [
  { src: "/deal59.jpg", gridClass: "lg:col-span-2" },
  { src: "/deal58.jpg" },
  { src: "/deal60.jpg" },
  { src: "/deal36.jpg" },
  { src: "/deal40.jpg" },
];

const itinerary = [
  {
    title: "Day 1: Arrival in Haridwar",
    content: `• Meet and greet in Haridwar.\n• Ganga Aarti at Har Ki Pauri.\n• Overnight stay at hotel.`,
  },
  {
    title: "Day 2: Haridwar to Barkot",
    content: `• Scenic drive to Barkot via Mussoorie.\n• En route stop at Kempty Falls.\n• Overnight stay in Barkot.`,
  },
  {
    title: "Day 3: Barkot - Yamunotri - Barkot",
    content: `• Drive to Janki Chatti and trek to Yamunotri (6 km).\n• Darshan and dip in the holy Yamuna.\n• Return to Barkot.`,
  },
  {
    title: "Day 4: Barkot to Uttarkashi",
    content: `• Journey to Uttarkashi.\n• Visit Vishwanath Temple and explore town.\n• Overnight stay at Uttarkashi.`,
  },
  {
    title: "Day 5: Uttarkashi -Gangotri -Uttarkashi",
    content: `• Drive to Gangotri temple via Harsil.\n• Holy bath in Bhagirathi River.\n• Return to Uttarkashi.`,
  },
  {
    title: "Day 6: Uttarkashi to Guptkashi",
    content: `• Long scenic drive via Tehri Dam.\n• Overnight at Guptkashi with trek prep for Kedarnath.`,
  },
  {
    title: "Day 7: Guptkashi - Kedarnath",
    content: `• Drive to Sonprayag, then trek/pony to Kedarnath.\n• Evening darshan of Kedarnath temple.\n• Overnight stay near temple.`,
  },
  {
    title: "Day 8: Kedarnath - Guptkashi",
    content: `• Morning darshan and trek down.\n• Drive back to Guptkashi and rest.`,
  },
  {
    title: "Day 9: Guptkashi to Badrinath",
    content: `• Drive to Badrinath via Joshimath.\n• Evening darshan and explore Mana Village.\n• Overnight stay in Badrinath.`,
  },
  {
    title: "Day 10: Badrinath to Rudraprayag",
    content: `• Visit Badrinath temple again (optional).\n• Drive to Rudraprayag for overnight stay.`,
  },
  {
    title: "Day 11: Rudraprayag to Haridwar",
    content: `• Final return journey to Haridwar.\n• Tour ends with divine memories.`,
  },
];

export default function CharDhamYatra() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Char Dham Yatra - Divine Himalayan Circuit",
    travellers: "",
  });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Trip Booking Request* 🙏🚩

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Trip:* ${formData.tripName}
*No. of Travellers:* ${formData.travellers}

📌 Please reach out for confirmation and further details.`;

    const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-16">
        {/* <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10 underline">
          Experience the Sacred <span className="text-[#F54900]">Char Dham Yatra</span> with MountainMyTrip
        </h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[220px] md:auto-rows-[250px]">
          {destinations.map((item, index) => (
            <div
              key={index}
              className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${item.gridClass || ""}`}
            >
              <div className="w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110">
                <Image
                  src={item.src}
                  alt={`Char Dham Yatra ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
        {/* Left */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            CHAR DHAM YATRA - DIVINE HIMALAYAN CIRCUIT
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />
              <span>10 Nights 11 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              <span>Group Size: Comfortable & Spiritual</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-orange-500" />
              <span>Free Cancellation: Upto 10 Days</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">About this Yatra</h2>
          <p className="text-gray-600 mb-4">
            The Char Dham Yatra is a sacred pilgrimage across Uttarakhand's four revered shrines: Yamunotri, Gangotri,
            Kedarnath, and Badrinath. It's not just a spiritual journey but also a breathtaking Himalayan adventure that
            offers peace, faith, and divine energy.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Darshan at all four Char Dham temples.</li>
            <li>Witness Ganga Aarti in Haridwar & scenic drives through Garhwal hills.</li>
            <li>Visit the mystical Mana Village - last Indian village.</li>
            <li>Blend of devotion, nature, and adventure.</li>
            <li>Comfortable stays and professional support staff.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Accommodation in hotels/tents.</li>
              <li>All meals during Yatra (veg only).</li>
              <li>Transport in tempo traveller/vehicle.</li>
              <li>Puja arrangements at each dham.</li>
              <li>Guide and trip coordinator support.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Pony/doli/helicopter charges.</li>
              <li>Personal expenses and tips.</li>
              <li>Entry fees or special darshan fees.</li>
              <li>Medical or evacuation expenses.</li>
              <li>Anything not mentioned in inclusions.</li>
            </ul>
          </div>

          {/* Itinerary Section */}
          <div className="my-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Itinerary</h2>
            <div className="flex flex-col gap-4">
              {itinerary.map((item, index) => (
                <div key={index} className="w-full border border-gray-200 rounded-xl shadow-sm bg-white">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-100"
                  >
                    <span className="text-base md:text-lg font-semibold text-gray-800">{item.title}</span>
                    {openIndex === index ? (
                      <FaChevronUp className="text-orange-500" />
                    ) : (
                      <FaChevronDown className="text-orange-500" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-5 pb-4 text-gray-600 whitespace-pre-line text-sm md:text-base">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
          <div className="sticky top-24">
            <div className="bg-white shadow-lg rounded-2xl p-6 border">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Reserve Your Spiritual Journey</h3>
              <div className="text-sm text-green-600 font-bold mb-2">Special Early Booking Offer</div>
              <div className="text-xl font-bold text-red-600 mb-4">
                Starting From: <span className="text-gray-600">₹21,999</span>/Per Person
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="text"
                  name="tripName"
                  value={formData.tripName}
                  readOnly
                  className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
                />
                <input
                  type="number"
                  name="travellers"
                  placeholder="No. of Travellers"
                  value={formData.travellers}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
                />
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
                >
                  Send Booking via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Components */}
      <HimaliyeMyTripCarousel />
      <HimTrek />
    </>
  );
}







