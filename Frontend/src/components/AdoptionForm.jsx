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




import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

function AdoptionForm() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [petId, setPetId] = useState(searchParams.get("petId") || "");
  const [shelterId, setShelterId] = useState(searchParams.get("shelterId") || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!petId || !shelterId) {
      alert("Missing adoption details. Please return to the pet page and try again.");
      navigate("/pets"); // Redirect to the pet listing page
    }
  }, [petId, shelterId, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3006/api/adoption/apply",
        { petId, shelterId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert(response.data.message);
      navigate("/success"); // Redirect to success page
    } catch (error) {
      console.error(error);
      alert("Error submitting adoption application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Adoption Form
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Pet ID</label>
            <input
              type="text"
              value={petId}
              readOnly
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Shelter ID</label>
            <input
              type="text"
              value={shelterId}
              readOnly
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-medium text-white ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdoptionForm;
