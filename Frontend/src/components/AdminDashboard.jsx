import { useNavigate } from "react-router-dom";
import PetList from "./PetList"


const AdminDashboard = () => {
  const navigate = useNavigate();
  
    const handleAddPet = () => {
      navigate("/pets/add");
    };
  
  return (
    <div className="container mx-auto p-6 mt-12">
      
        {/* Add Pet Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={handleAddPet}
            className="px-6 py-3 bg-green-500 text-white font-medium rounded-md shadow-md hover:bg-green-600 transition duration-200"
          >
            + Add New Pet
          </button>
        </div>
        <h1 className="text-xl font-bold mt-6">Welcome to the Admin Dashboard</h1>
        <PetList/>
    </div>
  )
}

export default AdminDashboard