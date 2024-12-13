

// // components/AdoptionForm.jsx

import { useState } from 'react';
import axios from 'axios';

const AdoptionForm = ({ petId, shelterId }) => {
  const [reasonForAdoption, setReasonForAdoption] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      petId: petId,
      shelterId: shelterId,
      reasonForAdoption: reasonForAdoption,
    };

    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post('/api/adoption/apply', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccessMessage(response.data.message);
      setErrorMessage('');
    } catch (error) {
      console.error('Error submitting adoption request:', error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || 'Submission failed.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="adoption-form">
      <h2 className="text-2xl font-bold mb-4">Adopt a Pet</h2>
      
      {errorMessage && <div className="error-message text-red-500 mb-4">{errorMessage}</div>}
      {successMessage && <div className="success-message text-green-500 mb-4">{successMessage}</div>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Reason for Adoption</label>
          <textarea
            value={reasonForAdoption}
            onChange={(e) => setReasonForAdoption(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Why do you want to adopt this pet?"
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default AdoptionForm;
