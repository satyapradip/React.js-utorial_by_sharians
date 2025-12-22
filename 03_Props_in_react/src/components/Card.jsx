import React from "react";

// Component names should start with capital letter in React
// Props (properties) are like function arguments - they allow you to pass data from parent to child component
const Card = (props) => {
  console.log(props); // This will show all props passed to this component

  return (
    <div className="card">
      {/* Using props.image - if image is passed, use it; otherwise use default image */}
      <img
        src={
          props.image ||
          "https://images.unsplash.com/photo-1707061229218-c7611e720882?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="profile"
      />

      {/* Using props.name - displaying the name passed from parent component */}
      <h1>{props.name || "Guest"}</h1>

      {/* Using props.description - displaying the description passed from parent */}
      <p>{props.description || "No description available."}</p>

      {/* Using props.buttonText - custom button text */}
      <button>{props.buttonText || "View Profile"}</button>
    </div>
  );
};

// Export the component so it can be imported in other files
export default Card;
