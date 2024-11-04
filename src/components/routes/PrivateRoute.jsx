import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext); 
  // Check if the user is logged in
  return user ? children : <Navigate to="/login" />; 
};

export default PrivateRoute;
