
// import { useNavigate } from "react-router-dom";
// import PetList from "./PetList";

// const ShelterDashboard = () => {
//   const navigate = useNavigate();

//   const handleAddPet = () => {
//     navigate("/pets/add");
//   };

//   return (
//     <div className="shelter-dashboard">
//       <h1 className="text-2xl font-bold mb-4">Shelter Dashboard</h1>
      
//       {/* Add Button */}
//       <button
//         onClick={handleAddPet}
//         className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//       >
//         Add Pet
//       </button>

//       {/* Render pet list or other dashboard content */}
//       <PetList/>
//     </div>
//   );
// };

// export default ShelterDashboard;

  



import { useNavigate } from "react-router-dom";
import PetList from "./PetList";

const ShelterDashboard = () => {
  const navigate = useNavigate();

  const handleAddPet = () => {
    navigate("/pets/add");
  };

  return (
    <div className="shelter-dashboard bg-gray-50 min-h-screen py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-extrabold text-gray-800 mb-6 text-center mt-14">
          Welcome to the Shelter Dashboard
        </h1>

        {/* Add Pet Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={handleAddPet}
            className="px-6 py-3 bg-green-500 text-white font-medium rounded-md shadow-md hover:bg-green-600 transition duration-200"
          >
            + Add New Pet
          </button>
        </div>

        {/* Pet List Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4">Available Pets</h2> */}
          <PetList />
        </div>
      </div>
    </div>
  );
};

export default ShelterDashboard;
