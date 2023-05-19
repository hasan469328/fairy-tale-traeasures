import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Blogs from "../pages/Blogs/Blogs";
import Registration from "../pages/Registration/Registration";
import AddToy from "../pages/AddToy/AddToy";

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
      path: "/register",
      element: <Registration></Registration>
    },
    {
      path: "/blogs",
      element: <Blogs></Blogs>
    },
    {
      path: "/addToy",
      element: <AddToy></AddToy>
    }
  ]
  },
]);

export default router;