import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Offer = () => {
  const offer = {
    title: 'Black Friday Sale',
    description: 'Get ready for a magical summer with our special offer! Enjoy up to 55% off on selected Disney toys and merchandise. Limited time only!',
    image: 'https://i.ibb.co/hXVgXgB/20139.jpg',
  };

  return (
    <div className="flex bg-gray-100 rounded-lg p-6 shadow-md mb-10">
      <div className="flex-shrink-0">
        <img src={offer.image} alt={offer.title} className="w-32 h-auto rounded-md" />
      </div>
      <div className="ml-4">
        <h3 className="text-2xl font-bold">{offer.title}</h3>
        <p className="text-gray-700 mt-2 mb-2">{offer.description}</p>
        <Button gradientDuoTone="purpleToPink">
          <Link to='/allToys'>Shop Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default Offer;