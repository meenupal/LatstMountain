// // "use client";
// // import Image from "next/image";
// // import { useState } from "react";
// // import {
// //   FaRegClock,
// //   FaUsers,
// //   FaUndo,
// //   FaChevronDown,
// //   FaChevronUp,
// // } from "react-icons/fa";
// // import HimaliyeMyTripCarousel from "../components/HimaliyeMyTrip";
// // import HimTrek from "../components/HimTrek";

// // const destinations = [
//   // { name: "", src: "/deal67.webp", gridClass: "lg:col-span-2" },
//   // { name: "", src: "/deal68.webp" },
//   // { name: "", src: "/deal65.webp" },
//   // { name: "", src: "/deal62.webp" },
//   // { name: "", src: "/deal52.webp" },
// // ];

// // const itinerary = [
// //   {
// //     title: "Day 1: Arrival at Joshimath",
// //     content: `• Reach Joshimath by evening.\n• Meet trek leaders and fellow participants.\n• Overnight stay in guesthouse or hotel.`,
// //   },
// //   {
// //     title: "Day 2: Drive to Dhak & Trek to Gulling",
// //     content: `• Scenic drive to Dhak village.\n• Begin trek through forests and mountain villages.\n• Overnight stay at Gulling campsite.`,
// //   },
// //   // {
// //   //   title: "Day 3:Trek from Gulling to Tali Forest Camp",
// //   //   content: `• Ascend through oak and rhododendron forests.\n• Panoramic views of snow-capped peaks en route.\n• Camp in serene forest surroundings.`,
// //   // },
// //   // {
// //   //   title: "Day 3: Trek from Tali to Kuari Pass and back to Tali",
// //   //   content: `• Early morning start for summit push.\n• Stunning views from Kuari Pass of Nanda Devi and other peaks.\n• Return trek to Tali for overnight stay.`,
// //   // },
// //   {
// //     title: "Day 3: Tali to Kuari Pass & Return",
// //     content: `• Early morning start for summit push.\n• Stunning views from Kuari Pass of Nanda Devi and other peaks.\n• Return trek to Tali for overnight stay.`,
// //   },
  
  
// //   {
// //     title: "Day 4: Tali to Kuari Pass Summit and back to Tali",
// //     content: `• Early morning trek to Kuari Pass (3,650m).\n• Witness sunrise over Nanda Devi, Dronagiri, and more.\n• Return to Tali for overnight camping.`,
// //   },
// //   // {
// //   //   title: "Day 4: Trek to Auli via Gorson Bugyal and Drive to Joshimath",
// //   //   content: `• Walk through scenic Gorson meadows to Auli.\n• Drive back to Joshimath.\n• Celebrate successful trek and rest.`,
// //   // },
// //   {
// //     title: "Day 5: Departure from Joshimath",
// //     content: `• After breakfast, depart for Dehradun or onward journey.\n• End of memorable Kuari Pass adventure.`,
// //   },
// // ];

// // export default function KuariPassTrekJourney() {
// //   const [openIndex, setOpenIndex] = useState([]);
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     phone: "",
// //     email: "",
// //     tripName: "Kuari Pass Trek Journey",
// //     travellers: "",
// //   });

// //   const toggleAccordion = (index) => {
// //     setOpenIndex(openIndex === index ? null : index);
// //   };

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const message = `*New Trip Booking Request* 🚶‍♂️🏔️

// // *Name:* ${formData.name}
// // *Phone:* ${formData.phone}
// // *Email:* ${formData.email}
// // *Trip:* ${formData.tripName}
// // *No. of Travellers:* ${formData.travellers}

// // 📌 Please reach out for confirmation and next steps.`;

// //     const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(message)}`;
// //     window.open(whatsappURL, "_blank");
// //   };

// //   return (
// //     <>
      
// //       {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-16">
      
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[220px] md:auto-rows-[250px]">
// //           {destinations.map((item, index) => (
// //             <div
// //               key={index}
// //               className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${item.gridClass || ""}`}
// //             >
// //               <div className="w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110">
// //                 <Image
// //                   src={item.src}
// //                   alt={`MountainMyTrip Kuari Pass ${index + 1}`}
// //                   fill
// //                   className="object-cover"
// //                   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
// //                 />
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section> */}
      
