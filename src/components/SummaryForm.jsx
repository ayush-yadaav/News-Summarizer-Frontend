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
    } catch (err) {
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
    } catch (err) {
      alert("Failed to summarize URL");
    } finally {
      setLoadingUrl(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Text Summarizer */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-3 text-white">✍️ Text Summarizer</h3>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here..."
          rows={5}
          className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={summarizeText}
          disabled={loadingText}
          className="mt-4 w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
        >
          {loadingText ? "Generating..." : "Generate Text Summary"}
        </button>
      </div>

      {/* URL Summarizer */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-3 text-white">🔗 URL Summarizer</h3>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste your article URL..."
          className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={summarizeUrl}
          disabled={loadingUrl}
          className="mt-4 w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
        >
          {loadingUrl ? "Generating..." : "Generate URL Summary"}
        </button>
      </div>

      {/* Generated Summary Section */}
      {generatedSummary && (
        <div className="bg-gray-900 mt-6 p-6 rounded-2xl border border-gray-700">
          <h4 className="text-lg font-semibold mb-2 text-indigo-400">🧾 Generated Summary</h4>
          <p className="text-gray-200 whitespace-pre-wrap">{generatedSummary}</p>
        </div>
      )}
    </div>
  );
}
