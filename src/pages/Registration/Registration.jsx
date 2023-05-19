import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const { createUser, logOut } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if (password.length < 8) {
      setError("Password Must Be 8 Character long!!!");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => {
            // An error occurred
            console.log(error.message);
            // ...
          });

        logOut().then().catch();
        navigate("/login");

        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };
  return (
    <div
      style={{
        backgroundImage: "url('https://i.ibb.co/NZSfS3S/5039684.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "8px",
      }}
      className="md:flex p-4"
    >
      <div className="lg:w-1/2 hidden lg:block">
        {/* Image */}
        <img
          src="https://i.ibb.co/wwNNR7S/output-onlinepngtools.png"
          alt="Login Image"
          className=""
        />
      </div>
      <div className="lg:w-1/2 flex items-center justify-center">
        {/* Registration Form */}
        <div className="lg:w-96 px-4 lg:px-8 lg:py-4 border-2 border-purple-500 rounded-lg">
          <h2 className="text-white text-3xl font-bold mb-2 lg:mb-4">
            Register
          </h2>
          <form onSubmit={handleSignUp}>
            <div className="mb-2 lg:mb-4">
              <label htmlFor="text" className="text-white block font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full border border-gray-400 p-2 rounded"
              />
            </div>
            <div className="mb-2 lg:mb-4">
              <label
                htmlFor="email"
                className="text-white block font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-400 p-2 rounded"
              />
            </div>
            <div className="mb-2 lg:mb-4">
              <label
                htmlFor="password"
                className="block text-white font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="w-full border border-gray-400 p-2 rounded"
              />
            </div>
            <div className="mb-2 lg:mb-4">
              <label htmlFor="text" className="text-white block font-bold mb-2">
                Photo Url
              </label>
              <input
                type="text"
                id="text"
                name="photo"
                required
                className="w-full border border-gray-400 p-2 rounded"
              />
            </div>
            <input
              className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 lg:px-4 lg:py-2 text-xl cursor-pointer text-white font-bold rounded-lg mb-4"
              type="submit"
              value="Sign Up"
            />
          </form>
          <p className="text-red-400 mb-2">{error}</p>
          <p>
            <span className="text-white">Already have an account? Please</span>{" "}
            <Link to="/login" className="text-red-400">
              LogIn
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