// // <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
// //   <div className="flex flex-col gap-2 sm:hidden">
// // {/*   
// //     <div className="w-full h-[300px] relative rounded-xl overflow-hidden shadow-md">
// //       <Image
// //         src={destinations[0].src}
// //         alt={`MountainMyTrip Vinayak Top 1`}
// //         fill
// //         className="object-cover"
// //         sizes="100vw"
// //       />
// //     </div> */}

// //     {/* Show two rows of two images in flex */}
// //     <div className="flex gap-2">
// //       <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
// //         <Image
// //           src={destinations[1].src}
// //           alt={`MountainMyTrip Vinayak Top 2`}
// //           fill
// //           className="object-cover"
// //           sizes="50vw"
// //         />
// //       </div>
// //       <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
// //         <Image
// //           src={destinations[2].src}
// //           alt={`MountainMyTrip Vinayak Top 3`}
// //           fill
// //           className="object-cover"
// //           sizes="50vw"
// //         />
// //       </div>
// //     </div>

// //     <div className="flex gap-2">
// //       <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
// //         <Image
// //           src={destinations[3].src}
// //           alt={`MountainMyTrip Vinayak Top 4`}
// //           fill
// //           className="object-cover"
// //           sizes="50vw"
// //         />
// //       </div>
// //       <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
// //         <Image
// //           src={destinations[4].src}
// //           alt={`MountainMyTrip Vinayak Top 5`}
// //           fill
// //           className="object-cover"
// //           sizes="50vw"
// //         />
// //       </div>
// //     </div>
// //   </div>

// //   {/* For tablet and desktop view - original grid */}
// //   <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px]">
// //     {destinations.map((item, index) => (
// //       <div
// //         key={index}
// //         className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${item.gridClass || ""}`}
// //       >
// //         <div className="w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110">
// //           <Image
// //             src={item.src}
// //             alt={`MountainMyTrip Vinayak Top ${index + 1}`}
// //             fill
// //             className="object-cover"
// //             sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
// //           />
// //         </div>
// //       </div>
// //     ))}
// //   </div>
// // </section>

// //       {/* Main Section */}
// //       <section className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-10">
// //         {/* Left Content */}
// //         <div className="flex-1">
// //           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
// //             KUARI PASS TREK JOURNEY
// //           </h1>

// //           <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
// //             <div className="flex items-center gap-2">
// //               <FaRegClock className="text-orange-500" />
// //               <span>5 Nights 6 Days</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <FaUsers className="text-orange-500" />
// //               <span>Group Size: Small & Guided</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <FaUndo className="text-orange-500" />
// //               <span>Free Cancellation: Upto 7 Days</span>
// //             </div>
// //           </div>

// //           <h2 className="text-xl font-semibold text-gray-700 mb-2">About this Journey</h2>
// //           <p className="text-gray-600 mb-4">
// //             The Kuari Pass Trek, also known as the Lord Curzon Trail, is a perfect Himalayan journey for beginners and seasoned trekkers alike. Nestled in the Garhwal region of Uttarakhand, it offers spectacular views of India’s second highest peak, Nanda Devi, and a pristine trail through alpine meadows, forests, and remote villages.
// //           </p>

// //           <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
// //           <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
// //             <li>Panoramic views of Nanda Devi, Kamet, and Dronagiri peaks.</li>
// //             <li>Charming forest campsites with rich flora and fauna.</li>
// //             <li>Explore Gorson Bugyal and walk along expansive alpine meadows.</li>
// //             <li>Perfect for beginners and families with moderate fitness.</li>
// //             <li>Experience mountain culture in Himalayan villages.</li>
// //           </ul>

