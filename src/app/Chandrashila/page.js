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
  { src: "/chandrashila1.jpg", gridClass: "lg:col-span-2" },
  { src: "/chandrashila2.jpg" },
  { src: "/chandrashila3.jpg" },
  { src: "/chandrashila4.jpg" },
  { src: "/chandrashila5.jpg" },
];

const itinerary = [
  {
    title: "Day 1: Arrival at Chopta",
    content:
      "• Reach Chopta, the base point for the Chandrashila Trek.\n• Acclimatization and explore nearby meadows.\n• Overnight stay in camp or guesthouse.",
  },
  {
    title: "Day 2: Trek to Tungnath & Chandrashila",
    content:
      "• Begin early trek to Tungnath Temple (approx. 3.5km).\n• Continue ascent to Chandrashila Peak (1.5km).\n• Enjoy panoramic views of Himalayan peaks.\n• Return to Chopta by evening.",
  },
  {
    title: "Day 3: Departure",
    content:
      "• Have breakfast with mountain views.\n• Depart from Chopta with beautiful memories.",
  },
];

export default function ChandrashilaTrek() {
  const [openIndex, setOpenIndex] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Chandrashila Trek",
    travellers: "",
  });

  const toggleAccordion = (index) => {
    setOpenIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Trip Booking Request* 🏞️🧗‍♂️\n\n*Name:* ${
      formData.name
    }\n*Phone:* ${formData.phone}\n${
      formData.email ? `*Email:* ${formData.email}\n` : ""
    }*Trip:* ${formData.tripName}\n*No. of Travellers:* ${
      formData.travellers
    }\n\n📌 Please reach out for confirmation and next steps.`;

    const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* Image Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
        {/* Mobile layout */}
        <div className="flex flex-col gap-2 sm:hidden">
          {[1, 3].map((i) => (
            <div key={i} className="flex gap-2">
              {[0, 1].map((j) => {
                const index = i + j;
                return (
                  <div
                    key={index}
                    className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md"
                  >
                    <Image
                      src={destinations[index].src}
                      alt={`Chandrashila ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Desktop grid */}
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
                  alt={`Chandrashila ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content and Form */}
      <section className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            CHANDRASHILA TREK
          </h1>
          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />
              <span>2 Nights 3 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              <span>Small Guided Groups</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-orange-500" />
              <span>Free Cancellation: Up to 7 Days</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            About this Journey
          </h2>
          <p className="text-gray-600 mb-4">
            The Chandrashila Trek is a thrilling high-altitude experience,
            perfect for beginners and seasoned trekkers alike. Starting from
            Chopta, it leads you to the sacred Tungnath Temple and further up to
            the Chandrashila summit offering panoramic views of major Himalayan
            peaks.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Summit the stunning Chandrashila Peak (12,110 ft).</li>
            <li>Visit the highest Shiva temple at Tungnath.</li>
            <li>
              Views of Nanda Devi, Trishul, Kedarnath, and Chaukhamba peaks.
            </li>
            <li>Camp under starry skies amidst meadows.</li>
            <li>Perfect weekend getaway trek in Uttarakhand.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>All meals from Day 1 dinner to Day 3 breakfast.</li>
              <li>Accommodation in camps or guesthouses.</li>
              <li>Certified trek leader and support team.</li>
              <li>First aid kit and emergency support.</li>
              <li>Entry fees and forest permits.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Transport to/from Chopta base.</li>
              <li>Personal gear, clothing, and snacks.</li>
              <li>Insurance and emergency costs.</li>
              <li>Porter/mule for personal load (optional).</li>
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

        {/* Sticky Booking Form */}
        <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
          <div className="sticky top-24">
            <div className="bg-white shadow-lg rounded-2xl p-6 border">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Book Your Slot Now!
              </h3>
              <div className="text-sm text-green-600 font-bold mb-2">
                Limited Season Batch: Early Bird Discounts!
              </div>
              <div className="text-xl font-bold text-red-600 mb-4">
                Starting From: <span className="text-gray-600">₹4,499</span>/Per
                Person
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

      <HimaliyeMyTripCarousel />
      <HimTrek />
    </>
  );
}
