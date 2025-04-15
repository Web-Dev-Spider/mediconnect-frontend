import axios from "axios";

const authInstance = axios.create({
  // baseURL: "http://localhost:2000/api/auth",
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/auth`,
});

export default authInstance;
