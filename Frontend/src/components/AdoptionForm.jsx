// import { useState } from 'react';
// import axios from 'axios';

// function AdoptionForm() {
//     const [petId, setPetId] = useState('');
//     const [shelterId, setShelterId] = useState('');
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       try {
//         const response = await axios.post('/api/adoption/apply', { petId, shelterId }, { headers: { Authorization: `Bearer ${token}` } });
//         alert(response.data.message);
//       } catch (error) {
//         console.error(error);
//         alert('Error submitting adoption application.');
//       }
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Pet ID" value={petId} onChange={(e) => setPetId(e.target.value)} required />
//         <input type="text" placeholder="Shelter ID" value={shelterId} onChange={(e) => setShelterId(e.target.value)} required />
//         <button type="submit">Apply</button>
//       </form>
//     );
//   }
//  export default AdoptionForm;  



// import { useState } from 'react';
// import axios from 'axios';

// function AdoptionForm() {
//     const [petId, setPetId] = useState('');
//     const [shelterId, setShelterId] = useState('');
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       try {
//         const response = await axios.post(
//           '/api/adoption/apply',
//           { petId, shelterId },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         alert(response.data.message);
//       } catch (error) {
//         console.error(error);
//         alert('Error submitting adoption application.');
//       }
//     };
  
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gray-100">
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md border border-gray-200"
//         >
//           <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
//             Adoption Application
//           </h2>
  
//           <div className="mb-4">
//             <label
//               htmlFor="petId"
//               className="block text-gray-600 font-medium mb-2"
//             >
//               Pet ID
//             </label>
//             <input
//               type="text"
//               id="petId"
//               placeholder="Enter Pet ID"
//               value={petId}
//               onChange={(e) => setPetId(e.target.value)}
//               required
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
  
//           <div className="mb-4">
//             <label
//               htmlFor="shelterId"
//               className="block text-gray-600 font-medium mb-2"
//             >
//               Shelter ID
//             </label>
//             <input
//               type="text"
//               id="shelterId"
//               placeholder="Enter Shelter ID"
//               value={shelterId}
//               onChange={(e) => setShelterId(e.target.value)}
//               required
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
  
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
//           >
//             Submit Application
//           </button>
//         </form>
//       </div>
//     );
//   }
  

//   export default AdoptionForm;




// import  { useState} from "react";
// import { useSearchParams } from "react-router-dom";
// import axios from "axios";

// function AdoptionForm() {
//   const [searchParams] = useSearchParams();
//   const [petId, setPetId] = useState(searchParams.get("petId") || "");
//   const [shelterId, setShelterId] = useState(searchParams.get("shelterId") || "");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "/api/adoption/apply",
//         { petId, shelterId },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       alert(response.data.message);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       alert("Error submitting adoption application.");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md border border-gray-200">
//         <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
//           Adoption Form
//         </h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">Pet ID</label>
//             <input
//               type="text"
//               value={petId}
//               onChange={(e) => setPetId(e.target.value)}
//               readOnly
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-gray-100 cursor-not-allowed"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">Shelter ID</label>
//             <input
//               type="text"
//               value={shelterId}
//               onChange={(e) => setShelterId(e.target.value)}
//               readOnly
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-gray-100 cursor-not-allowed"
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-2 rounded-lg font-medium text-white ${
//               loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
//             }`}
//           >
//             {loading ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AdoptionForm;




import  { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AdoptionForm = () => {
  const { petId } = useParams(); // Extract petId from the route
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    reasonForAdoption: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('authToken'); // Retrieve token for authentication
      if (!token) {
        alert('Please log in to submit an application.');
        return;
      }

      const response = await fetch('http://localhost:3006/api//adoption/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          petId,
          reasonForAdoption: formData.reasonForAdoption,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        navigate('/dashboard/adopter'); // Redirect after submission
      } else {
        const errorData = await response.json();
        alert(`Failed to submit the form: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error submitting the adoption form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="container text-center p-4 mt-12 px-auto mx-auto ">
      <h2 className="text-2xl font-bold mb-4">Adoption Form</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="mb-4">
          <label htmlFor="reasonForAdoption" className="block text-sm font-medium mb-2 border-lg border-gray-500">
            Why do you want to adopt this pet?
          </label>
          <textarea
            id="reasonForAdoption"
            name="reasonForAdoption"
            value={formData.reasonForAdoption}
            onChange={handleInputChange}
            className="w-full p-2 border-l-gray-500 rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Additional Message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default AdoptionForm;


