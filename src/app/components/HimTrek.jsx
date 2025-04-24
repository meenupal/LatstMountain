
"use client";

import Image from "next/image";
import Link from "next/link";

export default function HimTrek() {
  return (
    <div className="w-full px-2 md:px-28 py-4">
      <div className="relative w-full h-[250px] md:h-[340px] rounded-3xl overflow-hidden border-2 border-orange-500">
        {/* Background Image */}
        <Image
          src="/deal5.webp" // Update to your image path
          alt="Corporate Trek Banner"
          fill
          className="object-cover"
          priority
        />

        {/* Left Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-l mask-l-from-70% from-black/80 via-black/40 to-transparent z-10" />

        {/* Text Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-end px-6 md:px-16">
          <div className="text-white text-right md:text-left max-w-lg space-y-4">
            <h3 className="text-lg md:text-2xl font-semibold uppercase">
              Mountain My Trip for Corporates
            </h3>
            <p className="text-2xl md:text-4xl font-bold text-orange-500">
              Beyond Work, Beyond Limit
            </p>
            <Link
              href="/Contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


