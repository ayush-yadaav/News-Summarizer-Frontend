import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;
    axios
      .get("https://news-summarizer-backend-alpha.vercel.app/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
        setFormData({
          name: res.data.name,
          email: res.data.email,
          password: "",
        });
      })
      .catch(() => toast.error("Failed to load profile"))
      .finally(() => setLoading(false));
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "https://news-summarizer-backend-alpha.vercel.app/api/auth/profile",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setUser(res.data.user);
      setFormData({ ...formData, password: "" });

      toast.success("Profile updated successfully!", {
        style: {
          background: "#f0f9ff",
          color: "#0369a1",
          borderRadius: "8px",
          border: "1px solid #60a5fa",
        },
        iconTheme: { primary: "#3b82f6", secondary: "#fff" },
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update profile", {
        style: {
          background: "#fff1f2",
          color: "#b91c1c",
          borderRadius: "8px",
          border: "1px solid #f87171",
        },
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 text-center text-gray-700 flex items-center justify-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800 px-8 py-10 ml-0 md:ml-64 transition-all duration-300 mt-5">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <div className="flex flex-col items-center mb-6">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              formData.name || "User"
            )}&background=60a5fa&color=fff`}
            alt="Profile Avatar"
            className="w-24 h-24 rounded-full border-2 border-blue-400 shadow-md"
          />
          <h1 className="text-3xl font-bold mt-4 text-gray-900">My Profile</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage your account information
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">New Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Leave blank to keep current password"
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 py-2 rounded-lg font-semibold text-white hover:opacity-90 transition"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
