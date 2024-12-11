// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg fixed top-0 left-0 w-full z-50">
//       <div className="container mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo or Title */}
//         <Link to="/" className="text-3xl font-bold text-white hover:text-gray-200 transition duration-300">
//           PetAdopt
//         </Link>

//         {/* Desktop Navigation Links */}
//         <div className="hidden md:flex space-x-10">
//           <Link
//             to="/"
//             className="hover:text-gray-200 transition duration-300 text-lg font-semibold"
//           >
//             Home
//           </Link>
//           <Link
//             to="/pets"
//             className="hover:text-gray-200 transition duration-300 text-lg font-semibold"
//           >
//             Pets List
//           </Link>
//           <Link
//             to="/adopt"
//             className="hover:text-gray-200 transition duration-300 text-lg font-semibold"
//           >
//             Adoption Form
//           </Link>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden flex items-center space-x-2"
//         >
//           <span className="text-2xl">
//             <i className="fas fa-bars"></i> {/* Hamburger icon */}
//           </span>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 py-4 px-6 space-y-4">
//           <Link
//             to="/"
//             className="block text-white py-2 hover:text-gray-200 transition duration-300 text-lg font-semibold"
//             onClick={toggleMenu}
//           >
//             Home
//           </Link>
//           <Link
//             to="/pets"
//             className="block text-white py-2 hover:text-gray-200 transition duration-300 text-lg font-semibold"
//             onClick={toggleMenu}
//           >
//             Pets List
//           </Link>
//           <Link
//             to="/adopt"
//             className="block text-white py-2 hover:text-gray-200 transition duration-300 text-lg font-semibold"
//             onClick={toggleMenu}
//           >
//             Adoption Form
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;


// import  { useState } from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // To toggle menu visibility on mobile

//   const handleLogout = () => {
//     setIsLoggedIn(false); // Simulate logout
//   };

//   return (
//     <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <Link to="/" className="text-2xl font-semibold text-blue-600">
//           Pet Adoption
//         </Link>

//         {/* Hamburger Menu */}
//         <div className="lg:hidden flex items-center">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-xl focus:outline-none"
//           >
//             {isMenuOpen ? '✕' : '☰'}
//           </button>
//         </div>

//         {/* Navbar Links */}
//         <div className={`lg:flex space-x-6 ${isMenuOpen ? 'flex' : 'hidden'} lg:block`}>
//           <Link to="/" className="text-lg hover:text-blue-600">Home</Link>

//           {!isLoggedIn ? (
//             <>
//               <Link to="/register" className="text-lg hover:text-blue-600">Register</Link>
//               <Link to="/login" className="text-lg hover:text-blue-600">Login</Link>
//             </>
//           ) : (
//             <>
//               <Link to="/dashboard" className="text-lg hover:text-blue-600">Dashboard</Link>
//               <button
//                 onClick={handleLogout}
//                 className="text-lg hover:text-blue-600"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;





// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"; // Ensure that useAuth is set up correctly

// const NavBar = () => {
//   const { user, logout } = useAuth(); // Retrieve user and logout function from context

//   return (
//     <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
//       <h1 className="text-lg font-bold">Pet Adoption Platform</h1>
//       <div className="space-x-4 flex items-center">
//         <Link to="/" className="hover:underline" aria-label="Go to Home">
//           Home
//         </Link>

//         {/* If user is logged in, show Dashboard and Logout options */}
//         {user ? (
//           <>
//             <Link
//               to="/dashboard"
//               className="hover:underline"
//               aria-label="Go to Dashboard"
//             >
//               Dashboard
//             </Link>
//             <button
//               onClick={logout}
//               className="hover:underline text-red-500"
//               aria-label="Logout"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             {/* If user is not logged in, show Login and Register options */}
//             <Link to="/login" className="hover:underline" aria-label="Login">
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="hover:underline"
//               aria-label="Register"
//             >
//               Register
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;





// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState } from "react";

// const NavBar = () => {
//   const { user, logout } = useAuth();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg fixed top-0 left-0 w-full z-50">
//       <h1 className="text-xl font-bold tracking-wide">Pet Adoption Platform</h1>

//       {/* Hamburger Icon for mobile view */}
//       <button
//         className="lg:hidden text-2xl"
//         onClick={toggleMenu}
//         aria-label="Toggle menu"
//       >
//         &#9776;
//       </button>

//       {/* Navigation Links */}
//       <div
//         className={`lg:flex lg:space-x-6 ${isMenuOpen ? "block" : "hidden"} flex-col lg:flex-row`}
//       >
//         <Link
//           to="/"
//           className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
//           aria-label="Go to Home"
//         >
//           Home
//         </Link>

//         {user ? (
//           <>
//             <Link
//               to="/dashboard"
//               className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
//               aria-label="Go to Dashboard"
//             >
//               Dashboard
//             </Link>
//             <button
//               onClick={logout}
//               className="text-lg font-medium hover:text-red-400 transition-colors py-2 text-white"
//               aria-label="Logout"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link
//               to="/login"
//               className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
//               aria-label="Login"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
//               aria-label="Register"
//             >
//               Register
//             </Link>
//             <Link
//               to="/add-pet"
//               className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
//               aria-label="Register"
//             >
//               add pet
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;




// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState } from "react";

