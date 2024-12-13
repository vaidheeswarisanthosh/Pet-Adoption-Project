import PetList from "./PetList"


const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-6 mt-12">
        <h1 className="text-xl font-bold mt-6">Welcome to the Admin Dashboard</h1>
        <PetList/>
    </div>
  )
}

export default AdminDashboard