import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import API from "../api";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const res = await API.post("/auth/register", { name, email, password });
      toast.success(res.data.message || "Registered successfully 🎉");
      setTimeout(() => navigate("/login"), 1200);
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <Toaster position="top-center" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
              ✦
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              NewsSummarizer
            </h1>
          </div>
          <h2 className="text-2xl font-semibold">Create Account</h2>
          <p className="text-gray-500 text-sm mt-1">
            Join us and start summarizing today
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50 shadow-md"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </motion.button>
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline hover:text-blue-500"
          >
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
