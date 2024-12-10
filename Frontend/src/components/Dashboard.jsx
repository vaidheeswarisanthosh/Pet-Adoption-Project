
// import { useAuth } from "../context/AuthContext";

// const Dashboard = () => {
//   const { user } = useAuth();

//   if (!user) return <p>Please log in to access your dashboard.</p>;

//   if (user.role === "adopter") {
//     return <AdopterDashboard />;
//   } else if (user.role === "shelter") {
//     return <ShelterDashboard />;
//   } else if (user.role === "admin") {
//     return <AdminDashboard />;
//   }

//   return <p>Unknown role.</p>;
// };

// const AdopterDashboard = () => (
//   <div className="p-4">
//     <h1 className="text-2xl font-bold">Adopter Dashboard</h1>
//     <p>View and manage your adoption requests here.</p>
//   </div>
// );

// const ShelterDashboard = () => (
//   <div className="p-4">
//     <h1 className="text-2xl font-bold">Shelter Dashboard</h1>
//     <p>Add pets and view adoption requests.</p>
//   </div>
// );

// const AdminDashboard = () => (
//   <div className="p-4">
//     <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//     <p>Manage the platform and approve adoption requests.</p>
//   </div>
// );

// export default Dashboard;
// import AdopterDashboard from "../components/AdopterDashboard";
// import ShelterDashboard from "../components/ShelterDashboard";
// import AdminDashboard from "../components/AdminDashboard";
// import { useAuth } from "../context/AuthContext";

// const Dashboard = () => {
//   const { user } = useAuth();

//   if (!user) return <p>Loading...</p>;

//   switch (user.role) {
//     case "adopter":
//       return <AdopterDashboard />;
//     case "shelter":
//       return <ShelterDashboard />;
//     case "admin":
//       return <AdminDashboard />;
//     default:
//       return <p>Unauthorized</p>;
//   }
// };

// export default Dashboard;




// src/pages/Dashboard.jsx

import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome to the {user?.role} Dashboard</h1>
      {/* Show role-specific content here */}
      {user?.role === 'admin' && <p>Admin-specific content</p>}
      {user?.role === 'adopter' && <p>Adopter-specific content</p>}
      {user?.role === 'shelter' && <p>Shelter-specific content</p>}
    </div>
  );
};

export default Dashboard;


