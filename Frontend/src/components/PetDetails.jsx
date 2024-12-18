
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const PetDetails = () => {
  const { petId } = useParams();
  const [pet, setPet] = useState(null);
  const [showAdoptionForm, setShowAdoptionForm] = useState(false);
  const [reasonForAdoption, setReasonForAdoption] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await axios.get(`https://pet-adoption-project.onrender.com/api/${petId}`);
        setPet(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch pet details");
        setLoading(false);
        console.error(err);
      }
    };

    fetchPetDetails();
  }, [petId]);

  const handleAdoptClick = () => {
    setShowAdoptionForm(true);
  };

  const handleSubmitApplication = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post('https://pet-adoption-project.onrender.com/api/adoption/apply', {
        petId: pet._id,
        shelterId: pet.shelterId, // Assuming the shelterId is available from the pet data
        reasonForAdoption: reasonForAdoption,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert(response.data.message);
      navigate('/dashboard/adopter');
      console.log(response.data);
      setShowAdoptionForm(false); // Hide form after submission
    } catch (error) {
      console.error('Error submitting adoption application:', error);
      setError('Failed to submit adoption application');
    }
  };

  if (loading) {
    return <p>Loading pet details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto p-6 mt-12 text-bold">
      <div className="pet-info text-center">
        <h2 className="text-2xl font-bold mb-4">Pet Details</h2>
        <img
          src={`https://pet-adoption-project.onrender.com/${pet.photos}`}
          alt={pet.name} 
          className="w-full h-64 object-cover mb-4 items-center"
        />
        <h1 className="text-xl font-bold">{pet.name}</h1>
        <p>Age: {pet.age}</p>
        <p>Breed: {pet.breed}</p>
        <p>Size: {pet.size}</p>
        <p>Color: {pet.color}</p>
        <p>Medical History: {pet.medicalHistory}</p>
        <p>Status: {pet.status}</p>

        <button
          onClick={handleAdoptClick}
          className="btn border-t-cyan-900 text-black bg-blue-400"
        >
          Adopt
        </button>

        {/* Show adoption form when 'Adopt' is clicked */}
        {showAdoptionForm && (
          <div className="mt-6">
            <h3 className="text-xl font-bold">Adopt {pet.name}</h3>
            <textarea
              placeholder="Reason for adoption"
              value={reasonForAdoption}
              onChange={(e) => setReasonForAdoption(e.target.value)}
              className="w-full p-4 border rounded-lg mt-4"
            />
            <button
              onClick={handleSubmitApplication}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Submit Application
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default PetDetails;
