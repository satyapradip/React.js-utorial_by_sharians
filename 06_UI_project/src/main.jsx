// ENTRY POINT: This is where React starts running
import { StrictMode } from "react"; // StrictMode helps catch bugs during development
import { createRoot } from "react-dom/client"; // React DOM renders React to the browser
import "./index.css"; // Global styles for the entire app
import App from "./App.jsx"; // Our main App component

// RENDERING: This attaches our React app to the HTML page
// 1. Find the HTML element with id='root' (in index.html)
// 2. Create a React root inside it
// 3. Render the App component inside StrictMode
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* StrictMode is a wrapper that helps identify problems in development */}
    <App />
  </StrictMode>
);
