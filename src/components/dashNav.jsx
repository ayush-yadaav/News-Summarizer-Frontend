import { Link } from "react-router-dom";

export default function dashNav() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2 text-sm lg:text-2xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500  to-purple-600">
            NewsSummarizer
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 text-sm">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#demo" className="hover:text-gray-900 transition">Demo</a>
          <a href="#how-it-works" className="hover:text-gray-900 transition">How It Works</a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-gray-600 hover:text-gray-900 transition font-medium"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white lg:px-4 lg:py-2  px-2 py-1 rounded-lg font-medium hover:opacity-90 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
