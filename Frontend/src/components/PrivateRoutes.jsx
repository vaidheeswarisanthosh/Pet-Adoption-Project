// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const PrivateRoutes = ({ children }) => {
//   const { user } = useAuth();

//   return user ? children : <Navigate to="/" />;
// };

// export default PrivateRoutes;



// src/components/routes/PrivateRoute.jsx

import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, requiredRole }) => {
  const { user } = useAuth();

  // If user is not logged in, redirect to home page
  if (!user) {
    return <Navigate to="/" />;
  }

  // If the user role doesn't match the required role, redirect to Unauthorized page
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default PrivateRoute;




