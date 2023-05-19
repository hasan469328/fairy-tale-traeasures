import { Avatar, Button, Navbar } from "flowbite-react";
import brand from "../../../../public/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  {
    /* todo: this sholud be removed before final production */
  }
  const handleLogOut = () => {
    logOut()
    .then()
    .catch()
  };
  console.log(user.photoURL)
  return (
    <Navbar fluid={true} rounded={true} className="mb-10 mt-10">
      <Navbar.Brand href="/" className="flex-1">
        <img src={brand} className="" alt="Website logo" />
        <p className="text-3xl font-bold hidden md:block md:ml-4 text-gray-700">
          Fairy Tale Treasures
        </p>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="md:text-2xl" href="/" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link className="md:text-2xl" href="/navbars">
          All Toys
        </Navbar.Link>
        <Navbar.Link className="md:text-2xl" href="/blogs">
          Blogs
        </Navbar.Link>
        {!user ? (
          <Link to='/login'><Button gradientDuoTone="purpleToPink">LogIn</Button></Link>
        ) : (
          <>
            <Navbar.Link className="md:text-2xl" href="/navbars">
              My Toys
            </Navbar.Link>
            <Navbar.Link className="md:text-2xl" href="/navbars">
              Add a Toy
            </Navbar.Link>
            <Avatar
              img={user.photoURL}
              rounded={true}
              bordered={true}
              color="purple"
              status="online"
              title={user.displayName}
            />
            <Button onClick={handleLogOut} gradientDuoTone="purpleToPink">
              Logout
            </Button>
            {/* todo: this sholud be removed before final production */}
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
