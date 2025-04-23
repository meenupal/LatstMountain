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
  { src: "/deal59.webp", gridClass: "lg:col-span-2" },
  { src: "/deal58.webp" },
  { src: "/deal60.webp" },
  { src: "/deal36.webp" },
  { src: "/deal40.webp" },
];

const itinerary = [
  {
    title: "Day 1: Arrival in Haridwar",
    content: `• Meet and greet in Haridwar.\n• Ganga Aarti at Har Ki Pauri.\n• Overnight stay at hotel.`,
  },
  {
    title: "Day 2: Haridwar to Barkot",
    content: `• Scenic drive to Barkot via Mussoorie.\n• En route stop at Kempty Falls.\n• Overnight stay in Barkot.`,
  },
  {
    title: "Day 3: Barkot - Yamunotri - Barkot",
    content: `• Drive to Janki Chatti and trek to Yamunotri (6 km).\n• Darshan and dip in the holy Yamuna.\n• Return to Barkot.`,
  },
  {
    title: "Day 4: Barkot to Uttarkashi",
    content: `• Journey to Uttarkashi.\n• Visit Vishwanath Temple and explore town.\n• Overnight stay at Uttarkashi.`,
  },
  {
    title: "Day 5: Uttarkashi -Gangotri -Uttarkashi",
    content: `• Drive to Gangotri temple via Harsil.\n• Holy bath in Bhagirathi River.\n• Return to Uttarkashi.`,
  },
  {
    title: "Day 6: Uttarkashi to Guptkashi",
    content: `• Long scenic drive via Tehri Dam.\n• Overnight at Guptkashi with trek prep for Kedarnath.`,
  },
  {
    title: "Day 7: Guptkashi - Kedarnath",
    content: `• Drive to Sonprayag, then trek/pony to Kedarnath.\n• Evening darshan of Kedarnath temple.\n• Overnight stay near temple.`,
  },
  {
    title: "Day 8: Kedarnath - Guptkashi",
    content: `• Morning darshan and trek down.\n• Drive back to Guptkashi and rest.`,
  },
  {
    title: "Day 9: Guptkashi to Badrinath",
    content: `• Drive to Badrinath via Joshimath.\n• Evening darshan and explore Mana Village.\n• Overnight stay in Badrinath.`,
  },
  {
    title: "Day 10: Badrinath to Rudraprayag",
    content: `• Visit Badrinath temple again (optional).\n• Drive to Rudraprayag for overnight stay.`,
  },
  {
    title: "Day 11: Rudraprayag to Haridwar",
    content: `• Final return journey to Haridwar.\n• Tour ends with divine memories.`,
  },
];

export default function CharDhamYatra() {
  const [openIndex, setOpenIndex] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Char Dham Yatra - Divine Himalayan Circuit",
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
    const message = `*New Trip Booking Request* 🙏🚩

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not Provided"}
*Trip:* ${formData.tripName}
*No. of Travellers:* ${formData.travellers}

📌 Please reach out for confirmation and further details.`;

    const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* IMAGE GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
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

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            CHAR DHAM YATRA - DIVINE HIMALAYAN CIRCUIT
          </h1>
          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />
              <span>10 Nights 11 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              <span>Group Size: Comfortable & Spiritual</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-orange-500" />
              <span>Free Cancellation: Upto 10 Days</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            About this Yatra
          </h2>
          <p className="text-gray-600 mb-4">
            The Char Dham Yatra is a sacred pilgrimage across Uttarakhand's four
            revered shrines: Yamunotri, Gangotri, Kedarnath, and Badrinath.
          </p>

          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Darshan at all four Char Dham temples.</li>
            <li>Witness Ganga Aarti & explore Mana Village.</li>
            <li>Scenic Himalayan drives and devotion blend.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Hotels & tents stay.</li>
              <li>Veg meals during Yatra.</li>
              <li>Vehicle for transport.</li>
              <li>Puja arrangements.</li>
              <li>Guides & coordinators.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Pony/helicopter charges.</li>
              <li>Tips & personal expenses.</li>
              <li>Special darshan fees.</li>
              <li>Medical or emergency costs.</li>
              <li>Anything not included above.</li>
            </ul>
          </div>

          {/* Itinerary */}
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
                    className="border rounded-xl bg-white shadow-sm"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-50"
                    >
                      <span className="font-semibold text-gray-800">
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
                Reserve Your Spiritual Journey
              </h3>
              <div className="text-sm text-green-600 font-bold mb-2">
                Special Early Booking Offer
              </div>
              <div className="text-xl font-bold text-red-600 mb-4">
                Starting From: <span className="text-gray-600">₹21,999</span>
                /Per Person
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
