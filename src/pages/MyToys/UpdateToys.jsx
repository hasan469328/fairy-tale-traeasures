import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Label, Select, TextInput, Textarea } from "flowbite-react";
import { useLoaderData } from "react-router-dom";

const UpdateToys = () => {
  const { user } = useContext(AuthContext);
  const singleToyData = useLoaderData();
  console.log(singleToyData);
  const { _id,photo, description, price, quantity, toyName, subCategory, rating } =
    singleToyData;
    console.log(_id)

  const handleUpdateProducts = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const addedProduct = {
      photo,
      toyName,
      sellerName,
      email,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };
    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount > 0){
          console.log(data);
        }   
      });
  };
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat p-4 rounded-lg"
      style={{ backgroundImage: "url('https://i.ibb.co/pf4VJz5/5329108.jpg')" }}
    >
      <form
        onSubmit={handleUpdateProducts}
        className="flex flex-col gap-4 lg:w-1/2 mx-auto"
      >
        <div>
          <div className="mb-2 block">
            <Label
              className=" text-white font-semibold"
              htmlFor="repeat-password"
              value="Picture Url"
            />
          </div>
          <TextInput
            id="repeat-password"
            type="text"
            name="photo"
            defaultValue={photo}
            readOnly
            required={true}
            shadow={true}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label className=" text-white font-semibold" value="Toy Name" />
          </div>
          <TextInput
            type="text"
            name="toyName"
            defaultValue={toyName}
            readOnly
            required={true}
            shadow={true}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label className=" text-white font-semibold" value="Your Name" />
          </div>
          <TextInput
            type="text"
            name="sellerName"
            required={true}
            shadow={true}
            defaultValue={user?.displayName}
            readOnly
          />
        </div>

        <div>
          <div className="mb-2 block ">
            <Label className=" text-white font-semibold" value="Your email" />
          </div>
          <TextInput
            type="email"
            name="email"
            defaultValue={user?.email}
            readOnly
            required={true}
            shadow={true}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label className=" text-white font-semibold" value="Sub-category" />
          </div>
          <Select
            required={true}
            name="subCategory"
            defaultValue={subCategory}
            readOnly
            shadow={true}
          >
            <option>Disney Princess</option>
            <option>Frozen Dolls</option>
            <option>Donald Duck</option>
          </Select>
        </div>

        <div>
          <div className="mb-2 block ">
            <Label className=" text-white font-semibold" value="Price" />
          </div>
          <TextInput
            type="text"
            name="price"
            defaultValue={price}
            required={true}
            shadow={true}
          />
        </div>

        <div>
          <div className="mb-2 block ">
            <Label className="text-white font-semibold" value="Rating" />
          </div>
          <TextInput
            type="text"
            defaultValue={rating}
            readOnly
            name="rating"
            required={true}
            shadow={true}
          />
        </div>

        <div>
          <div className="mb-2 block ">
            <Label
              className="text-white font-semibold"
              value="Available Quantity"
            />
          </div>
          <TextInput
            type="text"
            name="quantity"
            defaultValue={quantity}
            required={true}
            shadow={true}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              className="text-white font-semibold"
              value="Detail Description"
            />
          </div>
          <Textarea
            required={true}
            name="description"
            defaultValue={description}
            rows={4}
          />
        </div>

        <input
          className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 lg:px-4 lg:py-2 mb-4 text-xl cursor-pointer text-white font-bold rounded-lg"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default UpdateToys;
