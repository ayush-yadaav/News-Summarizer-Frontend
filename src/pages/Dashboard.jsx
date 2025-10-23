import { useState } from "react";
import StatsCard from "../components/StatsCard";
import SummaryForm from "../components/SummaryForm";

export default function Dashboard() {
  const [generatedSummary, setGeneratedSummary] = useState("");

  return (
    // Add md:ml-64 to account for sidebar width (64 = 16rem, same as sidebar w-64)
    <div className="text-gray-100 md:ml-64 p-6">
      <h1 className="text-3xl font-bold mb-1 text-white">Welcome Back!</h1>
      <p className="text-gray-400 mb-6">Here's your summarization dashboard</p>

      {/* Stats Cards */}
      <StatsCard />

      {/* Summarizer Section */}
      <div className="mt-6 bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">🧠 AI Summarizer</h2>
        <SummaryForm onSummaryCreated={(data) => setGeneratedSummary(data.summary)} />
      </div>

      {/* Generated Summary */}
      {generatedSummary && (
        <div className="mt-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold mb-2 text-indigo-400">
            Generated Summary
          </h3>
          <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">
            {generatedSummary}
          </p>
        </div>
      )}
    </div>
  );
}
