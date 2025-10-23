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
    <div className="flex items-center justify-center min-h-screen bg-[#0d1117] text-white relative">
      {/* Toast container */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#161b22",
            color: "#fff",
            border: "1px solid #2d3748",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#161b22",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#161b22",
            },
          },
        }}
      />

      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#161b22] p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-800"
      >
        {/* Logo & Title */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center mb-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              ✦
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              NewsSummarizer
            </h1>
          </div>
          <h2 className="text-2xl font-semibold">Create Account</h2>
          <p className="text-gray-400 text-sm mt-1">
            Join us and start summarizing today
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#0d1117] border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#0d1117] border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#0d1117] border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50 shadow-md"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </motion.button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center text-gray-400 text-sm"
        >
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-400 hover:underline hover:text-blue-300 transition"
          >
            Sign in
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
