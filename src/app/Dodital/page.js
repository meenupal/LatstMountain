





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
// import HimaliyeMyTrip from "./components/HimaliyeMyTrip";
// import HimTrek from "./components/HimTrek";

// const destinations = [
//   { src: "/dodital1.webp", gridClass: "lg:col-span-2" },
//   { src: "/dodital2.webp" },
//   { src: "/dodital3.webp" },
//   { src: "/dodital4.webp" },
//   { src: "/dodital5.webp" },
// ];

// const itinerary = [
//   {
//     title: "Day 1: Drive from Dehradun to Sangamchatti",
//     content: `• Early morning drive from Dehradun to Sangamchatti via Uttarkashi.\n• Enjoy the beautiful route along the Bhagirathi river.\n• Overnight stay in guesthouse or tents.`,
//   },
//   {
//     title: "Day 2: Trek from Sangamchatti to Bebra",
//     content: `• Begin the trek alongside Assi Ganga River.\n• Trek through dense forests and small Himalayan villages.\n• Camp at Bebra – a scenic spot with mountain views.`,
//   },
//   {
//     title: "Day 3: Trek from Bebra to Dodital",
//     content: `• Trek through oak, deodar and rhododendron forests.\n• Reach Dodital – a stunning lake surrounded by pine trees.\n• Explore the lake and relax at the campsite.`,
//   },
//   {
//     title: "Day 4: Trek to Darwa Pass Top and back",
//     content: `• Early morning ascend to Darwa Pass Top (approx. 13,300 ft).\n• Witness stunning views of Bandarpunch, Kala Nag, and more.\n• Return to Dodital for overnight stay.`,
//   },
//   {
//     title: "Day 5: Return Trek to Sangamchatti",
//     content: `• Descend all the way back to Sangamchatti.\n• Enjoy the changing scenery and bid goodbye to mountains.\n• Drive to Uttarkashi or stay at basecamp.`,
//   },
// ];

// export default function DoditalDarwaPassTrekPage() {
//   const [openIndex, setOpenIndex] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "Dodital Darwa Pass Trek – Lakeside Bliss & Panoramic Peaks",
//     travellers: "",
//   });

//   const toggleAccordion = (index) => {
//     setOpenIndex((prev) =>
//       prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
//     );
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const message = `*New Trip Booking Request* 🏞️✨

// *Name:* ${formData.name}
// *Phone:* ${formData.phone}
// ${formData.email ? `*Email:* ${formData.email}\n` : ""}
// *Trip:* ${formData.tripName}
// *No. of Travellers:* ${formData.travellers}

// 📌 Please reach out for confirmation and further details.`;

//     const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <>
//       {/* Image Gallery */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
//         <div className="flex flex-col gap-2 sm:hidden">
//           {[1, 3].map((i) => (
//             <div className="flex gap-2" key={i}>
//               {[i, i + 1].map(
//                 (j) =>
//                   destinations[j] && (
//                     <div
//                       key={j}
//                       className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md"
//                     >
//                       <Image
//                         src={destinations[j].src}
//                         alt={`Dodital Trek ${j + 1}`}
//                         fill
//                         className="object-cover"
//                         sizes="50vw"
//                       />
//                     </div>
//                   )
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px]">
//           {destinations.map((item, index) => (
//             <div
//               key={index}
//               className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${item.gridClass || ""}`}
//             >
//               <div className="w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110">
//                 <Image
//                   src={item.src}
//                   alt={`Dodital Trek ${index + 1}`}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Content + Booking */}
//       <section className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-10">
//         {/* Left Section */}
//         <div className="flex-1">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//             DODITAL DARWA PASS TREK – LAKESIDE BLISS & PANORAMIC PEAKS
//           </h1>

