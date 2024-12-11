
// // import { BrowserRouter as Router } from 'react-router-dom';

// // import Register from './components/Register';
// // import Login from "./components/Login";
// // import PetsList from './components/PetList';
// // import PetForm from './components/PetForm';

// // const App = () => {
// //   return (
    
// //     <Router> {/* Wrapping your app with BrowserRouter */}
// //       <div>
// //         <Register />
// //         <Login/>
// //         <PetForm/>
// //         <PetsList/>
// //          </div>
// //       </Router>
// //   )
// // }

 

// // export default App;

   
    
// import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import PetList from './components/PetList';
// import Register from './components/Register';
// import Login from './components/Login';

// const App = () => {
//   return (
//     <Router>
//       <NavBar /> {/* Include the NavBar */}

//       <div className="mt-20">
//         <Routes>
//           {/* Define routes for each page */}
//           <Route path="/" element={<PetList />} />
          
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login/>} />
          
          
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;





// import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
// import NavBar from './components/NavBar'; // Import NavBar
// import PetList from './components/PetList';
// import Register from './components/Register';
// import Login from './components/Login';
// import PetForm from './components/PetForm';
// import PetDetails from './components/PetDetails';
// import AdoptionForm from './components/AdoptionForm';




// Example other components

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <NavBar />
//         <Routes>
//             {/* Home Route */}
//             <Route path="/" element={<PetList />} />
            
//             {/* Register Route */}
//             <Route path="/register" element={<Register/>} />
            
//             {/* Login Route */}
//             <Route path="/login" element={<Login />} />

//             <Route path="/pets/:petId" element={<PetDetails/>} />
//             <Route path='/add-Pet' element={<PetForm/>}/>
            
//             <Route path="/adopt/:petId" element={<AdoptionForm />} />
       
//           </Routes>
//       </Router>
//     </AuthProvider>

  



    
//   );
  
// }

// export default App;





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
import PetList from "./components/PetList";

const App = () => {
  return (
    <AuthProvider>
       
    <Router>
    <NavBar/>
       <Routes>
          
         <Route path="/" element={<Register/>} />
            
        {/* <Route path="/register" element={<Register/>} />  */}
                        
        <Route path="/login" element={<Login />} />
        
     
        <Route path="/pets/:petId" element={<PetDetails/>} />
       {/* <Route path='/add-Pet' element={<PetForm/>}/>  */}
                        
         {/* <Route path="/adopt/:petId" element={<AdoptionForm />} />    */}
            
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
