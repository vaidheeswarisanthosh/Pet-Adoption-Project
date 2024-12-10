// components/AdoptionApplicationForm.jsx
import  { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const AdoptionApplicationForm = ({ petId, shelterId }) => {
  const [message, setMessage] = useState('');
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3006/api/adoption/apply', {
        petId,
        shelterId,
      }, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      setMessage('Application submitted successfully!');
    } catch (error) {
      setMessage('Failed to submit application.');
    }
  };

  return (
    <div>
      <h2>Submit Adoption Application</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit Application</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdoptionApplicationForm;
