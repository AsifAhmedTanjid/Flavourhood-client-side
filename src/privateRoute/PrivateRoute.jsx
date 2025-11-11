import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/common/Loader";


const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  // console.log(location);
  if (loading) {
    return (
      <div className="h-[97vh] flex items-center justify-center">
        <Loader></Loader>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname} />;
  }

  return children;
};

export default PrivateRoute;
