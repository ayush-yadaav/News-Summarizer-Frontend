import { useState } from "react";
import StatsCard from "../components/StatsCard";
import SummaryForm from "../components/SummaryForm";

export default function Dashboard() {
  const [generatedSummary, setGeneratedSummary] = useState("");
  
  return (
    <div className="md:ml-64 mt-[2%] min-h-screen bg-gray-50 p-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-1 text-gray-900">
        Welcome back, 👋
      </h1>
      <p className="text-gray-500 mb-8">
        Here's your summarization dashboard
      </p>

      <StatsCard />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Summarize Anything</h2>
        <SummaryForm onSummaryCreated={(data) => setGeneratedSummary(data.summary)} />
      </div>

      {generatedSummary && (
        <div className="mt-6 bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold mb-2 text-[#6D28D9]">
            Generated Summary
          </h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {generatedSummary}
          </p>
        </div>
      )}
    </div>
  );
}