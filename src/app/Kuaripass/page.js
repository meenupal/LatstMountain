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
  { name: "", src: "/deal67.jpg", gridClass: "lg:col-span-2" },
  { name: "", src: "/deal68.jpg" },
  { name: "", src: "/deal65.jpg" },
  { name: "", src: "/deal62.jpg" },
  { name: "", src: "/deal52.jpg" },
];

const itinerary = [
  {
    title: "Day 1: Arrival at Joshimath",
    content: `• Reach Joshimath by evening.\n• Meet trek leaders and fellow participants.\n• Overnight stay in guesthouse or hotel.`,
  },
  {
    title: "Day 2: Drive to Dhak & Trek to Gulling",
    content: `• Scenic drive to Dhak village.\n• Begin trek through forests and mountain villages.\n• Overnight stay at Gulling campsite.`,
  },
  {
    title: "Day 3: Trek from Gulling to Tali Forest Camp",
    content: `• Ascend through oak and rhododendron forests.\n• Panoramic views of snow-capped peaks en route.\n• Camp in serene forest surroundings.`,
  },
  {
    title: "Day 4: Tali to Kuari Pass Summit and back to Tali",
    content: `• Early morning trek to Kuari Pass (3,650m).\n• Witness sunrise over Nanda Devi, Dronagiri, and more.\n• Return to Tali for overnight camping.`,
  },
  {
    title: "Day 5: Trek to Auli via Gorson Bugyal and Drive to Joshimath",
    content: `• Walk through scenic Gorson meadows to Auli.\n• Drive back to Joshimath.\n• Celebrate successful trek and rest.`,
  },
  {
    title: "Day 6: Departure from Joshimath",
    content: `• After breakfast, depart for Dehradun or onward journey.\n• End of memorable Kuari Pass adventure.`,
  },
];

export default function KuariPassTrekJourney() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Kuari Pass Trek Journey",
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
          Discover <span className="text-[#F54900]">Kuari Pass Trek Journey</span>
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
                  alt={`MountainMyTrip Kuari Pass ${index + 1}`}
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
            KUARI PASS TREK JOURNEY
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />
              <span>5 Nights 6 Days</span>
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

          <h2 className="text-xl font-semibold text-gray-700 mb-2">About this Journey</h2>
          <p className="text-gray-600 mb-4">
            The Kuari Pass Trek, also known as the Lord Curzon Trail, is a perfect Himalayan journey for beginners and seasoned trekkers alike. Nestled in the Garhwal region of Uttarakhand, it offers spectacular views of India’s second highest peak, Nanda Devi, and a pristine trail through alpine meadows, forests, and remote villages.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Panoramic views of Nanda Devi, Kamet, and Dronagiri peaks.</li>
            <li>Charming forest campsites with rich flora and fauna.</li>
            <li>Explore Gorson Bugyal and walk along expansive alpine meadows.</li>
            <li>Perfect for beginners and families with moderate fitness.</li>
            <li>Experience mountain culture in Himalayan villages.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Transportation from Rishikesh/Dehradun to Joshimath and back.</li>
              <li>All meals from Day 1 dinner to Day 6 breakfast.</li>
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
                Limited Period Offer: Save 10%
              </div>
              <div className="text-xl font-bold text-red-600 mb-4">
                Starting From: <span className="text-gray-600">₹9,499</span>/Per Person
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
