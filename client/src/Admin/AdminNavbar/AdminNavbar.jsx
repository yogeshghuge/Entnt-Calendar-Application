import  { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/adminLogin");
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="bg-blue-800 text-white px-4 py-3 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={toggleSidebar}
          className="block text-white focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white w-64 shadow-lg transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 bg-blue-800 text-white">
          <h2 className="text-xl font-bold">Admin Menu</h2>
        </div>
        <ul className="p-4 space-y-4">
          <li>
            <Link
              to="/admin"
              className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-100"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to={`/admin/company`}
              className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-100"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to={`/admin/settings`}
              className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-100"
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              to={`/admin/reports`}
              className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-100"
            >
              Reports
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLogout}
              className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-100"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default AdminNavbar;