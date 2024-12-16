import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PetList = () => {
  const { user } = useAuth(); // Get user role from context
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sizeFilter, setSizeFilter] = useState(''); // For filtering by size
  const [breedFilter] = useState(''); // For filtering by breed
  const [sortBy, setSortBy] = useState(''); // For sorting by name, age, etc.
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('https://pet-adoption-project.onrender.com/api/pets', {
            params: {
            searchTerm,
            size: sizeFilter,
            breed: breedFilter,
            sortBy,
          },
        });
        setPets(response.data);
      } catch (err) {
        console.error('Error fetching pets:', err);
      }
    };
    fetchPets();
  }, [searchTerm, sizeFilter, breedFilter, sortBy]);

  const handleEdit = (petId) => {
    navigate(`/pets/edit/${petId}`);
  };

  const handleDelete = async (petId) => {
    if (window.confirm('Are you sure you want to delete this pet?')) {
      try {
        const response = await axios.delete(`https://pet-adoption-project.onrender.com/api/${petId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });
        if (response.status === 200) {
          alert('Pet deleted successfully');
          setPets(pets.filter((pet) => pet._id !== petId));
        }
      } catch (err) {
        console.error('Error deleting pet:', err);
        alert('Could not delete pet. Please try again.');
      }
    }
  };

  return (
    <div className="pet-list">
      <h2 className="text-xl font-bold mb-4 mt-2">Available Pets</h2>
      
      {/* Search and Filter Section */}
      <div className="mb-6 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md"
        />

        <select
          value={sizeFilter}
          onChange={(e) => setSizeFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Filter by Size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

     

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="status">Status</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <div key={pet._id} className="p-4 bg-white shadow-md rounded-md">
            <div className="pet-image">
              {pet.photos?.length > 0 ? (
                <img
                  src={`https://pet-adoption-project.onrender.com/${pet.photos[0]}`}
                  alt={pet.name}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <p className="text-center text-gray-500 p-4">No photo available</p>
              )}
            </div>
            <h3 className="text-lg font-semibold">Name: {pet.name}</h3>
            <h3>Age: {pet.age}</h3>
            <p>Breed: {pet.breed}</p>
            <p>Size: {pet.size}</p>
            <p>Status: {pet.status}</p>

            {/* Show "More Details" button for Adopters only */}
            {user.role === 'Adopter' && (
              <Link
                to={`/pets/${pet._id}`}
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                More Details
              </Link>
            )}

            {/* Render Edit and Delete Buttons for Admin and Shelter */}
            {(user.role === 'Admin' || user.role === 'Shelter') && (
              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => handleEdit(pet._id)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(pet._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetList;
