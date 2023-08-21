import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;
const instance = axios.create({
    baseURL: baseUrl,
  });
  const admin = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-type": "application/json",
    },
  });

  export const GetAll = {
    user: async (path) => {
      const { data } = await admin.get(path);
      return data;
    },
  };