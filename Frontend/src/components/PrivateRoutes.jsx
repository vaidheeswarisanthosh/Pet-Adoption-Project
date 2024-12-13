
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
