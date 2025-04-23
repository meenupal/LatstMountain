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
// import HimTrek from "../components/HimTrek";

// const destinations = [
//   { name: "", src: "/deal78.webp", gridClass: "lg:col-span-2" },
//   { name: "", src: "/deal22.webp" },
//   { name: "", src: "/deal12.webp" },
//   { name: "", src: "/deal14.webp" },
//   { name: "", src: "/deal23.webp" },
// ];

// const itinerary = [
//   {
//     title: "Day 1: Arrival and Trek to Basecamp",
//     content: `• Meet at the base location and get briefed by the trek leader.\n• Light trek to the basecamp surrounded by lush greenery.\n• Settle in for the night amidst the serene Himalayan foothills.`,
//   },

//   {
//     title: "Day 2: Trek to Gulabi Kantha",
//     content: `• Hike through pine-oak forests.\n• Stunning Himalayan views.\n• Meadows dotted with wildflowers.`,
//   },
//   {
//     title: "Day 3: Explore & Return",
//     content: `• Explore Gulabi Kantha area.\n• Descend to basecamp.\n• Depart with lasting memories.`,
//   },

//   {
//     title: "Day 4: Exploration and Return",
//     content: `• Morning exploration of Gulabi Kantha peak area.\n• Begin descent back to basecamp.\n• Share experiences and depart with memories.`,
//   },
//   {
//     title: "Day 5: Basecamp to Village",
//     content: `• Trek down to nearby village.\n• Interact with locals & enjoy traditional food.\n• Overnight in homestay or camp.`,
//   },
//   {
//     title: "Day 6: Cultural Walk & Leisure",
//     content: `• Easy walk around village area.\n• Explore local lifestyle & customs.\n• Relax with scenic sunset views.`,
//   },
//   // {
//   //   title: "Day 6: Departure Day",
//   //   content: `• Morning breakfast with group.\n• Pack up & say goodbye.\n• Depart with cherished memories.`,
//   // }
// ];

// export default function GulabiKanthaTrek() {
//   const [openIndex, setOpenIndex] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "Gulabi Kantha Trek",
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
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
//         <div className="flex flex-col gap-2 sm:hidden">
//           {/* Show two rows of two images in flex */}
//           <div className="flex gap-2">
//             <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
//               <Image
//                 src={destinations[1].src}
//                 alt={`MountainMyTrip Vinayak Top 2`}
//                 fill
//                 className="object-cover"
//                 sizes="50vw"
//               />
//             </div>
//             <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
//               <Image
//                 src={destinations[2].src}
//                 alt={`MountainMyTrip Vinayak Top 3`}
//                 fill
//                 className="object-cover"
//                 sizes="50vw"
//               />
//             </div>
//           </div>

//           <div className="flex gap-2">
//             <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
//               <Image
//                 src={destinations[3].src}
//                 alt={`MountainMyTrip Vinayak Top 4`}
//                 fill
//                 className="object-cover"
//                 sizes="50vw"
//               />
//             </div>
//             <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
//               <Image
//                 src={destinations[4].src}
//                 alt={`MountainMyTrip Vinayak Top 5`}
//                 fill
//                 className="object-cover"
//                 sizes="50vw"
//               />
//             </div>
//           </div>
//         </div>

//         {/* For tablet and desktop view - original grid */}
//         <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px]">
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
//                   alt={`MountainMyTrip Vinayak Top ${index + 1}`}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Main Section */}
//       <section className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-10">
//         {/* Left Content */}
//         <div className="flex-1">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//             GULABI KANTHA TREK
//           </h1>

//           <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
//             <div className="flex items-center gap-2">
//               <FaRegClock className="text-orange-500" />
//               <span>2 Nights 3 Days</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUsers className="text-orange-500" />
//               <span>Group Size: Small & Personalized</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUndo className="text-orange-500" />
//               <span>Free Cancellation: Upto 7 Days</span>
//             </div>
//           </div>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             About this Activity
//           </h2>
//           <p className="text-gray-600 mb-4">
//             The Gulabi Kantha Trek is a scenic and lesser-explored trail located
//             in the Garhwal Himalayas of Uttarakhand. This trek offers lush
//             alpine meadows, enchanting forest trails, and breathtaking panoramic
//             views, making it a paradise for nature lovers and adventurers alike.
//           </p>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             Highlights
//           </h2>
//           <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
//             <li>Unexplored beauty with serene Himalayan landscapes.</li>
//             <li>Panoramic views of Bandarpoonch, Black Peak, and more.</li>
//             <li>Suitable for beginners and nature photographers.</li>
//             <li>Charming forest trails with rich flora and fauna.</li>
//             <li>Authentic Himalayan village experiences.</li>
//           </ul>

