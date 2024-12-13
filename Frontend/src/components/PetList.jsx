
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const PetsList = () => {
//   const [pets, setPets] = useState([]);
//   const [filteredPets, setFilteredPets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Filter states
//   const [filter, setFilter] = useState({
//     name: '',
//     breed: '',
//     age: '',
//     size: '',
//     location: '',
//   });

//   // Sorting state
//   const [sortBy, setSortBy] = useState('name'); // Default sorting by name

//   // Predefined filter options (can be fetched from API or hardcoded)
//   const breeds = ['Labrador', 'Golden Retriever', 'Bulldog', 'Beagle'];
//   const ages = ['0-1', '1-3', '3-5', '5+'];
//   const sizes = ['Small', 'Medium', 'Large'];
//   const locations = ['New York', 'Los Angeles', 'Chicago', 'San Francisco'];

//   // Fetch pets from the backend
//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         const response = await axios.get('http://localhost:3006/api/'); // Your API endpoint
//         setPets(response.data); // Store pets in state
//         setFilteredPets(response.data); // Initially, show all pets
//         setLoading(false); // Set loading state to false
//       } catch (err) {
//         setError('Failed to fetch pets');
//         setLoading(false);
//       }
//     };

//     fetchPets();
//   }, []);

//   // Filter and sort pets based on filter criteria
//   useEffect(() => {
//     const filterPets = () => {
//       const filtered = pets.filter((pet) => {
//         const nameMatch = filter.name ? pet.name.toLowerCase().includes(filter.name.toLowerCase()) : true;
//         const breedMatch = filter.breed ? pet.breed.toLowerCase().includes(filter.breed.toLowerCase()) : true;
//         const ageMatch = filter.age ? pet.age === parseInt(filter.age) : true;
//         const sizeMatch = filter.size ? pet.size.toLowerCase().includes(filter.size.toLowerCase()) : true;
//         const locationMatch = filter.location ? pet.location.toLowerCase().includes(filter.location.toLowerCase()) : true;

//         return nameMatch && breedMatch && ageMatch && sizeMatch && locationMatch;
//       });

//       // Sort pets based on selected sort parameter
//       const sortedPets = filtered.sort((a, b) => {
//         if (sortBy === 'name') {
//           return a.name.localeCompare(b.name);
//         } else if (sortBy === 'age') {
//           return a.age - b.age;
//         } else if (sortBy === 'location') {
//           return a.location.localeCompare(b.location);
//         }
//         return 0;
//       });

//       setFilteredPets(sortedPets);
//     };

//     filterPets();
//   }, [filter, sortBy, pets]);

//   // Handle filter change
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilter((prevFilter) => ({
//       ...prevFilter,
//       [name]: value,
//     }));
//   };

//   // Handle sort change
//   const handleSortChange = (e) => {
//     setSortBy(e.target.value);
//   };

//   // Clear filters
//   const clearFilters = () => {
//     setFilter({
//       name: '',
//       breed: '',
//       age: '',
//       size: '',
//       location: '',
//     });
//     setSortBy('name');
//   };

//   if (loading) {
//     return <p className="text-center text-xl">Loading pets...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-xl text-red-500">{error}</p>;
//   }

//   return (
//     <div className="pets-list container mx-auto p-6 my-16">
//       <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Available Pets</h1>

//       {/* Search and Filter Section */}
//       <div className="filters mb-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 bg-white rounded-lg shadow-md">
//           {/* Search by Name */}
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Search by Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={filter.name}
//               onChange={handleFilterChange}
//               className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Search pets by name"
//             />
//           </div>

//           {/* Breed Dropdown */}
//           <div>
//             <label htmlFor="breed" className="block text-sm font-medium text-gray-700">Breed</label>
//             <select
//               id="breed"
//               name="breed"
//               value={filter.breed}
//               onChange={handleFilterChange}
//               className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">All Breeds</option>
//               {breeds.map((breed) => (
//                 <option key={breed} value={breed}>{breed}</option>
//               ))}
//             </select>
//           </div>

//           {/* Age Dropdown */}
//           <div>
//             <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
//             <select
//               id="age"
//               name="age"
//               value={filter.age}
//               onChange={handleFilterChange}
//               className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">All Ages</option>
//               {ages.map((age) => (
//                 <option key={age} value={age}>{age}</option>
//               ))}
//             </select>
//           </div>

//           {/* Size Dropdown */}
//           <div>
//             <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
//             <select
//               id="size"
//               name="size"
//               value={filter.size}
//               onChange={handleFilterChange}
//               className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">All Sizes</option>
//               {sizes.map((size) => (
//                 <option key={size} value={size}>{size}</option>
//               ))}
//             </select>
//           </div>

//           {/* Location Dropdown */}
//           <div>
//             <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
//             <select
//               id="location"
//               name="location"
//               value={filter.location}
//               onChange={handleFilterChange}
//               className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">All Locations</option>
//               {locations.map((location) => (
//                 <option key={location} value={location}>{location}</option>
//               ))}
//             </select>
//           </div>

//           {/* Sorting Dropdown */}
//           <div>
//             <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700">Sort By</label>
//             <select
//               id="sortBy"
//               value={sortBy}
//               onChange={handleSortChange}
//               className="w-full p-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="name">Name</option>
//               <option value="age">Age</option>
//               <option value="location">Location</option>
//             </select>
//           </div>

//           {/* Clear Filters Button */}
//           <div className="flex items-center justify-center mt-4">
//             <button
//               onClick={clearFilters}
//               className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
//             >
//               Clear Filters
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Display Pets */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {filteredPets.map((pet) => (
//           <div
//             key={pet._id}
//             className="pet-card bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
//           >
//             {/* Pet Image */}
//             <div className="pet-image">
//           {pet.photos ? (
//                 <img
//                   src={`http://localhost:3006/${pet.photos}`}
//                   alt={pet.name}
//                   className="w-full h-48 object-cover"
//                 />
//               ) : (
//                 <p className="text-center text-gray-500 p-4">No photo available</p>
//               )}
//             </div>
//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-blue-600">{pet.name}</h2>
//               <p>Age: {pet.age}</p>
//               <p>Breed: {pet.breed}</p>
//               <p>Size: {pet.size}</p>
//               <p>Location: {pet.location}</p>
//             </div>

//             {/* <div className="pet-media p-4">
//                 {pet.videos ? (
//                 <video controls className="pet-video w-full rounded-lg">
//                   <source
//                     src={`http://localhost:3006/${pet.videos}`}
//                     type="video/mp4"
//                   />
//                   Your browser does not support the video tag.
//                 </video>
//               ) : (
//                 <p className="text-center text-gray-500 p-4">No video available</p>
//               )}
//             </div> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PetsList;












// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const PetList = () => {
//   const [pets, setPets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const {user}=useAuth();
//   const navigate = useNavigate();

//   // Fetch pets from the backend
//   const fetchPets = async () => {
//     try {
//       const response = await axios.get("http://localhost:3006/api/"); // Ensure the endpoint is correct
//       setPets(response.data);
//       setLoading(false);
//     } catch (err) {
//       setError("Failed to fetch pets");
//       setLoading(false);
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchPets();
//   }, []);

//    // Handle Edit Button click
//    const handleEdit = (petId) => {
//     navigate(`/pets/edit/${petId}`); // Redirect to edit page
//   };

//    // Handle Delete Button click
//    const handleDelete = async (petId) => {
//     try {
//       const response = await axios.delete(`http://localhost:3006/api/pets/${petId}`);
//       if (response.status === 200) {
//         setPets(pets.filter((pet) => pet._id !== petId)); // Remove deleted pet from list
//         alert('Pet deleted successfully');
//       }
//     } catch (err) {
//       console.error('Error deleting pet', err);
//       alert('Error deleting pet');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {Array.from({ length: 6 }).map((_, index) => (
//           <div
//             key={index}
//             className="animate-pulse bg-gray-200 shadow-lg rounded-lg h-48"
//           ></div>
//         ))}
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center">
//         <p className="text-xl text-red-500">{error}</p>
//         <button
//           onClick={fetchPets}
//           className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="pets-list container mx-auto p-6 space-x-7">
//       <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Available Pets</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {pets.map((pet) => (
//           <div
//             key={pet._id}
//             className="pet-card bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
//           >
//             <div className="pet-image">
//               {pet.photos?.length > 0 ? (
//                 <img
//                   src={`http://localhost:3006/${pet.photos[0]}`}
//                   alt={pet.name}
//                   className="w-full h-48 object-cover"
//                 />
//               ) : (
//                 <p className="text-center text-gray-500 p-4">No photo available</p>
//               )}
//             </div>

//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-blue-600">{pet.name}</h2>
//               <p className="truncate">Breed: {pet.breed}</p>
//               <p>Age: {pet.age}</p>
//               <p>size: {pet.size}</p>
//               <p>Status:{pet.status}</p>

//               {/* <Link
//                 to={`api/${pet._id}`}
//                 className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//               >
//                 More Details
//               </Link> */}

//        {/* <Link 
//        to={`/pets/${pet._id}`} 
//         className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//          >
//   More Details
// </Link> */}


          // {/* Show "More Details" button for Adopters only */}
          // {user.role === 'Adopter' && (
          //     <Link
          //       to={`/pets/${pet._id}`}
          //       className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          //     >
          //       More Details
          //     </Link>
          //   )}

//          {/* Show Edit and Delete buttons for Admin and Shelter roles only */}
//          {(user.role === 'Admin' || user.role === 'Shelter') && (
//               <div className="mt-4 flex gap-4">
//                 <button
//                   onClick={() => handleEdit(pet._id)}
//                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(pet._id)}
//                   className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//                 >
//                   Delete
//                 </button>
//               </div>
//          )}

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PetList;









// import  { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const PetList = () => {
//   const { user } = useAuth(); // Get user role from context
//   const [pets, setPets] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         const response = await axios.get('http://localhost:3006/api/');
//         setPets(response.data);
//       } catch (err) {
//         console.error('Error fetching pets:', err);
//       }
//     };
//     fetchPets();
//   }, []);

//   const handleEdit = (petId) => {
//     navigate(`/pets/edit/${petId}`);
//   };

//   const handleDelete = async (petId) => {
//     if (window.confirm('Are you sure you want to delete this pet?')) {
//       try {
//         const response = await axios.delete(`http://localhost:3006/api/${petId}`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('authToken')}`,
//           },
//         });
//         if (response.status === 200) {
//           alert('Pet deleted successfully');
//           setPets(pets.filter((pet) => pet._id !== petId));
//         }
//       } catch (err) {
//         console.error('Error deleting pet:', err);
//         alert('Could not delete pet. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="pet-list">
//       <h2 className="text-xl font-bold mb-4 mt-4">Pet Lists</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {pets.map((pet) => (
//           <div key={pet._id} className="p-4 bg-white shadow-md rounded-md">
//             <div className="pet-image">
//               {pet.photos?.length > 0 ? (
//                 <img
//                   src={`http://localhost:3006/${pet.photos[0]}`}
//                   alt={pet.name}
//                   className="w-full h-48 object-cover"
//                 />
//               ) : (
//                 <p className="text-center text-gray-500 p-4">No photo available</p>
//               )}
//             </div>
//             <h3 className="text-lg font-semibold">Name:{pet.name}</h3>
//             <h3>Age: {pet.age}</h3>
//             <p>Breed:{pet.breed}</p>
//             <p>Size:{pet.size}</p>
//             <p>Status: {pet.status}</p>

//                 {/* Show "More Details" button for Adopters only */}
//           {user.role === 'Adopter' && (
//               <Link
//                 to={`/pets/${pet._id}`}
//                 className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//               >
//                 More Details
//               </Link>
//             )}

//             {/* Render Edit and Delete Buttons for Admin and Shelter */}
//             {(user.role === 'Admin' || user.role === 'Shelter') && (
//               <div className="mt-4 flex gap-4">
//                 <button
//                   onClick={() => handleEdit(pet._id)}
//                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(pet._id)}
//                   className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//                 >
//                   Delete
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PetList;




import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PetList = () => {
  const { user } = useAuth(); // Get user role from context
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sizeFilter, setSizeFilter] = useState(''); // For filtering by size
  const [breedFilter, setBreedFilter] = useState(''); // For filtering by breed
  const [sortBy, setSortBy] = useState(''); // For sorting by name, age, etc.
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:3006/api/pets', {
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
        const response = await axios.delete(`http://localhost:3006/api/${petId}`, {
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

        {/* <select
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Filter by Breed</option>
          <option value="Selkirk Rex">Selkirk Rex</option>
          <option value="Retriever">Retriever</option>
          <option value="Breed3">Breed3</option>
        </select> */}

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
                  src={`http://localhost:3006/${pet.photos[0]}`}
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
