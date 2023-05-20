import { Button, Modal, Table } from "flowbite-react";
import React, { useContext } from "react";

import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const ToyRows = ({ toy }) => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();
  const {
    
    sellerName,
    toyName,
    subCategory,
    price,
    quantity,
    photo,
    email,
    rating,
    description,
  } = toy;
  console.log(toy);
  const [showModal, setShowModal] = React.useState(false);

  const onClick = () => {
    setShowModal(!showModal);
  };

  const onClose = () => {
    setShowModal(false);
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
        <Button gradientDuoTone="purpleToPink" onClick={onClick}>
          View Details
        </Button>
        {!user ? navigate('/login') : <>
        {showModal && (
          <Modal show={true} onClose={onClose}>
            <Modal.Header>{toyName}</Modal.Header>
            <Modal.Body>
              <div className="space-y-2">
                <img src={photo} alt="" className="w-full h-48 lg:h-96"/>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Seller Name: {sellerName}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Seller Email: {email}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Price: {price}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Available Quantity: {quantity}
                </p>
                <div className="flex gap-4">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Rating:{" "}
                  </p>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={`Math.round${rating}`}
                    readOnly
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <p className="text-gray-900 font-medium text-xl">Description: {description}</p>
            </Modal.Footer>
          </Modal>
        )}
        </>}
      </Table.Cell>
    </Table.Row>
  );
};

export default ToyRows;
