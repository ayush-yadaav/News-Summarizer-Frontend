import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function Contact() {
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "1bec1e31-f1d4-4099-ab61-5ee9087820e9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message was sent successfully!",
        icon: "success",
        confirmButtonColor: "#3b82f6",
      });
      event.target.reset();
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-gray-900"
    >
      {/* Back Button */}
      <div className="absolute top-6 left-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-1" /> Back to Home
        </button>
      </div>

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Contact Me</h2>
        <p className="text-gray-700 text-lg">Get in touch with me</p>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-xl bg-white border border-gray-200 p-8 rounded-2xl shadow-xl">
        <form className="space-y-6" onSubmit={onSubmit}>
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="font-semibold text-gray-800 block mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
            </div>
            <div className="flex-1">
              <label className="font-semibold text-gray-800 block mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold text-gray-800 block mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label className="font-semibold text-gray-800 block mb-1">Message</label>
            <textarea
              name="message"
              required
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 font-medium rounded-lg text-base px-8 py-3 shadow-md transition-transform hover:scale-[1.02] active:scale-95"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
