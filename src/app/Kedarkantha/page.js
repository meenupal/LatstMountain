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
  // { src: "/deal52.webp", gridClass: "lg:col-span-2" },
  // { src: "/deal53.webp" },
  // { src: "/deal49.webp" },
  // { src: "/deal36.webp" },
  // { src: "/deal14.webp" },
// ];

// const itinerary = [
//   {
//     title: "Day 1: Arrival at Sankri",
//     content: `• Reach Sankri village, the base camp for Kedarkantha trek.\n• Briefing session with trek leader and acclimatization.\n• Overnight stay in guesthouse or camps.`,
//   },
//   {
//     title: "Day 2: Trek to Juda Ka Talab",
//     content: `• Begin your scenic trek through pine forests and snow-laden trails.\n• Reach Juda Ka Talab – a high-altitude alpine lake.\n• Enjoy campfire, hot dinner, and overnight camping.`,
//   },
//   {
//     title: "Day 3: Juda Ka Talab to Kedarkantha Base Camp",
//     content: `• Trek uphill towards Kedarkantha base camp.\n• Panoramic views of snow peaks and magical meadows.\n• Camp under the starlit Himalayan sky.`,
//   },
//   {
//     title: "Day 4: Summit Kedarkantha Peak & Back to Sankri",
//     content: `• Early morning summit push to Kedarkantha Peak (12,500 ft).\n• Witness a 360° view of snow-capped Himalayan ranges.\n• Descend to Sankri for overnight stay.`,
//   },
//   {
//     title: "Day 5: Departure from Sankri",
//     content: `• Relish a warm breakfast and bid goodbye to the mountains.\n• Begin your return journey from Sankri with unforgettable memories.`,
//   },
// ];

// export default function KedarkanthaTrek() {
//   const [openIndex, setOpenIndex] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "Kedarkantha Trek from Sankri",
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
//     const message = `*New Trip Booking Request* 🚶‍♂️🏔️

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
//       {/*     
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-16">
       
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[220px] md:auto-rows-[250px]">
//           {destinations.map((item, index) => (
//             <div
//               key={index}
//               className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${item.gridClass || ""}`}
//             >
//               <div className="w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110">
//                 <Image
//                   src={item.src}
//                   alt={`Kedarkantha Trek ${index + 1}`}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section> */}

//       <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
//         <div className="flex flex-col gap-2 sm:hidden">
//           {/*   
//     <div className="w-full h-[300px] relative rounded-xl overflow-hidden shadow-md">
//       <Image
//         src={destinations[0].src}
//         alt={`MountainMyTrip Vinayak Top 1`}
//         fill
//         className="object-cover"
//         sizes="100vw"
//       />
//     </div> */}

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

//       {/* Main Content Section */}
//       <section className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-10">
//         {/* Left Content */}
//         <div className="flex-1">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//             KEDARKANTHA TREK FROM SANKRI
//           </h1>

//           <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
//             <div className="flex items-center gap-2">
//               <FaRegClock className="text-orange-500" />
//               <span>4 Nights 5 Days</span>
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
//             The Kedarkantha Trek from Sankri is one of the most sought-after
//             winter treks in India. Nestled in the Govind Wildlife Sanctuary,
//             this trail takes you through snow-covered pine forests, scenic
//             clearings, and offers a majestic summit climb to 12,500 feet.
//           </p>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             Highlights
//           </h2>
//           <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
//             <li>Stunning 360° views from Kedarkantha summit.</li>
//             <li>Perfect winter trek with snow from December to March.</li>
//             <li>Charming campsites like Juda Ka Talab.</li>
//             <li>Ideal for beginners and intermediate trekkers.</li>
//             <li>Explore Himalayan villages and forest trails.</li>
//           </ul>

//           <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
//           <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
//             <ul className="list-disc list-inside space-y-2">
//               <li>Accommodation during trek (camp/guesthouse).</li>
//               <li>Nutritious vegetarian meals.</li>
//               <li>Certified trek leaders and support staff.</li>
//               <li>Basic safety equipment and first aid.</li>
//               <li>Forest permits and entry fees.</li>
//             </ul>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Travel to/from Sankri.</li>
//               <li>Personal expenses and insurance.</li>
//               <li>Any off-itinerary expenses.</li>
//               <li>Porters or mules for personal luggage.</li>
//               <li>Tips for staff.</li>
//             </ul>
//           </div>

