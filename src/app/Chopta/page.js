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
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import HimaliyeMyTripCarousel from "../components/HimaliyeMyTrip";

// import "swiper/css";
// import "swiper/css/navigation";

// const galleryImages = [
//   { src: "/deal43.jpg", alt: "Chopta Valley Views" },
//   { src: "/deal44.jpg", alt: "Tungnath Temple" },
//   { src: "/deal42.jpg", alt: "Himalayan Sunrise" },
//   { src: "/deal41.jpg", alt: "Camping in Chopta" },
//   { src: "/deal45.jpg", alt: "Snow-covered Trails" },
//   { src: "/deal34.jpg", alt: "Trek to Chandrashila" },
// ];

// const itinerary = [
//   {
//     title: "Day 1: Arrival in Chopta",
//     content: `• Reach Chopta, the base point of the trek.\n• Settle in camps/homestay and enjoy local sightseeing.\n• Acclimatization walk followed by dinner and overnight stay.`,
//   },
//   {
//     title: "Day 2: Trek to Tungnath Temple & Chandrashila Peak",
//     content: `• Early morning start to Tungnath – the highest Shiva temple in the world.\n• Continue to Chandrashila summit for 360° Himalayan views.\n• Return to Chopta for a warm dinner and overnight stay.`,
//   },
//   {
//     title: "Day 3: Departure from Chopta",
//     content: `• Post breakfast, depart with beautiful memories of the trek.\n• Optional stop at Deoria Tal or local cafes.`,
//   },
// ];

// export default function ChoptaTungnathTrek() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "Chopta Tungnath Trek",
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
//     const message = `*New Trip Booking Request* 🏔️✨

// *Name:* ${formData.name}
// *Phone:* ${formData.phone}
// *Email:* ${formData.email}
// *Trip:* ${formData.tripName}
// *No. of Travellers:* ${formData.travellers}

// 📌 Please follow up for details and confirmation.`;

//     const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <>
//       {/* Sticky Book Now Button */}
//       <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
//         <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold rounded-l-md rotate-90 origin-bottom-right">
//           Book Now
//         </button>
//       </div>

//       {/* Image Gallery */}
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         loop={true}
//         autoplay={{ delay: 2000, disableOnInteraction: false }}
//         navigation={true}
//         spaceBetween={10}
//         slidesPerView={1}
//         breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
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

//       {/* Header */}
//       <div className="bg-gray-500 py-8 px-4 text-center">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
//           Chopta Tungnath Chandrashila Trek
//         </h1>
//       </div>

//       {/* Main Section */}
//       <section className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
//         {/* Left Content */}
//         <div className="flex-1">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             CHOPTA TUNGNATH TREK
//           </h1>

//           <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
//             <div className="flex items-center gap-2">
//               <FaRegClock className="text-orange-500" />
//               <span>3 Days 2 Nights</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUsers className="text-orange-500" />
//               <span>Group Size: 6–15</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUndo className="text-orange-500" />
//               <span>Free Cancellation (Up to 7 Days)</span>
//             </div>
//           </div>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             About the Trek
//           </h2>
//           <p className="text-gray-600 mb-4">
//             Discover the serenity of the Himalayas with the Chopta Tungnath
//             Trek. Known as the Mini Switzerland of India, Chopta offers
//             breathtaking views, dense forests, and access to the revered
//             Tungnath Temple and Chandrashila Peak. Ideal for beginners, this
//             short Himalayan trek is perfect for long weekends and nature
//             enthusiasts.
//           </p>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
//           <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
//             <li>Visit the highest Shiva temple in the world – Tungnath.</li>
//             <li>Sunrise views from Chandrashila Peak.</li>
//             <li>Camp under starlit Himalayan skies.</li>
//             <li>Panoramic views of Nanda Devi, Kedarnath & Chaukhamba.</li>
//             <li>Perfect for beginners, couples, and families.</li>
//           </ul>

