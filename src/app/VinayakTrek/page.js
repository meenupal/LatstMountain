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
  { name: "", src: "/deal31.webp", gridClass: "lg:col-span-2" },
  { name: "", src: "/deal32.webp" },
  { name: "", src: "/deal23.webp" },
  { name: "", src: "/deal29.webp" },
  { name: "", src: "/deal38.webp" },
];

const itinerary = [
  {
    title: "Day 1: Arrival in Lohajung",
    content: `• Reach Lohajung (Basecamp) from Kathgodam or Rishikesh.\n• Meet the trek leader and get briefed about the trek.\n• Overnight stay in guesthouse or camp.`,
  },
  {
    title: "Day 2: Lohajung to Bekaltal",
    content: `• Trek through dense forests and mountain trails.\n• Reach Bekaltal, a scenic lake campsite.\n• Enjoy camping and stargazing at night.`,
  },
  {
    title: "Day 3: Bekaltal to Vinayak Top and back to Lohajung",
    content: `• Early start for summit push to Vinayak Top.\n• Witness the panoramic Himalayan views.\n• Descend back to Lohajung for overnight stay.`,
  },
  {
    title: "Day 4: Departure from Lohajung",
    content: `• Begin return journey to Rishikesh/Kathgodam.\n• Trip ends with mountain memories.`,
  },
];

export default function VinayakTopTrek() {
  const [openIndex, setOpenIndex] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Vinayak Top Adventure Tour – Scenic Summit Trek",
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
          {[1, 2, 3, 4].map(
            (i) =>
              i % 2 === 1 && (
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
                            alt={`Vinayak Top ${j + 1}`}
                            fill
                            className="object-cover"
                            sizes="50vw"
                          />
                        </div>
                      )
                  )}
                </div>
              )
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
                  alt={`Vinayak Top ${index + 1}`}
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
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            VINAYAK TOP ADVENTURE TOUR – SCENIC SUMMIT TREK
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />3 Nights 4 Days
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              Easy to Moderate
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-orange-500" />
              Free Cancellation: Upto 7 Days
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            About this Trek
          </h2>
          <p className="text-gray-600 mb-4">
            The Vinayak Top Adventure Tour offers stunning views of Nanda Ghunti
            and Trishul peaks from a relatively less explored route. Ideal for
            beginners and nature lovers, this trek gives you a mix of forest
            trails, mountain lakes, and a summit climb.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Summit Vinayak Top for scenic views of snow-capped peaks.</li>
            <li>Camp near tranquil alpine lakes like Bekaltal.</li>
            <li>Ideal introduction to Himalayan trekking.</li>
            <li>Blend of forest paths, ridge walks, and local culture.</li>
            <li>Affordable, beginner-friendly mountain adventure.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Transportation from/to base city</li>
              <li>Stay at camps/guesthouses</li>
              <li>Meals during the trek</li>
              <li>Experienced trek leaders</li>
              <li>Trek permits & medical support</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal gear (shoes, jackets etc.)</li>
              <li>Travel insurance</li>
              <li>Extra snacks or bottled drinks</li>
              <li>Emergency evacuation costs</li>
              <li>Unspecified expenses</li>
            </ul>
          </div>

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
              {/* <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Book Your Trek Today
              </h3> */}
         
              <div className="text-xl font-bold text-red-600 mb-1">
                Starting From: <span className="text-gray-600">₹4,499</span>/Per
                Person
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
              +5% gst
              </h3>

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
