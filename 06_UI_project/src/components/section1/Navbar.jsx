import React from "react";

// NAVBAR COMPONENT: Top navigation bar
// This component doesn't receive any props - it's static content
const Navbar = () => {
  return (
    // Flexbox layout: items-center (vertical center), justify-between (space between items)
    // py-8 = padding top/bottom, px-18 = padding left/right
    <div className="flex items-center justify-between py-8 px-18">
      {/* Left side: Title with black background */}
      <h4 className="bg-black text-white uppercase px-6 py-2 rounded-full">
        Target Audience
      </h4>

      {/* Right side: Subtitle button */}
      {/* tracking-widest = letter spacing for better readability */}
      <button className="bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm">
        digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
