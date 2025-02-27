import AdminMain from "./AdminMain";
import Sidebar from "../../components/adminsidebar/Sidebar";


const AdminDashboard = () => {

  return (
    <section className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="h-screen flex-1 p-7">
       <AdminMain />
      </div>
    </section>
  );
};

export default AdminDashboard;