// //           <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
// //           <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
// //             <ul className="list-disc list-inside space-y-2">
// //               <li>Transportation from Rishikesh/Dehradun to Joshimath and back.</li>
// //               <li>All meals from Day 1 dinner to Day 6 breakfast.</li>
// //               <li>Accommodation in tents/guesthouses during trek.</li>
// //               <li>Certified trek leader, guides, and support staff.</li>
// //               <li>Camping and safety equipment including first aid.</li>
// //             </ul>
// //             <ul className="list-disc list-inside space-y-2">
// //               <li>Personal trekking gear or insurance.</li>
// //               <li>Porter for personal luggage (available on request).</li>
// //               <li>Any expenses due to unforeseen circumstances.</li>
// //             </ul>
// //           </div>

// //           {/* <div className="my-8">
// //             <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
// //               Itinerary
// //             </h2>
// //             <div className="flex flex-col gap-4">
// //               {itinerary.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   className="w-full border border-gray-200 rounded-xl shadow-sm bg-white"
// //                 >
// //                   <button
// //                     onClick={() => toggleAccordion(index)}
// //                     className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-100"
// //                   >
// //                     <span className="text-base md:text-lg font-semibold text-gray-800">
// //                       {item.title}
// //                     </span>
// //                     {openIndex === index ? (
// //                       <FaChevronUp className="text-orange-500" />
// //                     ) : (
// //                       <FaChevronDown className="text-orange-500" />
// //                     )}
// //                   </button>
// //                   {openIndex === index && (
// //                     <div className="px-5 pb-4 text-gray-600 whitespace-pre-line text-sm md:text-base">
// //                       {item.content}
// //                     </div>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>
// //           </div> */}
// //           {/* Itinerary Section */}
// // <div className="my-8">
// //   <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
// //     Itinerary
// //   </h2>

// //   <button
// //     onClick={() => {
// //       const allOpen = openIndex.length === itinerary.length;
// //       setOpenIndex(allOpen ? [] : itinerary.map((_, i) => i));
// //     }}
// //     className="mb-4 text-orange-600 font-medium hover:underline"
// //   >
// //     {openIndex.length === itinerary.length ? "Close All" : "Open All"}
// //   </button>

// //   <div className="flex flex-col gap-4">
// //     {itinerary.map((item, index) => {
// //       const isOpen = openIndex.includes(index);
// //       return (
// //         <div
// //           key={index}
// //           className="w-full border border-gray-200 rounded-xl shadow-sm bg-white"
// //         >
// //           <button
// //             onClick={() => {
// //               if (isOpen) {
// //                 setOpenIndex(openIndex.filter((i) => i !== index));
// //               } else {
// //                 setOpenIndex([...openIndex, index]);
// //               }
// //             }}
// //             className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-100"
// //           >
// //             <span className="text-base md:text-lg font-semibold text-gray-800">
// //               {item.title}
// //             </span>
// //             {isOpen ? (
// //               <FaChevronUp className="text-orange-500" />
// //             ) : (
// //               <FaChevronDown className="text-orange-500" />
// //             )}
// //           </button>
// //           {isOpen && (
// //             <div className="px-5 pb-4 text-gray-600 whitespace-pre-line text-sm md:text-base">
// //               {item.content}
// //             </div>
// //           )}
// //         </div>
// //       );
// //     })}
// //   </div>
// // </div>




// //         </div>

// //         {/* Booking Form */}
// //         <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
// //           <div className="sticky top-24">
// //             <div className="bg-white shadow-lg rounded-2xl p-6 border">
// //               <h3 className="text-lg font-semibold text-gray-800 mb-1">
// //                 Book Your Slot Now!
// //               </h3>
// //               <div className="text-sm text-green-600 font-bold mb-2">
// //                 Limited Period Offer: Save 10%
// //               </div>
// //               <div className="text-xl font-bold text-red-600 mb-4">
// //                 Starting From: <span className="text-gray-600">₹9,499</span>/Per Person
// //               </div>

