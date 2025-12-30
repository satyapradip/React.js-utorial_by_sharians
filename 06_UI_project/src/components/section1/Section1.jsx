// IMPORTS: React library and child components
import React from "react";
import Navbar from "./Navbar";
import Page1Content from "./Page1Content";

// SECTION1 COMPONENT: Main container for the first section of the page
// (props) - Receives data from parent component (App.jsx)
const Section1 = (props) => {
  return (
    // Container div: h-screen = full screen height, w-full = full width
    <div className="h-screen w-full ">
      {/* Navbar component at the top */}
      <Navbar />

      {/* PROPS DRILLING: Passing 'users' data down to Page1Content */}
      {/* props.users comes from App.jsx and goes to Page1Content */}
      <Page1Content users={props.users} />
    </div>
  );
};

export default Section1;
