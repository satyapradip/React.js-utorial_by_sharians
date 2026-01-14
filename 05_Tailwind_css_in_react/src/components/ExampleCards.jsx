import React from "react";

const ExampleCards = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center">Card Examples</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Card 1: Basic Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Basic Card</h3>
            <p className="text-gray-600 mb-4">
              This is a simple card with a header image and some text content.
            </p>
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Card 2: Card with Hover Effect */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
          <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Hover Card</h3>
            <p className="text-gray-600 mb-4">
              Hover over me to see the shadow and lift effect!
            </p>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
              Hover Me
            </button>
          </div>
        </div>

        {/* Card 3: Profile Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-pink-400 to-red-500"></div>
          <div className="px-6 pb-6">
            <div className="flex justify-center -mt-16 mb-4">
              <div className="w-32 h-32 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center text-4xl font-bold text-gray-600">
                JD
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-1">John Doe</h3>
            <p className="text-gray-500 text-center text-sm mb-4">
              Full Stack Developer
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-4 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-700">
                Follow
              </button>
              <button className="px-4 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-100">
                Message
              </button>
            </div>
          </div>
        </div>

        {/* Card 4: Pricing Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-blue-500">
          <div className="bg-blue-500 text-white p-6 text-center">
            <h3 className="text-2xl font-bold">Pro Plan</h3>
            <p className="text-3xl font-bold mt-2">
              $29<span className="text-sm font-normal">/month</span>
            </p>
          </div>
          <div className="p-6">
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Unlimited Projects</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>24/7 Support</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Advanced Analytics</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Custom Domain</span>
              </li>
            </ul>
            <button className="w-full px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Card 5: Stat Card */}
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg shadow-lg p-6 text-white">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-purple-200 text-sm">Total Users</p>
              <p className="text-4xl font-bold mt-1">2,543</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <span className="text-2xl">👥</span>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-green-300">↑ 12%</span>
            <span className="ml-2 text-purple-200">from last month</span>
          </div>
        </div>

        {/* Card 6: Image Card with Overlay */}
        <div className="relative rounded-lg overflow-hidden shadow-lg h-64 group">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500"></div>
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Mountain View</h3>
            <p className="text-sm mb-4">Explore the beautiful landscapes</p>
            <button className="self-start px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-100 transition">
              View Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleCards;
