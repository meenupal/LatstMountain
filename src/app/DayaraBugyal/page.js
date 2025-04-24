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
//   { name: "", src: "/deal79.webp", gridClass: "lg:col-span-2" },
//   { name: "", src: "/deal80.webp" },
//   { name: "", src: "/deal81.webp" },
//   { name: "", src: "/deal42.webp" },
//   { name: "", src: "/deal43.webp" },
// ];

// const itinerary = [
//   {
//     title: "Day 1: Dehradun to Raithal",
//     content: `• Assemble in Dehradun and drive to Raithal (7-8 hours).
// • Scenic mountain drive with glimpses of the Bhagirathi river.
// • Overnight stay in homestay or guesthouse.`,
//   },
//   {
//     title: "Day 2: Raithal to Gui",
//     content: `• Trek from Raithal to Gui campsite (approx. 4km).
// • Easy ascent through forest trails and alpine meadows.
// • Overnight camping at Gui with views of Mt. Bandarpoonch.`,
//   },
//   {
//     title: "Day 3: Gui to Dayara Bugyal and back",
//     content: `• Early start to trek towards Dayara Bugyal (approx. 6km).
// • Enjoy the vast alpine meadows with Himalayan peaks in view.
// • Return to Gui for overnight camping.`,
//   },
//   {
//     title: "Day 4: Gui to Raithal and drive to Dehradun",
//     content: `• Trek back to Raithal from Gui (approx. 4km).
// • Drive to Dehradun with beautiful memories.`,
//   },
// ];

// export default function DayaraBugyalTrek() {
//   const [openIndex, setOpenIndex] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "Dayara Bugyal Trek",
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
//     const message = `*New Trip Booking Request* 🏞️🧗‍♂️\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Trip:* ${formData.tripName}\n*No. of Travellers:* ${formData.travellers}\n\n📌 Please reach out for confirmation and next steps.`;

//     const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <>
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
//         <div className="flex flex-col gap-2 sm:hidden">
//           <div className="flex gap-2">
//             <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
//               <Image src={destinations[1].src} alt="Dayara 2" fill className="object-cover" sizes="50vw" />
//             </div>
//             <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
//               <Image src={destinations[2].src} alt="Dayara 3" fill className="object-cover" sizes="50vw" />
//             </div>
//           </div>
//           <div className="flex gap-2">
//             <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
//               <Image src={destinations[3].src} alt="Dayara 4" fill className="object-cover" sizes="50vw" />
//             </div>
//             <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
//               <Image src={destinations[4].src} alt="Dayara 5" fill className="object-cover" sizes="50vw" />
//             </div>
//           </div>
//         </div>

//         <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px]">
//           {destinations.map((item, index) => (
//             <div key={index} className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${item.gridClass || ""}`}>
//               <div className="w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110">
//                 <Image src={item.src} alt={`Dayara ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-10">
//         <div className="flex-1">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">DAYARA BUGYAL TREK</h1>
//           <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
//             <div className="flex items-center gap-2"><FaRegClock className="text-orange-500" /><span>3 Nights 4 Days</span></div>
//             <div className="flex items-center gap-2"><FaUsers className="text-orange-500" /><span>Small Guided Groups</span></div>
//             <div className="flex items-center gap-2"><FaUndo className="text-orange-500" /><span>Free Cancellation: Up to 7 Days</span></div>
//           </div>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">About this Journey</h2>
//           <p className="text-gray-600 mb-4">
//             The Dayara Bugyal Trek is a mesmerizing Himalayan hike through lush forests and expansive meadows. With panoramic views of the snow-covered peaks and rich flora, this trail is perfect for beginners and nature lovers seeking an offbeat adventure.
//           </p>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
//           <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
//             <li>Walk across one of India's most beautiful alpine meadows.</li>
//             <li>Experience the view of Bandarpoonch and other Himalayan peaks.</li>
//             <li>Camp at scenic spots under a sky full of stars.</li>
//             <li>Easy to moderate trail, suitable for all age groups.</li>
//             <li>Authentic Garhwali hospitality in local villages.</li>
//           </ul>

//           <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
//           <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
//             <ul className="list-disc list-inside space-y-2">
//               <li>All meals from Day 1 dinner to Day 4 breakfast.</li>
//               <li>Accommodation in camps or village homestays.</li>
//               <li>Experienced trek guide and support team.</li>
//               <li>First aid kit and basic medical support.</li>
//               <li>All applicable forest entry fees.</li>
//             </ul>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Travel to/from Dehradun.</li>
//               <li>Personal items and equipment.</li>
//               <li>Insurance and emergency evacuation.</li>
//               <li>Porters or mules for personal baggage (optional).</li>
//             </ul>
//           </div>

