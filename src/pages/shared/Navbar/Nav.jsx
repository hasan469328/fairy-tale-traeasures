import {  Navbar } from "flowbite-react";
import brand from '../../../../public/logo.png'

const Nav = () => {
  return (
    <Navbar fluid={true} rounded={true} className="mb-10 mt-10">
      <Navbar.Brand href="/" className="flex-1">
        <img
          src={brand}
          className=""
          alt="Website logo"
        />
        <p className="text-3xl font-bold hidden md:block md:ml-4 text-gray-700">Fairy Tale Treasures</p>
      </Navbar.Brand>
      <div className="flex md:order-2">
       
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="md:text-2xl" href="/" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link className="md:text-2xl"  href="/navbars">All Toys</Navbar.Link>
        <Navbar.Link className="md:text-2xl" href="/navbars">My Toys</Navbar.Link>
        <Navbar.Link className="md:text-2xl" href="/navbars">Add a Toy</Navbar.Link>
        <Navbar.Link className="md:text-2xl" href="/blogs">Blogs</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
