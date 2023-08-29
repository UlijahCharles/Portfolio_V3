import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Page404 from "./routes/page404";
import Home from "./pages/home";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Page404 />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
