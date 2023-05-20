import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  
  return (
    <div className="mx-auto max-w-md">
      <img
        src="https://i.ibb.co/px4QtVY/Daco-5293478.png"
        alt="Upset"
        className="block mx-auto w-3/4 h-auto mb-5"
      />
      <h1 className="text-3xl font-semibold text-center text-red-700 mb-5">404 - Page not found</h1>
      <p className="text-center mb-5">
        We&apos;re sorry, but the page you&apos;re looking for could not be found.
      </p>
      <Button className="block mx-auto" gradientMonochrome="purple"><Link to="/">Back to Home</Link></Button>
    </div>
  );
};

export default NotFound;