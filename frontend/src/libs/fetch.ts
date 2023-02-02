import axios from "axios";
import { auth } from "./firebase";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// get firebase auth jwt and add it to axios interceptors
const getFirebaseToken = async () => {
  const token = await auth.currentUser?.getIdToken();
  return token;
};

client.interceptors.request.use(
  async (config: any) => {
    const token = await getFirebaseToken();
    if (token && config) {
      config.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { client };
