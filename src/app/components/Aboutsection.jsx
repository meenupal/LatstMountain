"use client";

import Image from "next/image";
import Link from "next/link";

export default function Aboutsection() {
  return (
    <section className="px-6 md:px-28 py-12 flex flex-col md:flex-row items-center justify-between">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl text-orange-500 font-semibold uppercase tracking-wide">
          About Us
        </h2>
        <h3 className="text-2xl md:text-4xl font-bold mt-2">
          Experience the Thrill of Mountain Trekking in India
        </h3>
        <p className="text-gray-600 mt-4 leading-relaxed pb-2 ">
          Explore the thrilling world of mountain trekking in India, where the
          majestic Himalayas promise adventure like no other. If you seek
          breathtaking landscapes, challenging trails, and mesmerizing views,
          trekking in Uttarakhand is the perfect escape. Imagine snow-capped
          peaks, lush meadows, and charming villages—this region is a trekker’s
          paradise waiting to be explored.<br></br><br></br>

           Among Uttarakhand’s hidden gems are
          the Dinar Top Trek and Gulabi Kantha Trek. Dinar Top offers serenity
          and panoramic Himalayan views, making it ideal for both beginners and
          seasoned trekkers. Meanwhile, Gulabi Kantha stuns with its vibrant
          alpine meadows and spectacular 360° vistas, a dream for photographers.
          Join us on an unforgettable journey with expert guides, well-planned
          itineraries, and a strong commitment to safety. Whether you're a
          first-time trekker or a mountain enthusiast, let trekking in
          Uttarakhand be your next great adventure!
        </p>

        {/* Stats */}
        <div className="flex justify-center md:justify-start gap-6 my-4">
          <div>
            <p className="text-2xl font-bold">10K</p>
            <p className="text-gray-500">Success Trips</p>
          </div>
          <div>
            <p className="text-2xl font-bold">200K</p>
            <p className="text-gray-500">Happy Clients</p>
          </div>
        </div>

        {/* Button */}
        <Link
          href="./Aboutus"
          className="mt-32 bg-[#F54900] text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-400 transition duration-300"
        >
          Explore Now
        </Link>
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        {/* Background Image */}
        <div className="relative w-72 h-52 md:w-112 md:h-88 rounded-lg overflow-hidden">
          <Image
            src="/deal23.jpg"
            alt="Hiker on a trail"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Overlapping Image */}
        <div className="absolute bottom-[-30px] left-[30px]  md:bottom-[-40px] md:left-[50px] w-48 h-36 md:w-68 md:h-52 rounded-lg overflow-hidden shadow-lg border-4 border-white">
          <Image
            src="/deal21.jpg"
            alt="Camping tent"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
