import axios from "axios";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: "http://167.86.97.165:83/api", // Base URL of your Swagger API
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor (Optional: for adding authentication tokens)
apiClient.interceptors.request.use(
  (config) => {
    // You can add a token to the headers if needed
    const token = localStorage.getItem("token"); // Example: JWT token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor (Optional: for handling errors globally)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access
      console.error("Unauthorized! Redirecting to login...");
      // Redirect to login page if needed
    }
    return Promise.reject(error);
  }
);

export default apiClient;
