import { useEffect, useState } from "react";
import { Trash2, Clock } from "lucide-react";
import API from "../api";
import toast, { Toaster } from "react-hot-toast";

export default function SavedSummaries() {
  const [summaries, setSummaries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/summary/saved")
      .then((res) => setSummaries(res.data))
      .catch(() =>
        toast.error("Failed to load summaries", {
          style: {
            background: "#fff",
            color: "#333",
            borderRadius: "10px",
            border: "1px solid #ef4444",
          },
        })
      )
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this summary?")) return;
    try {
      await API.delete(`/summary/${id}`);
      setSummaries((s) => s.filter((x) => x._id !== id));
      toast.success("Summary deleted!", {
        style: {
          background: "#fff",
          color: "#333",
          borderRadius: "10px",
          border: "1px solid #d1d5db",
        },
      });
    } catch {
      toast.error("Failed to delete summary", {
        style: {
          background: "#fff",
          color: "#333",
          borderRadius: "10px",
          border: "1px solid #ef4444",
        },
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800 px-8 py-10 ml-0 md:ml-64 transition-all duration-300">
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Saved Summaries</h1>
        <p className="text-gray-500 mb-10">
          Access your previously saved summaries
        </p>

        {loading ? (
          <p className="text-gray-500 text-center">Loading summaries...</p>
        ) : summaries.length === 0 ? (
          <p className="text-gray-500 text-center">No saved summaries.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {summaries.map((s) => (
              <div
                key={s._id}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 relative"
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">
                    {s.title || "Untitled Summary"}
                  </h2>
                  <button
                    onClick={() => handleDelete(s._id)}
                    className="text-red-500 hover:text-red-600 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {s.summary.length > 220
                    ? s.summary.slice(0, 220) + "..."
                    : s.summary}
                </p>

                <div className="flex items-center text-gray-500 text-sm">
                  <Clock size={14} className="mr-2" />
                  {s.createdAt
                    ? timeAgo(new Date(s.createdAt))
                    : "Unknown time"}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Helper function to show "x days ago"
function timeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];

  for (const i of intervals) {
    const count = Math.floor(seconds / i.seconds);
    if (count >= 1) return `${count} ${i.label}${count > 1 ? "s" : ""} ago`;
  }
  return "just now";
}
