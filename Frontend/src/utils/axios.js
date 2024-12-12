// src/utils/axios.js

import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3006', // Backend API URL
  withCredentials: true,           // Send cookies (like refresh token) with each request
});

// Add a response interceptor to handle token expiration and auto-refresh
axiosInstance.interceptors.response.use(
  (response) => response, // Return the response if no error
  async (error) => {
    const originalRequest = error.config;
    // Check if the error status is 401 (Unauthorized) and the token is expired
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Make an API call to refresh the token
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post(
          '/api/refresh-token', // Your API endpoint for refreshing token
          { token: refreshToken },
          { withCredentials: true }
        );

        // If refresh token is valid, update the access token and retry the original request
        localStorage.setItem('token', response.data.accessToken);
        axiosInstance.defaults.headers['Authorization'] = `Bearer ${response.data.accessToken}`;

        // Retry the original request with the new token
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // If refreshing the token fails, log the user out or redirect
        console.error('Token refresh failed:', refreshError);
        // Optionally log out user or redirect to login page
        window.location.href = '/login'; // Redirect to login page
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
