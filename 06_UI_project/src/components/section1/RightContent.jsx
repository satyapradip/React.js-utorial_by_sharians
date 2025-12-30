import React from "react";
import "remixicon/fonts/remixicon.css"; // Import RemixIcon CSS for icons
import RightCard from "./RightCard";

// RIGHTCONTENT COMPONENT: Scrollable container for user cards
// Receives 'users' array from Page1Content
const RightContent = (props) => {
  // REMOVED: console.log(props.users.color) - This was an error!
  // props.users is an array, not an object, so it doesn't have a 'color' property

  return (
    // Container: overflow-x-auto = horizontal scroll, flex-nowrap = cards stay in one row
    // w-2/3 = takes up 2/3 of parent width (RightContent is twice as wide as LeftContent)
    <div
      id="right"
      className="h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3"
    >
      {/* MAP METHOD: Loop through users array and create a card for each user */}
      {/* In React, we use .map() to render lists of items */}
      {props.users.map(function (elem, idx) {
        // elem = current user object, idx = index (0, 1, 2, 3, 4)

        // Return a RightCard component for each user
        // key={idx} - React needs unique 'key' for list items to track changes efficiently
        return (
          <RightCard
            key={idx}
            color={elem.color}
            id={idx}
            img={elem.img}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
