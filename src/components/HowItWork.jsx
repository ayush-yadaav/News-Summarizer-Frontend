import { Clipboard, Sparkles, Lightbulb } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <Clipboard className="w-8 h-8 text-white" />,
    title: "Paste a Link or Text",
    description:
      "Copy any article URL or paste your text directly into Newslyze.",
  },
  {
    id: "02",
    icon: <Sparkles className="w-8 h-8 text-white" />,
    title: "Click Summarize",
    description:
      "Our advanced AI analyzes and processes the content in seconds.",
  },
  {
    id: "03",
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    title: "Get Instant Insights",
    description:
      "Receive a concise, accurate summary with key points highlighted.",
  },
];

export default function HowItWork() {
  return (
    <section id="how-it-works" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-3">
        How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Works</span>
      </h2>
      <p className="text-gray-500 mb-14">
        Three simple steps to smarter reading. No signup required to try.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 w-80"
          >
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-40"></div>
                <div className="relative z-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <p className="text-sm text-blue-600 font-semibold mb-2">
                STEP {step.id}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Background step number */}
            <span className="absolute top-8 right-8 text-6xl font-bold text-gray-100 opacity-50 select-none">
              {step.id}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
