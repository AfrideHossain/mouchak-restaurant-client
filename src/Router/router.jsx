import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../assets/Layout/HomeLayout/HomeLayout";
import Homepage from "../Pages/Homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
