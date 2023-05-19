import { Table } from "flowbite-react";
import { useLoaderData } from "react-router-dom";
import ToyRows from "./ToyRows";

const AllToys = () => {
  const allToys = useLoaderData();
  console.log(allToys);
  return (
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
  );
};

export default AllToys;
