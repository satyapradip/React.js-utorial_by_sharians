import React from "react";

// RIGHTCARDCONTENT COMPONENT: Overlay content displayed on top of card image
// Receives: color, id, tag from RightCard
const RightCardContent = (props) => {
  // REMOVED: console.log(props.color) - Clean code = no debug logs

  return (
    // Absolute positioning: top-0 left-0 = positioned at top-left corner
    // This div overlays the image because parent has 'relative' position
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      {/* Card number badge */}
      {/* props.id+1 because array index starts at 0, but we want to show 1, 2, 3... */}
      <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">
        {props.id + 1}
      </h2>

      <div>
        {/* Description text */}
        {/* text-shadow-2xs = small text shadow for better readability on image */}
        <p className="text-shadow-2xs text-xl leading-relaxed text-white mb-14">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          accusamus cupiditate voluptatibus mollitia alias tempora.
        </p>

        {/* Button container */}
        <div className="flex justify-between">
          {/* Category tag button with dynamic background color */}
          {/* INLINE STYLES: style={{backgroundColor:props.color}} */}
          {/* Use inline styles when CSS values need to be dynamic/from props */}
          <button
            style={{ backgroundColor: props.color }}
            className="text-white font-medium px-8 py-2 rounded-full"
          >
            {props.tag}
          </button>

          {/* Arrow button */}
          <button className="text-white font-medium px-3 py-2 rounded-full">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
