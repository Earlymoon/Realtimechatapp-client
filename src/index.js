// import React from "react";
// import { createRoot } from "react-dom/client"; // Import createRoot from "react-dom/client"
import App from "./App";

// const root = createRoot(document.getElementById("root")); // Use createRoot directly
// root.render(<App />);

// import react from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: {<App/>},
//     },
//   ]);

import React from "react";
import ReactDOM from "react-dom/client";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
