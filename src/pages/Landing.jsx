import Navbar from "../components/dashNav";
import DemoSection from "../components/DemoSection";
import Features from "../components/Feature";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero";
import HowItWork from "../components/HowItWork.jsx";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <Features/>
      <DemoSection/>
      <HowItWork/>
      <Footer/>
    </div>
  );
}
