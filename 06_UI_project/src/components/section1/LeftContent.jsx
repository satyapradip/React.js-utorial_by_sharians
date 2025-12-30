import React from "react";
import HeroText from "./HeroText";
import Arrow from "./Arrow";

// LEFTCONTENT COMPONENT: Left side of the page with hero text and arrow
// No props needed - displays static content
const LeftContent = () => {
  return (
    // Container: flex-col = vertical layout, justify-between = space items apart
    // w-1/3 = takes up 1/3 of parent width
    <div className="h-full flex flex-col justify-between w-1/3 ">
      {/* Main heading and description at top */}
      <HeroText />

      {/* Decorative arrow at bottom */}
      <Arrow />
    </div>
  );
};

export default LeftContent;
