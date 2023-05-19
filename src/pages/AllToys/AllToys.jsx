import { Table } from "flowbite-react";

import ToyRows from "./ToyRows";
import { useEffect, useState } from "react";

const AllToys = () => {
  const [allToys, setAlltoys] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    fetch("http://localhost:5000/toys")
    .then((res) => res.json())
    .then((data) => {
      setAlltoys(data);
    });
  },[])
  
    const handleSearch = () => {
      const filteredToys = allToys.filter(toy =>
        toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setAlltoys(filteredToys)
    }
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mb-5">
          <input
            type="text"
            value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search products..."
          />
          <button
            onClick={handleSearch}
            className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 lg:px-4 lg:py-2 text-xl cursor-pointer text-white font-bold rounded-lg mb-4 rounded-r-lg px-6 py-2 ml-1"
          >
            Search
          </button>
        </div>
      </div>
      <Table className="mb-10">
        <Table.Head>
          <Table.HeadCell>Seller</Table.HeadCell>
          <Table.HeadCell>Toy Name</Table.HeadCell>
          <Table.HeadCell>Sub Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Available Quantity</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">View Details</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {allToys.map((toy) => (
            <ToyRows key={toy._id} toy={toy}></ToyRows>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default AllToys;