//           {/* <div className="my-8">
//             <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Itinerary</h2>
//             <div className="flex flex-col gap-4">
//               {itinerary.map((item, index) => (
//                 <div key={index} className="w-full border border-gray-200 rounded-xl shadow-sm bg-white">
//                   <button onClick={() => toggleAccordion(index)} className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-100">
//                     <span className="text-base md:text-lg font-semibold text-gray-800">{item.title}</span>
//                     {openIndex === index ? <FaChevronUp className="text-orange-500" /> : <FaChevronDown className="text-orange-500" />}
//                   </button>
//                   {openIndex === index && (
//                     <div className="px-5 pb-4 text-gray-600 whitespace-pre-line text-sm md:text-base">{item.content}</div>
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

//         <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
//           <div className="sticky top-24">
//             <div className="bg-white shadow-lg rounded-2xl p-6 border">
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">Book Your Slot Now!</h3>
//               <div className="text-sm text-green-600 font-bold mb-2">Limited Season Batch: Early Bird Discounts!</div>
//               <div className="text-xl font-bold text-red-600 mb-4">Starting From: <span className="text-gray-600">₹5,999</span>/Per Person</div>
//               <form onSubmit={handleSubmit} className="space-y-3">
//                 <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
//                 <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
//                 <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
//                 <input type="text" name="tripName" value={formData.tripName} readOnly className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-600" />
//                 <input type="number" name="travellers" placeholder="No. of Travellers" value={formData.travellers} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
//                 <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg">Send Booking via WhatsApp</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       <HimaliyeMyTripCarousel />
//       <HimTrek />
//     </>
//   );
// // }


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
  { src: "/deal42.webp", gridClass: "lg:col-span-2" },
  { src: "/deal43.webp" },
  { src: "/deal34.webp" },
  { src: "/deal41.webp" },
  { src: "/deal56.webp" },
];

const itinerary = [
  {
    title: "Day 1: Dehradun to Raithal (7-8 hrs drive)",
    content: `• Drive from Dehradun to Raithal village via Uttarkashi.\n• Scenic views and a calm Himalayan village welcome.\n• Check into a homestay and acclimatize.`,
  },
  {
    title: "Day 2: Raithal to Gui Campsite",
    content: `• Begin your trek to Gui (approx. 4 km).\n• Gradual ascent through pine and oak forests.\n• Camp at Gui amidst scenic views and serenity.`,
  },
  {
    title: "Day 3: Gui to Dayara Bugyal and back",
    content: `• Trek to the stunning Dayara Bugyal (approx. 6 km).\n• Enjoy panoramic views of Bandarpoonch, Draupadi Ka Danda.\n• Return to Gui or stay at Dayara depending on weather.`,
  },
  {
    title: "Day 4: Return to Raithal and Drive to Dehradun",
    content: `• Descend to Raithal after breakfast.\n• Drive back to Dehradun with unforgettable memories.\n• Trip concludes by late evening.`,
  },
];

