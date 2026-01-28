const AdminHome = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Users</p>
          <h2 className="text-3xl font-bold">1,245</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Active Mentors</p>
          <h2 className="text-3xl font-bold">312</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Pending Requests</p>
          <h2 className="text-3xl font-bold">47</h2>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
