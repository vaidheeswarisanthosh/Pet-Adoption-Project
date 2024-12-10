// import { useState, useEffect } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import axios from 'axios';

// const PetDetails = () => {
//   const { petId } = useParams(); // Get petId from URL
//   const [pet, setPet] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const history = useHistory(); // For programmatic navigation

//   useEffect(() => {
//     const fetchPetDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3006/api/${petId}`);
//         setPet(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch pet details');
//         setLoading(false);
//       }
//     };

//     fetchPetDetails();
//   }, [petId]);

//   if (loading) {
//     return <p>Loading pet details...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   const handleAdoptClick = () => {
//     // Redirect to the adoption form
//     history.push(`/adopt/${pet._id}`);
//   };

//   return (
//     <div className="pet-detail container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">{pet.name}</h1>

//       {/* Pet Details */}
//       <div className="pet-info">
//         <img
//           src={`http://localhost:3006/${pet.photos}`}
//           alt={pet.name}
//           className="w-full h-64 object-cover mb-4"
//         />
//         <p>Breed: {pet.breed}</p>
//         <p>Age: {pet.age}</p>
//         <p>Size: {pet.size}</p>
//         <p>Location: {pet.location}</p>
//         <p>Description: {pet.description}</p>
//       </div>

//       {/* Adopt Button */}
//       <button
//         onClick={handleAdoptClick}
//         className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//       >
//         Adopt Me!
//       </button>
//     </div>
//   );
// };

// export default PetDetails;



import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Changed useHistory to useNavigate
import axios from 'axios';

const PetDetails = () => {
  const { petId } = useParams(); // Get petId from URL
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3006/api/${petId}`);
        setPet(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch pet details');
        setLoading(false);
      }
    };

    fetchPetDetails();
  }, [petId]);

  if (loading) {
    return <p>Loading pet details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleAdoptClick = () => {
    // Redirect to the adoption form using navigate
    navigate(`/adopt/${pet._id}`);
  };

  return (
    <div className="pet-detail container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">{pet.name}</h1>

      {/* Pet Details */}
      <div className="pet-info">
        <img
          src={`http://localhost:3006/${pet.photos}`}
          alt={pet.name}
          className="w-full h-64 object-cover mb-4"
        />
        <p>Breed: {pet.breed}</p>
        <p>Age: {pet.age}</p>
        <p>Size: {pet.size}</p>
        <p>Location: {pet.location}</p>
        <p>Description: {pet.description}</p>
      </div>

      {/* Adopt Button */}
      <button
        onClick={handleAdoptClick}
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Adopt Me!
      </button>
    </div>
  );
};

export default PetDetails;