//           {/* <div className="my-8">
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
//           </div> */}

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
//                 Save 15%
//               </div>
//               <div className="text-xl font-bold text-red-600 mb-4">
//                 Starting From: <span className="text-gray-600">₹7,499</span>/Per
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

//       {/* Additional Sections */}
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
  { src: "/deal52.webp", gridClass: "lg:col-span-2" },
  { src: "/deal53.webp" },
  { src: "/deal49.webp" },
  { src: "/deal36.webp" },
  { src: "/deal14.webp" },
];

const itinerary = [
  {
    title: "Day 1: Dehradun to Sankri",
    content: `• Drive from Dehradun to Sankri (approx. 8-9 hrs).\n• Scenic route through Mussoorie and Purola.\n• Check into guesthouse/homestay at Sankri.`,
  },
  {
    title: "Day 2: Sankri to Juda Ka Talab",
    content: `• Trek from Sankri to Juda Ka Talab (approx. 4 km).\n• Beautiful trail through pine forests and snow patches.\n• Overnight stay in tents near the frozen lake.`,
  },
  {
    title: "Day 3: Juda Ka Talab to Kedarkantha Base Camp",
    content: `• Ascend to Kedarkantha Base Camp (approx. 3.5 km).\n• Stunning views of snow-capped Himalayan ranges.\n• Acclimatize and camp under the stars.`,
  },
  {
    title: "Day 4: Summit Kedarkantha Peak and back to Sankri",
    content: `• Early morning summit trek (3 km) to Kedarkantha Peak.\n• Witness a breathtaking sunrise from the summit.\n• Descend to Sankri via base camp. Overnight stay.`,
  },
  {
    title: "Day 5: Sankri to Dehradun",
    content: `• Drive back to Dehradun with unforgettable memories.\n• Trip ends by evening.`,
  },
];

export default function KedarkanthaTrek() {
  const [openIndex, setOpenIndex] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Kedarkantha Trek – Winter Snow Adventure in Uttarakhand",
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
                          alt={`Kedarkantha Trek ${j + 1}`}
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
                  alt={`Kedarkantha Trek ${index + 1}`}
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
            KEDARKANTHA TREK – WINTER SNOW ADVENTURE IN UTTARAKHAND
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2"><FaRegClock className="text-orange-500" />4 Nights 5 Days</div>
            <div className="flex items-center gap-2"><FaUsers className="text-orange-500" />Moderate Difficulty</div>
            <div className="flex items-center gap-2"><FaUndo className="text-orange-500" />Free Cancellation: Upto 7 Days</div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">About this Trek</h2>
          <p className="text-gray-600 mb-4">
            The Kedarkantha Trek is a classic winter trek through dense pine forests, charming campsites,
            and a summit climb with unforgettable Himalayan views. Ideal for first-time trekkers and snow lovers.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Experience snow trekking in the Himalayas.</li>
            <li>Stunning sunrise from Kedarkantha Peak at 12,500 ft.</li>
            <li>Stay beside the beautiful Juda Ka Talab.</li>
            <li>Rich flora, fauna, and quaint Himalayan villages.</li>
            <li>Perfect trek for winter holidays and photography.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Transport from/to Dehradun</li>
              <li>Tented accommodation on trek</li>
              <li>All meals during trek</li>
              <li>Certified trek leader & guides</li>
              <li>Permits and basic first-aid support</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal equipment or clothing</li>
              <li>Travel insurance or emergency evacuation</li>
              <li>Porter/mule for personal luggage</li>
              <li>Mobile or camera charges</li>
              <li>Anything not mentioned above</li>
            </ul>
          </div>

          <div className="my-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Itinerary</h2>
            <button
              onClick={() =>
                setOpenIndex(openIndex.length === itinerary.length ? [] : itinerary.map((_, i) => i))
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
                      {isOpen ? <FaChevronUp className="text-orange-500" /> : <FaChevronDown className="text-orange-500" />}
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
                Winter Departure Available
              </div> */}
              <div className="text-xl font-bold text-red-600 mb-1">
                Starting From: <span className="text-gray-600">₹7,499</span>/Per Person
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

      {/* Carousel + Footer Section */}
      <HimaliyeMyTripCarousel />
      <HimTrek />
    </>
  );
}

