"use client";

import Image from "next/image";
import Link from "next/link";

export default function Aboutsection() {
  return (
    <section className="px-6 md:px-20 py-12 flex flex-col md:flex-row items-center justify-between">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl text-orange-500 font-semibold uppercase tracking-wide">
          About Us
        </h2>
        <h3 className="text-2xl md:text-4xl font-bold mt-2">
          Why Choose Mountain My Trip for Your next Adventures
        </h3>
        <p className="text-gray-600 mt-4 leading-relaxed pb-2 ">
          At Push, we believe that every journey should be more than just a
          trip—it should be a story worth telling. Our passion for exploration
          and adventure drives us to curate extraordinary travel experiences
          that immerse you in breathtaking landscapes, vibrant cultures, and
          unforgettable moments. From serene mountain treks to adrenaline-packed
          expeditions, we ensure every journey is designed with meticulous
          attention to detail, safety, and comfort. Whether you're a seasoned
          adventurer or a first-time explorer, Push is your trusted companion in
          discovering the world’s most awe-inspiring destinations. With a team
          of expert guides, personalized itineraries, and a commitment to
          responsible travel, we go beyond the ordinary to create experiences
          that inspire and transform. Join us at Push, and let’s embark on a
          journey that leaves a lasting imprint on your soul. Your adventure
          begins here. Are you ready to push your limits?
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
         <Link href="./Aboutus" className="mt-32 bg-[#F54900] text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-400 transition duration-300">
          Explore Now
        </Link> 
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        {/* Background Image */}
        <div className="relative w-72 h-52 md:w-104 md:h-72 rounded-lg overflow-hidden">
          <Image
            src="/deal23.jpg"
            alt="Hiker on a trail"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Overlapping Image */}
        <div className="absolute bottom-[-30px] left-[30px] md:bottom-[-40px] md:left-[50px] w-48 h-36 md:w-64 md:h-48 rounded-lg overflow-hidden shadow-lg border-4 border-white">
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
