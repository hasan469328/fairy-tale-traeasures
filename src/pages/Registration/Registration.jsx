import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://i.ibb.co/NZSfS3S/5039684.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "8px",
        
      }}
      className="md:flex h-screen overflow-scroll lg:overflow-hidden"
    >
      <div className="w-1/2 hidden lg:block">
        {/* Image */}
        <img
          src="https://i.ibb.co/wwNNR7S/output-onlinepngtools.png"
          alt="Login Image"
          className=""
        />
      </div>
      <div className="w-3/4 mx-auto my-auto lg:w-1/2 flex items-center justify-center">
        {/* Registration Form */}
        <div className="w-full h-full lg:w-96 px-4  lg:px-8 lg:py-4 lg:border-2 lg:border-purple-500 lg:rounded-lg">
          <h2 className="text-white text-3xl font-bold mb-2 lg:mb-4">
            Register
          </h2>
          <form>
            <div className="mb-2 lg:mb-4">
              <label htmlFor="text" className="text-white block font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="email"
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
                id="password"
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
                className="w-full border border-gray-400 p-2 rounded"
              />
            </div>
            <input
              className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 lg:px-4 lg:py-2 text-xl cursor-pointer text-white font-bold rounded-lg mb-4"
              type="submit"
              value="Sign Up"
            />
          </form>
          <p>
            <span className="text-white">Already have an account? Please</span>{" "}
            <Link to="/login" className="text-red-400">
              LogIn
            </Link>{" "}
          </p>
          <hr className="mt-4 mb-4" />
          <div className="flex gap-4">
            <BsGoogle className="text-white text-2xl" />
            <BsFacebook className="text-white text-2xl" />
            <BsGithub className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
