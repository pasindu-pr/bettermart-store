import axios from "axios";
import https from "https";

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  httpsAgent: process.env.NODE_ENV === "development" && agent,
});

export { client };
