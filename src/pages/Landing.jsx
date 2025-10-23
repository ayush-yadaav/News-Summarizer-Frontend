import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-4 sm:px-6">
      {/* Navbar */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center py-4 max-w-6xl">
        <h1 className="text-xl font-semibold flex gap-2 mb-4 sm:mb-0">
          <span className="w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
            ✦
          </span>
          <span className="text-blue-400">News</span>Summarizer
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            to="/login"
            className="text-gray-300 hover:text-white transition text-center w-full sm:w-auto"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition text-center w-full sm:w-auto"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-12 sm:mt-16 max-w-3xl">
        <div className="bg-gray-800/50 border border-gray-700 px-3 py-1 rounded-full text-sm mb-4 sm:mb-6">
          🔍 AI-Powered News Intelligence
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
          Summarize News,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Stay Informed
          </span>
        </h1>
        <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base px-2 sm:px-0">
          Transform lengthy articles into concise summaries. Save time, stay updated, 
          and never miss what matters with our AI-powered news summarizer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/signup"
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition w-full sm:w-auto text-center"
          >
            Get Started Free
          </Link>
          <Link
            to="/login"
            className="border border-gray-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition w-full sm:w-auto text-center"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 sm:mt-20 max-w-6xl w-full px-2 sm:px-4 mb-12 sm:mb-20">
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
      <footer className="text-gray-500 text-sm pb-6 text-center">
        © {new Date().getFullYear()} NewsSummarizer — All rights reserved.
      </footer>
    </div>
  );
}
