import axiosInstance from "./axiosInstance";

interface Methods {
  GET: string;
  POST: string;
  PUT: string;
  PATCH: string;
  DELETE: string;
}

export const RequestMethods: Methods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

interface networkConfig {
  method: string;
  path?: string;
  params?: any;
  requestBody?: any;
}

const Network = async ({ method, path, params, requestBody }: networkConfig) => {
  if (!method || !path) {
    throw new Error("A path and method is required");
  }

  console.log("📡 [NETWORK] Sending request:");
  console.log("➡️ Method:", method);
  console.log("➡️ Path:", path);
  console.log("➡️ Full URL:", axiosInstance.defaults.baseURL + path);
  console.log("➡️ Params:", params);
  console.log("➡️ Request Body:", requestBody);

  try {
    const response = await axiosInstance({
      method,
      url: path,
      params,
      data: requestBody,
    });

    console.log("✅ [NETWORK] Response received:", response.data);
    return response;
  } catch (error: any) {
    console.log("❌ [NETWORK] Request failed!");
    console.log("Error object:", error);
    console.log("Error response:", error.response);
    throw error;
  }
};

export default Network;
