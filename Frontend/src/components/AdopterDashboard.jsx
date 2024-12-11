import PetList from "./PetList";
import PetDetails from "./PetDetails";

const AdopterDashboard = () => {
    return (
      <div className="p-4 m-10">
        <h2 className="text-xl font-bold mt-6">Welcome to the Adopter Dashboard</h2>
        <PetList/>
        <PetDetails/>
      </div>
    );
  };
  
  export default AdopterDashboard;
  