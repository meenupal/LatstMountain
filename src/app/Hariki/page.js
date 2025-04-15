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
  { src: "/deal54.jpg", gridClass: "lg:col-span-2" },
  { src: "/deal55.jpg" },
  { src: "/deal57.jpg" },
  { src: "/deal50.jpg" },
  { src: "/deal56.jpg" },
];

const itinerary = [
  {
    title: "Day 1: Arrival at Sankri",
    content: `• Arrive at Sankri village – the base camp.\n• Trek orientation, team meet-up, and overnight stay.`,
  },
  {
    title: "Day 2: Sankri to Taluka to Seema",
    content: `• Drive to Taluka and begin the trek to Seema.\n• Enjoy forest trails and riverside paths.\n• Overnight camping at Seema.`,
  },
  {
    title: "Day 3: Seema to Har Ki Dun Valley",
    content: `• Trek through alpine meadows and Osla village.\n• Arrive at the pristine Har Ki Dun Valley.\n• Relax and camp under the stars.`,
  },
  {
    title: "Day 4: Exploration Day at Har Ki Dun",
    content: `• Explore Maninda Tal or Jaundar Glacier view.\n• Witness Swargarohini and surrounding peaks.\n• Return to camp for bonfire and dinner.`,
  },
  {
    title: "Day 5: Har Ki Dun to Seema",
    content: `• Retrace the trail to Seema.\n• Capture scenic moments and relax at campsite.`,
  },
  {
    title: "Day 6: Seema to Taluka and back to Sankri",
    content: `• Trek down to Taluka and drive back to Sankri.\n• Farewell dinner and stay at guesthouse.`,
  },
  {
    title: "Day 7: Departure from Sankri",
    content: `• Enjoy breakfast and depart with memories of the majestic Har Ki Dun Valley.`,
  },
];

export default function HarKiDunTrek() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Har Ki Dun Valley Expedition",
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
    const message = `*New Trip Booking Request* 🚶‍♂️🏔️

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Trip:* ${formData.tripName}
*No. of Travellers:* ${formData.travellers}

📌 Please reach out for confirmation and next steps.`;

    const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-16">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10 underline">
          Discover the <span className="text-[#F54900]">Har Ki Dun Valley</span> with MountainMyTrip
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

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            HAR KI DUN VALLEY EXPEDITION
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />
              <span>6 Nights 7 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              <span>Group Size: Small & Personalized</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-orange-500" />
              <span>Free Cancellation: Upto 7 Days</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            About this Activity
          </h2>
          <p className="text-gray-600 mb-4">
            The Har Ki Dun Valley Trek is a timeless Himalayan journey that combines myth, beauty, and adventure.
            Known as the “Valley of Gods,” it is perfect for trekkers looking to explore offbeat trails, quaint villages,
            alpine meadows, and breathtaking valley views.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Ancient villages and the legendary Osla temple.</li>
            <li>Spectacular views of Swargarohini, Bandarpoonch & Black Peak.</li>
            <li>Ideal trek for photography, nature walks & birdwatching.</li>
            <li>Adventure through pine forests and glacial valleys.</li>
            <li>Beginner to intermediate friendly expedition.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Accommodation in tents/guesthouses.</li>
              <li>Nutritious vegetarian meals during trek.</li>
              <li>Experienced trek guides and support team.</li>
              <li>First aid and safety equipment.</li>
              <li>Permits and entry charges.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Travel to/from Sankri base.</li>
              <li>Personal expenses or insurance.</li>
              <li>Extra baggage or porters.</li>
              <li>Unscheduled transport costs.</li>
              <li>Tips or gratitude to staff.</li>
            </ul>
          </div>

          {/* Itinerary Section */}
          <div className="my-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Itinerary</h2>
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

        {/* Booking Form Section */}
        <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
          <div className="sticky top-24">
            <div className="bg-white shadow-lg rounded-2xl p-6 border">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Book Your Slot Now!</h3>
              <div className="text-sm text-green-600 font-bold mb-2">Limited Season Offer</div>
              <div className="text-xl font-bold text-red-600 mb-4">
                Starting From: <span className="text-gray-600">₹9,999</span>/Per Person
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

      {/* Additional Sections */}
      <HimaliyeMyTripCarousel />
      <HimTrek />
    </>
  );
}
