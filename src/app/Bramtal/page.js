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
  { src: "/deal41.webp", gridClass: "lg:col-span-2" },
  { src: "/deal42.webp" },
  { src: "/deal43.webp" },
  { src: "/deal55.webp" },
  { src: "/deal56.webp" },
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
  const [openIndex, setOpenIndex] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Brahmatal Winter Trek - Snow Adventure in the Himalayas",
    travellers: "",
  });

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


  const toggleItinerary = (index) => {
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter((i) => i !== index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };

  return (
    <>
      {/* Mobile Gallery */}
      <section className="max-w-7xl mx-auto px-4 py-12 mt-8">
        <div className="flex flex-col gap-2 sm:hidden">
          <div className="flex gap-2">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={destinations[i].src}
                  alt={`MountainMyTrip Vinayak Top ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            {[3, 4].map((i) => (
              <div
                key={i}
                className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={destinations[i].src}
                  alt={`MountainMyTrip Vinayak Top ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Gallery */}
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

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-10">
        {/* Left Content */}
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

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            About this Trek
          </h2>
          <p className="text-gray-600 mb-4">
            The Brahmatal Trek is one of the most scenic snow treks in
            Uttarakhand, offering breathtaking views of Trishul and Nanda Ghunti
            peaks. It’s a perfect choice for winter adventure lovers seeking
            solitude, snow trails, and high-altitude frozen lakes.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Highlights
          </h2>
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

          {/* Itinerary Accordion */}
          <div className="my-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
              Itinerary
            </h2>

            <button
              onClick={() =>
                setOpenIndex(
                  openIndex.length === itinerary.length
                    ? []
                    : itinerary.map((_, i) => i)
                )
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
                    onClick={() => toggleItinerary(index)}
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

        {/* Right Booking Form */}
        <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
          <div className="sticky top-24">
            <div className="bg-white shadow-lg rounded-2xl p-6 border">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Book Your Trek Today
              </h3>
              {/* <div className="text-sm text-green-600 font-bold mb-2">
                Winter Special Discount
              </div> */}
              <div className="text-xl font-bold text-red-600 mb-1">
                Starting From: <span className="text-gray-600">₹7,500</span>/Per
                Person
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
                  placeholder="Email (Optional)"
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

      {/* Additional Components */}
      <HimaliyeMyTripCarousel />
      <HimTrek />
    </>
  );
}
