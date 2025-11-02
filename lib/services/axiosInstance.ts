import axios from "axios";
import baseURL from "@/lib/constants/baseUrl";
import { getToken, removeToken } from "@/lib/utilities/tokenUtilities";
import { redirect } from "next/navigation";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    console.log("🟢 [REQUEST INTERCEPTOR] Preparing request...");
    console.log("Base URL:", config.baseURL);
    console.log("URL:", config.url);
    console.log("Method:", config.method);
    console.log("Token:", token ? "✅ Found" : "❌ Missing");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    console.log("❌ [REQUEST INTERCEPTOR ERROR]:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("🟢 [RESPONSE INTERCEPTOR] Success:", response.status);
    return response;
  },
  (error) => {
    console.log("❌ [RESPONSE INTERCEPTOR ERROR]");
    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);
    } else {
      console.log("No response object, likely network or config issue");
    }

    if (typeof window !== "undefined" && error.response?.status === 401) {
      removeToken();
      redirect("/auth/login");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
