import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import API from "../api";
import { Sparkles } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return toast.error("All fields are required");

    setLoading(true);
    try {
      const res = await API.post("/auth/login", { email, password });
      const { token } = res.data;
      localStorage.setItem("token", token);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-100"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl text-white shadow-md">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-1">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Smart Summaries for Smarter Readers
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              
            </div>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium shadow-md hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Log In"}
          </motion.button>
        </form>

        <p className="mt-6 text-gray-500 text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-purple-600 hover:underline">
            Sign up instead
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
