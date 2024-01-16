/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return "Loading Please Wait....";

  return isAuthenticated ? children : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
