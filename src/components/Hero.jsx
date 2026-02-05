// import heroImage from "../assets/hero-image.jpg"; // your image
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 mt-16 md:mt-24">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left">
        <div className="inline-block bg-gray-100 text-sm px-3 py-1 rounded-full mb-4 border border-gray-200 text-gray-700">
          🌐 AI-Powered News Summarization
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Summarize the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            World
          </span>{" "}
          in Seconds.
        </h1>

        <p className="text-gray-600 text-lg mb-8 max-w-xl">
          AI-powered summaries for news, articles, and web content — 
          smarter reading, faster insights, and effortless understanding.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          {/* <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg text-lg font-semibold text-white hover:opacity-90 transition">
            <a href="https://news-summarizer-frontend-sigma.vercel.app/signup">Try  Now →</a>
          </button> */}
          <Link
  to="/signup"
  className="bg-gradient-to-r from-blue-500 to-purple-600
             px-6 py-3 rounded-lg text-lg font-semibold text-white
             hover:opacity-90 transition"
>
  Try Now →
</Link>

          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
            <a href="#demo">See Demo</a>
          </button>
        </div>

      
      </div>

      {/* Right Section (Image) */}
      {/* <div className="flex-1 mt-10 md:mt-0 md:ml-10">
        <img
          src={heroImage}
          alt="AI technology concept"
          className="rounded-2xl shadow-xl w-full max-w-md mx-auto md:mx-0"
        />
      </div> */}
    </section>
  );
}
