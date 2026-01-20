import axios from "axios";

const BETTER_AUTH_URL = process.env.BETTER_AUTH_URL || "";

const api = axios.create({
  baseURL: BETTER_AUTH_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add interceptors if needed in the future (e.g., for logging or global error handling)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default api;
