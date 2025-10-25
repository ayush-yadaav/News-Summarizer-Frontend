import { FileText, Link as LinkIcon, LayoutDashboard, Bookmark } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <FileText className="w-7 h-7 text-white" />,
      title: "Text Summarizer",
      description:
        "Paste any text and get instant AI-powered summaries. Perfect for long articles, research papers, and reports.",
    },
    {
      icon: <LinkIcon className="w-7 h-7 text-white" />,
      title: "URL-based Summarizer",
      description:
        "Simply paste a URL and let our AI extract and summarize the content automatically. Save time on every read.",
    },
    {
      icon: <LayoutDashboard className="w-7 h-7 text-white" />,
      title: "Personalized Dashboard",
      description:
        "Track your reading history, analytics, and summarization patterns. Stay organized with smart insights.",
    },
    {
      icon: <Bookmark className="w-7 h-7 text-white" />,
      title: "Saved Summaries Library",
      description:
        "Access all your summaries anytime. Search, organize, and export your summarized content effortlessly.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Powerful Features for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Smarter Reading
          </span>
        </h2>
        <p className="text-gray-500 mb-12">
          Everything you need to transform how you consume information.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 mb-4 mx-auto shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
