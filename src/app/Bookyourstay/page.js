"use client";

import React, { useState,useEffect } from "react";


const BookYourStayForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "6239092532",
    checkout: "",
    guests: "",
    message: "",
  });
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "6239092532", // Pre-filled phone number
  //   checkin: "",
  //   checkout: "",
  //   guests: "",
  //   message: "",
  // });
  

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.checkin) newErrors.checkin = "Check-in date is required";
    if (!formData.checkout) newErrors.checkout = "Check-out date is required";
    if (!formData.guests) newErrors.guests = "Number of guests is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Booking submitted:", formData);
      alert("Thank you! Your booking request has been received.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkin: "",
        checkout: "",
        guests: "",
        message: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };
  useEffect(() => {
    // Example: Auto-submit form with preset data
    const demoData = {
      name: "Demo User",
      email: "demo@example.com",
      phone: "6239092532",
      checkin: "2025-05-01",
      checkout: "2025-05-05",
      guests: "2",
      message: "Looking forward to our stay!",
    };
  
    setFormData(demoData);
  
    // Submit after setting data
    setTimeout(() => {
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length === 0) {
        console.log("Booking submitted:", demoData);
        alert("Thank you! Your booking request has been received.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          checkin: "",
          checkout: "",
          guests: "",
          message: "",
        });
        setErrors({});
      } else {
        setErrors(validationErrors);
      }
    }, 500); // slight delay to ensure state updates
  }, []);
  

  return (
    <div
  className="relative min-h-screen mt-12 flex items-center justify-center bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8"
  style={{ backgroundImage: "url('/deal59.webp')" }}
>
  <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
  <div className="relative z-10 max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 transition-all">


    
    {/* // <div className="min-h-screen mt-12 flex items-center justify-center bg-gray-500 py-12 px-4 sm:px-6 lg:px-8"> */}
      {/* // <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 transition-all"> */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Book Your Stay
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#F54900] focus:outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#F54900] focus:outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9876543210"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#F54900] focus:outline-none"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Check-in / Check-out */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="checkin" className="block text-sm font-medium text-gray-700">
                Check-in Date
              </label>
              <input
                type="date"
                id="checkin"
                name="checkin"
                value={formData.checkin}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#F54900] focus:outline-none"
              />
              {errors.checkin && <p className="text-red-500 text-sm mt-1">{errors.checkin}</p>}
            </div>
            <div>
              <label htmlFor="checkout" className="block text-sm font-medium text-gray-700">
                Check-out Date
              </label>
              <input
                type="date"
                id="checkout"
                name="checkout"
                value={formData.checkout}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#F54900] focus:outline-none"
              />
              {errors.checkout && <p className="text-red-500 text-sm mt-1">{errors.checkout}</p>}
            </div>
          </div>

          {/* Number of Guests */}
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              placeholder="e.g. 2"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#F54900] focus:outline-none"
            />
            {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Special Requests / Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Let us know if you have any preferences..."
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#F54900] focus:outline-none"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
            className="w-full bg-[#F54900] text-white font-semibold py-3 px-4 rounded-lg hover:from-[#F54900] hover:to-[#F54900] transition-all focus:ring-2 focus:ring-green-400"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookYourStayForm;
