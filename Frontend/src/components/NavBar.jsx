// NavBar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 
import { useState } from "react";

const NavBar = () => {
  const { user, logout } = useAuth(); // Get user from context
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout(); // Clear user context
    navigate("/login"); // Redirect to login page
  };

  const navigateToDashboard = () => {
    console.log("User context at navigation:", user);
    console.log("Navigating to dashboard...");
    console.log("User role:", user?.role);
    if (user?.role === "Admin") {
      console.log("Navigating to admin dashboard...");
      navigate("/dashboard/admin");
    } else if (user?.role === "Adopter") {
      console.log("Navigating to adopter dashboard...");
      navigate("/dashboard/adopter");
      console.log("User:", user?.role);
    } else if (user?.role === "Shelter") {
      console.log("Navigating to shelter dashboard...");
      
      navigate("/dashboard/shelter");
    } else {
      navigate("/unauthorized");
    }
  };
return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg fixed top-0 left-0 w-full z-50">
      <h1 className="text-xl font-bold tracking-wide">Pet Adoption Platform</h1>

      {/* Hamburger Icon for mobile view */}
      <button
        className="lg:hidden text-2xl"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        &#9776;
      </button>

      {/* Navigation Links */}
      <div
        className={`lg:flex lg:space-x-6 ${isMenuOpen ? "block" : "hidden"} flex-col lg:flex-row`}
      >
        <Link
          to="/"
          className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
          aria-label="Go to Home"
        >
          Register
        </Link>

        {user ? (
          <>
            <button
              onClick={navigateToDashboard}
              className="text-lg font-medium hover:text-blue-300  py-2 text-pink-600"
              aria-label="Go to Dashboard"
            
            >
              Dashboard 
            </button>
            <button
              onClick={handleLogout}
              className="text-lg font-medium hover:text-red-400 transition-colors py-2 text-pink-600"
              aria-label="Logout"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
              aria-label="Login"
            >
              Login
            </Link>
            {/* <Link
              to="/register"
              className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
              aria-label="Register"
            >
              Register
            </Link> */}
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;





