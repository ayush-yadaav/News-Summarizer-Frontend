// import React from "react";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Landing from "./pages/Landing";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import News from "./pages/News";
// import Profile from "./pages/Profile";
// import SavedSummaries from "./pages/SavedSummaries";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar"; // Import Navbar

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("token");
//   return token ? children : <Navigate to="/login" />;
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Landing />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* Protected Routes */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <div className="min-h-screen flex flex-col">
//                 <Navbar /> {/* Top Navbar */}
//                 <div className="flex flex-1">
//                   <Sidebar /> {/* Sidebar */}
//                   <main className="flex-1 p-6 bg-gray-100">
//                     <Dashboard />
//                   </main>
//                 </div>
//               </div>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/news"
//           element={
//             <ProtectedRoute>
//               <div className="min-h-screen flex flex-col">
//                 <Navbar />
//                 <div className="flex flex-1">
//                   <Sidebar />
//                   <main className="flex-1 p-6 bg-gray-100">
//                     <News />
//                   </main>
//                 </div>
//               </div>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/saved"
//           element={
//             <ProtectedRoute>
//               <div className="min-h-screen flex flex-col">
//                 <Navbar />
//                 <div className="flex flex-1">
//                   <Sidebar />
//                   <main className="flex-1 p-6 bg-gray-100">
//                     <SavedSummaries />
//                   </main>
//                 </div>
//               </div>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/profile"
//           element={
//             <ProtectedRoute>
//               <div className="min-h-screen flex flex-col">
//                 <Navbar />
//                 <div className="flex flex-1">
//                   <Sidebar />
//                   <main className="flex-1 p-6 bg-gray-100">
//                     <Profile />
//                   </main>
//                 </div>
//               </div>
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";
import Profile from "./pages/Profile";
import SavedSummaries from "./pages/SavedSummaries";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Contact from "./pages/Contact";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      {/* ✅ Toast setup */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#1f2937",
            color: "#f9fafb",
            border: "1px solid #374151",
            borderRadius: "0.5rem",
            padding: "12px 16px",
            fontFamily: "Inter, sans-serif",
          },
          success: {
            iconTheme: { primary: "#22c55e", secondary: "#1f2937" },
          },
          error: {
            iconTheme: { primary: "#ef4444", secondary: "#1f2937" },
          },
        }}
      />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />


        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="flex h-screen  text-gray-100">
                <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
                <div className="flex-1 flex flex-col overflow-hidden">
                  <Navbar
                    toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                  />
                  <main className="flex-1 overflow-y-auto p-6 mt-3 ">
                    <Routes>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/news" element={<News />} />
                      <Route path="/saved" element={<SavedSummaries />} />
                      <Route path="/profile" element={<Profile />} />
                    </Routes>
                  </main>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

