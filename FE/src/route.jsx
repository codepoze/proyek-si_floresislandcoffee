import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./RootLayout";
import Home from "./Home";
import About from "./About";
import News from "./News";
import ReadNews from "./ReadNews";
import Contact from "./Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:slug",
        element: <ReadNews />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;