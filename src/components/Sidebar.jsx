
import { Home, Newspaper, Bookmark, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className="hidden md:block fixed z-40 top-16 h-[calc(100vh-4rem)] bg-gray-900 text-gray-100 w-64"
    >
      {/* Header */}
      {/* <div className="flex items-center justify-center p-4 border-b border-gray-800">
        <h1 className="text-xl font-bold text-white">NewsSummarizer</h1>
      </div> */}

      {/* Navigation */}
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
      className={`flex items-center gap-3 px-5 py-3 rounded-lg mx-3 transition-colors ${active ? "bg-indigo-600 text-white" : "hover:bg-gray-800"
        }`}
    >
      {icon}
      {label}
    </Link>
  );
}