// const NavBar = () => {
//   const { user, logout } = useAuth();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleLogout = () => {
//     if (logout && typeof logout === "function") {
//       logout();
//     } else {
//       console.error("Logout function is not defined or not a function");
//     }
//   };

//   return (
//     <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg fixed top-0 left-0 w-full z-50">
//       <h1 className="text-xl font-bold tracking-wide">Pet Adoption Platform</h1>

//       {/* Hamburger Icon for mobile view */}
//       <button
//         className="lg:hidden text-2xl"
//         onClick={toggleMenu}
//         aria-label="Toggle menu"
//       >
//         &#9776;
//       </button>

//       {/* Navigation Links */}
//       <div
//         className={`lg:flex lg:space-x-6 ${
//           isMenuOpen ? "block" : "hidden"
//         } flex-col lg:flex-row`}
//       >
//         <Link
//           to="/"
//           className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
//           aria-label="Go to Home"
//         >
//           Home
//         </Link>

//         {user ? (
//           <>
//             <Link
//               to="/dashboard"
//               className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
//               aria-label="Go to Dashboard"
//             >
//               Dashboard
//             </Link>
//             <button
//               onClick={handleLogout}
//               className="text-lg font-medium hover:text-red-400 transition-colors py-2 text-white"
//               aria-label="Logout"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link
//               to="/login"
//               className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
//               aria-label="Login"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
//               aria-label="Register"
//             >
//               Register
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;





// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState } from "react";

// const NavBar = () => {
//   const { user, logout } = useAuth();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleLogout = () => {
//     logout(); // Clear user context
//     localStorage.removeItem("token"); // Clear token from localStorage
//     navigate("/login"); // Redirect to login
//   };

//   const navigateToDashboard = () => {
//     if (user?.role === "Adopter") {
//       navigate("/dashboard/adopter");
//     } else if (user?.role === "Shelter") {
//       navigate("/dashboard/shelter");
//     } else if (user?.role === "Admin") {
//       navigate("/dashboard/admin");
//     } else {
//       navigate("/unauthorized");
//     }
//   };

//   return (
//     <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg fixed top-0 left-0 w-full z-50">
//       <h1 className="text-xl font-bold tracking-wide">Pet Adoption Platform</h1>

//       {/* Hamburger Icon for mobile view */}
//       <button
//         className="lg:hidden text-2xl"
//         onClick={toggleMenu}
//         aria-label="Toggle menu"
//       >
//         &#9776;
//       </button>

//       {/* Navigation Links */}
//       <div
//         className={`lg:flex lg:space-x-6 ${
//           isMenuOpen ? "block" : "hidden"
//         } flex-col lg:flex-row`}
//       >
//         <Link
//           to="/"
//           className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
//           aria-label="Go to Home"
//         >
//           Home
//         </Link>

//         {user ? (
//           <>
//             <button
//               onClick={navigateToDashboard}
//               className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
//               aria-label="Go to Dashboard"
//             >
//               Dashboard
//             </button>
//             <button
//               onClick={handleLogout}
//               className="text-lg font-medium hover:text-red-400 transition-colors py-2 text-white"
//               aria-label="Logout"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link
//               to="/login"
//               className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
//               aria-label="Login"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
//               aria-label="Register"
//             >
//               Register
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;





// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState } from "react";

// const NavBar = () => {
//   const { user, logout } = useAuth();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleLogout = () => {
//     logout(); // Clear user context
//     localStorage.removeItem("token"); // Clear token from localStorage
//     navigate("/login"); // Redirect to login page
//   };

//   const navigateToDashboard = () => {
//     if (user?.role === "Adopter") {
//       navigate("/dashboard/adopter");
//     } else if (user?.role === "Shelter") {
//       navigate("/dashboard/shelter");
//     } else if (user?.role === "Admin") {
//       navigate("/dashboard/admin");
//     } else {
//       navigate("/unauthorized");
//     }
//   };

//   return (
//     <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg fixed top-0 left-0 w-full z-50">
//       {/* Platform Logo */}
//       <h1 className="text-xl font-bold tracking-wide">
//         <Link to="/">Pet Adoption Platform</Link>
//       </h1>

//       {/* Hamburger Icon for mobile view */}
//       <button
//         className="lg:hidden text-2xl"
//         onClick={toggleMenu}
//         aria-label="Toggle menu"
//       >
//         &#9776;
//       </button>

//       {/* Navigation Links */}
//       <div
//         className={`lg:flex lg:space-x-6 ${
//           isMenuOpen ? "block" : "hidden"
//         } flex-col lg:flex-row`}
//       >
//         <Link
//           to="/"
//           className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
//           aria-label="Go to Home"
//         >
//           Home
//         </Link>

//         {user ? (
//           <>
//             <button
//               onClick={navigateToDashboard}
//               className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
//               aria-label="Go to Dashboard"
//             >
//               Dashboard
//             </button>
//             <button
//               onClick={handleLogout}
//               className="text-lg font-medium hover:text-red-400 transition-colors py-2 text-white"
//               aria-label="Logout"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link
//               to="/login"
//               className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
//               aria-label="Login"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="text-lg font-medium hover:text-blue-300 transition-colors py-2 text-white"
//               aria-label="Register"
//             >
//               Register
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;



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
          Home
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



