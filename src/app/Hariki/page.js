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
  // { src: "/deal54.webp", gridClass: "lg:col-span-2" },
  // { src: "/deal55.webp" },
  // { src: "/deal57.webp" },
  // { src: "/deal50.webp" },
  // { src: "/deal56.webp" },
// ];

// const itinerary = [
//   {
//     title: "Day 1: Arrival at Sankri",
//     content: `• Arrive at Sankri village – the base camp.\n• Trek orientation, team meet-up, and overnight stay.`,
//   },
//   {
//     title: "Day 2: Sankri to Taluka to Seema",
//     content: `• Drive to Taluka and begin the trek to Seema.\n• Enjoy forest trails and riverside paths.\n• Overnight camping at Seema.`,
//   },
//   {
//     title: "Day 3: Seema to Har Ki Dun Valley",
//     content: `• Trek through alpine meadows and Osla village.\n• Arrive at the pristine Har Ki Dun Valley.\n• Relax and camp under the stars.`,
//   },
//   {
//     title: "Day 4: Exploration Day at Har Ki Dun",
//     content: `• Explore Maninda Tal or Jaundar Glacier view.\n• Witness Swargarohini and surrounding peaks.\n• Return to camp for bonfire and dinner.`,
//   },
//   {
//     title: "Day 5: Har Ki Dun to Seema",
//     content: `• Retrace the trail to Seema.\n• Capture scenic moments and relax at campsite.`,
//   },
//   // {
//   //   title: "Day 6: Seema to Taluka and back to Sankri",
//   //   content: `• Trek down to Taluka and drive back to Sankri.\n• Farewell dinner and stay at guesthouse.`,
//   // },
//   {
//     title: "Day 6: Departure from Sankri",
//     content: `• Enjoy breakfast and depart with memories of the majestic Har Ki Dun Valley.`,
//   },
// ];

// export default function HarKiDunTrek() {
//   const [openIndex, setOpenIndex] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "Har Ki Dun Valley Expedition",
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
//       {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-16">
       
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[220px] md:auto-rows-[250px]">
//           {destinations.map((item, index) => (
//             <div
//               key={index}
//               className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${item.gridClass || ""}`}
//             >
//               <div className="w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110">
//                 <Image
//                   src={item.src}
//                   alt={`Har Ki Dun Trek ${index + 1}`}
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
//             HAR KI DUN VALLEY EXPEDITION
//           </h1>

//           <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
//             <div className="flex items-center gap-2">
//               <FaRegClock className="text-orange-500" />
//               <span>6 Nights 7 Days</span>
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
//             The Har Ki Dun Valley Trek is a timeless Himalayan journey that
//             combines myth, beauty, and adventure. Known as the “Valley of Gods,”
//             it is perfect for trekkers looking to explore offbeat trails, quaint
//             villages, alpine meadows, and breathtaking valley views.
//           </p>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             Highlights
//           </h2>
//           <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
//             <li>Ancient villages and the legendary Osla temple.</li>
//             <li>
//               Spectacular views of Swargarohini, Bandarpoonch & Black Peak.
//             </li>
//             <li>Ideal trek for photography, nature walks & birdwatching.</li>
//             <li>Adventure through pine forests and glacial valleys.</li>
//             <li>Beginner to intermediate friendly expedition.</li>
//           </ul>

//           <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
//           <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
//             <ul className="list-disc list-inside space-y-2">
//               <li>Accommodation in tents/guesthouses.</li>
//               <li>Nutritious vegetarian meals during trek.</li>
//               <li>Experienced trek guides and support team.</li>
//               <li>First aid and safety equipment.</li>
//               <li>Permits and entry charges.</li>
//             </ul>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Travel to/from Sankri base.</li>
//               <li>Personal expenses or insurance.</li>
//               <li>Extra baggage or porters.</li>
//               <li>Unscheduled transport costs.</li>
//               <li>Tips or gratitude to staff.</li>
//             </ul>
//           </div>

// {/*   
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
//           </div> */}

//           {/* Itinerary Section */}
// <div className="my-8">
//   <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
//     Itinerary
//   </h2>

//   <button
//     onClick={() => {
//       const allOpen = openIndex.length === itinerary.length;
//       setOpenIndex(allOpen ? [] : itinerary.map((_, i) => i));
//     }}
//     className="mb-4 text-orange-600 font-medium hover:underline"
//   >
//     {openIndex.length === itinerary.length ? "Close All" : "Open All"}
//   </button>

