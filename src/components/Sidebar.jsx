import { Home, Newspaper, Bookmark, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden md:block fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 z-40">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-800">🪶 Newslyze</h1>
      </div>

      <nav className="mt-6 space-y-2">
        <SidebarLink
          to="/dashboard"
          icon={<Home size={18} />}
          label="Dashboard"
          location={location}
        />
        <SidebarLink
          to="/news"
          icon={<Newspaper size={18} />}
          label="News"
          location={location}
        />
        <SidebarLink
          to="/saved"
          icon={<Bookmark size={18} />}
          label="Saved"
          location={location}
        />
        <SidebarLink
          to="/profile"
          icon={<User size={18} />}
          label="Profile"
          location={location}
        />
      </nav>
    </aside>
  );
}

function SidebarLink({ to, icon, label, location }) {
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 mx-4 px-4 py-3 rounded-xl transition-all ${
        active
          ? "bg-[#E8D9FF] text-[#6D28D9] font-semibold"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
