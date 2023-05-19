import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useState } from "react";

const Login = () => {
  const {signIn, googleSignIn} = useContext(AuthContext);
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      const loggedUser = result.user
      console.log(loggedUser)
      navigate('/')
    })
    .catch(error => {
      setError(error.message)
      console.log(error.messeage)
    })
  }
  const handleLogin = event =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password)
    .then(result => {
      const loggedUser = result.user
      navigate('/')
    })
    .catch(error => {
      setError(error.message)
      console.log(error.message)
    })
  }
  return (
    <div
      style={{
        backgroundImage: "url('https://i.ibb.co/NZSfS3S/5039684.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "16px"
      }}
      className="relative"
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
          <div className="w-full lg:w-96 p-4 lg:p-8 lg:border-2 lg:border-purple-500 lg:rounded-lg">
            <h2 className="text-white text-3xl font-bold mb-2 lg:mb-4">
              Login
            </h2>
            <form onSubmit={handleLogin}>
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
                  className="w-full border border-gray-400 p-2 rounded"
                />
              </div>
              <input
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 lg:px-4 lg:py-2 mb-4 text-xl cursor-pointer text-white font-bold rounded-lg"
                type="submit"
                value="Sign In"
              />
            </form>
            <p className="mb-4 text-red-400">{error}</p>
            <p>
              <span className="text-white">Don&apos;t have an account?</span>{" "}
              <Link to='/register' className="text-red-400">Sign Up</Link>{" "}
            </p>
            <hr className="mt-4 mb-4" />
            <div className="flex gap-4">
                <BsGoogle onClick={handleGoogleSignIn} className="text-white text-2xl"/>
                <BsFacebook className="text-white text-2xl"/>
                <BsGithub className="text-white text-2xl"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
