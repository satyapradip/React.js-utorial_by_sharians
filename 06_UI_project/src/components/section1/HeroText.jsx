import React from "react";

// HEROTEXT COMPONENT: Main heading and description
const HeroText = () => {
  return (
    <div className="p-6">
      {/* Main heading: text-7xl = very large font */}
      {/* <br /> = line break to split text across multiple lines */}
      <h3 className="mb-7 text-7xl font-bold">
        Prospective <br />
        <span>customer</span> <br />
        segmentation
      </h3>

      {/* Description paragraph */}
      {/* w-[90%] = width 90% of parent, text-gray-600 = gray text color */}
      <p className="text-xl w-[90%] font-medium text-gray-600">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
        doloremque perspiciatis cumque, eveniet recusandae a laborum vero!
        Aperiam, at culpa.
      </p>
    </div>
  );
};

export default HeroText;
