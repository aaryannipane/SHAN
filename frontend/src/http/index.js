import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
<<<<<<< HEAD
  // withCredentials: true,
=======
  withCredentials: true,
>>>>>>> 6b29f00 (added axios)
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

// list of all endpoints

// logins
export const adminLogin = (data) => api.post("/api/login-admin", data);
export const nurseLogin = (data) => api.post("/api/login-nurse", data);

export default api;
