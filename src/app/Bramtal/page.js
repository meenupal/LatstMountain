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
//   { src: "/deal41.jpg", alt: "Snowy Trail" },
//   { src: "/deal42.jpg", alt: "Frozen Brahmatal Lake" },
//   { src: "/deal38.jpg", alt: "Himalayan Views" },
//   { src: "/deal29.jpg", alt: "Camp Under Stars" },
//   { src: "/deal34.jpg", alt: "Forest Walk" },
//   { src: "/deal15.jpg", alt: "Summit Panorama" },
// ];

// const itinerary = [
//   {
//     title: "Day 1: Arrival at Lohajung Base Camp",
//     content: `• Reach Lohajung, the base for the Brahmatal trek.\n• Get briefed by trek leaders.\n• Acclimatization walk and overnight stay.`,
//   },
//   {
//     title: "Day 2: Trek to Bekaltal",
//     content: `• Trek through oak and rhododendron forests.\n• Reach Bekaltal – a beautiful alpine lake.\n• Camp overnight near the lake.`,
//   },
//   {
//     title: "Day 3: Bekaltal to Brahmatal",
//     content: `• Gradual ascent with views of Trishul and Nanda Ghunti.\n• Reach Brahmatal – a mystical, frozen lake in winter.\n• Set up camp near the lake.`,
//   },
//   {
//     title: "Day 4: Summit Brahmatal Top & Return",
//     content: `• Early morning climb to Brahmatal Top.\n• Witness majestic views of Mt. Trishul & Mt. Nanda Ghunti.\n• Descend to Brahmatal campsite.`,
//   },
//   {
//     title: "Day 5: Return to Lohajung",
//     content: `• Descend through alpine meadows and forest trails.\n• Final stay and departure next morning.`,
//   },
// ];

// export default function BrahmatalTrek() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "Brahmatal Trek",
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
//       <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-8 px-4 text-center">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
//           Brahmatal Trek Adventure
//         </h1>
//       </div>

//       {/* Main Section */}
//       <section className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
//         {/* Left Content */}
//         <div className="flex-1">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             BRAHMATAL TREK
//           </h1>

//           <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
//             <div className="flex items-center gap-2">
//               <FaRegClock className="text-orange-500" />
//               <span>5 Days 4 Nights</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUsers className="text-orange-500" />
//               <span>Group Size: 8–15</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUndo className="text-orange-500" />
//               <span>Cancellation: Up to 7 Days</span>
//             </div>
//           </div>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             About this Trek
//           </h2>
//           <p className="text-gray-600 mb-4">
//             The Brahmatal Trek is a scenic winter wonderland nestled in the
//             Garhwal Himalayas of Uttarakhand. Known for its frozen alpine lake,
//             this trail offers unbeatable views of Trishul, Nanda Ghunti, and
//             more. It's perfect for both beginners and seasoned trekkers.
//           </p>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             Highlights
//           </h2>
//           <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
//             <li>Explore a frozen alpine lake – Brahmatal.</li>
//             <li>Summit views of Mt. Trishul and Mt. Nanda Ghunti.</li>
//             <li>Walk through dense forests and snowfields.</li>
//             <li>Witness clear night skies & stargazing.</li>
//             <li>Perfect winter trek for beginners and photo-lovers.</li>
//           </ul>

//           <h2 className="text-2xl font-bold mb-6">Included & Excluded</h2>
//           <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
//             <ul className="list-disc list-inside space-y-2">
//               <li>All meals during the trek (veg only).</li>
//               <li>Accommodation in tents/homestays.</li>
//               <li>Trek leader and experienced guide.</li>
//               <li>Sleeping bags and mats provided.</li>
//               <li>First aid and emergency support.</li>
//             </ul>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Transport to/from Lohajung.</li>
//               <li>Any personal or medical expenses.</li>
//               <li>Insurance or rescue costs.</li>
//               <li>Rentals for trekking gear.</li>
//             </ul>
//           </div>

//           {/* Itinerary */}
//           <div className="my-8">
//             <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
//               Detailed Itinerary
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
//                 Early Bird Offer: 20% Off
//               </div>
//               <div className="text-xl font-bold text-red-600 mb-4">
//                 Starting From: <span className="text-gray-600">₹8,999</span> / Person
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

//       {/* Testimonials Carousel or Promotional Footer */}
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
  { src: "/deal41.jpg", gridClass: "lg:col-span-2" },
  { src: "/deal42.jpg" },
  { src: "/deal43.jpg" },
  { src: "/deal55.jpg" },
  { src: "/deal56.jpg" },
];

