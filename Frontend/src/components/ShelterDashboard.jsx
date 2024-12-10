import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ShelterDashboard() {
  const [shelter, setShelter] = useState(null);
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShelterData = async () => {
      try {
        const token = localStorage.getItem('token');
        const profileResponse = await axios.get('/api/dashboard/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setShelter(profileResponse.data);

        const applicationResponse = await axios.get('/api/dashboard/applications', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setApplications(applicationResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShelterData();
  }, []);

  const handleAddPet = () => navigate('/dashboard/add-pet');

  const handleUpdateStatus = async (applicationId, status) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        '/api/dashboard/application/status',
        { applicationId, status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Status updated successfully');
      setApplications((prev) =>
        prev.map((app) =>
          app._id === applicationId ? { ...app, status } : app
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Shelter Dashboard</h1>
        {shelter && (
          <>
            <h2 className="text-xl font-semibold mb-2">Profile</h2>
            <p><strong>Name:</strong> {shelter.name}</p>
            <p><strong>Email:</strong> {shelter.email}</p>
            <p><strong>Location:</strong> {shelter.location}</p>
          </>
        )}
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddPet}
        >
          Add New Pet
        </button>

        <h2 className="text-xl font-semibold mt-6">Applications</h2>
        {applications.length > 0 ? (
          applications.map((app) => (
            <div key={app._id} className="border p-4 rounded mt-4">
              <p><strong>Pet:</strong> {app.petId.name}</p>
              <p><strong>Applicant:</strong> {app.userId.name}</p>
              <p><strong>Status:</strong> {app.status}</p>
              <div>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => handleUpdateStatus(app._id, 'approved')}
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleUpdateStatus(app._id, 'rejected')}
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No applications found.</p>
        )}
      </div>
    </div>
  );
}

export default ShelterDashboard;
