import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-6">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center py-4 px-6 max-w-6xl">
        
        <h1 className="text-xl font-semibold flex gap-2">
           <span className="w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              ✦
            </span>
          <span className="text-blue-400">News</span>Summarizer
        </h1>
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-gray-300 hover:text-white transition"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-16 max-w-3xl">
        <div className="bg-gray-800/50 border border-gray-700 px-3 py-1 rounded-full text-sm mb-6">
          🔍 AI-Powered News Intelligence
        </div>
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Summarize News,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Stay Informed
          </span>
        </h1>
        <p className="text-gray-400 mb-8">
          Transform lengthy articles into concise summaries. Save time, stay updated, 
          and never miss what matters with our AI-powered news summarizer.
        </p>
        <div className="flex gap-4">
          <Link
            to="/signup"
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition"
          >
            Get Started Free
          </Link>
          <Link
            to="/login"
            className="border border-gray-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20 max-w-6xl w-full px-4 mb-20">
        <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 hover:bg-gray-800 transition">
          <h3 className="text-lg font-semibold mb-2">⚙️ AI-Powered</h3>
          <p className="text-gray-400 text-sm">
            Advanced AI technology summarizes any content in seconds.
          </p>
        </div>
        <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 hover:bg-gray-800 transition">
          <h3 className="text-lg font-semibold mb-2">⚡ Lightning Fast</h3>
          <p className="text-gray-400 text-sm">
            Get instant summaries without waiting.
          </p>
        </div>
        <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 hover:bg-gray-800 transition">
          <h3 className="text-lg font-semibold mb-2">🔒 Secure & Private</h3>
          <p className="text-gray-400 text-sm">
            Your data is encrypted and never shared.
          </p>
        </div>
        <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 hover:bg-gray-800 transition">
          <h3 className="text-lg font-semibold mb-2">📰 Stay Updated</h3>
          <p className="text-gray-400 text-sm">
            Access the latest news from reliable sources.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-gray-500 text-sm pb-6">
        © {new Date().getFullYear()} NewsSummarizer — All rights reserved.
      </footer>
    </div>
  );
}
