// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const PrivateRoutes = ({ children }) => {
//   const { user } = useAuth();

//   return user ? children : <Navigate to="/" />;
// };

// export default PrivateRoutes;



// src/components/routes/PrivateRoute.jsx

// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const PrivateRoute = ({ children, requiredRole }) => {
//   const { user } = useAuth();

//   // If user is not logged in, redirect to home page
//   if (!user) {
//     return <Navigate to="/" />;
//   }

//   // If the user role doesn't match the required role, redirect to Unauthorized page
//   if (requiredRole && user.role !== requiredRole) {
//     return <Navigate to="/unauthorized" />;
//   }

//   return children;
// };

// export default PrivateRoute;



// import { Navigate } from "react-router-dom";

// const PrivateRoutes = ({ children, role }) => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   const userRole = JSON.parse(atob(token.split(".")[1])).role; // Decode JWT to get user role

//   if (role && userRole !== role) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default PrivateRoutes;




import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children, role }) => {
  const token = localStorage.getItem("token");

  // Check if there is no token in localStorage
  if (!token) {
    console.log("No token found, redirecting to login...");
    return <Navigate to="/login" />;
  }

  try {
    // Decode JWT token to extract user role
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const userRole = decodedToken.role;

    // Check if user role is valid and matches required role (case insensitive)
    if (role && userRole.toLowerCase() !== role.toLowerCase()) {
      console.log(`Role mismatch. Expected: ${role}, Found: ${userRole}`);
      return <Navigate to="/login" />;
    }

    // Return children (protected route) if everything is valid
    return children;
  } catch (err) {
    // Catch errors during JWT decoding
    console.error("Error decoding token:", err);
    return <Navigate to="/login" />;
  }
};

export default PrivateRoutes;
