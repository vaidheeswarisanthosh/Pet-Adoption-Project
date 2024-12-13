
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AdopterDashboard from "./components/AdopterDashboard";
// import PrivateRoutes from "./components/PrivateRoutes";
import ShelterDashboard from "./components/ShelterDashboard ";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminDashboard from "./components/AdminDashboard";
import NavBar from "./components/NavBar";
// import PetList from "./components/PetList";
import PetDetails from "./components/PetDetails";
// import PetForm from "./components/PetForm";
// import AdoptionForm from "./components/AdoptionForm";
import { AuthProvider } from "./context/AuthContext";
import Unauthorized from "./components/Unauthorized";
import AdoptionForm from "./components/AdoptionForm";
import PetForm from "./components/PetForm";
import EditPet from "./components/EditPet";

const App = () => {
  return (
    <AuthProvider>
       
    <Router>
    <NavBar/>
       <Routes>
          
         <Route path="/" element={<Register/>} />

          <Route path="/add-pet" element={<PetForm/>} />
            
        {/* <Route path="/register" element={<Register/>} />  */}
                        
        <Route path="/login" element={<Login />} />
        
        
        <Route path="/pets/:petId" element={<PetDetails/>} />
      

       <Route path="/pets/add" element={<PetForm />} />
         
       <Route path="/pets/edit/:id" element={<EditPet />} />
       
                        
         <Route path="/adopt/:petId" element={<AdoptionForm/>} />   
            
          <Route
          path="/dashboard/adopter"
          element={
          <AdopterDashboard />
         }
         /> 
        <Route
          path="/dashboard/shelter"
          element={
          <ShelterDashboard />
              }
        /> 

        {/* <Route path="/dashboard/shelter-applications" element={<ShelterApplications />} />  */}
         <Route
          path="/dashboard/admin"
          element={
          <AdminDashboard />
          }
        /> 
       <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
     </Router>
    </AuthProvider>
  );
};

export default App; 
