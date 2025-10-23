
import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:8080/api", 
  baseURL: "https://news-summarizer-backend-alpha.vercel.app/api", 
});

// Add JWT token automatically to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
