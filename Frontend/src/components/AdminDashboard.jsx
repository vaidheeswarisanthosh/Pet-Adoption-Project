



import { useState } from 'react';
import axios from 'axios';
import PetList from './PetList';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isTableVisible, setIsTableVisible] = useState(false); // state to control table visibility

  // Fetch users when the "Fetch Users" button is clicked
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3006/api/users/admin', {
        headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
      });
      setUsers(response.data);
      setIsTableVisible(true); // Show the table after fetching users
    } catch (err) {
      console.error('Error fetching users:', err);
      setError('Failed to fetch users');
    }
  };

  // Update user role
  const handleUpdateRole = async (userId, role) => {
    try {
      await axios.put(
        `http://localhost:3006/api/users/admin/${userId}`,
        { role },
        { headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` } }
      );
      alert('User role updated successfully');
      setUsers((prev) =>
        prev.map((user) => (user._id === userId ? { ...user, role } : user))
      );
    } catch (err) {
      console.error('Error updating user role:', err);
      alert('Failed to update user role');
    }
  };

  // Delete user
  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`http://localhost:3006/api/users/admin/${userId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
        });
        alert('User deleted successfully');
        setUsers((prev) => prev.filter((user) => user._id !== userId));
      } catch (err) {
        console.error('Error deleting user:', err);
        alert('Failed to delete user');
      }
    }
  };

  return (
    <div className="container mx-auto p-6 mt-12">
      <h1 className="text-2xl font-bold mb-6 text-center">Welcome to Admin Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}

      {/* Button to fetch users */}
      <div className="flex justify-end mb-6">
        <button
          onClick={fetchUsers}
          className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 transition duration-200"
        >
          Fetch Users
        </button>
      </div>

      {/* Render Users Table if isTableVisible is true */}
      {isTableVisible && (
        <div>
          <p className="text-xl font-bold mb-4">Manage users:</p>
          <table className="table-auto w-full bg-white rounded shadow-lg mb-6">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.role}</td>
                  <td className="border px-4 py-2">
                    <select
                      value={user.role}
                      onChange={(e) => handleUpdateRole(user._id, e.target.value)}
                      className="mr-4 border p-2 rounded"
                    >
                      <option value="Adopter">Adopter</option>
                      <option value="Shelter">Shelter</option>
                      <option value="Admin">Admin</option>
                    </select>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      )}
         <PetList/>
    </div>
  );
};

export default AdminDashboard;



