import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Table } from "flowbite-react";
import MyToysRow from "./MyToysRow";
import useTitle from "../../../hooks/useTitle";
import SortByPrice from "./SortByPrice";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState(null);
  useEffect(() => {
    fetch(`https://fairy-tale-treasures-server.vercel.app/myToys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user?.email]);

  return (
    <>
      <SortByPrice setMyToys={setMyToys}></SortByPrice>
      <Table className="mb-10">
        <Table.Head>
          <Table.HeadCell>Seller</Table.HeadCell>
          <Table.HeadCell>Toy Name</Table.HeadCell>
          <Table.HeadCell>Sub Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Available Quantity</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Update</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {myToys?.map((toy) => (
            <MyToysRow
              key={toy._id}
              toy={toy}
              setMyToys={setMyToys}
              myToys={myToys}
            ></MyToysRow>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default MyToys;