//           <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
//             <div className="flex items-center gap-2">
//               <FaRegClock className="text-orange-500" />
//               4 Nights 5 Days
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUsers className="text-orange-500" />
//               Easy to Moderate
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUndo className="text-orange-500" />
//               Free Cancellation: Upto 7 Days
//             </div>
//           </div>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             About this Trek
//           </h2>
//           <p className="text-gray-600 mb-4">
//             The Dodital Darwa Pass Trek is a beautiful blend of tranquil lakes,
//             alpine forests, and panoramic views from high-altitude passes. Ideal
//             for nature lovers and first-timers, this trek offers a peaceful
//             Himalayan experience around the sacred Dodital Lake.
//           </p>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
//           <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
//             <li>Camp by the crystal-clear Dodital Lake.</li>
//             <li>Climb up to Darwa Pass for breathtaking Himalayan views.</li>
//             <li>Explore dense oak and deodar forests.</li>
//             <li>Interact with local Himalayan villages along the trail.</li>
//             <li>Ideal beginner-friendly trail with rich mythology.</li>
//           </ul>

//           <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
//           <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
//             <ul className="list-disc list-inside space-y-2">
//               <li>Transport from/to Dehradun</li>
//               <li>Accommodation in guesthouses and tents</li>
//               <li>All meals during the trek</li>
//               <li>Certified trek guides and support team</li>
//               <li>Trek permits and first-aid support</li>
//             </ul>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Personal trekking gear</li>
//               <li>Travel insurance & evacuation expenses</li>
//               <li>Tips or donations</li>
//               <li>Mobile/camera charging</li>
//               <li>Anything not listed in inclusions</li>
//             </ul>
//           </div>

//           <div className="my-8">
//             <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
//               Itinerary
//             </h2>
//             <button
//               onClick={() =>
//                 setOpenIndex(
//                   openIndex.length === itinerary.length
//                     ? []
//                     : itinerary.map((_, i) => i)
//                 )
//               }
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
//                       onClick={() => toggleAccordion(index)}
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

//         {/* Booking Form */}
//         <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
//           <div className="sticky top-24">
//             <div className="bg-white shadow-lg rounded-2xl p-6 border">
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">
//                 Book Your Trek Today
//               </h3>
//               <div className="text-sm text-green-600 font-bold mb-2">
//                 Weekend Departure Available
//               </div>
//               <div className="text-xl font-bold text-red-600 mb-4">
//                 Starting From:{" "}
//                 <span className="text-gray-600">₹6,499</span>/Per Person
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
//                   placeholder="Email (optional)"
//                   value={formData.email}
//                   onChange={handleChange}
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

//       {/* Additional Sections */}
//       <HimaliyeMyTrip />
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
  { src: "/deal55.webp", gridClass: "lg:col-span-2" },
  { src: "/deal69.webp" },
  { src: "/deal45.webp" },
  { src: "/deal61.webp" },
  { src: "/deal42.webp" },
];

const itinerary = [
  {
    title: "Day 1: Arrival in Sangamchatti  Trek to Bevra",
    content:
      "• Drive from Uttarkashi to Sangamchatti.\n• Start trek to Bevra (approx. 6 km).\n• Enjoy the scenic trail and forest.\n• Overnight stay in tents at Bevra.",
  },
  {
    title: "Day 2: Bevra to Dodital",
    content:
      "• Trek through pine forests and rhododendron trails.\n• Reach the beautiful Dodital Lake.\n• Explore the serene surroundings and enjoy camping by the lake.",
  },
  {
    title: "Day 3: Dodital to Darwa Pass Top and Back",
    content:
      "• Start early for Darwa Pass Top (approx. 5 km ascent).\n• Enjoy panoramic views of Bandarpoonch and other peaks.\n• Descend back to Dodital for overnight stay.",
  },
  {
    title: "Day 4: Dodital to Bevra",
    content:
      "• Leisure morning at the lake.\n• Trek down to Bevra and enjoy the peaceful trail.\n• Camp at Bevra under the stars.",
  },
  {
    title: "Day 5: Bevra to Sangamchatti Departure",
    content:
      "• Trek back to Sangamchatti.\n• Drive to Uttarkashi or further as per plan.\n• Trip ends with memories of high-altitude lakes and alpine passes.",
  },
];

