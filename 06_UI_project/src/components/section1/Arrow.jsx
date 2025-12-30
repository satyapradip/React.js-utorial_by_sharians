import React from "react";

// ARROW COMPONENT: Decorative arrow icon using RemixIcon
const Arrow = () => {
  return (
    // text-9xl = extra large icon size
    <div className="text-9xl">
      {/* RemixIcon: arrow-right-up icon */}
      {/* ri- prefix indicates RemixIcon library */}
      <i className="ri-arrow-right-up-line"></i>
    </div>
  );
};

export default Arrow;
