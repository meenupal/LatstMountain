// // components/Blog.tsx

// import Link from "next/link";
// import Image from "next/image";
// import { CalendarDays, Clock, MapPin } from "lucide-react";

// const blogPosts = [
//   {
//     id: 1,
//     title: "Trekking the Himalayas: An Unforgettable Adventure",
//     slug: "himalaya-trek-guide",
//     description: "Explore the ultimate Himalayan trekking guide with routes, safety tips, and local experiences.",
//     category: "Trekking",
//     date: "April 1, 2025",
//     readTime: "9 min read",
//     image: "deal28.jpg",
//     author: {
//       name: "Aarav Mehta",
//       avatar: "deal28.jpg",
//     },
//   },
//   {
//     id: 2,
//     title: "Top 10 Scenic Mountain Destinations in India",
//     slug: "top-mountain-destinations",
//     description: "Discover breathtaking mountain locations perfect for your next weekend getaway or long trip.",
//     category: "Travel",
//     date: "March 25, 2025",
//     readTime: "6 min read",
//     image: "/deal2.jpg",
//     author: {
//       name: "Priya Singh",
//       avatar: "deal27.jpg",
//     },
//   },
//   {
//     id: 3,
//     title: "Camping Essentials: Gear Checklist for Mountain Trips",
//     slug: "mountain-camping-essentials",
//     description: "Everything you need for a safe and fun mountain camping experience—from tents to tech.",
//     category: "Camping",
//     date: "March 10, 2025",
//     readTime: "7 min read",
//     image: "/deal5.jpg",
//     author: {
//       name: "Rohit Sharma",
//       avatar: "/deal11.jpg",
//     },
//   },
// ];

// export default function Blog() {
//   const featuredPost = blogPosts[0];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-green-900 to-teal-800 text-white py-24 px-6 overflow-hidden">
//         <div className="max-w-6xl mx-auto text-center z-10 relative">
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
//             Discover the Mountains with MountainMyTrip
//           </h1>
//           <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-8">
//             Your guide to the best mountain destinations, adventures & travel tips
//           </p>
//           <div className="flex justify-center gap-4 flex-wrap">
//             <button className="bg-white text-teal-800 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
//               Explore Destinations
//             </button>
//             <button className="border-2 border-white px-6 py-3 rounded-xl hover:bg-white hover:text-teal-900 transition">
//               Get Travel Tips
//             </button>
//           </div>
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//       </section>

//       {/* Featured Post */}
//       <section className="max-w-6xl mx-auto px-4 py-16">
//         <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
//           <Image
//             src={featuredPost.image}
//             alt={featuredPost.title}
//             width={1200}
//             height={600}
//             className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-300"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
//             <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
//               <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-xs font-medium">
//                 {featuredPost.category}
//               </span>
//               <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-2">{featuredPost.title}</h2>
//               <p className="text-lg mb-4 opacity-90">{featuredPost.description}</p>
//               <div className="flex items-center justify-between">
//                 <Link
//                   href={`/blog/${featuredPost.slug}`}
//                   className="flex items-center gap-2 font-semibold hover:text-teal-300"
//                 >
//                   Read Full Article →
//                 </Link>
//                 <div className="flex items-center gap-3 text-sm opacity-90">
//                   <Image
//                     src={featuredPost.author.avatar}
//                     alt={featuredPost.author.name}
//                     width={36}
//                     height={36}
//                     className="w-9 h-9 rounded-full"
//                   />
//                   <span>{featuredPost.author.name}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Blog Grid */}
//       <section className="max-w-6xl mx-auto px-4 py-16">
//         <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">Travel Blogs & Adventure Tips</h3>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {blogPosts.map((post) => (
//             <article key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition">
//               <div className="relative overflow-hidden rounded-t-xl">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   width={600}
//                   height={400}
//                   className="w-full h-52 object-cover transform group-hover:scale-105 transition"
//                 />
//                 <span className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full text-xs">
//                   {post.category}
//                 </span>
//               </div>

//               <div className="p-6">
//                 <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
//                   <div className="flex items-center gap-1">
//                     <CalendarDays size={16} />
//                     <span>{post.date}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Clock size={16} />
//                     <span>{post.readTime}</span>
//                   </div>
//                 </div>

//                 <h2 className="text-lg font-semibold mb-2 hover:text-teal-700 transition">
//                   <Link href={`/blog/${post.slug}`}>{post.title}</Link>
//                 </h2>

//                 <p className="text-gray-600 mb-4">{post.description}</p>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <Image
//                       src={post.author.avatar}
//                       alt={post.author.name}
//                       width={36}
//                       height={36}
//                       className="w-8 h-8 rounded-full"
//                     />
//                     <span className="text-sm">{post.author.name}</span>
//                   </div>
//                   <Link
//                     href={`/blog/${post.slug}`}
//                     className="text-teal-600 hover:underline text-sm font-medium"
//                   >
//                     Read More →
//                   </Link>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="mt-16 flex justify-center gap-3">
//           <button className="px-4 py-2 text-gray-500 hover:text-teal-700 hover:bg-gray-100 rounded-lg">
//             ← Previous
//           </button>
//           {[1, 2, 3].map((page) => (
//             <button
//               key={page}
//               className={`px-4 py-2 rounded-lg ${
//                 page === 1 ? "bg-teal-600 text-white" : "text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               {page}
//             </button>
//           ))}
//           <button className="px-4 py-2 text-gray-500 hover:text-teal-700 hover:bg-gray-100 rounded-lg">
//             Next →
//           </button>
//         </div>
//       </section>