export default function DoditalDarwaPassTrek() {
  const [openIndex, setOpenIndex] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Dodital Darwa Pass Trek – Pristine Lake & Alpine Pass Experience",
    travellers: "",
  });

  const toggleAccordion = (index) => {
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter((i) => i !== index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Trip Booking Request* 🏕️✨

*Name:* ${formData.name}
*Phone:* ${formData.phone}
${formData.email ? `*Email:* ${formData.email}\n` : ""}
*Trip:* ${formData.tripName}
*No. of Travellers:* ${formData.travellers}

📌 Please reach out for confirmation and further details.`;

    const whatsappURL = `https://wa.me/6239092532?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
        <div className="flex flex-col gap-2 sm:hidden">
          {[1, 2, 3, 4].map((i) =>
            i % 2 === 1 ? (
              <div className="flex gap-2" key={i}>
                {[i, i + 1].map(
                  (j) =>
                    destinations[j] && (
                      <div
                        key={j}
                        className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md"
                      >
                        <Image
                          src={destinations[j].src}
                          alt={`Dodital Trek ${j + 1}`}
                          fill
                          className="object-cover"
                          sizes="50vw"
                        />
                      </div>
                    )
                )}
              </div>
            ) : null
          )}
        </div>

        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px]">
          {destinations.map((item, index) => (
            <div
              key={index}
              className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${
                item.gridClass || ""
              }`}
            >
              <div className="w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110">
                <Image
                  src={item.src}
                  alt={`Dodital Trek ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content + Booking */}
      <section className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            DODITAL DARWA PASS TREK – PRISTINE LAKE & ALPINE PASS EXPERIENCE
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />
              4 Nights 5 Days
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              Moderate Difficulty
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-orange-500" />
              Free Cancellation: Upto 5 Days
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">About this Trek</h2>
          <p className="text-gray-600 mb-4">
            The Dodital Darwa Pass Trek is a perfect blend of tranquility and adventure.
            Trek through alpine forests, camp beside the sacred Dodital Lake, and ascend to Darwa Pass for spectacular Himalayan views.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Camp at the serene Dodital Lake surrounded by dense forests.</li>
            <li>Hike to Darwa Top for panoramic views of Bandarpunch and Swargarohini.</li>
            <li>Rich in mythology – birthplace of Lord Ganesha.</li>
            <li>Scenic trails perfect for nature and photography lovers.</li>
            <li>Ideal for trekkers looking for solitude and natural beauty.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Transport from/to Uttarkashi</li>
              <li>All meals and accommodation</li>
              <li>Tents and sleeping bags</li>
              <li>Certified trek guides</li>
              <li>Permits and first-aid support</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal gear and clothing</li>
              <li>Insurance or emergency evacuation</li>
              <li>Mobile/device charging</li>
              <li>Tips or personal expenses</li>
              <li>Unspecified services</li>
            </ul>
          </div>

          <div className="my-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Itinerary</h2>
            <button
              onClick={() =>
                setOpenIndex(
                  openIndex.length === itinerary.length ? [] : itinerary.map((_, i) => i)
                )
              }
              className="mb-4 text-orange-600 font-medium hover:underline"
            >
              {openIndex.length === itinerary.length ? "Close All" : "Open All"}
            </button>

            <div className="flex flex-col gap-4">
              {itinerary.map((item, index) => {
                const isOpen = openIndex.includes(index);
                return (
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
                      {isOpen ? (
                        <FaChevronUp className="text-orange-500" />
                      ) : (
                        <FaChevronDown className="text-orange-500" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-gray-600 whitespace-pre-line text-sm md:text-base">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
          <div className="sticky top-24">
            <div className="bg-white shadow-lg rounded-2xl p-6 border">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Book Your Trek Today
              </h3>
              {/* <div className="text-sm text-green-600 font-bold mb-2">
                Fixed Departures Available
              </div> */}
              <div className="text-xl font-bold text-red-600 mb-1">
                Starting From: <span className="text-gray-600">₹15,000</span>/Per Person
              </div>
              <div className="text-sm text-green-600 font-semibold mb-2"> +5% gst</div>

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

