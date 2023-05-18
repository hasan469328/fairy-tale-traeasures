import { Outlet } from "react-router-dom";
import Nav from "../../pages/shared/Navbar/Nav";
import Footerr from "../../pages/shared/Footer/Footerr";

const MainLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footerr></Footerr>
    </div>
  );
};

export default MainLayout;