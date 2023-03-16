import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/not-found-page";
import HomePage from "../pages/home-page";
import AboutPage from "../pages/about-page";
import WcstWindow from "../pages/wcst-test-page";
import ResultPage from "../pages/result-page";
import App from "../App";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
      {
        path: "/wcst-test-window",
        element: <WcstWindow />,
      },
      {
        path: "/wcst-test-result",
        element: <ResultPage />,
      },
    ],
  },
]);
