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
  { src: "/deal34.jpg", gridClass: "lg:col-span-2" },
  { src: "/deal62.jpg" },
  { src: "/deal48.jpg" },
  { src: "/deal49.jpg" },
  { src: "/deal45.jpg" },
];

const itinerary = [
  {
    title: "Day 1: Rishikesh to Joshimath",
    content: `• Drive from Rishikesh to Joshimath (approx. 10 hours).\n• Scenic route via Devprayag, Rudraprayag, and Karnaprayag.\n• Overnight stay at guesthouse in Joshimath.`,
  },
  {
    title: "Day 2: Joshimath to Ghangaria",
    content: `• Drive to Govindghat and then a short drive to Pulna.\n• Begin 9 km trek to Ghangaria (approx. 5-6 hours).\n• Overnight stay at Ghangaria.`,
  },
  {
    title: "Day 3: Ghangaria to Valley of Flowers and Back",
    content: `• Trek 4 km to the mesmerizing Valley of Flowers.\n• Explore vibrant flora and panoramic views.\n• Return back to Ghangaria for the night.`,
  },
  {
    title: "Day 4: Ghangaria to Hemkund Sahib and Back",
    content: `• Steep trek to Hemkund Sahib (4,329 m) – a sacred Sikh shrine.\n• Enjoy serene lake views and spiritual ambiance.\n• Descend back to Ghangaria.`,
  },
  {
    title: "Day 5: Ghangaria to Govindghat – Joshimath",
    content: `• Trek down to Pulna and drive to Govindghat.\n• Continue onward journey to Joshimath.\n• Overnight at Joshimath.`,
  },
  {
    title: "Day 6: Joshimath to Rishikesh",
    content: `• Return drive to Rishikesh with memories of a magical trek.\n• Trip ends in the evening.`,
  },
];

export default function ValleyOfFlowersTrek() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Valley of Flowers Trek Package – UNESCO World Heritage Bloom",
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
    const message = `*New Trip Booking Request* 🌸🏞️

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
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10 underline">
          Discover the Blooming Beauty of{" "}
          <span className="text-[#F54900]">Valley of Flowers</span> Trek
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[220px] md:auto-rows-[250px]">
          {destinations.map((item, index) => (
            <div
              key={index}
              className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${item.gridClass || ""}`}
            >
              <div className="w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110">
                <Image
                  src={item.src}
                  alt={`Valley of Flowers ${index + 1}`}
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
            VALLEY OF FLOWERS TREK PACKAGE – UNESCO WORLD HERITAGE BLOOM
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />
              <span>5 Nights 6 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              <span>Group Size: Ideal for Beginners</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-orange-500" />
              <span>Free Cancellation: Upto 5 Days</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">About this Trek</h2>
          <p className="text-gray-600 mb-4">
            The Valley of Flowers trek is a breathtaking journey into the heart of the Himalayas. Famed for its vibrant alpine flora, this UNESCO World Heritage Site offers spiritual serenity, natural beauty, and an unmatched trekking experience in Uttarakhand.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Explore the colorful Valley of Flowers National Park.</li>
            <li>Visit Hemkund Sahib – a serene high-altitude Sikh shrine.</li>
            <li>Ideal for first-time trekkers and nature lovers.</li>
            <li>Traverse forested trails, waterfalls, and alpine meadows.</li>
            <li>Witness rare Himalayan flora in full bloom (July to early Sept).</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>All accommodation (Joshimath, Ghangaria).</li>
              <li>All meals during trek (Veg).</li>
              <li>Local transportation to/from base points.</li>
              <li>Experienced trek leader and guides.</li>
              <li>Forest permits and medical kit.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal expenses and insurance.</li>
              <li>Pony or porter services.</li>
              <li>Tips or donations.</li>
              <li>Camera/video charges.</li>
              <li>Anything not mentioned under inclusions.</li>
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
              <div className="text-sm text-green-600 font-bold mb-2">Limited Slots Available</div>
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
