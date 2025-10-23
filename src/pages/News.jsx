import { useEffect, useState } from "react";
import API from "../api";
import toast, { Toaster } from "react-hot-toast";

export default function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    API.get("/news/top?country=in&category=general")
      .then((res) => setArticles(res.data.articles || res.data))
      .catch(() => alert("Failed to fetch news"))
      .finally(() => setLoading(false));
  }, []);

  const onSummarize = async (article) => {
    try {
      const payload = {
        title: article.title,
        text: article.content || article.description || article.title,
        url: article.url,
      };

      const res = await API.post("/summary", payload); // ✅ This calls your backend route

      toast.success("Summary saved successfully!", {
        duration: 2500,
        style: {
          background: "#121b36",
          color: "#fff",
          borderRadius: "8px",
          border: "1px solid #3b82f6",
        },
        iconTheme: {
          primary: "#6366f1",
          secondary: "#fff",
        },
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to summarize or save article.", {
        style: {
          background: "#121b36",
          color: "#fff",
          borderRadius: "8px",
          border: "1px solid #ef4444",
        },
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0b1224] text-white px-8 py-10 ml-0 md:ml-64 transition-all duration-300">
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Latest News
        </h1>

        {loading ? (
          <p className="text-center text-gray-300">Loading news...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a, idx) => (
              <div
                key={a.url || idx}
                onClick={() => setSelectedArticle(a)}
                className="cursor-pointer bg-[#121b36] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] hover:shadow-blue-800/40 transition-all duration-300"
              >
                <img
                  src={
                    a.image ||
                    "https://via.placeholder.com/600x400.png?text=No+Image"
                  }
                  alt={a.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-blue-400 mb-1">
                    {a.source?.name || "Unknown Source"}
                  </p>
                  <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                    {a.title}
                  </h2>
                  <p className="text-gray-400 text-sm line-clamp-3">
                    {a.description || "No description available."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal for selected article */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 animate-fadeIn">
          <div className="bg-[#121b36] rounded-2xl max-w-3xl w-full overflow-hidden shadow-xl relative bg-center">
            <img
              src={
                selectedArticle.image ||
                "https://via.placeholder.com/800x400.png?text=No+Image"
              }
              alt={selectedArticle.title}
              className="w-full h-64 object-cover "
/>

            <div className="p-6">
              <div className="flex items-center justify-between text-gray-400 text-sm mb-2">
                <span>{selectedArticle.source?.name || "Unknown"}</span>
                <span>
                  {new Date(selectedArticle.publishedAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-white">
                {selectedArticle.title}
              </h2>
              {selectedArticle.url && (
                <a
                  href={selectedArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-6 text-blue-500 font-medium transition-colors duration-300 hover:text-blue-400"
                >
                  🔗 Read full article
                </a>
              )}



              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedArticle.content ||
                  selectedArticle.description ||
                  "No content available for this article."}
              </p>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => onSummarize(selectedArticle)}
                  className="px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90 transition"
                >
                  Summarize This Article
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-gray-400 hover:text-white transition"
                >
                  ✖ Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

