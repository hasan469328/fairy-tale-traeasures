import { Dropdown } from "flowbite-react";
import { useContext} from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SortByPrice = ({ setMyToys }) => {
  const { user } = useContext(AuthContext);
  const handleAscending = () => { 
    fetch(`http://localhost:5000/myToys/sortAscending?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  };

  const handleDescending = () => {
    fetch(`http://localhost:5000/myToys/sortDescending?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }
  return (
    <div className="flex justify-center mb-5">
      <Dropdown label="Sort-By-Price">
        <Dropdown.Item onClick={handleAscending}>
          Price - Ascending
        </Dropdown.Item>
        <Dropdown.Item onClick={handleDescending}>
          Price - Descending
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default SortByPrice;
