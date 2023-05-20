import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";

import { GridLoader } from "react-spinners";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (loader) {
    return (
      <div>
        <GridLoader
          color="#36d7b7"
          cssOverride={{
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} replace to="/login"></Navigate>;
};

export default PrivateRoute;
