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

      await API.post("/summary", payload);

      toast.success("Summary saved successfully!", {
        duration: 2500,
        style: {
          background: "#ffffff",
          color: "#333",
          borderRadius: "10px",
          border: "1px solid #d1d5db",
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
          background: "#ffffff",
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
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Latest News
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading news...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a, idx) => (
              <div
                key={a.url || idx}
                onClick={() => setSelectedArticle(a)}
                className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border border-gray-200"
              >
                <img
                  src={
                    a.image ||
                    "https://via.placeholder.com/600x400.png?text=No+Image"
                  }
                  alt={a.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <p className="text-sm text-indigo-500 mb-1">
                    {a.source?.name || "Unknown Source"}
                  </p>
                  <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                    {a.title}
                  </h2>
                  <p className="text-gray-500 text-sm line-clamp-3">
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
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative">
            <img
              src={
                selectedArticle.image ||
                "https://via.placeholder.com/800x400.png?text=No+Image"
              }
              alt={selectedArticle.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <div className="flex items-center justify-between text-gray-400 text-sm mb-2">
                <span className="text-gray-500">
                  {selectedArticle.source?.name || "Unknown"}
                </span>
                <span className="text-gray-400">
                  {new Date(selectedArticle.publishedAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                {selectedArticle.title}
              </h2>

              {selectedArticle.url && (
                <a
                  href={selectedArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-6 text-indigo-600 font-medium hover:text-indigo-500 transition"
                >
                  🔗 Read full article
                </a>
              )}

              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedArticle.content ||
                  selectedArticle.description ||
                  "No content available for this article."}
              </p>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => onSummarize(selectedArticle)}
                  className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition"
                >
                  Summarize This Article
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-gray-500 hover:text-gray-700 transition"
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
