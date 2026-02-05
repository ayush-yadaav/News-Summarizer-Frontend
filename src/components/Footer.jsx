import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6 text-sm text-gray-500">
        
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1.5 rounded-full text-white">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-semibold text-gray-900">NewsSummarizer</span>
        </div>

        {/* Center - Links */}
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-900 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Terms
          </a>
          <Link
  to="/contact"
  className="hover:text-gray-900 transition-colors"
>
  Contact
</Link>

        </div>

        {/* Right - Copyright */}
        <p className="text-gray-500">
          © 2025 Newslyze. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