//           <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
//           <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
//             <ul className="list-disc list-inside space-y-2">
//               <li>Transportation from base to base.</li>
//               <li>Tented stay with sleeping bags and mats.</li>
//               <li>All vegetarian meals during trek.</li>
//               <li>Experienced trek guides and staff.</li>
//               <li>Basic first aid and safety gear.</li>
//             </ul>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Personal expenses and insurance.</li>
//               <li>Medical expenses and emergency costs.</li>
//               <li>Anything not mentioned under inclusions.</li>
//             </ul>
//           </div>

//           {/* Itinerary Section */}
//           <div className="my-8">
//             <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
//               Itinerary
//             </h2>

//             <button
//               onClick={() => {
//                 const allOpen = openIndex.length === itinerary.length;
//                 setOpenIndex(allOpen ? [] : itinerary.map((_, i) => i));
//               }}
//               className="mb-4 text-orange-600 font-medium hover:underline"
//             >
//               {openIndex.length === itinerary.length ? "Close All" : "Open All"}
//             </button>

//             <div className="flex flex-col gap-4">
//               {itinerary.map((item, index) => {
//                 const isOpen = openIndex.includes(index);
//                 return (
//                   <div
//                     key={index}
//                     className="w-full border border-gray-200 rounded-xl shadow-sm bg-white"
//                   >
//                     <button
//                       onClick={() => {
//                         if (isOpen) {
//                           setOpenIndex(openIndex.filter((i) => i !== index));
//                         } else {
//                           setOpenIndex([...openIndex, index]);
//                         }
//                       }}
//                       className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-100"
//                     >
//                       <span className="text-base md:text-lg font-semibold text-gray-800">
//                         {item.title}
//                       </span>
//                       {isOpen ? (
//                         <FaChevronUp className="text-orange-500" />
//                       ) : (
//                         <FaChevronDown className="text-orange-500" />
//                       )}
//                     </button>
//                     {isOpen && (
//                       <div className="px-5 pb-4 text-gray-600 whitespace-pre-line text-sm md:text-base">
//                         {item.content}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Booking Form Section */}
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
//                 Starting From: <span className="text-gray-600">₹6,999</span>/Per
//                 Person
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
//       <HimTrek />
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
  { name: "", src: "/deal47.webp", gridClass: "lg:col-span-2" },
  { name: "", src: "/deal22.webp" },
  { name: "", src: "/deal82.webp" },
  { name: "", src: "/deal14.webp" },
  { name: "", src: "/deal23.webp" },
];

const itinerary = [
  {
    title: "Day 1: Arrival and Trek to Basecamp",
    content: `• Meet at the base location and get briefed by the trek leader.\n• Light trek to the basecamp surrounded by lush greenery.\n• Settle in for the night amidst the serene Himalayan foothills.`,
  },
  {
    title: "Day 2: Trek to Gulabi Kantha",
    content: `• Hike through pine-oak forests.\n• Stunning Himalayan views.\n• Meadows dotted with wildflowers.`,
  },
  {
    title: "Day 3: Explore & Return",
    content: `• Explore Gulabi Kantha area.\n• Descend to basecamp.\n• Depart with lasting memories.`,
  },
  {
    title: "Day 4: Exploration and Return",
    content: `• Morning exploration of Gulabi Kantha peak area.\n• Begin descent back to basecamp.\n• Share experiences and depart with memories.`,
  },
  {
    title: "Day 5: Basecamp to Village",
    content: `• Trek down to nearby village.\n• Interact with locals & enjoy traditional food.\n• Overnight in homestay or camp.`,
  },
  {
    title: "Day 6: Cultural Walk & Leisure",
    content: `• Easy walk around village area.\n• Explore local lifestyle & customs.\n• Relax with scenic sunset views.`,
  },
];