// //               <form onSubmit={handleSubmit} className="space-y-3">
// //                 <input
// //                   type="text"
// //                   name="name"
// //                   placeholder="Full Name"
// //                   value={formData.name}
// //                   onChange={handleChange}
// //                   required
// //                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
// //                 />
// //                 <input
// //                   type="tel"
// //                   name="phone"
// //                   placeholder="Phone Number"
// //                   value={formData.phone}
// //                   onChange={handleChange}
// //                   required
// //                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
// //                 />
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   placeholder="Email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   required
// //                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
// //                 />
// //                 <input
// //                   type="text"
// //                   name="tripName"
// //                   value={formData.tripName}
// //                   readOnly
// //                   className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
// //                 />
// //                 <input
// //                   type="number"
// //                   name="travellers"
// //                   placeholder="No. of Travellers"
// //                   value={formData.travellers}
// //                   onChange={handleChange}
// //                   required
// //                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
// //                 />
// //                 <button
// //                   type="submit"
// //                   className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
// //                 >
// //                   Send Booking via WhatsApp
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <HimaliyeMyTripCarousel />
// //       <HimTrek />
// //     </>
// //   );
// // }

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
//   { name: "", src: "/deal67.webp", gridClass: "lg:col-span-2" },
//   { name: "", src: "/deal68.webp" },
//   { name: "", src: "/deal65.webp" },
//   { name: "", src: "/deal62.webp" },
//   { name: "", src: "/deal52.webp" },
// ];

// const itinerary = [
//   {
//     title: "Day 1: Rishikesh to Joshimath",
//     content: `• Drive from Rishikesh to Joshimath (approx. 8-9 hrs).
// • Scenic journey through Devprayag and Rudraprayag.
// • Overnight stay at guesthouse in Joshimath.`,
//   },
//   {
//     title: "Day 2: Joshimath to Dhak Village & Trek to Gulling",
//     content: `• Drive to Dhak village and begin trek.
// • Trek through charming forest and alpine meadows.
// • Arrive at Gulling camp for overnight stay.`,
//   },
//   {
//     title: "Day 3: Gulling to Khullara",
//     content: `• Trek from Gulling to Khullara (approx. 5 km).
// • Enjoy panoramic views of Dronagiri and Hathi Parvat.
// • Overnight stay in tents at Khullara.`,
//   },
//   {
//     title: "Day 4: Khullara to Kuari Pass Summit & Back to Khullara",
//     content: `• Early morning trek to Kuari Pass summit.
// • Witness sunrise and majestic Himalayan peaks like Nanda Devi.
// • Return to Khullara for the night.`,
//   },
//   {
//     title: "Day 5: Khullara to Joshimath via Dhak",
//     content: `• Trek down to Dhak village.
// • Drive back to Joshimath.
// • Stay overnight at guesthouse or homestay.`,
//   },
//   {
//     title: "Day 6: Joshimath to Rishikesh",
//     content: `• Depart for Rishikesh.
// • End of a memorable Kuari Pass Trek journey.`,
//   },
// ];

// export default function KuariPassTrek() {
//   const [openIndex, setOpenIndex] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "Kuari Pass Trek – The Lord Curzon Trail in Garhwal Himalayas",
//     travellers: "",
//   });

//   const toggleAccordion = (index) => {
//     if (openIndex.includes(index)) {
//       setOpenIndex(openIndex.filter((i) => i !== index));
//     } else {
//       setOpenIndex([...openIndex, index]);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const message = `*New Trip Booking Request* 🏕️✨

// *Name:* ${formData.name}
// *Phone:* ${formData.phone}
// ${formData.email ? `*Email:* ${formData.email}\n` : ""}
// *Trip:* ${formData.tripName}
// *No. of Travellers:* ${formData.travellers}

// 📌 Please reach out for confirmation and further details.`;

//     const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(message)}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <>
//       {/* Image Gallery */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
//         <div className="flex flex-col gap-2 sm:hidden">
//           {[1, 2, 3, 4].map((i) =>
//             i % 2 === 1 ? (
//               <div className="flex gap-2" key={i}>
//                 {[i, i + 1].map(
//                   (j) =>
//                     destinations[j] && (
//                       <div
//                         key={j}
//                         className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md"
//                       >
//                         <Image
//                           src={destinations[j].src}
//                           alt={`Kuari Pass Trek ${j + 1}`}
//                           fill
//                           className="object-cover"
//                           sizes="50vw"
//                         />
//                       </div>
//                     )
//                 )}
//               </div>
//             ) : null
//           )}
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
//                   alt={`Kuari Pass Trek ${index + 1}`}
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
//         <div className="flex-1">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//             KUARI PASS TREK – THE LORD CURZON TRAIL IN GARHWAL HIMALAYAS
//           </h1>

