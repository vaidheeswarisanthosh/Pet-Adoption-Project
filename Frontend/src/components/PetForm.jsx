// src/components/PetForm.jsx
import { useState } from 'react';
import axios from 'axios';

const PetForm = () => {
  const [petData, setPetData] = useState({
    name: '',
    age: '',
    breed: '',
    size: '',
    color: '',
    medicalHistory: '',
    photos: [],
    videos: [],
  });

  // Handle changes in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetData({
      ...petData,
      [name]: value,
    });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setPetData({
      ...petData,
      [name]: files,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to handle file uploads
    const formData = new FormData();
    formData.append('name', petData.name);
    formData.append('age', petData.age);
    formData.append('breed', petData.breed);
    formData.append('size', petData.size);
    formData.append('color', petData.color);
    formData.append('medicalHistory', petData.medicalHistory);

    // Append photos and videos if they exist
    for (let i = 0; i < petData.photos.length; i++) {
      formData.append('photos', petData.photos[i]);
    }
    for (let i = 0; i < petData.videos.length; i++) {
      formData.append('videos', petData.videos[i]);
    }

    try {
      // Send a POST request to the backend
      const response = await axios.post('http://localhost:3006/api/pets', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensures the data is sent as multipart/form-data
        },
      });

      // Handle success
      console.log('Pet added successfully:', response.data);
      alert('Pet added successfully!');
      // Reset the form
      setPetData({
        name: '',
        age: '',
        breed: '',
        size: '',
        color: '',
        medicalHistory: '',
        photos: [],
        videos: [],
      });
    } catch (error) {
      // Handle errors
      console.error('Error adding pet:', error.response ? error.response.data : error.message);
      alert('Error adding pet.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Add Pet for Adoption</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={petData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={petData.age}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="breed" className="block text-sm font-medium text-gray-700">Breed</label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={petData.breed}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
          <input
            type="text"
            id="size"
            name="size"
            value={petData.size}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="color" className="block text-sm font-medium text-gray-700">Color</label>
          <input
            type="text"
            id="color"
            name="color"
            value={petData.color}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700">Medical History</label>
          <textarea
            id="medicalHistory"
            name="medicalHistory"
            value={petData.medicalHistory}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="photos" className="block text-sm font-medium text-gray-700">Photos</label>
          <input
            type="file"
            id="photos"
            name="photos"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="videos" className="block text-sm font-medium text-gray-700">Videos</label>
          <input
            type="file"
            id="videos"
            name="videos"
            accept="video/*"
            multiple
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PetForm;