import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
        
          <div className="flex-shrink-0 font-bold text-xl">
             
            <Link to="/">📰 NewsSummarizer</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {[
              { path: "/dashboard", label: "Dashboard" },
              { path: "/news", label: "News" },
              { path: "/saved", label: "Saved Summaries" },
              { path: "/profile", label: "Profile" },
            ].map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 ${
                    isActive ? "bg-gray-700" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={handleLogout}
              className="bg-red-600 px-3 py-2 rounded hover:bg-red-700 transition text-sm font-medium"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="focus:outline-none p-2 rounded-md hover:bg-gray-700"
            >
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 px-2 pt-2 pb-3 space-y-1">
          {[
            { path: "/dashboard", label: "Dashboard" },
            { path: "/news", label: "News" },
            { path: "/saved", label: "Saved Summaries" },
            { path: "/profile", label: "Profile" },
          ].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition font-medium"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