export default function DayaraBugyalTrek() {
  const [openIndex, setOpenIndex] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Dayara Bugyal Trek – Meadows of the Himalayas",
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
    const message = `*New Trip Booking Request* 🏞️✨

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
          {[1, 2, 3, 4].map((i) => (
            i % 2 === 1 && (
              <div className="flex gap-2" key={i}>
                {[i, i + 1].map((j) => (
                  destinations[j] && (
                    <div key={j} className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
                      <Image
                        src={destinations[j].src}
                        alt={`Dayara Bugyal ${j + 1}`}
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
                  alt={`Dayara Bugyal ${index + 1}`}
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
            DAYARA BUGYAL TREK – MEADOWS OF THE HIMALAYAS
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2"><FaRegClock className="text-orange-500" />3 Nights 4 Days</div>
            <div className="flex items-center gap-2"><FaUsers className="text-orange-500" />Easy to Moderate</div>
            <div className="flex items-center gap-2"><FaUndo className="text-orange-500" />Free Cancellation: Upto 7 Days</div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">About this Trek</h2>
          <p className="text-gray-600 mb-4">
            The Dayara Bugyal Trek is a perfect introduction to Himalayan trekking. Known for its vast alpine meadows, this trek offers grand views of snow-clad peaks, making it ideal for nature lovers and beginners alike.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Explore the majestic Dayara alpine meadows.</li>
            <li>Witness Himalayan peaks like Bandarpoonch and Black Peak.</li>
            <li>Camp in serene forest clearings and high-altitude meadows.</li>
            <li>Easy to moderate trail ideal for first-time trekkers.</li>
            <li>Enjoy scenic drives through Uttarkashi region.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Transport from/to Dehradun</li>
              <li>Accommodation in homestays and tents</li>
              <li>All meals during the trek</li>
              <li>Experienced trek leaders and local guides</li>
              <li>Trek permits and medical support</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal trekking equipment</li>
              <li>Travel insurance and emergencies</li>
              <li>Tips or donations</li>
              <li>Camera/mobile charging</li>
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
//   { src: "/deal79.webp", gridClass: "lg:col-span-2" },
//   { src: "/deal80.webp" },
//   { src: "/deal81.webp" },
//   { src: "/deal42.webp" },
//   { src: "/deal43.webp" },
// ];

// const itinerary = [
//   {
//     title: "Day 1: Dehradun to Raithal",
//     content:
//       `• Assemble in Dehradun and drive to Raithal (7-8 hours).\n• Scenic mountain drive with glimpses of the Bhagirathi river.\n• Overnight stay in homestay or guesthouse.`,
//   },
//   {
//     title: "Day 2: Raithal to Gui",
//     content:
//       `• Trek from Raithal to Gui campsite (approx. 4km).\n• Easy ascent through forest trails and alpine meadows.\n• Overnight camping at Gui with views of Mt. Bandarpoonch.`,
//   },
//   {
//     title: "Day 3: Gui to Dayara Bugyal and back",
//     content:
//       `• Early start to trek towards Dayara Bugyal (approx. 6km).\n• Enjoy the vast alpine meadows with Himalayan peaks in view.\n• Return to Gui for overnight camping.`,
//   },
//   {
//     title: "Day 4: Gui to Raithal and drive to Dehradun",
//     content:
//       `• Trek back to Raithal from Gui (approx. 4km).\n• Drive to Dehradun with beautiful memories.`,
//   },
// ];

// export default function DayaraBugyalTrek() {
//   const [openIndex, setOpenIndex] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "Dayara Bugyal Trek",
//     travellers: "",
//   });
//   const [successMsg, setSuccessMsg] = useState("");
//   const [loading, setLoading] = useState(false);

//   const toggleAccordion = (index) => {
//     setOpenIndex((prev) =>
//       prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
//     );
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Simulating form submission
//       await new Promise((res) => setTimeout(res, 1000)); // Simulate delay

//       setSuccessMsg("✅ Booking request sent! We’ll get in touch soon.");
//       setFormData({
//         name: "",
//         phone: "",
//         email: "",
//         tripName: "Dayara Bugyal Trek",
//         travellers: "",
//       });
//     } catch (error) {
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Top Image Grid */}
//       <section className="max-w-7xl mx-auto px-4 py-12 mt-8">
//         <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px]">
//           {destinations.map((item, i) => (
//             <div
//               key={i}
//               className={`relative rounded-xl overflow-hidden shadow-md ${item.gridClass || ""}`}
//             >
//               <Image
//                 src={item.src}
//                 alt={`Dayara ${i + 1}`}
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Content & Form Section */}
//       <section className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-10">
//         {/* Left Content */}
//         <div className="flex-1">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">DAYARA BUGYAL TREK</h1>
//           <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
//             <span className="flex items-center gap-2">
//               <FaRegClock className="text-orange-500" />
//               3 Nights 4 Days
//             </span>
//             <span className="flex items-center gap-2">
//               <FaUsers className="text-orange-500" />
//               Small Guided Groups
//             </span>
//             <span className="flex items-center gap-2">
//               <FaUndo className="text-orange-500" />
//               Free Cancellation: Up to 7 Days
//             </span>
//           </div>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">About this Journey</h2>
//           <p className="text-gray-600 mb-4">
//             The Dayara Bugyal Trek is a mesmerizing Himalayan hike through lush forests and expansive meadows. With panoramic views of the snow-covered peaks and rich flora, this trail is perfect for beginners and nature lovers seeking an offbeat adventure.
//           </p>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
//           <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
//             <li>Walk across one of India's most beautiful alpine meadows.</li>
//             <li>View Bandarpoonch and other Himalayan peaks.</li>
//             <li>Camp under a starlit sky in pristine wilderness.</li>
//             <li>Easy to moderate trail – great for all ages.</li>
//             <li>Experience Garhwali hospitality in local villages.</li>
//           </ul>

//           <h2 className="text-2xl font-bold mb-4 text-gray-800">Excluded & Included</h2>
//           <div className="grid md:grid-cols-2 gap-6 text-gray-700 mb-8">
//             <ul className="list-disc list-inside space-y-2">
//               <li>All meals from Day 1 dinner to Day 4 breakfast.</li>
//               <li>Accommodation in camps or homestays.</li>
//               <li>Experienced trek guide and support staff.</li>
//               <li>First aid kit and basic medical support.</li>
//               <li>All applicable forest entry fees.</li>
//             </ul>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Travel to/from Dehradun.</li>
//               <li>Personal gear and items.</li>
//               <li>Insurance or emergency evacuation.</li>
//               <li>Porters or mules for personal luggage (optional).</li>
//             </ul>
//           </div>

//           {/* Itinerary Accordion */}
//           <div className="my-8">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Itinerary</h2>
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
//                   <div key={index} className="border rounded-xl shadow-sm bg-white">
//                     <button
//                       onClick={() => toggleAccordion(index)}
//                       className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-100"
//                     >
//                       <span className="text-lg font-semibold text-gray-800">{item.title}</span>
//                       {isOpen ? (
//                         <FaChevronUp className="text-orange-500" />
//                       ) : (
//                         <FaChevronDown className="text-orange-500" />
//                       )}
//                     </button>
//                     {isOpen && (
//                       <div className="px-5 pb-4 text-gray-600 whitespace-pre-line">{item.content}</div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Booking Form */}
//         <aside className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
//           <div className="sticky top-24 bg-white shadow-lg rounded-2xl p-6 border">
//             <h3 className="text-lg font-semibold text-gray-800 mb-1">Book Your Slot Now!</h3>
//             <p className="text-sm text-green-600 font-bold mb-2">Limited Season Batch: Early Bird Discounts!</p>
//             <p className="text-xl font-bold text-red-600 mb-4">
//               Starting From: <span className="text-gray-600">₹5,999</span>/Per Person
//             </p>
//             <form onSubmit={handleSubmit} className="space-y-3">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email (optional)"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//               />
//               <input
//                 type="text"
//                 name="tripName"
//                 value={formData.tripName}
//                 readOnly
//                 className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
//               />
//               <input
//                 type="number"
//                 name="travellers"
//                 placeholder="No. of Travellers"
//                 value={formData.travellers}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
//               >
//                 {loading ? "Submitting..." : "Submit Booking Request"}
//               </button>
//               {successMsg && <p className="text-green-600 text-sm pt-2">{successMsg}</p>}
//             </form>
//           </div>
//         </aside>
//       </section>

//       {/* Other Sections */}
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
//   { src: "/deal79.webp", gridClass: "lg:col-span-2" },
//   { src: "/deal80.webp" },
//   { src: "/deal81.webp" },
//   { src: "/deal42.webp" },
//   { src: "/deal43.webp" },
// ];

// const itinerary = [
//   {
//     title: "Day 1: Dehradun to Raithal",
//     content: `• Assemble in Dehradun and drive to Raithal (7-8 hours).\n• Scenic mountain drive with glimpses of the Bhagirathi river.\n• Overnight stay in homestay or guesthouse.`,
//   },
//   {
//     title: "Day 2: Raithal to Gui",
//     content: `• Trek from Raithal to Gui campsite (approx. 4km).\n• Easy ascent through forest trails and alpine meadows.\n• Overnight camping at Gui with views of Mt. Bandarpoonch.`,
//   },
//   {
//     title: "Day 3: Gui to Dayara Bugyal and back",
//     content: `• Early start to trek towards Dayara Bugyal (approx. 6km).\n• Enjoy the vast alpine meadows with Himalayan peaks in view.\n• Return to Gui for overnight camping.`,
//   },
//   {
//     title: "Day 4: Gui to Raithal and drive to Dehradun",
//     content: `• Trek back to Raithal from Gui (approx. 4km).\n• Drive to Dehradun with beautiful memories.`,
//   },
// ];

// export default function DayaraBugyalTrek() {
//   const [openIndex, setOpenIndex] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "Dayara Bugyal Trek",
//     travellers: "",
//   });
//   const [successMsg, setSuccessMsg] = useState("");

//   const toggleAccordion = (index) => {
//     setOpenIndex((prev) =>
//       prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
//     );
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await emailjs.send(
//         "your_service_id",
//         "your_template_id",
//         formData,
//         "your_public_key"
//       );
//       setSuccessMsg("✅ Booking request sent! We’ll get in touch soon.");
//       setFormData({
//         name: "",
//         phone: "",
//         email: "",
//         tripName: "Dayara Bugyal Trek",
//         travellers: "",
//       });
//     } catch (err) {
//       alert("Error sending booking. Please try again.");
//     }
//   };

//   return (
//     <>
//       {/* Image Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
//         <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px]">
//           {destinations.map((item, index) => (
//             <div key={index} className={`relative rounded-xl overflow-hidden shadow-md ${item.gridClass || ""}`}>
//               <Image
//                 src={item.src}
//                 alt={`Dayara ${index + 1}`}
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Main Content Section */}
//       <section className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-10">
//         {/* Left - Details */}
//         <div className="flex-1">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//             DAYARA BUGYAL TREK
//           </h1>
//           <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
//             <div className="flex items-center gap-2">
//               <FaRegClock className="text-orange-500" />
//               <span>3 Nights 4 Days</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUsers className="text-orange-500" />
//               <span>Small Guided Groups</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUndo className="text-orange-500" />
//               <span>Free Cancellation: Up to 7 Days</span>
//             </div>
//           </div>

//           <h2 className="text-xl font-semibold mb-2 text-gray-700">About this Journey</h2>
//           <p className="text-gray-600 mb-4">
//             The Dayara Bugyal Trek is a mesmerizing Himalayan hike through lush forests and expansive meadows. With panoramic views of the snow-covered peaks and rich flora, this trail is perfect for beginners and nature lovers seeking an offbeat adventure.
//           </p>

//           <h2 className="text-xl font-semibold mb-2 text-gray-700">Highlights</h2>
//           <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
//             <li>Walk across one of India's most beautiful alpine meadows.</li>
//             <li>View Bandarpoonch and other Himalayan peaks.</li>
//             <li>Camp under a starlit sky in pristine wilderness.</li>
//             <li>Easy to moderate trail – great for all ages.</li>
//             <li>Experience Garhwali hospitality in local villages.</li>
//           </ul>

//           <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
//           <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
//             <ul className="list-disc list-inside space-y-2">
//               <li>All meals from Day 1 dinner to Day 4 breakfast.</li>
//               <li>Accommodation in camps or homestays.</li>
//               <li>Experienced trek guide and support staff.</li>
//               <li>First aid kit and basic medical support.</li>
//               <li>All applicable forest entry fees.</li>
//             </ul>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Travel to/from Dehradun.</li>
//               <li>Personal gear and items.</li>
//               <li>Insurance or emergency evacuation.</li>
//               <li>Porters or mules for personal luggage (optional).</li>
//             </ul>
//           </div>

//           {/* Itinerary Section */}
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
//                   <div key={index} className="border rounded-xl shadow-sm bg-white">
//                     <button
//                       onClick={() => toggleAccordion(index)}
//                       className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-100"
//                     >
//                       <span className="text-lg font-semibold text-gray-800">
//                         {item.title}
//                       </span>
//                       {isOpen ? <FaChevronUp className="text-orange-500" /> : <FaChevronDown className="text-orange-500" />}
//                     </button>
//                     {isOpen && (
//                       <div className="px-5 pb-4 text-gray-600 whitespace-pre-line">{item.content}</div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Right - Booking Form */}
//         <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
//           <div className="sticky top-24">
//             <div className="bg-white shadow-lg rounded-2xl p-6 border">
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">Book Your Slot Now!</h3>
//               <p className="text-sm text-green-600 font-bold mb-2">Limited Season Batch: Early Bird Discounts!</p>
//               <p className="text-xl font-bold text-red-600 mb-4">
//                 Starting From: <span className="text-gray-600">₹5,999</span>/Per Person
//               </p>
//               <form onSubmit={handleSubmit} className="space-y-3">
//                 <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
//                 <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
//                 <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
//                 <input type="text" name="tripName" value={formData.tripName} readOnly className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-600" />
//                 <input type="number" name="travellers" placeholder="No. of Travellers" value={formData.travellers} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
//                 <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg">
//                   Submit Booking Request
//                 </button>
//                 {successMsg && <p className="text-green-600 text-sm pt-2">{successMsg}</p>}
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Other Components */}
//       <HimaliyeMyTripCarousel />
//       <HimTrek />
//     </>
//   );
// }


// rewrite this code inhance the provide the code form to Email not maniditaray  not requre for jsx file next.js project





