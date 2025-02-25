// src/components/Login.jsx
import { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Assuming you have AuthContext for storing user data
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://pet-adoption-project.onrender.com/api/users/login', {
        email,
        password
      });

      if (response.status === 200) {
        const { token, role } = response.data; // Assuming backend returns token and role
        
        // Store token in AuthContext (if you are using it)
        login({ email, role, token });

        // Store token in localStorage for persistence
        localStorage.setItem('authToken', token);
        localStorage.setItem('role', role); //Store user role here!
        console.log('Login successful, User role:', role);

        // Redirect based on user role
        if (role === 'Admin') {
          navigate('/dashboard/admin');
        } else if (role === 'Adopter') {
          navigate('/dashboard/adopter');
        } else if (role === 'Shelter') {
          navigate('/dashboard/shelter');
        } else {
          alert('Unknown role');
        }
      } else {
        alert('Login failed: Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed', error);
      alert('Something went wrong, please try again!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mx-10">
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
            Dont have an account?{' '}
            <span
              onClick={() => navigate('/')}
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
