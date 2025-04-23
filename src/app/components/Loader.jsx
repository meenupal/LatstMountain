// // components/Loader.jsx
// "use Client";
// import { useEffect, useState } from "react";

// import React from "react";

// const Loader = () => {
//     const [loading, setLoading] = useState(true);
//   return (
//     useEffect(() => {
//     // Simulate loading
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
//       <div className="animate-spin rounded-full border-8 border-t-8 border-gray-200 border-t-orange-500 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
//     </div>
//   );
// };

// export default Loader;


// components/Loader.jsx

"use client";

import React, { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);   

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
      <div className="animate-spin rounded-full border-8 border-t-8 border-gray-200 border-t-orange-500 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
    </div>
  );
};
export default Loader;


// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { PlaneTakeoff } from "lucide-react";

// const Loader = () => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
//       <motion.div
//         initial={{ x: "-100%" }}
//         animate={{ x: "100%" }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           repeatType: "loop",
//           ease: "easeInOut",
//         }}
//         className="flex items-center"
//       >
//         <PlaneTakeoff className="text-orange-500 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 animate-bounce" />
//       </motion.div>
//       <span className="absolute bottom-10 text-gray-500 text-sm sm:text-base md:text-lg animate-pulse">
//         Preparing your travel journey...
//       </span>
//     </div>
//   );
// };

// export default Loader;


// components/Loader.jsx


// import Image from 'next/image';


// const Loader = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-white">
//       <div className="w-48 h-48 animate-spin-slow relative">
//         <Image
//           src={Loader.webp}
//           alt="Loading..."
//           layout="fill"
//           objectFit="contain"
//           className="pointer-events-none"
//         />
//       </div>
//     </div>
//   );
// };

// export default Loader;
