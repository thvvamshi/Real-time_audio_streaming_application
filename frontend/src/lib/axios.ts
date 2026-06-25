const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : `${import.meta.env.VITE_API_URL}/api`;

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});