//           <h2 className="text-2xl font-bold mb-6">Included & Excluded</h2>
//           <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
//             <ul className="list-disc list-inside space-y-2">
//               <li>All vegetarian meals during the trek.</li>
//               <li>Accommodation in camps or guesthouses.</li>
//               <li>Trek guide and experienced support staff.</li>
//               <li>Sleeping bags, mats, and basic gear.</li>
//               <li>First aid and safety equipment.</li>
//             </ul>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Transport to/from base camp (Chopta).</li>
//               <li>Personal expenses or tips.</li>
//               <li>Travel insurance or emergency evacuation.</li>
//               <li>Additional snacks or bottled drinks.</li>
//             </ul>
//           </div>

//           {/* Itinerary */}
//           <div className="my-8">
//             <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
//               Trek Itinerary
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

//         {/* Booking Form */}
//         <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
//           <div className="sticky top-24">
//             <div className="bg-white shadow-lg rounded-2xl p-6 border">
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">
//                 Reserve Your Spot Today!
//               </h3>
//               <div className="text-sm text-green-600 font-bold mb-2">
//                 Limited Period Offer: 15% Off
//               </div>
//               <div className="text-xl font-bold text-red-600 mb-4">
//                 Starting From: <span className="text-gray-600">₹6,499</span> / Person
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

//       {/* Testimonials */}
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
  { src: "/deal44.jpg", gridClass: "lg:col-span-2" },
  { src: "/deal45.jpg" },
  { src: "/deal41.jpg" },
  { src: "/deal43.jpg" },
  { src: "/deal34.jpg" },
];

const itinerary = [
  {
    title: "Day 1: Rishikesh to Chopta",
    content: `• Drive from Rishikesh to Chopta (approx. 8-9 hrs).\n• Enjoy the scenic route through Devprayag and Rudraprayag.\n• Arrive and check into camp at Chopta.`,
  },
  {
    title: "Day 2: Chopta –Tungnath –Chandrashila –Chopta",
    content: `• Early morning start for trek to Tungnath Temple (3.5 km).\n• Continue to Chandrashila summit (1.5 km) for panoramic views.\n• Return back to Chopta for overnight stay.`,
  },
  {
    title: "Day 3: Chopta to Rishikesh",
    content: `• Morning departure for Rishikesh.\n• Drive back with memories of a beautiful Himalayan experience.\n• Trip ends in the evening.`,
  },
];

export default function ChoptaTungnathTrek() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Chopta Tungnath Chandrashila Trek – Mini Himalayan Summit Adventure",
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
    const message = `*New Trip Booking Request* 🏕️✨

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
          Reach New Heights on the
          <span className="text-[#F54900]">Chopta Tungnath Chandrashila Trek</span>
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
                  alt={`Chopta Trek ${index + 1}`}
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
            CHOPTA TUNGNATH CHANDRASHILA TREK – MINI HIMALAYAN SUMMIT ADVENTURE
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />
              <span>2 Nights 3 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              <span>Group Size: Easy & Family Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-orange-500" />
              <span>Free Cancellation: Upto 5 Days</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">About this Trek</h2>
          <p className="text-gray-600 mb-4">
            The Chopta Tungnath Chandrashila Trek is one of the most accessible and rewarding Himalayan adventures. Explore the world’s highest Shiva temple at Tungnath and summit Chandrashila for 360° views of the Garhwal Himalayas.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Visit the ancient Tungnath Temple.</li>
            <li>Climb the Chandrashila summit for breathtaking sunrise views.</li>
            <li>Ideal for beginners, families, and solo travelers.</li>
            <li>Scenic forest trails through Kedarnath Wildlife Sanctuary.</li>
            <li>Short and budget-friendly Himalayan trek.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Transport from/to Rishikesh.</li>
              <li>Accommodation in camps or guesthouses.</li>
              <li>All meals during the trek.</li>
              <li>Local guides and support staff.</li>
              <li>Permits and basic medical support.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal trekking gear.</li>
              <li>Insurance or emergency costs.</li>
              <li>Camera or mobile charges.</li>
              <li>Any personal expenses.</li>
              <li>Anything not mentioned above.</li>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Book Your Trek Today</h3>
              <div className="text-sm text-green-600 font-bold mb-2">Weekend Departure Available</div>
              <div className="text-xl font-bold text-red-600 mb-4">
                Starting From: <span className="text-gray-600">₹3,999</span>/Per Person
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