//   <div className="flex flex-col gap-4">
//     {itinerary.map((item, index) => {
//       const isOpen = openIndex.includes(index);
//       return (
//         <div
//           key={index}
//           className="w-full border border-gray-200 rounded-xl shadow-sm bg-white"
//         >
//           <button
//             onClick={() => {
//               if (isOpen) {
//                 setOpenIndex(openIndex.filter((i) => i !== index));
//               } else {
//                 setOpenIndex([...openIndex, index]);
//               }
//             }}
//             className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-100"
//           >
//             <span className="text-base md:text-lg font-semibold text-gray-800">
//               {item.title}
//             </span>
//             {isOpen ? (
//               <FaChevronUp className="text-orange-500" />
//             ) : (
//               <FaChevronDown className="text-orange-500" />
//             )}
//           </button>
//           {isOpen && (
//             <div className="px-5 pb-4 text-gray-600 whitespace-pre-line text-sm md:text-base">
//               {item.content}
//             </div>
//           )}
//         </div>
//       );
//     })}
//   </div>
// </div>

//         </div>

//         {/* Booking Form Section */}
//         <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
//           <div className="sticky top-24">
//             <div className="bg-white shadow-lg rounded-2xl p-6 border">
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">
//                 Book Your Slot Now!
//               </h3>
//               <div className="text-sm text-green-600 font-bold mb-2">
//                 Limited Season Offer
//               </div>
//               <div className="text-xl font-bold text-red-600 mb-4">
//                 Starting From: <span className="text-gray-600">₹9,999</span>/Per
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
  { src: "/deal54.webp", gridClass: "lg:col-span-2" },
  { src: "/deal55.webp" },
  { src: "/deal57.webp" },
  { src: "/deal50.webp" },
  { src: "/deal56.webp" },
];

const itinerary = [
  {
    title: "Day 1: Dehradun to Sankri",
    content: `• Drive from Dehradun to Sankri (200 km, approx. 8-10 hrs).
• Scenic route via Mussoorie and Purola.
• Overnight stay in guesthouse at Sankri.`,
  },
  {
    title: "Day 2: Sankri to Taluka and Trek to Seema",
    content: `• Drive to Taluka (12 km), then trek to Seema (12 km).
• Trail follows Supin River through forests and villages.
• Overnight stay in tents at Seema.`,
  },
  {
    title: "Day 3: Seema to Har Ki Dun",
    content: `• Trek to Har Ki Dun (11 km).
• Explore lush meadows, waterfalls, and snowy peaks.
• Camp at Har Ki Dun with views of Swargarohini.`,
  },
  {
    title: "Day 4: Har Ki Dun Exploration Day",
    content: `• Acclimatization and exploration around Har Ki Dun.
• Optional hike to Jaundhar Glacier or Maninda Tal.
• Return to campsite for overnight stay.`,
  },
  {
    title: "Day 5: Har Ki Dun to Seema",
    content: `• Trek back from Har Ki Dun to Seema (11 km).
• Descend through alpine meadows and pine forests.
• Overnight in camps at Seema.`,
  },
  {
    title: "Day 6: Seema to Taluka and Drive to Sankri",
    content: `• Trek to Taluka (12 km) and drive back to Sankri.
• Rest and enjoy village hospitality.
• Overnight at guesthouse in Sankri.`,
  },
  {
    title: "Day 7: Sankri to Dehradun",
    content: `• Morning departure from Sankri to Dehradun.
• Drive back with beautiful memories.
• Trip ends by evening.`,
  },
];

export default function HarKiDunTrek() {
  const [openIndex, setOpenIndex] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Har Ki Dun Trek – The Valley of Gods Adventure",
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
    const message = `*New Trip Booking Request* 🏔️✨

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
                          alt={`Har Ki Dun Trek ${j + 1}`}
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
              className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${item.gridClass || ""}`}
            >
              <div className="w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110">
                <Image
                  src={item.src}
                  alt={`Har Ki Dun Trek ${index + 1}`}
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
            HAR KI DUN TREK – THE VALLEY OF GODS ADVENTURE
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />6 Nights 7 Days
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />Easy to Moderate
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-orange-500" />Free Cancellation: Upto 7 Days
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">About this Trek</h2>
          <p className="text-gray-600 mb-4">
            Har Ki Dun, known as the “Valley of Gods,” offers a pristine trek in the Garhwal Himalayas. A cultural and scenic delight, this trail takes you through ancient villages, alpine forests, and breathtaking valleys surrounded by snow-capped peaks.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Explore the mythical Valley of Gods in Uttarakhand.</li>
            <li>Scenic views of Swargarohini, Jaundhar Glacier & Black Peak.</li>
            <li>Experience local culture in centuries-old villages like Osla.</li>
            <li>Perfect for nature lovers, birdwatchers, and photographers.</li>
            <li>Rich biodiversity and verdant forest trails.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Transport from/to Dehradun</li>
              <li>Accommodation in guesthouses/camps</li>
              <li>Nutritious vegetarian meals</li>
              <li>Certified trek leaders and local guides</li>
              <li>First aid and permits</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Backpacks or trekking gear</li>
              <li>Insurance or emergency evacuation</li>
              <li>Tips, porters, or mule charges</li>
              <li>Mobile or camera charging</li>
              <li>Personal expenses</li>
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
                Limited Batches Available
              </div> */}
              <div className="text-xl font-bold text-red-600 mb-1">
                Starting From: <span className="text-gray-600">₹9,999</span>/Per Person
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


