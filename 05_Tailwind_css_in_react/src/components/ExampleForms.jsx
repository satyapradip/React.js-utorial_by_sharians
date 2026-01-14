import React, { useState } from "react";

const ExampleForms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted! Check console for data.");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Form Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form 1: Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition transform active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Form 2: Login Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Login</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-md focus:border-indigo-500 focus:outline-none transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-md focus:border-indigo-500 focus:outline-none transition"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm text-indigo-600 hover:text-indigo-800"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
              >
                Sign In
              </button>

              <div className="text-center text-sm text-gray-600">
                Don't have an account?
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 ml-1"
                >
                  Sign up
                </a>
              </div>
            </form>
          </div>

          {/* Form 3: Registration Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Sign Up</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Must be at least 8 characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Country
                </label>
                <select className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Select a country</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>India</option>
                </select>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 text-green-600"
                />
                <label className="ml-2 text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-green-600 hover:underline">
                    Terms
                  </a>{" "}
                  and
                  <a href="#" className="text-green-600 hover:underline ml-1">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
              >
                Create Account
              </button>
            </form>
          </div>

          {/* Form 4: Search Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Advanced Search</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Search Query
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="Search..."
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    🔍
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Category
                </label>
                <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
                  <option>All Categories</option>
                  <option>Technology</option>
                  <option>Design</option>
                  <option>Business</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Date Range
                </label>
                <div className="flex gap-2">
                  <input
                    type="date"
                    className="flex-1 px-3 py-2 border rounded focus:ring-2 focus:ring-purple-500"
                  />
                  <span className="self-center">to</span>
                  <input
                    type="date"
                    className="flex-1 px-3 py-2 border rounded focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Price Range
                </label>
                <input type="range" className="w-full" min="0" max="1000" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$0</span>
                  <span>$1000</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleForms;
