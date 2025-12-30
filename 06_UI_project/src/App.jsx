// IMPORTS: Bringing in components from other files
// React components help us organize code into reusable pieces
import Section1 from "./components/section1/section1"; // Import path matches actual filename casing
import Section2 from "./components/section2/Section2";

// APP COMPONENT: This is the main component of our application
// In React, components are JavaScript functions that return JSX (HTML-like syntax)
const App = () => {
  // STATE DATA: This array holds our user data
  // In React, we keep data in variables and pass it to child components as "props"
  const users = [
    // Each object represents one user card with properties
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "", // Currently empty, can be used for user description
      color: "royalblue", // Background color for the tag button
      tag: "Satisfied", // Category label for this user
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "lightseagreen",
      intro: "",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "orange",
      intro: "",
      tag: "Underbanked",
    },
    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "pink",
      intro: "",
      tag: "Underwear",
    },
    {
      img: "https://images.unsplash.com/photo-1748785826435-83c5062a5737?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color: "black",
      tag: "Average",
    },
  ];

  // RETURN JSX: What the component displays on screen
  // JSX looks like HTML but it's actually JavaScript
  return (
    <div>
      {/* PROPS: Passing data to child components */}
      {/* We pass the 'users' array to Section1 component as a prop */}
      <Section1 users={users} />

      {/* Section2 doesn't need any data, so no props */}
      <Section2 />
    </div>
  );
};

// EXPORT: Makes this component available to import in other files
// 'default' means this is the main export from this file
export default App;