//       {/* Newsletter */}
//       <section className="bg-white py-16 px-4">
//         <div className="max-w-3xl mx-auto text-center bg-gray-50 shadow-xl rounded-2xl p-10">
//           <h3 className="text-2xl font-bold mb-4">Stay Updated with MountainMyTrip</h3>
//           <p className="text-gray-600 mb-6">Get travel guides, mountain tips, and destination ideas straight to your inbox</p>
//           <div className="flex flex-col sm:flex-row gap-3 justify-center">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//             />
//             <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// components/Blog.js

import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Trekking the Himalayas: An Unforgettable Adventure",
    slug: "himalaya-trek-guide",
    description: "Explore the ultimate Himalayan trekking guide with routes, safety tips, and local experiences.",
    category: "Trekking",
    date: "April 1, 2025",
    readTime: "9 min read",
    image: "/deal28.jpg",
    author: {
      name: "Aarav Mehta",
      avatar: "/deal9.jpg",
    },
  },
  {
    id: 2,
    title: "Top 10 Scenic Mountain Destinations in India",
    slug: "top-mountain-destinations",
    description: "Discover breathtaking mountain locations perfect for your next weekend getaway or long trip.",
    category: "Travel",
    date: "March 25, 2025",
    readTime: "6 min read",
    image: "/deal32.jpg",
    author: {
      name: "Priya Singh",
      avatar: "/deal9.jpg",
    },
  },
  {
    id: 3,
    title: "Camping Essentials: Gear Checklist for Mountain Trips",
    slug: "mountain-camping-essentials",
    description: "Everything you need for a safe and fun mountain camping experience—from tents to tech.",
    category: "Camping",
    date: "March 10, 2025",
    readTime: "7 min read",
    image: "/deal31.jpg",
    author: {
      name: "Rohit Sharma",
      avatar: "/deal9.jpg",
    },
  },
];

export default function Blog() {
  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="bg-cover mt-20 bg-center h-[300px] flex items-center justify-center text-white text-center shadow-lg"
        style={{
          backgroundImage: "url('deal26.jpg')",
        }}
      >
      {/* <section className="relative bg-gradient-to-br from-green-900 to-teal-800 text-white py-24 px-6 overflow-hidden"> */}
        <div className="max-w-6xl mx-auto text-center z-10 relative">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Discover the Mountains with MountainMyTrip
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-8">
            Your guide to the best mountain destinations, adventures & travel tips
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-[#F54A00] px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
              Explore Destinations
            </button>
            <button className="border-2 border-white px-6 py-3 rounded-xl hover:bg-white hover:text-[#F54A00] transition">
              Get Travel Tips
            </button>
          </div>
        </div>
        <div className="absolute inset-0  from-black/50 to-transparent" />
      </div>

      {/* Featured Post */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
          <Image
            src={featuredPost.image}
            alt={featuredPost.title}
            width={1200}
            height={600}
            className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <span className="bg-[#F54A00] text-white px-4 py-1 rounded-full text-xs font-medium">
                {featuredPost.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-2">{featuredPost.title}</h2>
              <p className="text-lg mb-4 opacity-90">{featuredPost.description}</p>
              <div className="flex items-center justify-between">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="flex items-center gap-2 font-semibold hover:text-teal-300"
                >
                  Read Full Article →
                </Link>
                <div className="flex items-center gap-3 text-sm opacity-90">
                  <Image
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full"
                  />
                  <span>{featuredPost.author.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">Travel Blogs & Adventure Tips</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <div className="relative overflow-hidden rounded-t-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-52 object-cover transform group-hover:scale-105 transition"
                />
                <span className="absolute top-4 left-4 bg-[#F54A00] text-white px-3 py-1 rounded-full text-xs">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <CalendarDays size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-lg font-semibold mb-2 hover:text-teal-700 transition">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-gray-600 mb-4">{post.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={36}
                      height={36}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm">{post.author.name}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#F54A00] hover:underline text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {/* <div className="mt-16 flex justify-center gap-3">
          <button className="px-4 py-2 text-gray-500 hover:text-teal-700 hover:bg-gray-100 rounded-lg">
            ← Previous
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`px-4 py-2 rounded-lg ${
                page === 1 ? "bg-[#F54A00] text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-4 py-2 text-gray-500 hover:text-teal-700 hover:bg-gray-100 rounded-lg">
            Next →
          </button>
        </div> */}
      </section>

      {/* Newsletter */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center bg-gray-50 shadow-xl rounded-2xl p-10">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with MountainMyTrip</h3>
          <p className="text-gray-600 mb-6">Get travel guides, mountain tips, and destination ideas straight to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <button className="bg-[#F54A00] text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

