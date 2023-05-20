import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Blogs from "../pages/Blogs/Blogs";
import Registration from "../pages/Registration/Registration";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToys from "../pages/MyToys/UpdateToys";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("http://localhost:5000/blogs")
      },
      {
        path: "/addToy",
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/myToys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path: "/update/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
      }
    ],
  },
]);

export default router;
