import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
// import { Router } from "./router";
import "tailwindcss/tailwind.css";
import "./index.css";

import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Picks from "./pages/Picks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/groups",
        element: <Groups />,
      },
      {
        path: "/picks",
        element: <Picks />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

export default router;