//           <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
//             <div className="flex items-center gap-2"><FaRegClock className="text-orange-500" />5 Nights 6 Days</div>
//             <div className="flex items-center gap-2"><FaUsers className="text-orange-500" />Moderate Difficulty</div>
//             <div className="flex items-center gap-2"><FaUndo className="text-orange-500" />Free Cancellation: Upto 7 Days</div>
//           </div>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">About this Trek</h2>
//           <p className="text-gray-600 mb-4">
//             The Kuari Pass Trek, famously known as the Lord Curzon Trail, offers magnificent views of Himalayan peaks like Nanda Devi, Dronagiri, and more. Trek through oak and rhododendron forests, alpine meadows, and remote Garhwali villages on this picturesque adventure.
//           </p>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
//           <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
//             <li>Breathtaking views of Nanda Devi and Dronagiri.</li>
//             <li>Scenic forest trails and bugyals (meadows).</li>
//             <li>Historic route explored by Lord Curzon.</li>
//             <li>Perfect for fit beginners and intermediate trekkers.</li>
//             <li>Explore the rich biodiversity of Garhwal Himalayas.</li>
//           </ul>

//           <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
//           <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
//             <ul className="list-disc list-inside space-y-2">
//               <li>Transport from/to Rishikesh</li>
//               <li>Accommodation during the trek</li>
//               <li>All meals from Joshimath onwards</li>
//               <li>Certified guides and trek leaders</li>
//               <li>First aid and forest permits</li>
//             </ul>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Personal trekking equipment</li>
//               <li>Insurance or evacuation costs</li>
//               <li>Any sightseeing expenses</li>
//               <li>Unscheduled transportation</li>
//               <li>Items not mentioned in inclusions</li>
//             </ul>
//           </div>

//           <div className="my-8">
//             <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Itinerary</h2>
//             <button
//               onClick={() =>
//                 setOpenIndex(openIndex.length === itinerary.length ? [] : itinerary.map((_, i) => i))
//               }
//               className="mb-4 text-orange-600 font-medium hover:underline"
//             >
//               {openIndex.length === itinerary.length ? "Close All" : "Open All"}
//             </button>

//             <div className="flex flex-col gap-4">
//               {itinerary.map((item, index) => {
//                 const isOpen = openIndex.includes(index);
//                 return (
//                   <div key={index} className="w-full border border-gray-200 rounded-xl shadow-sm bg-white">
//                     <button
//                       onClick={() => toggleAccordion(index)}
//                       className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-100"
//                     >
//                       <span className="text-base md:text-lg font-semibold text-gray-800">{item.title}</span>
//                       {isOpen ? <FaChevronUp className="text-orange-500" /> : <FaChevronDown className="text-orange-500" />}
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
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">Book Your Trek Today</h3>
//               <div className="text-sm text-green-600 font-bold mb-2">Fixed Group Departures Available</div>
//               <div className="text-xl font-bold text-red-600 mb-4">
//                 Starting From: <span className="text-gray-600">₹7,499</span>/Per Person
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-3">
//                 <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
//                 <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
//                 <input type="email" name="email" placeholder="Email (optional)" value={formData.email} onChange={handleChange} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
//                 <input type="text" name="tripName" value={formData.tripName} readOnly className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-600" />
//                 <input type="number" name="travellers" placeholder="No. of Travellers" value={formData.travellers} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
//                 <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg">Send Booking via WhatsApp</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Carousel and Extras */}
//       <HimaliyeMyTripCarousel />
//       <HimTrek />
//     </>
//   );
// }

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
//   { src: "/nag1.webp", gridClass: "lg:col-span-2" },
//   { src: "/nag2.webp" },
//   { src: "/nag3.webp" },
//   { src: "/nag4.webp" },
//   { src: "/nag5.webp" },
// ];

