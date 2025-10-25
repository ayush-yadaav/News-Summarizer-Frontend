import { useState } from "react";
import API from "../api";

export default function SummaryForm() {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [loadingText, setLoadingText] = useState(false);
  const [loadingUrl, setLoadingUrl] = useState(false);
  const [generatedSummary, setGeneratedSummary] = useState("");

  const summarizeText = async () => {
    if (!text.trim()) return alert("Please enter text to summarize!");
    setLoadingText(true);
    try {
      const res = await API.post("/summary", { text });
      setGeneratedSummary(res.data.summary || "Summary generated successfully!");
      setText("");
    } catch {
      alert("Failed to summarize text");
    } finally {
      setLoadingText(false);
    }
  };

  const summarizeUrl = async () => {
    if (!url.trim()) return alert("Please enter a URL to summarize!");
    setLoadingUrl(true);
    try {
      const res = await API.post("/summary", { url });
      setGeneratedSummary(res.data.summary || "Summary generated successfully!");
      setUrl("");
    } catch {
      alert("Failed to summarize URL");
    } finally {
      setLoadingUrl(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Text Summarizer */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          ✍️ Text Summarizer
        </h3>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here..."
          rows={5}
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#C7A6FF] focus:outline-none text-gray-800 placeholder-gray-400"
        />
        <button
          onClick={summarizeText}
          disabled={loadingText}
          className="mt-4 w-full py-3 bg-[#C7A6FF] hover:bg-[#b692ff] text-white rounded-xl font-semibold transition disabled:opacity-50"
        >
          {loadingText ? "Generating..." : "Generate Text Summary"}
        </button>
      </div>

      {/* URL Summarizer */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          🔗 URL Summarizer
        </h3>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste your article URL..."
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#C7A6FF] focus:outline-none text-gray-800 placeholder-gray-400"
        />
        <button
          onClick={summarizeUrl}
          disabled={loadingUrl}
          className="mt-4 w-full py-3 bg-[#C7A6FF] hover:bg-[#b692ff] text-white rounded-xl font-semibold transition disabled:opacity-50"
        >
          {loadingUrl ? "Generating..." : "Generate URL Summary"}
        </button>
      </div>

      {/* Generated Summary */}
      {generatedSummary && (
        <div className="bg-gray-50 mt-6 p-6 rounded-2xl border border-gray-200">
          <h4 className="text-lg font-semibold mb-2 text-[#6D28D9]">
            🧾 Generated Summary
          </h4>
          <p className="text-gray-700 whitespace-pre-wrap">
            {generatedSummary}
          </p>
        </div>
      )}
    </div>
  );
}
