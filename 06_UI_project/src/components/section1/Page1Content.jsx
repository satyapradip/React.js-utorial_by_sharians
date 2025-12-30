import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

// PAGE1CONTENT COMPONENT: Main content area split into left and right sections
// Receives 'users' data from Section1 component
const Page1Content = (props) => {
  return (
    // Container with flexbox layout
    // h-[90vh] = 90% of viewport height, gap-10 = space between left and right content
    <div className="pb-16 pt-6  flex items-center gap-10 h-[90vh]  px-18">
      {/* Left side: Hero text and arrow */}
      <LeftContent />

      {/* Right side: User cards - passing users data down */}
      {/* PROPS CHAIN: App -> Section1 -> Page1Content -> RightContent */}
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Content;
