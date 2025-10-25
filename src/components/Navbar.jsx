import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const links = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/news", label: "News" },
    { path: "/saved", label: "Saved Summaries" },
    { path: "/profile", label: "Profile" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          >
            ✦ NewsSummarizer
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors duration-300 
                  ${isActive
                    ? "text-blue-600 after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-full after:bg-gradient-to-r from-blue-500 to-purple-600"
                    : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={handleLogout}
              className="ml-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2.5 rounded-lg font-medium shadow-md hover:from-blue-600 hover:to-indigo-600 hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              Logout
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden focus:outline-none p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-3 pt-2 shadow-lg">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition ${isActive
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={handleLogout}
            className="w-full mt-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
