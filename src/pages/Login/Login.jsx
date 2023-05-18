const Login = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://i.ibb.co/NZSfS3S/5039684.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="md:flex h-screen">
        <div className="w-1/2 hidden lg:block">
          {/* Image */}
          <img
            src="https://i.ibb.co/wwNNR7S/output-onlinepngtools.png"
            alt="Login Image"
            className=""
          />
        </div>
        <div className="w-3/4 mx-auto my-auto lg:w-1/2 flex items-center justify-center">
          {/* Login Form */}
          <div className="w-full lg:w-96 p-4 lg:p-8  shadow-lg rounded">
            <h2 className="text-white text-3xl font-bold mb-2 lg:mb-4">Login</h2>
            <form>
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
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