export default function GulabiKanthaTrek() {
  const [openIndex, setOpenIndex] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Gulabi Kantha Trek",
    travellers: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Trip Booking Request* 🚶‍♂️🌄

*Name:* ${formData.name}
*Phone:* ${formData.phone}
${formData.email ? `*Email:* ${formData.email}\n` : ""}
*Trip:* ${formData.tripName}
*No. of Travellers:* ${formData.travellers}

📌 Please reach out for confirmation and next steps.`;

    const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const toggleAccordion = (index) => {
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter((i) => i !== index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };

  return (
    <>
      {/* Image Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
        {/* Mobile view */}
        <div className="flex flex-col gap-2 sm:hidden">
          {[1, 2, 3, 4].map((i, idx) => (
            idx % 2 === 0 && (
              <div className="flex gap-2" key={i}>
                {[i, i + 1].map((j) => (
                  <div
                    key={j}
                    className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md"
                  >
                    <Image
                      src={destinations[j].src}
                      alt={`MountainMyTrip Vinayak Top ${j + 1}`}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  </div>
                ))}
              </div>
            )
          ))}
        </div>

        {/* Desktop view */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px]">
          {destinations.map((item, index) => (
            <div
              key={index}
              className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${item.gridClass || ""}`}
            >
              <Image
                src={item.src}
                alt={`MountainMyTrip Vinayak Top ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Trek Info Section */}
      <section className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-10">
        {/* Left Column */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            GULABI KANTHA TREK
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />
              <span>2 Nights 3 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              <span>Group Size: Small & Personalized</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-orange-500" />
              <span>Free Cancellation: Upto 7 Days</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            About this Activity
          </h2>
          <p className="text-gray-600 mb-4">
            The Gulabi Kantha Trek is a scenic and lesser-explored trail located
            in the Garhwal Himalayas of Uttarakhand. This trek offers lush
            alpine meadows, enchanting forest trails, and breathtaking panoramic
            views, making it a paradise for nature lovers and adventurers alike.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Unexplored beauty with serene Himalayan landscapes.</li>
            <li>Panoramic views of Bandarpoonch, Black Peak, and more.</li>
            <li>Suitable for beginners and nature photographers.</li>
            <li>Charming forest trails with rich flora and fauna.</li>
            <li>Authentic Himalayan village experiences.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Transportation from base to base.</li>
              <li>Tented stay with sleeping bags and mats.</li>
              <li>All vegetarian meals during trek.</li>
              <li>Experienced trek guides and staff.</li>
              <li>Basic first aid and safety gear.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal expenses and insurance.</li>
              <li>Medical expenses and emergency costs.</li>
              <li>Anything not mentioned under inclusions.</li>
            </ul>
          </div>

          {/* Itinerary Accordion */}
          <div className="my-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
              Itinerary
            </h2>
            <button
              onClick={() =>
                setOpenIndex(openIndex.length === itinerary.length ? [] : itinerary.map((_, i) => i))
              }
              className="mb-4 text-orange-600 font-medium hover:underline"
            >
              {openIndex.length === itinerary.length ? "Close All" : "Open All"}
            </button>

            <div className="flex flex-col gap-4">
              {itinerary.map((item, index) => (
                <div
                  key={index}
                  className="w-full border border-gray-200 rounded-xl shadow-sm bg-white"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-100"
                  >
                    <span className="text-base md:text-lg font-semibold text-gray-800">
                      {item.title}
                    </span>
                    {openIndex.includes(index) ? (
                      <FaChevronUp className="text-orange-500" />
                    ) : (
                      <FaChevronDown className="text-orange-500" />
                    )}
                  </button>
                  {openIndex.includes(index) && (
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
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Book Your Slot Now!
              </h3>
              <div className="text-sm text-green-600 font-bold mb-2">Save 20%</div>
              <div className="text-xl font-bold text-red-600 mb-4">
                Starting From: <span className="text-gray-600">₹6,999</span>/Per Person
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
                  placeholder="Email (optional)"
                  value={formData.email}
                  onChange={handleChange}
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

      <HimaliyeMyTripCarousel />
      <HimTrek />
    </>
  );
}

