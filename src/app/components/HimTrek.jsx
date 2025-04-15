
"use client";

import Image from "next/image";
import Link from "next/link";

export default function HimTrek() {
  return (
    <div className="w-full px-2 md:px-32 py-4">
      <div className="relative w-full h-[250px] md:h-[340px] rounded-3xl overflow-hidden border-2 border-orange-500">
        {/* Background Image */}
        <Image
          src="/deal5.jpg" // Update to your image path
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


// "use client";

// import Image from "next/image";
// import React from "react";

// const galleryImages = [
//   { src: "/deal12.jpg", alt: "Eco Park Dhanaulti" },
//   { src: "/deal29.jpg", alt: "Kanatal Hill View" },
//   { src: "/deal32.jpg", alt: "River Valley" },
//   { src: "/deal14.jpg", alt: "Snow Forest" },
// ];

// const KanatalGallery = () => {
//   return (
//     <div className="relative">
//       {/* Sticky Book Now Button */}
//       <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
//         <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold rounded-l-md rotate-90 origin-bottom-right">
//           Book Now
//         </button>
//       </div>

//       {/* Image Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
//         {galleryImages.map((img, index) => (
//           <div key={index} className="relative w-full h-64 sm:h-72 md:h-80">
//             <Image
//               src={img.src}
//               alt={img.alt}
//               layout="fill"
//               objectFit="cover"
//               className="rounded-none"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Gradient Title Section */}
//       <div className="bg-gradient-to-r from-gray-700 to-gray-300 py-10 px-4 text-center">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
//           Kanatal and Dhanaulti Day Tour
//         </h1>
//       </div>

//       {/* Optional Social Media Buttons */}
//       <div className="fixed left-0 top-1/3 z-50 flex flex-col gap-2">
        
//       </div>
//     </div>
//   );
// };

// export default KanatalGallery;
