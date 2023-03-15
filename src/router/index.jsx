import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import NotFound from "../pages/not-found-page";
import HomePage from "../pages/home-page";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";
import WcstWindow from "../pages/wcst-test-page";
import ResultPage from "../pages/result-page";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
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
        path: "/contact",
        element: <ContactPage />,
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
