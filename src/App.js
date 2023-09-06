import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Page404 from "./routes/page404";
import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Skills from "./pages/skills";
import Contact from "./pages/contact";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    /*errorElement: <Page404 />,*/
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
