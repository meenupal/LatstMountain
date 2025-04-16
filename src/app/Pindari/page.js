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
  { name: "", src: "/deal70.jpg", gridClass: "lg:col-span-2" },
  { name: "", src: "/deal71.jpg" },
  { name: "", src: "/deal52.jpg" },
  { name: "", src: "/deal49.jpg" },
  { name: "", src: "/deal66.jpg" },
];

const itinerary = [
  {
    title: "Day 1: Arrival at Loharkhet",
    content: `• Arrive at Loharkhet, the trek's starting point.\n• Meet your guide and group.\n• Overnight stay in guesthouse or camps.`,
  },
  {
    title: "Day 2: Trek to Khati Village",
    content: `• Begin trek to Khati (approx. 11km).\n• Walk through forest trails and quaint Himalayan settlements.\n• Stay overnight at a homestay or tent.`,
  },
  {
    title: "Day 3: Trek to Dwali",
    content: `• Trek from Khati to Dwali (13km).\n• Enjoy the scenic views of streams and glaciers.\n• Camp near Dwali under starlit skies.`,
  },
  {
    title: "Day 4: Dwali to Pindari Glacier & back",
    content: `• Early morning trek to Zero Point of Pindari Glacier (6km one way).\n• Witness panoramic views of snow-covered Himalayan peaks.\n• Return to Dwali by evening and rest.`,
  },
  {
    title: "Day 5: Trek back to Khati",
    content: `• Descend back to Khati Village through pine and oak forests.\n• Share local stories and relax in peaceful surroundings.`,
  },
  {
    title: "Day 6: Trek to Loharkhet & Departure",
    content: `• Final descent to Loharkhet.\n• End of an adventurous and scenic glacier expedition.\n• Depart with lifetime memories.`,
  },
];

export default function PindariGlacierTrek() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Pindari Glacier Trek",
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
    const message = `*New Trip Booking Request* 🏞️🧗‍♂️

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Trip:* ${formData.tripName}
*No. of Travellers:* ${formData.travellers}

📌 Please reach out for confirmation and next steps.`;

    const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-16">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10 underline">
          Discover the{" "}
          <span className="text-[#F54900]">Pindari Glacier Trek</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[220px] md:auto-rows-[250px]">
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
                  alt={`MountainMyTrip Pindari Glacier ${index + 1}`}
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
      <section className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            PINDARI GLACIER TREK
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />
              <span>5 Nights 6 Days</span>
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
            The Pindari Glacier Trek is a breathtaking trail that brings
            trekkers face-to-face with one of Uttarakhand’s most spectacular
            glaciers. Known for its accessibility and scenic route, the trek
            winds through charming villages, alpine meadows, and river valleys,
            culminating at the impressive Pindari Glacier Zero Point.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Reach the stunning Zero Point of Pindari Glacier.</li>
            <li>Trail through rhododendron forests and Himalayan hamlets.</li>
            <li>Rich biodiversity and peaceful alpine beauty.</li>
            <li>Perfect for first-time high-altitude trekkers.</li>
            <li>Learn about the Kumaoni culture in remote villages.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>All meals from Day 1 dinner to Day 6 breakfast.</li>
              <li>Accommodation in tents or village guesthouses.</li>
              <li>Professional trek leader and local support staff.</li>
              <li>Safety gear including first aid and oxygen support.</li>
              <li>Forest permits and entry fees.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Travel to and from Loharkhet base.</li>
              <li>Personal trekking gear, warm clothing.</li>
              <li>Insurance and emergency evacuation charges.</li>
              <li>Porter/mule for personal luggage (optional).</li>
            </ul>
          </div>

          {/* Itinerary Section */}
          <div className="my-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
              Itinerary
            </h2>
            <div className="flex flex-col gap-4">
              {itinerary.map((item, index) => (
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
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Book Your Slot Now!
              </h3>
              <div className="text-sm text-green-600 font-bold mb-2">
                Limited Season Batch: Early Bird Discounts!
              </div>
              <div className="text-xl font-bold text-red-600 mb-4">
                Starting From: <span className="text-gray-600">₹9,499</span>/Per
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

      <HimaliyeMyTripCarousel />
      <HimTrek />
    </>
  );
}