// const itinerary = [
//   {
//     title: "Day 1: Dehradun to Pantwari & Trek to Camp",
//     content:
//       "• Drive from Dehradun to Pantwari (approx. 4-5 hrs).\n• Begin trek from Pantwari to base camp (4-5 km).\n• Enjoy sunset views and dinner at campsite.",
//   },
//   {
//     title: "Day 2: Trek to Nag Tibba Summit & Return to Dehradun",
//     content:
//       "• Early morning trek to Nag Tibba Summit (approx. 3-4 hrs).\n• Enjoy panoramic views of Himalayan peaks.\n• Descend to Pantwari and drive back to Dehradun.",
//   },
// ];

// export default function NagTibbaTrek() {
//   const [openIndex, setOpenIndex] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "Nag Tibba Weekend Trek – Quick Himalayan Getaway",
//     travellers: "",
//   });

//   const toggleAccordion = (index) => {
//     setOpenIndex((prev) =>
//       prev.includes(index)
//         ? prev.filter((i) => i !== index)
//         : [...prev, index]
//     );
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const message = `*New Trip Booking Request* 🏕️✨

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
//           {[1, 2, 3, 4].map((i) => (
//             i % 2 === 1 && (
//               <div className="flex gap-2" key={i}>
//                 {[i, i + 1].map((j) => (
//                   destinations[j] && (
//                     <div key={j} className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
//                       <Image
//                         src={destinations[j].src}
//                         alt={`Nag Tibba Trek ${j + 1}`}
//                         fill
//                         className="object-cover"
//                         sizes="50vw"
//                       />
//                     </div>
//                   )
//                 ))}
//               </div>
//             )
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
//                   alt={`Nag Tibba Trek ${index + 1}`}
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
//             NAG TIBBA WEEKEND TREK – QUICK HIMALAYAN GETAWAY
//           </h1>

//           <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
//             <div className="flex items-center gap-2"><FaRegClock className="text-orange-500" />1 Night 2 Days</div>
//             <div className="flex items-center gap-2"><FaUsers className="text-orange-500" />Easy & Beginner Friendly</div>
//             <div className="flex items-center gap-2"><FaUndo className="text-orange-500" />Free Cancellation: Upto 5 Days</div>
//           </div>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">About this Trek</h2>
//           <p className="text-gray-600 mb-4">
//             The Nag Tibba Trek is a perfect weekend adventure for beginners and nature lovers.
//             Located near Mussoorie, it offers dense forests, open meadows, and a summit with
//             breathtaking views of Swargarohini, Bandarpoonch, and Kedarnath peaks.
//           </p>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
//           <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
//             <li>Quick weekend escape into the Himalayas</li>
//             <li>Stunning summit views of Himalayan ranges</li>
//             <li>Ideal for beginners and first-time trekkers</li>
//             <li>Scenic drive through Mussoorie and Pantwari</li>
//             <li>Experience camping under the stars</li>
//           </ul>

//           <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
//           <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
//             <ul className="list-disc list-inside space-y-2">
//               <li>Transport from/to Dehradun</li>
//               <li>Accommodation in tents</li>
//               <li>All meals during the trek</li>
//               <li>Local guide and trek leader</li>
//               <li>Permits and medical assistance</li>
//             </ul>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Any personal items or gear</li>
//               <li>Insurance or emergency costs</li>
//               <li>Porters for personal bags</li>
//               <li>Snacks or beverages</li>
//               <li>Anything not mentioned above</li>
//             </ul>
//           </div>

//           <div className="my-8">
//             <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Itinerary</h2>
//             <button
//               onClick={() =>
//                 setOpenIndex(openIndex.length === itinerary.length ? [] : itinerary.map((_, i) => i))
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
//                       {isOpen ? <FaChevronUp className="text-orange-500" /> : <FaChevronDown className="text-orange-500" />}
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

//         {/* Right Booking Form */}
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
//                 Starting From: <span className="text-gray-600">₹2,499</span>/Per Person
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

//       {/* Carousel + Other Sections */}
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
  { src: "/kuari1.webp", gridClass: "lg:col-span-2" },
  { src: "/kuari2.webp" },
  { src: "/kuari3.webp" },
  { src: "/kuari4.webp" },
  { src: "/kuari5.webp" },
];

const itinerary = [
  {
    title: "Day 1: Rishikesh to Auli & Trek to Gorson Bugyal",
    content:
      "• Drive from Rishikesh to Auli (approx. 7-8 hrs).\n• Begin trek from Auli to Gorson Bugyal (4-5 km).\n• Camp under the stars and enjoy a bonfire.",
  },
  {
    title: "Day 2: Trek to Kuari Pass Summit & Return to Auli",
    content:
      "• Early morning trek to Kuari Pass Summit (approx. 6-7 hrs).\n• Experience panoramic views of Nanda Devi, Trishul, and other peaks.\n• Descend back to Auli and drive back to Rishikesh.",
  },
];

export default function KuariPassTrek() {
  const [openIndex, setOpenIndex] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Kuari Pass Trek – Himalayan Adventure",
    travellers: "",
  });

  const toggleAccordion = (index) => {
    setOpenIndex((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
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

    const whatsappURL = `https://wa.me/6239092532?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
        <div className="flex flex-col gap-2 sm:hidden">
          {[1, 2, 3, 4].map((i) => (
            i % 2 === 1 && (
              <div className="flex gap-2" key={i}>
                {[i, i + 1].map((j) => (
                  destinations[j] && (
                    <div key={j} className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
                      <Image
                        src={destinations[j].src}
                        alt={`Kuari Pass Trek ${j + 1}`}
                        fill
                        className="object-cover"
                        sizes="50vw"
                      />
                    </div>
                  )
                ))}
              </div>
            )
          ))}
        </div>

        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px]">
          {destinations.map((item, index) => (
            <div
              key={index}
              className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${item.gridClass || ""}`}
            >
              <div className="w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110">
                <Image
                  src={item.src}
                  alt={`Kuari Pass Trek ${index + 1}`}
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
            KUARI PASS TREK
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2"><FaRegClock className="text-orange-500" />1 Night 2 Days</div>
            <div className="flex items-center gap-2"><FaUsers className="text-orange-500" />Moderate Difficulty</div>
            <div className="flex items-center gap-2"><FaUndo className="text-orange-500" />Free Cancellation: Upto 5 Days</div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">About this Trek</h2>
          <p className="text-gray-600 mb-4">
            The Kuari Pass Trek offers one of the most breathtaking Himalayan experiences, suitable for trekkers with some experience.
            Located in Uttarakhand, it takes you through lush forests, meadows, and high-altitude terrains with mesmerizing views of the
            Nanda Devi, Trishul, and other towering peaks.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Epic views of the Nanda Devi and other Himalayan peaks</li>
            <li>Moderate-level trekking for a true Himalayan adventure</li>
            <li>Camp under the stars and experience the peace of nature</li>
            <li>Walk through pristine alpine forests and meadows</li>
            <li>Ideal for nature lovers and adventure seekers</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Transport from/to Rishikesh</li>
              <li>Accommodation in tents</li>
              <li>All meals during the trek</li>
              <li>Local guide and trek leader</li>
              <li>Permits and medical assistance</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Any personal items or gear</li>
              <li>Insurance or emergency costs</li>
              <li>Porters for personal bags</li>
              <li>Snacks or beverages</li>
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

        {/* Right Booking Form */}
        <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
          <div className="sticky top-24">
            <div className="bg-white shadow-lg rounded-2xl p-6 border">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Book Your Trek Today
              </h3>
              {/* <div className="text-sm text-green-600 font-bold mb-2">
                Weekend Departure Available
              </div> */}
              <div className="text-xl font-bold text-red-600 mb-1">
                Starting From: <span className="text-gray-600">₹7,000</span>/Per Person
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

      {/* Carousel + Other Sections */}
      <HimaliyeMyTripCarousel />
      <HimTrek />
    </>
  );
}

