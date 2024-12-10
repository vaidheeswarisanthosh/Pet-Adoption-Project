// import  { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const userData = JSON.parse(atob(token.split(".")[1])); // Decode JWT
//       setUser(userData);
//     }
//   }, []);

//   const login = (userData) => {
//     setUser(userData);
//     localStorage.setItem("token", userData.token);
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("token");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);




 import  { createContext, useContext, useState } from 'react';

// // Create the context
const AuthContext = createContext();

 // Custom hook to use the Auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to provide the context to children
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initially user is null

  const login = (userData) => {
    setUser(userData); // Set user when logged in
  };

  const logout = () => {
    setUser(null); // Clear user when logged out
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};






