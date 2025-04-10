"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div
        className="bg-cover mt-12 bg-center h-[300px] flex items-center justify-center text-white text-center shadow-lg"
        style={{
          backgroundImage: "url('deal10.jpg')",
        }}
      >
        <div className=" bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">Contact Us</h1>
          <p className="text-lg mt-4 font-light">
            Discover the Himalayas like never before—one step at a time.
          </p>
        </div>
      </div>
      <section className="flex flex-col items-center p-6 md:p-12 lg:p-16 bg-gray-50 text-gray-900">
        <h3 className="text-lg font-semibold text-[#F54900] mb-2 italic">
          Talk with our team
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Any Question? Feel Free to Contact
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-5xl">
          <div className="text-center md:text-left md:w-1/2 pr-6">
            <p className="text-lg text-gray-700 mb-4">
              We're here to help! Drop us a message, and our team will get back
              to you as soon as possible.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Send us a message, and we’ll provide the guidance you need.
            </p>
            <p className="text-lg text-gray-700 mb-4">Have concerns or feedback? We'd love to hear from you!</p>
    
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="#"
                className="p-3 bg-gray-200 rounded-full hover:bg-red-400 transition-all"
              >
                <FaFacebookF className="text-gray-600 hover:text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-200 rounded-full hover:bg-red-400 transition-all"
              >
                <FaTwitter className="text-gray-600 hover:text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-200 rounded-full hover:bg-red-400 transition-all"
              >
                <FaInstagram className="text-gray-600 hover:text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-200 rounded-full hover:bg-red-400 transition-all"
              >
                <FaDribbble className="text-gray-600 hover:text-white" />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow-lg mt-6 md:mt-0"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-red-400"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-red-400"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write Comment"
              className="w-full p-3 border rounded-md h-32 focus:ring-2 focus:ring-red-400"
              required
            ></textarea>
            <button
              type="submit"
              className="mt-4 w-full bg-[#F54900] text-white py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition-all"
            >
              SEND A MESSAGE
            </button>
          </form>
        </div>
      </section>
      <div className="relative h-[400px] rounded-lg shadow-lg overflow-hidden mb-8">
          {/* Embedded Google Map */}
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.458926441687!2d-122.08424958469406!3d37.42206597984618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0x3f8f5e9b4a8f8b8e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1629999999999!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 mb-4"
          ></iframe>
          </div>

      
    </>
  );
}