const itinerary = [
  {
    title: "Day 1: Arrival in Lohajung",
    content: `• Drive from Rishikesh to Lohajung (approx. 10-11 hrs).\n• Scenic drive through Devprayag, Karnaprayag.\n• Overnight stay in guesthouse.`,
  },
  {
    title: "Day 2: Lohajung to Bekaltal",
    content: `• Trek begins towards Bekaltal (6 km).\n• Pass through rhododendron & oak forests.\n• Camp beside the beautiful frozen Bekaltal lake.`,
  },
  {
    title: "Day 3: Bekaltal to Brahmatal",
    content: `• Trek through snow-covered trails (7 km).\n• Magnificent views of Mt. Trishul & Nanda Ghunti.\n• Camp at Brahmatal base under starry skies.`,
  },
  {
    title: "Day 4: Summit Brahmatal and Return",
    content: `• Early morning climb to Brahmatal summit.\n• Witness sunrise over Himalayan peaks.\n• Descend to base for the night.`,
  },
  {
    title: "Day 5: Return to Lohajung",
    content: `• Trek back to Lohajung via scenic trails.\n• Celebration evening and trek wrap-up.`,
  },
  {
    title: "Day 6: Departure from Lohajung",
    content: `• Drive back to Rishikesh.\n• Trek ends with unforgettable memories.`,
  },
];

export default function BrahmatalWinterTrek() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Brahmatal Winter Trek - Snow Adventure in the Himalayas",
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
{/*     
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[220px] md:auto-rows-[250px]">
          {destinations.map((item, index) => (
            <div
              key={index}
              className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${item.gridClass || ""}`}
            >
              <div className="w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110">
                <Image
                  src={item.src}
                  alt={`Brahmatal Trek ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section> */}
      
<section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
  <div className="flex flex-col gap-2 sm:hidden">
{/*   
    <div className="w-full h-[300px] relative rounded-xl overflow-hidden shadow-md">
      <Image
        src={destinations[0].src}
        alt={`MountainMyTrip Vinayak Top 1`}
        fill
        className="object-cover"
        sizes="100vw"
      />
    </div> */}

    {/* Show two rows of two images in flex */}
    <div className="flex gap-2">
      <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
        <Image
          src={destinations[1].src}
          alt={`MountainMyTrip Vinayak Top 2`}
          fill
          className="object-cover"
          sizes="50vw"
        />
      </div>
      <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
        <Image
          src={destinations[2].src}
          alt={`MountainMyTrip Vinayak Top 3`}
          fill
          className="object-cover"
          sizes="50vw"
        />
      </div>
    </div>

    <div className="flex gap-2">
      <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
        <Image
          src={destinations[3].src}
          alt={`MountainMyTrip Vinayak Top 4`}
          fill
          className="object-cover"
          sizes="50vw"
        />
      </div>
      <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
        <Image
          src={destinations[4].src}
          alt={`MountainMyTrip Vinayak Top 5`}
          fill
          className="object-cover"
          sizes="50vw"
        />
      </div>
    </div>
  </div>

  {/* For tablet and desktop view - original grid */}
  <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px]">
    {destinations.map((item, index) => (
      <div
        key={index}
        className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${item.gridClass || ""}`}
      >
        <div className="w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110">
          <Image
            src={item.src}
            alt={`MountainMyTrip Vinayak Top ${index + 1}`}
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
      <section className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-10">
        {/* Left */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            BRAHMATAL WINTER TREK - SNOW ADVENTURE IN THE HIMALAYAS
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />
              <span>5 Nights 6 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              <span>Group Size: Moderate & Adventurous</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-orange-500" />
              <span>Free Cancellation: Upto 7 Days</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">About this Trek</h2>
          <p className="text-gray-600 mb-4">
            The Brahmatal Trek is one of the most scenic snow treks in Uttarakhand, offering breathtaking views of Trishul and Nanda Ghunti peaks.
            It’s a perfect choice for winter adventure lovers seeking solitude, snow trails, and high-altitude frozen lakes.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Snow-covered trails and frozen Brahmatal lake.</li>
            <li>Jaw-dropping Himalayan sunrise views.</li>
            <li>Challenging yet beginner-friendly trek.</li>
            <li>Camping in alpine meadows.</li>
            <li>Safe and well-organized winter expedition.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Transport from/to Rishikesh.</li>
              <li>All meals during the trek.</li>
              <li>Accommodation in tents and lodges.</li>
              <li>Certified trek leaders and team.</li>
              <li>First aid, permits, and safety equipment.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal clothing and gear.</li>
              <li>Insurance and personal expenses.</li>
              <li>Emergency evacuation costs.</li>
              <li>Tips to staff or porters.</li>
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
              <div className="text-sm text-green-600 font-bold mb-2">Winter Special Discount</div>
              <div className="text-xl font-bold text-red-600 mb-4">
                Starting From: <span className="text-gray-600">₹6,499</span>/Per Person
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



