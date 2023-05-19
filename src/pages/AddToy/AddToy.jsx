import { Label, Select, TextInput, Textarea } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat p-4 rounded-lg"
      style={{ backgroundImage: "url('https://i.ibb.co/pf4VJz5/5329108.jpg')" }}
    >
      <form  className="flex flex-col gap-4 lg:w-1/2 mx-auto">
        <div>
          <div className="mb-2 block">
            <Label
              className="text-white font-semibold"
              htmlFor="repeat-password"
              value="Picture Url"
            />
          </div>
          <TextInput
            id="repeat-password"
            type="text"
            name="photo"
            required={true}
            shadow={true}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label className="text-white font-semibold" value="Toy Name" />
          </div>
          <TextInput type="text" name="toyName" required={true} shadow={true} />
        </div>

        <div>
          <div className="mb-2 block">
            <Label className="text-white font-semibold" value="Your Name" />
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
            <Label className="text-white font-semibold" value="Your email" />
          </div>
          <TextInput
            type="email"
            defaultValue={user?.email}
            readOnly
            required={true}
            shadow={true}
          />
        </div>

        <div id="select">
          <div className="mb-2 block">
            <Label className="text-white font-semibold" value="Sub-category" />
          </div>
          <Select required={true} shadow={true}>
            <option>Disney Princess</option>
            <option>Frozen Dolls</option>
            <option>Donald Duck</option>
          </Select>
        </div>

        <div>
          <div className="mb-2 block ">
            <Label className="text-white font-semibold" value="Price" />
          </div>
          <TextInput type="text" name="price" required={true} shadow={true} />
        </div>

        <div>
          <div className="mb-2 block ">
            <Label className="text-white font-semibold" value="Rating" />
          </div>
          <TextInput type="text" name="rating" required={true} shadow={true} />
        </div>

        <div>
          <div className="mb-2 block ">
            <Label
              className="text-white font-semibold"
              value="Available Quantity"
            />
          </div>
          <TextInput type="text" name="price" required={true} shadow={true} />
        </div>

        <div>
          <div className="mb-2 block">
            <Label className="text-white font-semibold" value="Detail Description" />
          </div>
          <Textarea
            required={true}
            rows={4}
          />
        </div>

        <input className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 lg:px-4 lg:py-2 mb-4 text-xl cursor-pointer text-white font-bold rounded-lg" type="submit" value="Add Toy" />
      </form>
    </div>
  );
};

export default AddToy;
