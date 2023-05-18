import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [{
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/blogs",
      element: <Blogs></Blogs>
    }
  ]
  },
]);

export default router;