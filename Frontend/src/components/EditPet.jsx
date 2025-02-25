import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditPet = () => {
  const { id } = useParams(); // Get pet ID from URL
  const navigate = useNavigate();
  const [pet, setPet] = useState({
    name: '',
    age: '',
    breed: '',
    size: '',
    color: '',
    medicalHistory: '',
    status: 'Available',
  });
  // const [selectedPhotos, setSelectedPhotos] = useState([]);
  // const [selectedVideos, setSelectedVideos] = useState([]);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await axios.get(`https://pet-adoption-project.onrender.com/api/${id}`);
        setPet(response.data);
      } catch (err) {
        console.error('Error fetching pet:', err);
      }
    };
    fetchPet();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPet((prev) => ({ ...prev, [name]: value }));
  };

  // const handleFileChange = (e, type) => {
  //   const files = Array.from(e.target.files);
  //   if (type === 'photos') {
  //     setSelectedPhotos([...selectedPhotos, ...files]);
  //   } else if (type === 'videos') {
  //     setSelectedVideos([...selectedVideos, ...files]);
  //   }
  // };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
        
      await axios.put(`https://pet-adoption-project.onrender.com/api/${id}`, pet, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      alert('Pet updated successfully');
    //   navigate('/dashboard');
      // Redirect based on the user's role

      // Retrieve the user's role
  const userRole = localStorage.getItem('role')?.toLowerCase(); // Assuming role is stored in localStorage
      console.log('User role:', userRole);
     if (userRole === 'Admin') {
    navigate('/dashboard/admin');
    console.log('Navigating to admin dashboard...');
  } else if (userRole === 'Shelter') {
    console.log('Navigating to shelter dashboard...');
    navigate('/dashboard/shelter');
  } else {
    alert('Unknown role. Redirecting to home.');
    navigate('/');
  }

    } catch (err) {
      console.error('Error updating pet:', err);
      alert('Could not update pet. Please try again.');
    }
  };

  return (
    <form onSubmit={handleUpdate} className="p-4 bg-white shadow-md rounded-md mt-14">
      <h2 className="text-lg font-bold mb-4">Edit Pet</h2>
      
      
      {/* <input
            name="photos"
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => handleFileChange(e, 'photos')}
            className="w-full border p-2"
          />  */}
     
      <input
        name="name"
        value={pet.name}
        onChange={handleInputChange}
        placeholder="Name"
        className="block w-full mb-4 p-2 border rounded"
      />
      <input
        name="age"
        type="number"
        value={pet.age}
        onChange={handleInputChange}
        placeholder="Age"
        className="block w-full mb-4 p-2 border rounded"
      />
      <input
        name="breed"
        value={pet.breed}
        onChange={handleInputChange}
        placeholder="Breed"
        className="block w-full mb-4 p-2 border rounded"
      />
       <input
        name="Size"
        value={pet.size}
        onChange={handleInputChange}
        placeholder="Breed"
        className="block w-full mb-4 p-2 border rounded"
      />
        <input
        name="color"
        value={pet.color}
        onChange={handleInputChange}
        placeholder="Breed"
        className="block w-full mb-4 p-2 border rounded"
      />
       <input
        name="medicalHistory"
        value={pet.medicalHistory}
        onChange={handleInputChange}
        placeholder="Breed"
        className="block w-full mb-4 p-2 border rounded"
      />

     <input
        name="Status"
        value={pet.status}
        onChange={handleInputChange}
        placeholder="Breed"
        className="block w-full mb-4 p-2 border rounded"
      />

         {/* <input
            type="file"
            multiple
            accept="video/*"
            onChange={(e) => handleFileChange(e, 'videos')}
            className="w-full border p-2"
          /> */}
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Update Pet
      </button>
    </form>
  );
};

export default EditPet;
