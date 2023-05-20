import { Rating } from "@smastrom/react-rating";
import { Button, Card } from "flowbite-react";
import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Princess = ({ princess }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleView = () => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Login first!',
      })
      navigate("/login", { state: { from: location }, replace: true });
    }
  };
  const {
    _id,
    sellerName,
    toyName,
    subCategory,
    price,
    quantity,
    photo,
    email,
    rating,
    description,
  } = princess;
  return (
    <div>
      <div className="max-w-md">
        <Card>
          <img src={photo} alt="" className="max-h-48" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {toyName}
          </h5>
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

          <Button gradientDuoTone="purpleToPink" onClick={handleView}>
            <Link to={`/singleToy/${_id}`}>View Details</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Princess;
