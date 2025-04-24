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
  { src: "/deal64.webp" },
  { src: "/deal66.webp" },
  { src: "/deal46.webp" },
  { src: "/deal65.webp" },
];

const itinerary = [
  {
    title: "Day 1: Arrival at Sankri",
    content: `• Reach Sankri, the base village, by evening.\n• Welcome by trek leaders and group briefing.\n• Dinner and overnight stay in guesthouse or homestay.`,
  },
  {
    title: "Day 2: Trek from Sankri to Seema",
    content: `• Start the trek with scenic views and forest trails.\n• Walk alongside Supin River through quaint Himalayan hamlets.\n• Camp near Seema amidst forested surroundings.`,
  },
  {
    title: "Day 3: Seema to Rainbasera",
    content: `• Trek deeper into Govind National Park.\n• Enjoy the wilderness and views of waterfalls and meadows.\n• Camp at Rainbasera, surrounded by mountain grandeur.`,
  },
  {
    title: "Day 4: Rainbasera to Ruinsara Tal",
    content: `• Hike to the serene and spiritual Ruinsara Tal.\n• Explore the lake and nearby valley.\n• Camp near the lake under the stars.`,
  },
  {
    title: "Day 5: Ruinsara to Odari",
    content: `• Ascend towards Odari campsite with panoramic mountain views.\n• Acclimatize well at higher altitudes.\n• Prepare for the pass climb next day.`,
  },
];

export default function BaliPassTrekAdventure() {
  const [openIndex, setOpenIndex] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Bali Pass Trek Adventure",
    travellers: "",
  });

  const handleAccordion = (index) => {
    setOpenIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `*New Trip Booking Request* 🚶‍♂️🏔️

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "N/A"}
*Trip:* ${formData.tripName}
*No. of Travellers:* ${formData.travellers}

📌 Please reach out for confirmation and next steps.`;

    const whatsappURL = `https://wa.me/6239092532?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* Image Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Mobile */}
        <div className="sm:hidden flex flex-col gap-2">
          {[0, 2].map((start, i) => (
            <div className="flex gap-2" key={i}>
              {[start, start + 1].map((index) => (
                <div
                  key={index}
                  className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md"
                >
                  <Image
                    src={destinations[index].src}
                    alt={`MountainMyTrip Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px]">
          {destinations.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-md ${
                item.gridClass || ""
              }`}
            >
              <Image
                src={item.src}
                alt={`MountainMyTrip Image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            BALI PASS TREK ADVENTURE
          </h1>

          <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />
              <span>6 Nights 7 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              <span>Group Size: Small & Guided</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-orange-500" />
              <span>Free Cancellation: Upto 7 Days</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-2">About this Adventure</h2>
          <p className="text-gray-600 mb-4">
            The Bali Pass Trek is one of Uttarakhand's most thrilling
            high-altitude adventures...
          </p>

          <h2 className="text-xl font-semibold mb-2">Highlights</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600">
            <li>
              Summit the majestic Bali Pass (4950m) with stunning Himalayan
              vistas.
            </li>
            <li>
              Visit the sacred Ruinsara Lake surrounded by alpine meadows.
            </li>
            <li>Traverse Govind National Park’s forests and ridgelines.</li>
            <li>
              Perfect for experienced trekkers seeking solitude and challenge.
            </li>
            <li>Scenic campsites and a mix of spiritual and wild beauty.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Transportation from Dehradun to Sankri and back.</li>
              <li>All meals from Day 1 dinner to Day 7 breakfast.</li>
              <li>Accommodation in tents/guesthouses during trek.</li>
              <li>Certified trek leader, guides, and support staff.</li>
              <li>Camping and safety equipment including first aid.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal trekking gear or insurance.</li>
              <li>Porter for personal luggage (available on request).</li>
              <li>Any expenses due to unforeseen circumstances.</li>
            </ul>
          </div>

          {/* Itinerary */}
          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
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
                    className="border rounded-xl shadow-sm bg-white"
                  >
                    <button
                      onClick={() => handleAccordion(index)}
                      className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-100"
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
                      <div className="px-5 pb-4 text-gray-600 whitespace-pre-line">
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
          <div className="sticky top-24 bg-white shadow-lg rounded-2xl p-6 border">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Book Your Slot Now!
            </h3>
            {/* <div className="text-sm text-green-600 font-bold mb-2">
              Limited Period Offer: Save 10%
            </div> */}
            <div className="text-xl font-bold text-red-600 mb-1">
              Starting From: <span className="text-gray-600">₹22,999</span> /Per
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
      </section>

      {/* Sliders */}
      <HimaliyeMyTripCarousel />
      <HimTrek />
    </>
  );
}
