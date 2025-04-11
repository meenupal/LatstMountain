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

const destinations = [
  { name: "", src: "/deal26.jpg", gridClass: "lg:col-span-2" },
  { name: "", src: "/deal22.jpg" },
  { name: "", src: "/deal12.jpg" },
  { name: "", src: "/deal6.jpg", gridClass: "lg:row-span-2" },
  { name: "", src: "/deal14.jpg" },
  { name: "", src: "/deal23.jpg" },
  { name: "", src: "/deal15.jpg" },
 
];

const itinerary = [
  {
    title: "Day 1: Kasol and Trek to Grahan village | 5–6 Hours Trek",
    content: `• Commence your journey in Kasol, nestled in the Parvati Valley. Check-in at Himalayan Riverside Camps. Meet the trekking guides.
• Trek begins around 11AM.
• Following the beautiful woodland path from the new Kasol bridge (in front of YHAI hostel) to Grahan village.
• A winding trail that crosses vibrant jungle sections in a magical atmosphere. Face a steeper trail.
• By early afternoon, obtain elevation (Grahan village), a picturesque hamlet nestled in the heart of the mountains.`,
  },
  {
    title: "Day 2: Higher Elevation and Scenic Views",
    content: `• The adventure continues with higher elevation climbs, scenic forest trails, and local encounters.`,
  },
  {
    title: "Day 3: Return and Final Day",
    content: `• Complete the loop or trek back to basecamp. Say goodbye to the Himalayas and head home with memories.`,
  },
];

export default function SarPassTrek() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Sar Pass Trek",
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
    const message = `*New Trip Booking Request* 🚶‍♂️🌄

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
  
  
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-16">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10 underline">
          Explore with <span className="text-[#F54900]">MountainMyTrip</span>
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
                  alt={`MountainMyTrip image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className=" mr-12 max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            SAR PASS TREK
          </h1>
          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />
              <span>4 Nights 5 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              <span>Group Size: Unique</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-orange-500" />
              <span>Cancellation: Up to 7 Days</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            About this Activity
          </h2>
          <p className="text-gray-600 mb-4">
            The Sar Pass Trek is a highly popular trekking route in the Parvati
            Valley of Himachal Pradesh, India...
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>
              Panoramic views of snow-capped peaks, lush valleys, and thick
              forests.
            </li>
            <li>Moderate challenge suitable for fit individuals.</li>
            <li>
              Immerse yourself in the Himalayan culture and local villages.
            </li>
            <li>Capture stunning photographs at every step.</li>
            <li>Meet fellow trekkers and make unforgettable memories.</li>
          </ul>

          <div>
            <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>Transportation from Kasol to Kasol.</li>
                <li>Tented accommodation throughout the trek.</li>
                <li>All vegetarian meals during trek.</li>
                <li>Qualified trek guides & support staff.</li>
                <li>Sleeping bags and basic medical aid.</li>
              </ul>
              <ul className="list-disc list-inside space-y-2">
                <li>Expenses not in the inclusion list.</li>
                <li>Personal items and medications.</li>
                <li>Equipment rentals are optional.</li>
              </ul>
            </div>

            <div className="my-4">
              <h2 className="text-2xl font-bold mb-2 ">Itinerary</h2>
              <div className="space-y-4 ">
                {itinerary.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-xl shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-5 py-4 flex justify-between items-center bg-white hover:bg-gray-50"
                    >
                      <span className="text-lg font-medium text-gray-800">
                        {item.title}
                      </span>
                      {openIndex === index ? (
                        <FaChevronUp className="text-orange-500" />
                      ) : (
                        <FaChevronDown className="text-orange-500" />
                      )}
                    </button>
                    {openIndex === index && (
                      <div className="px-5 pb-4 text-gray-600 whitespace-pre-line">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="sticky top-0 ">
        <div className="bg-white h-[500px] shadow-lg rounded-2xl p-6 border w-full max-w-md mx-auto md:mx-0 mt-10 md:mt-0">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Book Your Slot Now!
          </h3>
          <div className="text-sm text-green-600 font-bold mb-2">Save 20%</div>
          <div className="text-xl font-bold text-red-600 mb-4">
            Starting From:{" "}
            <span className=" text-gray-600">₹12,000</span>{" "}
            <span>/ Per Person</span>
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
      </section>

      <HimaliyeMyTripCarousel />
    </>
  );
}
