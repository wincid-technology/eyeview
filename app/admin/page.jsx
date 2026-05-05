export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {["Books", "E-Books", "Authors", "Services", "Events", "Gallery"].map((item) => (
          <div key={item} className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold">{item}</h2>
            <p className="text-sm text-gray-500">Manage {item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}