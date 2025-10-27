import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function DemoSection() {
  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          See It in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Action
          </span>
        </h2>
        <p className="text-gray-500 mb-14">
          Watch how <span className="font-semibold">Newsylyze</span> transforms lengthy content into concise, actionable insights.
        </p>

        {/* Card container */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-md transition duration-300">
          {/* Left side: Input */}
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-gray-800 mb-3">Input</h3>
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-5 text-gray-600 text-sm leading-relaxed">
              The global technology sector continues to evolve at an unprecedented pace, with artificial intelligence leading the charge in transforming industries worldwide. Recent studies indicate that AI adoption has increased by 270% over the past four years, with companies investing billions in machine learning infrastructure...
              <br /><br />
              [Long article content continues for several more paragraphs, covering market trends, expert opinions, statistical data, and future predictions.]
            </div>
          </div>

          {/* Right side: AI Summary */}
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-gray-800">AI Summary</h3>
            </div>
            <div className="bg-white border border-gray-200 shadow-[0_0_25px_-10px_rgba(59,130,246,0.3)] rounded-xl p-5 text-gray-700 text-sm leading-relaxed">
              The rapid growth of artificial intelligence is revolutionizing industries across the globe. Over the last four years, AI adoption has surged by more than 270%, with major companies investing heavily in machine learning infrastructure to maintain a competitive edge. This accelerating trend marks a defining shift in the technology landscape, as AI continues to drive innovation and efficiency at an unprecedented scale.
              <div className="mt-3 text-xs text-gray-400 border-t pt-2">
                ⚡ Summarized in 0.8 seconds • 87% content reduction
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:opacity-90 transition">
            <Link to="/login">Try It Yourself</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
