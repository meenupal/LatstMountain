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
  { name: "", src: "/deal31.jpg", gridClass: "lg:col-span-2" },
  { name: "", src: "/deal32.jpg" },
  { name: "", src: "/deal23.jpg" },
  { name: "", src: "/deal29.jpg" },
  { name: "", src: "/deal38.jpg" },
];

const itinerary = [
  {
    title: "Day 1:Arrival at Base  Acclimatization",
    content: `• Arrive at the base village and receive a warm welcome.\n• Briefing by trek leader and light acclimatization walk.\n• Dinner and overnight stay under the stars.`,
  },
  {
    title: "Day 2: Trek to Vinayak Top",
    content: `• Begin ascent through picturesque alpine forests.\n• Encounter rare flora, streams, and Himalayan views.\n• Reach Vinayak Top for a panoramic experience.\n• Camp at high altitude meadows.`,
  },
  {
    title: "Day 3: Sunrise View & Descent",
    content: `• Early morning hike for sunrise at the top.\n• Enjoy breathtaking views of snow-clad peaks.\n• Descend back to base, share farewell moments, and depart.`,
  },
];

export default function VinayakTopAdventure() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Vinayak Top Adventure Tour",
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

    const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-16">
        
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
                  alt={`MountainMyTrip Vinayak Top ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section> */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-16">
  <div className="flex flex-col gap-2 sm:hidden">
  
    {/* <div className="w-full h-[300px] relative rounded-xl overflow-hidden shadow-md">
      <Image
        src={destinations[0].src}
        alt={`MountainMyTrip Vinayak Top 1`}
        fill
        className="object-cover"
        sizes="100vw"
      />
    </div> */}

    {/* Show two rows of two images in flex */}
    <div className="flex gap-2">
      <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
        <Image
          src={destinations[1].src}
          alt={`MountainMyTrip Vinayak Top 2`}
          fill
          className="object-cover"
          sizes="50vw"
        />
      </div>
      <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
        <Image
          src={destinations[2].src}
          alt={`MountainMyTrip Vinayak Top 3`}
          fill
          className="object-cover"
          sizes="50vw"
        />
      </div>
    </div>

    <div className="flex gap-2">
      <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
        <Image
          src={destinations[3].src}
          alt={`MountainMyTrip Vinayak Top 4`}
          fill
          className="object-cover"
          sizes="50vw"
        />
      </div>
      <div className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md">
        <Image
          src={destinations[4].src}
          alt={`MountainMyTrip Vinayak Top 5`}
          fill
          className="object-cover"
          sizes="50vw"
        />
      </div>
    </div>
  </div>

  {/* For tablet and desktop view - original grid */}
  <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px]">
    {destinations.map((item, index) => (
      <div
        key={index}
        className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${item.gridClass || ""}`}
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
      <section className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            VINAYAK TOP ADVENTURE TOUR
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />
              <span>2 Nights 3 Days</span>
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
            About this Adventure
          </h2>
          <p className="text-gray-600 mb-4">
            The Vinayak Top Adventure Tour is an offbeat trekking experience in
            Uttarakhand that offers a perfect blend of serene trails, alpine
            beauty, and majestic Himalayan peaks. This trail is ideal for those
            seeking peace, nature, and breathtaking panoramas without the crowd.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Quiet, pristine trail with panoramic mountain views.</li>
            <li>Camp in scenic meadows and dense forest clearings.</li>
            <li>Sunrise hike to Vinayak Top viewpoint.</li>
            <li>Perfect for beginners and photo enthusiasts.</li>
            <li>Immersive nature and cultural experience.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Local transport from nearest town to base.</li>
              <li>Stay in tents with all sleeping essentials.</li>
              <li>All meals during the trek (vegetarian).</li>
              <li>Certified trek leader and local guides.</li>
              <li>First aid and safety equipment.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Travel insurance or personal gear.</li>
              <li>Any kind of personal or medical expense.</li>
              <li>Unscheduled transport costs.</li>
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
                Limited Period Offer: Save 15%
              </div>
              <div className="text-xl font-bold text-red-600 mb-4">
                Starting From: <span className="text-gray-600">₹7,499</span>/Per Person
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


