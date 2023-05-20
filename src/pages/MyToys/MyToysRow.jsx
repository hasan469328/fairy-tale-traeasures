import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";

const MyToysRow = ({ toy, setMyToys, myToys }) => {
  const { _id, sellerName, toyName, subCategory, price, quantity } = toy;

  const handleDeleteProducts = (id) => {
    fetch(`http://localhost:5000/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.deletedCount > 0){
          alert('successfull')
          const remaining = myToys.filter(toy => toy._id !== id)
          setMyToys(remaining)
        }
      });
  };
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {sellerName}
      </Table.Cell>
      <Table.Cell>{toyName}</Table.Cell>
      <Table.Cell>{subCategory}</Table.Cell>
      <Table.Cell>{price}</Table.Cell>
      <Table.Cell>{quantity}</Table.Cell>
      <Table.Cell>
        <Button gradientDuoTone="purpleToPink">
          <Link to={`/update/${_id}`}>Update</Link>
        </Button>
      </Table.Cell>
      <Table.Cell>
        <Button
          onClick={() => handleDeleteProducts(_id)}
          gradientDuoTone="purpleToPink"
        >
          Delete
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default MyToysRow;
