// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // Use useNavigate instead of useHistory

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3006/api/users/login', { email, password });
//       localStorage.setItem('token', response.data.token); // Save the token
//       navigate('/dashboard'); // Redirect to dashboard after login
//     } catch (err) {
//       setError(err.response?.data?.error || 'Login failed');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8 p-6 border rounded shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       {error && <div className="text-red-500 mb-4">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;




// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3006/api/users/login', { email, password });
//       console.log(response.data.message); // Login successful
//       navigate('/dashboard'); // Redirect to dashboard
//     } catch (err) {
//       if (err.response && err.response.status === 404) {
//         // Redirect to the registration page if the user is not found
//         navigate('/register');
//       } else {
//         setError(err.response?.data?.message || 'Something went wrong');
//       }
//     }
//   };

//   return (
//     <div className="login-form container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Login</h1>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-gray-700">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;




// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:3006/api/users/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         login(data);
//         navigate("/dashboard");
//       } else {
//         alert(data.message);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-white shadow-md rounded">
//       <h1 className="text-xl font-bold mb-4">Login</h1>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="block w-full border p-2 rounded mb-4"
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="block w-full border p-2 rounded mb-4"
//         />
//       </div>
//       <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
//         Login
//       </button>
//     </form>
//   );
// };

// export default Login;





// src/pages/Login.jsx

// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Simulate an API call to login
//     const userData = { email, role: 'adopter' }; // Assuming 'adopter' role is returned after successful login
//     login(userData);

//     // Redirect user based on their role
//     if (userData.role === 'admin') {
//       navigate('/admin-dashboard');
//     } else if (userData.role === 'adopter') {
//       navigate('/adopter-dashboard');
//     } else if (userData.role === 'shelter') {
//       navigate('/shelter-dashboard');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;




// import { useState } from 'react'; // Make sure to import useState
// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Simulate an API call to login
//     const userData = { email, role: 'adopter' }; // Assuming 'adopter' role is returned after successful login
//     login(userData);

//     // Redirect user based on their role
//     if (userData.role === 'admin') {
//       navigate('/admin-dashboard');
//     } else if (userData.role === 'adopter') {
//       navigate('/adopter-dashboard');
//     } else if (userData.role === 'shelter') {
//       navigate('/shelter-dashboard');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//         <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Login
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <p className="text-sm text-gray-500">
//             Don't have an account?{' '}
//             <span
//               onClick={() => navigate('/register')}
//               className="text-blue-600 cursor-pointer hover:underline"
//             >
//               Register here
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




import { useState } from 'react'; 
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulate an API call to login (replace this with your actual login API)
    try {
      // This is a mock API response for illustration
      const response = {
        email,
        role: 'admin', // Replace with the role from your backend response (e.g., 'admin', 'adopter', 'shelter')
      };
      
      if (response.role) {
        login(response); // Store user data in context
        
        // Redirect user based on their role
        if (response.role === 'admin') {
          navigate('/admin-dashboard');
        } else if (response.role === 'adopter') {
          navigate('/adopter-dashboard');
        } else if (response.role === 'shelter') {
          navigate('/shelter-dashboard');
        }
      } else {
        // Handle invalid login (wrong credentials, etc.)
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed', error);
      alert('Something went wrong, please try again!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <span
              onClick={() => navigate('/register')}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Register here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;






// import { useState } from 'react';
// import { useAuth } from '../context/AuthContext'; // Assuming you have AuthContext for storing user data
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:3006/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         const { token, role } = data; // Backend should return the token and role

//         // Store token and user data in context
//         login({ email, role, token });

//         // Store JWT token in localStorage for authentication persistence
//         localStorage.setItem('authToken', token);

//         // Redirect user based on their role
//         if (role === 'admin') {
//           navigate('/admin-dashboard');
//         } else if (role === 'adopter') {
//           navigate('/adopter-dashboard');
//         } else if (role === 'shelter') {
//           navigate('/shelter-dashboard');
//         } else {
//           alert('Unknown role');
//         }
//       } else {
//         const error = await response.json();
//         alert(error.message || 'Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Login failed', error);
//       alert('Something went wrong, please try again!');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//         <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Login
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <p className="text-sm text-gray-500">
//             Don't have an account?{' '}
//             <span
//               onClick={() => navigate('/register')}
//               className="text-blue-600 cursor-pointer hover:underline"
//             >
//               Register here
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
