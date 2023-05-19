import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";

const MyToysRow = ({toy}) => {
  const { sellerName, toyName, subCategory, price, quantity } = toy;
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
          <Link to="/login">Update</Link>
        </Button>
      </Table.Cell>
      <Table.Cell>
        <Button gradientDuoTone="purpleToPink">
          <Link to="/login">Delete</Link>
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default MyToysRow;