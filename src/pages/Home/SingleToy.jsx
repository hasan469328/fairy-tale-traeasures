import { Rating } from "@smastrom/react-rating";
import { Card } from "flowbite-react";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const toy = useLoaderData();
  const {
    sellerName,
    toyName,
    price,
    quantity,
    photo,
    email,
    rating,
    description,
  } = toy;
  
  return (
    <div className="max-w-lg mx-auto mb-5 lg:mb-20">
      <Card>
        <img src={photo} alt="" className="" />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {toyName}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Seller Name: {sellerName}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Seller Email: {email}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Price: {price}
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
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Available Quantity: {quantity}
        </p>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {description}
        </h5>
      </Card>
    </div>
  );
};

export default SingleToy;
